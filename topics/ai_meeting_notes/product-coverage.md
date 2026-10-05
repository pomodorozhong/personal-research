# Product coverage

[Paid baseline](paid-baseline.md) · [Feature catalogue](feature-catalogue.md) · [Topic and roadmap](README.md)

Research date: **2026-10-06**, Asia/Taipei. Compare Notion AI meeting notes, Amie, and Spellar AI against the 22 stable feature IDs defined in the [Feature catalogue](feature-catalogue.md). Product output quality has not been tested. This comparison is retained as background; subsequent work uses the Feature catalogue directly and does not require paid-product parity or resolving vendor gaps.

**D** = behavior described in official operational documentation or release notes. **A** = advertised or displayed in a public demo. **U** = not established by the inspected evidence. These describe evidence strength, not quality ratings. A “U” is not proof that the feature is absent. Product-specific restrictions in the [language and processing table](paid-baseline.md#language-platform-and-processing-boundaries) still apply to the rows below.

## Capture and content

| ID | Notion | Amie | Spellar |
| --- | --- | --- | --- |
| MN-01 | D: mic/system; browser mic only. [N1] | D: desktop system capture. [A2] | A: native and Chrome capture. [S2] |
| MN-02 | D: AAC/M4A/MP3/WAV. [N1] | A: audio upload, Pro/Business. [A1] | A: Import in demo; limits U. [S1] |
| MN-03 | D: start/stop/resume; consent tools. [N1] | A: pause, automatic start/stop. [A4] | A: recorder; participant notice U. [S1] |
| MN-04 | D: live transcript. [N1] | D: post-meeting; live experimental. [A2], [A3] | D: selectable transcription engines; live delivery U. [S3] |
| MN-05 | D: transcript-line citations; replay/time U. [N1] | D: playback and shareable timestamps. [A3] | A: timed turns and player. [S1] |
| MN-06 | D: setup/language restrictions. [N1] | D: diarization. [A2] | D: multi-speaker diarization improvements. [S3] |
| MN-07 | D: calendar-assisted one-to-one naming; Meet extension. [N1] | D: rename; one-to-one name inference. [A3] | D: speaker naming using calendar context. [S4] |
| MN-08 | A: meeting summary. [N2] | D: topics/context/next steps. [A2] | A: structured summary. [S1] |
| MN-09 | A: meeting decisions as context. [N2] | D: decisions extracted. [A2] | A: dedicated decision block. [S1] |
| MN-10 | A: action items. [N2] | D: tasks, owners, estimated duration. [A2] | A: tasks with owners/priorities; deadline completeness U. [S1] |
| MN-11 | D: notes/custom instructions. [N1] | D: vocabulary; A: private notes; Business templates. [A3], [A4], [A1] | A: custom templates/model selection. [S1] |
| MN-12 | D: retry summary; transcript editing U. [N1] | D: editable text/actions; regeneration propagation U. [A5] | D: transcript/summary editing; A: reanalysis. [S5], [S1] |

## History, delivery, and control

| ID | Notion | Amie | Spellar |
| --- | --- | --- | --- |
| MN-13 | A: persistent project context. [N2] | D: event/contact history. [A5] | A: folders/tags; D: synced history. [S1], [S6] |
| MN-14 | D: searchable meeting list. [N1] | D: full-text page search. [A5] | D: transcript/summary keyword search. [S7] |
| MN-15 | D: workspace Agent/search; meeting scope U. [N3] | D: questions over shared recordings; source citations U. [A3] | A: cross-meeting cited chat. [S1] |
| MN-16 | D: general page Markdown/HTML/PDF export; block fidelity U. [N4] | D: transcript/summary PDF. [A3] | D: Markdown copying; summary/audio Drive export. [S8], [S9] |
| MN-17 | D: private default, page sharing. [N1] | D: revocable public note links. [A5] | A: share links; Teams shared notes. [S1], [S10] |
| MN-18 | D: Notion Calendar link. [N1] | D: Google/Apple; Outlook added. [A6], [A3] | D: calendar context for meetings/speakers. [S4] |
| MN-19 | A: automatic recap delivery; configuration U. [N2] | D: note sharing/CRM; tier gates. [A2], [A1] | A: native connectors; D: webhooks. [S1], [S7] |
| MN-20 | D: cloud; optional local audio. [N1] | D: local capture/cloud processing. [A2] | A: local ASR; D: cloud AI/text storage. [S10], [S11], [S4] |
| MN-21 | A: Agent follow-up; credits may apply. [N2], [N5] | D: action → todo; A: scheduling/drafts. [A2], [A1] | D: chat follow-up drafts; sending U. [S5] |
| MN-22 | D: general AI generation; dedicated digest U. [N3] | U: dedicated periodic meeting digest. | A: weekly/monthly recaps. [S1] |

Guaranteed deadline extraction, export fidelity, and permission-aware retrieval are unverified across the products.

## Sources

The [baseline source inventory](paid-baseline.md#sources) lists the primary sources and their labels. The labels in these tables link directly to those sources. See the [research method and limitations](paid-baseline.md#method-and-limitations) for the evidence boundaries.

[N1]: https://www.notion.com/help/ai-meeting-notes
[N2]: https://www.notion.com/product/ai-meeting-notes
[N3]: https://www.notion.com/help/notion-ai-faqs
[N4]: https://www.notion.com/help/export-your-content
[N5]: https://www.notion.com/help/manage-your-usage-allowance-for-notion-ai
[A1]: https://amie.so/pricing
[A2]: https://amie.so/documentation/features/ai-notes
[A3]: https://amie.so/changelog/embed
[A4]: https://amie.so/
[A5]: https://amie.so/documentation/features/pages
[A6]: https://amie.so/documentation/getting-started/installation
[S1]: https://www.spellar.ai/
[S2]: https://www.spellar.ai/download
[S3]: https://apps.apple.com/us/app/spellar-ai-meeting-note-taker/id6473629578
[S4]: https://www.spellar.ai/privacy
[S5]: https://www.spellar.ai/updates/v-1.9.0
[S6]: https://www.spellar.ai/page/spellar-ios-official-launch
[S7]: https://www.spellar.ai/updates/v-1.5.0
[S8]: https://www.spellar.ai/updates/v1-3-14
[S9]: https://www.spellar.ai/updates/v-1.4.7
[S10]: https://www.spellar.ai/pricing
[S11]: https://www.spellar.ai/ai-usage-policy
