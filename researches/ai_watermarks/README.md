# AI watermark solutions

Issue [#115](https://github.com/pomodorozhong/personal-research/issues/115) asks how popular AI watermarking solutions work and how to implement them. This research treats a watermark as one part of a broader provenance system: a hidden signal can survive ordinary transformations, while signed metadata can explain who created or edited an asset.

## Short answer

There is no single best watermark. The right design depends on the threat model and the medium:

| Solution / family | Medium | Core mechanism | Best fit | Main limitation |
|---|---|---|---|---|
| [C2PA Content Credentials](https://spec.c2pa.org/specifications/specifications/2.4/specs/ContentCredentials.html) | Image, video, audio, text and more | Signed provenance manifest, with hard bindings and optional fingerprint/watermark soft bindings | Explain origin, edits and signer identity | Metadata can be stripped; recovery depends on a manifest store or soft binding |
| [Google SynthID](https://deepmind.google/models/synthid/) | Image, video, audio, text | Provider-specific invisible signal; pixel/waveform embedding for media and token-probability modulation for text | Product-level attribution of Google-generated content | Detector and training details are largely product-controlled; not a universal authenticity proof |
| [Stable Signature](https://arxiv.org/abs/2303.15435) | Image | Fine-tune a diffusion decoder so generated images carry a decoder-specific signal | Watermark every image emitted by a controlled image model | Must control or modify the generator; post-processing and attacks remain relevant |
| [AudioSeal](https://github.com/facebookresearch/audioseal) | Speech/audio | Joint generator and detector; localized sample-level detection with perceptual masking | Voice-clone and generated-speech detection, including edited clips | A speech-focused model is not automatically a music or arbitrary-audio solution |
| [VideoSeal](https://github.com/facebookresearch/videoseal) | Image/video | Neural embedder/extractor trained with differentiable augmentations and temporal propagation | Open, post-hoc image/video watermarking | Requires a model runtime and careful codec/resize evaluation |
| LLM green-list watermarking ([SynthID text](https://deepmind.google/blog/watermarking-ai-generated-text-and-video-with-synthid/) and the [Kirchenbauer et al. baseline](https://arxiv.org/abs/2301.10226)) | Generated text | Use a secret-keyed token partition or score adjustment during sampling; detect a statistical token pattern | Low-cost attribution when the generator is under your control | Paraphrase, translation, short text and distribution shift reduce detection power |

The practical recommendation is layered:

1. Put a signed C2PA manifest on the original asset and every edit you control.
2. Add a robust modality watermark when you need recovery after a file is re-encoded, resized or detached from its metadata.
3. Keep a server-side manifest/fingerprint lookup and a calibrated detector; never treat “watermark not detected” as proof that a human made the content.

## What the notebook demonstrates

[`ai_watermarks.ipynb`](ai_watermarks.ipynb) is a self-contained, runnable companion. It includes:

- a decision framework for choosing provenance, signal watermarking or both;
- a toy image watermark using mid-frequency DCT coefficients, followed by crop/noise/JPEG-style stress tests;
- a toy text watermark using a secret-keyed green list and a z-score detector;
- an interactive `ipywidgets` control for watermark strength and text bias, with a non-interactive fallback for headless execution;
- implementation checklists, evaluation metrics and attack/abuse considerations for production systems.

The demos intentionally use small classical constructions rather than pretending to reimplement proprietary or research-grade models. They show the design pattern—embed, transform, detect, calibrate—not the security or robustness of SynthID, AudioSeal or VideoSeal.

## Run it

```bash
cd researches/ai_watermarks
uv sync
uv run jupyter notebook ai_watermarks.ipynb
```

For a headless smoke test:

```bash
WATERMARKS_INTERACTIVE=0 uv run jupyter nbconvert --to notebook --execute ai_watermarks.ipynb \
  --output-dir /tmp --output ai_watermarks.executed.ipynb
```

## Implementation notes

### Provenance versus watermarking

C2PA uses signed manifests to make provenance tamper-evident. Its “hard binding” hashes the asset or boxes in the file; its “soft binding” can use a fingerprint or invisible watermark to find a manifest after ordinary transformations. The signature answers “who signed this claim and what history did they assert?” A watermark answers “does this signal appear to be present?” Those are complementary questions.

### Neural media watermarking

The common implementation shape is an encoder/decoder pair:

```text
asset + secret message -> embedder -> watermarked asset
watermarked asset + transform -> detector -> message/confidence/localization
```

Training normally includes differentiable approximations of the transformations the detector must survive: resize, crop, blur, noise, color changes, codec compression, frame-rate changes and audio resampling. Perceptual or just-noticeable-difference losses keep the residual below a visibility or audibility threshold. The difficult trade-off is unavoidable: more payload and robustness generally require more signal energy and create more opportunities for detection, removal or false positives.

### Text watermarking

Text watermarks must be embedded before sampling. A secret-keyed token partition or score adjustment creates a statistical pattern across many generated tokens. Detection is hypothesis testing, not exact message recovery, so thresholds must be calibrated on human text, model families, languages, prompts and decoding settings. Rewriting the text changes the token sequence and can erase the signal.

## Sources

- [C2PA Specifications 2.4 — Content Credentials](https://spec.c2pa.org/specifications/specifications/2.4/specs/ContentCredentials.html)
- [C2PA Implementation Guidance — invisible watermarking and soft bindings](https://spec.c2pa.org/specifications/specifications/2.2/guidance/Guidance.html)
- [Google DeepMind — SynthID](https://deepmind.google/models/synthid/)
- [Google DeepMind — watermarking AI-generated text and video with SynthID](https://deepmind.google/blog/watermarking-ai-generated-text-and-video-with-synthid/)
- [Google DeepMind — identifying AI-generated images with SynthID](https://deepmind.google/blog/identifying-ai-generated-images-with-synthid/)
- [Fernandez et al. — VideoSeal: Open and Efficient Video Watermarking](https://arxiv.org/abs/2412.09492)
- [San Roman et al. — Proactive Detection of Voice Cloning with Localized Watermarking](https://arxiv.org/abs/2401.17264)
- [Fernandez et al. — AudioSeal implementation](https://github.com/facebookresearch/audioseal)
- [Fernandez et al. — VideoSeal implementation](https://github.com/facebookresearch/videoseal)
- [Fernandez et al. — Stable Signature](https://arxiv.org/abs/2303.15435)
- [Kirchenbauer et al. — A Watermark for Large Language Models](https://arxiv.org/abs/2301.10226)
