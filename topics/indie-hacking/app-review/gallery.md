# Real app paywalls: annotated evidence

[Guide](README.md) · [Developer cases](cases.md) · [Checklist](checklist.md)

Twenty preserved source images, gallery expanded 2026-10-07, covering fourteen paywall
cases and one supporting reviewer message. Ten cases were added from developer
blogs, newsletters (including Substack), and Reddit. Annotations below refer to the
original visible elements; the images have not been redrawn, generated, or
edited by this research. Click an image to inspect it separately. Sources may
already contain highlighting, collages, or redaction. Exact versions and
storefronts are unknown unless stated. Displayed prices are historical captures,
not current price recommendations; a dollar sign alone does not identify currency.

## Browse by design question

| Case | What to inspect | Evidence type |
| --- | --- | --- |
| [Lenglio](#lenglio-before-and-after-benefit-disclosure) | Concrete paid benefits | Reported rejection → acceptance |
| [Homework app](#unnamed-homework-app-a-trial-switch-also-changes-the-package) | A trial switch changes billing period | Reported rejection; final outcome unknown |
| [RadTrack](#radtrack-paywall-versus-the-actual-transaction) | App promise versus system purchase | Reported rejection; product outcome unresolved |
| [Flo](#flo-old-and-new-trial-selection) | Explicit trial-bearing packages | Observed redesign; review outcome unknown |
| [Metacast](#metacast-legal-links-below-the-fold) | Legal links on small screens | Reported rejection → launch after several fixes |
| [Snapkin](#snapkin-platform-specific-cancellation-copy) | Cross-platform wording in an iOS paywall | Reported rejection → launch after several fixes |
| [Foodnoms](#foodnoms-feature-matrix-to-trial-timeline) | Reminder promise and trial explanation | Developer-reported experiment |
| [Dark Noise](#dark-noise-revealing-all-plans-up-front) | Hidden versus visible purchase options | Developer-reported experiment |
| [ShotZen](#shotzen-a-badge-change-moves-the-purchase-area) | Visual regression around badges and footer | Developer's comparison; review outcome unknown |
| [Substack](#substack-plan-choice-versus-payment-route) | Plan selection versus payment method | Product announcement; review outcome unknown |
| [notJust.dev app](#notjustdev-trial-copy-and-metadata-are-different-surfaces) | Trial duration and metadata legal links | Reported metadata rejection → acceptance |
| [Melonote](#melonote-a-trial-timeline-on-a-small-screen) | Trial timeline crowds out plan cards | Proposed design; no measured outcome |
| [Headway](#headway-what-happens-after-declining-the-paywall) | Exit survey, subsequent offer, urgency | Independent observer's dated teardown |
| [WatchFrame](#watchframe-a-native-plan-picker-with-ambiguous-free-copy) | Savings language versus free-trial duration | Developer's work in progress |

The [reviewer message](#reviewer-message-the-requested-change-can-be-specific)
provides additional evidence about price prominence and trial toggles.

## Lenglio: before and after benefit disclosure

| Before: associated with rejection | After: developer reports acceptance |
| --- | --- |
| <a href="images/lenglio-before.png"><img src="images/lenglio-before.png" width="306" alt="Original Lenglio paywall lists weekly, monthly, and lifetime prices beneath a generic language-learning headline."></a> | <a href="images/lenglio-after.png"><img src="images/lenglio-after.png" width="231" alt="Revised Lenglio Premium paywall lists four premium capabilities and distinguishes recurring subscriptions from a one-time purchase."></a> |

**App/source:** Lenglio; [developer post](https://www.reddit.com/r/iOSProgramming/comments/1og8u7v/my_first_experience_with_apple_app_store_review/),
published 2025-10-26. Rejection described on 2025-07-17; app approval reported on
2025-07-22. Capture dates not supplied. Before/after image sizes are 306×500 and
231×500; these are the supplied linked previews, so small text has limited resolution.

1. **Headline and benefits:** the first image promises language learning without
   describing the paid entitlement. The final image adds book import, unrestricted
   library, text analysis, and removal of paywall interruptions. The reported
   3.1.2 objection asked what users receive for the price.
2. **Purchase type:** “Lifetime” becomes “One-Time Purchase” with an explicit
   “Once” price. Weekly/monthly subscriptions remain separately labeled. This
   helps distinguish recurring and nonrecurring access.
3. **Exit/restoration/legal links:** both have a close control and footer links;
   their mere presence did not resolve the initial benefit objection. We did not
   test those links or restoration.
4. **Action:** both use “Continue.” This reported acceptance is counterevidence
   to a categorical claim that Apple always requires the literal word “Subscribe.”
   Assess the complete terms and transaction, not just a button title.

**Outcome strength:** developer-reported rejection and acceptance with before/final
images, not an independently authenticated Apple decision. App description and
promotional-IAP metadata also changed. Intermediate revisions are unavailable;
product approvals followed separately. [Full case](cases.md#case-1-lenglio-made-the-paid-entitlement-explicit).

## Unnamed homework app: a trial switch also changes the package

<a href="images/study-toggle.webp"><img src="images/study-toggle.webp" width="420" alt="Homework AI app paywall with a Free Trial Enabled toggle, an annual plan, and a selected three-day trial followed by weekly billing."></a>

**App/source:** unnamed homework AI app shared by
[u/Usual-Ant305](https://www.reddit.com/r/AppStoreOptimization/comments/1qeavxq/anyone_else_having_apple_reject_their_app_because/),
2026-01-16. App title/version/storefront unknown. The screenshot status bar says
Wednesday January 14; the capture year is not printed. Preserved image: 1080×1554.

1. **Switch:** “Free Trial Enabled” is on. The author says switching it off
   selects annual, while turning it on selects weekly. Users are choosing more
   than whether to try before paying.
2. **Mixed periods:** the annual card shows $39.99/year plus $0.77/week; the
   selected trial leads to $5.99/week. Annual, weekly, and trial durations all
   need to be understood on one screen.
3. **Prominence:** the trial label and action dominate; subsequent weekly billing
   is much smaller. This is our visual assessment, not a second documented
   rejection reason for this app.
4. **Footer:** restore and legal links are visible. Those controls do not explain
   away the reviewer objection to the switch.

**Outcome strength:** developer-pasted 3.1.2 rejection text and a reported removal/
resubmission. Final acceptance unknown. [Case and conflicting commenter reports](cases.md#case-2-an-unnamed-homework-apps-trial-switch-changed-the-plan).

## RadTrack: paywall versus the actual transaction

<a href="images/trial-mismatch.webp"><img src="images/trial-mismatch.webp" width="430" alt="RadTrack composite: the custom paywall promises a seven-day free trial, while the sandbox purchase sheet shows $5.99 per month without a trial."></a>

**App/source:** **RadTrack: Dose Tracker**, identified in the system sheet;
[u/manison88's post](https://www.reddit.com/r/appledevelopers/comments/1ti60zi/frustrating_subscription_rejection_reasonadvice/),
2026-05-20. Capture date/version/storefront unknown. Source collage: 1080×2348.
The source already redacts the account identifier. This is a comparison between
screens in one reported flow, not a before/after redesign.

1. **Custom offer:** monthly and annual cards each promise a seven-day trial.
   The selected monthly action also advertises that trial.
2. **System confirmation:** the lower image identifies RadTrack Pro (Monthly)
   and $5.99/month, with no visible introductory trial. “For testing purposes”
   means this is sandbox; it does not itself establish a free-trial offer.
3. **Renewal footer:** automatic-renewal/cancellation wording and legal links are
   present. Nonetheless, the actual offered transaction contradicts the custom
   screen's trial promise. Check product, offer availability, and eligibility.

**Outcome strength:** developer-pasted rejection and a later report of app
approval; subscriptions still rejected at the update. The pictured state is
associated with rejection. There is no corrected capture or verified final
subscription outcome. [Case](cases.md#case-5-radtracks-custom-screen-promised-a-trial-the-system-sheet-omitted).

## Flo: old and new trial selection

<a href="images/flo-options.webp"><img src="images/flo-options.webp" width="1000" alt="Flo comparison labeled OLD and NEW: a trial toggle is replaced by a trial-selection entry and a sheet separating a 14-day trial from no-trial packages."></a>

**App/source:** Flo, identified by
[Axel Le Pennec's original X post](https://x.com/alpennec/status/2047218943333482976),
2026-04-23. Capture dates/version/storefront unknown. Original comparison
1200×675, already labeled OLD/NEW by the source. Old images use £; new use $.

1. **Old control:** the switch reads “Not sure yet? Enable free trial.” The
   adjacent screen shows its enabled state and an updated action.
2. **New entry:** “Not sure yet? Start a free trial” opens/selects an offer in a
   sheet with all plans rather than representing the offer with a switch.
3. **Explicit grouping:** “14-Day Free Trial” and “No free trial” separate the
   packages, and the trial action reflects the selected duration.
4. **Remaining price question:** the yearly plan still emphasizes a monthly
   equivalent beside a smaller annual amount. This deserves its own review
   against Apple's [billing hierarchy guidance](https://developer.apple.com/app-store/subscriptions/).
   Removing a switch does not certify the rest of the layout.

**Outcome strength:** observed old/new design; **review outcome unknown**. The
author says it appears compliant, not that they possess a Flo approval record.
Currencies and prices differ across captures, so this is not a controlled test.
It is also not the after-image of Axel's rejected app. [Case](cases.md#case-4-flos-replacement-is-a-design-observation-not-an-approval-record).

## Reviewer message: the requested change can be specific

<a href="images/axel-rejection.webp"><img src="images/axel-rejection.webp" width="650" alt="Developer-shared App Review message dated January 14, 2026 highlights an instruction to remove a trial toggle and separately asks for dominant billed pricing."></a>

**App/source:** app unnamed;
[Axel Le Pennec on X](https://x.com/alpennec/status/2012188049728520514),
2026-01-16. Message lists review on **2026-01-14**, **iPad Air (M3)**; version is
blank. Source image: 1200×1200. This is reviewer evidence accompanying the
paywall examples, not another paywall or a full review exchange.

1. **Specific issues:** introductory pricing is more conspicuous than the billed
   amount, and the toggle makes the commitment harder to understand.
2. **Specific next steps:** the image asks for the full billed amount to dominate
   and for the toggle to be removed. It names font, size, color, and location as
   factors; adding a fine-print sentence is an incomplete response.
3. **Limits:** the developer supplies the highlight/collage. We have not verified
   the submission ID with Apple. The app identity and eventual outcome are absent.

[Full case](cases.md#case-3-axel-le-pennec-shared-the-actual-toggle-objection).

## Metacast: legal links below the fold

<a href="images/metacast-layout.jpg"><img src="images/metacast-layout.jpg" width="1050" alt="Metacast source comparison: a small iPad compatibility window hides the legal footer, a large phone shows it, and the revised layout exposes the beginning of the disclaimer."></a>

**Source:** [Ilya Bezdelev, Metacast developer blog](https://metacast.app/blog/company/case-study-google-play-apple-app-store-launch),
2024-10-07. Source collage: 3943×2552; capture dates/version/storefront unknown.
The middle and right screens carry debug ribbons.

1. **Left versus middle:** legal links exist on the large phone but fall below
   the initial viewport in iPad compatibility mode. The author associates this
   with a 3.1.2 rejection; checking only a large phone missed it.
2. **Right:** the changed layout exposes the start of the disclaimer, signaling
   more content below. Our recommendation: also verify scrolling and working
   links on the smallest supported layout; a visible fragment is insufficient.
3. **Other changes:** the right screen also changes benefits and launch offers.
   Its annual price and 100%-discount wording appear inconsistent. Treat this
   as evidence about layout, not production-ready offer copy.

**Outcome strength:** the developer reports launch on September 20 after legal,
product-submission, and introductory-price fixes. The image does not isolate
which change caused acceptance or show an authenticated decision.

## Snapkin: platform-specific cancellation copy

<a href="images/snapkin-before-after.jpg"><img src="images/snapkin-before-after.jpg" width="950" alt="Snapkin before/after comparison highlights removing Google Play from iOS cancellation and payment explanations while retaining monthly and annual plan cards."></a>

**Source:** [Mattias Geniar's developer blog](https://ma.ttias.be/app-store-rejection-reasons/),
2026-09-30. Source-annotated collage: 1104×1024. Capture dates, pictured build,
and storefront unknown; displayed prices use euros.

1. **Highlighted copy:** the before screen mentions Google Play in two places.
   The developer reports a 2.3.10 objection. The after screen removes that
   reference, using neutral store wording in the payment explanation.
2. **Plans:** monthly €9.99 with a three-day trial and yearly €49.99 remain.
   The main visible intervention concerns platform copy, not price hierarchy.
3. **Footer:** trial-to-charge terms, restoration, and legal links are visible
   in both. Their presence did not address the separate platform-reference issue.

**Outcome strength:** the developer reports September 24 launch on the sixth
submission, after several other corrections. This is a source-labeled before/
after pair, not proof that changing these two sentences alone caused approval.

## Foodnoms: feature matrix to trial timeline

| Earlier design | Onboarding experiment |
| --- | --- |
| <a href="images/foodnoms-before.png"><img src="images/foodnoms-before.png" width="380" alt="Foodnoms paywall compares Free and Foodnoms Plus features with a seven-day trial followed by $39.99 per year."></a> | <a href="images/foodnoms-after.png"><img src="images/foodnoms-after.png" width="380" alt="Foodnoms trial timeline explains immediate access, a permission-dependent reminder on day five, and charging on day seven."></a> |

**Source:** [Foodnoms developer's experiment report](https://ryanwesley.com/paywall-optimization-success-story/),
2024-07-25. Both source captures: 1179×2556. Filenames identify simulator captures
on July 24 and July 10 respectively; pictured versions/storefronts unknown.

1. **Value versus timing:** the earlier screen compares free and paid features;
   the experiment emphasizes what happens during the seven-day trial. Both
   display the subsequent $39.99 annual charge.
2. **Reminder:** day five explicitly depends on notification permission.
   A reminder promise needs delivery behavior that matches the customer state.
3. **Scope:** the developer limited this experiment to trial-eligible onboarding.
   A trial timeline is inappropriate for someone who cannot receive that offer.

**Outcome strength:** the author reports 59.6% more conversions to paying users
in a two-week comparison, alongside a 15.9% decline in trial-to-paid conversion.
These are the developer's business results, not an App Review decision or a
general prediction for another app.

## Dark Noise: revealing all plans up front

<a href="images/dark-noise-options.png"><img src="images/dark-noise-options.png" width="950" alt="Dark Noise Control and Experiment: the control presents an annual price and All plans link, while the experiment displays monthly, annual, and lifetime cards together."></a>

**Source:** [Charlie Chapman's firsthand experiment report](https://www.revenuecat.com/blog/engineering/how-i-successfully-migrated-my-indie-app-to-revenuecat-paywalls),
published 2024-01-03, updated 2025-11-21. Chapman develops Dark Noise and works
for RevenueCat, which publishes this article. Source collage: 1474×1524;
capture dates/version/storefront unknown.

1. **Selection:** the control initially shows the annual offer with an extra
   link for other plans. The experiment exposes monthly, annual, and lifetime
   together; annual remains selected.
2. **Different purchases:** recurring $2.99/month and $19.99/year sit beside
   $49.99 lifetime access. Make the one-time nature explicit in your own copy.
3. **Footer:** restoration and terms are visible; a privacy link is not visible
   in this capture. A screenshot cannot establish its availability elsewhere.

**Outcome strength:** the author reports increased initial conversion but worse
churn in the experiment. This comparison supports investigating plan visibility
and retention together; neither side is documented as rejected or approved by
Apple, and the author's commercial relationship matters when weighing claims.

## ShotZen: a badge change moves the purchase area

<a href="images/shotzen-regression.png"><img src="images/shotzen-regression.png" width="1050" alt="ShotZen developer's visual-regression report compares baseline, current, and difference overlay for an English light-mode paywall with reordered plans and new badges."></a>

**Source:** [changyou / MufengLabs on Substack](https://changyou.substack.com/p/a-small-badge-shifted-my-ios-paywall),
2026-09-08, describing September 5 work. Original report capture: 2860×1438;
English/light mode, US$ labels; build and storefront unknown.

1. **Order versus selection:** lifetime moves to the top, but annual stays
   selected and the action still names annual. Card order alone does not tell
   you which transaction the customer will initiate.
2. **Layout regression:** the source reports badge padding shifting the action
   and footer by five pixels. The overlay highlights more than the badge itself.
   Compare restoration, legal links, and purchase terms after cosmetic changes.
3. **Test limits:** 3.55% changed pixels is a screenshot difference, not a
   compliance score. The report spans 32 states; only one is shown here.

**Outcome strength:** the developer reports a subsequent smaller visual change;
that later revision is not pictured. There is no App Review or conversion
outcome. This is a reproducible-layout lesson, not an approved final paywall.

## Substack: plan choice versus payment route

<a href="images/substack-payment-options.png"><img src="images/substack-payment-options.png" width="1050" alt="Substack product announcement shows a publication entry screen and annual, monthly, and free choices, with a $60 annual primary action and an $80 annual in-app payment alternative."></a>

**Source:** [Substack's own product newsletter](https://on.substack.com/p/now-anyone-can-pay-for-a-substack),
2025-08-18. Source artwork: 2982×1816, illustrating the app's flow for
The Dry Down Diaries. Exact capture date/build unknown; the announcement
describes the US external-payment context.

1. **Two decisions:** annual/monthly/free selects access; the lower link selects
   in-app payment instead of the primary checkout route. This is not a trial toggle.
2. **Method-specific price:** the primary annual action repeats $60/year; the
   in-app alternative displays $80/year. The route and its actual charge must
   remain clear through confirmation.
3. **Historical scope:** the publication's benefits and prices are an example,
   not universal Substack pricing. Check [current storefront rules](README.md#storefront-and-policy-dates-matter)
   before adopting a 2025 external-payment design.

**Outcome strength:** the publisher announces an available product flow, with
illustrated UI. No rejection exchange or authenticated approval for these exact
screens is supplied; we did not initiate either checkout.

## notJust.dev: trial copy and metadata are different surfaces

<a href="images/notjust-paywall.jpg"><img src="images/notjust-paywall.jpg" width="380" alt="Developer-shared unnamed AI companion app paywall selects a weekly plan, offers an annual alternative, and shows a trial action plus restore and legal links."></a>

**Source:** [Vadim Savin's developer newsletter](https://news.notjust.dev/posts/my-first-from-app-dev).
The page displays a relative publication age; exact publication/capture dates
are unconfirmed. Retrieved 2026-10-06. Original JPEG: 1206×2622;
app name/version/storefront unknown.

1. **Offer-specific trial:** the author describes a three-day trial on weekly
   $4.99, with no trial on yearly $29.99. The pictured weekly selection promises
   a trial but does not visibly state its duration. The unpictured annual-selected
   state would need a matching action and terms.
2. **Legal surfaces:** restoration, terms, and privacy are visible here.
   The reported rejection concerned missing terms links in App Store metadata;
   an in-app footer does not populate that metadata.
3. **Benefit copy:** named paid capabilities explain the upgrade, but this image
   alone cannot establish their delivery or compliance with other content rules.

**Outcome strength:** the developer reports acceptance after correcting metadata.
There is no complete decision exchange or proof this exact captured build was
accepted. Do not infer that its omitted visible trial duration is endorsed.

## Melonote: a trial timeline on a small screen

| Current design supplied by author | Proposed timeline | Proposed design on iPhone SE |
| --- | --- | --- |
| <a href="images/trial-refunds-before.png"><img src="images/trial-refunds-before.png" width="300" alt="Melonote's current Premium Notes paywall lists benefits and three purchase periods above a trial action."></a> | <a href="images/trial-refunds-proposed.png"><img src="images/trial-refunds-proposed.png" width="300" alt="Proposed Melonote paywall adds a trial timeline, reminder, charging date, and plan cards using explicitly fictional test prices."></a> | <a href="images/trial-refunds-small-screen.png"><img src="images/trial-refunds-small-screen.png" width="300" alt="The proposed Melonote layout on iPhone SE leaves the plan cards mostly behind the fixed purchase footer."></a> |

**Source:** [u/yccheok's developer feedback request](https://www.reddit.com/r/UXDesign/comments/1kvy27i/feedback_request_upcoming_paywall_design/),
2025-05-26. Original captures: 1320×2868, 1320×2868, and 750×1334.
Capture dates/build/storefront unknown. **The author explicitly says prices
are not real**; the differing timeline and card amounts are test data.

1. **Intent:** the author seeks to reduce refunds by explaining trial timing.
   The proposed screen adds reminder and charge milestones, not measured results.
2. **Small screen:** the timeline occupies most of the SE viewport; the fixed
   footer obscures plan cards. The annual charge survives in the bottom summary,
   but comparing/selecting offers requires checking the actual scroll behavior.
3. **Trust language:** the Apple-branded protection claim is the app's copy.
   It is not evidence Apple approved the wording or endorsed the app.

**Outcome strength:** proposed design and device comparison; review status and
refund impact unknown. No accepted after-image is supplied.

## Headway: what happens after declining the paywall

<a href="images/headway-discount-2024.png"><img src="images/headway-discount-2024.png" width="780" alt="Headway January 2024 observer capture shows a gift prompt after declining a trial, followed by a 50%-off annual purchase offer."></a>

<a href="images/headway-exit-offer.png"><img src="images/headway-exit-offer.png" width="1050" alt="Headway January 2025 observer capture shows an exit survey, a budget-oriented pitch, and a sheet offering annual and monthly plans with seven-day trials."></a>

**Source:** [Jacob Rushfinn's Retention.Blog newsletter on Substack](https://www.retention.blog/p/headway-evolution-2024-2025),
2025-02-03. Author assigns captures to January 2024 and January 2025;
exact dates/versions/storefronts unknown. Source collages: 787×703 and 1594×1024.
Rushfinn is an outside observer, not Headway's developer.

1. **2024:** declining leads to a gift prompt and a discounted annual purchase.
   That purchase screen does not advertise a trial; earlier trial terms cannot
   be assumed to carry over.
2. **2025:** the survey separates price, monthly-plan preference, and trial
   uncertainty. The pictured price response eventually exposes both annual and
   monthly trial-bearing offers. Only this response branch was investigated.
3. **Exit and urgency:** the author reports a later closing warning implying
   the discount will disappear, while finding it available again. Investigate
   repeated prompts and truthful scarcity, not just the first close icon.

**Outcome strength:** dated firsthand observation of changing flows. No internal
experiment results or App Review decision are provided; the images cannot show
which iteration performed better.

## WatchFrame: a native plan picker with ambiguous free copy

<a href="images/watchframe-paywall.jpg"><img src="images/watchframe-paywall.jpg" width="380" alt="WatchFrame developer video poster shows paid features, monthly/yearly/lifetime options, a selected yearly plan with four-months-free savings text and a seven-day trial, and a yearly purchase action."></a>

**Source:** [u/pesekeme's developer post](https://www.reddit.com/r/iOSDevelopment/comments/1vixwb9/spent_a_week_making_my_paywall_feel_less_like_a/),
2026-08-08 UTC. App identity is visible in the media. Original video-poster
JPEG: 640×1387; capture date/build/storefront unknown; prices explicitly use US$.

1. **Entitlement:** specific list limits explain the Pro upgrade. The developer
   describes swipeable benefit pages and a free-versus-paid comparison; this
   preserved poster shows only the first page.
2. **Plans and action:** monthly, yearly, and lifetime are visible together.
   The selected yearly plan agrees with the purchase action; lifetime is labeled
   as a one-time purchase.
3. **Ambiguous savings:** the yearly card combines four-months-free wording with
   a seven-day trial. Savings relative to monthly billing and a period without
   charging are different concepts. The author acknowledges possible confusion
   in comments and says they will rephrase it.

**Outcome strength:** developer's work in progress. No revised wording, measured
conversion result, or review decision is shown. The video poster does not verify
the reported success animation or every interaction.

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
