# Reviewing the meeting-notes investigation

[Topic and roadmap](README.md) · [Paid baseline](paid-baseline.md) · [Product coverage](product-coverage.md)

Each review uses a concrete document or runnable result. Technical checks remain with the implementer. A review is finished when material feedback has been addressed, rather than simply when the document has been read.

## 1. Choose the features that matter

**Ready now:** the [paid baseline](paid-baseline.md), with costs and `MN-01` through `MN-22`, and the separate [product coverage comparison](product-coverage.md). Allow roughly **15 minutes**.

Think of one real meeting you want to improve: who attends, whether it mixes Chinese and English, whether you wear a headset, and where its notes should end up. No recording or purchase is needed for this review.

1. Read the pricing and language tables, then scan the feature catalogue and product coverage comparison.
2. Mark features **essential**, **useful**, or **unnecessary** for that meeting. Identify any capability the catalogue misses.
3. Choose the gaps that must be resolved before pipeline research. In particular, decide whether named speakers in bilingual group calls, reliable deadlines, and a fully local workflow are requirements.
4. State which existing subscriptions should be used for the incremental-cost comparison, if any. The report gives conditional examples; it does not assume you hold a subscription.

Send feedback as `feature ID / priority / expected behavior / gap or correction / impact`. For example: `MN-07 / essential / correctly name three speakers in a Chinese-English call / product support is unclear / wrong owners make actions unusable`.

The implementer records priorities and addresses material source gaps in the baseline. **Phase 2 waits for this review.** Independent citation corrections and documentation cleanup can continue.

## 2. Review reproduction recipes

**Prepared after Phase 2:** `open-source-pipelines.md`, with source revisions, diagrams, and a row for every feature ID. Allow roughly **15–20 minutes**.

Read the recipes for essential features first. Notice which require several models, manual speaker naming, additional application code, or an external service. Check whether those compromises still satisfy your expected behavior. Rank the measurements that could change the adopt/customize/build decision.

Use the same feedback format, adding `acceptable compromise / measurement priority`. The implementer resolves missing feature mappings and updates the benchmark selection. **Phase 3 waits for the recipe and benchmark review.** Independent source corrections can continue.

## 3. Inspect outputs and resource demands

**Prepared after Phase 3:** `local-measurements.md`, reference and generated outputs, resource results, and a representative combined workflow. Allow roughly **20–30 minutes**.

Inspect one Chinese-English excerpt and one long meeting. Check named speakers, decisions, owners, deadlines, omitted facts, and invented claims against the supplied references. Try the selected workflow alongside your usual meeting app, including a headset change, and notice call quality, responsiveness, and correction effort.

Use `feature ID / expected result / actual result / impact / acceptable or needs work`. The implementer reruns affected measurements and updates the recommendation when feedback exposes a material problem. Decide whether to adopt, customize, or build, and whether the evidence is sufficient to resolve [#167](https://github.com/pomodorozhong/rabbit-holes/issues/167).
