# Reviewing the meeting-notes investigation

[Topic overview](README.md) · [Investigation plan](investigation-plan.md) · [Feature catalogue](feature-catalogue.md)

The next decision is whether a local model produces a usable transcript with reliable speaker labels from a meeting recording. This guide describes what to inspect in the model review and trial result. The source review gathers configuration evidence and prepares a plan. The user installs and tests the models, then returns the setup and outputs for review.

## 1. Feature scope is confirmed

The [Feature catalogue](feature-catalogue.md), `MN-01` through `MN-22`, is accepted. It defines the expected behavior for local work. Further paid-product comparisons and unresolved vendor details do not need to be settled before the recording trial.

The immediate trial checks transcription (**MN-04**) and speaker separation (**MN-06**). Naming people (**MN-07**) also requires confirmed identity information. Other features remain in the catalogue so the report can explain downstream effects and additional work without claiming that the trial covers them.

## 2. Review pipeline effects and experiment choices

Start with [Local pipeline sources](open-source-pipelines.md). Its completed configuration review identifies the main models, artifacts, runtimes, settings, licenses, and processing boundaries. A HushScribe source build with Whisper Large v3, language detection enabled, and offline Community-1 diarization is selected, for the confirmed macOS 26.6.2 (25G83), Chinese + English recording.

The user’s confirmed macOS version meets the documented requirement; Chinese support selects Whisper rather than Parakeet. First prepare the documented source override; then ask the user to run the [recording trial](investigation-plan.md#user-run-recording-trial) and return the setup and transcript evidence. Speaker separation has a confirmed source path; successful execution and useful output on the target Mac remain to be established. Also check whether labels appear during the call or only afterward. That difference matters if the intended use needs live attribution, but does not prevent using final labels for a saved recording.

The review should leave a concrete option to try. It does not require a complete feature matrix or a broad benchmark campaign before that trial. If a detail affects the choice, name the model or step and explain the consequence—for example, “This option transcribes the recording but has no speaker-separation step.”

## 3. Review the recording result

Read the generated transcript alongside the recording, including passages where speakers change, words are unclear, or technical terms appear. Check whether the words preserve the meaning and whether each voice keeps a consistent label. Name assignment should use known identities rather than guesses from a participant list.

For a problem, give the recording time, the expected words or speaker, the actual output, and why the difference matters. For example, a transcript that drops “not” from a launch decision changes the meaning; a speaker label that swaps two people can attach a commitment to the wrong person.

If a model reliably distinguishes speakers and produces a good transcript on the target Mac, stop testing. If none does, use the observed failures to plan further experiments with other models or pipelines. The [investigation plan](investigation-plan.md#measurement-rules-for-follow-up-experiments) lists measurements that may help distinguish causes; select only those needed for the failure being investigated.

## Keep the conclusion within the evidence

Record the model, settings, recording, result, and decision together. A successful trial of transcription and speaker separation does not demonstrate summary quality, sharing behavior, or other untested catalogue features. Those remain separate questions when deciding what further work is needed for [#167](https://github.com/pomodorozhong/rabbit-holes/issues/167).

The model/source review is complete as of **2026-10-08**. The user-run recording trial is pending. This guide describes how to review that future evidence; no model test has been performed by the research agent.
