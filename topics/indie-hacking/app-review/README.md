# App Review and paywall design

Research checked **2026-10-06**. Focus: iOS subscription apps distributed through
the App Store. Start with the purchase route and customer state the reviewer
actually saw; a rejection mentioning subscriptions does not necessarily require
a visual redesign.

Read the [real paywall gallery](gallery.md), then the [developer case notes](cases.md)
and [submission checklist](checklist.md). [Image provenance](images/README.md)
records the six source images. This research addresses
[issue #171](https://github.com/pomodorozhong/rabbit-holes/issues/171).

## What the evidence can establish

- **Written requirement:** an Apple rule or documented submission requirement.
- **Design guidance:** an Apple recommendation; preserve words such as “consider.”
- **Interpretation:** our explanation of a specific symptom or design choice.
- **Developer report:** a firsthand account, including copied reviewer messages.
- **Visible evidence:** a screenshot demonstrates its contents, not Apple's
  decision or the cause of that decision.

The case sample is deliberately small and selected for instructive evidence. It
cannot estimate rejection rates. “Accepted” below means the developer reports
acceptance of that submission, unless stronger evidence is identified. It does
not certify current compliance, every product, or every paywall experiment.

## The rules to read first

| Source | Relevant constraint or guidance |
| --- | --- |
| [App Review Guidelines][guidelines], 3.1.1 and exceptions | Digital feature unlocks generally use IAP; evaluate applicable category and storefront exceptions. |
| [Guidelines][guidelines], 3.1.2(a–c) | Subscriptions need ongoing value, periods of at least seven days, clear benefits, and no deceptive selling. |
| [Subscription purchase guidance][subscriptions] | Identify the subscription and duration; make the full billed price dominant over equivalent monthly/weekly prices. Explain trial length and subsequent charge. Provide restoration/sign-in and terms/privacy links in-app and in metadata. |
| [Apple In-App Purchase HIG][hig] | Distinguish offers, describe automatic charging after a trial, and use the system confirmation sheet. Trying content first is recommended. |
| [Guidelines][guidelines], 2.3.2 and 2.3.7 | Disclose featured paid features in marketing; public screenshot metadata has restrictions on price references. |
| [Submit an IAP][submit] | The first item of each IAP type needs a new app version. Collect the version, new subscription group, and subscriptions in the same draft submission. |
| [IAP information][iap-info] | A product's App Review screenshot is review evidence, separate from public marketing media. |

Seven days is the minimum **subscription period**, not the minimum free-trial
length: Apple's [introductory-offer table][offers] includes three-day trials.
Eligibility is limited to one introductory offer per subscription group. Check
the purchased product, offer dates, storefront, and customer eligibility rather
than hard-coding “free trial” for every visitor.

## What a paywall should let someone understand

For an ordinary annual offer, our suggested information sequence is: **what is
unlocked → total annual charge → trial and renewal terms → purchase action**.
This sequence is a design recommendation, not a required Apple template.

For example, a fictional offer could say “Premium reading tools,” “$59.99/year,”
and “7 days free, then $59.99/year; renews automatically unless canceled,” with
“Start 7-day free trial” as the action. If the customer is ineligible, remove the
trial promise and show the actual immediate purchase. Use localized StoreKit
product/offer information. Do not copy these illustrative prices into production.

Our practical assessment of common elements:

| Element | What to inspect | Reasoning |
| --- | --- | --- |
| Price hierarchy | Total billed amount, period, currency, contrast, and placement | A large “$5/month” can conceal an annual commitment even if “$60/year” appears elsewhere. |
| Trial wording | Duration, later charge, selected product, actual system sheet | Correct-looking copy can promise an offer that the transaction will not deliver. |
| Purchase button | Meaning and agreement with the selected plan | “Continue” alone tells little; nearby terms and the system sheet still matter. A particular button title is not a universal approval rule. |
| Plan selection | Whether a control also changes duration or price | A trial switch that silently moves annual to weekly combines separate decisions. |
| Exit | Visible return route for free content, restoration, and existing subscribers | Make the promised free experience reachable. Closing a paywall does not cancel a subscription. |
| Restore | Actual entitlement recovery, not just a label | A visible button with a broken restoration path solves nothing. |
| Legal links | Functional links, correct destination, all relevant metadata/localizations | A paywall footer and the App Store description are different review surfaces. |

**Dismissibility needs context.** The HIG recommends limited free access; it
does not establish that every iOS subscription app must offer a permanent free
tier. Its explicit Close/Cancel advice in the watchOS section concerns returning
to free content on that platform. For a freemium iOS app, our recommendation is
an obvious dismissal route. For a fully paid service, explain the business model
and give reviewers access; do not promise free features behind an unavoidable
purchase screen. [Apple HIG][hig], [App Review preparation][review].

## Read the specific objection, then choose the smallest complete fix

The following interpretations are troubleshooting hypotheses, not secret rules:

| Reviewer symptom | First hypothesis to check | Evidence to provide or change |
| --- | --- | --- |
| Cannot find IAP / 2.1 | The supplied account already owns access, or the entry route is obscure | Exact launch-to-paywall steps; account/entitlement state; screen recording. |
| Cannot load/buy product | Submission, product IDs, availability, network, or error handling | Product/submission statuses, IDs, device/storefront, and actual StoreKit error. Do not assume pending approval is the sole cause. |
| Trial missing from sandbox sheet | The advertised product/offer and eligible customer state differ | Compare app screen with system confirmation; check offer configuration and eligibility. |
| Billed amount less conspicuous | A breakdown price or trial dominates the layout | Rebalance size, contrast, and placement; another footer line may not address prominence. |
| Remove free-trial toggle | The reviewer objects to the interaction itself | Remove the switch and make trial-bearing packages explicit; adding disclosure text alone does not answer that instruction. |
| What does the subscription provide? | Generic marketing conceals the entitlement | Name concrete paid capabilities and distinguish free access. |
| Missing EULA or screenshot issue | The defect is in App Store metadata | Inspect the rejected item and localization before changing the binary. |

[Lenglio, RadTrack, the toggle reports, and Vunzo](cases.md) illustrate these
different diagnoses. The [gallery](gallery.md) marks the exact visual evidence.

Preserve the full rejection and attachments, build/product identifiers, tested
device, storefront, locale, entitlement state, and paywall experiment. Compare
these with your own reproduction before concluding the reviewer misunderstood.

## Clarification, resubmission, and appeal

Use [App Store Connect's reply workflow][reply] to ask a focused question and
attach evidence. For example: “Is the missing trial in the system sheet the
remaining issue, or is the renewal disclosure on our own screen also inadequate?”
For metadata-only rejection, Apple documents resubmitting the same build after
correcting the metadata. [Reply to App Review][reply].

A useful reply contains the cited guideline, observed failure, exact route,
relevant account state, and the change made. Say what was changed in the build
versus metadata; list product IDs and attachments. Avoid submitting an unchanged
binary repeatedly without answering the objection. This is our recommendation
for making the evidence assessable.

If the issue is a documented behavior the reviewer misunderstood, clarify it.
If the behavior or design actually contradicts the requirement, fix and
resubmit. If you believe the decision is wrong after addressing information
requests, [Apple's appeal guidance][review] calls for specific compliance reasons
and one appeal per rejected submission. An App Review appointment is another
documented channel. The [appeal case](cases.md#case-8-appeal-resolved-one-objection-other-problems-remained)
shows an appeal reportedly reopening review, with other defects still needing
work; it is not evidence of a paywall exemption.

Apple's [unresolved-submission workflow][unresolved] distinguishes accepted and
rejected items. Confirm the status of the app, subscription group, each product,
and localization before release. An approved app version does not establish that
all intended subscriptions are approved.

## Why similar screens can get different decisions

Our synthesis of the cases suggests several explanations worth checking:

1. **Different states:** a new user sees a trial; an existing subscriber skips
   the paywall; an ineligible account sees a charge immediately.
2. **Different surfaces:** the same priced screenshot can be useful review
   evidence and unsuitable public marketing metadata.
3. **Different submissions:** an app version and its products have distinct
   review histories. Local test configuration is not submission evidence.
4. **Different evidence:** clearer benefit descriptions, product IDs, or a
   video can resolve an ambiguity without a new visual style.
5. **Different dates and reviewers:** the toggle thread contains both rejection
   and approval anecdotes. Neither proves uniform enforcement or a published
   rule change. A screenshot of a reviewer instruction supports that case.

The visible comparison is confounded whenever copy, products, metadata, and
submission state change together. Lenglio's before/after example supports a
practical lesson about clarity, not a controlled claim that one added bullet
caused approval. Do not infer Apple's use of automation from absent backend logs
or quick responses.

## Storefront and policy dates matter

| Context, checked 2026-10-06 | Implication for a design review |
| --- | --- |
| US storefront | Current 3.1.1(a) permits external purchase calls to action without the entitlement otherwise discussed there. This does not make every in-app sales practice unrestricted. [Guidelines][guidelines]. |
| EU storefronts | Apple's support page records unified terms effective **2026-10-01**, replacing earlier addenda. Alternative payments/offers have implementation, child-safety, and business obligations; do not reuse a 2025 fee/entitlement summary. [Current EU support][eu]. |
| Japan | Apple's payment program describes eligible iPhone apps on iOS 26.2+, entitlements, disclosures, and transaction reporting. Verify the OS-specific implementation. [Japan support][japan]. |
| Other storefronts and categories | Check the current rule and applicable exception before adding web checkout. Device language or an IP address alone is not an explanation of the applicable storefront. |

The January 2026 toggle reports and July 2025 Lenglio outcome precede the current
research date. The HIG page itself identifies a **2026-09-17** update. Refresh
Apple's current pages before adopting an old paywall example or external-payment
flow; this guide is a dated research snapshot.

## Sources and research limits

Apple links below were inspected on 2026-10-06. The HIG required the browser to
read its rendered content. The [case collection](cases.md) gives original social
links, dates, interventions, and outcomes; [image records](images/README.md)
identify each preserved asset and its gaps.

Web-reader access to the selected X posts returned 403; their original public
text and images were inspected successfully in the in-app browser without
signing in. Reddit JSON and some direct image requests were also blocked;
rendered posts and observed browser assets supplied the evidence. Search snippets
and vendor roundups were leads, not substitutes for those original posts.

No App Store Connect account, app binary, transaction, or appeal was tested for
this research. Versions/storefronts absent from the sources remain unknown.
There is no independently authenticated Apple approval record for the accepted
paywall screenshot. Missing intermediate/after images are identified explicitly.

[guidelines]: https://developer.apple.com/app-store/review/guidelines/
[subscriptions]: https://developer.apple.com/app-store/subscriptions/
[hig]: https://developer.apple.com/design/human-interface-guidelines/apple-in-app-purchase
[offers]: https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-introductory-offers-for-auto-renewable-subscriptions/
[submit]: https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-an-in-app-purchase/
[iap-info]: https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-information
[review]: https://developer.apple.com/app-store/review/
[reply]: https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/reply-to-app-review-messages
[unresolved]: https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/manage-a-submission-with-unresolved-issues
[eu]: https://developer.apple.com/support/apps-in-the-eu/
[japan]: https://developer.apple.com/support/payment-options-on-the-app-store-in-japan/
