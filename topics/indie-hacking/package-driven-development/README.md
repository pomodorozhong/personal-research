# Package-driven product development

Here, **Package-Driven Product Development (PDD)** means defining how a product will be explained, presented, and offered before building the implementation. This is the working definition in [issue #136](https://github.com/pomodorozhong/rabbit-holes/issues/136), not a claim that PDD is a standardized development process.

The package is the customer's first encounter with the promise: a name, a short explanation, a believable demonstration, the conditions of use, and an offer. Writing it early can expose an unclear audience or an implausible result before code makes the idea expensive to change.

Matthew Guay's [“Write documentation first. Then build.”](https://reproof.app/blog/document-first-then-build) argues that writing clarifies both the product and the explanation, drawing on product documentation and packaging examples. PDD applies that writing discipline to the whole customer-facing promise. It is an adaptation inspired by the article, not a method the article names or validates.

## What belongs in the first package?

My proposed initial package is deliberately small:

| Component | Question it must answer | Implementation consequence |
| --- | --- | --- |
| Audience and problem | Who needs this, in which situation? | Select representative inputs and supported workflows. |
| One-sentence promise | What useful result will the person obtain? | Define the end-to-end acceptance scenario. |
| Preview or demonstration | What will the interaction and result look like? | Identify indispensable behavior and visible quality. |
| Offer | What does access cost, include, and require? | Determine delivery, entitlement, support, and ongoing costs. |
| Limits | What does this version not handle? | Bound scope and explain failures honestly. |
| Getting started | What must the user do first? | Include setup and first-run experience in the product. |
| Evidence and status | Is this a concept, prototype, or released capability? | Separate aspirations from current claims. |

Start with a draft page and a simple walkthrough. Avoid treating attractive copy or a cinematic mockup as evidence that the workflow works. A package should constrain the implementation and be revised by evidence from it.

## Compare the related approaches

| Approach | Main artifact | What it makes explicit | Typical missing question if used alone |
| --- | --- | --- | --- |
| Documentation-first | Usage guide, reference, or walkthrough written before code. | How behavior works and whether it can be explained. | Who wants it enough to adopt or buy it? |
| Working Backwards | Future press release and external/internal FAQ. | Customer outcome and the operational/business questions behind it. | A document does not itself test demand or execution. |
| PDD as used here | Customer-facing package plus a promise-to-behavior map. | The relationship between attention, offer, delivery, and scope. | A compelling package can hide an inadequate artifact unless tested. |

[Colin Bryar and Bill Carr's account of Working Backwards](https://workingbackwards.com/concepts/working-backwards-pr-faq-process/) describes writing the press release before building and using FAQs for customer and internal questions. PDD overlaps substantially with that approach; it is not a replacement for its business reasoning. The distinction here is emphasis on the entire presentation and offer, including demonstrations, rather than a mandated document format.

The analogy to TDD is limited. The package can express a result first, but a prose promise does not automatically become an executable test. Write actual acceptance checks for the behavior needed to keep it.

## An original small-product example

**Fictional package:** a local CSV utility for freelancers cleaning exports before import into another system.

Draft promise: “Preview date-format changes and export a cleaned CSV without uploading your file.”

| Promise element | Minimum behavior | Check before using the claim publicly |
| --- | --- | --- |
| Preview changes | Show original and proposed values before saving. | Compare the preview and exported file on disposable sample data. |
| Date formatting | Require an explicit choice for ambiguous dates. | Include ambiguous, invalid, and missing values; explain unresolved cells. |
| Cleaned CSV | Produce a usable file without overwriting the original. | Reopen the output and verify headers, quoting, row count, and selected edits. |
| No uploading | Process the file locally. | Inspect the real processing path and network behavior, including telemetry. |

The package excludes automatic format guessing, cloud sync, and every possible delimiter/encoding. If the prototype cannot handle the target customer's ordinary exports, revise the promise or stop; do not bury the failure in fine print.

A concept preview should say “proposed workflow.” Replace it with a real recorded workflow before claiming the capability is available. This example is a specification illustration, not an implemented or network-audited app.

## Case: IKEA × Skyrim

The campaign turns a KALLAX shelf into a storage companion in *Skyrim*, voiced by Matt Berry. [Mother's campaign post](https://www.linkedin.com/posts/mother_introducing-kallax-storageborn-ikeas-solution-activity-7503785908534706176-iK7U) identifies the storage problem and its collaboration with IKEA and Kinggath Creations. [Launch coverage in LBB](https://lbbonline.com/news/IKEA-KALLAX-Storageborn-Mother) describes a functional companion and a September 9, 2026 free release supported by digital, social, and gaming publicity.

The [supplied Reddit discussion](https://www.reddit.com/r/gaming/comments/1wbq721/ikea_launches_official_the_elder_scrolls_v_skyrim/) contains jokes and reactions to the shelf, voice, and crossover. Those selected responses show that people could talk about the premise; they do not establish the campaign's total reach, installation rate, or sales effect.

**My interpretation:** the package gives the artifact a compact promise: IKEA solves the game's storage frustration with an entertaining, recognizable companion. The must-have behavior is therefore more than putting a logo into the game. A player should be able to obtain the companion, use its storage help, and encounter the character promised by the presentation. Compatibility and a usable installation path matter because they connect the story to the actual artifact.

For a promotional artifact, “good enough” means that the promised experience works for the supported audience and does not betray the premise. It does not mean that a weak or nonfunctional mod is acceptable because the trailer is funny. I did not install or benchmark the Creation, so this is an acceptance argument, not a gameplay-quality verdict.

Many people might see a trailer or discussion without installing the mod. That possible asymmetry suggests measuring two different paths:

| Path | Evidence to seek | What it cannot prove alone |
| --- | --- | --- |
| Package exposure | Qualified reach, meaningful engagement, accurate recall, and brand association. | Whether the game experience fulfills the promise. |
| Artifact use | Installation success, completed interaction, storage usefulness, and support problems. | Overall cultural reach or incremental furniture sales. |
| Business effect | Relevant product interest or sales with a credible comparison. | Causality from a publicity spike without controlling other influences. |

No verified package-to-install ratio or causal sales lift was found in the inspected sources. Nor do they establish that IKEA wrote its package before developing the mod. This is a case about package, implementation, and impact—not confirmed evidence of an internal PDD process. See [the related word-of-mouth question](https://github.com/pomodorozhong/rabbit-holes/issues/135) for the sharing perspective.

## Evolve the package without overpromising

My suggested change log records the old claim, new claim, reason, supporting evidence, and affected behavior. When scope changes, update screenshots, offers, installation instructions, and support expectations together. Do not silently convert a promised feature into a future roadmap item after people have paid for it.

Before release, test the actual artifact against each claim and have a new reader explain what they believe they will receive. After release, track expectation mismatches alongside usage failures. A package that repeatedly needs caveats may indicate a product-design problem, not merely a copywriting problem.

The package earns attention; the implementation earns the right to keep the promise. PDD is useful when these remain connected through review and testing.

## Method and limits

Sources were inspected on 2026-10-07. Reproof's article was retrieved directly after the web reader failed. Bethesda's JavaScript-dependent listing returned no readable text through the web tool; its [canonical listing](https://creations.bethesda.net/en/skyrim/details/bb2fbdf4-239e-4945-b69a-a5560fcf5b86/KALLAX_STORAGEBORN) is provided for checking current availability. Launch coverage is historical and does not establish today's platform compatibility. No game installation or campaign analytics were tested.

[Back to Indie Hacking](../README.md)

## Sources

- [Matthew Guay: Write documentation first. Then build.](https://reproof.app/blog/document-first-then-build), 2022-06-10 — writing as product clarification.
- [Working Backwards: The Amazon PR/FAQ Process](https://workingbackwards.com/concepts/working-backwards-pr-faq-process/) — customer-first press release and FAQ method.
- [Mother: Introducing KALLAX Storageborn](https://www.linkedin.com/posts/mother_introducing-kallax-storageborn-ikeas-solution-activity-7503785908534706176-iK7U) — firsthand campaign description.
- [LBB: IKEA Brings Ultimate Storage Solution to Gamers with KALLAX Storageborn](https://lbbonline.com/news/IKEA-KALLAX-Storageborn-Mother) — launch description and distribution plan.
- [r/gaming: IKEA × Skyrim discussion](https://www.reddit.com/r/gaming/comments/1wbq721/ikea_launches_official_the_elder_scrolls_v_skyrim/) — the issue's supplied discussion, used as selected reaction evidence.
- [Bethesda Creations: KALLAX STORAGEBORN](https://creations.bethesda.net/en/skyrim/details/bb2fbdf4-239e-4945-b69a-a5560fcf5b86/KALLAX_STORAGEBORN) — canonical distribution reference; not readable in this session.
