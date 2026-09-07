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

## Mainstream AI chat services

The service matters because watermark keys and detectors are provider-specific. A watermark from one provider is not a universal “AI detector,” and a file that has passed through a chat service may contain metadata, an embedded signal, both, or neither depending on the modality, model and product version.

| Service | Text responses | Image/file outputs | Practical detection path | What a negative result means |
|---|---|---|---|---|
| **ChatGPT / OpenAI** | OpenAI’s official provenance documentation currently describes checks for images and audio, not a provider-specific watermark detector for pasted ChatGPT prose. Treat generic AI-writing detectors as a separate, probabilistic class. | OpenAI’s Content Provenance API checks supported images for C2PA and SynthID signals. It also provides a browser verification flow. | Preserve the original image bytes, then use [OpenAI’s content provenance check](https://developers.openai.com/api/docs/guides/content-provenance) or a C2PA-aware verifier. | `not_detected` does not rule out OpenAI generation: metadata can be stripped, a watermark degraded, or the file can predate the signal. |
| **Gemini / Google** | Google says SynthID Text changes token probabilities during Gemini app/web generation. Detection is statistical and provider-keyed; it is strongest on longer, diverse passages. | Gemini Apps combine invisible SynthID and C2PA signals for generated/edited visual media. Visible watermarks are a separate setting. | Upload the original image/video/audio to Gemini and ask whether Google AI created or edited it; the SynthID Detector is a separate Google portal with access that may be limited. | A missing SynthID signal means “not detected by Google’s signal,” not “human-made” or “not made by another provider.” |
| **Claude / Anthropic** | Anthropic announced that future Claude models will use a keyed, SynthID-Text-style watermark. Its detection API is currently described as private preview for eligible organizations. | Claude chat currently produces text-based output; when Claude produces supported files such as PNG, JPG or SVG, Anthropic says it attaches a signed C2PA content credential in metadata. | For text, use Anthropic’s provider detector if eligible. For files, validate the C2PA credential with a C2PA-aware tool. | Small, factual, code or lightly proofread passages may not contain enough watermarkable choices; a missing credential can also reflect stripping or conversion. |

These are current product statements, not permanent guarantees. Track the product, model, generation date and original file when recording a result.

## How to detect a watermark in practice

Use this order when the input is available:

1. **Preserve the original bytes.** Do not start from a screenshot, screen recording, copy-paste or social-media download. Compute a hash and record the filename, MIME type, dimensions, product, model and creation time if known.
2. **Check visible labels separately.** A logo or “AI” label is a UI/product policy, not proof of an invisible signal. Gemini’s visible watermark setting, for example, is independent of SynthID and C2PA.
3. **Validate Content Credentials.** Use a C2PA-aware viewer or validator, not only an EXIF dump. Inspect the signature state, issuer, generation/edit actions and ingredient history. A present-but-invalid manifest is not trustworthy provenance.
4. **Use the provider’s detector.** For an OpenAI image, use [OpenAI’s browser verifier](https://openai.com/verify) or its Content Provenance API. For Google media, use Gemini’s verification flow or the SynthID Detector where available. For Claude text, access to the detector is currently restricted; for Claude-produced files, validate C2PA.
5. **For text, retain the exact generated passage.** A keyed text watermark is encoded in token choices, not in hidden Unicode characters. Use the provider’s detector and its threshold; do not expect a generic AI detector to recover another provider’s secret key.
6. **Treat generic AI detectors as weak secondary evidence.** They infer style or distributional patterns and can produce false positives on human text and false negatives after editing. They do not establish a watermark or authorship.

### What you can and cannot conclude

| Observation | Defensible conclusion | Overclaim to avoid |
|---|---|---|
| Trusted C2PA credential naming OpenAI, Google or Anthropic | That issuer signed a claim that the file was created/processed by the stated tool | The entire file history is true, or the current holder is the original author |
| Provider watermark detected | The detector found a signal associated with that provider; interpret the provider’s stated scope | The provider wrote every word/pixel, or a specific person made it |
| Provider watermark not detected | No supported signal was found in this rendition | It was human-made or was not produced by another AI system |
| Text looks “AI-like” | A style detector produced a probabilistic clue | A watermark was found |
| Screenshot, crop, re-encode or pasted text | The evidence channel may have been damaged or removed | A negative result is meaningful evidence of absence |

For OpenAI images, the official API returns independent C2PA and SynthID results. For example, a trusted C2PA result can identify an issuer and model while a SynthID result can be `not_detected`; read each result independently. The OpenAI documentation explicitly warns that `not_detected` does not rule out OpenAI generation and that the check is not a general-purpose AI detector.

### Minimal OpenAI image check

The following is an API example, not a notebook cell that runs without an API key:

```python
from openai import OpenAI

client = OpenAI()
with open("image.png", "rb") as image:
    result = client.content_provenance_checks.create(
        file=("image.png", image, "image/png"),
    )

for signal in result.results:
    print(signal.type, signal.outcome, getattr(signal, "validation_state", None))
```

For a local first pass, `exiftool` can show whether metadata exists, but it cannot replace cryptographic C2PA validation and it cannot detect a signal embedded in pixels or text. The safest operational result is therefore a structured status such as `trusted provenance`, `watermark detected`, `not detected`, or `inconclusive`.

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
- [Google Gemini Apps Help — verify AI-generated images, videos and audio](https://support.google.com/gemini/answer/16722517?hl=en)
- [Google Gemini Apps Help — manage visible and invisible watermark settings](https://support.google.com/gemini/answer/17405358?hl=en-GB)
- [OpenAI — content provenance guide](https://developers.openai.com/api/docs/guides/content-provenance)
- [OpenAI — content provenance API reference](https://developers.openai.com/api/reference/go/resources/content_provenance_checks/methods/create)
- [Anthropic — how Claude’s text watermark works](https://www.anthropic.com/news/claude-text-watermark)
- [Anthropic Help — can Claude produce images?](https://support.anthropic.com/en/articles/9002504-can-claude-produce-images)
- [Fernandez et al. — VideoSeal: Open and Efficient Video Watermarking](https://arxiv.org/abs/2412.09492)
- [San Roman et al. — Proactive Detection of Voice Cloning with Localized Watermarking](https://arxiv.org/abs/2401.17264)
- [Fernandez et al. — AudioSeal implementation](https://github.com/facebookresearch/audioseal)
- [Fernandez et al. — VideoSeal implementation](https://github.com/facebookresearch/videoseal)
- [Fernandez et al. — Stable Signature](https://arxiv.org/abs/2303.15435)
- [Kirchenbauer et al. — A Watermark for Large Language Models](https://arxiv.org/abs/2301.10226)
