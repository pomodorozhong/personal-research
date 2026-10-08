# Shipping a side project in 2-2-2

A side project can keep accumulating features before anyone else gets a useful result. Jordi Bruin's 2-2-2 method limits the next investment: two hours to test feasibility, two days to make the idea usable by friends, and two weeks to make it launchable. He explains the progression around [2:56–3:47 in his iOS Conf SG talk](https://www.youtube.com/watch?v=Nz4R517_bVk&t=176s).

The useful distinction is what each investment establishes. Making one operation work leaves the user's whole task untested. Helping a friend finish that task still leaves delivery to a stranger untested. This guide follows those decisions through a small resizing utility; the example gates are an adaptation, not a checklist dictated by Bruin.

## Start with one input and a useful output

Consider a fictional local tool for a designer preparing screenshots in three export sizes. A 1600 × 900 PNG needs an 800 × 450 copy for a smaller page placement, with the original proportions and source file intact. The tool's initial promise is to produce named PNG copies locally, without uploading or editing their content. The utility, test outcomes, and project decisions throughout the example are illustrative; no app or user test is being reported.

The two-hour question is whether that resize can work. The two-day question is whether another person can select the image, choose the size, and find the copy. The two-week question is whether someone outside the test group can obtain and use a release with an accurate description. Each question adds a different kind of work, so the first successful image should not be treated as a finished product.

## Use two hours to test the risky operation

Build the smallest operation that takes the representative PNG, scales it by one half, and writes a new file. The expected illustrative transformation is:

```text
Input:   screenshot.png         1600 × 900
Choice:  width 800; keep proportions
Output:  screenshot-800.png       800 × 450
Source:  screenshot.png remains 1600 × 900
```

The output dimensions show that the proportions are preserved; opening the output checks whether it is a readable PNG. Also inspect image quality and processing time, since a mathematically correct size alone cannot show whether the output is useful. Use disposable inputs and never overwrite the only source copy.

If this operation works on the representative input, the next uncertainty is how someone else reaches that result. If it fails or produces unacceptable quality, try a narrower promise or record the limitation and stop. Authentication, payment, themes, and multiple formats do not answer this feasibility question.

## Use two days to let another person finish the task

Add image selection, presets for widths 400, 800, and 1200 with proportional heights, a destination chooser, progress, and an unsupported-file error. For the same 1600 × 900 input, the copies would be 400 × 225, 800 × 450, and 1200 × 675. A sample image and short instructions give a tester the whole workflow rather than an isolated library function.

Ask three people who actually prepare screenshots to choose the 800-wide preset and locate the exported copy without coaching. Include both a valid PNG and an unsupported input. The result to observe is whether they can finish and recognize an error, rather than whether they like the interface.

An example gate is two of three finishing unaided, with no observed damage to an original. Suppose two finish but the third cannot find the destination folder. That possible finding suggests showing the saved path or an “Open folder” action before adding more presets. It gives a concrete revision for the next attempt; two successful testers do not establish broad demand or reliability on every file.

Once other people can complete the agreed task, the next investment can address obtaining the tool. Friends who already have a build and the maker's contact details have not yet tested that path.

## Use two weeks to make the promise deliverable

A stranger arriving at a release page needs to see what the utility does, which platform it supports, how to install it, and where to ask for help. Package one version for one supported platform and show a real workflow before claiming it is available. If charging, explain price, delivery, and support terms before purchase; a free release also needs a working delivery path.

For the example, a useful delivery check would start from the release page on a clean supported computer: obtain the build, follow installation instructions, select the sample PNG, export the 800 × 450 copy, and locate it. If a file permission prevents saving, delivery is not complete even though the two-hour resize worked. Fix that blocker within the release scope; cloud sync, accounts, batch processing, and another theme do not resolve it.

Reserve packaging and delivery time inside the budget. Decide in advance whether the two-day and two-week constraints mean elapsed time or available working time for the project. External review may outlast either: submitting a release candidate and making an app available to users are separate outcomes.

Launch to an audience likely to need screenshot exports. Follow first useful exports, repeat use where observable, errors, and support effort alongside downloads. Use voluntary feedback or appropriately disclosed telemetry without uploading screenshots silently; the local-processing promise applies to measurement too.

## Let each result determine the next investment

The three budgets separate questions that can otherwise become mixed together:

| Finding to establish | Evidence in this example | Decision it informs |
| --- | --- | --- |
| The operation is feasible. | A readable, proportionally resized copy with its source preserved. | Whether to invest in a complete user workflow. |
| Another person can finish. | A tester chooses a preset, finds the output, and understands failures. | Whether to invest in delivery beyond the test group. |
| A stranger can obtain and use the release. | Installation and export succeed from the public delivery path. | Whether to launch the agreed scope and follow real use. |

A working resize with a confusing output location calls for workflow work. A usable test build with a broken installation path calls for delivery work. That distinction helps cut features while keeping the reason for the next stage clear.

At a deadline, remove optional scope before extending time, but do not disguise an unreliable operation as a finished release. Record what works, what blocks the promise, and whether a narrower release can fulfill it safely.

Some ideas need hardware, approvals, or substantial research. A short prototype can reveal a risk without proving the remaining work is small. Bruin describes a subtitling prototype taking roughly eighteen hours rather than two [around 19:30](https://www.youtube.com/watch?v=Nz4R517_bVk&t=1170s). The method encourages scope decisions; it is not a universal estimate of effort.

After release, keep a short record of the promise, evidence, cut features, delivery status, and next decision. Maintain, improve, or retire the project according to usefulness and the cost of keeping it reliable. A stopped experiment with a clear finding can resolve a question that another unfinished feature would leave open.

## Source limits

The method passage and longer-prototype example were checked against the iOS Conf SG recording's English automatic captions on 2026-10-07. Automatic transcription may contain errors. The alternate recording is a viewing reference and does not provide independent transcript confirmation here.

[Back to Indie Hacking](../README.md)

## Sources

- [Jordi Bruin: Shipping Side Projects in 2-2-2 Easy Steps — iOS Conf SG 2023](https://www.youtube.com/watch?v=Nz4R517_bVk), published 2023-02-08 — method at 2:56 and longer-prototype example around 19:30.
- [Shipping side projects in 2-2-2 Easy Steps — Jordi Bruin](https://www.youtube.com/watch?v=lDsIaAZF--U) — alternate conference recording. Project gates and resizing results are original illustrations.
