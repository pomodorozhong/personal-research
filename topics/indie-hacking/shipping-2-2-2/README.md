# Shipping a side project in 2-2-2

Jordi Bruin's method uses three successive constraints: two hours to test whether an idea is possible, two days to make it usable by friends, and two weeks to make it launchable. He explains the progression around [2:56–3:47 in his iOS Conf SG talk](https://www.youtube.com/watch?v=Nz4R517_bVk&t=176s). The limit is meant to force a smaller idea and fewer features, rather than justify extending every experiment into a large project.

I read this as a set of decisions about how much to invest next. A prototype answers feasibility; sharing it tests usability; launching tests whether people outside the friendly test group find it useful. Passing the first stage does not answer the questions in the next two.

## Give each stage a question and an exit

**The gates below are my practical adaptation of the method, not a checklist dictated by Bruin.** Choose the smallest workflow that demonstrates the promise and write down what would make you stop.

| Stage | Question | Useful artifact | Exit decision |
| --- | --- | --- | --- |
| Two hours | Can the hardest part of the idea work? | A spike that takes one representative input through the risky operation. | Continue, shrink the idea, or save the finding and stop. |
| Two days | Can someone else get a useful result? | A shareable version with a complete core workflow and basic instructions. | Continue if users can finish; otherwise simplify or stop. |
| Two weeks | Can a stranger understand, obtain, and use it? | A small release with an honest promise, delivery path, and feedback channel. | Launch the agreed scope and examine actual use. |

Decide whether the two-day and two-week budgets mean elapsed time or available working time for your situation. Reserve time for packaging and delivery inside the final budget. An external review queue may outlast it; a release candidate submitted on time and an app actually available to users are different outcomes.

## An example: a screenshot-resizing utility

**Original fictional project:** a local utility that turns a designer's PNG screenshot into three named export sizes. It handles ordinary PNG images in the initial release, does not upload them, and does not edit the screenshot content. These are example constraints, not claims about an implemented app.

### First two hours: test one export

The technical risk is whether the chosen image library can resize a representative large input while preserving aspect ratio and producing a usable PNG. Build one operation, save to a new file, and inspect the result. Use disposable inputs; never overwrite the only copy.

The exit artifact is a resized image and a short note on elapsed processing time, quality, and any limitation. Authentication, payment, preferences, custom themes, and multiple image formats contribute nothing to this question. If the library cannot handle the representative input, try a smaller promise or stop instead of building a polished shell around a failing operation.

### Next two days: let friends complete the workflow

Add image selection, the three presets, a destination chooser, progress, and a clear error when an input is unsupported. Include a sample image and instructions. Keep the source intact and explain where output files appear.

Ask three testers who actually export screenshots to perform the same task without coaching. Observe whether they can identify the inputs, choose a preset, locate the export, and recognize an error. Have them try both a valid PNG and an unsupported file. “Looks nice” is less useful than seeing where they get stuck.

My example gate is that at least two of three finish unaided and no observed failure damages an original. That is a chosen project decision, not evidence of broad demand or a statistically meaningful success rate. A tester who does not need screenshots can find UI bugs, but cannot establish demand from the target audience.

### Next two weeks: make the promise deliverable

Write a short landing page showing the actual workflow. Package a build for one supported platform, give it a version, and document installation, supported files, and known limits. Provide a way to report a problem. If charging, state the price, delivery, and support terms clearly before purchase; a free release can still test usefulness.

Spend the remaining time on the core workflow's reliability and delivery blockers. Batch processing, accounts, cloud sync, and integrations stay outside this release. A permission failure deserves attention because it prevents the promised export; an extra color theme can wait.

Launch to one audience likely to need the utility. Afterward, record downloads, first successful exports, repeat use where observable, failures, and support effort. Use opt-in feedback or appropriately disclosed telemetry; do not silently upload screenshots to measure demand. A local-only promise must remain true through measurement too.

## What to do when the deadline arrives

My default is to remove optional features before adding time. If the core operation is unreliable, do not hide that problem by calling a demo a finished release. Record what works, what blocks delivery, and whether a narrower safe release is possible.

Some ideas require hardware, approvals, or substantial research. The two-hour constraint can still identify a risk, but a quick prototype does not prove the remaining work is small. In the talk, Bruin describes a subtitling prototype that took roughly eighteen hours rather than two [around 19:30](https://www.youtube.com/watch?v=Nz4R517_bVk&t=1170s). Treat the method as a scope discipline, not a universal effort estimate.

## Keep the learning after launch

Use a brief decision log: initial promise, riskiest assumption, evidence from each stage, cut features, release date/status, and next decision. An experiment that is stopped with a clear finding can be more useful than another unfinished app.

The two weeks should create contact with real users. Decide whether to maintain, improve, or retire the product from their results and the cost of keeping it reliable, rather than from the effort already spent.

## Method and source limits

The iOS Conf SG video's title, description, and English automatic captions were retrieved on 2026-10-07. The method passage and longer-prototype example were checked against those captions; automatic transcription may contain errors. The second linked recording's caption request returned HTTP 429, so it is retained as an alternate viewing reference, not independent transcript evidence. No fictional utility was built or user test conducted for this guide.

[Back to Indie Hacking](../README.md)

## Sources

- [Jordi Bruin: Shipping Side Projects in 2-2-2 Easy Steps — iOS Conf SG 2023](https://www.youtube.com/watch?v=Nz4R517_bVk), published 2023-02-08 — method at 2:56 and longer-prototype example around 19:30.
- [Shipping side projects in 2-2-2 Easy Steps — Jordi Bruin](https://www.youtube.com/watch?v=lDsIaAZF--U) — alternate recording supplied in the issue; captions unavailable in this research session.
