# Karpathy LLM Wiki Pattern

**Source:** Synthetic research clip · PKM harness POC

The LLM Wiki pattern defines three layers for personal knowledge bases:

1. **`raw/`** — immutable sources (articles, PDFs, transcripts). Human adds; LLM reads only.
2. **`wiki/`** — LLM-maintained markdown (concept pages, entity pages, synthesis, derived answers).
3. **Schema** — `AGENTS.md` or `CLAUDE.md` defining structure, workflows, and rules.

## Core operations

### Ingest

Drop a source into `raw/`, tell the agent to process it. A single source may touch 8–15 wiki pages: summary, concept updates, entity updates, index refresh, log entry.

### Query

Ask questions against the wiki. The agent reads `index.md` first, then relevant pages, then synthesizes an answer. Good answers can be filed back into `wiki/derived/`.

### Lint

Periodic health checks: contradictions, orphan pages, dead wikilinks, stale claims, missing concept pages.

## Special files

- **`index.md`** — catalog of all wiki pages with one-line summaries
- **`log.md`** — append-only timeline of ingests, queries, lint passes

> Obsidian is the IDE; the LLM is the programmer; the wiki is the codebase.
