# Building in public without losing the work

When a product is still taking shape, an update can help someone understand a change and respond to an unresolved question. Building in public means sharing selected decisions, prototypes, experiments, and releases during that work. Its value depends on who sees the update and what their response can help decide.

This guide follows a packing-list app from a useful public update to feedback, channel choices, and outcome measurement. It also considers how to keep sharing from consuming the time or privacy the product needs.

## Give one audience something useful to respond to

Consider a fictional shared packing-list app for parents preparing a family trip. Both adults can see which items have been packed. In an illustrative pilot, three parents hesitate when tapping a checkmark: they cannot tell whether the item is packed or removed from the list. The maker changes the label to “Packed” and keeps the item visible. The app, pilot observation, update, budget, and channel counts throughout this example are illustrative.

The relevant audience is parents who coordinate packing, and the question is whether the new state is understandable. A short update could read:

> Three parents trying our packing-list prototype were unsure what a checkmark meant. Items now stay visible with a “Packed” label. Here is a sample list with socks packed and a toothbrush still to pack. Can you tell what remains? The shared-list change is still a prototype; private feedback is welcome.

This gives readers a task rather than a request for applause. If someone still thinks the toothbrush has been deleted, the next change might need clearer grouping or an undo action. If they understand the state but do not share packing duties, their response says less about the target workflow. A small pilot can reveal a problem without showing how common it is.

The audience changes what belongs in the post:

| Audience | Useful material | Response it can support |
| --- | --- | --- |
| Potential users | The packing problem and a sample list. | Try the task or explain their current workaround. |
| Existing users | A shipped change and its limits. | Use it and report difficulties. |
| Other builders | A reproducible technical finding. | Compare approaches or reproduce a bug. |
| Collaborators | Progress and an unresolved decision. | Review or help choose the next step. |

A developer can help diagnose a synchronization bug without being a likely buyer. Keeping the two audiences distinct prevents technical enthusiasm from being mistaken for evidence that parents need the app.

## Share enough to explain the change safely

For the packing update, a synthetic list containing socks and a toothbrush is enough to explain the state change. A real family's travel dates, address, or medication list would add private information without answering the question. Show the smallest permitted example that makes the change understandable.

Inspect the whole screenshot or recording, including tabs, notifications, filenames, URLs, and logs. Keep credentials, private conversations, customer information, and sensitive commitments out of public material. Aggregation can still identify someone in a tiny group; describe the mechanism more generally when a count would expose a participant.

State whether the change is proposed, in a prototype, or released. This gives the reader a reason to trust the description without turning uncertainty into a delivery promise. [Buffer's open dashboard](https://buffer.com/open) illustrates a broader transparency choice: the company publishes finances, salaries, and its roadmap, describing trust and accountability as motivations. Those artifacts do not establish a causal growth effect or imply that a solo maker should disclose the same information.

Some responses belong in private. Buffer's [transparent-feedback experiment](https://buffer.com/resources/transparent-feedback-experiment/) describes difficulties with public interpersonal feedback, including handling incorrect criticism. It concerns employees within one organization, not every form of public product work. It supports retaining a private route for sensitive corrections rather than making public discussion the only way to contribute.

## Put the update where the intended response is possible

A parenting community that permits product-work discussions could help with the packing question. Read its rules and contribute useful material; a relevant audience does not authorize unsolicited promotion. If the community welcomes the example, link to a safe sample and make feedback optional. A builder forum may be more suitable for the synchronization problem.

Keep a durable changelog or development note alongside the discussion. New readers can see the current state, and a follow-up can connect the feedback to the decision made. For example, record that the prototype's labels changed again because testers misunderstood the “to pack” section. This gives accountability a concrete purpose: showing whether the unresolved question was addressed.

If a roadmap is public, distinguish ideas, planned work, work in progress, and shipped behavior. [GitHub Projects supports public and private visibility](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects); check what a signed-out reader actually sees before sharing it. Public visibility should support the explanation, not accidentally expose internal commitments.

A chosen communication budget can bound the work. For this example, one weekly hour could be split into twenty minutes drafting, twenty preparing a safe demonstration, and twenty recording useful responses. It is an example allocation rather than a benchmark. If preparing posts crowds out the label fix, reduce frequency or channels so that communication helps the product advance.

## Follow attention into useful use

An update can receive visits while teaching little about demand. To judge distribution, follow people into a trial, a first useful result, and later use, while also recording the time spent communicating. For the packing app, a useful result is creating a list that another household member can open and use.

In the example comparison, a developer thread brings 1,000 distinct visits, ten trials, and two repeat users. A customer-community post brings 25 visits, ten trials, and two repeat users. Trial starts are measured within seven days of each person's visit, and repeat use means completing another packing-list session during days 8–14. Everyone has completed the relevant windows, and each channel uses the same definitions.

| Route | Visits | Trials | Visit-to-trial rate | Repeat users |
| --- | ---: | ---: | ---: | ---: |
| Developer thread | 1,000 | 10 | `10 / 1000 = 1%` | 2 |
| Customer community | 25 | 10 | `10 / 25 = 40%` | 2 |

The larger visit total has not produced more repeat users. Both paths reach two people who return, which is closer to the app's continued usefulness than visibility alone. The higher trial rate raises a question about audience fit, but different audiences and small counts prevent attributing it to wording or declaring one route reliably better. Time spent on each route and what the returners actually accomplished would affect the next communication choice.

Ask optionally how users found the product; private recommendations and cross-device paths are incompletely observed. Keep unobservable attribution unknown and measurement appropriately disclosed. A conversation that leads to cutting an unnecessary feature can also be valuable even if it produces no trial.

## Decide whether sharing is helping the work

The packing update has a clear loop: show the confusing state, ask the relevant audience to interpret it, change the interface from their response, and publish the resulting decision. That is different from continually posting progress without resolving a product question.

Sharing also has costs. Preparing attractive posts can distract from failures; public promises can create pressure to continue a weak idea; visible features can be imitated; and a large builder audience may never become customers. Assess those costs alongside useful feedback and repeat use. If the update spends more time than the learning justifies, narrow it to release notes or pause it. Accountability and distribution matter when they help finish and sustain a useful product.

[Back to Indie Hacking](../README.md)

## Sources

- [Buffer: Open](https://buffer.com/open) — public transparency artifacts and stated motivations, checked 2026-10-07.
- [Buffer: The Transparent Feedback Experiment](https://buffer.com/resources/transparent-feedback-experiment/) — a firsthand account of public interpersonal-feedback difficulties.
- [GitHub: Managing visibility of your projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/managing-your-project/managing-visibility-of-your-projects) — project visibility controls. The packing example, budget, audience comparison, and operating suggestions are original applications.
