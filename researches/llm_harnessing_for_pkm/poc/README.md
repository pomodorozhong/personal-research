# LLM PKM Harness POC

Minimal proof of concept for the compiled-wiki harness pattern: vault structure, ingest, query, and lint — no LLM API required.

## Prerequisites

- [uv](https://docs.astral.sh/uv/) installed

## Setup

```bash
cd researches/llm_harnessing_for_pkm/poc
uv sync
```

This creates `.venv/` and installs Jupyter + ipykernel from the lockfile.

## Run the notebook

```bash
uv run jupyter notebook harness_poc.ipynb
```

Or register the kernel once, then open the notebook in VS Code / Cursor:

```bash
uv run python -m ipykernel install --user --name llm-pkm-harness-poc
```

## Run harness module directly

```bash
uv run python -c "from harness import WikiVault; print('OK')"
```

## Files

| File | Purpose |
| --- | --- |
| `harness.py` | Stdlib harness module (index, ingest, query, lint) |
| `harness_poc.ipynb` | Interactive walkthrough |
| `pyproject.toml` | Project metadata and dependencies (uv) |
| `uv.lock` | Locked dependency versions |

See also: [Research index](../README.md) | [Obsidian setup guide](../obsidian_setup_guide.md) | [LLM Wiki pattern](../llm_wiki_pattern.md)
