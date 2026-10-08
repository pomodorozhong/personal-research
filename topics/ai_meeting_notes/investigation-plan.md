# Meeting-notes investigation plan

[Topic overview](README.md) · [Feature catalogue](feature-catalogue.md) · [Local pipeline sources](open-source-pipelines.md) · [Review guide](review-guide.md)

The immediate question is whether an existing local model can produce a good transcript and reliably distinguish speakers in a meeting recording on the **M2 Pro / 16 GB Mac**. Check what the open-source projects use, then try a recording. If the result meets that need, stop testing. If it falls short, the failures determine which other models or pipeline changes are worth an experiment.

The catalogue remains the reference for the wider workflow. It helps explain how transcription and speaker errors affect later notes, without requiring a benchmark for every feature before the recording trial.

## Three-phase roadmap

| Phase | Work and result | Review or next decision |
| --- | --- | --- |
| **1. Define the features — complete** | The [Feature catalogue](feature-catalogue.md) defines `MN-01` through `MN-22`. The paid-product comparison supplies background for those definitions. | Use the accepted catalogue for local work. Further paid-product comparisons are not required. |
| **2. Check the project models — source review complete** | The [configuration review](open-source-pipelines.md#confirmed-models-runtimes-and-settings) records the main models, downloads, runtimes, settings, language support, macOS requirements, licenses, and processing boundaries, inspected on 2026-10-08. | Selected: HushScribe source build + Whisper Large v3 with language detection enabled + FluidAudio offline Community-1 diarization for the user-confirmed macOS 26.6.2 and Chinese + English recording. Runtime success remains to be checked by the user. |
| **3. User runs a meeting-recording trial — pending** | Record the setup, input, transcript, speaker labels, and whether the model runs successfully on the target Mac. Compare the words and labels with the recording. | If a model reliably distinguishes speakers and produces a good transcript, stop testing. Otherwise, describe the failures and plan targeted experiments with other models or pipelines. |

A successful trial answers the immediate question about transcription and speaker separation. It does not establish the quality of generated summaries or show that the full catalogue is implemented. Record those boundaries with the result so it can inform later work without overstating coverage.

## User-run recording trial

The source review chooses **a HushScribe source build, Whisper Large v3 with language detection enabled, and FluidAudio’s offline Community-1 speaker separation** for the user-confirmed **macOS 26.6.2 (25G83), Chinese + English** setup. The **user performs installation and testing**; the research phase gathers sources and prepares this plan. No model has been downloaded or run by the research agent.

### Setup and prerequisites

The user confirmed **macOS 26.6.2 (25G83)** and a **Chinese + English** recording on 2026-10-08. HushScribe’s inspected package requires **macOS 26+ and Apple Silicon**; its cask advertises a lower OS requirement, so use the package requirement. The confirmed OS meets that requirement. Keep Whisper Large v3 because Parakeet v3 does not support Chinese. Chinese/English switching accuracy remains a question for the recording itself.

### Prepare the language override before the user trial

The [model review](open-source-pipelines.md#hushscribe-the-selected-file-oriented-setup) traces an English-prefill default in the stock Whisper wrapper. Its selected mixed-language setup therefore requires **a source build with language detection explicitly enabled**. Build preparation is a future step after reviewing this research; no third-party source has been changed or compiled in this phase. Do not ask the user to test the unmodified release as though it had these settings.

Use HushScribe revision `51103f0c8f97344ec7ecdf6480a2ee53cd9a0e92`, Xcode **26.3+**, and its `HushScribe/Package.resolved` lock (WhisperKit 0.18.0 and the recorded FluidAudio revision). In `HushScribe/Sources/HushScribe/Transcription/WhisperKitBackend.swift`, replace the options-free transcription call with this **proposed, uncompiled change**:

```swift
let options = DecodingOptions(
    task: .transcribe,
    language: nil,
    detectLanguage: true
)
let results = try await whisperKit.transcribe(
    audioArray: samples,
    decodeOptions: options
)
```

This keeps transcription in the original language and lets WhisperKit detect language for each speech chunk. It does not establish reliable switching within a chunk; the user checks that output. Record this override with the app build and model identifiers. The app’s Apple Speech locale setting does not configure its Whisper wrapper.

The project documents `scripts/release.sh test`, run from the repository root, as its local packaging command without notarization or publication. Despite the mode name, this is a build command, not evidence of a recording trial. A future preparation step must confirm that it produces a launchable app and preserve its build/commit information, without downloading models or running inference. If the required Xcode build cannot be prepared, return that blocker and choose a different file-oriented configuration before asking the user to test. The [architecture build instructions](https://github.com/drcursor/HushScribe/blob/51103f0c8f97344ec7ecdf6480a2ee53cd9a0e92/ARCHITECTURE.md#build) and [packaging script](https://github.com/drcursor/HushScribe/blob/51103f0c8f97344ec7ecdf6480a2ee53cd9a0e92/scripts/release.sh) are the sources for this step.

### Run one bounded recording trial

1. Prepare a **5–10 minute excerpt** of a meeting recording with at least two known voices, several speaker changes, and representative Chinese/English vocabulary and at least one language switch. Keep the original. Record the file format, duration, speaker count, language mix, and whether voices overlap. This excerpt is a proposed fixture, not an existing test input.
2. Launch the prepared HushScribe build with the recorded language-detection override and choose an output folder. In **Settings → Models**, select **Whisper Large v3** for transcription and let the app download its assets. Record the selected model, actual downloaded folder/weight revision or file hash where available, and any download or loading error. The inspected model folder is about **3.09 GB**, with additional tokenizer/VAD assets and about **21.60 MB** of offline speaker artifacts; allow space for caches and a temporary WAV.
3. Keep automatic meeting recording off for this file-based trial. Leave summary generation unused and keep the speaker-processing defaults. Use **Transcribe File** to load the excerpt. Let transcription finish and wait for post-session diarization and the naming prompt. If the app fails at any stage, record the exact error and stop this attempt rather than changing several settings at once.
4. Keep the initially generated voice labels in a saved copy. Assign names only where listening and known identities confirm them. Save or export the final transcript as Markdown and, if useful, JSON/SRT. A naming prompt or two displayed names alone does not prove successful separation.
5. Compare the transcript with the recording at speaker changes, names/technical terms, and statements whose meaning depends on words such as “not.” Check that each voice keeps a consistent label, including when a speaker returns after a pause. Record meaningful omissions, incorrect words, merged voices, split voices, and label swaps with recording times.
6. Return the setup record and result below. Note whether the app completed, whether macOS showed persistent memory pressure, and approximate waiting time if easy to observe. A timed benchmark or a multi-model campaign is not required for this first decision.

### Return evidence and make the next decision

Please return these details after the trial, with a redacted transcript or representative excerpts if the recording contains private content:

| Record | What to provide |
| --- | --- |
| Environment | macOS version, M2 Pro / 16 GB confirmation, HushScribe version/build or source commit, installed runtime versions if built from source. |
| Configuration | Whisper model/folder and snapshot or hash if accessible, the `detectLanguage=true` source override, VAD/diarizer settings or “unchanged defaults,” summary generation unused, any changed language setting. |
| Input | File type, duration, spoken languages, number of voices, overlap/noise, and a description that distinguishes this excerpt from future inputs. |
| Output | Transcript with timestamps and original voice labels; confirmed names separately; completion/error details. |
| Meaningful errors | For each example: recording time, expected words/voice, actual words/label, and consequence. |
| Decision | Usable transcript and stable voice separation; or the specific failure that prevents using it. |

A successful result means the words preserve the meeting’s meaning and the voice labels remain consistent for this input. Stop testing when both are useful enough. If either fails, use the examples to choose one focused follow-up: transcription/language handling, voice separation, or loading/memory. Return that evidence before asking the user to run another configuration. Summary quality and full catalogue coverage remain separate questions.

## Pipeline steps and feature impact

A feature can depend on several steps. An action item, for example, needs the commitment's words, the context needed to resolve its owner, and extraction that leaves an unstated deadline empty. A failure at any of those steps can damage the same output. The map below records starting relationships to use when reading code or explaining a trial result; the relationships still need confirmation for each selected implementation.

| Step | Related features | What the step contributes or can change |
| --- | --- | --- |
| Capture, import, and recording controls | MN-01, MN-02, MN-03, MN-20 | Determines which audio enters the pipeline, what pauses exclude, and where data goes. Missing audio removes content from later notes. |
| Speech segmentation and chunking | MN-04, MN-05, MN-06, MN-08, MN-09, MN-10 | Chooses the audio portions to process. Boundaries can split words, speaker turns, or commitments; chunk size can change waiting time and memory use. |
| Transcription | MN-04, MN-05, MN-11, MN-14 | Produces text and timing information. Language choices and vocabulary handling affect the words available to summaries and searches. |
| Speaker separation and naming | MN-06, MN-07, MN-10, MN-18 | Keeps turns attached to voices and uses confirmed context to attach names. Voice labels and calendar attendees alone do not settle task ownership. |
| Transcript assembly and correction | MN-05, MN-12, MN-15, MN-16, MN-22 | Keeps text in order with times, labels, and source links. Corrections need to reach notes and other outputs derived from that text. |
| Summaries, decisions, and actions | MN-08, MN-09, MN-10, MN-11, MN-21, MN-22 | Selects facts and commitments from the text. Prompts, available context, and combining chunks can change what is included or omitted. |
| Storage, indexing, and retention | MN-12, MN-13, MN-14, MN-20 | Saves meetings, organizes searchable content, and handles updates and deletion. Stored copies and search indexes need consistent treatment. |
| Search and answers | MN-14, MN-15, MN-22 | Finds text or relevant passages and uses them to answer questions. Scope, stale content, and missing sources affect the answer. |
| Export and access control | MN-16, MN-17, MN-20 | Preserves useful content outside the app and controls who can read it. Exported copies, sharing, and revocation need application support. |
| Calendar, integrations, and follow-up | MN-18, MN-19, MN-21 | Links events and sends reviewed content to destinations. Event matching, authentication, retries, and duplicate handling need work beyond generating notes. |

Use the same feature IDs in source observations and trial notes. When a failure appears, identify the input, the affected step, the observed output, and the feature it damages. The [source overview](open-source-pipelines.md) provides the initial implementations to inspect.

## Measurement rules for follow-up experiments

Further experiments are conditional on the recording trial failing. Choose measurements that can distinguish possible causes of an observed problem. A poor transcript suggests different work from correct words assigned to the wrong speaker.

- Keep the recording, relevant excerpt, expected result, actual output, model version, and settings together. This lets another attempt address the same failure.
- Change one relevant model or setting at a time when comparing results. Reuse the same input so a difference can be connected to that change.
- If processing is too slow or the model cannot run, record loading time separately from processing time, memory use, memory pressure, and swap growth where measurable. Repeat timed comparisons three times when a timing result determines the choice.
- If simultaneous models cause a problem, compare running them together with running steps in sequence and unloading models between steps. Record when the resulting features become available.
- If words or speaker labels are wrong, check the recording and the intermediate outputs before attributing the error to a later model. Use additional languages, overlapping speech, or longer excerpts only when they help investigate the failure.

These are options for designing a focused follow-up, not a required test suite after a successful trial. Keep broader application features visible in the catalogue and assess them when the work reaches those features.

## Evidence and maintenance

The catalogue is accepted and the model/source review is complete as of 2026-10-08. The user-run recording trial remains pending. The observations in this plan are explanations of dependencies, not measurements on the target Mac.

Preserve `MN-01` through `MN-22`; add new IDs for newly identified behavior without renumbering existing ones. Date source research and trial results separately. Keep each claim's source or relevant output nearby, check links and feature references, and run `git diff --check` after document changes.

[Back to all topics](../../README.md)
