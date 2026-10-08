# Subscription review histories

[Guide](README.md) · [Gallery](gallery.md) · [Checklist](checklist.md)

These accounts follow what a reviewer objected to, how the developer responded, and what happened next. They help distinguish a paywall change from a correction to product submission, public metadata, or reviewer access. The [guide](README.md#start-with-the-place-where-the-problem-occurs) explains those different surfaces; the [gallery](gallery.md#browse-by-design-question) compares screenshots, design experiments, and proposed layouts.

The original accounts were checked **2026-10-06**. Dates below identify publication unless a review-event date is stated. Outcomes are developer-reported, without independently authenticated Apple decisions. Each history keeps the reported objection separate from our explanation of what it suggests checking.

## Choose a history by the problem it explains

- **Paid benefits and successive objections:** [Lenglio](#lenglio-benefits-metadata-and-access-to-the-paywall) changed its listing, review instructions, and benefit descriptions.
- **Trial configuration:** [RadTrack](#radtrack-a-promised-trial-was-absent-from-the-purchase) promised a trial absent from the purchase confirmation.
- **Trial selection and price hierarchy:** compare the [homework app](#homework-app-a-trial-switch-changed-the-billing-period) with [Axel's reviewer message](#axels-reviewer-message-the-requested-changes-were-explicit).
- **Submission and public metadata:** [Vunzo](#vunzo-products-and-public-metadata-needed-separate-fixes) corrected the product submission, legal links, and marketing screenshots.
- **Reviewer access:** [TwoShot](#twoshot-the-reviewer-needed-a-reproducible-purchase-route) supplied testing instructions; a separate [clarification thread](#clarification-thread-responding-to-an-empty-paywall-report) describes replying with product IDs and a working-screen capture.
- **Appeal and implementation fixes:** an [appeal account](#appeal-account-reopening-review-left-purchase-defects-to-fix) describes reopening review, followed by further purchase-flow corrections.

## Lenglio: benefits, metadata, and access to the paywall

In a [post published on 2025-10-26](https://www.reddit.com/r/iOSProgramming/comments/1og8u7v/my_first_experience_with_apple_app_store_review/), u/Lenglio describes review of [Lenglio](https://apps.apple.com/us/app/lenglio/id6743641830) during July 16–22, 2025. The account includes quoted rejection text and original/final paywall images, which show how the screen changed alongside other submission corrections.

The first reported rejection concerned promoted in-app purchase names, descriptions, and promotional images under 2.3.2, as well as unclear subscription benefits under 3.1.2. The original paywall listed purchase titles and prices without explaining the paid access. The developer corrected the metadata and removed unwanted promotional images.

A later rejection said the reviewer could not locate the paywall. The developer supplied screenshots of its entry route. Another rejection led to explicit descriptions of free and premium capabilities and a revised purchase screen. These were successive problems: explaining what payment unlocks did not replace the need to make the upgrade route findable.

The developer reports app approval on **2025-07-22** and identifies the final image as the approved paywall. The products still required subsequent review; their later approvals are also reported, with uncertain timing. The [before/after pair](gallery.md#lenglio-before-and-after-benefit-disclosure) shows the design change, but there are no intermediate images or authenticated approval notice to isolate which correction led to acceptance.

The useful lesson is to identify each objection's location before choosing a response. Clear paid capabilities help customers compare value, while consistent metadata and reproducible entry instructions address different parts of review. For product submission, use Apple's [documented procedure](https://developer.apple.com/help/app-store-connect/manage-submissions-to-app-review/submit-an-in-app-purchase/); the author's reported workaround of adding and removing a space is historical experience, not a supported procedure.

## RadTrack: a promised trial was absent from the purchase

In a [2026-05-20 post](https://www.reddit.com/r/appledevelopers/comments/1ti60zi/frustrating_subscription_rejection_reasonadvice/), u/manison88 shares a composite of RadTrack's paywall and Apple's sandbox purchase confirmation. The system sheet names **RadTrack: Dose Tracker** and **RadTrack Pro (Monthly)**. The app promises a seven-day trial, while the pictured confirmation shows a monthly charge without the trial.

The copied rejection asks for clearer automatic-charging terms and says the trial is absent in sandbox. Those are related checks: the screen must explain the paid continuation, and the actual purchase must deliver the advertised introductory offer. The image establishes the mismatch, but cannot identify whether the selected product, offer configuration, or account eligibility caused it.

The author later acknowledges having focused on the wrong screen and reports a fix. The update says the app was approved while the subscriptions remained rejected for a missing binary. It supplies neither a corrected capture nor enough implementation detail to establish the remedy, and no final subscription approval is shown.

Start by comparing the app's promise with the selected product and eligible customer's actual confirmation. Correcting that agreement prevents someone expecting a trial from encountering an immediate charge. The [gallery comparison](gallery.md#radtrack-paywall-versus-the-actual-transaction) and [Apple's offer documentation](https://developer.apple.com/help/app-store-connect/manage-subscriptions/set-up-introductory-offers-for-auto-renewable-subscriptions/) support that investigation; the pictured configuration should not be presented as an accepted after-state.

## Homework app: a trial switch changed the billing period

In a [2026-01-16 post](https://www.reddit.com/r/AppStoreOptimization/comments/1qeavxq/anyone_else_having_apple_reject_their_app_because/), u/Usual-Ant305 shares a paywall and a pasted 3.1.2 objection identifying its trial toggle as confusing. The app is not named. The developer explains that switching the trial off selects annual billing, while switching it on selects a weekly plan with a trial.

The developer says they removed the switch and resubmitted, but provides no replacement screen or final approval in the inspected original-poster comments. Other commenters report that their own similar paywalls passed, sometimes after adding charging disclosure. Those are separate experiences, without matching before/after evidence for this app.

Our diagnosis is that the switch combines trial preference with a change in billing period and price. Explicit package choices could make those commitments easier to compare, provided the replacement shows their terms clearly. Removing the switch answers the reported instruction directly; another app's acceptance does not resolve that objection. The [gallery](gallery.md#unnamed-homework-app-a-trial-switch-also-changes-the-package) preserves the rejected screen.

## Axel's reviewer message: the requested changes were explicit

In a [2026-01-16 post on X](https://x.com/alpennec/status/2012188049728520514), Axel Le Pennec shares a highlighted reviewer-message capture. It lists a review dated **2026-01-14** on an **iPad Air (M3)**, but does not identify the app or reviewed version.

The message explicitly asks for two changes: make the billed amount more prominent than introductory pricing, and remove the toggle that obscures the commitment. It records what this reviewer requested more directly than a recollection alone. The source does not independently authenticate the notice or supply an implemented revision and subsequent acceptance.

An extra renewal sentence would answer neither the price hierarchy issue nor the instruction to remove the control. Those changes concern whether someone can identify the actual charge and the offer being authorized. Read the [complete notice](gallery.md#reviewer-message-the-requested-change-can-be-specific), rather than inferring the remedy from a guideline number. This account does not establish a universal toggle ban. Axel's separate [Flo comparison](gallery.md#flo-old-and-new-trial-selection), published in April, is a design observation with no documented review decision; it is not the revised version of this unnamed app.

## Vunzo: products and public metadata needed separate fixes

In a [2026-09-10 account](https://www.reddit.com/r/AppBusiness/comments/1wcdvzm/got_rejected_twice_by_apple_before_launch_here_is/), u/Fun_Thought_2326 describes review of [Vunzo](https://apps.apple.com/app/vunzo-subscription-tracker/id6799741913). The source provides a developer narrative and product link, without the original rejection notice or a rejected paywall image.

The developer reports products missing from the submission under 2.1(b), a missing metadata Terms of Use link under 3.1.2(c), and a priced public paywall screenshot under 2.3.7. They say they added the products and group, added legal links, and replaced the public screenshot with a feature image. The media correction required no new build.

The author reports launch after resolving the issues. The post's title says “twice,” while its body enumerates three objections, so it does not support an exact rejection count. Its claim that “Free” was flagged is also a report about this submission, not a universal prohibition on the word inside an app. With no rejected screen, the account cannot establish that a particular pictured paywall passed.

The distinction to carry forward is between public marketing screenshots, product-review evidence, and the actual purchase screen. Replacing public media does not justify removing accurate prices from the purchase itself. Check [2.3.7](https://developer.apple.com/app-store/review/guidelines/#accurate-metadata) and [Apple's review-only screenshot definition](https://developer.apple.com/help/app-store-connect/reference/in-app-purchases-and-subscriptions/in-app-purchase-information) for the surface being corrected. Complete products and accessible terms support the intended purchase, while marketing changes answer a separate metadata objection.

## TwoShot: the reviewer needed a reproducible purchase route

In a [post published on 2026-04-18 UTC](https://www.reddit.com/r/appledevelopers/comments/1sp6ln3/3_rejections_before_my_first_iap_app_got_approved/) (April 19 in Taiwan), u/dnp1204 describes review of TwoShot. The developer reports that the reviewer needed clearer instructions for reaching the purchase screen from a paid feature; the source does not supply the precise reviewer wording or guideline numbers.

The developer says they added steps to reach the paywall, testing instructions, and product-level review metadata. They report approval afterward, without a complete review exchange. The account illustrates how a working purchase flow can still be difficult for another person to reach and inspect.

A reproducible route also supports debugging and repeatable purchase tests. It does not establish that expiration or access recovery works. The author describes advancing the device clock to test expiration, which may reflect app-managed access and does not demonstrate StoreKit or server-validated renewal behavior. Use Apple's [sandbox and StoreKit testing](https://developer.apple.com/help/app-store-connect/test-in-app-purchases/overview-of-testing-in-sandbox) to exercise actual transaction states.

## Clarification thread: responding to an empty-paywall report

The [r/swift discussion “App is live, but subscription is rejected?”](https://www.reddit.com/r/swift/comments/121row0/app_is_live_but_subscription_is_rejected/), published **2023-03-25 UTC**, contains separate developers' experiences. The original poster reports later subscription approval after resubmission. A different commenter, **u/roboknecht**, describes an empty-paywall rejection; these should not be treated as one submission history.

That commenter reports replying with product IDs and a capture showing the working screen, followed by app and product approval. The precise cause of the empty screen is unproven. The preserved notes do not include exact comment dates or reviewer text, so the timing and outcome remain anecdotal.

Product identifiers and a working-screen capture give the reviewer concrete evidence to compare with their experience. The commenter's explanation that pending approval caused the empty screen does not establish a general rule that sandbox products cannot work before production approval. Investigate the actual loading failure and supply evidence of the same product and route.

## Appeal account: reopening review left purchase defects to fix

In a [2025-04-03 account](https://www.reddit.com/r/iOSProgramming/comments/1jq44yf/the_app_was_rejected_6_times_before_finally/), u/HamsterBaseMaster describes repeated 4.3(a) similarity objections and later concerns about finding IAP, an unresponsive subscribe action, and financial transactions. The timeline includes excerpted messages, but no capture of the appeal decision. The app's identity cannot be verified from the account name.

An appeal arguing originality reportedly reopened review. For the later objections, the developer supplied a route and video, improved loading and error feedback, and clarified the app's technology before reporting final approval on April 3. The appeal concerned app similarity; purchase-flow fixes and further explanation were still needed.

Loading and failure feedback help customers distinguish a processing purchase from an unavailable or failed action. Winning an appeal would not repair the button. This history supports choosing an appeal for a disputed interpretation and an implementation fix for a reproducible defect, using [Apple's appeal guidance](https://developer.apple.com/app-store/review/). The reported appeal success and final acceptance are not independently authenticated, and the author's explanations involving automated review and Capacitor are unverified causes.
