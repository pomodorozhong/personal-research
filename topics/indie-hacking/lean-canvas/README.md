# Lean Canvas: an idea made testable

Consider a fictional freelance designer who agrees to build a five-page website. Later, the client asks for online booking and believes it was included. The designer remembers a narrower agreement, but the brief has changed across documents and email. “BriefBridge” is a proposed tool for creating a brief, getting the client's approval, and finding that approved version when a new request arrives. The situation, canvas, tests, and possible revisions in this guide are illustrative, not findings from interviews or sales.

A Lean Canvas helps turn that product idea into claims that can be investigated. Ash Maurya [adapted it from the Business Model Canvas](https://ashmaurya.com/blog/what-is-lean-canvas), replacing four boxes with Problem, Solution, Key Metrics, and Unfair Advantage. Sketching a model exposes what must be true before investing heavily in the tool.

## Connect a problem to a result worth testing

The designer needs to retrieve a record of what the client approved. That suggests a **Problem**: agreement history is hard to recover. It suggests a **Solution**: save the reviewed brief and its approval record so later edits do not change the approved version. The corresponding **Key Metric** should indicate whether a designer can retrieve the right approval, rather than simply count how many drafts were created.

That result depends on another person. A designer can write a brief alone, but cannot obtain the promised approval record if the client finds the review link confusing and never finishes. The solution therefore needs a usable client review path, and the test must include both people. A convenient editor is only one part of the product's central claim.

The canvas makes this relationship visible alongside other questions: who pays, how often the problem occurs, and what it costs to serve them. Maurya recommends a quick first sketch with unknowns visible, without one mandatory fill order. The continuing work is [testing risky assumptions and updating the model](https://ashmaurya.com/blog/why-simple-isnt-easy).

## Read the complete canvas as a set of assumptions

The nine main boxes below capture the first version of BriefBridge. The [LEANSpark presentation](https://leanspark.ai/leancanvas), checked 2026-10-07, uses twelve prompts. Here, Existing Alternatives sits under Problem, Early Adopters under Customer Segments, and High-Level Concept under Unique Value Proposition, making those prompts visible within the nine-box layout. A completed or AI-generated box is still a claim rather than customer evidence.

| Main box | Initial assumption |
| --- | --- |
| Customer Segments | Freelance web designers with several small client projects. **Early Adopters:** designers with a brief template and a recent revision dispute. The designer pays; the client reviews without an account. |
| Problem | Requirements arrive across calls and email; scope changes are hard to distinguish from the agreed brief; approvals are hard to retrieve. **Existing Alternatives:** a shared document, email confirmation, or the designer's project-management tool. |
| Unique Value Proposition | One client-approved brief whose later scope changes remain visible. **High-Level Concept:** a versioned brief with an approval record, rather than a full project-management suite. |
| Solution | Guided brief fields; a client review link; a saved approval snapshot and change history. No automatic contract generation or invoicing in the first version. |
| Channels | Existing designer contacts, a useful sample brief in communities that permit it, and search pages about brief revisions. Recruitment and conversion are unproven. |
| Revenue Streams | A $12-per-designer monthly subscription after a clearly described trial. Client reviewers are free. Repeat-project demand must justify the subscription. |
| Cost Structure | Fixed hosting/administration, variable storage/email, acquisition, support, development, and maintenance time. Founder labor is not assumed free. |
| Key Metrics | Recent scope problems; brief creation; completed client approvals; retrieved approval records; another project; payment and contribution per account. |
| Unfair Advantage | None established. Access to a few designers helps recruitment but does not itself prevent competition. |

For example, Revenue Streams assumes recurring use. If disputes occur rarely, a subscription may not fit even if approval history is valuable. A weak assumption can change both what gets built and how it is offered, so choosing which one to test matters more than polishing every box equally.

## Choose the assumption that could change the product

Start with failures that would undermine the promised result or make it commercially unnecessary. For BriefBridge, these are useful candidates:

| Assumption | What failure would change | Evidence to seek |
| --- | --- | --- |
| Designers have this problem often enough | Reconsider recurring use and the paid offer. | Recent disputes and the workarounds used. |
| Clients can finish reviewing a brief | Simplify or replace the approval path. | A designer-client pair completing it. |
| Designers prefer the paid tool to current documents | Change the value proposition or stop the offer. | A clear paid pilot after a useful result. |
| Approval history stays intact | Revise the implementation before promising reliable history. | A prototype retrieving unchanged approved snapshots after edits. |

This is a suggested ranking for the example, not an order prescribed by Maurya. If designers already write good briefs and only lose track of approvals, building extensive writing assistance would address the wrong part of the problem. That possibility gives a concrete purpose to the first interviews.

## Follow one assumption through a test and revision

For the problem assumption, interview eight designers matching the early-adopter definition. Ask about the last disputed project, which version they relied on, and how they recovered the agreement. One chosen threshold is that at least five describe a recent problem and an existing workaround before proceeding. A compliment about BriefBridge does not count as such evidence.

Suppose those conversations reveal that the designers already have good templates but cannot reliably recover which version the client approved. The initial Problem bundled writing and history together. This possible finding would narrow Problem and Unique Value Proposition to approval history, remove guided writing from the first Solution, and prioritize “approvals retrieved without ambiguity” in Key Metrics.

The proposed next test would have a designer and client approve a brief for a disposable project, then change its draft to add online booking. Ask the designer to retrieve the originally approved five-page scope. If the saved record has changed or is difficult to find, the central promise has failed even if the editor is pleasant to use. The revision and result here are hypothetical branches of the learning process, not a reported experiment.

## Extend the tests to usability, payment, and repeat use

Once the problem is worth investigating, other assumptions need their own evidence. Example choices for the next tests are:

1. Observe five designer-client pairs creating, reviewing, and approving a brief with disposable project data. Choose four of five finishing unaided as an initial usability gate, and record the points of hesitation.
2. Make five clearly described $12 pilot offers to designers who have obtained a useful approval record. If an earlier participant could not complete the task, correct that problem or recruit another qualifying participant before counting five offers. Look for three concrete acceptances, separating paid commitments from “I might use this.” Explain delivery, cancellation, and refund terms before payment.
3. Follow five designers into another qualifying project. Choose three using the workflow again within the agreed follow-up period as a prompt to continue investigating repeat use. If no new project occurs, record that evidence as unavailable rather than a product failure.

These small samples can expose difficulties, but do not establish a population conversion rate. Record recruitment bias, incomplete follow-up, and inconclusive results. The thresholds are project choices, not validated benchmarks.

If the task happens only once a quarter, compare a per-project offer with the monthly hypothesis. If clients avoid account creation, test the no-account review path. Keep the previous price and scope in version history so each revision can be traced to its reason.

Save the date, changed box, observation, interpretation, and next test for every revision. Label assumptions as unknown, supported in this sample, or contradicted. The canvas then connects decisions: evidence about approval changes the solution, and evidence about frequency changes the offer. Repeatedly polishing its wording cannot supply those missing observations.

[Back to Indie Hacking](../README.md)

## Sources

- [Ash Maurya: What is a Lean Canvas?](https://ashmaurya.com/blog/what-is-lean-canvas) — origin, purpose, sketching guidance, and flexible fill order.
- [LEANSpark: Lean Canvas](https://leanspark.ai/leancanvas) — twelve-prompt presentation, checked 2026-10-07.
- [Ash Maurya: Why Simple Isn't Easy](https://ashmaurya.com/blog/why-simple-isnt-easy), 2026-10-02 — explicit hypotheses, experiments, and ongoing decisions. BriefBridge and the test thresholds are original illustrations.
