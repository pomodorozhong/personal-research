# Meeting-notes investigation plan

[Topic overview](README.md) · [Feature catalogue](feature-catalogue.md) · [Local pipeline sources](open-source-pipelines.md) · [Review guide](review-guide.md)

The catalogue is accepted. Initial source inspection is recorded in the pipeline overview; the complete implementation audit and local measurements remain to be done. This plan keeps the detailed coverage and review requirements alongside the main explanation.

## Three-phase roadmap

| Phase | Deliverable and completion condition | Review checkpoint and dependency |
| --- | --- | --- |
| **1. Define the feature catalogue — complete** | `feature-catalogue.md`: accepted observable behavior and failure cases for `MN-01` through `MN-22`. Preserve the dated product research as background. | The catalogue is sufficient for the remaining work. Pipeline research can proceed from these definitions. |
| **2. Explain pipeline effects on features** | `open-source-pipelines.md`: expand the initial source overview by inspecting **Meetily, HushScribe, VOA, and Tacet** at recorded source revisions. Trace stages and intermediate artifacts, then account for every feature ID: dependencies, available implementation, missing work, upstream failures, configuration tradeoffs, and measurement questions. Record actual models, runtimes, licenses, macOS requirements, and local/cloud boundaries. | Review the stage-to-feature findings and select experiments before Phase 3. Identify choices that change obtainable features, quality, latency, or memory. Include application work and external services where a feature depends on them. |
| **3. Measure feature outcomes on the target Mac** | `local-measurements.md`: component experiments and a combined workflow alongside a meeting app. Test catalogue behavior and isolate how stage choices affect outputs and resource use. For every feature, report observed coverage, quality, latency, memory, setup, missing work, maintenance, and external dependencies; make an adopt/customize/build recommendation. | Inspect representative outputs and resource results against the catalogue criteria. Decide which features are practical locally, which require compromises or extra work, and whether the evidence resolves #167 or leaves follow-up work. |

## Pipeline steps and feature impact

This is a starting dependency map and a set of questions to investigate, not measured evidence or a claim that an inspected project implements these features. Audio and text stages feed later outputs; storage, application controls, and delivery form additional dependencies. The pipeline report should refine the map from source inspection.

| Step | Features to trace | How choices or failures may affect them |
| --- | --- | --- |
| Capture, import, and recording controls | MN-01, MN-02, MN-03, MN-20 | Which audio reaches the pipeline, what is excluded during pauses, and where data goes. Missing call audio removes evidence from every later transcript-derived output. |
| Segmentation and chunking | MN-04, MN-05, MN-06, MN-08, MN-09, MN-10 | Test whether boundaries cut words, speaker changes, or commitments. Trace overlap, timing, preserved context, live backlog, and chunk size versus memory. |
| Transcription | MN-04, MN-05, MN-11, MN-14 | Trace language/model choice, vocabulary context, technical terms, negation, and timestamps. Follow text errors into summaries, decisions, actions, and retrieval. |
| Speaker separation and identity | MN-06, MN-07, MN-10, MN-18 | Distinguish voice clustering from naming people. Trace overlap, calendar context, manual naming, and effects on action ownership. |
| Transcript assembly, provenance, and correction | MN-05, MN-12, MN-15, MN-16, MN-22 | Preserve order, timestamps, speaker labels, source links, and revisions. Test whether corrections invalidate and update derived notes, answers, and recaps. |
| Summarization and structured extraction | MN-08, MN-09, MN-10, MN-11, MN-21, MN-22 | Trace context limits, prompts/templates, chunk aggregation, evidence references, and unsupported claims. Separate extraction quality from errors already present in the input. |
| Storage, indexing, and retention | MN-12, MN-13, MN-14, MN-20 | Trace saved artifacts, metadata, deduplication, edit/index updates, local/cloud boundaries, and deletion of originals and derived data. |
| Retrieval and answering | MN-14, MN-15, MN-22 | Distinguish keyword matching, finding relevant passages, and composing supported answers. Trace search scope, source citations, stale content, and missing evidence. |
| Export and access control | MN-16, MN-17, MN-20 | Test preservation of text, speakers, times, and citations; identify the application work for permissions, sharing, revocation, and exported copies. |
| Calendar, integrations, and follow-up orchestration | MN-18, MN-19, MN-21 | Trace event matching, authentication, destination formats, retries, duplicates, and reviewed actions. Identify external dependencies and the work needed beyond generating notes. |

The initial [source overview](open-source-pipelines.md) records observed patterns and their limits. The full audit still needs every feature dependency and implementation gap.

For each stage, record **input → processing choice → output artifact → affected feature IDs → failure or tradeoff → proposed measurement**. For each feature, record the complete dependency chain, any missing stages or application work, and the evidence supporting the expected outcome. Use the same IDs in both views.

## Measurement rules for Phase 3

Use shared recordings and reference transcripts containing known speaker turns, facts, decisions, owners, and deadlines. Include English, Chinese, mixed language, technical vocabulary, multiple speakers, a long meeting, and headset changes. Evaluate against these references and the catalogue's observable behavior.

- Test microphone and system-audio capture, missed audio, pause boundaries, and device changes.
- Measure transcription speed, live backlog, and accuracy; measure speaker separation and identity separately.
- Keep intermediate artifacts. Compare summaries and actions from reference transcripts with those from generated transcripts to isolate upstream errors. Where attribution or retrieval matters, also compare known speaker labels and known relevant passages with generated results.
- Change one relevant stage or configuration at a time when testing a tradeoff. Record which feature outcomes change, including downstream effects and correction effort.
- Measure retrieval and other key steps selected in Phase 2. Verify storage, correction propagation, exported content, and any required application behavior.
- Record component versions, model storage, configuration, load time, processing time, peak memory, memory pressure, swap growth, and CPU/GPU demand where measurable. Time loading separately and repeat timed runs **three times**.
- Compare simultaneous model residency with staged processing, unloading, and transcript chunking. Avoid duplicate benchmarks of equivalent components.
- Validate the selected steps together alongside a meeting app; component measurements alone do not establish combined feasibility.

## Evidence and maintenance

Preserve `MN-01` through `MN-22` from the [Feature catalogue](feature-catalogue.md) across phases. Add new IDs for newly discovered behavior; do not renumber existing IDs. Later matrices must account for every ID, even when it is unsupported or deferred.

Date research and measurements separately. Distinguish source-documented behavior, hypotheses about feature effects, and local measurements. Check citations, relative links, diagrams when added, feature coverage, and `git diff --check` after each phase.

[Back to all topics](../../README.md)
