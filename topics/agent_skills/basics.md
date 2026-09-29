# Agent Skills Basics

Compiled 2026-09-28; Codex behavior and product details checked against current documentation on 2026-09-29.

## What belongs in a skill?

The portable format requires a directory with one `SKILL.md`: YAML front matter followed by Markdown instructions. Required fields are `name` and `description`. The name matches the directory, uses lowercase letters, numbers, and hyphens, is at most 64 characters, and has no leading, trailing, or consecutive hyphens. The description is nonempty and at most 1,024 characters. Optional fields include `license`, `compatibility`, string-valued `metadata`, and experimental `allowed-tools`; support for the last varies by host. [Agent Skills specification](https://agentskills.io/specification)

```yaml
---
name: release-brief
description: Create a release briefing from approved change records. Use for release briefing documents, including revisions; not for release deployment.
---
```

Below the front matter, state the inputs, the decisions that matter, the expected output, and how to tell when it is complete. Keep the description narrow enough to select this skill for the intended task.

| Directory | Use it for | Example |
| --- | --- | --- |
| `references/` | Focused guidance the agent reads when needed | Evidence requirements for breaking changes |
| `assets/` | Files copied or adapted into generated work | A document template, logo, or approved styles |
| `scripts/` | Repeatable operations where deterministic behavior helps | Rendering structured release data |

An asset can be a template, but it does not replace the instructions for when or how to use it. A reference explains a rule; an asset is material used in the output. Avoid empty directories and resources that do not help complete a real task. [OpenAI public skill-creator](https://github.com/openai/skills/blob/main/skills/.system/skill-creator/SKILL.md)

## Progressive disclosure

Skills can be understood in three stages:

```text
available name and description
    -> select the skill
    -> read SKILL.md
    -> read or use only the supporting files the task needs
```

The specification describes metadata at startup, instructions when a skill is activated, and supporting files as needed. It recommends keeping `SKILL.md` below 500 lines and moving conditional detail to focused references. These are format recommendations; each host controls discovery and loading. [Specification: progressive disclosure](https://agentskills.io/specification#progressive-disclosure)

A file's presence alone does not load its content. Route to it where it becomes relevant: "For breaking changes, read `references/breaking-changes.md` before drafting compatibility notes." Keep descriptions concise and distinct. OpenAI's September 2026 Astra guidance warns that long or overlapping descriptions can weaken selection, and recommends narrow triggers and small routers for workflows with several branches. This is model-oriented advice, not a change to the portable format. [Rethinking skills and prompts for GPT-6 Astra](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra)

## Portable format and Codex behavior

| Concern | Portable format | Host-specific behavior |
| --- | --- | --- |
| Package | `SKILL.md` with optional files | Installation and distribution |
| Discovery | Name and description help select a skill | Search locations and catalog behavior |
| Activation | Instructions and resources are available as needed | Explicit syntax and implicit selection policy |
| Execution | A package may include scripts | Available tools, runtime, network, sandbox, and approvals |

As documented on 2026-09-29, Codex discovers repository skills from `.agents/skills` between the working directory and repository root, along with user, administrator, and bundled system locations. Its user path is `~/.agents/skills`. Duplicate skill names are not merged. Codex supports `$skill-name` and `/skills`, plus implicit selection based on the description. Optional `agents/openai.yaml` can provide UI metadata and invocation policy. [Codex: Build skills](https://developers.openai.com/codex/skills)

The initial Codex skill catalog has a context budget; long descriptions can be shortened and large catalogs can omit entries. This budget applies to discovery, not the selected skill's full instructions. Older examples may show `.codex/skills`; check the current location documentation for the product version in use.

OpenAI API integrations use different loading mechanisms. Responses hosted shell can attach uploaded bundles through `tools[].environment.skills` and select bundle versions. Agents API sessions discover directories registered through sandbox capability directories. These mechanisms are separate from Codex's local scan paths. The Responses guide describes its skill instructions as user prompt input; do not generalize its priority statement to other hosts. [OpenAI API guide to skills](https://developers.openai.com/api/docs/guides/tools-skills)

A skill also cannot create a tool, credential, or host permission. `allowed-tools` is experimental and is not a universal permission bypass.

## Authoring, security, and iteration

Start with a recurring task observed in real use. Define its inputs, outputs, and likely failure cases. Add only guidance that changes the agent's decisions. Keep essential constraints clear while allowing judgment where several approaches are valid.

Treat skill instructions, scripts, dependencies, templates, and network destinations as code to review. OpenAI's API guidance describes prompt-injection and data-exfiltration risks, recommends developer-vetted skills, and calls for approval controls on sensitive actions. Keep retrieved documents as data, limit script access, and do not put credentials in a skill or its generated output. A Markdown warning is not a substitute for sandbox or application enforcement. [API guide: risks and safety](https://developers.openai.com/api/docs/guides/tools-skills#risks-and-safety)

When improving a skill, capture the prompt, relevant environment, selected revision, trace, artifact, and observed failure. Use disposable fixtures or redact sensitive data. Test selection as well as execution: include explicit invocation, realistic implicit requests, contextual requests, and adjacent requests that should not trigger the skill. Combine deterministic checks with judgment-based review. OpenAI's evaluation guide separates outcome, process, style, and efficiency goals and recommends adding observed failures as regression cases. [Testing Agent Skills Systematically with Evals](https://developers.openai.com/blog/eval-skills)

Diagnose the failure before changing the skill:

| Symptom | Check first |
| --- | --- |
| Skill does not appear | Discovery path, installation, enabled state |
| Skill appears but does not activate | Exposed description and competing skills |
| Skill activates but skips a requirement | Ambiguous instruction, conflicting guidance, or missing resource route |
| Script fails | Inputs, runtime, paths, and dependency versions |
| Artifact is correct structurally but hard to read | Template, renderer, and long-content cases |

Make a focused change and compare the affected representative cases under the same conditions. Repeat stochastic cases when useful; one successful run is weak evidence of reliability. Keep skill instructions and supporting files under version control together. Improve a skill when failures are within one task, split it when independent workflows need different rules, and extract a shared component when several workflows depend on the same stable contract.

## Sources and limits

- [Agent Skills specification](https://agentskills.io/specification)
- [Codex: Build skills](https://developers.openai.com/codex/skills)
- [OpenAI public skill-creator](https://github.com/openai/skills/blob/main/skills/.system/skill-creator/SKILL.md), a moving `main` reference.
- [Rethinking skills and prompts for GPT-6 Astra](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra), September 11, 2026.
- [OpenAI API guide to skills](https://developers.openai.com/api/docs/guides/tools-skills)
- [Testing Agent Skills Systematically with Evals](https://developers.openai.com/blog/eval-skills), January 22, 2026. Its historical `.codex/skills` examples differ from current Codex location documentation.

This page summarizes primary sources checked on 2026-09-28 and 2026-09-29. Host behavior can change across releases. The recommendations are a synthesis, not a source-code audit of Codex.
