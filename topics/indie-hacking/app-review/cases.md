# Developer discussions: rejection, response, outcome

[Guide](README.md) · [Gallery](gallery.md) · [Checklist](checklist.md)

Checked 2026-10-06. Dates below are publication dates unless an event date is
specified. Reddit dates were read from rendered timestamps; X dates from the
original post. Outcomes are attributed to the relevant author, not independently
verified Apple records. Comments by other developers are separate cases, not
follow-ups by the original poster.

## Case 1: Lenglio made the paid entitlement explicit

**Source:** [u/Lenglio, r/iOSProgramming, 2025-10-26](https://www.reddit.com/r/iOSProgramming/comments/1og8u7v/my_first_experience_with_apple_app_store_review/).
The account describes review events on July 16–22, 2025, not October review.
**Evidence:** developer narrative, quoted rejection text, original/final paywall
images. App: Lenglio, [App Store ID 6743641830](https://apps.apple.com/us/app/lenglio/id6743641830).

The first rejection covered promoted-IAP names/descriptions and promotional
images (2.3.2), plus unclear subscription benefits (3.1.2). The developer says
the original paywall listed only purchase titles and prices. They changed
metadata and removed unwanted promotional images. A later rejection could not
locate the paywall; screenshots of its entry route were supplied. Another
rejection led to explicit free-versus-premium descriptions and a revised paywall.

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

## Case 2: an unnamed homework app's trial switch changed the plan

**Source:** [u/Usual-Ant305, r/AppStoreOptimization, 2026-01-16](https://www.reddit.com/r/AppStoreOptimization/comments/1qeavxq/anyone_else_having_apple_reject_their_app_because/).
**Evidence:** paywall image, developer-pasted 3.1.2 objection, and comments about
the behavior. App name/store listing not identified in the post.

The developer says the switch defaults off with annual selected; enabling it
selects a weekly trial plan. The reviewer objection specifically identifies the
trial toggle as confusing. The developer subsequently says they removed it and
resubmitted.

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

The message names two concerns: the introductory period is more prominent than
the billed amount, and the trial toggle obscures the subscription commitment.
Its next steps ask for dominant billed pricing and removal of the toggle.

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

The old view offers a trial toggle. The new view offers a trial-selection action
and a sheet listing trial-bearing and non-trial options. The image also contains
different prices across old/new captures; it is not a controlled experiment.

**Outcome:** visible design change; exact submission outcome unknown. It is not
the after-state of Axel's unnamed rejected app in Case 3.

**Interpretation:** explicit packages help communicate which offer will be bought.
Still evaluate billed-price prominence: the [Flo image](gallery.md#flo-old-and-new-trial-selection)
shows prominent monthly equivalents for annual packages. A popular live app does
not make every visible detail a safe current template.

## Case 5: RadTrack's custom screen promised a trial the system sheet omitted

**Source:** [u/manison88, r/appledevelopers, 2026-05-20](https://www.reddit.com/r/appledevelopers/comments/1ti60zi/frustrating_subscription_rejection_reasonadvice/).
**Evidence:** composite capture of the app paywall and sandbox confirmation,
developer-pasted rejection, and the author's update. The system sheet names
**RadTrack: Dose Tracker** and **RadTrack Pro (Monthly)**.

The app promises a seven-day trial. The pictured sandbox sheet shows a monthly
charge without the trial. The copied rejection asks for clearer automatic
charging terms and specifically says the trial is absent in the sandbox flow.
The author later acknowledges having focused on the wrong screen.

**Outcome:** the update reports the app fixed and approved, while subscriptions
remain rejected for a missing binary. No corrected image or final product
approval is supplied. It would be inaccurate to label the pictured screen an
accepted configuration.

**Interpretation:** investigate offer configuration, eligibility, and the selected
product, alongside renewal wording. The image cannot tell which configuration
caused the mismatch. [Gallery comparison](gallery.md#radtrack-paywall-versus-the-actual-transaction)
and [Apple's offer documentation](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-introductory-offers-for-auto-renewable-subscriptions/)
provide a better next step than repeatedly enlarging the button.

## Case 6: Vunzo needed submission and public-metadata changes

**Source:** [u/Fun_Thought_2326, r/AppBusiness, 2026-09-10](https://www.reddit.com/r/AppBusiness/comments/1wcdvzm/got_rejected_twice_by_apple_before_launch_here_is/).
App: Vunzo, [App Store ID 6799741913](https://apps.apple.com/app/vunzo-subscription-tracker/id6799741913).
**Evidence:** developer narrative and product link; no original rejection notice
or rejected paywall image was available in this source.

The author describes products not included in the submission (2.1(b)), a missing
metadata Terms of Use link (3.1.2(c)), and a priced public paywall screenshot
(2.3.7). They report adding the products/group, adding legal links, and replacing
the public screenshot with a feature image; the media change required no new build.
The title says “twice,” but the body enumerates three objections; do not derive
an exact rejection count from that inconsistent wording.

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

The developer reports approval after adding steps to reach a feature-gated
paywall, testing instructions, and product-level review metadata. They also
describe advancing the device clock to test expiration. That workaround may
reflect app-managed access; it does not demonstrate correct StoreKit renewal or
server-validated expiration. Our recommendation is Apple's [sandbox/StoreKit
testing](https://developer.apple.com/help/app-store-connect/test-in-app-purchases/overview-of-testing-in-sandbox)
with actual transaction states. Helpful review notes do not fix a broken entitlement.

**Source B:** [r/swift discussion, “App is live, but subscription is rejected?”](https://www.reddit.com/r/swift/comments/121row0/app_is_live_but_subscription_is_rejected/),
published 2023-03-25 UTC. The OP reports later subscription approval after resubmission.
A separate commenter, **u/roboknecht**, reports getting an empty-paywall rejection
resolved after a reply with product IDs and a working-screen capture; they report
both app and product approval afterward. The comment dates and exact reviewer
text are not preserved here; timing claims remain anecdotal.

**Interpretation:** provide enough information to reproduce the same flow. The
commenter's diagnosis that pending approval explained the empty screen is not a
general statement that sandbox products cannot work before production approval.

## Case 8: appeal resolved one objection; other problems remained

**Source:** [u/HamsterBaseMaster, r/iOSProgramming, 2025-04-03](https://www.reddit.com/r/iOSProgramming/comments/1jq44yf/the_app_was_rejected_6_times_before_finally/).
**Evidence:** developer timeline with excerpted messages; no screenshot of the
appeal decision. App identity not verified from the account name.

The author reports a repeated 4.3(a) similarity objection, then an App Review
Board appeal arguing originality. They say it reopened review. Later objections
concerned locating IAP, a subscribe action doing nothing, and a misunderstanding
about financial transactions. They supplied a route/video, improved loading and
error feedback, and clarified the app's technology before reporting final
approval on April 3.

**Outcome:** appeal success and final acceptance are developer-reported. The
appeal addressed app similarity, not subscription presentation; further fixes
and clarification were necessary. The author's assertions about automated
review and Capacitor causing the similarity flag are unverified explanations.

**Interpretation:** an appeal fits a disputed interpretation with concrete
evidence; a nonresponsive purchase button still needs a fix. Follow
[Apple's appeal guidance](https://developer.apple.com/app-store/review/) rather
than treating an appeal as an alternative to correcting a known defect.

## Coverage and gaps

| Evidence available | What remains unknown |
| --- | --- |
| Original/final Lenglio screens with a dated approval account | Intermediate design and authenticated approval record; exact app version/storefront |
| Trial-toggle screenshot plus original-poster rejection text | That app's identity, after image, final outcome |
| Axel's actual reviewer-message image | App identity, after image, acceptance |
| Flo's old/new comparison | Review history, version/storefront, controlled pricing comparison |
| RadTrack app/system mismatch | Corrected configuration and final subscription approval |
| Reports of metadata fixes, clarification, and appeal | Complete reviewer exchanges and independent outcome verification |

These gaps are part of the evidence assessment. They are not filled with
generated paywalls, unrelated live screenshots, or presumed approvals.
