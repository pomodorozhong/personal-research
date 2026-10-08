# Local pipeline sources

[Topic overview](README.md) · [Feature catalogue](feature-catalogue.md) · [Investigation plan](investigation-plan.md)

These notes describe the paths used by Meetily, HushScribe, VOA, and Tacet to turn meeting audio into text and notes. The project documentation and selected source files were inspected on **2026-10-06**, Asia/Taipei, at the revisions recorded below. The paths identify options for the model review and meeting-recording trial; they do not provide measured quality or performance on the M2 Pro / 16 GB Mac.

## Observed pipeline patterns

### Meetily: local transcription with a choice of summary provider

**Inspected revision:** `a2cb62e827da7ef59f65064c97233efb2313878e`.

Meetily captures microphone and system audio, transcribes with local Whisper or Parakeet, and stores meeting data in a database. Its architecture separates the audio, transcription, database, and summary engines. The summary provider determines where that later processing runs: Ollama is a local option, while other provider configurations use APIs. [README](https://github.com/Zackriya-Solutions/meetily/blob/a2cb62e827da7ef59f65064c97233efb2313878e/README.md), [architecture](https://github.com/Zackriya-Solutions/meetily/blob/a2cb62e827da7ef59f65064c97233efb2313878e/docs/architecture.md)

This separation gives the model review a concrete path to follow: identify the transcription model, then check the summary provider and its settings. Choosing local transcription alone does not settle where the meeting text goes for summaries.

### HushScribe: speaker labels after the session

**Inspected revision:** `51103f0c8f97344ec7ecdf6480a2ee53cd9a0e92`.

HushScribe keeps microphone and system audio as separate streams. Voice activity detection, which separates speech from silence, feeds the selected local speech-recognition model. Speaker separation runs after the session; a naming step and Markdown output follow. Summaries are requested from a saved transcript using a local MLX model or the separate Apple NaturalLanguage summarizer. [README](https://github.com/drcursor/HushScribe/blob/51103f0c8f97344ec7ecdf6480a2ee53cd9a0e92/README.md), [architecture](https://github.com/drcursor/HushScribe/blob/51103f0c8f97344ec7ecdf6480a2ee53cd9a0e92/ARCHITECTURE.md)

Final speaker-labelled text and live speaker-labelled text are different results here. That timing can suit a recording trial even when it would not satisfy a need for live attribution. The inspected documentation requires macOS 26 or later, so compatibility must be checked before choosing it for the trial.

### VOA: a saved transcript followed by structured notes

**Inspected revision:** `d2a9a3af2cc76f8f0a674c017dd439bc8609ab49`.

VOA sends detected speech segments to local Whisper and saves the transcript. Summary generation runs on request. Its README describes Qwen2.5-1.5B through `node-llama-cpp` as the default local summary option, with LM Studio or Ollama as alternatives. For long transcripts, the extraction code processes chunks and updates the summary with each new chunk. [README](https://github.com/justanotherkevin/VOA/blob/d2a9a3af2cc76f8f0a674c017dd439bc8609ab49/README.md), [structured extraction](https://github.com/justanotherkevin/VOA/blob/d2a9a3af2cc76f8f0a674c017dd439bc8609ab49/src/main/pipeline/structured-summarizer.ts)

The output format affects how the app can use the notes. VOA's action items have `text` and `done` fields; they do not have separate owner and deadline fields. A name or date in task text is therefore different from a field another application can read directly. The same source asks for English output when the input is non-English. Those choices matter for **MN-10** and for the desired note language, even if transcription itself is accurate. [Extraction schema and prompt](https://github.com/justanotherkevin/VOA/blob/d2a9a3af2cc76f8f0a674c017dd439bc8609ab49/src/main/pipeline/structured-summarizer.ts)

### Tacet: speaker processing alongside transcription

**Inspected revision:** `d976b40c0c63d5ab7f1121e5e48606ffb475fa2b`.

Tacet captures separate microphone and system audio streams. Silero voice activity detection passes speech to Whisper and to speaker processing based on voice embeddings—numeric descriptions used to compare voices. The resulting labelled transcript feeds analysis during the meeting, a final summary, and local Markdown and vault storage. Ollama is the local language-model option; cloud providers receive selected text, with optional screen analysis handled separately. [README](https://github.com/Tacetapp/tacet/blob/d976b40c0c63d5ab7f1121e5e48606ffb475fa2b/README.md), [audio flow](https://github.com/Tacetapp/tacet/blob/d976b40c0c63d5ab7f1121e5e48606ffb475fa2b/docs/audio-pipeline-flow.md)

The model review needs to follow both the speech and speaker paths, then confirm the language-model provider. A stable voice label still needs confirmed identity information before it becomes a person's name. Local audio processing does not by itself establish local processing for the later notes.

## What these patterns tell us

The projects expose separate choices for transcription, speaker handling, and summaries. They also schedule the work differently: during the call, afterward, or on request. These observations explain why the model and settings need to be recorded with the result. The same general feature can become available at a different time or depend on a different processing provider.

The next step is to confirm the actual model versions, software, language support, macOS requirements, licenses, and settings needed for a candidate. Then use a meeting recording to check transcript quality and reliable speaker labels. If a model meets that need on the target Mac, stop testing. If none does, the failures determine further experiments, as described in the [investigation plan](investigation-plan.md#three-phase-roadmap).

The catalogue includes more than the recording trial checks. The observations above can explain dependencies and missing application work, but they do not establish full feature coverage or summary quality.

## Sources

All links use the inspected commit rather than a moving default branch.

- **Meetily:** [README](https://github.com/Zackriya-Solutions/meetily/blob/a2cb62e827da7ef59f65064c97233efb2313878e/README.md), [architecture](https://github.com/Zackriya-Solutions/meetily/blob/a2cb62e827da7ef59f65064c97233efb2313878e/docs/architecture.md), [audio pipeline](https://github.com/Zackriya-Solutions/meetily/blob/a2cb62e827da7ef59f65064c97233efb2313878e/frontend/src-tauri/src/audio/pipeline.rs), [transcription engine](https://github.com/Zackriya-Solutions/meetily/blob/a2cb62e827da7ef59f65064c97233efb2313878e/frontend/src-tauri/src/audio/transcription/engine.rs).
- **HushScribe:** [README](https://github.com/drcursor/HushScribe/blob/51103f0c8f97344ec7ecdf6480a2ee53cd9a0e92/README.md), [architecture](https://github.com/drcursor/HushScribe/blob/51103f0c8f97344ec7ecdf6480a2ee53cd9a0e92/ARCHITECTURE.md), [streaming transcriber](https://github.com/drcursor/HushScribe/blob/51103f0c8f97344ec7ecdf6480a2ee53cd9a0e92/HushScribe/Sources/HushScribe/Transcription/StreamingTranscriber.swift), [NaturalLanguage summary implementation](https://github.com/drcursor/HushScribe/blob/51103f0c8f97344ec7ecdf6480a2ee53cd9a0e92/HushScribe/Sources/HushScribe/Services/SummaryService.swift).
- **VOA:** [README](https://github.com/justanotherkevin/VOA/blob/d2a9a3af2cc76f8f0a674c017dd439bc8609ab49/README.md), [pipeline documentation](https://github.com/justanotherkevin/VOA/blob/d2a9a3af2cc76f8f0a674c017dd439bc8609ab49/docs/PIPELINE-SERVICES-ARCHITECTURE.md), [Whisper process/queue interface](https://github.com/justanotherkevin/VOA/blob/d2a9a3af2cc76f8f0a674c017dd439bc8609ab49/src/main/pipeline/whisper-transcriber.ts), [structured extraction](https://github.com/justanotherkevin/VOA/blob/d2a9a3af2cc76f8f0a674c017dd439bc8609ab49/src/main/pipeline/structured-summarizer.ts), [local summary model implementation](https://github.com/justanotherkevin/VOA/blob/d2a9a3af2cc76f8f0a674c017dd439bc8609ab49/src/main/pipeline/llama-summarizer.ts).
- **Tacet:** [README](https://github.com/Tacetapp/tacet/blob/d976b40c0c63d5ab7f1121e5e48606ffb475fa2b/README.md), [audio pipeline documentation](https://github.com/Tacetapp/tacet/blob/d976b40c0c63d5ab7f1121e5e48606ffb475fa2b/docs/audio-pipeline-flow.md), [transcriber](https://github.com/Tacetapp/tacet/blob/d976b40c0c63d5ab7f1121e5e48606ffb475fa2b/web/backend/transcriber.py), [speaker registry](https://github.com/Tacetapp/tacet/blob/d976b40c0c63d5ab7f1121e5e48606ffb475fa2b/web/backend/speaker_registry.py).

## Method and limits

The research read the pinned READMEs, architecture and pipeline documents, and selected source sections listed above. It checked the main paths and the specific examples discussed here. The model review still needs to confirm exact configurations, relevant dependency licenses, and the setup chosen for the trial. No application or model was installed for this research, and no recording-test result is available yet.
