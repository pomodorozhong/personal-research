# Real app paywalls: annotated evidence

[Guide](README.md) · [Developer cases](cases.md) · [Checklist](checklist.md)

Twenty original source images cover fourteen paywall cases and one supporting
reviewer message. Click an image to inspect it separately; source highlighting,
collages, and redaction are preserved. Versions/storefronts are unknown unless
stated; prices are historical, and a dollar sign alone does not identify currency.
[Image provenance](images/README.md) records asset details.

## Browse by design question

Read **Lenglio → Snapkin → Metacast** first: each has paired visual evidence and
a developer's rejection-to-acceptance account. Other review accounts follow,
then experiments, proposed layouts, and observed product flows. The index follows
the same order as the case sections.

Each case follows **Issue → Change → Lesson → Outcome**. Issues identify reported
reviewer objections or design questions; lessons explain our interpretation.
Reported acceptance does not establish that one pictured change caused approval,
and business results do not measure customer comprehension.

| Case | What to inspect | Evidence type |
| --- | --- | --- |
| [Lenglio](#lenglio-before-and-after-benefit-disclosure) | Concrete paid benefits | Reported rejection → acceptance |
| [Snapkin](#snapkin-platform-specific-cancellation-copy) | Cross-platform wording in an iOS paywall | Reported rejection → launch after several fixes |
| [Metacast](#metacast-legal-links-below-the-fold) | Legal links on small screens | Reported rejection → launch after several fixes |
| [notJust.dev app](#notjustdev-trial-copy-and-metadata-are-different-surfaces) | Trial duration and metadata legal links | Reported metadata rejection → acceptance |
| [RadTrack](#radtrack-paywall-versus-the-actual-transaction) | App promise versus system purchase | Reported rejection; product outcome unresolved |
| [Homework app](#unnamed-homework-app-a-trial-switch-also-changes-the-package) | A trial switch changes billing period | Reported rejection; final outcome unknown |
| [Foodnoms](#foodnoms-feature-matrix-to-trial-timeline) | Reminder promise and trial explanation | Developer-reported experiment |
| [Dark Noise](#dark-noise-revealing-all-plans-up-front) | Hidden versus visible purchase options | Developer-reported experiment |
| [Flo](#flo-old-and-new-trial-selection) | Explicit trial-bearing packages | Observed redesign; review outcome unknown |
| [Melonote](#melonote-a-trial-timeline-on-a-small-screen) | Trial timeline crowds out plan cards | Proposed design; no measured outcome |
| [ShotZen](#shotzen-a-badge-change-moves-the-purchase-area) | Visual regression around badges and footer | Developer's comparison; review outcome unknown |
| [Headway](#headway-what-happens-after-declining-the-paywall) | Exit survey, subsequent offer, urgency | Independent observer's dated teardown |
| [Substack](#substack-plan-choice-versus-payment-route) | Plan selection versus payment method | Product announcement; review outcome unknown |
| [WatchFrame](#watchframe-a-native-plan-picker-with-ambiguous-free-copy) | Savings language versus free-trial duration | Developer's work in progress |

The [reviewer message](#reviewer-message-the-requested-change-can-be-specific)
provides supporting evidence about price prominence and trial toggles.

## Rejected then reportedly accepted: before/after images

### Lenglio: before and after benefit disclosure

| Before: associated with rejection | After: developer reports acceptance |
| --- | --- |
| <a href="images/lenglio-before.png"><img src="images/lenglio-before.png" width="306" alt="Original Lenglio paywall lists weekly, monthly, and lifetime prices beneath a generic language-learning headline."></a> | <a href="images/lenglio-after.png"><img src="images/lenglio-after.png" width="231" alt="Revised Lenglio Premium paywall lists four premium capabilities and distinguishes recurring subscriptions from a one-time purchase."></a> |

**Issue:** Reported 3.1.2 objection: what does the subscription provide? Our reading is
that the generic language-learning headline leaves the paid features unclear.

**Change:** The final screen names book import, unrestricted library, text analysis, and
removal of paywall interruptions; lifetime access is labeled as a one-time purchase.

**Lesson:** Name the capabilities payment unlocks and distinguish recurring
subscriptions from a single purchase so customers can compare their value.

**Outcome:** App approval reported on 2025-07-22 after metadata changes too;
intermediate revisions are missing and products needed separate approval. The unchanged
Continue button cannot explain acceptance. [Full
case](cases.md#case-1-lenglio-made-the-paid-entitlement-explicit).

**Source:** [Lenglio developer
post](https://www.reddit.com/r/iOSProgramming/comments/1og8u7v/my_first_experience_with_apple_app_store_review/),
2025-10-26. Small linked previews limit text readability.

### Snapkin: platform-specific cancellation copy

<a href="images/snapkin-before-after.jpg"><img src="images/snapkin-before-after.jpg" width="950" alt="Snapkin before/after comparison highlights removing Google Play from iOS cancellation and payment explanations while retaining monthly and annual plan cards."></a>

**Issue:** Reported 2.3.10 objection: the iOS paywall names Google Play in its
cancellation and payment explanations, leaving the applicable store unclear.

**Change:** The revised screen removes the other-platform reference and uses neutral store
wording for payment; the plan cards and renewal/legal footer remain.

**Lesson:** Give instructions for the platform the customer is using. Naming the
applicable store or exact cancellation route is clearer than generic store wording.

**Outcome:** Launch reported on 2026-09-24 after six submissions and several
corrections; the comparison does not isolate the copy change's effect on approval.

**Source:** [Mattias Geniar's developer
blog](https://ma.ttias.be/app-store-rejection-reasons/), 2026-09-30; source-labeled
before/after comparison.

### Metacast: legal links below the fold

<a href="images/metacast-layout.jpg"><img src="images/metacast-layout.jpg" width="1050" alt="Metacast source comparison: a small iPad compatibility window hides the legal footer, a large phone shows it, and the revised layout exposes the beginning of the disclaimer."></a>

**Issue:** The developer associates the reported 3.1.2 objection with legal links hidden
below the initial viewport in iPad compatibility mode, despite being visible on a large
phone.

**Change:** The right-hand revision exposes the beginning of the disclaimer to signal
more content below; benefits and launch-offer copy also change.

**Lesson:** Check that customers can discover, scroll to, and open terms on small
screens. A visible text fragment alone does not establish access to the agreement.

**Outcome:** Launch reported on 2024-09-20 after several fixes; the revised annual price
and 100%-discount wording still appear inconsistent.

**Source:** [Ilya Bezdelev's Metacast developer
blog](https://metacast.app/blog/company/case-study-google-play-apple-app-store-launch),
2024-10-07.

## Other rejection accounts

### notJust.dev: trial copy and metadata are different surfaces

<a href="images/notjust-paywall.jpg"><img src="images/notjust-paywall.jpg" width="380" alt="Developer-shared unnamed AI companion app paywall selects a weekly plan, offers an annual alternative, and shows a trial action plus restore and legal links."></a>

**Issue:** Reported objection: missing terms links in App Store metadata. The pictured
paywall already has restore, terms, and privacy links, which do not populate the
listing.

**Change:** The author reports correcting metadata links; no before/after metadata
capture or visual paywall correction is supplied.

**Lesson:** Check the store listing and in-app links separately so customers can inspect
the agreement before installing and before purchasing.

**Outcome:** Acceptance is reported, but the pictured build is unconfirmed. Its weekly
trial action omits the trial length; the annual-selected state is unpictured.

**Source:** [Vadim Savin's developer
newsletter](https://news.notjust.dev/posts/my-first-from-app-dev), retrieved 2026-10-06;
publication date unconfirmed.

### RadTrack: paywall versus the actual transaction

<a href="images/trial-mismatch.webp"><img src="images/trial-mismatch.webp" width="430" alt="RadTrack composite: the custom paywall promises a seven-day free trial, while the sandbox purchase sheet shows $5.99 per month without a trial."></a>

**Issue:** The pasted rejection notice identifies a missing sandbox trial and unclear
automatic-charging terms. The app promises seven days free; the system sheet shows
$5.99/month without a trial.

**Change:** The developer reports a fix but supplies no corrected capture or
configuration details; the actual change is unknown.

**Lesson:** Match the selected product, offer eligibility, trial, and renewal copy to
the system transaction so a promised trial does not become an immediate charge.

**Outcome:** App approval was later reported, but subscriptions remained rejected at the
update; the cause of the mismatch is unresolved. [Full
case](cases.md#case-5-radtracks-custom-screen-promised-a-trial-the-system-sheet-omitted).

**Source:** [u/manison88's RadTrack
post](https://www.reddit.com/r/appledevelopers/comments/1ti60zi/frustrating_subscription_rejection_reasonadvice/),
2026-05-20; two screens in one flow, not a redesign.

### Unnamed homework app: a trial switch also changes the package

<a href="images/study-toggle.webp"><img src="images/study-toggle.webp" width="420" alt="Homework AI app paywall with a Free Trial Enabled toggle, an annual plan, and a selected three-day trial followed by weekly billing."></a>

**Issue:** The pasted 3.1.2 objection calls the trial toggle confusing. The developer
says off selects annual and on selects a weekly trial, combining trial preference with a
different billing commitment.

**Change:** The developer reports removing the switch and resubmitting; the resulting
screen is unavailable.

**Lesson:** Present each package's trial, later charge, and billing period as an
explicit choice so enabling a trial does not unexpectedly substitute weekly billing.

**Outcome:** Final acceptance is unknown; only the rejected screen is pictured. [Full
case and conflicting
reports](cases.md#case-2-an-unnamed-homework-apps-trial-switch-changed-the-plan).

**Source:** [u/Usual-Ant305's developer
post](https://www.reddit.com/r/AppStoreOptimization/comments/1qeavxq/anyone_else_having_apple_reject_their_app_because/),
2026-01-16; app unnamed.

### Reviewer message: the requested change can be specific

<a href="images/axel-rejection.webp"><img src="images/axel-rejection.webp" width="650" alt="Developer-shared App Review message dated January 14, 2026 highlights an instruction to remove a trial toggle and separately asks for dominant billed pricing."></a>

**Issue:** The pictured reviewer notice objects to introductory pricing dominating the
billed amount and a toggle obscuring the subscription commitment.

**Change:** Requested: remove the toggle and make the full billed amount dominant
through font, size, color, and location; no implemented revision is supplied.

**Lesson:** Make the actual charge and commitment easy to understand. Adding fine print
alone may leave the price hierarchy and confusing interaction intact.

**Outcome:** No final outcome is supplied; this notice documents one reviewer's
instruction, not a universally published toggle ban. [Full
case](cases.md#case-3-axel-le-pennec-shared-the-actual-toggle-objection).

**Source:** [Axel Le Pennec on X](https://x.com/alpennec/status/2012188049728520514),
2026-01-16; notice dated 2026-01-14, app unnamed.

## Experiments and other design references

### Foodnoms: feature matrix to trial timeline

| Earlier design | Onboarding experiment |
| --- | --- |
| <a href="images/foodnoms-before.png"><img src="images/foodnoms-before.png" width="380" alt="Foodnoms paywall compares Free and Foodnoms Plus features with a seven-day trial followed by $39.99 per year."></a> | <a href="images/foodnoms-after.png"><img src="images/foodnoms-after.png" width="380" alt="Foodnoms trial timeline explains immediate access, a permission-dependent reminder on day five, and charging on day seven."></a> |

**Issue:** Design question: can eligible customers understand when access starts, when a
reminder arrives, and when the annual charge occurs?

**Change:** The experiment replaces the feature matrix with a seven-day timeline:
immediate access, a permission-dependent day-five reminder, then charging; both screens
show $39.99/year after the trial.

**Lesson:** A timeline explains billing sequence, while a feature matrix explains paid
capabilities. Match trial promises to eligibility and reminder delivery.

**Outcome:** The developer reports 59.6% more paying-user conversions alongside a 15.9%
decline in trial-to-paid conversion over two weeks; these are business metrics, not
comprehension or review results.

**Source:** [Foodnoms developer's experiment
report](https://ryanwesley.com/paywall-optimization-success-story/), 2024-07-25.

### Dark Noise: revealing all plans up front

<a href="images/dark-noise-options.png"><img src="images/dark-noise-options.png" width="950" alt="Dark Noise Control and Experiment: the control presents an annual price and All plans link, while the experiment displays monthly, annual, and lifetime cards together."></a>

**Issue:** Design question: can customers discover and compare subscriptions and
lifetime access without navigating to another view?

**Change:** The experiment replaces an annual offer plus All plans link with visible
$2.99/month, $19.99/year, and $49.99 lifetime cards; annual stays selected.

**Lesson:** Visible alternatives make commitments easier to compare but add density.
Label lifetime as one-time to distinguish it from recurring subscriptions.

**Outcome:** The developer reports higher initial conversion but worse churn; more
visible choices did not establish better retention, and no App Review decision is
supplied.

**Source:** [Charlie Chapman on
RevenueCat](https://www.revenuecat.com/blog/engineering/how-i-successfully-migrated-my-indie-app-to-revenuecat-paywalls),
2024-01-03, updated 2025-11-21; the developer also works for the publisher.

### Flo: old and new trial selection

<a href="images/flo-options.webp"><img src="images/flo-options.webp" width="1000" alt="Flo comparison labeled OLD and NEW: a trial toggle is replaced by a trial-selection entry and a sheet separating a 14-day trial from no-trial packages."></a>

**Issue:** Design question: how can customers compare packages with and without a trial
as explicit offers?

**Change:** The observed redesign replaces a trial switch with a selection entry and a
sheet grouping 14-day-trial offers separately; the action reflects the selected trial
duration.

**Lesson:** Connect each trial to its package and later charge. The annual offer still
emphasizes a monthly equivalent, so separately audit [billed-price
prominence](https://developer.apple.com/app-store/subscriptions/).

**Outcome:** No approval record is supplied; Flo is not the after-image of Axel's
unnamed rejected app. [Full
case](cases.md#case-4-flos-replacement-is-a-design-observation-not-an-approval-record).

**Source:** [Axel Le Pennec's Flo
post](https://x.com/alpennec/status/2047218943333482976), 2026-04-23; old/new captures
use different prices and £/$ currencies.

### Melonote: a trial timeline on a small screen

| Current design supplied by author | Proposed timeline | Proposed design on iPhone SE |
| --- | --- | --- |
| <a href="images/trial-refunds-before.png"><img src="images/trial-refunds-before.png" width="300" alt="Melonote's current Premium Notes paywall lists benefits and three purchase periods above a trial action."></a> | <a href="images/trial-refunds-proposed.png"><img src="images/trial-refunds-proposed.png" width="300" alt="Proposed Melonote paywall adds a trial timeline, reminder, charging date, and plan cards using explicitly fictional test prices."></a> | <a href="images/trial-refunds-small-screen.png"><img src="images/trial-refunds-small-screen.png" width="300" alt="The proposed Melonote layout on iPhone SE leaves the plan cards mostly behind the fixed purchase footer."></a> |

**Issue:** Design question: can trial timing reduce unexpected-charge confusion without
making plan selection harder on a short screen?

**Change:** Proposed: add trial-start, reminder, and charge milestones with a billing
date. Prices and mismatched amounts are explicitly fictional test data.

**Lesson:** A clear schedule and working reminder can help customers plan cancellation,
but the SE layout's fixed footer obscures plan cards; test scrolling and selection.

**Outcome:** No refund measurement or review decision is supplied; the Apple-branded
protection wording is the app's claim, not evidence of endorsement.

**Source:** [u/yccheok's Melonote feedback
request](https://www.reddit.com/r/UXDesign/comments/1kvy27i/feedback_request_upcoming_paywall_design/),
2025-05-26; current/proposed layouts and iPhone SE comparison.

### ShotZen: a badge change moves the purchase area

<a href="images/shotzen-regression.png"><img src="images/shotzen-regression.png" width="1050" alt="ShotZen developer's visual-regression report compares baseline, current, and difference overlay for an English light-mode paywall with reordered plans and new badges."></a>

**Issue:** Design question: can a small badge change disrupt purchase controls or
disclosures across screen states?

**Change:** Lifetime moves to the top and badges change while annual remains selected;
the developer reports badge padding moving the action and footer by five pixels.

**Lesson:** Compare purchase actions, selected products, restoration, and legal links
after cosmetic edits. Changed pixels measure visual difference, not usability or
compliance.

**Outcome:** A subsequent smaller visual change is reported but unpictured; the report
covers 32 states and this image shows one, with no review or conversion outcome.

**Source:** [changyou / MufengLabs on
Substack](https://changyou.substack.com/p/a-small-badge-shifted-my-ios-paywall),
2026-09-08, describing September 5 work.

### Headway: what happens after declining the paywall

<a href="images/headway-discount-2024.png"><img src="images/headway-discount-2024.png" width="780" alt="Headway January 2024 observer capture shows a gift prompt after declining a trial, followed by a 50%-off annual purchase offer."></a>

<a href="images/headway-exit-offer.png"><img src="images/headway-exit-offer.png" width="1050" alt="Headway January 2025 observer capture shows an exit survey, a budget-oriented pitch, and a sheet offering annual and monthly plans with seven-day trials."></a>

**Issue:** Design question: what terms and exit choices appear after a customer declines
the first offer?

**Change:** The observer's 2024 capture shows a gift and discounted annual purchase
without a stated trial; the 2025 price-survey branch leads to annual/monthly trial
offers.

**Lesson:** A follow-up can address price or trial concerns, but each offer needs clear
terms and an exit. Substantiate urgency rather than implying unsupported scarcity.

**Outcome:** The observer reports a disappearing-discount warning even though the offer
returns; only one survey branch was explored, with no internal experiment or review
results.

**Source:** [Jacob Rushfinn's Retention.Blog
newsletter](https://www.retention.blog/p/headway-evolution-2024-2025), 2025-02-03; an
outside observer's January 2024/2025 captures.

### Substack: plan choice versus payment route

<a href="images/substack-payment-options.png"><img src="images/substack-payment-options.png" width="1050" alt="Substack product announcement shows a publication entry screen and annual, monthly, and free choices, with a $60 annual primary action and an $80 annual in-app payment alternative."></a>

**Issue:** Design question: can customers distinguish the access plan from the payment
method and its price?

**Change:** The illustrated flow separates annual/monthly/free access from checkout: the
primary annual action shows $60/year and a less prominent in-app alternative shows
$80/year.

**Lesson:** Show method-specific prices where customers can compare them and repeat the
billed total in the action; check [current storefront
rules](README.md#storefront-and-policy-dates-matter) before adopting the route.

**Outcome:** This is Substack's 2025 US product announcement, with no review decision
for these screens; the illustrated prices belong to The Dry Down Diaries, not every
publication.

**Source:** [Substack's own product
newsletter](https://on.substack.com/p/now-anyone-can-pay-for-a-substack), 2025-08-18;
product artwork, not a tested checkout.

### WatchFrame: a native plan picker with ambiguous free copy

<a href="images/watchframe-paywall.jpg"><img src="images/watchframe-paywall.jpg" width="380" alt="WatchFrame developer video poster shows paid features, monthly/yearly/lifetime options, a selected yearly plan with four-months-free savings text and a seven-day trial, and a yearly purchase action."></a>

**Issue:** Design question: can customers distinguish four-months-free annual savings
wording from an actual seven-day trial?

**Change:** The work-in-progress poster shows specific paid limits,
monthly/yearly/lifetime cards, annual selected and named in the action, and lifetime
labeled one-time; no revision is shown.

**Lesson:** Separate savings relative to monthly billing from time without a charge.
Concrete benefits and matching selection/action labels clarify what customers buy.

**Outcome:** The developer acknowledges the ambiguous wording and plans to rephrase it;
no conversion or review result is shown, and the poster establishes only one screen
state.

**Source:** [u/pesekeme's WatchFrame
post](https://www.reddit.com/r/iOSDevelopment/comments/1vixwb9/spent_a_week_making_my_paywall_feel_less_like_a/),
2026-08-08 UTC; video poster with US$ prices.

## Compare patterns without treating them as approved templates

| Observed issue | Better-supported response | Evidence boundary |
| --- | --- | --- |
| Lenglio's generic benefit claim | Explain paid capabilities and correct related metadata | App approval reported after multiple changes, not a controlled visual experiment |
| Toggle switching annual/weekly | Present distinct packages and their trial/renewal terms | Rejection/removal reported; final outcome not supplied |
| RadTrack trial promise absent in purchase sheet | Reconcile actual offer and copy before adjusting style | No proof of which configuration caused the mismatch |
| Flo toggle replaced by explicit options | Useful interaction reference; separately audit price prominence | No documented acceptance of these exact screens |
| Metacast footer below the fold | Test scrollability and legal-link access on small layouts | Reported launch followed several changes |
| Snapkin names another platform | Audit shared copy in each platform build | Platform-copy fix was only part of the review response |
| Foodnoms / Melonote trial timelines | Match eligibility, reminders, and charge terms; inspect short screens | Experiment results and proposed designs are different evidence |
| Dark Noise / WatchFrame plan pickers | Expose purchase types and align selection with the action | More visible choices do not establish better retention or approval |
| ShotZen badge changes | Compare footer and action across states after visual edits | Pixel differences do not measure compliance |
| Substack payment routes | Distinguish method-specific prices and current regional permissions | Historical product announcement, not a universal route template |
| notJust.dev's legal footer | Check in-app links and metadata separately | Reported metadata fix does not validate every pictured detail |
| Headway's exit offers | Recheck terms and dismissibility after declining; substantiate urgency | Outside observer, no causal performance or review evidence |

See [image provenance](images/README.md) for asset URLs, acquisition details,
dimensions, and ownership attribution.
