# Notable Local Models You Can Run on a 16GB M2 MacBook Pro

**Window:** mid-May → mid-July 2026  
**Hardware target:** Apple **M2 MacBook Pro, 16 GB unified memory** (Metal / MLX / llama.cpp / Ollama — **no CUDA**)  
**Source:** [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/), filtered to releases that actually fit this machine  
**Compiled:** 2026-07-16

## Your real memory budget

16 GB unified ≠ 16 GB for the model.

- macOS + browser + IDE typically leave **~8–11 GB** usable for weights + KV cache.
- Metal’s default GPU working set on ≤32–64 GB Macs is often ~**10.5 GB**.
- Prefer GGUF/MLX quants whose **on-disk size is ≤ ~8 GB**; keep context **4K–8K** unless you’ve measured headroom.
- If a file is **>11 GB**, expect swap and sluggish single-digit tok/s — treat those as “does not run” for daily use.

Everything larger discussed on LocalLLaMA in this period (GLM-5.2, MiniMax-M3, LongCat-2.0, Inkling, Hy3, Leanstral-119B, Puzzle-75B, Laguna XS/M, Ornith-35B, North Mini Code, Qwen3.6-27B, etc.) is **out of scope here**.

---

## Start here

| Role | Model | Quant | Footprint | Notes |
| --- | --- | --- | --- | --- |
| **Default coder / chat** | **Ornith-1.0-9B** | Q4_K_M or MLX MXFP4 | ~**5.6 GB** | Best overall pick from this window for 16 GB |
| **Higher quality same size** | Ornith-1.0-9B | Q5–Q6 or MXFP8 | ~**6.5–9.5 GB** | Leave less room for long context |
| **Docs / OCR** | Unlimited-OCR 3.3B or OvisOCR2 0.8B | Q4 / FP16 | ~**1–4 GB** | Specialist, not a chat model |
| **Tiny agent / tools** | Agents-A1-4B | Q4 | ~**2.5–3.5 GB** | Horizon-scaling small agent model |

Suggested pull (Ollama-style): Ornith 9B Q4, then add an OCR model if you parse PDFs/scans locally.

---

## Chat & coding (fits comfortably)

### Ornith-1.0-9B (DeepReinforce) — top pick

Released ~2026-06-25 as part of the Ornith-1.0 family (the 35B MoE does **not** fit; use the **9B dense** only).

| | |
| --- | --- |
| **Size** | ~9B dense |
| **License** | MIT |
| **CUDA?** | No — use **Metal (llama.cpp)** or **MLX** |
| **Memory** | Q4_K_M ~**5.6 GB** · Q5 ~**6.5 GB** · Q6 ~**7.4 GB** · Q8 ~**9.5 GB** (tight) · BF16 ~18 GB (**no**) |
| **Context** | Native up to 256K, but on 16 GB stay at **≤8K** for Q4–Q6; Q8 prefer **≤4–8K** |
| **Throughput** | Bandwidth-bound. Community MLX/oMLX on faster Silicon often **~45–60 tok/s** short context; expect **noticeably less on M2** (often mid/high tens at best for Q4, lower as context grows) |
| **Why LocalLLaMA cared** | Agentic coding focus with a size that actually lands on laptops |

**How:** Ollama `ornith` / community `…/ornith-9b:Q4_K_M`, LM Studio GGUF, or MLX MXFP4 for native Apple Silicon.

---

### Amalia 9B (Portugal)

| | |
| --- | --- |
| **When** | ~2026-07-03 |
| **Size** | 9B |
| **CUDA?** | No — Metal/MLX/llama.cpp |
| **Memory** | Same class as other 9B: Q4 ~**5–6 GB**, Q5/Q6 ~**6–8 GB** |
| **Throughput** | Typical 7–9B Apple Silicon band (tens of tok/s at short context) |
| **Why it mattered** | National open LLM; practical general chat on a laptop |

---

### Agents-A1-4B (InternScience)

| | |
| --- | --- |
| **When** | Late June / mid-July threads (+ GGUFs) |
| **Size** | **4B** (horizon-scaling / agent-oriented; discussed beside Qwen3.7-4B lineage) |
| **CUDA?** | No |
| **Memory** | Q4 roughly **~2.5–3.5 GB** — very safe on 16 GB |
| **Throughput** | Usually faster than 9B on the same Mac (often well into tens of tok/s) |
| **Why it mattered** | Small model aimed at longer-horizon agent loops without a huge footprint |

HF search: [InternScience Agents-A1](https://huggingface.co/InternScience/models?search=a1-4b)

---

### Gemma 4 small variants (Google) — careful

Full **gemma-4-12B / 31B** discussion was huge on LocalLLaMA, but on **16 GB** only the **small end** is honest:

| Variant | Fit on 16 GB M2? |
| --- | --- |
| Gemma 4 **E2B / E4B** (if using those sizes) | Yes at Q4/Q5 |
| **gemma-4-12B** Q4 | Borderline — weights alone can use most of Metal’s ~10.5 GB; use **short context only** or skip |
| 26B-A4B / 31B / DiffusionGemma large | **No** for daily use |

Prefer vision/audio demos on E2B/E4B or wait until you have more RAM. Multimodal KV grows fast.

---

### Qwen “small” stack (still the common generalist)

Qwen3.6-**27B** was the mid-size star this period — **too big** here. What still works:

| | |
| --- | --- |
| **Fits** | Qwen ~**7–9B** (and similar MoE-tiny / 4B agents) at Q4–Q6 |
| **Memory** | ~**4.5–8 GB** depending on quant |
| **Throughput** | Often **usable interactive** on M2 at Q4; MTP helps where the GGUF includes an MTP head and your llama.cpp is new enough |
| **CUDA?** | No |

Keep 27B/35B-A3B for a future 32GB+ machine.

---

## Specialists (easy wins on 16 GB)

### Unlimited-OCR 3.3B

| | |
| --- | --- |
| **When / buzz** | ~2026-06-24 (~990 upvotes) |
| **Job** | Multilingual one-shot OCR / document parsing |
| **Memory** | Few GB (Q4/Q5 comfortable) |
| **CUDA?** | No |
| **Throughput** | Image→text, not chat tok/s — fine on M2 for page/doc batches |

### OvisOCR2 0.8B

| | |
| --- | --- |
| **When** | ~2026-07-15 |
| **Job** | Tiny end-to-end doc VLM (OmniDocBench-class claims) |
| **Memory** | Often **&lt;2 GB** |
| **CUDA?** | No for local llama.cpp/MLX paths; some recipes mention vLLM (Linux/CUDA) — on Mac prefer Apple-native runtimes if available |
| **Why it mattered** | Strong OCR quality at a size a MacBook barely notices |

### Inflect-Nano (~4.6M) & Gepard 0.6B TTS

| Model | Job | Fit |
| --- | --- | --- |
| **Inflect-Nano** | Ultra-tiny TTS | CPU-easy; trivial on M2 |
| **Gepard 0.6B** | Streaming TTS (~20× realtime / ~50 ms TTFA claimed in threads) | Tiny; check whether your Mac runtime supports the stack (some demos are vLLM-centric) |

### Local Image → 3D (&lt;2 GB RAM, &lt;20s)

| | |
| --- | --- |
| **When** | ~2026-07-12 (~820 upvotes) |
| **Job** | Image-to-3D on Apple Silicon / iPhone class hardware |
| **Memory** | **&lt;2 GB** claimed |
| **CUDA?** | No — Apple Silicon was the point of the demo |

---

## Quant / runtime cheat sheet (M2 16 GB)

| On-disk size | Verdict |
| --- | --- |
| ≤ 6 GB | Comfortable (Q4 7–9B, most specialists) |
| 6–9 GB | OK with **4K–8K** context; close other apps |
| 9–11 GB | Fragile; Q8 9B territory — short context only |
| &gt; 11 GB | Skip for daily use on this machine |

**Preferred stack on your Mac**
1. **Ollama** or **LM Studio** for GGUF (Metal)
2. **MLX / mlx-lm** when there’s an MLX quant (often best tok/s on Apple Silicon)
3. Avoid CUDA-only formats (NVFP4 server recipes, multi-GPU vLLM guides)

**Context discipline:** every doubling of context grows KV cache. On 16 GB, long “256K native” windows are marketing, not a plan.

---

## What LocalLLaMA hyped that you should ignore (for now)

| Model | Why it doesn’t fit 16 GB M2 |
| --- | --- |
| Ornith-1.0-**35B**, North Mini Code, Laguna XS 2.1 | ~20 GB Q4 |
| Qwen3.6-**27B**, Leanstral-119B, Puzzle-75B | Mid/large — needs 24–80 GB class |
| Hy3, GigaChat3.5, MiniMax-M3, GLM-5.2, LongCat-2.0, Inkling | Hundreds of GB to multi-TB |

---

## Method / caveats

- Shortlist comes from the same r/LocalLLaMA May–Jul 2026 survey, then cut to models whose published GGUF/MLX footprints fit **~8–11 GB usable** on a 16 GB M2.
- Reddit.com blocked direct scrapes here; archive paging helper: [`fetch_localllama_posts.py`](./fetch_localllama_posts.py)

```bash
python3 fetch_localllama_posts.py \
  --after 2026-05-16 --before 2026-07-17 \
  --new-model-only --min-score 100 \
  --out posts.jsonl
```

- Tok/s figures are order-of-magnitude and stack-specific; M2 is slower than M3/M4 at the same quant.
- “Fits” means interactive use without living in swap — not “technically loads with 1 tok/s.”
