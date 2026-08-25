# Local Runnability: MiniMax Music 3.0 vs ACE-Step 1.5

**Compiled:** 2026-08-25  
**Topic:** [MiniMax Music 3.0](https://www.minimax.io/blog/minimax-music-3-0-next-generation-open-weights-production-ready-versatile-music-model) (open-weight song generator), with a side-by-side against [ACE-Step 1.5](https://github.com/ace-step/ACE-Step-1.5) on this machine  
**Hardware target:** Apple **M2 MacBook Pro, 16 GB unified memory** (same machine as [report-2026-07-17](./report-2026-07-17.md), [report-2026-07-27-music](./report-2026-07-27-music.md), [report-2026-08-02-video-ai-news](./report-2026-08-02-video-ai-news.md), [report-2026-08-16-video-ai-news](./report-2026-08-16-video-ai-news.md), [report-2026-08-23-video-ai-news](./report-2026-08-23-video-ai-news.md), and [report-2026-08-25-ltx-2.5](./report-2026-08-25-ltx-2.5.md))  
**Stack assumption:** Metal / MLX / llama.cpp / Ollama / PyTorch-MPS — **no CUDA**  
**Community sources:** [r/LocalLLaMA](https://www.reddit.com/r/LocalLLaMA/), [r/StableDiffusion](https://www.reddit.com/r/StableDiffusion/) (via Arctic Shift archive)

The [2026-07-27 music report](./report-2026-07-27-music.md) picked **ACE-Step 1.5 2B turbo** as the local full-song option on this Mac. The [2026-08-16 video report](./report-2026-08-16-video-ai-news.md) already marked MiniMax Music 3 as **awkward here** (CUDA / Comfy INT8 encoder ~9.2 GB). This note is the dedicated follow-up: what Music 3.0 actually is, which Mac ports landed in the last 12 days, and why it still does not replace ACE-Step on 16 GB unified.

## Your real memory budget (unchanged)

16 GB unified ≠ 16 GB for the model.

- macOS + browser + IDE typically leave **~8–11 GB** usable for weights + KV / activations.
- Metal’s default GPU working set on ≤32–64 GB Macs is often ~**10.5 GB**.
- Prefer artifacts whose **on-disk size is ≤ ~8 GB**; keep duration short unless measured.
- If a file is **>11 GB**, treat as “does not run” for daily use.

Music models also peak at **decode** (VAE / flow matching / vocoder). Duration × stereo channels explodes that spike the same way video DiTs explode with frame count.

---

## TL;DR

| Question | Short answer |
| --- | --- |
| **What is MiniMax Music 3.0?** | Open-weight **lyrics + structured caption → full song** model (up to **~5 min**). Hybrid **8B global LM + 0.6B local LM + 2.4B flow-matching + 123M Flow-VAE**. Weights dropped **~2026-08-13**. |
| **Fits this 16 GB M2?** | **No for daily use.** Official path is **CUDA**. Full tree **57.4 GB**. Diffusers bf16 wants **~22–24 GB VRAM**. Smallest practical MLX pack is still **~9 GB on disk** *before* AR KV + DiT/vocoder activations. |
| **Does ACE-Step 1.5 still fit?** | **Yes (tight).** Official **macOS + MLX**. 2B turbo DiT-only ~**4.7 GB** weights; DiT-only / 0.6B LM is the same recommendation as the July music report. |
| **Is Music 3 “the better model”?** | **Maybe on a 24 GB NVIDIA box.** Community often calls the mix cleaner than ACE; MiniMax has **no published SongEval/AudioBox table**. ACE-Step 1.5 *does* (AudioBox CU **8.09**, SongEval Coh **4.72**). Listen yourself. |
| **Who wins on this laptop?** | **ACE-Step 1.5.** Music 3.0 is the interesting new open song model. It is not the one you run here. |
| **What “8 GB VRAM” actually means** | Diffusers **leaf-level LM offload onto an NVIDIA card** (slow). Not 8 GB unified, and not Metal. |

**Verdict:** MiniMax Music 3.0 is the better *headline* open song model if you have CUDA headroom. ACE-Step 1.5 is the better *machine* for a 16 GB M2.

---

## What MiniMax Music 3.0 is

MiniMax Music 3 (HF: [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3)) generates a **complete song** from two inputs:

1. **Lyrics** with section tags on their own lines (`[Intro]`, `[Verse]`, `[Pre-Chorus]`, `[Chorus]`, `[Bridge]`, `[Instrumental]`, `[Solo]`, `[Outro]`).
2. **Music description / structured caption** — MiniMax wants three blocks: **Global Metadata** (genre, BPM, key, emotion, production), **Vocal Details**, **Arrangement** (instrument entries/exits over time).

Output is a finished stereo WAV. Marketing and the HF card say **32 kHz, 16-bit**. The Diffusers / MLX vocoder is **44.1 kHz** native; the SGLang server resamples to 32 kHz. Max length is marketed as **five minutes**; Diffusers caps generation at **9,000 acoustic frames** (25 frames/s → **360 s**). Generation is **non-streaming**: wait for the whole job.

It is **text-to-audio only** in the official drop. No reference-audio / cover / inpaint / stem APIs in the shipping pipeline (community research forks exist; they are not the Mac path).

**License:** [MiniMax-Music3 Community License](https://huggingface.co/MiniMaxAI/MiniMax-Music3/blob/main/LICENSE) — use/modify/distribute allowed; commercial products must **display “MiniMax-Music3”** on the UI; **>$20M** yearly revenue from those products needs written authorization (`api@minimax.io`). Acceptable Use Policy (19 categories, including military). Fine-tuned from **Qwen3-8B** (Apache 2.0); DiT adapted from Stable Audio tools (MIT); VAE from DAC (MIT). Not MIT, not Apache.

HF metadata currently shows **“2B params”**. That does **not** match the README breakdown (**8B + 0.6B + 2.4B + 123M ≈ 11.1B**). Treat “2B” as a Hub mislabel. The MiniMax blog says the global LM is initialized from **Qwen3.5-8B**; the model card, GitHub README, and LICENSE all say **Qwen3-8B**.

Hosted MiniMax music APIs stopped taking **new** paid users on **2026-08-20**; free Music-3.0-free / 2.6-free / cover-free tiers were discontinued. Local weights are the remaining self-serve path.

### Architecture (why it is heavy)

```
lyrics + structured caption
        ↓
8B Global LLM  →  semantic RVQ codebook (c0), frame by frame (25 fps)
        ↓
0.6B Local LLM →  residual codebooks c1–c7 inside each frame
        ↓
hidden-state fusion (not discrete-token decode)
        ↓
2.4B flow-matching DiT  →  Flow-VAE latents
        ↓
123M Flow-VAE / DAC vocoder  →  stereo waveform
```

Training tokenizer: 8-layer RVQ (first codebook 16,384 entries; seven residual books 1,024 each). At inference the discrete tokenizer decoder is **not** loaded; fused LM hidden states condition the flow stack.

That is a **Qwen3-8B-class AR job plus a 2.4B DiT plus a vocoder**. ACE-Step 1.5’s daily Mac SKU is a **2B DiT** (optional tiny LM). Different RAM class.

### Official runtimes

| Path | What it is | Hardware MiniMax documents |
| --- | --- | --- |
| **SGLang-Omni** | OpenAI-style `/v1/audio/speech` | GitHub: **two CUDA GPUs** (GPU0 = Qwen3+RVQ AR, GPU1 = flow + DAV) |
| **Diffusers modular pipeline** | `ModularPipeline.from_pretrained("MiniMaxAI/MiniMax-Music3")` | **`pipe.to("cuda")`**. BF16 **~23–24 GB**; CPU offload **~22 GB**; leaf-level LM group-offload **8 GB NVIDIA** (slow) |
| **ComfyUI ≥ 0.33** | Native “Text to Music” template | CUDA-first; INT8 DiT + pruned INT8 text encoder + tiled VAE decode for low VRAM |

HF limitations list, verbatim: **“Inference requires CUDA.”**

---

## Footprint: files vs this Mac

### Official Hugging Face tree

[MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) **main = 57.4 GB**. That includes SGLang-era blobs (`qwen_7B/`, `dav.pth` **492 MB**, `flowmatching_vae.pth` **9.83 GB**) **and** the Diffusers modular split (`language_model/`, `transformer/`, `vocoder/`, `rvq_depth_decoder/`, `condition_encoder/`, `tokenizer/`, `scheduler/`). MLX converters tell you **not** to download the `.pth` / `qwen_7B` extras — Diffusers-only is still **~25 GB**.

| Artifact | Role | On-disk (order of mag.) | 16 GB M2 |
| --- | --- | ---: | --- |
| Full HF main | Everything | **57.4 GB** | ❌ disk + RAM |
| Diffusers modular subset | What inference actually loads | **~25 GB** | ❌ |
| `flowmatching_vae.pth` | Legacy VAE blob | **9.83 GB** | skip if using Diffusers/MLX |
| Comfy INT8 DiT | `minimax_music3_dit_int8_convrot.safetensors` | ~**2.5 GB** (Aug-16 report) | fits *alone* |
| Comfy pruned INT8 text encoder | the 8B global LM, quantized | ~**9.2 GB** | already the whole usable pool |
| Comfy VAE `minimax_music3_dav.safetensors` | vocoder | ~**0.2–0.5 GB** | yes |

Comfy-on-this-Mac: INT8 encoder **~9.2 GB** + DiT + decode spike. That is the same “encoder tax” pattern as LTX-2.5’s Gemma 4 — the conditioner is the daily-driver LLM, then you still have to render audio.

### Community Apple / quant packs (still not daily here)

MLX support merged upstream in [Blaizzy/mlx-audio#888](https://github.com/Blaizzy/mlx-audio) (install from git until PyPI catches up). Example:

```bash
python -m mlx_audio.music.generate \
  --model mlx-community/MiniMax-Music3-mxfp8 \
  --caption "Warm acoustic pop, 96 BPM, intimate female vocal" \
  --lyrics $'[verse]\nMorning light across the room\n[chorus]\nSing with me' \
  --duration 30 --steps 30 --seed 7 --output song.wav
```

| Pack | On-disk | Notes | 16 GB M2 |
| --- | ---: | --- | --- |
| `mlx-community/MiniMax-Music3-bf16` | **~27 GB** | Dense reference | ❌ |
| `MiniMax-Music3-8bit` | **14.2 GB** | Affine 8-bit | ❌ (>11 GB line) |
| `MiniMax-Music3-mxfp8` | **13.9 GB** | Recommended *quality* quant (lyric fidelity) | ❌ |
| `MiniMax-Music3-6bit` / mikoy 6-bit | **~10 GB** | Fragile | ❌ / ⚠️ |
| `MiniMax-Music3-4bit` | **9.2 GB** (two shards, 9,199,141,298 bytes) | Affine 4-bit; embeddings/vocoder stay dense | ⚠️ weights only |
| `MiniMax-Music3-mxfp4` | **8.89 GB** | Experimental; mlx-audio: **worse lyric fidelity** than MXFP8 | ⚠️ |
| `MiniMax-Music3-nvfp4` | **~9.2 GB** | Experimental NVFP4 | ⚠️ + unproven |
| `mikoy92/MiniMax-Music3-MLX-4bit` | **~7 GB** | Alternate 4-bit layout | ⚠️ still need activations |

**Peak RAM ≠ file size.** Early Apple Silicon PoC ([HF discussion #14](https://huggingface.co/MiniMaxAI/MiniMax-Music3/discussions/14), [liminalsunset/minimax-music3-mlx](https://huggingface.co/liminalsunset/minimax-music3-mlx)): **M5 Pro / M3 Max 64 GB**, ~**50 GB system RAM** for a **30 s** clip; author said **128 GB** to run “properly”; DiT/vocoder tried to allocate **~76 Gi**; Metal buffer cap **~41 GB** on a 64 GB Mac; **60 s+** mid-song collapse (quadratic DiT attention, no flash attn). Quantized mlx-audio packs are smaller on disk; they do not magically make a 2.4B flow stage + 8B AR KV fit in **8–11 GB** usable.

**audio.cpp** ([discussion #24](https://huggingface.co/MiniMaxAI/MiniMax-Music3/discussions/24), [0xShug0/audio.cpp](https://github.com/0xShug0/audio.cpp)): **CUDA RTX 5090**, 30 s, 30 flow steps. Default Q4/Q8/Q4 mix **9.8 GiB peak VRAM**, 1.35× realtime. Q8 **13.4 GiB**. BF16 **19.4 GiB**. **9.8 GiB peak on a discrete card is the entire Metal working set on this Mac**, with no room for macOS.

---

## MiniMax Music 3.0 vs ACE-Step 1.5 **on this machine**

ACE-Step numbers from the [July music report](./report-2026-07-27-music.md) plus the current [ACE-Step 1.5 README](https://github.com/ace-step/ACE-Step-1.5). MiniMax numbers from the HF card, Diffusers docs, and community Mac/CUDA reports as of **2026-08-25**.

| | **MiniMax Music 3.0** | **ACE-Step 1.5** |
| --- | --- | --- |
| **Released** | Open weights **~2026-08-13** (HF repo 2026-08-07) | **2026-01-28**; XL 4B DiT **2026-04-02** |
| **Job** | Lyrics + caption → one finished song | LM planner + DiT: songs **and** cover / repaint / stems / vocal→BGM / LoRA |
| **Arch** | 8B global AR + 0.6B depth LM + 2.4B flow DiT + 123M VAE | Qwen3 LM **0.6 / 1.7 / 4B** planner + **2B or 4B** DiT |
| **Daily use on 16 GB M2** | ❌ | ✅ / ⚠️ **2B turbo, DiT-only** (or +0.6B LM if memory allows) |
| **Why the weights miss / fit** | 8B conditioner + 2.4B renderer; MLX 4-bit **9.2 GB** already in the fragile band; decode grows with seconds | 2B DiT ~**4.7 GB**; official INT8 + offload story down to **≤4–6 GB** VRAM |
| **Official Mac runtime** | **None.** “Inference requires CUDA.” | **Yes:** `start_gradio_ui_macos.sh` / portable zip, **MLX** |
| **Community Mac path** | mlx-audio (git), mikolaj92 / mikoy92 quants, audio.cpp (CUDA-measured). 64 GB class for sane 30 s | Mature; this laptop’s recommended stack since July |
| **Vendor VRAM story** | 24 GB comfortable; ~22 GB offload; **8 GB NVIDIA** with leaf offload | ≤6 GB DiT-only turbo; 6–12 GB + 0.6B LM |
| **Max duration** | **~5 min** (frame cap 360 s) | **10 s – 10 min** (VRAM-tiered; often 3–8 min on consumer GPUs) |
| **Sample rate** | 32 kHz (card) / 44.1 kHz (Diffusers/MLX vocoder) | **48 kHz** stereo |
| **Streaming** | **No** (official) | Diffusion: whole latent then decode. App-layer “radio” via queued jobs |
| **Languages** | Demos: EN + ZH; no official language list | **50+** lyric languages (vendor) |
| **Editing / LoRA** | Generate-only in the shipping API | Covers, repaint, stems, add-layer, LoRA from ~8 songs / 1 h on a 3090 |
| **License** | Community: branding + **$20M** revenue gate | **MIT** |
| **Published benches** | **None** (vendor demos + listening anecdotes) | AudioBox CU **8.09**, PQ **8.35**, SongEval Coh **4.72** (tied best vs Suno v5 in their table); style/lyric align still trail Suno v5 |
| **Speed (NVIDIA, vendor/community)** | Not published by MiniMax. audio.cpp 30 s @ 30 steps ≈ **realtime-ish** on 5090 | **&lt;2 s** / song on A100; **&lt;10 s** on 3090 (turbo) |
| **Disk to even try** | 9–25 GB (quant → Diffusers) plus caches | ~**10 GB** core models |

**Read:** Music 3.0 did **not** make “Suno at home” available on this laptop. It made a heavier, more caption-controlled song model available on **8–24 GB NVIDIA** (and 64 GB+ Mac experiments). ACE-Step is still the model whose **official** Apple Silicon path matches the memory budget in this folder.

Quality is subjective and **not** independently tabled for Music 3. HF thread ([#4](https://huggingface.co/MiniMaxAI/MiniMax-Music3/discussions/4)): “Suno v3.5,” “cleaner than ACE.” r/StableDiffusion ([MiniMax-Music 3 vs H3 EDM jab](https://www.reddit.com/r/StableDiffusion/comments/1vw9vf4/minimaxmusic_3_edm_no_idea_wtf_is_that_meanwhile/)): genre holes. ACE-Step’s own paper still loses style/lyric alignment to Suno v5. **Do not pick a local stack from a single demo reel.**

---

## How Music 3.0 would run (if this were a different machine)

### 1) Official Diffusers — CUDA (not this Mac)

```bash
pip install git+https://github.com/huggingface/diffusers@dafe3733fcfdbf3c48915fe77be3aef65b5d6a2d \
  transformers accelerate soundfile
```

```python
# Fits 24GB+ NVIDIA. device="mps" is not documented.
pipe = ModularPipeline.from_pretrained("MiniMaxAI/MiniMax-Music3")
pipe.load_components(dtype=torch.bfloat16)
pipe.to("cuda")
audio = pipe(prompt=prompt, lyrics=lyrics, audio_duration=60.0, ...)[0]
```

8 GB NVIDIA recipe = `ComponentsManager.enable_auto_cpu_offload` + `apply_group_offloading(pipe.language_model, offload_type="leaf_level")`. That is **PCIe offload onto system RAM**, which this Mac does not have as a second pool.

### 2) SGLang-Omni — two CUDA GPUs

```bash
sgl-omni serve --model-path MiniMaxAI/MiniMax-Music3 --port 8000
# lyrics → input, caption → instructions; max_new_tokens = frames @ 25 fps
```

### 3) ComfyUI native template

[docs.comfy.org MiniMax Music 3](https://docs.comfy.org/tutorials/audio/minimax/minimax-music-3) · weights [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3). Default duration **60 s**; `tiled_decode` trades seams for VRAM. Comfy-on-Mac Metal for this 8B+DiT stack is unproven on 16 GB unified; treat as a **CUDA box** UI.

### 4) mlx-audio (the real Apple path — wrong RAM class)

Install mlx-audio from the merge commit, pick **4-bit or MXFP4**, `--duration 8–15` first, **quit everything**. Expect swap or jetsam before a 3–5 minute song. mlx-audio itself recommends **MXFP8** when lyrics matter — and MXFP8 is **13.9 GB on disk**, already past the daily-use line.

### 5) audio.cpp / GGUF

Closer to llama.cpp ergonomics, and it already speaks ACE-Step. Music 3 GGUFs exist ([audio-cpp/MiniMax-Music3-GGUF](https://huggingface.co/audio-cpp/MiniMax-Music3-GGUF)). Measured peaks are **NVIDIA**. Do not assume Metal matches 9.8 GiB.

---

## Suggested actions on this machine

```
Need a local full song with lyrics on this M2?
  └─ ACE-Step 1.5 2B turbo, DiT-only first
     (July music report). Official macOS MLX / portable zip.
     Short–medium duration; close other apps.

Need MiniMax Music 3.0 quality / structured captions?
  └─ Rent a 24 GB NVIDIA (or 8 GB NVIDIA + patience + offload).
     Do not download the 57 GB tree onto this laptop.

Curious about the new MLX port?
  └─ Only if you enjoy swapping. Smallest files are still
     ~9 GB weights + a decode spike. Not a daily driver.
     Prefer ACE-Step if the goal is a song tonight.

Need covers / repaint / stems / a LoRA of your band?
  └─ ACE-Step. Music 3.0 shipping weights are generate-only.

Need endless background radio?
  └─ Still an app layer: ACE-Step queued “station” or
     MusicGen continuation. Music 3.0 is also a bounded job
     (r/LocalLLaMA “Infinite Radio” wrappers exist — NVIDIA).

Need a clip / loop, not a song?
  └─ MusicGen-MLX or Stable Audio Open Small (music report).
```

**Recommended Mac stack (unchanged):** ACE-Step 1.5 (songs) + MusicGen-MLX or Stable Audio Open Small (sketches). Keep **one** music pipeline loaded. Music 3.0 joins SongGeneration / YuE / ACE-Step XL in the “other computer” bucket.

---

## Reddit / Hub discussion (curated)

Fetched via Arctic Shift from **r/LocalLLaMA** (and a targeted r/SD pass). Scores are archive snapshots.

| Score | Thread | Why it matters |
| ---: | --- | --- |
| 643 | [MiniMax-Music3 released!](https://www.reddit.com/r/LocalLLaMA/comments/1vngww3/minimaxmusic3_released/) (2026-08-13, 147 comments) | Drop thread |
| 152 | [Minimax Music 3 open weight release soon?](https://www.reddit.com/r/LocalLLaMA/comments/1vn4syf/minimax_music_3_open_weight_release_soon/) | Pre-weight hype |
| 78 | [audio.cpp 0.6… MiniMax-Music3 (preview)](https://www.reddit.com/r/LocalLLaMA/comments/1vqasuk/audiocpp_release_06_dotstts_minimaxh3_text2audio/) | GGML path; CUDA metrics later on HF |
| 69 | [MiniMax Music 3 Infinite Radio](https://www.reddit.com/r/LocalLLaMA/comments/1vokxpk/minimax_music_3_infinite_radio/) | Queued generations, not native streaming |
| 42 | [solid suno-like minimax music UI](https://www.reddit.com/r/LocalLLaMA/comments/1vsl0hv/finally_found_a_really_solid_sunolike_minimax/) | Front-end, not a 16 GB recipe |
| 78 | [MiniMax-Music 3: “EDM? No idea…”](https://www.reddit.com/r/StableDiffusion/comments/1vw9vf4/minimaxmusic_3_edm_no_idea_wtf_is_that_meanwhile/) (r/SD) | Genre / prompt-adherence complaints |

Hugging Face (not Reddit, but the useful Mac/VRAM threads):

- [#14 Apple Silicon MLX PoC](https://huggingface.co/MiniMaxAI/MiniMax-Music3/discussions/14) — 64 GB machine, 30 s ≈ 50 GB RAM  
- [#24 audio.cpp CUDA peaks](https://huggingface.co/MiniMaxAI/MiniMax-Music3/discussions/24) — 9.8 GiB Q4 mix on 5090  
- [#4 quality vs ACE / Suno](https://huggingface.co/MiniMaxAI/MiniMax-Music3/discussions/4) — listening anecdotes, missing reference-audio encoder  

ACE-Step context from the July report still applies: potato-GPU framing, XL on 8 GB NVIDIA with offload, jukebox/radio wrappers.

---

## Sources

- MiniMax blog: [Music 3.0 announcement](https://www.minimax.io/blog/minimax-music-3-0-next-generation-open-weights-production-ready-versatile-music-model)
- Weights: [MiniMaxAI/MiniMax-Music3](https://huggingface.co/MiniMaxAI/MiniMax-Music3) (57.4 GB main; LICENSE)
- Code: [MiniMax-AI/MiniMax-Music3](https://github.com/MiniMax-AI/MiniMax-Music3)
- Diffusers: [MiniMax Music 3 pipeline docs](https://huggingface.co/docs/diffusers/en/api/pipelines/minimax_music3) (~23 GB bf16; 8 GB NVIDIA offload)
- ComfyUI: [tutorial](https://docs.comfy.org/tutorials/audio/minimax/minimax-music-3), [Comfy-Org/MiniMax-Music-3](https://huggingface.co/Comfy-Org/MiniMax-Music-3)
- MLX: [Blaizzy/mlx-audio MiniMax README](https://github.com/Blaizzy/mlx-audio/blob/main/mlx_audio/music/models/minimax_music3/README.md), [mikolaj92/minimax-music3-mlx](https://github.com/mikolaj92/minimax-music3-mlx), [mlx-community MiniMax-Music3-4bit](https://huggingface.co/mlx-community/MiniMax-Music3-4bit) / [mxfp8](https://huggingface.co/mlx-community/MiniMax-Music3-mxfp8)
- ACE-Step 1.5: [GitHub](https://github.com/ace-step/ACE-Step-1.5), [arXiv:2602.00744](https://arxiv.org/abs/2602.00744)
- Prior ACE-Step / VRAM / Mac ruling: [report-2026-07-27-music.md](./report-2026-07-27-music.md)
- Prior one-line Music 3 ruling: [report-2026-08-16-video-ai-news.md](./report-2026-08-16-video-ai-news.md)

## Method / caveats

- Hardware bar matches prior reports in this folder (16 GB M2 usable ~**8–11 GB**; files **>11 GB** = not daily use).
- File sizes from Hugging Face / Diffusers docs / mlx-community cards as of **2026-08-25**. Packs differ by a few hundred MB.
- Speed and VRAM figures mix **vendor docs** (MiniMax Diffusers, ACE-Step README) and **community CUDA/Mac reports**. This report did not re-benchmark on the M2.
- “Open weights” ≠ “runs on a laptop.” Music 3.0’s 8 GB floor is a **discrete NVIDIA + offload** story. Early MLX successes are **64 GB+** machines.
- Quality claims (MiniMax demos, “cleaner than ACE,” ACE-Step SongEval) are **not one harness**. Listen before replacing a working ACE-Step install.
- MiniMax Community License is more restrictive than ACE-Step’s MIT if you ship a product.
- DiffRhythm-style memorization risk from the music report still applies: local ≠ copyright-safe.
