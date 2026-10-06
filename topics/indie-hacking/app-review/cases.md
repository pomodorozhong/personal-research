# Paywall cases: rejection, response, experiment, outcome

[Guide](README.md) · [Gallery](gallery.md) · [Checklist](checklist.md)

Review accounts checked 2026-10-06; visual-case expansion added 2026-10-07.
Dates below are publication dates unless an event date is
specified. Reddit dates were read from rendered timestamps; X dates from the
original post. Outcomes are attributed to the relevant author, not independently
verified Apple records. Comments by other developers are separate cases, not
follow-ups by the original poster.

Cases 1–8 examine review accounts; [cases 9–18](#cases-918-additional-visual-evidence)
add developer blogs, newsletters, experiments, and an observer's teardown.
For the prioritized reading order, start with the gallery's
[Lenglio](gallery.md#lenglio-before-and-after-benefit-disclosure),
[Snapkin](gallery.md#snapkin-platform-specific-cancellation-copy), and
[Metacast](gallery.md#metacast-legal-links-below-the-fold) before/after accounts.
Case numbers are stable reference IDs; gallery order reflects evidence strength.
Suspected-reason fields separate reported objections from our diagnosis;
benefit fields are our reasoning, not measured usability results.

## Case 1: Lenglio made the paid entitlement explicit

**Source:** [u/Lenglio, r/iOSProgramming, 2025-10-26](https://www.reddit.com/r/iOSProgramming/comments/1og8u7v/my_first_experience_with_apple_app_store_review/).
The account describes review events on July 16–22, 2025, not October review.
**Evidence:** developer narrative, quoted rejection text, original/final paywall
images. App: Lenglio, [App Store ID 6743641830](https://apps.apple.com/us/app/lenglio/id6743641830).

**Suspected rejection reason:** the first reported rejection covered promoted-IAP
names/descriptions and promotional images (2.3.2), plus unclear subscription
benefits (3.1.2). The original paywall listed purchase titles and prices without
explaining the paid entitlement.

**Change:** the developer corrected metadata and removed unwanted promotional
images. A later rejection could not locate the paywall; screenshots of its entry
route were supplied. Another
rejection led to explicit free-versus-premium descriptions and a revised paywall.

**Why the change helps users:** concrete paid capabilities support value
comparison; clear recurring versus one-time labels help people understand the
commitment. Consistent metadata aligns expectations with the actual upgrade.

**Outcome:** the developer reports app approval on **2025-07-22** and identifies
the final image as the approved paywall. The products still needed subsequent
review; their later approvals are also reported, with uncertain timing. No
intermediate paywall image or authenticated approval notice is supplied.

**Interpretation:** fix the benefits explanation and metadata as well as visual
labels. The [before/after pair](gallery.md#lenglio-before-and-after-benefit-disclosure)
is useful evidence of the design change, but several variables changed together.
The author's space/add/remove workaround for resubmitting products is historical
experience; use the current [documented submission flow](https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-an-in-app-purchase/)
instead of treating it as a supported procedure.

## Cases 9–18: additional visual evidence

The [expanded gallery](gallery.md#browse-by-design-question) contains the source
images, dates, annotations, and detailed evidence limits for these ten additions.
Experiments and proposals belong here as design references, without assigning
them a rejection or acceptance they do not document.
Each gallery entry has either a suspected rejection reason and change, or a
design question and observed/proposed design, followed by the user benefit,
reported result, and limitations. IDs below are retained for reference.

| Case | Original source | Intervention / observation | Outcome boundary |
| --- | --- | --- | --- |
| 10. [Snapkin](gallery.md#snapkin-platform-specific-cancellation-copy) | [Mattias Geniar](https://ma.ttias.be/app-store-rejection-reasons/), 2026-09-30 | Remove other-platform references | Launch reported after multiple fixes |
| 9. [Metacast](gallery.md#metacast-legal-links-below-the-fold) | [Developer blog](https://metacast.app/blog/company/case-study-google-play-apple-app-store-launch), 2024-10-07 | Small-layout footer visibility | Launch reported after multiple fixes |
| 15. [Unnamed notJust.dev app](gallery.md#notjustdev-trial-copy-and-metadata-are-different-surfaces) | [Developer newsletter](https://news.notjust.dev/posts/my-first-from-app-dev), exact date unknown | Metadata terms links | Acceptance reported; exact pictured build unknown |
| 11. [Foodnoms](gallery.md#foodnoms-feature-matrix-to-trial-timeline) | [Developer blog](https://ryanwesley.com/paywall-optimization-success-story/), 2024-07-25 | Eligible-user trial timeline | Business experiment; no review decision |
| 12. [Dark Noise](gallery.md#dark-noise-revealing-all-plans-up-front) | [Developer on RevenueCat](https://www.revenuecat.com/blog/engineering/how-i-successfully-migrated-my-indie-app-to-revenuecat-paywalls), 2024-01-03; updated 2025-11-21 | Expose all purchase options | Conversion/churn report; no review decision |
| 16. [Melonote](gallery.md#melonote-a-trial-timeline-on-a-small-screen) | [Developer on Reddit](https://www.reddit.com/r/UXDesign/comments/1kvy27i/feedback_request_upcoming_paywall_design/), 2025-05-26 | Proposed timeline on iPhone SE | Fictional prices; no review/refund result |
| 13. [ShotZen](gallery.md#shotzen-a-badge-change-moves-the-purchase-area) | [Developer on Substack](https://changyou.substack.com/p/a-small-badge-shifted-my-ios-paywall), 2026-09-08 | Badge and plan-order regression | Later revision unpictured; no review decision |
| 17. [Headway](gallery.md#headway-what-happens-after-declining-the-paywall) | [Retention.Blog on Substack](https://www.retention.blog/p/headway-evolution-2024-2025), 2025-02-03 | Changing exit offers | Observer's teardown; no internal experiment or review result |
| 14. [Substack](gallery.md#substack-plan-choice-versus-payment-route) | [Product newsletter](https://on.substack.com/p/now-anyone-can-pay-for-a-substack), 2025-08-18 | Plan choice and payment route | Announced flow; exact approval unknown |
| 18. [WatchFrame](gallery.md#watchframe-a-native-plan-picker-with-ambiguous-free-copy) | [Developer on Reddit](https://www.reddit.com/r/iOSDevelopment/comments/1vixwb9/spent_a_week_making_my_paywall_feel_less_like_a/), 2026-08-08 | Native picker; ambiguous savings/trial copy | Work in progress; planned rewording unpictured |

## Case 6: Vunzo needed submission and public-metadata changes

**Source:** [u/Fun_Thought_2326, r/AppBusiness, 2026-09-10](https://www.reddit.com/r/AppBusiness/comments/1wcdvzm/got_rejected_twice_by_apple_before_launch_here_is/).
App: Vunzo, [App Store ID 6799741913](https://apps.apple.com/app/vunzo-subscription-tracker/id6799741913).
**Evidence:** developer narrative and product link; no original rejection notice
or rejected paywall image was available in this source.

**Suspected rejection reason:** the author describes products not included in
the submission (2.1(b)), a missing metadata Terms of Use link (3.1.2(c)), and a
priced public paywall screenshot
(2.3.7).

**Change:** they report adding the products/group, adding legal links, and replacing
the public screenshot with a feature image; the media change required no new build.
The title says “twice,” but the body enumerates three objections; do not derive
an exact rejection count from that inconsistent wording.

**Benefit beyond approval:** complete product setup enables the intended purchase;
accessible terms support informed choice. Feature-focused marketing explains
capabilities, but removing a priced image is not inherently a usability win:
the actual purchase screen must still show current, accurate charges.

**Outcome:** the author reports launch after resolving the issues. This does not
establish that any particular pictured paywall passed. Their claim that “Free”
was flagged is a case report, not a universal prohibition on using that word
inside an app.

**Interpretation:** separate public marketing screenshots, product review images,
and the actual purchase screen. Removing prices from the actual paywall would
contradict the need for clear purchase terms. Compare [2.3.7](https://developer.apple.com/app-store/review/guidelines/#accurate-metadata)
and [Apple's review-only screenshot definition](https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-information).

## Case 7: TwoShot and a clarification thread illustrate reproducibility

**Source A:** [u/dnp1204, r/appledevelopers, 2026-04-18 UTC](https://www.reddit.com/r/appledevelopers/comments/1sp6ln3/3_rejections_before_my_first_iap_app_got_approved/).
The timestamp falls on April 19 in Taiwan. **Evidence:** first-person account;
app TwoShot; exact cited guideline numbers not supplied.

**Suspected rejection reason, Source A:** insufficient information to reproduce
the feature-gated purchase route is the reported problem; exact reviewer wording
and guideline numbers are unavailable.

**Change, Source A:** the developer reports adding steps to reach a feature-gated
paywall, testing instructions, and product-level review metadata.

**Outcome, Source A:** the developer reports approval after these changes;
no complete review exchange is supplied.

**Limits, Source A:** the author also describes advancing the device clock to
test expiration. That workaround may reflect app-managed access; it does not
demonstrate correct StoreKit renewal or
server-validated expiration. Our recommendation is Apple's [sandbox/StoreKit
testing](https://developer.apple.com/help/app-store-connect/test-in-app-purchases/overview-of-testing-in-sandbox)
with actual transaction states. Helpful review notes do not fix a broken entitlement.

**Source B:** [r/swift discussion, “App is live, but subscription is rejected?”](https://www.reddit.com/r/swift/comments/121row0/app_is_live_but_subscription_is_rejected/),
published 2023-03-25 UTC. The OP reports later subscription approval after resubmission.

**Suspected rejection reason, Source B:** a separate commenter, **u/roboknecht**,
reports an empty-paywall rejection; its precise cause is unproven.

**Change, Source B:** that commenter reports a reply with product IDs
and a working-screen capture.

**Outcome/limits, Source B:** app and product approval reported afterward.
The comment dates and exact reviewer text are not preserved here; timing claims
remain anecdotal.

**Benefit beyond approval:** reproducible steps and product identifiers improve
debugging, support, and repeatable tests of purchase access. These changes chiefly
improve operational clarity; no direct customer-facing redesign is established.

**Interpretation:** provide enough information to reproduce the same flow. The
commenter's diagnosis that pending approval explained the empty screen is not a
general statement that sandbox products cannot work before production approval.

## Case 8: appeal resolved one objection; other problems remained

**Source:** [u/HamsterBaseMaster, r/iOSProgramming, 2025-04-03](https://www.reddit.com/r/iOSProgramming/comments/1jq44yf/the_app_was_rejected_6_times_before_finally/).
**Evidence:** developer timeline with excerpted messages; no screenshot of the
appeal decision. App identity not verified from the account name.

**Suspected rejection reason:** the author reports a repeated 4.3(a) similarity
objection and later concerns about finding IAP, an unresponsive subscribe action,
and financial transactions. The author's automation/Capacitor explanations are
unverified; they are not established causes.

**Response/change:** an appeal arguing originality reportedly reopened review.
For the later objections, the developer supplied a route/video, improved loading
and error feedback, and clarified the app's technology before reporting final
approval on April 3.

**Why the change helps users:** loading and failure feedback distinguish a
processing purchase from an unavailable or failed action. That reduces uncertainty
and supports a sensible retry; winning the appeal alone does not repair the button.

**Outcome:** appeal success and final acceptance are developer-reported. The
appeal addressed app similarity, not subscription presentation; further fixes
and clarification were necessary. The author's assertions about automated
review and Capacitor causing the similarity flag are unverified explanations.

**Interpretation:** an appeal fits a disputed interpretation with concrete
evidence; a nonresponsive purchase button still needs a fix. Follow
[Apple's appeal guidance](https://developer.apple.com/app-store/review/) rather
than treating an appeal as an alternative to correcting a known defect.

## Case 5: RadTrack's custom screen promised a trial the system sheet omitted

**Source:** [u/manison88, r/appledevelopers, 2026-05-20](https://www.reddit.com/r/appledevelopers/comments/1ti60zi/frustrating_subscription_rejection_reasonadvice/).
**Evidence:** composite capture of the app paywall and sandbox confirmation,
developer-pasted rejection, and the author's update. The system sheet names
**RadTrack: Dose Tracker** and **RadTrack Pro (Monthly)**.

**Suspected rejection reason:** the app promises a seven-day trial. The pictured
sandbox sheet shows a monthly charge without the trial. The copied rejection asks
for clearer automatic charging terms and says the trial is absent in sandbox.
The exact product/offer/eligibility cause is unknown.

**Change:** the author later acknowledges having focused on the wrong screen
and reports a fix, without a corrected capture or sufficiently detailed change.

**Why the change helps users:** reconciling custom copy with the actual offer
would prevent someone expecting free access from encountering an immediate
charge. The pictured mismatch demonstrates the problem, not a verified remedy.

**Outcome:** the update reports the app fixed and approved, while subscriptions
remain rejected for a missing binary. No corrected image or final product
approval is supplied. It would be inaccurate to label the pictured screen an
accepted configuration.

**Interpretation:** investigate offer configuration, eligibility, and the selected
product, alongside renewal wording. The image cannot tell which configuration
caused the mismatch. [Gallery comparison](gallery.md#radtrack-paywall-versus-the-actual-transaction)
and [Apple's offer documentation](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-introductory-offers-for-auto-renewable-subscriptions/)
provide a better next step than repeatedly enlarging the button.

## Case 2: an unnamed homework app's trial switch changed the plan

**Source:** [u/Usual-Ant305, r/AppStoreOptimization, 2026-01-16](https://www.reddit.com/r/AppStoreOptimization/comments/1qeavxq/anyone_else_having_apple_reject_their_app_because/).
**Evidence:** paywall image, developer-pasted 3.1.2 objection, and comments about
the behavior. App name/store listing not identified in the post.

**Suspected rejection reason:** the reported reviewer objection identifies the
trial toggle as confusing. The developer says off selects annual and on selects
a weekly trial; our diagnosis is that trial choice also changes the paid commitment.

**Change:** the developer says they removed the switch and resubmitted. No
replacement screen is supplied.

**Why the change helps users:** explicit package choices could prevent a trial
preference from unexpectedly changing billing period and price. This expected
benefit depends on the unpictured replacement presenting the terms clearly.

**Outcome:** rejection and resubmission are developer-reported; no final approval
is established in the inspected original-poster comments. Other commenters say
their own similar paywalls passed, sometimes after adding charging disclosure.
Those claims have no matching before/after evidence for this app.

**Interpretation:** the switch combines trial choice with a billing-period and
price change. Removing it directly responds to the cited interaction objection.
“It passed for someone else” is weak advice when the actual notice names the
control. See the [pictured paywall](gallery.md#unnamed-homework-app-a-trial-switch-also-changes-the-package).

## Case 3: Axel Le Pennec shared the actual toggle objection

**Source:** [@alpennec on X, 2026-01-16](https://x.com/alpennec/status/2012188049728520514).
**Evidence:** first-person rejection report and a highlighted reviewer-message
image. The pictured review date is **2026-01-14**, device **iPad Air (M3)**;
app name and reviewed version are not shown.

**Suspected rejection reason:** the message explicitly identifies introductory
pricing dominating the billed amount and a toggle obscuring the commitment.

**Change requested:** make billed pricing dominant and remove the toggle.
An implemented change is not supplied.

**Why the requested change helps users:** prominent actual charges support
budgeting; distinct offer choices make the purchase authorization clearer.

**Outcome:** a visible rejection-message capture, posted by the developer. This
is stronger evidence of the requested changes than a recollection alone, but
the source does not show subsequent acceptance or independently authenticate
the notice.

**Interpretation:** an extra renewal sentence addresses neither a price hierarchy
problem nor an instruction to remove a control. This is one documented reviewer
instruction, not evidence that Apple published a universal toggle ban. The
[notice](gallery.md#reviewer-message-the-requested-change-can-be-specific) also
shows why full attachments matter beyond the guideline number.

## Case 4: Flo's replacement is a design observation, not an approval record

**Source:** [@alpennec on X, 2026-04-23](https://x.com/alpennec/status/2047218943333482976).
**Evidence:** comparison image labeled OLD/NEW for Flo. The author describes the
new behavior as appearing compliant; they are not claiming to be Flo's reviewer.

**Design question:** how can trial-bearing offers be selected explicitly?
No Flo rejection is documented in this source.

**Observed change:** the old view offers a trial toggle. The new view offers a
trial-selection action and a sheet listing trial-bearing and non-trial options.
Prices differ across old/new captures; it is not a controlled experiment.

**Why the change helps users:** visible package groups help connect each trial
to its subsequent paid commitment. This is a design rationale, not a measured
comprehension improvement.

**Outcome:** visible design change; exact submission outcome unknown. It is not
the after-state of Axel's unnamed rejected app in Case 3.

**Interpretation:** explicit packages help communicate which offer will be bought.
Still evaluate billed-price prominence: the [Flo image](gallery.md#flo-old-and-new-trial-selection)
shows prominent monthly equivalents for annual packages. A popular live app does
not make every visible detail a safe current template.

## Coverage and gaps

| Evidence available | What remains unknown |
| --- | --- |
| Original/final Lenglio screens with a dated approval account | Intermediate design and authenticated approval record; exact app version/storefront |
| Trial-toggle screenshot plus original-poster rejection text | That app's identity, after image, final outcome |
| Axel's actual reviewer-message image | App identity, after image, acceptance |
| Flo's old/new comparison | Review history, version/storefront, controlled pricing comparison |
| RadTrack app/system mismatch | Corrected configuration and final subscription approval |
| Reports of metadata fixes, clarification, and appeal | Complete reviewer exchanges and independent outcome verification |
| Ten additional illustrated cases from blogs, newsletters, and Reddit | Exact pictured builds/storefronts, authenticated decisions, and causal comparisons |

These gaps are part of the evidence assessment. They are not filled with
generated paywalls, unrelated live screenshots, or presumed approvals.
