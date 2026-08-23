# Local Model Reports

Notes and shortlists for local models (Metal / MLX / llama.cpp / Ollama / audio pipelines), aimed at machines without a discrete GPU.

## Reports

| Report | Window | Focus |
| --- | --- | --- |
| [report-2026-07-17.md](./report-2026-07-17.md) | mid-May → mid-July 2026 | LLMs that fit a 16 GB M2 MacBook Pro, vs Gemma 4 12B Unified |
| [report-2026-07-27-music.md](./report-2026-07-27-music.md) | as of 2026-07-27 | Local **music generation**: clip vs song, streaming, VRAM, Mac fit, vs LLMs; cites r/LocalLLaMA & r/StableDiffusion |
| [report-2026-08-02-video-ai-news.md](./report-2026-08-02-video-ai-news.md) | video [OrcBSpADCGk](https://youtu.be/OrcBSpADCGk) (as of 2026-08-02) | Runnability on 16 GB M2 for every model named in that AI-news video; deep dive on CrisperWhisper + Instella |
| [report-2026-08-16-video-ai-news.md](./report-2026-08-16-video-ai-news.md) | video [62HSUsS0ypo](https://www.youtube.com/watch?v=62HSUsS0ypo) (as of 2026-08-16) | Runnability on 16 GB M2 for every model named in that AI-news video; IndexTTS 2.5 + Qwen3.8-27B vs the rest |
| [report-2026-08-23-video-ai-news.md](./report-2026-08-23-video-ai-news.md) | video [rQ4yX5qNYdY](https://youtu.be/rQ4yX5qNYdY) (as of 2026-08-23) | Runnability on 16 GB M2 for every model named in that AI-news video; Audio8-TTS 0.1B + Ornith 1.5 9B vs the rest |

## Scripts

| Script | Purpose |
| --- | --- |
| [`scripts/fetch_localllama_posts.py`](./scripts/fetch_localllama_posts.py) | Fetch r/LocalLLaMA posts via the Arctic Shift archive API |
