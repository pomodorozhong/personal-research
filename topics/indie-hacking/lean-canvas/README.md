# Lean Canvas: an idea made testable

A Lean Canvas is a short model of what must be true for a business to work. Ash Maurya [created it as an adaptation of the Business Model Canvas](https://ashmaurya.com/blog/what-is-lean-canvas), replacing four company-oriented boxes with Problem, Solution, Key Metrics, and Unfair Advantage. Its purpose is to expose assumptions, not make an uncertain business look settled.

Maurya recommends sketching an initial version quickly, accepting unknowns, and keeping it to one page. He does not require one universal fill order. The hard part comes afterward: [identifying risk, running tests, and updating the model](https://ashmaurya.com/blog/why-simple-isnt-easy).

The linked [LEANSpark page](https://leanspark.ai/leancanvas), checked 2026-10-07, describes twelve blocks. The familiar nine-box presentation groups Existing Alternatives under Problem, Early Adopters under Customer Segments, and High-Level Concept under Unique Value Proposition. The example below makes all twelve prompts visible while keeping the nine main boxes. An AI-filled canvas is still a set of claims; it is not customer evidence.

## A complete indie-product example

**Original, fictional example — version 0.1, 2026-10-07.** “BriefBridge” is a proposed tool for freelance web designers who need a client-approved project brief. No interviews, trials, or sales described here have been conducted.

| Main box | Initial assumption |
| --- | --- |
| Customer Segments | Freelance web designers working on several small client projects. **Early Adopters:** designers who already maintain a brief template and recently had a revision dispute. The designer pays; their client reviews the brief without an account. |
| Problem | Requirements arrive across email and calls; scope changes are hard to distinguish from the agreed brief; approvals are difficult to retrieve. **Existing Alternatives:** a shared document, email confirmation, or the designer's current project-management tool. |
| Unique Value Proposition | Turn scattered requirements into one client-approved brief that makes later scope changes visible. **High-Level Concept:** a versioned project brief with a simple approval record, rather than a full project-management suite. |
| Solution | Guided brief fields; a read-only client review link; a saved approval snapshot and explicit change history. No automatic contract generation or invoicing in the first version. |
| Channels | Interviews through existing designer contacts; a useful sample brief in communities that allow it; search pages about handling brief revisions. Availability and conversion of each channel are unproven. |
| Revenue Streams | Hypothesis: $12 per active designer per month after a clearly described trial. Test repeat-project demand before committing to a subscription. Client reviewers are free. |
| Cost Structure | Fixed hosting and administration; variable storage and email; acquisition time; support; development and maintenance time. Start with measured estimates rather than calling the founder's labor free. |
| Key Metrics | Interviewees with a recent documented scope problem; designers producing a brief; clients approving it; designers using it for another project; paid conversion and contribution per account. |
| Unfair Advantage | **None established.** Access to a few designers is a recruitment convenience, not a durable barrier to competitors. Do not rename enthusiasm or ordinary features a moat. |

There is a dependency hiding in this canvas: the designer cannot get value from “approval” unless the client can review the document easily. Testing only the designer's editor misses a core risk.

## Rank the assumptions before building

My proposed risk ranking for this fictional product is:

| Risk | Why failure matters | Cheapest useful evidence |
| --- | --- | --- |
| Designers experience this problem often enough | Infrequent pain weakens repeat use and willingness to pay. | Recent examples of actual projects and workarounds. |
| Clients will use the review link | The core outcome depends on another person. | Observe a designer-client pair completing the review. |
| Designers prefer a paid tool to their document template | A usable solution can still be commercially unnecessary. | A transparent paid pilot offer after delivering a useful result. |
| Brief history is feasible and reliable | An approval record that changes silently defeats the promise. | A small end-to-end prototype with immutable snapshots. |

These priorities are this guide's application, not a prescribed order from Maurya. Test the assumption that would invalidate the others, rather than the feature that is most enjoyable to implement.

## Turn the canvas into a learning loop

**Proposed tests, with example decision thresholds chosen before observing results:**

1. Interview eight designers matching the early-adopter definition. Ask about their last project, what changed, and how they resolved it. Proceed only if at least five can describe a recent problem and an existing workaround. Compliments about the proposed app do not count.
2. Observe five designer-client pairs using a disposable prototype and fictional project data. At least four pairs should create, review, and approve a brief without the founder taking over. Record where participants hesitate.
3. Invite the successful pairs into a clearly labeled pilot at the stated price. Look for at least three concrete acceptances out of five offers; distinguish an actual paid commitment from “I might use this.” State delivery dates and cancellation/refund terms before taking money.
4. Observe whether at least three of the five designers use the workflow for another qualifying project within the agreed follow-up period. If no new project occurs, mark repeat-use evidence unavailable rather than recording a product failure.

Small samples are useful for discovering problems, not establishing a population conversion rate. Record recruitment bias and inconclusive results. These thresholds are planning choices for this example, not validated benchmarks.

## Revise it when evidence disagrees

**Hypothetical revision, not a reported experiment:** suppose interviews reveal that designers already have good templates, but struggle to prove which version a client approved. Change Problem and Unique Value Proposition to focus on approval history. Remove guided writing from the initial Solution. Change Key Metrics from “briefs created” to “approvals retrieved without ambiguity.”

If designers need the tool only once a quarter, compare a per-project offer with the subscription hypothesis. Keep the former price in the version history rather than silently rewriting it. If clients refuse another login, that supports the no-account review constraint; it does not prove the whole business works.

For every revision, save the date, changed box, evidence link or observation, interpretation, and next test. Keep a canvas state such as **assumed**, **supported in this sample**, **contradicted**, or **unknown**. A filled box and a tested box are different things.

The next artifact should be an experiment and its recorded result. Polishing the canvas repeatedly can postpone learning just as easily as polishing code.

[Back to Indie Hacking](../README.md)

## Sources

- [Ash Maurya: What is a Lean Canvas?](https://ashmaurya.com/blog/what-is-lean-canvas) — origin, purpose, sketching guidance, and flexible fill order.
- [LEANSpark: Lean Canvas](https://leanspark.ai/leancanvas) — current twelve-prompt presentation; checked 2026-10-07.
- [Ash Maurya: Why Simple Isn't Easy](https://ashmaurya.com/blog/why-simple-isnt-easy), 2026-10-02 — explicit hypotheses, experiments, and ongoing decisions. BriefBridge and all test thresholds are original illustrations.
