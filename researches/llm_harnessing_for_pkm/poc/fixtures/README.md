# POC fixture data

Sample raw sources for [`harness_poc.ipynb`](../harness_poc.ipynb). These mimic clipped articles dropped into a vault's `raw/` folder.

The notebook copies `fixtures/raw/` into `sample_vault/raw/` on each run, then ingests each file via Ollama.

| File | Topic |
| --- | --- |
| `rag-vs-compiled-wiki.md` | RAG vs ingest-time compiled wiki |
| `karpathy-llm-wiki-pattern.md` | Karpathy LLM Wiki architecture |
| `ollama-local-inference.md` | Local Ollama models for private PKM |
