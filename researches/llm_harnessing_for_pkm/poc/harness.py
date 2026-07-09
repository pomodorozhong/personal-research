"""
Minimal LLM PKM harness — proof of concept (no LLM required).

Demonstrates the deterministic parts of the Karpathy compiled-wiki pattern:
  - Vault structure
  - index.md catalog
  - log.md timeline
  - Ingest pipeline (raw -> wiki + index + log)
  - Query pipeline (index-first navigation)
  - Lint pipeline (orphans, dead links, index drift)
"""

from __future__ import annotations

import re
from dataclasses import dataclass, field
from datetime import date
from pathlib import Path
from typing import Iterable


WIKILINK_RE = re.compile(r"\[\[([^\]|]+)(?:\|[^\]]+)?\]\]")
INDEX_ENTRY_RE = re.compile(r"^- \[\[(.+?)\]\] — (.+)$")


@dataclass
class IndexEntry:
    title: str
    summary: str
    category: str


@dataclass
class LintIssue:
    kind: str
    message: str
    path: str | None = None


@dataclass
class WikiVault:
    root: Path

    @property
    def raw_dir(self) -> Path:
        return self.root / "raw"

    @property
    def wiki_dir(self) -> Path:
        return self.root / "wiki"

    @property
    def index_path(self) -> Path:
        return self.root / "index.md"

    @property
    def log_path(self) -> Path:
        return self.root / "log.md"

    def ensure_structure(self) -> None:
        for sub in ("concepts", "entities", "sources", "synthesis", "derived"):
            (self.wiki_dir / sub).mkdir(parents=True, exist_ok=True)
        self.raw_dir.mkdir(parents=True, exist_ok=True)
        if not self.index_path.exists():
            self.index_path.write_text(_DEFAULT_INDEX, encoding="utf-8")
        if not self.log_path.exists():
            self.log_path.write_text(_DEFAULT_LOG, encoding="utf-8")

    def read_index(self) -> list[IndexEntry]:
        text = self.index_path.read_text(encoding="utf-8")
        entries: list[IndexEntry] = []
        category = "uncategorized"
        for line in text.splitlines():
            if line.startswith("## "):
                category = line[3:].strip().lower()
                continue
            m = INDEX_ENTRY_RE.match(line.strip())
            if m:
                entries.append(IndexEntry(title=m.group(1), summary=m.group(2), category=category))
        return entries

    def write_index(self, entries: list[IndexEntry]) -> None:
        by_cat: dict[str, list[IndexEntry]] = {}
        for e in entries:
            by_cat.setdefault(e.category, []).append(e)

        lines = ["# Wiki Index", "", "Catalog of compiled wiki pages.", ""]
        order = ["concepts", "entities", "sources", "synthesis", "derived"]
        seen = set(order)
        for cat in order + [c for c in by_cat if c not in seen]:
            if cat not in by_cat:
                lines.extend([f"## {cat.title()}", ""])
                continue
            lines.extend([f"## {cat.title()}", ""])
            for e in sorted(by_cat[cat], key=lambda x: x.title.lower()):
                lines.append(f"- [[{e.title}]] — {e.summary}")
            lines.append("")
        self.index_path.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")

    def append_log(self, action: str, detail: str, when: date | None = None) -> None:
        when = when or date.today()
        entry = f"\n## [{when.isoformat()}] {action} | {detail}\n"
        with self.log_path.open("a", encoding="utf-8") as f:
            f.write(entry)

    def list_wiki_pages(self) -> list[Path]:
        return sorted(self.wiki_dir.rglob("*.md"))

    def page_title(self, path: Path) -> str:
        return path.stem.replace("-", " ").title()

    def wikilinks_in(self, path: Path) -> set[str]:
        text = path.read_text(encoding="utf-8")
        return {m.group(1).strip() for m in WIKILINK_RE.finditer(text)}

    def ingest_source(
        self,
        raw_filename: str,
        title: str,
        summary: str,
        concepts: Iterable[tuple[str, str]],
        entities: Iterable[tuple[str, str]],
    ) -> list[Path]:
        """
        Simulate LLM ingest: raw source -> wiki pages + index + log.

        In production, an LLM reads raw/ and generates page content.
        Here we accept structured extractions as a stand-in.
        """
        raw_path = self.raw_dir / raw_filename
        if not raw_path.exists():
            raise FileNotFoundError(f"Source not found: {raw_path}")

        created: list[Path] = []
        today = date.today().isoformat()

        source_slug = _slugify(title)
        source_page = self.wiki_dir / "sources" / f"{source_slug}.md"
        source_body = (
            f"---\nsource: raw/{raw_filename}\ningested: {today}\n---\n\n"
            f"# {title}\n\n{summary}\n\n## Key links\n\n"
        )
        concept_links: list[str] = []
        for name, desc in concepts:
            slug = _slugify(name)
            concept_path = self.wiki_dir / "concepts" / f"{slug}.md"
            if concept_path.exists():
                self._append_section(concept_path, f"From [[{title}]]", desc)
            else:
                concept_path.write_text(
                    f"# {name}\n\n{desc}\n\nSources: [[{title}]]\n",
                    encoding="utf-8",
                )
                created.append(concept_path)
            concept_links.append(f"[[{name}]]")
            source_body += f"- {concept_links[-1]}\n"

        for name, desc in entities:
            slug = _slugify(name)
            entity_path = self.wiki_dir / "entities" / f"{slug}.md"
            if not entity_path.exists():
                entity_path.write_text(
                    f"# {name}\n\n{desc}\n\nMentioned in: [[{title}]]\n",
                    encoding="utf-8",
                )
                created.append(entity_path)

        source_body += f"\n## Concepts\n\n" + ", ".join(concept_links) + "\n"
        source_page.write_text(source_body, encoding="utf-8")
        created.append(source_page)

        entries = self.read_index()
        titles = {e.title.lower() for e in entries}
        new_entries = [
            IndexEntry(title=title, summary=summary[:80], category="sources"),
        ]
        for name, desc in concepts:
            if name.lower() not in titles:
                new_entries.append(
                    IndexEntry(title=name, summary=desc[:80], category="concepts")
                )
        for name, desc in entities:
            if name.lower() not in titles:
                new_entries.append(
                    IndexEntry(title=name, summary=desc[:80], category="entities")
                )
        self.write_index(entries + new_entries)
        self.append_log("ingest", title)
        return created

    def query(self, keywords: str, top_k: int = 5) -> list[tuple[IndexEntry, float]]:
        """Index-first query: score index entries by keyword overlap."""
        terms = {t.lower() for t in re.split(r"\W+", keywords) if len(t) > 2}
        scored: list[tuple[IndexEntry, float]] = []
        for entry in self.read_index():
            hay = f"{entry.title} {entry.summary} {entry.category}".lower()
            hits = sum(1 for t in terms if t in hay)
            if hits:
                scored.append((entry, hits / max(len(terms), 1)))
        scored.sort(key=lambda x: x[1], reverse=True)
        return scored[:top_k]

    def resolve_page(self, title: str) -> Path | None:
        slug = _slugify(title)
        for sub in ("concepts", "entities", "sources", "synthesis", "derived"):
            candidate = self.wiki_dir / sub / f"{slug}.md"
            if candidate.exists():
                return candidate
        for path in self.list_wiki_pages():
            if path.stem.replace("-", " ").lower() == title.lower():
                return path
        return None

    def read_pages_for_query(self, keywords: str, top_k: int = 3) -> list[tuple[IndexEntry, str]]:
        results = []
        for entry, score in self.query(keywords, top_k=top_k):
            path = self.resolve_page(entry.title)
            content = path.read_text(encoding="utf-8") if path else "(page not found)"
            results.append((entry, content))
        return results

    def lint(self) -> list[LintIssue]:
        issues: list[LintIssue] = []
        pages = self.list_wiki_pages()
        titles = {self.page_title(p) for p in pages}
        inbound: dict[str, int] = {t: 0 for t in titles}

        index_titles = {e.title for e in self.read_index()}

        for path in pages:
            title = self.page_title(path)
            links = self.wikilinks_in(path)
            for link in links:
                if link not in titles and link not in index_titles:
                    issues.append(
                        LintIssue("dead_link", f"Dead wikilink [[{link}]]", str(path))
                    )
                elif link in inbound:
                    inbound[link] += 1

            if title not in index_titles:
                issues.append(
                    LintIssue("missing_index", f"Page not in index.md", str(path))
                )

        for title, count in inbound.items():
            if count == 0 and title not in {"Index"}:
                rel = next((p for p in pages if self.page_title(p) == title), None)
                if rel:
                    issues.append(
                        LintIssue("orphan", f"No inbound links to [[{title}]]", str(rel))
                    )

        return issues

    def _append_section(self, path: Path, heading: str, body: str) -> None:
        text = path.read_text(encoding="utf-8")
        addition = f"\n\n## {heading}\n\n{body}\n"
        path.write_text(text.rstrip() + addition, encoding="utf-8")


def _slugify(text: str) -> str:
    s = text.lower().strip()
    s = re.sub(r"[^\w\s-]", "", s)
    return re.sub(r"[\s_-]+", "-", s).strip("-")


_DEFAULT_INDEX = """# Wiki Index

Catalog of compiled wiki pages.

## Concepts

## Entities

## Sources

## Synthesis

## Derived
"""

_DEFAULT_LOG = """# Wiki Log

Append-only timeline of ingests, queries, and lint passes.
"""
