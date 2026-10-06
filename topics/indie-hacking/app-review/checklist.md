# Paywall design and submission checklist

[Guide](README.md) · [Real screenshots](gallery.md) · [Developer cases](cases.md)

Checked 2026-10-06. This is a practical preflight for the actual production
configuration. **Required** means a cited Apple requirement; **recommended** means
our review/testing advice. Checking every box is not proof of future acceptance.

## Offer and presentation

- [ ] **Required:** identify the paid content/capabilities, subscription duration,
  and full localized billing amount. Make the amount actually charged more
  prominent than an equivalent monthly/weekly breakdown.
  [Apple purchase guidance](https://developer.apple.com/app-store/subscriptions/).
- [ ] **Required:** describe the trial duration and subsequent charge; explain
  automatic billing. [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/apple-in-app-purchase).
- [ ] **Required:** show offers only to eligible customers. Confirm product,
  subscription group, storefront, and offer dates. [Introductory offers](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-introductory-offers-for-auto-renewable-subscriptions/).
- [ ] **Recommended:** exercise each package selection; confirm the action,
  price, duration, and trial text update together. Replace the trial-switch
  interaction shown in the [rejection cases](cases.md) with explicit packages.
- [ ] **Recommended:** avoid a trial-only action concealing its paid continuation;
  make optionality and the customer commitment readable before the tap.
- [ ] **Recommended:** substantiate savings/urgency claims against the actual
  reference price and offer schedule; never manufacture a countdown.
- [ ] **Recommended:** for promised free content, provide an obvious route back.
  For paid-only services, explain access restrictions in metadata and review
  notes. Do not mistake paywall dismissal for cancellation.
- [ ] **Required:** provide restoration/sign-in and functional terms/privacy
  links in the app and relevant metadata. [Apple purchase guidance](https://developer.apple.com/app-store/subscriptions/).
- [ ] **Recommended:** inspect all this on supported iPhone/iPad layouts, small
  screens, larger text, and relevant localizations; verify controls are usable.

## Actual purchase and entitlement behavior

Use [Apple's sandbox and StoreKit testing tools](https://developer.apple.com/help/app-store-connect/test-in-app-purchases/overview-of-testing-in-sandbox),
not a paid production transaction. Our recommended test matrix:

| Test state | Interaction | Expected evidence |
| --- | --- | --- |
| New eligible customer | Select trial package and open system confirmation | Offer, trial length, price, and duration match the app screen |
| Intro-offer already used | Reopen the same group's offer | No false promise of a new introductory trial |
| Active subscriber | Launch, restore, and revisit upgrade entry | Existing access recognized; no unnecessary duplicate sale |
| Purchase canceled, failed, or pending | Exit sheet / exercise available test states | Honest feedback; no entitlement granted merely by tapping |
| Product unavailable or network interrupted | Load and retry the paywall | Clear unavailable/loading/error state; no silent button or fabricated offer |
| Renewal / expiration / refund | Exercise supported test events | Access changes according to transaction state |
| Another device or reinstall | Restore applicable purchases | Correct access without an extra purchase |

- [ ] **Required:** use the system confirmation sheet rather than imitating it.
  [Apple HIG](https://developer.apple.com/design/human-interface-guidelines/apple-in-app-purchase).
- [ ] **Recommended:** capture both your paywall and system sheet for a trial
  offer, as in the [RadTrack case](gallery.md#radtrack-paywall-versus-the-actual-transaction).
- [ ] **Recommended:** test a configuration backed by actual ASC products as
  well as local StoreKit fixtures. Record device, storefront, product IDs, offer,
  SDK/app version, and entitlement state when diagnosing differences.
- [ ] **Recommended:** use transaction-based expiration tests. Changing a device
  clock is not proof of StoreKit or server-side renewal correctness.

## App Store Connect and public metadata

- [ ] **Required:** use the current [IAP submission procedure](https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-an-in-app-purchase/).
  For the first IAP of each type, include a new app version. Add a new
  subscription group with its subscriptions in the same draft submission.
- [ ] **Recommended:** inspect the actual item list before Submit for Review;
  “Ready to Submit” alone does not mean the item is in that submission.
- [ ] **Required:** complete each product's review metadata and review screenshot.
  [IAP information](https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-information).
- [ ] **Recommended:** provide product-level notes explaining benefits and testing,
  especially for a non-obvious route; include corresponding app-version notes.
- [ ] **Required:** public marketing clearly identifies featured paid access and
  respects metadata restrictions, including price references in screenshots.
  [Guidelines 2.3.2 and 2.3.7](https://developer.apple.com/app-store/review/guidelines/#accurate-metadata).
- [ ] **Recommended:** keep the actual priced purchase screen as review evidence;
  prepare suitable public feature screenshots separately. Verify every locale's
  description and legal-link destination. [Vunzo case](cases.md#case-6-vunzo-needed-submission-and-public-metadata-changes).
- [ ] **Recommended:** document storefront/OS routing for external checkout and
  current regional obligations. Recheck [US rules](https://developer.apple.com/app-store/review/guidelines/#in-app-purchase),
  [EU terms](https://developer.apple.com/support/apps-in-the-eu/), or
  [Japan's program](https://developer.apple.com/support/payment-options-on-the-app-store-in-japan/)
  as applicable.

## Review access and rejection response

- [ ] **Required:** provide functional review access, credentials/demo mode where
  needed, and a live backend. [Apple preparation guidance](https://developer.apple.com/app-store/review/).
- [ ] **Recommended:** supply a numbered route from launch to paywall to premium
  feature, with a fresh account state that actually exposes the purchase flow.
  Also provide a way to inspect existing-subscriber access. Explain time-based
  access and attach a short recording where helpful.
- [ ] **Recommended:** preserve the exact rejection, affected item, attachments,
  build/product IDs, environment, and remote paywall configuration. Reproduce the
  specific symptom rather than changing arbitrary visual details.
- [ ] **Recommended:** reply with the identified cause, exact fix, and matching
  evidence; ask a focused clarification if the expected change remains ambiguous.
  [Reply workflow](https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/reply-to-app-review-messages).
- [ ] **Recommended:** use same-build resubmission for corrected metadata when
  applicable; submit the changed build for implementation defects. Appeal a
  disputed interpretation with specific evidence after answering information
  requests. [Apple appeal guidance](https://developer.apple.com/app-store/review/).
- [ ] **Recommended:** before release, confirm app/group/product/localization
  outcomes separately. Read the [unresolved-items workflow](https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/manage-a-submission-with-unresolved-issues)
  rather than assuming app approval also approves its subscription catalog.

## Suggested review-note outline

Fill in actual values; this is our outline, not a required Apple form.

```text
Build/version and product IDs:
What each purchase unlocks; free access and paid access:
Launch-to-paywall steps and expected screens:
Review account/demo access and its entitlement state:
Trial package, eligibility, and subsequent price/duration:
How to inspect purchase, restore, and expiration behavior:
Supported storefronts/OS versions and external-payment routing, if any:
Previous objection, exact change, and attached evidence, if resubmitting:
```
