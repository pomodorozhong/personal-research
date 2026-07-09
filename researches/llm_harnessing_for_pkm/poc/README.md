# LLM PKM Harness POC

End-to-end proof of concept for the compiled-wiki harness pattern using **real Ollama LLM and embedding calls** — ingest extraction, semantic retrieval, and answer synthesis.

All implementation lives in [`harness_poc.ipynb`](./harness_poc.ipynb) (no separate Python module).

## Prerequisites

1. [Ollama](https://ollama.com/) installed and running (`ollama serve`)
2. Models pulled:

```bash
ollama pull nomic-embed-text   # embeddings
ollama pull qwen2.5:7b         # chat / ingest extraction (or llama3.2)
```

## Setup

```bash
cd researches/llm_harnessing_for_pkm/poc
uv sync
```

## Run

```bash
uv run jupyter notebook harness_poc.ipynb
```

Run all cells top to bottom. The notebook creates `sample_vault/`, ingests a raw article via LLM, indexes embeddings, queries semantically, and lints the wiki.

## What the notebook implements

| Step | Mechanism |
| --- | --- |
| **Ingest** | Ollama chat → JSON extraction → wiki pages + `index.md` + `log.md` |
| **Embed** | Ollama `nomic-embed-text` → cached vectors in `.embeddings.json` |
| **Query** | Cosine similarity over embeddings → Ollama chat synthesis with citations |
| **Lint** | Deterministic wikilink / index checks (no model) |

See also: [Research index](../README.md) | [How to use local models](../local_models_how.md)
