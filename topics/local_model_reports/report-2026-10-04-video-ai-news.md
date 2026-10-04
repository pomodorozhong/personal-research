# Weekly AI video report — 2026-10-04

**As of:** 2026-10-04\
**Source video:** [Gemini 4, GPT 6.1, Dots, Claude Sonnet 5.5, Ideogram 4.5, Flux 3: AI NEWS](https://www.youtube.com/watch?v=lHmZoRHMZyM) by AI Search · published 2026-10-04 UTC · 40:29\
**Target:** M2 MacBook Pro, 16 GB unified memory · [Memory budget](./memory-budget.md)\
**Local testing:** Not performed; assessments use artifacts, runtime documentation, and publisher measurements.\
**Coverage:** All 28 official chapters in order. Official description inspected; captions could not be retrieved.

## Worth trying on your Mac

Start with **Whistle for short speech commands**, **Phonon-2 for English transcription**, or **AstaBrief for turning supplied research excerpts into a cited report**. The video offers useful local speech releases and a specialized report writer; its frontier assistants and most visual-generation releases need hosted access or substantially larger hardware.

| Model / configuration | Best for | Why it matters this week | Mac fit |
| --- | --- | --- | --- |
| [Whistle `.cact`, native CPU engine](#whistle) | 🗣️ Speech recognition and speech embeddings | 16.9 MB deployment file; seven languages; can feed Needle tool calls | ✅ Comfortable |
| [Phonon-2, MLX](#phonon-2) | 🗣️ English transcription and dictation | 164 MB compressed download; published Apple-silicon path | ✅ Comfortable |
| [AstaBrief-8B, Q4_K_M GGUF](#astabrief-8b) | 💬 Cited research synthesis | Qwen3-8B derivative specialized for reports from retrieved excerpts | ⚠️ Constrained |

**Mac fit:** ✅ Comfortable = credible path with headroom; ⚠️ Constrained = specific limits required; ⚠️ Experimental = important verification gaps; ❌ Outside budget = unsuitable in the checked configuration. These are deployment judgments, not M2 measurements. The shared budget is approximately **8–11 GB for the entire inference process**, including weights, caches, and activations.

## Speech recognition and transcription

These models recognize speech. Neither generates music or supplies an ElevenLabs-style speaking voice, and neither documents Mandarin support in the released configuration.

### Whistle

**Mac fit:** ✅ Comfortable

**Why consider it:** A small CPU model for short clips in English, German, French, Spanish, Italian, Dutch, and Polish. It returns transcripts, word timestamps, or speech embeddings. Its engine can combine transcription with Needle's separate text/tool model. [Publisher release](https://cactuscompute.com/blog/whistle)

**Start with:** `Cactus-Compute/whistle`'s `whistle.cact` and the `macos-arm64` Needle engine; use one 16 kHz mono WAV of at most 30 seconds, with the full decoder initially.\
**Main limitation:** Narrow language coverage and a short-clip interface. The published 11.1 ms first-token result is for ten seconds of audio on an **M4 Pro CPU**, rather than this M2 or continuously streamed microphone audio. [Model card](https://huggingface.co/Cactus-Compute/whistle)

[Video chapter](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=196s) · [Runtime](https://github.com/cactus-compute/needle) · [Deployment details](#whistle-deployment)

### Phonon-2

**Mac fit:** ✅ Comfortable

**Why consider it:** A compressed, quantization-aware derivative of NVIDIA's Parakeet TDT 0.6B v3, released for English with an MLX path on Apple silicon. The publisher reports 5.21% average word error across seven English evaluation sets. Those results concern its supplied model and evaluation protocol. [Model card](https://huggingface.co/FermionResearch/Phonon-2)

**Start with:** The `phonon-2` configuration in `fermion-research`, plus its separately installed MLX speech dependencies. Try one English recording first, then a longer file; the CLI handles long recordings in windows.\
**Main limitation:** English only. The headline “an hour in about 20 seconds” uses an **M5 MacBook Air**, with load time excluded; the CLI documentation lists a first-session engine load of 10–40 seconds. [Speech documentation](https://www.fermionresearch.com/docs/speech)

[Video chapter](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=293s) · [Runtime](https://github.com/fermionresearch/phonon) · [Deployment details](#phonon-2-deployment)

## Research synthesis

### AstaBrief-8B

**Mac fit:** ⚠️ Constrained

**Why consider it:** Ai2 trained this Qwen3-8B derivative to write reports from a question and retrieved scientific excerpts, using supervised fine-tuning and preference optimization. Supply evidence, generate a draft, then check the claims and citations. Ai2's comparisons evaluate scientific synthesis in its report pipeline; they do not establish a general replacement for current frontier assistants. [Release](https://allenai.org/blog/astabrief)

**Start with:** Community conversion `mradermacher/AstaBrief_8B-GGUF`, **`AstaBrief_8B.Q4_K_M.gguf` — 5.028 GB / 4.68 GiB**, in llama.cpp with Metal. Begin at **8,192 total context tokens**, one request, roughly 4,000 tokens of prompt/excerpts and at most 2,000 output tokens. Follow Ai2's evidence-and-reference prompt structure. [GGUF artifacts](https://huggingface.co/mradermacher/AstaBrief_8B-GGUF/tree/a40b9eb85c6e349898737726b4b9ee69688b63a3) · [Recommended prompt](https://huggingface.co/datasets/allenai/AstaBrief_prompts/blob/main/sft_prompt.txt)

**Main limitation:** The GGUF is a third-party quantization; citation quality at Q4 has not been established here. Retrieval, PDF extraction, and reference mapping are separate work. Official BF16 weights alone total **16.382 GB**, and long literature contexts add cache memory. [Official artifacts](https://huggingface.co/allenai/AstaBrief_8B/tree/6a34f54dcd7887b790a570249b4a2a2fe81c6694)

[Video chapter](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=2128s) · [Model card](https://huggingface.co/allenai/AstaBrief_8B) · [Deployment details](#astabrief-8b-deployment)

## Other developments worth knowing

- **Hosted assistants:** Claude Sonnet 5.5, GPT-6.1 Sol, and Gemini 4 Argon target coding and professional work. Their publisher evaluations use different tasks and harnesses, so scores are not a common ranking. OpenAI documents Sol as an API model and Dots as a cloud agent powered by Astra. [Anthropic](https://www.anthropic.com/claude-sonnet-5-5) · [Sol](https://developers.openai.com/api/docs/models/gpt-6.1-sol) · [Gemini](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/) · [Dots](https://learn.chatgpt.com/docs/dots)
- **OpenDots and Comfy Agent:** OpenDots projects provide agent applications with separately configured inference. Comfy Agent is available in Comfy Cloud; its announcement places Desktop support in the coming weeks. A local interface does not establish that its model runs locally. [Open Dots](https://github.com/Anil-matcha/Open-Dots) · [OpenDots](https://github.com/CopilotKit/OpenDots) · [Comfy](https://blog.comfy.org/p/comfy-agent-the-first-agent-for-craft)
- **Faster visual generation:** SoL-Refiner, DMAD, and PDMD reduce refinement or sampling steps. Supplied runtimes and full pipelines remain substantial NVIDIA workloads. PDMD's “24 GB GPU” path also requires **128 GB host RAM**. [SoL](https://github.com/NVlabs/Sana/tree/sol-engine/models/sol-refiner) · [DMAD](https://github.com/Yzmblog/DMAD) · [PDMD](https://github.com/ZeamoxWang/pdmd)
- **Controlled image editing:** Ideogram 4.5 emphasizes preserving details across successive edits; FLUX 3 Image exposes layout boxes and element-level control. Ideogram is hosted; BFL also offers FLUX 3 Image under a negotiated commercial weights license, without a verified public M2 deployment configuration in this check. [Ideogram](https://ideogram.ai/models/4.5/) · [BFL](https://bfl.ai/models/flux-3-image)
- **Olmo-core 3:** Open infrastructure for training large mixture-of-experts models across GPU clusters, rather than a new small Olmo inference checkpoint. [Ai2](https://allenai.org/blog/olmocore3)

## What changed since the previous weekly report

The [September 28 report](./report-2026-09-28-video-ai-news.md) highlighted Supra2-IMG. This week's strongest local additions address **speech input and evidence-based text synthesis**. Whistle extends the small CPU-engine approach discussed for Needle in the [September 20 report](./report-2026-09-20-video-ai-news.md). These are task-specific additions; this review did not retest or replace earlier recommendations.

## Technical appendix

### Complete video chapter inventory

All 28 chapters below match the official description in source order. “❌ Hosted” means no verified freely downloadable local configuration for the named service; “⚠️ Unverified” records unresolved fit or release evidence. Research and infrastructure rows use “— N/A” where a consumer inference verdict would be misleading.

| Chapter | Item / primary source | Type | Local verdict / main reason |
| --- | --- | --- | --- |
| [00:00](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=0s) | AI news intro | Editorial | — N/A; introduces the roundup. |
| [00:50](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=50s) | [InSpatio World 1.5](https://inspatio.github.io/inspatio-world-1.5/) | Open weights / world model | ❌ Outside budget in supplied pipeline; CUDA 12.6, large auxiliary models. |
| [02:00](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=120s) | [SoL-Refiner](https://nvlabs.github.io/Sana/Sol-Refiner/) | Open weights / video refinement | ❌ Outside supported Mac path; LTX-derived stack and NVIDIA kernels. |
| [03:16](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=196s) | [Whistle](https://huggingface.co/Cactus-Compute/whistle) | Open weights / speech recognition | ✅ Comfortable; 16.9 MB native CPU deployment model. |
| [04:53](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=293s) | [Phonon-2](https://huggingface.co/FermionResearch/Phonon-2) | Open weights / speech recognition | ✅ Comfortable; compressed model with MLX inference path. |
| [05:40](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=340s) | [Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5) | Hosted LLM | ❌ Hosted; no local weights verified. |
| [07:22](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=442s) | [GPT Dots](https://learn.chatgpt.com/docs/dots) | Hosted agent | ❌ Hosted; cloud agent with its own computer and browser. |
| [08:59](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=539s) | [Anil-matcha/Open-Dots](https://github.com/Anil-matcha/Open-Dots) and [CopilotKit/OpenDots](https://github.com/CopilotKit/OpenDots) | Open-source agent applications | ⚠️ Unverified for fully local inference; provider, speech, and service dependencies differ. |
| [10:15](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=615s) | [GPT-6.1 Sol](https://developers.openai.com/api/docs/models/gpt-6.1-sol) | Hosted LLM | ❌ Hosted; documented API access. |
| [12:20](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=740s) | [Luma](https://lumalabs.ai/) | Sponsored hosted creative platform | ❌ Hosted; description identifies Luma as sponsor. |
| [13:49](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=829s) | [Comfy Agent](https://blog.comfy.org/p/comfy-agent-the-first-agent-for-craft) | Hosted workflow agent | ❌ Hosted for announced Cloud release; Desktop support is forthcoming. |
| [15:02](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=902s) | [PixelUMM](https://nv-tlabs.github.io/PixelUMM/) | Open weights / unified understanding and generation | ❌ Outside budget; default checkpoint shards total 30.411 GB; CUDA runtime. |
| [16:18](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=978s) | [Ideogram 4.5](https://ideogram.ai/models/4.5/) | Hosted image editing | ❌ Hosted; no public 4.5 weights verified. |
| [17:34](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=1054s) | [FLUX 3 Image](https://bfl.ai/models/flux-3-image) | Hosted / commercial weights | ⚠️ Unverified for this Mac; API/playground and commercial licensing, no checked public small checkpoint. |
| [19:02](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=1142s) | [Gemini 4 Argon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/) | Hosted LLM | ❌ Hosted; no local weights verified. |
| [22:12](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=1332s) | [DMAD](https://yzmblog.github.io/projects/DMAD/) | Research / released H3 adapters | ❌ Outside budget for released H3 path; adapters require large base pipeline and CUDA. |
| [23:25](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=1405s) | [PDMD](https://pdmd2026.github.io/) | Research / released H3 weights and adapters | ❌ Outside budget for released H3 path; documented 24 GB GPU plus 128 GB RAM. |
| [25:08](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=1508s) | [Grad counterexamples and Lean formalization](https://github.com/lukasliehr/Grad-Conjecture); [analytic 3D equilibria](https://github.com/landreman/analytic_3d_equilibria) | Mathematics / plasma research | — N/A; proofs and numerical examples, not an inference-model release. |
| [27:09](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=1629s) | [TactileStep](https://tactilestep.github.io/) | Robotics research | — N/A; tactile locomotion policy, simulator and robot hardware scope. |
| [28:30](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=1710s) | [Humanoid Badminton](https://sunlight02.github.io/humanoid-badminton/) | Robotics research | — N/A; hierarchical RL for dynamic racket control. |
| [29:40](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=1780s) | [Eleven v4 and v4 Turbo](https://elevenlabs.io/v4) | Hosted speech generation | ❌ Hosted; expressive TTS and realtime API, no local weights verified. |
| [32:10](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=1930s) | [Breaking the Marmont Cipher, 1809](https://carter.church/writeups/the-letter-to-marmont/) | Historical cryptanalysis case study | — N/A; author's account of an AI-assisted solution, not a model release. |
| [33:30](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=2010s) | [PAMI](https://coral79.github.io/pami/) | Human–object motion research | ⚠️ Unverified; official repository lists code/checkpoints as forthcoming. |
| [34:27](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=2067s) | [Point2Part](https://henrytsui000.github.io/Point2Part/) | Promptable 3D partitioning research | ⚠️ Unverified; pretrained checkpoints and inference release pending in repository. |
| [35:28](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=2128s) | [AstaBrief](https://allenai.org/blog/astabrief) | Open weights / scientific synthesis | ⚠️ Constrained; Q4 GGUF and short context fit plausibly; retrieval remains separate. |
| [36:30](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=2190s) | [Olmo-core 3](https://allenai.org/blog/olmocore3) | Training infrastructure | — N/A; distributed MoE training stack, not small-model inference. |
| [37:50](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=2270s) | [IQuest-Q1](https://github.com/IQuestLab/IQuest-Q1) | Large MoE release | ❌ Outside budget; 320B total parameters, approximately 15B active per token. |
| [38:35](https://www.youtube.com/watch?v=lHmZoRHMZyM&t=2315s) | [AREX-2](https://huggingface.co/BAAI/AREX-2) | Open weights / reflective agent model | ❌ Outside budget at checked precisions; 27B dense model, 54.714 GB BF16 shards. |

### Whistle deployment

**Configuration:** `Cactus-Compute/whistle` revision `b358ddadd89b7a713b5aa131f23032d3cca1b251`, `whistle.cact`; `Cactus-Compute/needle3` revision `c7c415a3d1b3d929014bc6e866d51ebb971f7089`, native `macos-arm64/needle`. The Python wrapper checked on PyPI is `cactus-needle` **3.1.0**.\
**Fit evidence:** Exact file metadata plus published native platform support; memory fit inferred.

| Component | Artifact size | Loading / residency notes |
| --- | --- | --- |
| Complete quantized speech model | 16,919,407 bytes = 16.919 MB | Contains speech encoder and decoder; native `.cact` path. |
| Native macOS ARM64 executable | 1,073,160 bytes = 1.073 MB | CPU implementation; no CUDA or Metal requirement. |
| Separate vocoder / VAE | Not required | Speech input and text output. |
| Optional Needle text model | 35.335 MB | Needed for combined speech-to-tool execution, not transcription alone. |

**Working memory:** End-to-end M2 peak unknown; audio features, encoder outputs and beam caches add memory beyond the file. The repository also contains a **220.619 MB training-format checkpoint**; it is not an additional dependency of native `.cact` deployment.\
**Starting limits:** One clip, 16 kHz mono, ≤30 seconds; full eight-layer decoder before experimenting with reduced depth.\
**Runtime support:** Prebuilt macOS ARM64 CPU engine. File audio needs fewer dependencies than microphone capture or resampling.\
**License:** Weights and engine repository: Apache-2.0.\
**Unresolved:** Actual M2 peak, noisy/technical speech accuracy, and long-audio segmentation behavior in a chosen application.

[Pinned model files](https://huggingface.co/Cactus-Compute/whistle/tree/b358ddadd89b7a713b5aa131f23032d3cca1b251) · [Pinned engine files](https://huggingface.co/Cactus-Compute/needle3/tree/c7c415a3d1b3d929014bc6e866d51ebb971f7089) · [Wrapper release](https://pypi.org/project/cactus-needle/3.1.0/) · [Engine source](https://github.com/cactus-compute/needle)

### Phonon-2 deployment

**Configuration:** `FermionResearch/Phonon-2` revision `ca1bef26bcd8ef4a7e16d0636d8a77bb25e298ee`, `phonon-2.bps.tar.zst`; CLI `fermion-research` **0.2.7**, Apple-silicon MLX backend. Installation requires Python ≥3.10 and separate speech packages.\
**Fit evidence:** Artifact metadata, publisher disk/memory guidance, and a documented Apple-silicon engine; no M2 run.

| Component | Artifact size | Loading / residency notes |
| --- | --- | --- |
| Complete compressed model archive | 163,515,201 bytes = 163.515 MB | Download size, not resident-memory size. |
| Unpacked model tree | About 178 MB, publisher-reported | Packed encoder/decoder data and configuration; retained archive plus unpacked files need about 342 MB disk during installation. |
| MLX and audio implementation | Separate software packages | MLX, mlx-audio, mlx-lm, soundfile, scipy, zstandard; base CLI also has PyTorch/Transformers dependencies. |
| External encoder / vocoder weights | No separate required download identified | Derived Parakeet components are supplied in archive; no speech-generation vocoder. |

**Working memory:** Publisher installation guidance gives roughly **0.5–0.9 GB active transcription memory across the model family**, without a Phonon-2-specific complete-process M2 peak. It does not include a measured dependency-import/loading peak here. The credible small-model MLX path supports the Comfortable judgment; 164 MB must not be read as a RAM ceiling.\
**Starting limits:** One English stream; test 10–30 seconds first. The file CLI splits longer recordings into approximately 25–35 second windows at pauses.\
**Runtime support:** MLX/Metal on Apple silicon; use the native route. The CUDA container is a different target. Check current MLX/OS requirements when installing; no local package compatibility test was performed.\
**License:** Phonon-2 weights: **CC-BY-4.0**, including attribution and derivative notices; CLI: **Apache-2.0**; MLX: MIT.\
**Unresolved:** M2 timing/peak memory, live dictation accuracy, archive loading overhead, and long-file boundary errors.

[Pinned weights and NOTICE](https://huggingface.co/FermionResearch/Phonon-2/tree/ca1bef26bcd8ef4a7e16d0636d8a77bb25e298ee) · [Installation and memory guidance](https://github.com/fermionresearch/phonon/blob/main/docs/install.md) · [CLI release](https://pypi.org/project/fermion-research/0.2.7/) · [MLX license](https://github.com/ml-explore/mlx/blob/main/LICENSE)

### AstaBrief-8B deployment

**Configuration:** Official `allenai/AstaBrief_8B` revision `6a34f54dcd7887b790a570249b4a2a2fe81c6694`; selected community GGUF revision `a40b9eb85c6e349898737726b4b9ee69688b63a3`, `AstaBrief_8B.Q4_K_M.gguf`. llama.cpp's inspected master revision is `0504396140d1c882f5f6ee34466a42db7ae90114`; no executable was installed or run.\
**Fit evidence:** Actual GGUF size, standard Qwen3 architecture, documented llama.cpp support and Metal backend; memory estimate derived from configuration.

| Component | Artifact size | Loading / residency notes |
| --- | --- | --- |
| Selected Q4_K_M model | 5,027,784,736 bytes = 5.028 GB / 4.68 GiB | Includes tokenizer metadata; choose one file, not every quantization. |
| Official BF16 weight shards | 16,381,516,824 bytes = 16.382 GB | Alternative full-precision representation; outside practical budget before caches. `.bin` files duplicate the safetensors representation. |
| External vision encoder / VAE | Not required | Text-only research synthesis. |
| Retrieval / extraction / embeddings | Configuration-dependent; not bundled | Start with manually selected excerpts. Loading another model alongside AstaBrief reduces headroom. |

**Working memory:** Configuration has 36 layers, eight KV heads, and head dimension 128. Assuming FP16 K and V caches, a basic estimate is `36 × 2 × 8 × 128 × 2 = 147,456 bytes/token`: **0.60 GB at 4,096 tokens**, **1.21 GB at 8,192**, and **4.83 GB at 32,768**. At 8,192 tokens, weights plus this cache are about **6.24 GB**, before graph buffers, prompt processing and allocator overhead. At 32,768 they reach about **9.86 GB** before those costs. These are estimates, not measured llama.cpp peaks; runtime settings can change layout and precision.\
**Starting limits:** 8,192 total tokens, concurrency one, approximately 4,000 prompt tokens and ≤2,000 output tokens. Keep retrieval outside the inference process initially. The configuration's 40,960 position limit is not a recommendation to use that context on 16 GB.\
**Runtime support:** llama.cpp supports Qwen3 and Apple Metal; conversion preserves a normal Qwen3 text architecture. Loading, chat-template behavior and citation quality of this GGUF remain untested. Use the publisher prompt with explicit source IDs and supplied excerpts; its example uses temperature 0.7 and top-p 0.95.\
**License:** Official model and GGUF card: Apache-2.0; llama.cpp: MIT.\
**Unresolved:** Q4 citation fidelity, M2 peak during prompt ingestion, and preservation of recommended prompt/chat template.

Ai2's official card reports better citation precision and recall than the Qwen3-8B baseline on its report evaluation. Those results apply to the evaluated checkpoint and evidence pipeline, not automatically to this quantization or arbitrary research questions. [Model card](https://huggingface.co/allenai/AstaBrief_8B)

[Official configuration](https://huggingface.co/allenai/AstaBrief_8B/blob/6a34f54dcd7887b790a570249b4a2a2fe81c6694/config.json) · [GGUF file](https://huggingface.co/mradermacher/AstaBrief_8B-GGUF/blob/a40b9eb85c6e349898737726b4b9ee69688b63a3/AstaBrief_8B.Q4_K_M.gguf) · [Runtime/model support](https://github.com/ggml-org/llama.cpp/tree/0504396140d1c882f5f6ee34466a42db7ae90114) · [ScholarQA local workflow](https://github.com/allenai/ai2-scholarqa-lib/tree/main/api/scholarqa/lite)

### Visual-model near-misses and hidden dependencies

**InSpatio World 1.5:** Published 1.3B checkpoint is **5.677 GB**, but supplied setup also uses Wan's **11.362 GB UMT5 encoder**, **0.508 GB VAE**, and **6.760 GB DA3NESTED-GIANT-LARGE** depth model. That is about **24.306 GB of required model artifacts** for the default depth-estimating pipeline, excluding tokenizers and activations. Code requires CUDA 12.6. Precomputed depth can avoid DA3, but the remaining encoder and generator still need verified offloading/quantization and a Mac port; sequential loading alone does not establish feasibility. Code is Apache-2.0; dependencies and weights require their own license checks. [Setup](https://github.com/inspatio/inspatio-world-v1.5) · [World checkpoint](https://huggingface.co/inspatio/world-1.5) · [Wan components](https://huggingface.co/Wan-AI/Wan2.1-T2V-1.3B/tree/main) · [Depth model](https://huggingface.co/depth-anything/DA3NESTED-GIANT-LARGE/tree/main)

**SoL-Refiner:** Original release builds on LTX-2.3; its H3 extension uses LTX-2.5. Supplied optimized path uses Linux/CUDA, NVIDIA-specific attention kernels and offload/tiling. The headline 27.03× result compares full-resolution H3 on one GB200 GPU with a two-stage pipeline using **one GB200 per stage**, at specified resolution and clip length. It is publisher evidence for that deployment, not a Mac speed claim. [Runtime versions](https://github.com/NVlabs/Sana/tree/sol-engine/models/sol-refiner) · [Measurement protocol](https://nvlabs.github.io/Sana/Sol-Refiner/)

**PixelUMM:** Removing a VAE does not make the release an ordinary quantized 8B LLM. Default `S8-F22-R05/model/*.distcp` files total **30.411 GB across 128 shards** in revision `b621a91463d8a438f64c5d0116f42fb13cf26ce7`. Checkpoint includes learned language weights; only Qwen configuration/tokenizer files are additional. Supplied runtime is CUDA, with separate understanding/generation experts and raw-pixel computation. Repository-wide totals include other checkpoints/exports and are not a single inference download. [Artifacts](https://huggingface.co/nvidia/PixelUMM/tree/b621a91463d8a438f64c5d0116f42fb13cf26ce7) · [Checkpoint instructions](https://github.com/nv-tlabs/PixelUMM/blob/main/CHECKPOINT.md)

**DMAD and PDMD:** Released H3 adapters are around **1.4 GB each**, but require base transformer, text encoder and audio/video decoders. DMAD documents about **170 GB** of base-component downloads and a low-VRAM CUDA path; reported sampling peak of 12.9 GiB plus host staging already conflicts with this Mac's shared budget. PDMD's full transformer alone is **66.281 GB**; its A10 path reports **21 GiB GPU peak plus 128 GB host RAM**. Both papers evaluate smaller Wan configurations, but that does not establish a released, working Mac pipeline for those results. [DMAD components/measurements](https://github.com/Yzmblog/DMAD) · [PDMD hardware/checkpoints](https://github.com/ZeamoxWang/pdmd) · [Full PDMD artifact](https://huggingface.co/pdmd2026/pdmd_4NFE_full)

### Agent, research and large-model notes

**OpenDots:** Anil-matcha's self-hosted application has an inference adapter and optional browser runtime; README requires a model API configuration. CopilotKit's persistent-agent template uses model, conversation, optional speech and channel services. Both use MIT licenses. A compatible local endpoint could be investigated, but fully offline operation, memory fit and feature parity with Dots were not established. [Anil-matcha](https://github.com/Anil-matcha/Open-Dots) · [CopilotKit](https://github.com/CopilotKit/OpenDots)

**Hosted image and voice models:** FLUX 3 Image's commercial deployment option differs from public downloadable weights with a known size/runtime. Do not transfer the fit of FLUX.2 Klein or FLUX 3 Action to it. Eleven v4/v4 Turbo are hosted speech-generation models; their emotion and realtime claims do not apply to Whistle or Phonon. [BFL](https://bfl.ai/models/flux-3-image) · [ElevenLabs](https://elevenlabs.io/v4)

**Plasma and cryptanalysis:** Grad repositories supply mathematical constructions and, in one case, Lean proofs. The Lean repository distinguishes a presentation file with `sorry` placeholders from its proved entry point. This report did not rerun its build or independently verify the scientific conclusions. The Marmont article is the solver's account of AI-assisted reasoning and historical-document checking. Neither story warrants attributing a complete discovery to a particular model without further evidence. [Grad proof entry points](https://github.com/lukasliehr/Grad-Conjecture) · [Analytic equilibria](https://github.com/landreman/analytic_3d_equilibria) · [Solver writeup](https://carter.church/writeups/the-letter-to-marmont/)

**Robotics and 3D:** TactileStep studies pressure sensing for humanoid foot contact; Humanoid Badminton studies hierarchical RL for racket skills. PAMI learns human–object interaction motion through a VAE, generator and refiner; Point2Part partitions objects from point prompts. PAMI and Point2Part's checked repositories list release work/checkpoints as pending. Their videos do not establish runnable Mac packages. [TactileStep](https://tactilestep.github.io/) · [Badminton](https://sunlight02.github.io/humanoid-badminton/) · [PAMI release status](https://github.com/Coral79/PAMI-Code) · [Point2Part release status](https://github.com/henrytsui000/Point2Part)

**IQuest-Q1 and AREX-2:** IQuest-Q1's 15B active parameters govern per-token computation; **320B total** govern stored weights. A theoretical four-bit representation is roughly **160 GB**, before metadata/runtime state. AREX-2 is a **27B dense** Qwen3.8-compatible agent model: BF16 shards total **54.714 GB**; theoretical four-bit weights alone are approximately **13.5 GB**, above the daily-use budget before caches. Lower-bit/offloaded configurations need separate artifact, quality and runtime evidence. Reflective loops also depend on tools, feedback and task budgets. [IQuest architecture/deployment](https://github.com/IQuestLab/IQuest-Q1) · [AREX card/license](https://huggingface.co/BAAI/AREX-2) · [AREX files](https://huggingface.co/BAAI/AREX-2/tree/d4e3502f92d9e889031c2d04e387ab2eb3520268)

### Method and verification limits

- **Video evidence:** Retrieved official watch-page metadata, title, description, chapter markers and publication time. Metadata is `2026-10-03T20:28:38-07:00`, equivalent to **2026-10-04 03:28:38 UTC**. Duration is 2,429 seconds. Description and markers identify 28 chapters.
- **Captions:** Direct caption endpoint returned no content; yt-dlp's English auto-caption download returned **HTTP 429**. This is a chapter-based report with linked-source verification. Spoken details, unnamed demos and within-chapter claims were not exhaustively checked.
- **Primary sources:** Inspected publisher pages, official GitHub READMEs, model cards, Hugging Face file-size/revision metadata and runtime guidance on 2026-10-04. Community GGUF metadata supports that converter's output, not publisher validation of quantized quality. Some pages failed in the web reader but were retrievable directly; OpenAI launch URLs returned 403, so official API and ChatGPT Learn documentation supply those checks.
- **Memory interpretation:** MB/GB are decimal; GiB is binary. Download size, unpacked disk footprint, inference peak and host/GPU memory differ. Full-model dependencies and context are included where known; missing peaks remain explicit.
- **Coverage:** All 28 official chapter topics/timestamps are preserved, including introduction, sponsor, hosted products and research. “Sol Refiner,” “Arex 2” and other display names are normalized to project names. Both OpenDots links and both plasma repositories from the description are retained.
- **Local verification:** Documentation/artifact inspection only. No model download for execution, inference package installation, benchmark, CUDA run, Lean build or reproduction of vendor evaluations was performed. Start limits are proposed smoke-test configurations, not validated performance promises.

## Sources

- **Video:** [AI Search roundup](https://www.youtube.com/watch?v=lHmZoRHMZyM) — official metadata and 28 chapters.
- **InSpatio:** [Project](https://inspatio.github.io/inspatio-world-1.5/) · [Runtime](https://github.com/inspatio/inspatio-world-v1.5) · [Weights](https://huggingface.co/inspatio/world-1.5) · [Wan auxiliary components](https://huggingface.co/Wan-AI/Wan2.1-T2V-1.3B) · [DA3 auxiliary model](https://huggingface.co/depth-anything/DA3NESTED-GIANT-LARGE).
- **SoL-Refiner:** [Project/measurements](https://nvlabs.github.io/Sana/Sol-Refiner/) · [Runtime/releases](https://github.com/NVlabs/Sana/tree/sol-engine/models/sol-refiner).
- **Whistle:** [Release](https://cactuscompute.com/blog/whistle) · [Model](https://huggingface.co/Cactus-Compute/whistle) · [Native engine files](https://huggingface.co/Cactus-Compute/needle3) · [Source](https://github.com/cactus-compute/needle) · [Wrapper 3.1.0](https://pypi.org/project/cactus-needle/3.1.0/).
- **Phonon-2:** [Release/evaluations](https://www.fermionresearch.com/research/phonon-2/) · [Model/NOTICE](https://huggingface.co/FermionResearch/Phonon-2) · [Runtime](https://github.com/fermionresearch/phonon) · [Installation/memory guidance](https://github.com/fermionresearch/phonon/blob/main/docs/install.md) · [Speech CLI](https://www.fermionresearch.com/docs/speech) · [CLI 0.2.7](https://pypi.org/project/fermion-research/0.2.7/).
- **Claude Sonnet 5.5:** [Anthropic](https://www.anthropic.com/claude-sonnet-5-5).
- **Dots:** [Official documentation](https://learn.chatgpt.com/docs/dots).
- **OpenDots:** [Anil-matcha/Open-Dots](https://github.com/Anil-matcha/Open-Dots) · [CopilotKit/OpenDots](https://github.com/CopilotKit/OpenDots).
- **GPT-6.1 Sol:** [Official model documentation](https://developers.openai.com/api/docs/models/gpt-6.1-sol).
- **Luma:** [Official platform](https://lumalabs.ai/) — sponsor link resolves to platform.
- **Comfy Agent:** [Comfy announcement](https://blog.comfy.org/p/comfy-agent-the-first-agent-for-craft).
- **PixelUMM:** [Project](https://nv-tlabs.github.io/PixelUMM/) · [Runtime](https://github.com/nv-tlabs/PixelUMM) · [Checkpoint instructions](https://github.com/nv-tlabs/PixelUMM/blob/main/CHECKPOINT.md) · [Artifacts](https://huggingface.co/nvidia/PixelUMM).
- **Ideogram 4.5:** [Official model page](https://ideogram.ai/models/4.5/).
- **FLUX 3 Image:** [BFL model/access](https://bfl.ai/models/flux-3-image).
- **Gemini 4 Argon:** [Google announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/).
- **DMAD:** [Project](https://yzmblog.github.io/projects/DMAD/) · [Code/deployment](https://github.com/Yzmblog/DMAD) · [Adapters](https://huggingface.co/ZhengmingYu/DMAD).
- **PDMD:** [Project](https://pdmd2026.github.io/) · [Code/deployment](https://github.com/ZeamoxWang/pdmd) · [Full transformer](https://huggingface.co/pdmd2026/pdmd_4NFE_full).
- **Plasma conjecture:** [Grad counterexamples/formalization](https://github.com/lukasliehr/Grad-Conjecture) · [Analytic 3D equilibria](https://github.com/landreman/analytic_3d_equilibria).
- **TactileStep:** [Project/paper](https://tactilestep.github.io/).
- **Robot badminton:** [Humanoid Badminton](https://sunlight02.github.io/humanoid-badminton/).
- **Eleven v4:** [Official v4/v4 Turbo](https://elevenlabs.io/v4).
- **Napoleon cipher:** [Marmont writeup](https://carter.church/writeups/the-letter-to-marmont/).
- **PAMI:** [Project](https://coral79.github.io/pami/) · [Release status](https://github.com/Coral79/PAMI-Code).
- **Point2Part:** [Project](https://henrytsui000.github.io/Point2Part/) · [Release status](https://github.com/henrytsui000/Point2Part).
- **AstaBrief:** [Release](https://allenai.org/blog/astabrief) · [Official model](https://huggingface.co/allenai/AstaBrief_8B) · [Prompt](https://huggingface.co/datasets/allenai/AstaBrief_prompts/blob/main/sft_prompt.txt) · [Community GGUF](https://huggingface.co/mradermacher/AstaBrief_8B-GGUF) · [Local ScholarQA workflow](https://github.com/allenai/ai2-scholarqa-lib/tree/main/api/scholarqa/lite) · [llama.cpp](https://github.com/ggml-org/llama.cpp).
- **Olmo-core 3:** [Ai2 release](https://allenai.org/blog/olmocore3).
- **IQuest-Q1:** [Official repository](https://github.com/IQuestLab/IQuest-Q1).
- **AREX-2:** [Official card/artifacts](https://huggingface.co/BAAI/AREX-2).
