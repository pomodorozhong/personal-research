# AI Meeting Notes

What do paid meeting assistants provide, which open-source steps can reproduce those features, and what does each feature require on a **MacBook Pro with M2 Pro and 16 GB unified memory**?

This investigation supports [#167](https://github.com/pomodorozhong/rabbit-holes/issues/167). Keep the issue open until the final assessment and its remaining gaps have been reviewed. The hardware target follows the agreed plan; measurements must record the actual machine and macOS version.

## Start here

- [Paid baseline](paid-baseline.md) — research dated **2026-10-06** comparing Notion AI meeting notes, Amie, and Spellar AI; includes pricing, processing boundaries, and a stable feature catalogue.
- [Product coverage](product-coverage.md) — comparison of all 22 features, with documented behavior, advertised capabilities, and unresolved gaps.
- [Review guide](review-guide.md) — short instructions for choosing priorities and reviewing each phase.

Phase 1's documents are ready for review. Product output quality has not been tested. Phases 2 and 3 have not started; their documents will be created when the work is performed.

## Three-phase roadmap

| Phase | Deliverable and completion condition | Review checkpoint and dependency |
| --- | --- | --- |
| **1. Establish the paid baseline** | `paid-baseline.md` and `product-coverage.md`: dated costs, observable feature definitions, and product comparisons, with stable IDs, primary sources, and explicit unknowns. Account for capture, transcription, timestamps, speakers, summaries, decisions, actions, history, search/chat, export, integrations, customization, language, platform, limits, and processing boundaries. | Review the catalogue and classify features as essential, useful, or unnecessary. Resolve material catalogue gaps before Phase 2; record the decisions in the baseline. |
| **2. Map features to open-source pipelines** | `open-source-pipelines.md`: inspect **Meetily, HushScribe, VOA, and Tacet** at recorded source revisions. Trace capture, segmentation, transcription, speaker attribution, transcript assembly, summarization, storage, retrieval, and export. For every feature ID, record reusable implementations, missing application work, suspected bottlenecks, and required measurements. | Review reproduction recipes and benchmark priorities before Phase 3. Identify actual models, runtimes, licenses, macOS requirements, configuration, and cloud dependencies. Distinguish speaker separation from naming people, and keyword search from semantic retrieval. Account for features requiring external services or substantial application work. |
| **3. Measure requirements on the target Mac** | `local-measurements.md`: disposable component experiments and a combined workflow alongside a meeting app. For every feature, assess observed quality, latency, memory, setup, missing work, maintenance, and external dependencies; make an adopt/customize/build recommendation. | Inspect representative outputs and resource results. Decide which features are practical locally and whether the evidence resolves #167 or leaves follow-up work. Equal quality to paid outputs requires hands-on paid comparisons. |

## Measurement rules for Phase 3

Use shared recordings and reference transcripts containing known speaker turns, facts, decisions, owners, and deadlines. Include English, Chinese, mixed language, technical vocabulary, multiple speakers, a long meeting, and headset changes.

- Test microphone and system-audio capture, missed audio, and device changes.
- Measure transcription speed, live backlog, and accuracy; measure speaker attribution separately.
- Evaluate summaries and actions against reference transcripts first, then generated transcripts, so upstream errors can be distinguished from summarizer errors.
- Measure retrieval and other key steps selected in Phase 2. Verify storage and exported content.
- Record component versions, model storage, configuration, load time, processing time, peak memory, memory pressure, swap growth, and CPU/GPU demand where measurable. Time loading separately and repeat timed runs **three times**.
- Compare simultaneous model residency with staged processing, unloading, and transcript chunking. Avoid duplicate benchmarks of equivalent components.
- Validate the selected steps together alongside a meeting app; component measurements alone do not establish combined feasibility.

## Evidence and maintenance

Preserve `MN-01` through `MN-22` from the [feature catalogue](paid-baseline.md#feature-catalogue) across phases. Add new IDs for newly discovered behavior; do not renumber existing IDs. Later matrices must account for every ID, even when it is deprioritized or unsupported.

Date research and measurements separately. Distinguish documented behavior, advertised capabilities, inference, and local measurements. Check citations, relative links, diagrams when added, feature coverage, and `git diff --check` after each phase.

[Back to all topics](../../README.md)
