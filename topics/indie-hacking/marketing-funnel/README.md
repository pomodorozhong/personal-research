# Marketing funnel for a small indie product

A marketing funnel makes the journey from first awareness to purchase and continued value easier to inspect. [HubSpot's overview](https://blog.hubspot.com/marketing/i-took-a-deep-dive-into-the-marketing-funnel-heres-what-i-learned) treats it as a diagnostic framework: real buyers can skip stages, return later, or research somewhere you cannot observe. I would use it to choose the next useful improvement, not to assume that every visitor follows one path.

## Give each stage a concrete meaning

**Original fictional example:** a CSV-cleaning app helps freelancers repair dates before importing a file. These are proposed actions and measurements for that product, not observed customer behavior or universal benchmarks.

| Stage | What the person needs | Observable signal and useful metric | Common drop-off to investigate | Small improvement to try |
| --- | --- | --- | --- | --- |
| Awareness | Recognize a relevant problem and discover an answer. | Channel impressions and clicks; deduplicated new landing visitors as a separate, observable entry point. | The message reaches people with no CSV-import problem, or promises the wrong task. | Answer one specific import question in a community where that answer is welcome; connect it to an accurate landing page. |
| Interest | Understand whether this is worth exploring. | Complete a disposable sample walkthrough; sample completers / eligible landing visitors. | The page is vague, or asks for a signup before showing any value. | Put a tiny before-and-after example beside a clear next action. |
| Consideration | Compare the app with alternatives and check its fit. | Start a trial after the sample; trial starters / sample completers. Also inspect successful first exports / trial starters. | Unsupported formats, unclear data handling, or an intimidating setup. | Show supported formats, local-processing limits, price, and a short path to the first useful export. |
| Conversion | Decide whether the benefit merits payment. | First successful payment; buyers / trial starters. Track checkout completion separately. | Checkout fails, the recurring price is unclear, or the trial has not solved the task. | Fix verified payment errors and explain the total price; investigate unsuccessful trials before adding urgency. |
| Retention | Solve the task again when it returns. | Another useful export in a defined follow-up window; returning buyers / buyers eligible for that window. Track renewals separately for subscriptions. | The job is one-off, the result is unreliable, or support leaves the user stuck. | Diagnose failures, save reusable settings, and offer relevant help without sending unwanted reminders. |
| Referral | Recommend something useful to another person. | Unique customers who make a qualified referral / eligible customers; then referred visitors, activations, and buyers as a new cohort. | Sharing exposes private data, offers no benefit to the recipient, or arrives before a successful result. | Offer a safe sample or reusable template after success, with an optional invitation and a clear recipient benefit. |

A signup is not proof of useful use, and a payment is not proof of retention. For this example, activation means completing a valid export whose output the user can inspect. “Pricing page viewed” can indicate consideration, but it cannot tell you whether someone understood the price. Pair behavioral signals with a few voluntary customer conversations.

## Define the counts before drawing the funnel

I would write down the identity rule, entry cohort, step definitions, allowed sequence, and follow-up windows. Count people who qualify, rather than treating repeated page views or button clicks as additional people. Keep people, accounts, and transactions distinct; a team subscription may have several users but one payer.

[Google Analytics funnel exploration](https://support.google.com/analytics/answer/9327974) distinguishes closed funnels, which require entry at the first step, from open funnels, which allow entry later. Its counts depend on the specified sequence, and steps can have time constraints or allow intervening actions. A missing required step can therefore exclude a buyer who actually paid. Check the definitions before calling that exclusion abandonment.

For a small product, a spreadsheet with consistent, minimally necessary counts may be enough initially. If using analytics, verify event collection on a test account and reconcile payments with the payment system. [GA4 key events](https://support.google.com/analytics/answer/9267568) mark actions important to the business; marking an event does not establish that it represents customer value.

Record channel attribution rules and known gaps from consent, anonymous identities, and cross-device use. Do not merge channel impressions into a user cohort: one person can generate many impressions, and different platforms may count them differently. Collect aggregate or appropriately disclosed event data without including uploaded CSV contents.

## Work through one mature cohort

**Original hypothetical worksheet:** assume 600 distinct landing visitors with consistently linked identities. In this deliberately closed funnel, 180 complete the sample, 60 then start a trial, and 18 of those trial users pay, all within 14 days of their entry. All 18 buyers first completed a useful export; 36 of the 60 trial users activated in total.

Of the 18 buyers, 12 perform another useful export during days 30–44 after their own first payment. Four of those 12 returning buyers make a qualified referral by day 60 after payment. For this worksheet, that means a new recipient actually visits using the referral link, not merely that a share button was clicked. Every buyer has completed the relevant follow-up windows, and all counts are unique people.

```text
Landing visitor → sample completion = 180 / 600 = 30%
Sample completion → trial start     =  60 / 180 ≈ 33.3%
Trial start → buyer                 =  18 /  60 = 30%
Buyer → repeat useful use           =  12 /  18 ≈ 66.7%
Returning buyer → qualified referrer =  4 /  12 ≈ 33.3%

Visitor → buyer                     =  18 / 600 = 3%
Trial activation                    =  36 /  60 = 60%
Activated trial user → buyer        =  18 /  36 = 50%
```

Do not compare the 12 returning buyers with a newer cohort whose users have not reached day 44. For a rarely used utility, this repeat-use window might be inappropriate: first investigate the job's natural frequency. An annual subscription renewal rate and a monthly task-use rate answer different questions.

The four referrers bring 12 new visitors, five of whom activate and two of whom pay within a separately specified 14-day window. That is `5 / 12 ≈ 41.7%` activation and `2 / 12 ≈ 16.7%` visitor-to-buyer conversion for the referred cohort. These are new people, not additional stages containing a subset of the original 600. A customer can also refer before returning, so track such paths separately rather than silently losing them from this particular closed funnel.

This makes referral a possible loop back into awareness. It does not establish a self-sustaining growth loop, prove causal attribution, or show that an incentive pays for itself.

## Choose an improvement from evidence

The largest numerical loss is not automatically the best place to work. First check that counts are trustworthy, then consider whether the people fit the product, whether they obtained value, and whether a proposed fix is affordable.

For the fictional cohort, my first question would be why 24 of 60 trial users did not activate. Inspect failed sample exports and ask willing users where they got stuck. If the evidence points to a format error, propose clearer validation and a working example. If the task is not valuable to these users, a better button label will not resolve the underlying fit problem.

A proposed test would compare future cohorts using the same definitions after that change. Track activation, paid conversion, refunds, support time, and repeat useful use together. Set a review date and a criterion for deciding whether to keep the change before observing the results. With small cohorts, show raw counts and acknowledge uncertainty; a before-and-after difference alone does not prove the change caused it.

If acquisition spending is involved, compare its cost with the contribution customers actually generate after relevant costs and refunds. More visitors can conceal poor retention or expensive support. Avoid presenting an assumed lifetime value as measured cash.

No product, analytics property, or experiment was deployed for this guide. The actions, thresholds, and arithmetic illustrate how I would investigate the funnel. Official analytics guidance and the marketing overview were checked on 2026-10-07.

[Back to Indie Hacking](../README.md)

## Sources

- [HubSpot: Stages of the marketing funnel](https://blog.hubspot.com/marketing/i-took-a-deep-dive-into-the-marketing-funnel-heres-what-i-learned) — the diagnostic framework and nonlinear customer journeys.
- [Google Analytics: Funnel exploration](https://support.google.com/analytics/answer/9327974) — entry, sequence, and timing rules that affect counts.
- [Google Analytics: About key events](https://support.google.com/analytics/answer/9267568) — identifying important measured actions. Stage examples and the worksheet are original hypothetical applications.
