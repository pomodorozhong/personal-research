# Local Inference with Ollama for Private PKM

**Source:** Synthetic research clip · PKM harness POC

[Ollama](https://ollama.com/) runs open-weight models locally and exposes an OpenAI-compatible API at `http://localhost:11434/v1`.

For PKM harnessing, different model roles serve different harness steps:

| Role | Model example | Harness step |
| --- | --- | --- |
| Embeddings | `nomic-embed-text` | Semantic search over vault |
| Chat / synthesis | `qwen2.5:7b`, `llama3.2` | Ingest extraction, query answers |
| Larger ingest | `qwen2.5:14b` | Multi-page wiki compilation |

## Privacy advantage

Vault contents never leave the machine when using local chat and embedding models. This matters for journals, NDA work, health notes, and legal research.

## Hybrid pattern

A common setup: **local embeddings + cloud ingest agent**. Search and retrieval stay on-device; multi-file wiki compilation uses a frontier cloud model for quality.

## Integration with Obsidian

Smart Connections uses local embeddings for related-notes search. Copilot for Obsidian can point at Ollama for vault Q&A chat — both plugins support the OpenAI-compatible endpoint.
