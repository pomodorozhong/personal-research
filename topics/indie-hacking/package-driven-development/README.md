# Package-driven product development

A product page can promise an easy result that the implementation cannot yet deliver. Writing that promise before building can expose the gap early: who needs the result, what behavior it requires, and which claims need evidence. In this guide, **Package-Driven Product Development (PDD)** means defining how a product will be explained, presented, and offered, then building and checking the behavior that fulfills that package. It is the working definition discussed in [issue #136](https://github.com/pomodorozhong/rabbit-holes/issues/136), not a standardized process.

The package includes the name, explanation, demonstration, offer, and conditions of use. Its usefulness comes from connecting what a customer expects with what must actually happen, rather than treating presentation as something added after implementation.

## Let one promise determine what must work

Consider a fictional packing-list app for two adults preparing a family trip. They want to stop asking whether socks or a toothbrush are already in the bag. A draft promise says: “Share one trip's packing list and see what each person has packed.” The product, proposed checks, and possible findings throughout this example are illustrative, not an implemented app or executed test.

That sentence already constrains the product. Both people must reach the same list, a packed item must stay identifiable, and a change by one person must become visible to the other. A personal checklist with two separate copies could look convincing in a screenshot while failing the shared task.

A proposed check uses two test accounts, Alex and Sam. Alex marks socks as packed. Sam then opens or refreshes the shared list and should see “Socks — packed by Alex,” while “Toothbrush — to pack” remains unchanged. This is an **acceptance check**: a concrete scenario for deciding whether the promised behavior is delivered.

If Sam still sees socks as unpacked, the finding points to a mismatch in shared state. The maker could fix synchronization or narrow the offer to a personal checklist, but the narrower offer would no longer solve the stated coordination problem. Before release, choose the behavior and update the promise together. Changing the headline while leaving the demonstration to imply sharing would preserve the mismatch.

The rest of the promise can be mapped in the same way:

| Promise element | Minimum behavior | Check before making the claim |
| --- | --- | --- |
| Share one list | Invite another adult to the same trip list. | Two accounts reach the intended list without accessing unrelated lists. |
| See what is packed | Preserve the item and show its state. | Mark socks packed; the toothbrush remains to pack. |
| See who packed it | Display the correct actor with the change. | Sam sees that Alex packed the socks. |
| Coordinate changes | Update both views under the stated connection conditions. | Verify both views, including a clear response to a failed update. |

If sharing requires both devices to be online, explain that condition next to the promise. Offline collaboration, automatic travel suggestions, and booking integrations can remain outside the first offer. A concept preview should be labeled as proposed; a release claim needs evidence from the real workflow.

## Expand the package around the customer's decision

The shared-list sentence does not answer everything the family needs before trying or buying. They need to know how to invite someone, what access costs, and whether the app fits their trip. A small initial package can cover those questions:

| Component | Question it answers | Consequence for implementation |
| --- | --- | --- |
| Audience and problem | Who is coordinating which task? | Select the supported household workflow. |
| One-sentence promise | What useful result will they obtain? | Define the acceptance scenario. |
| Preview or demonstration | How will they reach that result? | Show indispensable behavior and visible quality. |
| Offer | What does access cost, include, and require? | Plan delivery, entitlement, support, and ongoing costs. |
| Limits | What is outside this version? | Bound scope and explain failure conditions. |
| Getting started | How does the second person join? | Include invitation and first use in the product. |
| Evidence and status | Is this proposed, a prototype, or released? | Keep current capability separate from aspiration. |

The table extends the initial check: invitation and delivery are now part of keeping the promise, not optional finishing touches. An attractive mockup helps communicate the idea but cannot establish that those paths work.

## Compare PDD with other ways of writing before building

Matthew Guay's [“Write documentation first. Then build.”](https://reproof.app/blog/document-first-then-build) argues that writing clarifies a product and its explanation. For the packing app, a draft usage guide could reveal an unexplained step in joining a list. PDD applies that discipline to the customer-facing offer as well; the article does not name or validate a PDD method.

[Colin Bryar and Bill Carr's Working Backwards account](https://workingbackwards.com/concepts/working-backwards-pr-faq-process/) starts with a future press release and frequently asked questions for customers and the internal team. That adds business and operational questions behind the result. PDD overlaps with it, emphasizing the complete presentation and offer rather than requiring one document format.

| Approach | Main artifact | Question made explicit | What the document alone cannot establish |
| --- | --- | --- | --- |
| Documentation-first | Usage guide or walkthrough. | Can the behavior be explained and followed? | Whether people want it enough to adopt or buy. |
| Working Backwards | Future press release and customer/internal FAQ. | What customer result and operating model are intended? | Demand and successful execution. |
| PDD as used here | Customer-facing package with behavior checks. | Does the offer connect to a deliverable experience? | Whether a compelling presentation hides a weak implementation. |

The analogy to test-driven development, where tests are written before implementation, has a limit. A prose promise does not automatically become an executable test. The two-account scenario translates part of the promise into a check; its implementation still needs real verification.

## Examine a package that people can share without using the product

IKEA's KALLAX Storageborn campaign connects furniture with *Skyrim*, a fantasy game in which the player carries equipment and other items. A **mod**, or game add-on, changes or extends the playable game. This one turns a KALLAX shelf into a storage companion voiced by Matt Berry, giving the furniture brand a role in the game's inventory problem.

[Mother's campaign post](https://www.linkedin.com/posts/mother_introducing-kallax-storageborn-ikeas-solution-activity-7503785908534706176-iK7U) describes its work with IKEA and Kinggath Creations. [LBB's launch coverage](https://lbbonline.com/news/IKEA-KALLAX-Storageborn-Mother) reports a free September 9, 2026 release backed by digital, social, and gaming publicity. The premise gives someone a short story to repeat: a furniture shelf helps carry a game character's possessions.

The real add-on gives that story an experience to point to. For the package to remain credible, a player should be able to obtain the companion, use its storage help, and encounter the character presented by the campaign. Compatibility and installation are therefore part of the promise. “Good enough” means the stated experience works for the supported audience; a funny trailer does not make a nonfunctional add-on adequate. Gameplay quality and current compatibility were not verified here; the [Bethesda listing](https://creations.bethesda.net/en/skyrim/details/bb2fbdf4-239e-4945-b69a-a5560fcf5b86/KALLAX_STORAGEBORN) is the distribution reference.

The [r/gaming discussion of IKEA's Skyrim add-on](https://www.reddit.com/r/gaming/comments/1wbq721/ikea_launches_official_the_elder_scrolls_v_skyrim/) includes jokes about the shelf, voice, and crossover. Those selected reactions show a premise people can discuss. They do not measure the audience as a whole, installations, or furniture sales.

## Separate attention, use, and business effect

Someone can enjoy the launch story without installing the add-on. That creates separate evaluation questions: did the package reach relevant people, did the playable experience fulfill its promise, and did either affect the business?

| Question | Evidence to seek | What it leaves unresolved |
| --- | --- | --- |
| Did the package communicate a memorable association? | Relevant reach, meaningful engagement, recall, and brand association. | Whether playing fulfills the promise. |
| Did the artifact work for players? | Installation success, storage usefulness, completed interaction, and support problems. | Total cultural reach or furniture purchases. |
| Did the campaign affect the business? | Relevant interest or sales with a credible comparison. | Causality if other influences are uncontrolled. |

A large launch audience could coexist with few installations; successful installations could coexist with no sales effect. No verified exposure-to-install ratio or causal sales lift was established by the inspected sources. They also do not establish that IKEA designed its package before developing the mod. The case illustrates the relationship between presentation, implementation, and impact rather than confirming an internal PDD chronology. The [word-of-mouth question](https://github.com/pomodorozhong/rabbit-holes/issues/135) considers the sharing side of that relationship.

## Revise the promise and experience together

For the packing app, the two-account check is a reason to revise shared behavior before adding another decorative screenshot. Record the old claim, new claim, evidence, and affected behavior when scope changes. Update the demonstration, offer, instructions, and support expectations together; do not quietly turn a feature already purchased into a future roadmap item.

Before release, have a new reader describe what they expect to receive, then check the real workflow against that expectation. After release, investigate mismatches alongside use failures. Repeated caveats about joining or synchronization may reveal a design problem rather than a sentence that needs better wording.

The package can direct implementation and create attention, but those are different contributions. Its value depends on keeping the promised result, the delivered experience, and the evidence used to evaluate them connected.

[Back to Indie Hacking](../README.md)

## Sources

- [Matthew Guay: Write documentation first. Then build.](https://reproof.app/blog/document-first-then-build), 2022-06-10 — writing as product clarification.
- [Working Backwards: The Amazon PR/FAQ Process](https://workingbackwards.com/concepts/working-backwards-pr-faq-process/) — press release and FAQ method.
- [Mother: Introducing KALLAX Storageborn](https://www.linkedin.com/posts/mother_introducing-kallax-storageborn-ikeas-solution-activity-7503785908534706176-iK7U) — firsthand campaign description.
- [LBB: IKEA Brings Ultimate Storage Solution to Gamers with KALLAX Storageborn](https://lbbonline.com/news/IKEA-KALLAX-Storageborn-Mother) — historical launch description and distribution plan.
- [r/gaming: IKEA × Skyrim discussion](https://www.reddit.com/r/gaming/comments/1wbq721/ikea_launches_official_the_elder_scrolls_v_skyrim/) — selected audience reactions.
- [Bethesda Creations: KALLAX STORAGEBORN](https://creations.bethesda.net/en/skyrim/details/bb2fbdf4-239e-4945-b69a-a5560fcf5b86/KALLAX_STORAGEBORN) — canonical distribution reference; current compatibility is unverified. Campaign descriptions were checked on 2026-10-07.
