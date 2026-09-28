# Local Runnability: Models and Tools from AI News Video (2026-09-28)

**Compiled:** 2026-09-28\
**Source video:** [Waifus incoming, GPT 6 Sol, Grok 4.7, Opus 5.5, Mimo 2.6, Step 5, OpenMuse: AI NEWS](https://www.youtube.com/watch?v=nX0fgBL3sIM) by AI Search (38:32; uploaded 2026-09-27)\
**Hardware target:** 16 GB unified-memory Apple M2 MacBook Pro\
**Local stack assumed:** macOS + Metal/MPS, MLX, llama.cpp, Ollama, or CPU fallback; no CUDA GPU\
**Memory budget:** normally about 8–11 GB is available for weights, KV cache, activations, and runtime after macOS, browser, and IDE overhead. For daily use, treat artifacts above roughly 8 GB as risky and pipelines above roughly 11 GB as a “does not run” result. See [Your real memory budget](./memory-budget.md).

## TL;DR

| Bucket | Items | Verdict |
| --- | --- | --- |
| Best local candidate | [Supra2-IMG](https://huggingface.co/SupraLabs/Supra2-IMG) | **Runs well by published architecture:** a 100M text-to-image DiT, about 417 MB in its model repository, and an inference script with an explicit Apple MPS fallback. It still depends on Flan-T5 and SD-VAE downloads and was not benchmarked on this Mac in this report. |
| Port candidates / experiments | [Limite 1B](https://paradigma.inc/blog/limite-1b-violetto), [CLM](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B), [MiMo-V2.6-Distill-Qwen-9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B) | Small enough to investigate by parameter count or auxiliary-head size, but their published serving paths are CUDA/vLLM-oriented, or their complete footprint is much larger than the headline component. |
| Open weights, wrong machine | WorldCrafter, Ming Image, Mira-Scene, FLUX 3 Action, GAE, MiMo Pro/Flash, Dots3 Note, Ovis Embedding, Aikido Altar | Open access does not imply M2 feasibility. The blockers are CUDA-only pipelines, multi-model stacks, 11–129 GB repositories, 8-GPU serving assumptions, or hundreds of GB after pruning. |
| Hosted products | Gemini 3.8 TTS, Step 5, Luma, Grok 4.7, GPT 6 Sol/Luna, Claude Opus 5.5 | Useful from the Mac as APIs or apps, but no downloadable local weights are offered in the referenced official material. |
| Research, hardware, or editorial chapters | Gene discovery, PrimeBOT T1, “THE MOST IMPORTANT PART”, Dex5-S, SkildAI soccer, Project Suncatcher | Interesting demonstrations or products, not local model releases to evaluate on this laptop. |

The useful takeaway is unusually narrow: **Supra2-IMG is the only clearly M2-oriented model in this roundup.** Limite 1B is a plausible future port target because its checkpoint is only about 2.08 GB, but its official runtime is Linux/NVIDIA/vLLM rather than Metal. CLM has tiny task-specific heads, yet it still needs a frozen Qwen3-8B encoder and a CUDA-oriented vLLM path. Several other chapters illustrate why “active parameters” or “1B model” is not the same as a complete local pipeline.

## Runnability table (all video chapters)

The order below follows the video's official chapter metadata. `✅` means a reasonable first local experiment on this Mac, `⚠️` means a port or constrained experiment rather than a supported daily workflow, `❌` means the complete published artifact or runtime does not fit, and `n/a` means the chapter is not a downloadable local model.

| Model/item | Video chapter | Kind | Weights/access and published path | Fits a 16 GB M2? | Local reality |
| --- | ---: | --- | --- | ---: | --- |
| AI news intro | [00:00](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=0s) | Editorial intro | No distinct artifact | n/a | No separate local item to evaluate. |
| WorldCrafter | [00:48](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=48s) | Video world model | Public Base/Fast checkpoints; the Fast repository tree is about 129 GB by file metadata. Official setup is Python 3.11, CUDA 12.8, PyTorch 2.10, and NVIDIA GPU. | ❌ | The artifact is far beyond the memory budget and the tested path is CUDA/NVIDIA. |
| Ming Image 0.1 Design | [02:10](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=130s) | Text-to-image / design | 6B BF16 model, MIT license; the model card recommends vLLM-Omni and validates one CUDA GPU with 80 GiB VRAM. Raw BF16 weights alone are about 12.3 GB before VAE, runtime, and activations. | ❌ | Open and interesting, but not a 16 GB unified-memory workflow. |
| Mira-Scene | [03:56](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=236s) | Single-image 3D scene reconstruction | CCM checkpoints plus segmentation, depth, mesh, and assembly components. The official inference notes split stages across incompatible CUDA/PyTorch environments and support GPU sharding. | ❌ | A multi-stage CUDA pipeline, not a self-contained MPS app. |
| FLUX 3 Action | [05:00](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=300s) | Robotics world-action model | Open 7B policy family derived from FLUX 3, with shared encoders and SO-101/DROID policy components. Official material targets workstation/server GPUs. | ❌ | The headline 7B count excludes the complete robotics stack; no Apple path is published. |
| Gemini 3.8 TTS | [06:41](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=401s) | Hosted speech synthesis | Gemini 3.8 Flash/Flash-Lite TTS through Gemini API, AI Studio, Enterprise, Notebook, and Google products. | ❌ local / ✅ client | Run a client on the Mac, not the model itself. |
| MiMo V2.6 | [10:41](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=641s) | Multimodal MoE family | Pro: 1.02T total / 42B active. Flash: 309B total / 15B active. Distill: 9B dense model. Official Pro/Flash deployment uses multi-GPU tensor parallelism; the Distill model is the only plausible experiment. | ❌ Pro/Flash; ⚠️ Distill | Active parameters do not erase stored weights, KV cache, or runtime overhead. A community 4-bit Distill build might be tested, but it is not an official M2 path. |
| Step 5 | [12:40](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=760s) | Hosted agentic model | `step-5-preview` is documented as an API model with image/video input, 1M-token context, tools, and billed tokens. | ❌ local / ✅ client | API-only in the cited official docs. |
| Luma | [13:57](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=837s) | Hosted creative suite | Luma's official product and API pages describe hosted video generation and Ray models. | ❌ local / ✅ client | No local weights in the referenced product/API material. |
| GAE | [15:11](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=911s) | Geometry-native generative autoencoder | Public `GAE-D64-1B` repository tree is about 11.1 GB and the demo also pulls a frozen Depth Anything 3 Giant model plus geometry dependencies. Official repo is CUDA-oriented. | ⚠️/❌ | A “1B” headline hides an artifact already above the daily-use ceiling, before the depth model. Not MPS-validated. |
| OpenMuse | [16:24](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=984s) | Agent application / harness | Node 24 LTS and pnpm app with browser, terminal, and file tools. The sample can run locally, but `AGENT_BACKEND=model` still requires a provider/model key. | ⚠️ harness only | The shell and UI can be local; the default intelligence is remote unless a separately supported local backend is supplied. |
| CLM v0.1 8B | [17:42](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=1062s) | Contrastive decision/ranking model | CLM heads are about 75.8 MB, but they sit on a frozen Qwen3-8B encoder. Official quickstart serves Qwen3-8B with vLLM. | ⚠️ | Potentially interesting with a quantized encoder and a future Metal/MLX port; not an official MPS workflow and not a text generator. |
| Grok 4.7 | [19:30](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=1170s) | Hosted language model | xAI API, Grok, Cursor, and Grok Build; no downloadable weights in the official announcement. | ❌ local / ✅ client | Hosted only in the cited material. |
| GPT 6 Sol/Luna | [21:05](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=1265s) | Hosted language models | OpenAI models available through ChatGPT/Codex and API IDs `gpt-6-sol` / `gpt-6-luna`; no local weights. | ❌ local / ✅ client | Use the API or app from the Mac; this is not local inference. |
| Claude Opus 5.5 | [22:45](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=1365s) | Hosted language model | Anthropic's hosted Claude family/API; no downloadable weights in the official announcement. | ❌ local / ✅ client | Hosted only in the cited material. |
| Gene discovery | [23:43](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=1423s) | Scientific case study | Anthropic describes Claude-assisted sequence search, parallel sessions, and human BSL-1/2 lab work. | n/a | A workflow demonstration, not a model release. |
| PrimeBOT T1 | [25:12](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=1512s) | Physical robot | Transformable personal robot product with onboard hardware and interaction features. | n/a | Product hardware, not a downloadable local model. |
| “THE MOST IMPORTANT PART” | [25:55](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=1555s) | Editorial transition | No distinct model or primary link is listed in the video description for this chapter. | n/a | No separate local artifact to evaluate; the report does not infer hidden content. |
| Dex5-S | [26:30](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=1590s) | Dexterous-hand hardware | The video names Dex5-S. Accessible first-party Unitree pages currently expose Dex5-1 and its developer support rather than a Dex5-S page. | n/a | Hardware, with the exact model/availability unverified in this pass; no local weights. |
| SkildAI soccer | [27:19](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=1639s) | Robotics research | SkildAI describes self-play in NVIDIA Isaac Sim followed by transfer to a humanoid robot. | n/a | Research and robotics stack, not an M2 model package. |
| Dots3 Note | [28:51](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=1731s) | Multimodal MoE model | 280B total / 16B activated, 512K context; official quickstart recommends FP8 on one 8-GPU node. The FP8 repository tree is about 66.5 GB. | ❌ | “16B active” is not laptop storage; the complete model is many times over budget. |
| Ovis Omni Embedding 3B | [30:40](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=1840s) | Multimodal embedding model | Apache 2.0, 3B parameters, text/image/video/audio embeddings. The repository tree is about 11.1 GB before runtime and system memory. | ❌ | Just over the practical artifact ceiling, with no published Apple/MPS recipe. |
| Limite 1B Violetto | [31:58](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=1918s) | Mathematical reasoning model | Dense ~1B model, 131K context, Apache-2.0 code/model materials; HF repository tree is about 2.08 GB. Official quickstart uses Linux x86-64, CUDA 13, PyTorch 2.11, and vLLM. | ⚠️ | Good weight-size candidate for a port or CPU experiment; not Mac-ready as published. |
| Aikido Altar | [33:05](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=1985s) | Security model | Aikido reports a pruned W4A16 checkpoint of about 328 GB, after reducing GLM-5.3 from a 1,506.7 GB BF16 model. | ❌ | Sparse activation is not sparse storage. This remains a server-class artifact. |
| Project Suncatcher | [33:59](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=2039s) | AI infrastructure research | Google research prototype for testing TPU clusters in orbit with optical links. | n/a | Infrastructure story, not a downloadable model. |
| Supra2-IMG | [36:53](https://www.youtube.com/watch?v=nX0fgBL3sIM&t=2213s) | Text-to-image | Apache 2.0, 100M/104.1M DiT, Flan-T5-Base encoder, SD-VAE, 256² output, 128-token context. Model repository is about 417 MB and its script explicitly selects MPS when CUDA is unavailable. | ✅ | Best local candidate in this video; small output and auxiliary downloads are the main tradeoffs. |

## What is actually worth trying locally

### 1. Supra2-IMG is the practical winner

The [Supra2-IMG model card](https://huggingface.co/SupraLabs/Supra2-IMG) describes a 100M-class diffusion transformer with a Flan-T5-Base text encoder and SD VAE. The published model repository is about 417 MB by file metadata. Its [official inference script](https://huggingface.co/SupraLabs/Supra2-IMG/resolve/main/inference.py) chooses CUDA first, then Apple MPS, then CPU, which is unusually relevant for this machine.

That does not mean the entire run is 417 MB: the script downloads `google/flan-t5-base` and `stabilityai/sd-vae-ft-mse`, and it performs 50 flow steps by default. But the design is qualitatively different from the other image/video entries: 256×256 output, a short context, a small DiT, and an explicit MPS branch. It is the first thing I would try on the M2, with one prompt, one image, and a conservative batch size.

This report does not claim a measured M2 speed or quality result. “Runs well” here means **the published architecture and device selection are compatible with the memory target**, not that this exact laptop has been benchmarked.

### 2. Three plausible-looking near misses

| Candidate | Why it looks small | What prevents a confident M2 recommendation |
| --- | --- | --- |
| Limite 1B | About 2.08 GB for the HF repository; only ~1B dense parameters | The official environment is CUDA 13 + vLLM on Linux/NVIDIA. Long-context inference also makes the 131K headline a memory trap. |
| CLM | The contrastive heads are only about 75.8 MB | CLM is not standalone: it needs a frozen Qwen3-8B encoder. The official runtime is vLLM/CUDA, and the model scores candidate decisions rather than generating text. |
| MiMo-V2.6-Distill-Qwen-9B | A 9B dense distilled model is much smaller than MiMo Pro/Flash | BF16 weights are roughly 18 GB before runtime; community quantizations may change that, but there is no first-party M2 recipe or measured result here. |

These are sensible projects for a future Metal/MLX port or a carefully chosen community quantization. They are not evidence that the full published workflow runs comfortably alongside macOS on 16 GB.

### 3. Pipeline size matters more than the headline parameter count

Several chapters are useful warnings for local-model shopping:

- **GAE** calls its public autoencoder 1B, but the repository itself is about 11.1 GB and the demo additionally pulls Depth Anything 3 Giant.
- **Ovis Embedding** is “3B,” yet its complete model repository is about 11.1 GB before the Python runtime and memory for embedding batches.
- **Ming Image** is “6B,” but the model card says BF16 and 6,154,901,056 parameters; at two bytes per parameter, the raw weights are already about 12.3 GB.
- **Dots3 Note** reports 16B activated parameters, but the FP8 model tree is about 66.5 GB and the official serving example uses eight GPUs.
- **Aikido Altar** uses pruning and sparse activation, but its reported W4A16 checkpoint is still about 328 GB.
- **WorldCrafter** has a Fast repository tree around 129 GB and an official CUDA/NVIDIA environment. A fast or distilled branch can reduce latency without making it a laptop artifact.

The local question is therefore: “Can the complete weights, encoders, VAE/depth/vision components, KV cache, and runtime coexist with macOS?” Active experts, auxiliary heads, or a single advertised submodule are not enough.

## Hosted, local-harness, and research distinctions

The video mixes several kinds of announcements that should not be compared as if they were all model checkpoints:

- **Hosted models/products:** Gemini 3.8 TTS, Step 5, Luma, Grok 4.7, GPT 6 Sol/Luna, and Claude Opus 5.5 can be called from a Mac, but the cited official material presents them as APIs or hosted products rather than local weights.
- **Local application with remote intelligence:** OpenMuse can provide a local browser/terminal/file-control shell, but its documented configuration still points to a provider/model key. “Runs on my Mac” can mean the application is local while the model is not.
- **Robotics and hardware:** FLUX 3 Action, PrimeBOT T1, Dex5-S, and SkildAI soccer concern policies, physical systems, or simulation-to-robot transfer. They are not drop-in Mac inference packages.
- **Research/infrastructure demonstrations:** the gene-discovery case and Project Suncatcher are valuable stories but have no local artifact in the referenced sources.

## Suggested actions

1. Try [Supra2-IMG](https://huggingface.co/SupraLabs/Supra2-IMG) first, with its 256² default and MPS branch. Record peak memory and wall-clock time before increasing steps or resolution.
2. Treat [Limite 1B](https://huggingface.co/paradigma-inc/limite-1b-violetto) as a port candidate, not a ready-to-run M2 model. The small checkpoint is encouraging; the CUDA-only serving instructions are the current blocker.
3. Investigate CLM only if a structured decision/ranking model is useful. It is not a compact chat model, and the Qwen3-8B encoder is the real footprint.
4. Keep MiMo Distill, GAE, Ovis, and Ming in the “watch for a good quantization or MLX port” bucket. Do not budget from the headline parameter count alone.
5. Use the hosted chapters as hosted chapters. A local client, browser, or agent shell is useful, but it should not be reported as local model inference.

## Sources

### Video and local-budget methodology

- [Source video and official chapters](https://www.youtube.com/watch?v=nX0fgBL3sIM)
- [Repository memory-budget note](./memory-budget.md)

### WorldCrafter, Ming Image, Mira-Scene, and FLUX 3 Action

- [WorldCrafter project page](https://drexubery.github.io/WorldCrafter/), [official GitHub](https://github.com/TencentARC/WorldCrafter), and [WorldCrafter-Fast model card](https://huggingface.co/TencentARC/WorldCrafter-Fast)
- [Ming Image 0.1 Design model card](https://huggingface.co/inclusionAI/Ming-Image-0.1-Design) and [official repository](https://github.com/inclusionAI/Ming-Image)
- [Mira-Scene paper](https://arxiv.org/abs/2609.23796), [official repository](https://github.com/VAST-AI-Research/Mira-Scene), and [CCM model card](https://huggingface.co/Yang-Tian/Mira-Scene)
- [Black Forest Labs FLUX 3 Action](https://bfl.ai/models/flux-3-action) and [official Hugging Face collection](https://huggingface.co/collections/black-forest-labs/flux-3-action)

### Hosted model and product chapters

- [Google Gemini 3.8 TTS announcement](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/)
- [Xiaomi MiMo news](https://mimo.mi.com/docs/news), [MiMo V2.6 Pro](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL), [MiMo V2.6 Flash](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL), and [MiMo V2.6 Distill Qwen 9B](https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B)
- [Step 5 Preview documentation](https://platform.stepfun.ai/docs/en/guides/models/step-5-preview)
- [Luma](https://lumalabs.ai/), [Luma AI video generation](https://luma.ai/ai-video-generator), and [Luma API video generation](https://docs.lumalabs.ai/docs/video-generation)
- [xAI Grok 4.7 announcement](https://x.ai/news/grok-4-7)
- [OpenAI GPT 6 Sol and Luna announcement](https://openai.com/index/introducing-gpt-6-sol-and-luna/) and [OpenAI API changelog](https://developers.openai.com/api/docs/changelog)
- [Anthropic Claude Opus 5.5](https://www.anthropic.com/claude-opus-5-5)

### GAE, OpenMuse, CLM, and research/hardware chapters

- [GAE project page](https://jiah-cloud.github.io/GAE.github.io/), [official GitHub](https://github.com/TencentARC/GAE-GeometricAutoEncoder), and [GAE-D64-1B model card](https://huggingface.co/TencentARC/GAE-D64-1B)
- [OpenMuse official repository](https://github.com/CopilotKit/OpenMuse)
- [CLM v0.1 8B model card](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B)
- [Anthropic gene-discovery case study](https://www.anthropic.com/news/claude-discovers-novel-enzyme-system)
- [PrimeBOT T1 announcement](https://www.prnewswire.com/news-releases/primebot-to-showcase-primebot-t1-and-primebot-q1-at-ifa-2026-and-showstoppers-302865541.html)
- [Unitree product site](https://www.unitree.com/) and [Unitree developer support](https://support.unitree.com/home/en/developer/); these expose Dex5-1 rather than a confirmed Dex5-S page in this pass
- [SkildAI physical self-play](https://www.skild.ai/blogs/physical-self-play)

### Dots3, Ovis, Limite, Altar, Suncatcher, and Supra2-IMG

- [Dots3 Note model card](https://huggingface.co/dots-studio/dots3-note-prev)
- [Ovis Omni Embedding 3B model card](https://huggingface.co/ATH-MaaS/Ovis-Omni-Embedding-3B)
- [Limite 1B Violetto announcement](https://paradigma.inc/blog/limite-1b-violetto), [official GitHub](https://github.com/paradigma-inc/limite-violetto), and [model card](https://huggingface.co/paradigma-inc/limite-1b-violetto)
- [Aikido Altar announcement](https://www.aikido.dev/blog/aikido-altar-open-weight-ai-sovereign-security)
- [Google Project Suncatcher](https://blog.google/innovation-and-ai/models-and-research/google-research/google-project-suncatcher-facts/)
- [Supra2-IMG model card](https://huggingface.co/SupraLabs/Supra2-IMG) and [official inference script](https://huggingface.co/SupraLabs/Supra2-IMG/resolve/main/inference.py)

## Method / caveats

- The video title, upload date, description, and chapter timestamps were read from YouTube's official metadata. The video exposed no usable subtitles/transcript, so this report does not invent transcript-only details; it evaluates the named chapters and the linked primary sources.
- Claims were checked against the linked project pages, official repositories, model cards, vendor announcements, or official documentation as available on 2026-09-28. Where an official source was unavailable—most notably the video's Dex5-S naming—the limitation is called out instead of filling in third-party specifications.
- Hugging Face repository sizes are file-tree metadata gathered on the report date and are stated in approximate decimal GB. Raw BF16 estimates use two bytes per parameter and exclude tokenizer, encoder, VAE, KV cache, and runtime overhead. They are estimates, not measured peak memory.
- “Runs well” and “fits” mean a complete, repeatable workflow that can coexist with macOS on a 16 GB M2. They do not mean that an isolated weight file can theoretically be loaded, that a hosted API can be called from the Mac, or that a CUDA-only project might someday be ported.
- No model was benchmarked on this Mac while writing this report. Vendor benchmark numbers and quality claims remain publisher claims; they are not presented as independent local results.
