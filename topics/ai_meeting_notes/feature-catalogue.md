# Feature catalogue

[Topic overview](README.md) · [Investigation plan](investigation-plan.md) · [Review guide](review-guide.md)

These **authored evaluation definitions** are the accepted feature scope for the pipeline investigation and local measurements. Evaluate each feature against its observable behavior and failure cases. Unknown deadlines, names, or decisions must remain unknown in reference outputs instead of being filled by guesswork.

Keep IDs unchanged. Speaker **separation** means distinguishing voice turns; **identity** means attaching the correct person's name. Keyword search finds matching text; semantic questions require finding relevant evidence and composing an answer.

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

For every ID, trace the pipeline stages and application work it depends on. Record what each stage enables, which failures can damage the feature, and which quality, latency, or memory tradeoffs need measurement. A feature may depend on several stages; one stage may affect several features. Keep unsupported features visible and state the missing work.

For example, MN-10 depends on capturing a commitment, preserving its wording during transcription, resolving who owns it, and extracting only the stated task and deadline. The pipeline report should distinguish missing audio, transcription errors, identity mistakes, and extraction errors rather than treating them as one action-item failure.

The [pipeline impact map](investigation-plan.md#pipeline-steps-and-feature-impact) gives the starting questions. The definitions above are the acceptance criteria; implementation choices and practical coverage remain to be investigated.

## Sources

The catalogue was assembled during the [dated background research](paid-baseline.md#sources). Its input/output definitions and failure cases are authored criteria, not measured product capabilities. The paid comparison is retained as background; later work uses these criteria directly.
