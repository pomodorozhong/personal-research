# Real app paywalls: annotated evidence

[Guide](README.md) · [Developer cases](cases.md) · [Checklist](checklist.md)

Twenty preserved source images, structured and ordered 2026-10-07, covering
fourteen paywall cases and one supporting reviewer message. Annotations describe
the original visible elements; we have not redrawn, generated, or edited the
images. Click an image to inspect it separately. Source highlighting, collages,
and redaction are preserved. Versions/storefronts are unknown unless stated;
displayed prices are historical, and a dollar sign alone does not identify currency.

## Browse by design question

Read **Lenglio → Snapkin → Metacast** first: each has paired visual evidence and
a developer's rejection-to-acceptance account. Other review accounts follow,
then experiments, proposed layouts, and observed product flows. The index follows
the same order as the case sections.

Rejection fields distinguish reported reviewer objections from our diagnosis.
Reported acceptance does not establish that one pictured change caused approval.
User-benefit fields explain our design reasoning; they are not measured usability
results unless a source supplies such evidence. Cases without a documented
rejection use a design question instead of inventing a rejection reason.

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

**Review status:** developer reports rejection → acceptance; original/final images supplied.

| Before: associated with rejection | After: developer reports acceptance |
| --- | --- |
| <a href="images/lenglio-before.png"><img src="images/lenglio-before.png" width="306" alt="Original Lenglio paywall lists weekly, monthly, and lifetime prices beneath a generic language-learning headline."></a> | <a href="images/lenglio-after.png"><img src="images/lenglio-after.png" width="231" alt="Revised Lenglio Premium paywall lists four premium capabilities and distinguishes recurring subscriptions from a one-time purchase."></a> |

**Source:** Lenglio; [developer post](https://www.reddit.com/r/iOSProgramming/comments/1og8u7v/my_first_experience_with_apple_app_store_review/),
published 2025-10-26. Rejection described on 2025-07-17; app approval reported on
2025-07-22. Capture dates not supplied. Before/after image sizes are 306×500 and
231×500; these are the supplied linked previews, so small text has limited resolution.

**Suspected rejection reason:** the reported 3.1.2 objection asked what the
subscription provides. Our diagnosis is that generic language-learning copy
and prices did not make the paid entitlement clear.

**Change:** the final screen names book import, unrestricted library, text
analysis, and removal of paywall interruptions. It also labels lifetime access
as a one-time purchase, distinct from weekly/monthly subscriptions.

**Why the change helps users:** people can assess whether the paid capabilities
meet their needs and distinguish an ongoing charge from a single purchase.
Concrete entitlements support a more informed value comparison.

**Outcome and limits:** app approval reported on 2025-07-22; metadata also changed,
intermediate revisions are missing, and products needed separate approval. Both
screens retain a close control, footer links, and the same Continue action;
the button word alone does not explain the outcome. Links/restoration were not
tested. [Full case](cases.md#case-1-lenglio-made-the-paid-entitlement-explicit).

### Snapkin: platform-specific cancellation copy

**Review status:** developer reports rejection → launch; source-labeled before/after pair.

<a href="images/snapkin-before-after.jpg"><img src="images/snapkin-before-after.jpg" width="950" alt="Snapkin before/after comparison highlights removing Google Play from iOS cancellation and payment explanations while retaining monthly and annual plan cards."></a>

**Source:** [Mattias Geniar's developer blog](https://ma.ttias.be/app-store-rejection-reasons/),
2026-09-30. Source-annotated collage: 1104×1024. Capture dates, pictured build,
and storefront unknown; displayed prices use euros.

**Suspected rejection reason:** the developer reports a 2.3.10 objection to
Google Play references in the iOS paywall. The highlighted cancellation and
payment explanations name two stores without resolving which applies here.

**Change:** the after screen removes the other-platform reference and uses
neutral store wording for payment. Monthly €9.99 with a three-day trial,
yearly €49.99, and the renewal/restoration/legal footer remain visible.

**Why the change helps users:** an iOS customer has fewer irrelevant instructions
to interpret when deciding where payment and cancellation happen. Platform-aware
copy can reduce support confusion. Naming the applicable store or providing an
exact cancellation route would be clearer still than generic store wording.

**Outcome and limits:** launch reported on September 24 after six submissions
and several other corrections. The paired images support the copy change,
but do not isolate its effect on approval or measure customer comprehension.

### Metacast: legal links below the fold

**Review status:** developer reports rejection → launch; source comparison includes a revised layout.

<a href="images/metacast-layout.jpg"><img src="images/metacast-layout.jpg" width="1050" alt="Metacast source comparison: a small iPad compatibility window hides the legal footer, a large phone shows it, and the revised layout exposes the beginning of the disclaimer."></a>

**Source:** [Ilya Bezdelev, Metacast developer blog](https://metacast.app/blog/company/case-study-google-play-apple-app-store-launch),
2024-10-07. Source collage: 3943×2552; capture dates/version/storefront unknown.
The middle and right screens carry debug ribbons.

**Suspected rejection reason:** the author associates the 3.1.2 objection with
legal links hidden below the initial viewport in iPad compatibility mode.
The same links were visible on the large phone used during development.

**Change:** the right-hand revision exposes the beginning of the disclaimer,
signaling additional content below. The source also changes benefits and
launch-offer copy; this is not a controlled layout-only comparison.

**Why the change helps users:** a visible continuation cue makes terms easier
to discover on a small screen. Actually scrollable, working links let customers
inspect the agreement before paying; a fragment of text alone is insufficient.

**Outcome and limits:** September 20 launch reported after legal, product-submission,
and introductory-price fixes. The revised annual price and 100%-discount wording
appear inconsistent. Use the comparison to investigate discoverability, while
separately checking offer accuracy and the complete scroll path.

## Other rejection accounts

### notJust.dev: trial copy and metadata are different surfaces

**Review status:** developer reports rejection → acceptance; only one paywall state is pictured.

<a href="images/notjust-paywall.jpg"><img src="images/notjust-paywall.jpg" width="380" alt="Developer-shared unnamed AI companion app paywall selects a weekly plan, offers an annual alternative, and shows a trial action plus restore and legal links."></a>

**Source:** [Vadim Savin's developer newsletter](https://news.notjust.dev/posts/my-first-from-app-dev).
The page displays a relative publication age; exact publication/capture dates
are unconfirmed. Retrieved 2026-10-06. Original JPEG: 1206×2622;
app name/version/storefront unknown.

**Suspected rejection reason:** the reported rejection concerned missing terms
links in App Store metadata. Restoration, terms, and privacy are already visible
in the pictured paywall; those in-app links do not populate the metadata.

**Change:** the author reports correcting metadata links. A before/after
metadata capture is unavailable; no visual paywall correction is established.

**Why the change helps users:** making the agreement available on the store listing
helps prospective customers inspect conditions before installing or subscribing.
Consistent legal destinations also make the listing and purchase flow easier to
understand together.

**Outcome and limits:** acceptance is reported, but the exact accepted build is
unproven. The author describes a three-day trial on $4.99 weekly and none on
$29.99 yearly. The pictured weekly action promises a trial without visibly
stating its length; the annual-selected state is unpictured. Metadata acceptance
does not demonstrate that these purchase details are complete.

### RadTrack: paywall versus the actual transaction

**Review status:** reported rejection; app later reportedly accepted, products unresolved.

<a href="images/trial-mismatch.webp"><img src="images/trial-mismatch.webp" width="430" alt="RadTrack composite: the custom paywall promises a seven-day free trial, while the sandbox purchase sheet shows $5.99 per month without a trial."></a>

**Source:** **RadTrack: Dose Tracker**, identified in the system sheet;
[u/manison88's post](https://www.reddit.com/r/appledevelopers/comments/1ti60zi/frustrating_subscription_rejection_reasonadvice/),
2026-05-20. Capture date/version/storefront unknown. Source collage: 1080×2348.
The source already redacts the account identifier. This is a comparison between
screens in one reported flow, not a before/after redesign.

**Suspected rejection reason:** the developer-pasted notice identifies a missing
trial in sandbox and unclear automatic-charging terms. The app promises seven
days free, while the pictured monthly system sheet shows $5.99/month without
a trial. The precise configuration cause is unknown.

**Change:** the author reports a fix and app approval, but supplies no corrected
capture or enough detail to identify the fix. Our recommended response is to
reconcile the selected product, offer availability, eligibility, and disclosure
with the actual system transaction.

**Why the change helps users:** accurate offer-specific copy prevents someone
expecting a free trial from discovering an immediate charge at confirmation.
Matching the two screens also makes the eventual renewal easier to anticipate.

**Outcome and limits:** subscriptions remained rejected at the update. The source
collage compares two screens in one flow, not a before/after redesign. Its sandbox
testing label does not itself establish trial eligibility; legal footer text
does not resolve a contradictory offer. [Full case](cases.md#case-5-radtracks-custom-screen-promised-a-trial-the-system-sheet-omitted).

### Unnamed homework app: a trial switch also changes the package

**Review status:** developer reports rejection and resubmission; final acceptance unknown.

<a href="images/study-toggle.webp"><img src="images/study-toggle.webp" width="420" alt="Homework AI app paywall with a Free Trial Enabled toggle, an annual plan, and a selected three-day trial followed by weekly billing."></a>

**Source:** unnamed homework AI app shared by
[u/Usual-Ant305](https://www.reddit.com/r/AppStoreOptimization/comments/1qeavxq/anyone_else_having_apple_reject_their_app_because/),
2026-01-16. App title/version/storefront unknown. The screenshot status bar says
Wednesday January 14; the capture year is not printed. Preserved image: 1080×1554.

**Suspected rejection reason:** the pasted 3.1.2 objection identifies the trial
toggle as confusing. The author says off selects annual and on selects a weekly
trial. Our diagnosis is that the control combines trial preference with a
different billing period and price.

**Change:** the developer reports removing the switch and resubmitting;
the resulting screen is unavailable. Our recommendation is to present each
package's trial, subsequent charge, and billing period as an explicit choice.

**Why the change helps users:** choosing a trial should not unexpectedly substitute
a different recurring commitment. Explicit packages let users compare the amount
and cadence they will actually buy.

**Outcome and limits:** only the rejected screen is pictured. It mixes $39.99/year,
$0.77/week equivalent pricing, and a trial leading to $5.99/week. The trial dominates
the smaller recurring-price text in our visual assessment; this is not a separate
documented objection. Restore/legal links are visible. [Full case and conflicting reports](cases.md#case-2-an-unnamed-homework-apps-trial-switch-changed-the-plan).

### Reviewer message: the requested change can be specific

**Review status:** developer-shared rejection message; no paywall comparison or final outcome.

<a href="images/axel-rejection.webp"><img src="images/axel-rejection.webp" width="650" alt="Developer-shared App Review message dated January 14, 2026 highlights an instruction to remove a trial toggle and separately asks for dominant billed pricing."></a>

**Source:** app unnamed;
[Axel Le Pennec on X](https://x.com/alpennec/status/2012188049728520514),
2026-01-16. Message lists review on **2026-01-14**, **iPad Air (M3)**; version is
blank. Source image: 1200×1200. This is reviewer evidence accompanying the
paywall examples, not another paywall or a full review exchange.

**Suspected rejection reason:** the pictured notice explicitly objects to
introductory pricing dominating the billed amount and a toggle obscuring the
subscription commitment. These are reviewer-stated concerns, not inferred from
a screenshot of the paywall.

**Change requested:** remove the toggle and make the full billed amount dominant,
considering font, size, color, and location. No implemented revision is supplied.

**Why the requested change helps users:** a visible full charge helps people
budget for the actual commitment. Separating offer choices makes it easier to
understand what a purchase action authorizes; adding fine print alone may leave
both problems intact.

**Outcome and limits:** the developer supplies the highlights/collage; app identity,
reviewed version, and acceptance are absent. This records one specific instruction,
not a universally published toggle ban. [Full case](cases.md#case-3-axel-le-pennec-shared-the-actual-toggle-objection).

## Experiments and other design references

### Foodnoms: feature matrix to trial timeline

**Evidence type:** developer-reported onboarding experiment with earlier/experiment captures;
no rejection is reported.

| Earlier design | Onboarding experiment |
| --- | --- |
| <a href="images/foodnoms-before.png"><img src="images/foodnoms-before.png" width="380" alt="Foodnoms paywall compares Free and Foodnoms Plus features with a seven-day trial followed by $39.99 per year."></a> | <a href="images/foodnoms-after.png"><img src="images/foodnoms-after.png" width="380" alt="Foodnoms trial timeline explains immediate access, a permission-dependent reminder on day five, and charging on day seven."></a> |

**Source:** [Foodnoms developer's experiment report](https://ryanwesley.com/paywall-optimization-success-story/),
2024-07-25. Both source captures: 1179×2556. Filenames identify simulator captures
on July 24 and July 10 respectively; pictured versions/storefronts unknown.

**Design question:** can eligible customers understand when access begins,
when a reminder arrives, and when the annual charge occurs?

**Observed change:** the free-versus-paid feature matrix becomes a seven-day
timeline: immediate access, a permission-dependent reminder on day five,
then charging on day seven. Both screens show $39.99/year after the trial.

**Potential user benefit:** a chronological explanation can make the future
charge easier to anticipate. Stating the permission dependency avoids promising
a reminder that the app cannot deliver. The earlier matrix better explains which
capabilities are paid, so the two designs serve different information needs.

**Reported result:** 59.6% more conversions to paying users in a two-week comparison,
alongside a 15.9% decline in trial-to-paid conversion. These are the author's
business metrics, not measured comprehension or an App Review decision.

**Tradeoff and limits:** the experiment targeted trial-eligible onboarding.
Check reminder delivery and actual eligibility; a timeline should not promise
free access to an ineligible customer.

### Dark Noise: revealing all plans up front

**Evidence type:** developer-reported control/experiment comparison; no rejection is reported.

<a href="images/dark-noise-options.png"><img src="images/dark-noise-options.png" width="950" alt="Dark Noise Control and Experiment: the control presents an annual price and All plans link, while the experiment displays monthly, annual, and lifetime cards together."></a>

**Source:** [Charlie Chapman's firsthand experiment report](https://www.revenuecat.com/blog/engineering/how-i-successfully-migrated-my-indie-app-to-revenuecat-paywalls),
published 2024-01-03, updated 2025-11-21. Chapman develops Dark Noise and works
for RevenueCat, which publishes this article. Source collage: 1474×1524;
capture dates/version/storefront unknown.

**Design question:** how easily can customers discover and compare recurring
subscriptions and lifetime access?

**Observed change:** the control initially shows annual with an extra link for
other plans. The experiment exposes $2.99/month, $19.99/year, and $49.99 lifetime
together; annual stays selected.

**Potential user benefit:** visible alternatives reduce navigation needed
to compare commitments and find a suitable purchase type. Explicitly labeling
lifetime as one-time would further distinguish it from recurring subscriptions.

**Reported result:** the author reports higher initial conversion but worse churn.
More visible choices therefore did not establish better retention. Neither
screen has a documented App Review decision.

**Tradeoff and limits:** adding cards increases information density. Restoration
and terms are visible; a privacy link is not visible in this capture, which cannot
establish availability elsewhere. The developer also works for the article's
publisher, RevenueCat; weigh the commercial relationship when assessing claims.

### Flo: old and new trial selection

**Evidence type:** observed old/new redesign; rejection and acceptance of these screens are unverified.

<a href="images/flo-options.webp"><img src="images/flo-options.webp" width="1000" alt="Flo comparison labeled OLD and NEW: a trial toggle is replaced by a trial-selection entry and a sheet separating a 14-day trial from no-trial packages."></a>

**Source:** Flo, identified by
[Axel Le Pennec's original X post](https://x.com/alpennec/status/2047218943333482976),
2026-04-23. Capture dates/version/storefront unknown. Original comparison
1200×675, already labeled OLD/NEW by the source. Old images use £; new use $.

**Design question:** how can a customer compare trial-bearing and non-trial
packages as explicit offers?

**Observed change:** the trial switch becomes a trial-selection entry and a
sheet grouping 14-day-trial offers separately from packages without a trial.
The action reflects the selected trial duration.

**Potential user benefit:** explicit offer groups expose the choices and
make it easier to connect trial eligibility and later billing to a particular
package, instead of interpreting a binary trial switch.

**Reported result:** a design change is visible; the author describes it as
appearing compliant, without a Flo approval record. This is not the after-image
of Axel's unnamed rejected app.

**Tradeoff and limits:** old captures use £ and new ones use $, with different
prices. The annual offer still emphasizes a monthly equivalent over the smaller
annual amount. Audit [billed-price prominence](https://developer.apple.com/app-store/subscriptions/)
separately. [Full case](cases.md#case-4-flos-replacement-is-a-design-observation-not-an-approval-record).

### Melonote: a trial timeline on a small screen

**Evidence type:** developer's current/proposed layouts and iPhone SE comparison;
no rejection is reported.

| Current design supplied by author | Proposed timeline | Proposed design on iPhone SE |
| --- | --- | --- |
| <a href="images/trial-refunds-before.png"><img src="images/trial-refunds-before.png" width="300" alt="Melonote's current Premium Notes paywall lists benefits and three purchase periods above a trial action."></a> | <a href="images/trial-refunds-proposed.png"><img src="images/trial-refunds-proposed.png" width="300" alt="Proposed Melonote paywall adds a trial timeline, reminder, charging date, and plan cards using explicitly fictional test prices."></a> | <a href="images/trial-refunds-small-screen.png"><img src="images/trial-refunds-small-screen.png" width="300" alt="The proposed Melonote layout on iPhone SE leaves the plan cards mostly behind the fixed purchase footer."></a> |

**Source:** [u/yccheok's developer feedback request](https://www.reddit.com/r/UXDesign/comments/1kvy27i/feedback_request_upcoming_paywall_design/),
2025-05-26. Original captures: 1320×2868, 1320×2868, and 750×1334.
Capture dates/build/storefront unknown. **The author explicitly says prices
are not real**; the differing timeline and card amounts are test data.

**Design question:** can explaining trial timing reduce unexpected-charge
confusion without making plan selection harder on a short screen?

**Proposed change:** add trial-start, reminder, and charge milestones with a
specific billing date. The author seeks fewer refunds. Displayed prices are
explicitly fictional; mismatched timeline/card amounts are test data.

**Potential user benefit:** a working reminder and clear charge schedule
could help people decide whether to continue and plan cancellation. That benefit
depends on the promised behavior, not simply adding timeline graphics.

**Reported result:** no refund measurement, review decision, or accepted
after-image is supplied.

**Tradeoff and limits:** the timeline fills most of the SE viewport and the fixed
footer obscures plan cards. Annual pricing survives in the bottom summary, but
actual scrolling/selection needs testing. The Apple-branded protection wording
is the app's own claim, not evidence of Apple endorsement.

### ShotZen: a badge change moves the purchase area

**Evidence type:** developer's visual-regression comparison; no rejection is reported.

<a href="images/shotzen-regression.png"><img src="images/shotzen-regression.png" width="1050" alt="ShotZen developer's visual-regression report compares baseline, current, and difference overlay for an English light-mode paywall with reordered plans and new badges."></a>

**Source:** [changyou / MufengLabs on Substack](https://changyou.substack.com/p/a-small-badge-shifted-my-ios-paywall),
2026-09-08, describing September 5 work. Original report capture: 2860×1438;
English/light mode, US$ labels; build and storefront unknown.

**Design question:** can a small merchandising change disrupt purchase controls
or disclosures across screen states?

**Observed change:** lifetime moves to the top and badges change, while annual
remains selected and the action still names annual. The author reports badge
padding moving the action and footer by five pixels; the overlay exposes changes
beyond the badge itself.

**Potential user benefit:** regression checks can help keep restoration,
legal links, and purchase actions reachable and consistent after cosmetic edits.
Card order and selected product need separate checks to avoid accidental purchases.

**Reported result:** the developer reports a subsequent smaller visual change,
which is unpictured. The report covers 32 states; this image shows one.

**Tradeoff and limits:** 3.55% changed pixels measures image difference, not
usability or compliance. Neither acceptance nor improved conversion is documented;
the first-round current capture is not an established final design.

### Headway: what happens after declining the paywall

**Evidence type:** outside observer's dated teardown; no rejection is reported.

<a href="images/headway-discount-2024.png"><img src="images/headway-discount-2024.png" width="780" alt="Headway January 2024 observer capture shows a gift prompt after declining a trial, followed by a 50%-off annual purchase offer."></a>

<a href="images/headway-exit-offer.png"><img src="images/headway-exit-offer.png" width="1050" alt="Headway January 2025 observer capture shows an exit survey, a budget-oriented pitch, and a sheet offering annual and monthly plans with seven-day trials."></a>

**Source:** [Jacob Rushfinn's Retention.Blog newsletter on Substack](https://www.retention.blog/p/headway-evolution-2024-2025),
2025-02-03. Author assigns captures to January 2024 and January 2025;
exact dates/versions/storefronts unknown. Source collages: 787×703 and 1594×1024.
Rushfinn is an outside observer, not Headway's developer.

**Design question:** what terms and exit choices appear after a customer
declines the first offer?

**Observed change:** the 2024 flow presents a gift and discounted annual purchase
without a stated trial. The 2025 flow asks whether price, monthly preference, or
trial uncertainty caused hesitation; the pictured price response eventually
shows annual and monthly trial-bearing offers.

**Potential user benefit:** asking about the concern could reveal a suitable
billing period or clarify the trial, rather than repeating the same offer.
Customers still need to understand each new offer's terms and retain a clear exit.

**Reported result:** the author personally explores one survey response branch.
No internal experiment results or App Review decision are supplied.

**Tradeoff and limits:** the author reports a later warning implying a discount
will disappear, yet finds it available again. Additional prompts can obstruct
dismissal, and unsupported scarcity undermines informed choice. The observation
does not establish which iteration performed better.

### Substack: plan choice versus payment route

**Evidence type:** publisher's product announcement with illustrated UI;
no rejection is reported.

<a href="images/substack-payment-options.png"><img src="images/substack-payment-options.png" width="1050" alt="Substack product announcement shows a publication entry screen and annual, monthly, and free choices, with a $60 annual primary action and an $80 annual in-app payment alternative."></a>

**Source:** [Substack's own product newsletter](https://on.substack.com/p/now-anyone-can-pay-for-a-substack),
2025-08-18. Source artwork: 2982×1816, illustrating the app's flow for
The Dry Down Diaries. Exact capture date/build unknown; the announcement
describes the US external-payment context.

**Design question:** can a customer distinguish the access plan from the
payment method and its price?

**Observed design:** annual/monthly/free chooses access. The primary annual
action repeats $60/year; the lower in-app payment alternative shows $80/year.
This is payment routing, not a trial toggle.

**Potential user benefit:** visible method-specific prices can help customers
compare checkout routes before committing. Repeating the annual total in the
action links the selection to its charge.

**Reported result:** Substack announces an available flow, but no decision for
these exact screens is supplied. We did not initiate either checkout.

**Tradeoff and limits:** the alternative route is less prominent, so users may
miss it. Benefits/prices belong to the illustrated publication, not all Substack
subscriptions. The announcement describes 2025 US routing; check [current
storefront rules](README.md#storefront-and-policy-dates-matter) before adopting it.

### WatchFrame: a native plan picker with ambiguous free copy

**Evidence type:** developer's work in progress, shown in a video poster;
no rejection is reported.

<a href="images/watchframe-paywall.jpg"><img src="images/watchframe-paywall.jpg" width="380" alt="WatchFrame developer video poster shows paid features, monthly/yearly/lifetime options, a selected yearly plan with four-months-free savings text and a seven-day trial, and a yearly purchase action."></a>

**Source:** [u/pesekeme's developer post](https://www.reddit.com/r/iOSDevelopment/comments/1vixwb9/spent_a_week_making_my_paywall_feel_less_like_a/),
2026-08-08 UTC. App identity is visible in the media. Original video-poster
JPEG: 640×1387; capture date/build/storefront unknown; prices explicitly use US$.

**Design question:** can a familiar picker communicate paid capabilities,
purchase type, and the selected commitment clearly?

**Observed design:** specific list-limit benefits accompany monthly/yearly/lifetime
cards. Yearly is selected and named in the action; lifetime is labeled one-time.
The developer describes additional swipeable benefit/comparison pages, but this
poster shows only the first.

**Potential user benefit:** concrete limits explain what the upgrade changes,
while aligned selection/action labels help people recognize the purchase they
are about to make. Familiar components may reduce navigation effort.

**Reported result:** the author acknowledges possible confusion in the yearly
card's four-months-free wording beside a seven-day trial and plans to rephrase it.
No revision, conversion result, or review decision is shown.

**Tradeoff and limits:** price savings relative to monthly billing are different
from a period without charging. Extra benefit pages add navigation; the poster
cannot verify every interaction or the claimed purchase-success animation.

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
dimensions, and ownership attribution. Unknown outcomes are intentionally visible.
