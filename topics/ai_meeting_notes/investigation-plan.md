# Meeting-notes investigation plan

[Topic overview](README.md) · [Feature catalogue](feature-catalogue.md) · [Local pipeline sources](open-source-pipelines.md) · [Review guide](review-guide.md)

The immediate question is whether an existing local model can produce a good transcript and reliably distinguish speakers in a meeting recording on the **M2 Pro / 16 GB Mac**. Check what the open-source projects use, then try a recording. If the result meets that need, stop testing. If it falls short, the failures determine which other models or pipeline changes are worth an experiment.

The catalogue remains the reference for the wider workflow. It helps explain how transcription and speaker errors affect later notes, without requiring a benchmark for every feature before the recording trial.

## Three-phase roadmap

| Phase | Work and result | Review or next decision |
| --- | --- | --- |
| **1. Define the features — complete** | The [Feature catalogue](feature-catalogue.md) defines `MN-01` through `MN-22`. The paid-product comparison supplies background for those definitions. | Use the accepted catalogue for local work. Further paid-product comparisons are not required. |
| **2. Check the project models** | Expand [Local pipeline sources](open-source-pipelines.md) with the exact models, versions, software, settings, language support, macOS requirements, licenses, and local/cloud processing choices for the main steps. | Select a model or setup suitable for the recording trial. Confirm that speaker separation is available and distinguish it from name assignment. |
| **3. Try a meeting recording** | Record the setup, input, transcript, speaker labels, and whether the model runs successfully on the target Mac. Compare the words and labels with the recording. | If a model reliably distinguishes speakers and produces a good transcript, stop testing. Otherwise, describe the failures and plan targeted experiments with other models or pipelines. |

A successful trial answers the immediate question about transcription and speaker separation. It does not establish the quality of generated summaries or show that the full catalogue is implemented. Record those boundaries with the result so it can inform later work without overstating coverage.

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

The catalogue is accepted; the model review and recording trial are pending. The observations in this plan are explanations of dependencies, not measurements on the target Mac.

Preserve `MN-01` through `MN-22`; add new IDs for newly identified behavior without renumbering existing ones. Date source research and trial results separately. Keep each claim's source or relevant output nearby, check links and feature references, and run `git diff --check` after document changes.

[Back to all topics](../../README.md)
