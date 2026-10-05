# Paid meeting-notes baseline

| Field | Value |
| --- | --- |
| Research date | **2026-10-06**, Asia/Taipei |
| Question | What features, prices, and processing boundaries do the reviewed meeting assistants document? |
| Products | Notion AI meeting notes, Amie, Spellar AI |
| Evidence | Official documentation, pricing controls, release notes, policies, and public product examples |
| Status | **Background research**; the feature catalogue is accepted; no paid-product trial or local benchmark |
| Next step | [Feature catalogue](feature-catalogue.md), then [pipeline investigation](investigation-plan.md#three-phase-roadmap) |

The subscriptions bundle transcription and summaries with the surrounding workflow: finding past meetings, connecting calendar context, editing notes, sharing results, and delivering follow-ups. The separate [feature catalogue](feature-catalogue.md) defines the behaviors to investigate. The remaining work uses those definitions as its reference; paid-product matching and subscription selection are outside the active scope.

## Prices and what the subscription buys

**USD per user/seat, before tax**, observed on public website pricing controls in both billing modes. “Annual equivalent” is the annual charge divided by 12; it is not a month-to-month offer. The twelve-month monthly total assumes the same listed price for twelve renewals. Regional, App Store, legacy, and negotiated prices can differ.

| Product / plan | Monthly billing | Twelve monthly payments | Annual equivalent | Annual billed total | Scope at this tier |
| --- | ---: | ---: | ---: | ---: | --- |
| [Notion Business](https://www.notion.com/pricing) | $24 | $288 | $20/month | $240 | Meeting notes plus the Business workspace and its AI features. Enterprise is quoted separately. |
| [Amie Pro](https://amie.so/pricing) | $25 | $300 | $20/month | $240 | Meeting notes, chat, scheduling, and audio import. |
| [Amie Business](https://amie.so/pricing) | $50 | $600 | $40/month | $480 | Adds custom templates, shared-note branding, and advanced CRM/ATS integrations. |
| [Spellar Pro](https://www.spellar.ai/pricing) | $20 | $240 | $15/month | $180 | Recordings, transcripts, summaries, chat, model choice, templates, and integrations. Teams has custom pricing. |

### Incremental cost with an existing subscription

These are **calculated scenarios**, not assumptions about the reader's accounts. Compare matching billing cycles; actual upgrades can involve prorating and all paid workspace members.

| Existing subscription | Added cost for the relevant baseline |
| --- | --- |
| Notion Business or Enterprise | $0 extra subscription cost for included meeting notes. Other AI usage can incur credits. |
| Notion Plus → Business | Plus is $12 monthly or $10/month annually: the difference is **$12/month** ($144 over twelve monthly renewals) or **$120/year**. |
| Current Amie Pro | $0 extra for the Pro baseline. Business features add **$25/month** ($300 over twelve renewals) or **$240/year**. |
| Amie Personal or legacy plan | Current upgrade price and credits require account-specific verification; do not assume today's Pro entitlement. |
| Spellar Pro | $0 extra for its included features. An existing Setapp subscription has a separate AI-credit route whose incremental cost is not established here. |

The Notion calculations use its [current price controls](https://www.notion.com/pricing); Amie's use [Pro and Business pricing](https://amie.so/pricing). Spellar's [AI policy](https://www.spellar.ai/ai-usage-policy) distinguishes Setapp processing from its direct subscription.

### Limits, trials, and possible extra charges

- **Notion:** Meeting Notes has a **10-hour daily cap**, separate from the six-hour/monthly allowance for Agent chat. Premium models and additional Agent usage can spend credits. Custom Agents also require credits, so automated follow-ups are a separate cost consideration. [Usage allowance](https://www.notion.com/help/manage-your-usage-allowance-for-notion-ai)
- **Amie:** Current pricing advertises unlimited meeting notes and AI chat and a **7-day trial**. Its billing documentation describes 25 one-time free note credits; feature documentation still refers to “Legacy Pro” and “Pro+.” Use the current price page for new subscriptions and verify legacy entitlements in the account. No numerical duration, import-size, or fair-use ceiling was established. [Pricing](https://amie.so/pricing), [billing](https://amie.so/documentation/account/billing), [notes documentation](https://amie.so/documentation/features/ai-notes)
- **Spellar:** Pricing advertises unlimited recordings, transcription, summaries, and chat, included premium models, and a **14-day money-back guarantee**. The download page also describes a 7-day Pro trial; availability depends on the purchase route. Numeric usage ceilings were not established. Bringing an API key can add charges from that provider; “included models” does not establish that provider-funded calls are free. [Pricing](https://www.spellar.ai/pricing), [download](https://www.spellar.ai/download), [subscription terms](https://www.spellar.ai/terms-of-subscription)

## Language, platform, and processing boundaries

| Product | English / Chinese / mixed language | Target-Mac requirements | Local capture, processing, and storage |
| --- | --- | --- | --- |
| Notion | English and Chinese listed; speaker labels **English-only**. Chinese-English switching quality unspecified. | Desktop app ≥4.7.0; macOS ≥13. Browser/mobile capture microphone only. | Desktop mic + system audio; cloud transcription; offline meeting notes unsupported. [Meeting-notes help](https://www.notion.com/help/ai-meeting-notes) |
| Amie | English and Chinese in the named language set; multilingual meetings documented, quality untested. | Installation guide: macOS ≥10.15, Intel/Apple Silicon; desktop required for bot-free system-audio recording. | Audio captured locally, uploaded after the meeting; cloud ASR and summaries; notes stored server-side. [Languages](https://amie.so/changelog/embed), [installation](https://amie.so/documentation/getting-started/installation), [processing](https://amie.so/documentation/features/ai-notes) |
| Spellar | Advertises **50+ transcription languages**. Exact Chinese coverage by engine and Chinese-English switching remain unresolved. App Store UI languages are not an ASR language list. | Current download page: macOS ≥15, Intel/Apple Silicon; native iPhone/iPad and browser recorder also advertised. | On-device transcription available; server transcription opt-in. AI summaries/chat send input to external providers. [Pricing](https://www.spellar.ai/pricing), [download](https://www.spellar.ai/download), [AI policy](https://www.spellar.ai/ai-usage-policy), [App Store](https://apps.apple.com/us/app/spellar-ai-meeting-note-taker/id6473629578) |

**Interpretation:** Local audio capture, local transcription, and fully local summarization are separate capabilities. Spellar's bring-your-own-key option still uses a provider API. Its current policy explicitly describes third-party processing; this is stronger evidence for that boundary than a general privacy slogan. None of the reviewed evidence establishes a completely offline paid workflow with all catalogue features. [Spellar AI policy](https://www.spellar.ai/ai-usage-policy)

For saved data, Notion offers optional local retention of the recorder's ten most recent audio files; this does not make transcription local. Amie stores notes in encrypted cloud storage. Spellar's policy describes configurable audio retention and keeping transcripts, summaries, and speaker names until the recording is deleted; it also identifies cloud storage. Treat device-only audio retention separately from cloud text storage and inference. [Notion help](https://www.notion.com/help/ai-meeting-notes), [Amie pages](https://amie.so/documentation/features/pages), [Spellar privacy](https://www.spellar.ai/privacy)

## Feature catalogue

The accepted feature scope now lives in the standalone [Feature catalogue](feature-catalogue.md). Subsequent work follows its definitions and examines pipeline dependencies, failures, and resource tradeoffs. This paid-product research is background material.

## Public examples and their limits

- **Notion:** Documented examples link summary citations to transcript lines and offer selectable summary instructions. These demonstrate intended interaction, not output quality. [Meeting-notes help](https://www.notion.com/help/ai-meeting-notes)
- **Amie:** The May 2025 changelog demonstrates labelling a speaker and asking what that person said; later entries add action grouping and shareable timestamps. These examples connect identity, retrieval, and follow-up behavior, but contain no shared audio/reference-transcript test. [Changelog](https://amie.so/changelog/embed)
- **Spellar:** The homepage's sample roadmap meeting exposes Summary, Transcript, and Actions tabs. Observed outputs include timestamped named turns, separate decisions, and owner-labelled tasks; its sample chat shows a meeting/time citation. These are curated public examples, not evidence of generation accuracy, reliable deadlines, or actual audio alignment. [Interactive example](https://www.spellar.ai/)

## Limits of the background comparison

These unresolved details limit what the paid comparison establishes. They are retained for context and do not gate the pipeline investigation or local measurements.

| Unresolved detail | Affected IDs | Limit on the background evidence |
| --- | --- | --- |
| Chinese-English speech and speaker naming | MN-04, MN-06, MN-07 | Notion documents language/setup limits; Amie claims mixed support; Spellar's engine-specific Chinese support is unestablished. Shared-fixture quality was not tested. |
| Transcript navigation/export detail | MN-05, MN-12, MN-16 | Audio retention, timestamp granularity, edit propagation, and preservation of labels/citations in exports are not established across the products. |
| Exact action ownership and deadlines | MN-09, MN-10, MN-21 | The examples do not establish reliable separation of proposals, decisions, owners, and stated deadlines. |
| Live and long meetings | MN-01, MN-04, MN-08 | Amie's August 2026 changelog calls live transcription experimental. Release availability, backlog, reliability, and per-session limits remain untested. |
| Pricing and delivery route | MN-11, MN-19, MN-21 | Legacy entitlements, advanced integration gates, optional credits, API charges, and destination-service costs vary by account and route. |
| Fully local behavior and storage | MN-20 | Spellar advertises local ASR while cloud AI/text storage is documented. Its older mobile blog and current engine choices describe different processing configurations; build/settings and fallback behavior were not tested. |
| Documentation inconsistencies | MN-02, MN-13, MN-17 | Notion's upload instructions exclude video while its storage section mentions it. Amie plan names and Spellar trial/refund routes vary across pages. |

### Scope decision

The Feature catalogue is sufficient and accepted as the reference for the remaining work. Phase 2 examines how pipeline choices affect those features; Phase 3 measures their quality and resource demands on the target Mac. No further paid-product comparison or parity assessment is required. See the [current roadmap](investigation-plan.md#three-phase-roadmap).

## Sources

All sources below are primary vendor pages or the developer's App Store listing, inspected on **2026-10-06**. The [product coverage comparison](product-coverage.md) uses the source labels below.

- **N1** — [Notion meeting-notes help](https://www.notion.com/help/ai-meeting-notes) — operational workflow, language, platform, audio handling, and restrictions.
- **N2** — [Notion meeting-notes product page](https://www.notion.com/product/ai-meeting-notes) — advertised notes and follow-up behavior.
- **N3** — [Notion AI FAQ](https://www.notion.com/help/notion-ai-faqs) — Agent, search, and general AI features.
- **N4** — [Notion export documentation](https://www.notion.com/help/export-your-content) — general page export formats.
- **N5** — [Notion AI usage allowance](https://www.notion.com/help/manage-your-usage-allowance-for-notion-ai) — daily meeting cap and other AI allowances/credits.
- [Notion pricing](https://www.notion.com/pricing) — monthly and annual price controls.
- **A1** — [Amie pricing](https://amie.so/pricing) — current Pro/Business prices and feature gates.
- **A2** — [Amie AI Meeting Notes](https://amie.so/documentation/features/ai-notes) — capture, cloud processing, summaries, actions, and language modes.
- **A3** — [Amie changelog](https://amie.so/changelog/embed) — language list, timestamps, speaker naming, PDF export, vocabulary, and live-feature experiments.
- **A4** — [Amie product page](https://amie.so/) — recording controls and private-note context.
- **A5** — [Amie pages documentation](https://amie.so/documentation/features/pages) — history, search, edits, storage, and sharing.
- **A6** — [Amie installation](https://amie.so/documentation/getting-started/installation) — desktop platforms and requirements.
- [Amie billing](https://amie.so/documentation/account/billing) — free credits and subscription/legacy context.
- **S1** — [Spellar product page and public demo](https://www.spellar.ai/) — sample outputs and advertised chat, templates, recaps, and integrations.
- **S2** — [Spellar download](https://www.spellar.ai/download) — Mac requirements, other capture surfaces, and trial messaging.
- **S3** — [Spellar App Store listing and release history](https://apps.apple.com/us/app/spellar-ai-meeting-note-taker/id6473629578) — transcription engine choices and diarization changes; UI languages do not establish ASR languages.
- **S4** — [Spellar privacy policy](https://www.spellar.ai/privacy) — calendar-assisted naming, storage, retention, and provider processing.
- **S5** — [Spellar 1.9.0 release](https://www.spellar.ai/updates/v-1.9.0) — editable notes and follow-up chat commands.
- **S6** — [Spellar mobile launch explanation](https://www.spellar.ai/page/spellar-ios-official-launch) — historical cloud-processing description and synced history; current configurations require newer evidence.
- **S7** — [Spellar 1.5.0 release](https://www.spellar.ai/updates/v-1.5.0) — keyword search and custom webhooks.
- **S8** — [Spellar multilingual/export release](https://www.spellar.ai/updates/v1-3-14) — original-language output and Markdown copying.
- **S9** — [Spellar Google Drive export release](https://www.spellar.ai/updates/v-1.4.7) — summary/audio export and summary length.
- **S10** — [Spellar pricing](https://www.spellar.ai/pricing) — prices, included features, on-device transcription claim, and Teams tier.
- **S11** — [Spellar AI usage policy](https://www.spellar.ai/ai-usage-policy) — provider API processing; revised September 28, 2026.
- [Spellar subscription terms](https://www.spellar.ai/terms-of-subscription) — subscription and trial routes.

## Method and limitations

Read official pages and release notes, inspected monthly/yearly browser controls, and switched the public Spellar demo between its summary, transcript, and action views. Arithmetic is shown as calculated cost scenarios. Documentation and curated examples establish intended interfaces and advertised behavior; they do not establish product quality or latency.

No subscription was bought, no account settings were changed, and no meeting audio was submitted. No apps/models were installed or benchmarked on the target Mac. Unpublished limits, plan discrepancies, code-switching accuracy, permission behavior, export fidelity, deadline extraction, and paid-product output quality remain unverified. These limits belong to this background comparison; the [pipeline investigation and measurement plan](investigation-plan.md#three-phase-roadmap) uses the accepted catalogue as its reference.
