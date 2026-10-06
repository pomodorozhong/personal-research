# Building in public without losing the work

Building in public means sharing selected parts of making a product while the work is still underway: decisions, experiments, prototypes, releases, and what changed after feedback. It can create useful conversations and a record of progress. Whether it helps distribution depends on who sees it and what they can do next.

[Buffer's open dashboard](https://buffer.com/open) is a concrete transparency example: the company publishes finances, salaries, and a product roadmap. Buffer describes trust and accountability as motivations. The existence of those artifacts does not establish that public sharing caused its growth, or that a solo developer should reveal the same information.

The choices below are my proposed operating approach for a small indie product. They distinguish source examples from recommendations rather than treating “build in public” as a universally validated growth method.

## Choose an audience before choosing a post

An update can serve different people. A developer may find a rendering bug interesting; a paying customer may only care that exporting a document now works. Both are legitimate audiences, but feedback from one does not establish demand from the other.

| Intended audience | Useful update | Useful next action |
| --- | --- | --- |
| Potential users | A specific problem and a short demonstration of the result. | Try the workflow or describe how they solve the problem today. |
| Existing users | A shipped improvement, its limitations, and migration instructions if needed. | Use it and report an issue. |
| Other builders | A reproducible technical finding or a decision with its trade-offs. | Compare approaches or reproduce the result. |
| Collaborators | A clear progress note and the next unresolved question. | Review, help, or make a decision. |

My default is to lead with the customer's task when seeking customers, and reserve implementation detail for a builder audience. A post that only invites applause rarely resolves a product uncertainty.

## What to share and what to keep private

Useful material includes a before/after workflow, a cut feature and the reason, a failed experiment with its boundaries, a release note, or a small measurement with definitions. Say whether the result comes from a prototype, internal test, or released product. Use synthetic or explicitly permitted data for demonstrations.

Before publishing, inspect the whole screenshot or recording, including tabs, notifications, URLs, filenames, and logs. My proposed boundary is to keep customer data, credentials, private conversations, and commercially sensitive commitments out of public updates. An aggregate can still reveal a person when the group is very small; choose a less revealing explanation rather than assuming aggregation solves it.

Public feedback is not always the right feedback channel. In its [transparent-feedback experiment](https://buffer.com/resources/transparent-feedback-experiment/), Buffer describes difficulties when interpersonal feedback became public, including the added difficulty of handling incorrect criticism. That is an account from one organization, not a study of every public-building practice. It is a useful reason to preserve private channels for sensitive corrections.

## Use channels for different jobs

My suggested starting point is one durable home and one discussion channel:

- Keep the product's changelog or development notes somewhere linkable. A new reader should be able to understand the current state without reading months of posts.
- Use a community where the relevant users already discuss the problem. Read its rules and contribute useful information before asking for attention.
- If using a public roadmap, separate ideas, planned work, work in progress, and shipped features. “Considering” should not read as a guaranteed delivery date.
- Offer a private feedback route for people who cannot discuss their workflow publicly.

[GitHub Projects supports public and private visibility](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects). Tool support is not a reason to make all internal planning public. Inspect what a signed-out visitor can actually see before sharing a roadmap link.

## A weekly example

**Original illustration:** the maker of a fictional CSV-cleaning utility has found that beginners do not understand what a date conversion will change.

The week's update could contain:

1. The observed problem: three pilot users hesitated before converting a date column. State the small sample and the pilot context.
2. The change: a preview now shows the original and proposed value side by side, with a disposable sample CSV.
3. The remaining limit: ambiguous dates still require the user to choose a format; the app does not guess silently.
4. The request: “Can you tell which values will change from this preview?” Link to the demo and a private feedback option.

The observation and product are fictional. The example shows how a bounded finding can be shared without claiming “everyone loves the new version.” After collecting feedback, publish the actual decision—even if the preview needs another revision.

For a one-hour weekly communication budget, I would allocate twenty minutes to drafting, twenty to preparing a safe demonstration, and twenty to reading and recording useful responses. This is a chosen budget, not a best-practice benchmark. If communication repeatedly expands beyond it, reduce channels or frequency.

## Measure whether sharing helps

My review would track time spent, relevant conversations, demo attempts, first useful results, and repeat use from identifiable referral paths where measurement is appropriately disclosed. Keep reach and business outcomes separate.

**Hypothetical contrast:** a developer thread generates 1,000 visits, ten trials, and two repeat users. A small customer-community post generates 25 visits, ten trials, and two repeat users. The latter has higher visit-to-trial conversion (`40%` versus `1%`), but the same number of repeat users. Different audiences and small samples prevent attributing the difference to wording alone. The example is a prompt to investigate audience fit, not proof that one channel is superior.

Ask users how they found the product; analytics misses private recommendations and cross-device paths. Count a relevant conversation even when it leads to a decision not to build something.

## Watch the costs as well as the benefits

Possible costs include distraction, pressure to look successful, performative work, imitation, and a public audience made mostly of other builders. These are risks in my operating model, not measured probabilities. A visible feature can be easier to copy; feedback can also identify a problem sooner. Decide what must remain private and whether the learning is worth the exposure.

If sharing consumes the time needed to fix the product, attracts few target users, or creates promises you cannot responsibly keep, narrow it to release notes or pause it. Accountability should help finish useful work, not force continuation of a weak idea.

[Back to Indie Hacking](../README.md)

## Sources

- [Buffer: Open](https://buffer.com/open) — current public transparency artifacts and stated motivations; checked 2026-10-07.
- [Buffer: The Transparent Feedback Experiment](https://buffer.com/resources/transparent-feedback-experiment/) — a firsthand account of the limits of making interpersonal feedback public.
- [GitHub: Managing visibility of your projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects) — public/private project controls. The audience map, budget, metrics example, and operating recommendations are original analysis.
