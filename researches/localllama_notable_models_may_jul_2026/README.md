# Notable New Local Models (r/LocalLLaMA)

**Window:** mid-May → mid-July 2026  
**Source:** [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/) (New Model / News / Discussion threads), cross-checked against Hugging Face cards and vendor blogs  
**Compiled:** 2026-07-16

This note summarizes the releases that got the most meaningful attention on LocalLLaMA in the last ~2 months — not every GGUF drop, but models that changed what people actually run, or moved the open-weights frontier.

VRAM/RAM numbers below are **weights + typical short-context runtime**, unless noted. Long context (256K–1M) adds substantial KV-cache memory on top.

---

## Quick pick (by hardware)

| Your hardware | Models that fit well |
| --- | --- |
| 8–16 GB VRAM | Ornith-1.0-9B Q4; Qwen3.x tiny MoEs; small OCR/TTS specialists |
| 24 GB (3090/4090) | **Ornith-1.0-35B** Q4/Q5; **Laguna XS 2.1** Q4; **North Mini Code** W4; Qwen3.6-27B Q4–Q5 |
| 36–64 GB unified / 48 GB GPU | Laguna XS 2.1 higher quants; Qwen3.6-27B Q8; gemma-4-12B / 26B-A4B |
| 72–128 GB (80GB GPU / Mac 128+) | **Leanstral-1.5-119B-A6B** Q4; Hy3 aggressive GGUF; Puzzle-75B-A9B |
| Multi-GPU / 256GB+ workstation | Hy3 Q4; GigaChat3.5 GGUF; Laguna M.1 |
| Cluster (≥400 GB / 8×H200-class) | **GLM-5.2**, **MiniMax-M3**, **LongCat-2.0**, **Inkling** |

---

## Flagship open weights (datacenter / workstation)

### 1. GLM-5.2 (Z.ai) — community “must try if you can host it”

| | |
| --- | --- |
| **When / buzz** | Weights ~2026-06-16; multiple 800–1300+ upvote LocalLLaMA threads |
| **Size** | ~743–753B MoE, ~39–40B active |
| **Context** | Native **1M** tokens |
| **License** | MIT |
| **CUDA?** | Yes for official FP8/BF16 serving (vLLM ≥0.23, SGLang). GGUF path via Unsloth/llama.cpp on huge RAM boxes |
| **Memory** | Official FP8 recipe: **8×H200 / 8×H20**. Community 2-bit GGUF ≈ **~240 GB** total memory; Q4-class often **~370–475 GB** |
| **Throughput** | Strong with MTP (draft length extended vs 5.1). Exact tok/s is node-dependent; expect cluster-class decode, not laptop speeds |
| **Why it mattered** | First open-weights model many on LocalLLaMA treated as “frontier coding” peer to closed models (Terminal-Bench 2.1 ~81% claimed) |

HF: [zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)

---

### 2. MiniMax-M3 — multimodal + MSA long context

| | |
| --- | --- |
| **When / buzz** | Announced ~2026-06-01; weights ~2026-06-12 (~630 upvotes) |
| **Size** | ~**428B** total / ~**23B** active MoE |
| **Context** | **1M** with MiniMax Sparse Attention (MSA) |
| **License** | MiniMax Community License (open **weights**, not libre OSS — LocalLLaMA often flags this) |
| **CUDA?** | Prefer **vLLM / SGLang** on CUDA (or AMD Instinct day-0 paths). CUDA strongly recommended for production speed |
| **Memory** | BF16 weights ~**850+ GB** on disk. FP8 serve ~**230–440 GB** aggregated VRAM depending on recipe. Practical GGUF: IQ2 ≈ **~143 GB**, Q4 ≈ **~220–265 GB** (+ KV at long context) |
| **Throughput** | Community note: ~**19 tok/s** TG reported on 8–16× MI50-style rigs; MSA claims large prefill/decode gains vs M2 at 1M |
| **Why it mattered** | Coding/agent scores + true million-token open weights in one package |

HF: [MiniMaxAI/MiniMax-M3](https://huggingface.co/MiniMaxAI/MiniMax-M3)

---

### 3. LongCat-2.0 (Meituan) — 1.6T MIT coding MoE

| | |
| --- | --- |
| **When / buzz** | Intro ~2026-06-29; MIT weights ~2026-07-05 (~400+ upvotes each) |
| **Size** | **1.6T** total / ~**48B** active |
| **Context** | **1M** (LongCat Sparse Attention) |
| **License** | **MIT** |
| **CUDA?** | Official path: **SGLang** on GPU (also NPU via SGLang-FluentLLM). Not a single-GPU consumer model |
| **Memory** | Recommended FP8: **16×H20**. Even 2–3-bit community quants still land in the **hundreds of GB** (e.g. MLX 3-bit ≈ **717 GB**) |
| **Throughput** | Cluster / API territory; self-host only if you already have Ascend/Hopper-dense racks |
| **Why it mattered** | Largest fully MIT coding MoE many locals tracked; trained entirely on domestic AI ASIC pods |

HF: [meituan-longcat/LongCat-2.0](https://huggingface.co/meituan-longcat/LongCat-2.0)

---

### 4. Inkling (Thinking Machines Lab) — brand-new open multimodal

| | |
| --- | --- |
| **When / buzz** | **2026-07-15** (hot on New Model flair as of writing) |
| **Size** | **975B** total / **41B** active; preview sibling Inkling-Small 276B/12B active (weights tease only) |
| **Context** | up to **1M** |
| **Modalities** | Text + image + audio **in** → text out |
| **CUDA?** | **Yes** for full checkpoints. BF16 needs Hopper/Blackwell clusters; **NVFP4 needs Blackwell (SM100+)** for W4A4 |
| **Memory** | BF16 ≥ **~2 TB** aggregated VRAM (8×B300 or 16×H200). NVFP4 ≥ **~600 GB** (4×B300 W4A4 or 8×H200 W4A16). Extreme GGUF (Unsloth 1-bit) advertised down toward ~**290 GB** combined RAM/VRAM |
| **Throughput** | Ships with speculative-decoding helpers; numbers not settled on LocalLLaMA yet |
| **Why it mattered** | Mira Murati lab’s first open-weights base; controllable thinking effort + day-0 vLLM/SGLang/transformers |

Blog: [thinkingmachines.ai/news/introducing-inkling](https://thinkingmachines.ai/news/introducing-inkling/)

---

### 5. Hy3 (Tencent) — Apache 2.0 “flagship that GGUF actually reached”

| | |
| --- | --- |
| **When / buzz** | ~2026-07-06 (~410 upvotes); big demo threads ~2026-07-07 |
| **Size** | **295B** total / **21B** active (+ ~3.8B MTP head) |
| **Context** | Official **256K**; community GGUF variants claim **1M** with YaRN |
| **License** | **Apache 2.0** |
| **CUDA?** | Official **vLLM** on CUDA (8×H20-class). Community **llama.cpp GGUF** (often PR-branch for `hy_v3`) also runs Metal / Vulkan |
| **Memory** | IQ1 ≈ **~62–92 GB**; IQ2/Q2 ≈ **~100–117 GB**; Q4 ≈ **~166–185 GB**. Comfortable “fully resident” on **128 GB** unified boxes at ~IQ3-ish recipes (~107–117 GiB working set) |
| **Throughput** | Local: ~**17–25 tok/s** decode on 128 GB Strix Halo / Apple Silicon (IQ2–IQ3). Production FP8: peak ~**1344 tok/s** output on 4×GB300 TP4 (batch), mean ~**934 tok/s** in Tencent/vLLM recipe. MTP can add ~**+40%** decode on llama.cpp when acceptance is high |
| **Why it mattered** | Best “big MoE you can download tonight” energy — Apache license + rapid GGUF ecosystem |

HF: [tencent/Hy3](https://huggingface.co/tencent/Hy3)

---

### 6. GigaChat3.5-432B-A28B (Sber / ai-sage)

| | |
| --- | --- |
| **When / buzz** | ~2026-07-06 (~245 upvotes) — pitched with **day-0 GGUF** |
| **Size** | **432B** / **28B** active |
| **CUDA?** | llama.cpp GGUF (PR build initially); CUDA Metal/ROCm as backends allow |
| **Memory** | 432B MoE → expect **~120–220+ GB** depending on quant (same class as other ~400B MoEs) |
| **Why it mattered** | Rare “vendor GGUF on day 0” for a >400B MoE |

HF: [ai-sage/GigaChat3.5-432B-A28B](https://huggingface.co/ai-sage/GigaChat3.5-432B-A28B)

---

## Workstation / prosumer sweet spots

### 7. Leanstral-1.5-119B-A6B (Mistral) — formal proof + verification agent

| | |
| --- | --- |
| **When / buzz** | ~2026-07-03 (~630 upvotes) |
| **Size** | **119B** MoE / ~**6–6.5B** active (Mistral Small 4 line) |
| **Context** | **256K**; multimodal text+vision |
| **License** | **Apache 2.0** |
| **CUDA?** | Optional but ideal. Fits best on **≥80 GB** NVIDIA/AMD or **≥128–256 GB** Apple unified memory |
| **Memory (GGUF)** | Q2 ~**46 GB** · Q4_K_M ~**72–73 GB** · Q5 ~**86 GB** · Q8 ~**127 GB** · BF16 ~**238 GB** |
| **Throughput** | Est. ~**17 tok/s** on Mac Studio M3 Ultra 256GB (Q4). ~**80+ tok/s** when fully resident on H200/GH200-class. Single 24 GB card: offload territory (~few tok/s) |
| **Why it mattered** | Niche but sharp: Lean 4 proof engineering, saturating miniF2F / strong PutnamBench claims |

HF: [mistralai/Leanstral-1.5-119B-A6B](https://huggingface.co/mistralai/Leanstral-1.5-119B-A6B)

---

### 8. Nemotron-Labs-3-Puzzle-75B-A9B (NVIDIA) — best “multi-24GB” MoE shape

| | |
| --- | --- |
| **When / buzz** | ~2026-07-07; standout throughput post ~2026-07-09 |
| **Size** | **75.3B** total / **9.3B** active (compressed from Nemotron-3-Super 120B-A12B) |
| **Context** | up to **1M** (default card often 256K) |
| **License** | NVIDIA open model license (check card) |
| **CUDA?** | **Required** for intended speed. FP8 → Hopper; **NVFP4 → Blackwell** (Ampere can run NVFP4 via newer vLLM Marlin fallbacks with caveats) |
| **Memory** | NVFP4 weights ~**44.5 GB** (vs ~70 GB for Super). LocalLLaMA report: **3×RTX 3090** pipeline-parallel NVFP4 |
| **Throughput (community)** | **~65 tok/s** single-stream / **~132 tok/s** across 3 streams; **~1949 tok/s** prefill — ~500 W wall for the box. Paper: up to **~2.03×** server throughput vs Super at 100 tok/s/user target |
| **Why it mattered** | Fills the underserved “70–80B total / ~10B active” slot that multi-24GB gaming rigs actually want |

HF: [nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-BF16](https://huggingface.co/nvidia/NVIDIA-Nemotron-Labs-3-Puzzle-75B-A9B-BF16) (+ FP8 / NVFP4)

---

### 9. Laguna M.1 + Laguna XS 2.1 (Poolside) — agentic coding ladder

**Laguna M.1** (~2026-06-18): **225B / 23B** active MoE for long-horizon coding. Cluster / multi-GPU class (~same tier as MiniMax active size).

**Laguna XS 2.1** (~2026-07-02): the local hero of the pair.

| Laguna XS 2.1 | |
| --- | --- |
| **Size** | **33B** total / **3B** active |
| **Context** | **256K–262K** |
| **License** | **OpenMDW-1.1** |
| **CUDA?** | Optional. Runs on **CUDA (vLLM/SGLang/TRT-LLM)**, **Metal/MLX**, and **llama.cpp** |
| **Memory** | Official: Mac with **36 GB** RAM. Ollama: Q4_K_M ~**20 GB**, Q8 ~**36 GB**, BF16 ~**67 GB** |
| **Throughput** | DFlash speculative draft claimed ~**2×** tok/s in Poolside tests |
| **Why it mattered** | Serious SWE/Terminal-Bench numbers in a laptop-friendly MoE shell |

HF: [poolside/Laguna-XS-2.1](https://huggingface.co/poolside/Laguna-XS-2.1) · [poolside/Laguna-M.1](https://huggingface.co/poolside/Laguna-M.1)

---

## Consumer / everyday local favorites

### 10. Ornith-1.0 (DeepReinforce) — MIT agentic coding family

| | |
| --- | --- |
| **When / buzz** | ~2026-06-25 (~328 upvotes) |
| **Sizes** | 9B dense · 31B dense · **35B MoE (~3B active)** · 397B MoE |
| **License** | **MIT** |
| **CUDA?** | Optional. Best everyday path: **llama.cpp / Ollama / vLLM** |
| **Memory / speed (35B MoE)** | Q4_K_M ~**20–22 GB** VRAM → comfortable **24 GB**. Community: **~56–85 tok/s** on high-end local; MTP grafts often **+25–40%**. M4 Max 64GB reports **~75–85 tok/s**. Extreme benches on fast servers hit **200+ tok/s** c1 |
| **Why it mattered** | “Runs like 3B, codes like mid/large dense” narrative; strong Terminal-Bench claims for the MoE size |

Collection: [deepreinforce-ai/ornith-10](https://huggingface.co/collections/deepreinforce-ai/ornith-10)

---

### 11. Cohere North Mini Code 1.0 — small agentic coder

| | |
| --- | --- |
| **When / buzz** | ~2026-06-09–10; 4-bit + Ollama follow-up ~2026-06-18 |
| **Size** | **30B** MoE / **3B** active |
| **License** | **Apache 2.0** |
| **CUDA?** | Optional |
| **Memory** | W4 / 4-bit ≈ **~20 GB** — Mac / single 24 GB GPU friendly |
| **Why it mattered** | Cohere’s first open agentic coding model at a truly local footprint |

HF: [CohereLabs/North-Mini-Code-1.0](https://huggingface.co/CohereLabs/North-Mini-Code-1.0)

---

### 12. Qwen3.6 densification stack (still the default chat/coder for many)

Qwen3.6 itself predates this window for some sizes, but **May–July** LocalLLaMA focus was:

- **llama.cpp MTP** (merged ~2026-05-16): Qwen3.6-27B often **1.7–2.4×** decode with `--spec-type draft-mtp` (~**+1 GB** for MTP head). Community anecdotes of **~46 tok/s** Q8 with MTP vs much slower AR.
- **nvidia/Qwen3.6-27B-NVFP4** (~2026-06-30, ~414 upvotes): Blackwell-oriented 4-bit for high tok/s on CUDA.
- Ongoing **35B-A3B** MoE as the “efficient peer” to dense 27B.

Rough dense 27B guidance: **~16–18 GB** Q4 / **~18–20 GB** Q5 on a single **24 GB** card → often **>40 tok/s** on 4090-class with short-mid context.

---

### 13. Gemma 4 additions + DiffusionGemma (Google)

| Model | Notes |
| --- | --- |
| **gemma-4-12B** (~2026-06-03, ~970 upvotes) | Multimodal (text/image; audio on some sizes), up to **256K**, 140+ languages. Fits mid-range GPUs once quantized |
| **Gemma 4 QAT packs** (~2026-06-05/11) | Quantization-aware 12B / 26B-A4B / 31B variants — better quality at 4-bit |
| **DiffusionGemma** (~2026-06-10, ~940 upvotes) | Diffusion (non-AR) text head; marketing claim **~4×** generation speed, with LocalLLaMA accuracy tradeoff debates (“4× faster, 6× more mistakes”) |

CUDA/Metal both used; diffusion path needs runtime support beyond vanilla AR GGUF in some stacks.

---

## Smaller specialists that still ranked high

| Model | Why people cared | Rough requirements |
| --- | --- | --- |
| **Unlimited-OCR 3.3B** (~2026-06-24) | One-shot multilingual doc/OCR parsing | Few-GB VRAM; easy laptop |
| **OvisOCR2 0.8B** (~2026-07-15) | Tiny OmniDocBench-class OCR VLM | Sub-2 GB possible; vLLM 0.22+ |
| **Inflect-Nano TTS ~4.6M** | Extreme tiny TTS | CPU/mobile |
| **Gepard 0.6B streaming TTS** | ~20× realtime, ~50 ms TTFA, vLLM-native | Tiny GPU/CPU |
| **Local Image→3D (<2 GB RAM, <20s)** (~2026-07-12) | Apple Silicon / iPhone demos | No big LLM VRAM |
| **Amalia 9B (Portugal)** | National open LLM | Typical 9B: ~6–8 GB Q4 |
| **Soofi S 30B (German consortium)** | Fresh EU open multilingual | ~30B class |

---

## Runtime takeaways from the same threads

1. **MoE + MTP/DFlash/speculative decoding** is the 2026 local speed meta — often worth more than buying another consumer GPU.
2. **NVFP4** is the new CUDA status symbol (Blackwell-first); Hopper still lives on **FP8**.
3. **Apache / MIT / OpenMDW** releases get warmer reception than “open weights but restricted license” (MiniMax discussions keep looping this).
4. If you only upgrade one daily driver on a **24 GB** card this period: **Ornith-1.0-35B** or **Laguna XS 2.1** (coding agents), keep **Qwen3.6-27B** as generalist, and treat **Puzzle-75B** as the multi-GPU upgrade path.

---

## Top threads (engagement snapshots)

| Score (approx.) | Date | Topic |
| ---: | --- | --- |
| 1300+ | 2026-06-18 | GLM “fable before year-end?” culture thread |
| 1140 | 2026-06-16 | GLM-5.2 crosses 80% Terminal-Bench (News) |
| 1065 | 2026-06-17 | “GLM-5.2 is a win for local AI” |
| 990 / 941 | 2026-06-12 / 06-10 | DiffusionGemma speed vs quality |
| 972 | 2026-06-03 | google/gemma-4-12B |
| 890 | 2026-06-16 | zai-org/GLM-5.2 weights |
| 729 / 631 | 2026-06-01 / 06-12 | MiniMax M3 announce + weights |
| 631 | 2026-07-03 | Leanstral-1.5-119B-A6B |
| 434 / 415 | 2026-06-29 / 07-05 | LongCat-2.0 intro + MIT weights |
| 414 | 2026-06-30 | Qwen3.6-27B-NVFP4 |
| 412 | 2026-07-06 | Hy3 295B-A21B |
| 328 | 2026-06-25 | Ornith-1.0 |
| 314 | 2026-07-07 | Nemotron Puzzle-75B-A9B |

---

## Method / caveats

- Reddit.com blocked direct scrapes from this environment; posts were retrieved via the Arctic Shift archive API for `r/LocalLLaMA`, then requirements were verified against HF model cards, vendor blogs, vLLM recipes, and high-engagement LocalLLaMA self-posts.
- The paging/fetch helper used for this note is saved as [`fetch_localllama_posts.py`](./fetch_localllama_posts.py):

```bash
python3 fetch_localllama_posts.py \
  --after 2026-05-16 --before 2026-07-17 \
  --new-model-only --min-score 100 \
  --out posts.jsonl
```

- Tok/s figures are **hardware- and stack-specific**. Prefer them as order-of-magnitude guides.
- “New” here means **heavily discussed in-window**; some lineages (Qwen3.6, Gemma 4 base) started earlier but had material mid-period releases (NVFP4, QAT, DiffusionGemma, MTP).
