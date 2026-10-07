# Marketing funnel for a small indie product

People can discover a product, try it, and leave before it solves their problem. A marketing funnel makes those steps visible so that the product owner can investigate where people stop and choose a useful improvement. This guide follows one small product from discovery through payment, repeat use, and referral.

## Follow one person from a problem to a useful result

Consider a fictional CSV-cleaning app for freelancers whose files contain dates that an importer rejects. The product, counts, and proposed changes throughout this guide are illustrative; they are not measured results or conversion benchmarks.

A freelancer searches for help with a rejected file and finds an explanation of date formats. The explanation links to the app, where a sample shows how `07/10/2026`, interpreted as day/month/year, becomes `2026-10-07`. The sample lets the freelancer see what the app does before creating an account.

Next, the freelancer checks the supported formats, price, and how uploaded data is handled, then starts a trial with their own file. A useful first result is a valid export whose output they can inspect. Call that **activation**: the point at which someone first obtains the value the product is meant to provide. A signup alone does not show that this happened.

If the trial solves the task and the price is acceptable, the freelancer may pay. Later, another import job may bring them back. After a successful result, they may recommend the app to a colleague using a safe sample rather than sharing a private client file.

The stages give names to the decisions in that journey:

| Stage | What the person is deciding | Observable action in this example |
| --- | --- | --- |
| Awareness | Is there a way to solve this import problem? | Discover the explanation and visit the product page. |
| Interest | Does this look useful enough to explore? | Complete the sample. |
| Consideration | Will it work for my file, at an acceptable price? | Check fit and start a trial. |
| Conversion | Is the result worth paying for? | Complete the first payment. |
| Retention | Is it useful when the task comes up again? | Return and complete another useful export. |
| Referral | Would this help someone else? | Recommend it and bring a new visitor. |

These actions are signals, not direct readings of someone's thoughts. A pricing-page visit, for example, cannot establish that the person understood the price. Voluntary customer conversations can help explain the behavior.

The journey can also take other paths. Someone might arrive through a colleague's recommendation and buy without completing the sample. As [HubSpot's marketing-funnel overview](https://blog.hubspot.com/marketing/i-took-a-deep-dive-into-the-marketing-funnel-heres-what-i-learned) explains, buyers can skip stages or return later. The stages help organize questions about a product; a measured funnel needs explicit rules about which paths it counts.

## Turn that journey into comparable counts

Start with a **cohort**: a group of people who enter during a defined period and whose progress you follow. For this worksheet, assume 600 distinct landing visitors who arrive during one week, with consistently linked identities. Of those visitors, 180 complete the sample, 60 then start a trial, and 18 of those trial users pay. Each person completes their counted acquisition steps within 14 days of their own landing visit. All 600 have completed that observation window.

This is a **closed funnel**: entry begins at the landing visit, and later counts include only people who completed the required earlier steps in order. The rate between two steps divides the people who reached the next step by the people eligible to reach it.

| Transition | Calculation | Rate |
| --- | --- | --- |
| Landing visit → sample completion | `180 / 600` | 30% |
| Sample completion → trial start | `60 / 180` | About 33.3% |
| Trial start → first payment | `18 / 60` | 30% |

Across the whole acquisition path, `18 / 600 = 3%` of landing visitors become buyers. That answers a different question from the 30% trial-to-buyer rate: changing the denominator changes which part of the journey you are examining.

Now look inside the trial. Of the 60 trial users, 36 complete a useful export during that same acquisition window. All 18 buyers activate before paying. Trial activation is therefore `36 / 60 = 60%`, while payment among activated trial users is `18 / 36 = 50%`. The other 24 trial users have not reached a useful result. That gives a more specific problem to investigate than the visitor-to-buyer rate alone.

### Follow buyers long enough to observe repeat use

For this example, repeat use means another useful export during days 30–44 after each buyer's first payment. All 18 buyers have reached the end of that window, and 12 return. The repeat-use rate is `12 / 18`, or about 66.7%.

The window matters. A buyer who paid yesterday has not had the same opportunity to return as someone who paid six weeks ago. Include only buyers whose full follow-up window has elapsed when calculating this rate. Also check whether the window fits the task: a freelancer who imports files quarterly may get value from the app without using it each month. For a subscription, renewal and repeat useful use are separate measurements.

### Count referrals and their recipients separately

After returning, four of the 12 buyers bring a new visitor through a referral link by day 60 after their own payment. All 12 have completed that follow-up window. A **qualified referral** here means that a new recipient actually visits; clicking a share button alone does not qualify. The proportion of returning buyers who refer is `4 / 12`, or about 33.3%.

Those four people bring 12 new visitors in total. Five of the new visitors activate and two pay within 14 days of each recipient's own landing visit. All 12 recipients have completed that window. For this separate referred cohort, activation is `5 / 12`, about 41.7%, and visitor-to-buyer conversion is `2 / 12`, about 16.7%.

The 12 recipients are new people entering the product's journey, rather than a further subset of the original 600. Referral can feed back into awareness this way. A customer can also refer before returning; record that path separately from this worksheet's returning-buyer path. These counts alone do not show that referrals cause purchases, sustain growth, or make an incentive worthwhile.

## Check what the measurement includes

Before using a rate to choose work, write down the entry period, identity rule, required actions, sequence, and follow-up windows. Count distinct people for this worksheet. Repeated page views, exports, and payments are different quantities; a team subscription may also have several users but one payer.

An **open funnel** allows entry at a later step. In [Google Analytics funnel exploration](https://support.google.com/analytics/answer/9327974), both open and closed funnels still count subsequent steps according to the configured sequence. A person who visits the landing page, skips a required sample, and pays can be absent from the payment step of that exploration. A missing step in the report therefore needs investigation before being treated as an abandoned purchase. Check whether intervening actions are allowed and whether a step has a time limit.

A spreadsheet with consistent counts can be enough to start. If using analytics, verify the recorded actions on a test account and reconcile payments with the payment system. [GA4 key events](https://support.google.com/analytics/answer/9267568) identify actions important to a business, but marking an event does not establish that it represents useful product use. Count unique people separately from event totals.

Keep channel impressions and clicks alongside the funnel rather than adding them to the user cohort: one person can generate many impressions. Record how you assign visitors to channels and where consent, anonymous visits, or cross-device use leave gaps. Collect only the event data needed for the question, without including uploaded CSV contents.

## Choose a change that addresses the reason people stop

The largest loss in the worksheet is between landing visits and sample completion: 420 people do not complete the sample. That count does not explain why they stop or whether they need the product. Improving a smaller step can be more useful if there is a clear, fixable problem there.

For example, investigate the 24 trial users who did not activate by inspecting export failures and asking willing users where they got stuck. Suppose this investigation finds that the app rejects ambiguous dates without helping people choose the date order. A concrete change is to replace “Invalid date” with “Choose the date order used in your file: day/month/year or month/day/year,” then show a preview such as `07/10/2026 → 2026-10-07` for the day/month/year choice.

This gives someone a way to resolve the error and inspect the result. If their file format is unsupported, that diagnosis instead points to a clearer compatibility explanation or a decision about adding support.

The same reasoning applies elsewhere in the journey:

| Where people stop | What to investigate | A change matched to that finding |
| --- | --- | --- |
| Discovery | The message reaches people without the relevant import problem. | Answer a specific import question where that audience looks for help. |
| Sample | The page hides the result behind signup or explains it vaguely. | Show a small before-and-after example with a clear next action. |
| Trial | Format support, data handling, or setup is unclear. | Explain the limits and shorten the path to the first useful export. |
| Payment | Checkout fails or the recurring price is unclear. | Fix verified errors and explain the total price. |
| Repeat use | Exports are unreliable or people must redo setup. | Fix failures, save reusable settings, and offer relevant help. |
| Referral | Sharing risks private data or gives the recipient little value. | Offer a safe sample or reusable template with an optional invitation. |

For the date-order change, compare later cohorts using the same definitions. Set a review date and a criterion for keeping the change before looking at the results. Track activation alongside paid conversion, refunds, support time, and repeat use so that a gain in one step does not hide a problem elsewhere. With small groups, report the raw counts as well as rates; a before-and-after difference alone does not establish that the change caused it.

If acquiring visitors costs money, compare that cost with what customers actually contribute after relevant costs and refunds. An assumed lifetime value is a forecast, so keep it distinct from measured customer revenue and costs when deciding how much to spend.

[Back to Indie Hacking](../README.md)

## Sources

- [HubSpot: Stages of the marketing funnel](https://blog.hubspot.com/marketing/i-took-a-deep-dive-into-the-marketing-funnel-heres-what-i-learned) — the stage framework and nonlinear customer journeys.
- [Google Analytics: Funnel exploration](https://support.google.com/analytics/answer/9327974) — entry, sequence, and timing rules for measured funnels.
- [Google Analytics: About key events](https://support.google.com/analytics/answer/9267568) — how important measured actions are identified. The CSV product and worksheet are original illustrative applications.
