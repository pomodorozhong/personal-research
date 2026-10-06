# Real app paywalls: annotated evidence

[Guide](README.md) · [Developer cases](cases.md) · [Checklist](checklist.md)

Six preserved source images, checked 2026-10-06. Annotations below refer to the
original visible elements; the images have not been redrawn, generated, or
edited by this research. Click an image to inspect it separately. Sources may
already contain highlighting, collages, or redaction. Exact versions and
storefronts are unknown unless stated. Displayed prices are historical captures,
not current price recommendations; a dollar sign alone does not identify currency.

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

## Compare patterns without treating them as approved templates

| Observed issue | Better-supported response | Evidence boundary |
| --- | --- | --- |
| Lenglio's generic benefit claim | Explain paid capabilities and correct related metadata | App approval reported after multiple changes, not a controlled visual experiment |
| Toggle switching annual/weekly | Present distinct packages and their trial/renewal terms | Rejection/removal reported; final outcome not supplied |
| RadTrack trial promise absent in purchase sheet | Reconcile actual offer and copy before adjusting style | No proof of which configuration caused the mismatch |
| Flo toggle replaced by explicit options | Useful interaction reference; separately audit price prominence | No documented acceptance of these exact screens |

See [image provenance](images/README.md) for asset URLs, acquisition details,
dimensions, and ownership attribution. Unknown outcomes are intentionally visible.
