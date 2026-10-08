# Feature catalogue

[Topic overview](README.md) · [Investigation plan](investigation-plan.md) · [Review guide](review-guide.md)

The catalogue defines 22 meeting-notes features by the input they need, the output they should produce, and the failures to check. These are the accepted goals for the investigation, assembled from the [paid-product research](paid-baseline.md). A feature definition describes the intended behavior; it does not report a measured capability of any product or model.

Consider a fictional commitment: “I'll update the checklist,” spoken by Lin. For **MN-10**, the expected result is a checklist task owned by Lin, with no deadline because none was stated. Getting that result requires the words to survive transcription, the speaker context to remain correct, and the extraction step to leave missing information unknown.

Two distinctions recur in the table. **Speaker separation** assigns consistent labels to voices; **speaker identity** attaches confirmed names. **Keyword search** finds matching text; answering a question with evidence also requires finding relevant passages and supporting the answer with them.

| ID | Feature | Observable input → output | Boundary or failure to check |
| --- | --- | --- | --- |
| MN-01 | Meeting capture | Mic and remote-call audio → complete recording or transcription input | Headsets, shared microphones, app compatibility, device switches, missing audio |
| MN-02 | Existing-file import | A saved audio file → transcript and notes | Accepted formats, size/duration limits, duplicate imports |
| MN-03 | Recording controls and disclosure | Start/pause/stop commands → clear recording state and participant disclosure | Paused speech must stay excluded; no bot does not establish participant awareness |
| MN-04 | Transcription and language | English, Chinese, or mixed speech → faithful original-language text | Technical terms, negation, script, translation, code switching, live backlog |
| MN-05 | Time navigation and replay | A transcript segment → timestamp and corresponding audio | Segment versus word timing, retained audio, exported time links |
| MN-06 | Speaker separation | Multi-speaker audio → consistent speaker-labelled turns | Overlap, shared mic, merged/split speakers; anonymous labels are acceptable only for this ID |
| MN-07 | Named speakers | Speaker turns and identity context → correct names | Calendar attendees alone do not prove who spoke; manual correction may be needed |
| MN-08 | Meeting summary | Transcript and optional context → concise topics and key facts | Omitted facts, invented claims, correction effort, latency |
| MN-09 | Decisions | Transcript → explicit decisions with supporting evidence | Distinguish accepted decisions from proposals, rejected ideas, and open questions |
| MN-10 | Action items | Commitments → task, owner, and deadline when stated | Wrong attribution; invented owners/dates; unassigned actions must stay unassigned |
| MN-11 | Customization and context | Agenda, vocabulary, instructions, or template → focused transcript/notes | Vocabulary bias differs from summary formatting; context and templates may affect outputs differently |
| MN-12 | Correction and regeneration | Corrected transcript/name or new instructions → updated saved content | Check whether summaries, actions, citations, and downstream tasks become stale |
| MN-13 | Meeting history | Saved meetings and metadata → persistent browsable archive | Organization, retention, deduplication, cross-device access |
| MN-14 | Keyword search | A name or phrase → matching meetings/passages | Search transcript versus summary only; distinguish search from AI answers |
| MN-15 | Questions with evidence | Question plus one/multiple meetings → answer with traceable sources | Scope, wrong sources, unsupported answers, “not found” handling |
| MN-16 | Portable export | Selected transcript/notes/audio → usable files | Text, speakers, timestamps, citations, attachments, and formatting can be lost |
| MN-17 | Sharing and access | Saved notes plus recipients → controlled read/edit access | Public link versus private access; revoke links; avoid accidental broad sharing |
| MN-18 | Calendar context | Event and participants → linked meeting, reminder, and capture entry point | Ad hoc calls, recurring events, multiple calendars, wrong event attribution |
| MN-19 | Integration delivery | Notes/actions plus destination → correct external document/task | Authentication, retries, duplicates, destination schema, external-service dependency |
| MN-20 | Processing and retention control | Chosen inference/storage settings → known local/cloud boundary and deletion behavior | Audio and text differ; API keys do not imply offline inference; verify deletion separately |
| MN-21 | Follow-up automation | Reviewed actions/context → scheduled tasks or draft follow-up | Extracting a task differs from assigning, scheduling, or sending it |
| MN-22 | Cross-meeting recaps | Several meetings over a period → digest and commitment changes | Stale commitments, contradictory meetings, missing provenance |

## How to use the catalogue

Use the IDs to connect a feature to the steps that support it. MN-10, for example, can fail because audio is missing, transcription changes a commitment, a speaker label is wrong, or the extraction step invents an owner. Recording the failing step explains what needs to change more clearly than marking the whole feature as poor.

The [pipeline impact map](investigation-plan.md#pipeline-steps-and-feature-impact) provides the starting relationships. The immediate recording test focuses on transcription (**MN-04**) and speaker separation (**MN-06**); naming people (**MN-07**) also needs confirmed identity information. The other rows remain useful when checking what an app provides or explaining how an error affects later notes. They do not require a separate experiment for every feature before the recording trial.

Keep IDs unchanged when adding findings. If a feature needs manual work, extra application code, or an external service, record that dependency. Add a new ID for a new behavior rather than renumbering the existing catalogue.

## Sources

The [background source inventory](paid-baseline.md#sources) lists the material used to assemble the catalogue, inspected on **2026-10-06**. The feature definitions and failure cases are authored evaluation criteria. The [product comparison](product-coverage.md) records what each paid app documents; the local investigation uses the criteria above directly.
