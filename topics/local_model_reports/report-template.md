<!--
AUTHORING NOTES — remove this comment from a finished report.

Aim for a five-minute main report (roughly 700–1,000 words), excluding the appendix.
Use 6–10 shortlist picks when evidence warrants; do not fill quotas.
Keep table cells brief. Use one model card per recommended configuration.
Include any modality with enough community attention and a credible local path:
text, decisions, music, images, video, speech, embeddings, OCR, or other tasks.
Older models qualify through continuing discussion/use. Label practical carryovers.
Create category sections only for notable categories in the report period.
Use descriptive headings suited to those categories; do not require a fixed list.
Mention a coverage gap in the appendix only when it affects interpretation.
Prefix each Best for cell by output/task: 🖼️ images, 📹 video, 💬 text-output
LLMs (including multimodal input), ⚖️ decisions, 🎵 music. For other categories,
choose an appropriate symbol and define it; do not force them into these five.
Prefix each Mac fit cell: ✅ Comfortable, ⚠️ Constrained, ⚠️ Experimental,
❌ Outside budget. Retain the text label; emoji alone is insufficient.
Keep exact sizes, benchmark details, licensing, and deployment caveats in the appendix.
Link factual claims to direct sources near the claim; Sources is a navigation index.
Replace every {placeholder}; delete unused rows, sections, and drafting instructions.
This format is for community shortlists; video chapter roundups need a full inventory.
-->

# Local AI shortlist — {Month Year}

**As of:** {YYYY-MM-DD} · **Discussion window:** {date range}\
**Target:** M2 MacBook Pro, 16 GB unified memory · [Memory budget](./memory-budget.md)\
**Coverage:** {communities searched; identify supplemental communities}\
**Local testing:** {not performed / exact configurations tested}

## Worth trying on your Mac

{Two sentences: the most useful development this period and which pick to start with.}

| Model / configuration | Best for | Why it matters now | Mac fit |
| --- | --- | --- | --- |
| [{Model + quant/runtime}](#model-slug) | {Task emoji} {Task} | {Short reason} | {Fit emoji} {Fit label} |

**Attention:** Recurring = repeated discussion/use; Launch spike = substantial announcement attention; Carryover = older model with continuing use and a practical role. These describe this search sample, not a measured popularity ranking.

**Mac fit:** ✅ Comfortable = credible complete path with headroom; ⚠️ Constrained = fits with specific limits; ⚠️ Experimental = plausible path with important verification gaps; ❌ Outside budget = unsuitable for this machine. Outside-budget models belong in the watchlist. Every verdict states its evidence basis in the appendix.

## {Notable category this period}

{One-sentence category takeaway.}

### {Model name}

**Attention:** {Recurring / Launch spike / Carryover} · **Mac fit:** {Comfortable / Constrained / Experimental}

**Why consider it:** {Useful capability and why people are discussing it now.}\
**Start with:** {Exact model variant, quant/runtime, and initial context or output settings.}\
**Main limitation:** {The one constraint most likely to affect the user's choice.}

[Community evidence]({direct thread URL}) · [Model/runtime]({primary source URL}) · [Deployment details](#model-slug-deployment)

<!-- Repeat the category section and model cards only for notable categories.
Choose headings from the findings; there is no mandatory modality checklist.
Describe the actual output/task: text-output LLMs may accept multimodal input;
music may mean songs or loops; images may mean generation or editing;
video entries should specify clip limits and speed uncertainty.
-->

## Watchlist for a larger machine

- **{Model}:** {Why it is getting attention; the specific memory/runtime barrier on this Mac.} [Evidence]({source URL})

## What changed since the previous report

{Up to three short bullets: newly useful models, recommendation changes, or runtime improvements. Omit for the first report.}

## Technical appendix

### {Model name} deployment

**Configuration:** {Exact publisher/model ID, revision if relevant, quantization, runtime/version, OS requirements}\
**Fit evidence:** {Measured on this Mac / publisher measurement on specified hardware / inference / unverified}

| Component | Artifact size | Loading / residency notes |
| --- | --- | --- |
| Main model | {GB} | {Quantization, conversion overhead, active versus total parameters when relevant} |
| Encoder / projector / planner | {GB or not required} | {Required, optional, sequential, or concurrent} |
| Decoder / VAE / vocoder | {GB or not required} | {Decode peaks, tiling/chunking, output constraints} |
| Complete required weights | {GB or unknown} | {Sum for this configuration; distinct from peak RAM} |

**Working memory:** {Peak, settings, hardware, measurement source; or explicitly unknown. Include cache/activations and every inference stage.}\
**Starting limits:** {Context, concurrency, resolution, frames, duration, batch size, as applicable}\
**Runtime support:** {Confirmed CPU/Metal/MLX/MPS path, unsupported features, setup maturity}\
**License:** {Weights and runtime separately; link exact terms}\
**Unresolved:** {The missing measurement or support check that could change the verdict}

{One short paragraph on relevant quality evidence. Identify publisher results, community anecdotes, and any own tests; include benchmark settings and avoid comparing incompatible results.}

[Model card]({URL}) · [Artifacts]({URL}) · [Runtime]({URL}) · [Measurement]({URL})

<!-- Repeat the deployment entry for each shortlist model. -->

### Search method and limits

- **Selection:** {Search terms, communities, date window, and why candidates were included.}
- **Attention evidence:** {Dated threads and follow-ups; snapshot date for any scores. No census/ranking claim without a documented method.}
- **Feasibility:** {Whole-pipeline checks against the shared memory budget; GB versus GiB; loading peaks and sequential stages.}
- **Verification:** {Checks actually performed; models/settings tested, or explicitly no local benchmarks.}
- **Coverage gaps:** {Missing evidence, unavailable sources, weak modality coverage, and uncertainty that affects selection.}

## Sources

Group direct links by model or category. Keep each entry to the sources needed to audit its recommendation.

- **{Model/category}:** [Community discussion]({URL}) · [Publisher card]({URL}) · [Artifact/runtime documentation]({URL})
