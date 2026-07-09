# Retrieval-Augmented Generation vs Compiled Wiki

**Source:** Synthetic research clip · PKM harness POC

RAG (Retrieval-Augmented Generation) retrieves document chunks at query time and injects them into an LLM prompt. NotebookLM, ChatGPT file uploads, and most vector-database assistants work this way.

The core limitation: the LLM rediscovers knowledge from scratch on every question. There is no accumulation. Ask a subtle question requiring synthesis across five documents, and the model must find and piece together fragments every time.

## The compiled wiki alternative

Andrej Karpathy's LLM Wiki pattern shifts synthesis to **ingest time**. When you add a source, the LLM reads it, extracts key information, and integrates it into a persistent markdown wiki — updating concept pages, entity pages, and cross-references.

Knowledge is compiled once and kept current, not re-derived on every query.

## When RAG still helps

At scale (~200+ wiki pages), compiled wikis add hybrid search (BM25 + embeddings + reranking) for navigation. Tools like qmd provide local semantic search without sending vault contents to the cloud.

## Key entities

- **Karpathy** — proposed the compiled wiki pattern (2026)
- **qmd** — local hybrid search for markdown wikis
