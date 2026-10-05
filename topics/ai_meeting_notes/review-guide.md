# Reviewing the meeting-notes investigation

[Topic overview](README.md) · [Investigation plan](investigation-plan.md) · [Feature catalogue](feature-catalogue.md) · [Pipeline impact map](investigation-plan.md#pipeline-steps-and-feature-impact)

Each review uses a concrete document or runnable result. Technical checks remain with the implementer. A review is finished when material feedback has been addressed.

## 1. Feature scope is confirmed

The [Feature catalogue](feature-catalogue.md), `MN-01` through `MN-22`, is sufficient and accepted. Phase 1 is complete. The next work explains how pipeline steps affect the features we can obtain and the compromises involved. Further paid-product comparison and vendor-gap resolution are outside the scope.

Use the catalogue's input/output definitions and failure cases as the reference throughout the investigation. Keep every ID visible even when a feature needs additional application work, depends on an external service, or cannot be supported by the selected pipeline. Any later change to expected behavior should name the affected ID and explain why it changes the investigation.

## 2. Review pipeline effects and experiment choices

**Initial source overview:** [open-source-pipelines.md](open-source-pipelines.md). The complete Phase 2 review will use the expanded report, with source revisions, stage/artifact diagrams, a stage-to-feature map, and a dependency chain for every feature ID. Allow roughly **15–20 minutes**.

1. Follow a real meeting through capture, segmentation, transcription, attribution, assembly, summarization, storage, retrieval, and delivery. Check which artifacts each step produces and which features depend on them.
2. Inspect the choices that change feature availability or reliability: language support, chunk boundaries, speaker identity, context limits, evidence links, correction propagation, and local/cloud processing.
3. Check how upstream failures reach downstream features. For example, does a wrong transcript or speaker label explain an incorrect action owner, or does the extraction step introduce the error?
4. Review missing application work and external dependencies for history, calendars, sharing, integrations, and follow-ups. Select experiments whose results would change the adopt/customize/build decision.

Send feedback as `stage / affected feature IDs / expected behavior / failure or tradeoff / measurement priority`. For example: `speaker identity / MN-07, MN-10 / name three speakers in a Chinese-English call / anonymous labels leave owners unresolved / measure identity accuracy and manual correction effort`.

The implementer resolves missing dependency mappings and updates the experiment selection. **Phase 3 waits for the pipeline findings and experiment review.** Independent source corrections can continue.

## 3. Inspect feature outputs and resource demands

**Prepared after Phase 3:** `local-measurements.md`, reference and generated outputs, intermediate artifacts, resource results, and a representative combined workflow. Allow roughly **20–30 minutes**.

Inspect one Chinese-English excerpt and one long meeting. Check speakers, decisions, owners, deadlines, omitted facts, invented claims, and source links against the supplied references and catalogue definitions. Compare intermediate artifacts to locate the stage responsible for an error. Inspect how a changed model, chunk size, or processing schedule affects both feature outcomes and resource use.

Try the selected workflow alongside your usual meeting app, including a headset change, and notice call quality, responsiveness, and correction effort. Check the coverage matrix for features that still require manual work, application development, or an external service.

Use `stage / feature ID / expected result / actual result / impact / acceptable or needs work`. The implementer reruns affected measurements and updates the recommendation when feedback exposes a material problem. Decide whether to adopt, customize, or build, and whether the evidence is sufficient to resolve [#167](https://github.com/pomodorozhong/rabbit-holes/issues/167).
