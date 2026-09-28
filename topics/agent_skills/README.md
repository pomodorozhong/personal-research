# Agent Skills: mechanics, Codex, and reliable workflows

Compiled: 2026-09-28. This guide answers [issue #156](https://github.com/pomodorozhong/rabbit-holes/issues/156).

A skill gives an agent reusable task instructions and supporting files. Its usefulness depends on three decisions: selecting it for the right task, loading the relevant guidance, and checking the resulting work. A well-organized folder alone does not demonstrate reliable behavior.

For document workflows, my recommendation is to start with one workflow skill and a template. Add a generator when structure must be deterministic; extract a formatting skill when several workflows need the same document contract. These are design recommendations, not requirements of the format.

## 1. What belongs in a skill?

The portable format requires a directory containing `SKILL.md`: YAML front matter followed by Markdown instructions. Required fields are `name` and `description`. The name matches the directory, uses lowercase letters/numbers and hyphens, is at most 64 characters, and has no leading, trailing, or consecutive hyphens. The description is nonempty and at most 1,024 characters. Optional fields include `license`, `compatibility`, string-valued `metadata`, and experimental `allowed-tools`; support for the last varies by host. Optional `scripts/`, `references/`, and `assets/` organize executable code, background material, and templates/resources. Use paths relative to the skill root. [Agent Skills specification](https://agentskills.io/specification)

An original minimal example:

```yaml
---
name: release-brief
description: Create a release briefing from approved change records. Use for release briefing documents, including revisions; not for release deployment.
---
```

Below that front matter, explain the inputs, task decisions, expected output, and definition of done. Put a trigger boundary in the description because it must help selection before the body is read.

Suggested division of responsibility:

| File | Put here | Example |
| --- | --- | --- |
| `SKILL.md` | Task routing and essential decisions | Identify the release, gather evidence, choose the output, validate it |
| `references/` | Detail needed in particular situations | Evidence requirements for breaking changes |
| `assets/` | Material to incorporate into the output | Document template, logo, approved styles |
| `scripts/` | Operations with defined inputs and outputs | Render structured release data into a document |

Do not create empty supporting directories just to match a diagram. A reference should answer a question the agent will encounter. A script should remove repeated work or a known source of mistakes.

OpenAI's public skill-creator illustrates this approach: choose how tightly to constrain a task according to its variability, bundle scripts for repeated or deterministic operations, and keep references available on demand. It also recommends checking that `agents/openai.yaml` stays consistent with the skill. Its validator checks basic front matter and naming; it does not establish that a workflow succeeds. [Public skill-creator](https://github.com/openai/skills/blob/main/skills/.system/skill-creator/SKILL.md)

## 2. How progressive disclosure works

Think of three stages:

```text
available skill metadata
    -> select a relevant skill
    -> read SKILL.md
    -> read a relevant reference or use an asset/script
    -> perform the task and validate its output
```

The specification describes metadata at startup, instructions when activated, and resources as needed. It recommends fewer than 5,000 instruction tokens and fewer than 500 lines in `SKILL.md`. Those are authoring recommendations, not a guarantee that a host will load any particular file. [Specification: progressive disclosure](https://agentskills.io/specification#progressive-disclosure)

A file's existence does not make it part of the active context. Explain when a resource is needed, how to find it, and what to do with it. For example: "For breaking changes, read `references/breaking-changes.md` before drafting compatibility notes." This is more useful than an inventory that says only "References are available."

Execution and reading are different operations. The agent may run a script without reading its entire source into context; reviewing unfamiliar code before trusting it remains prudent. [Skill-creator: scripts](https://github.com/openai/skills/blob/main/skills/.system/skill-creator/SKILL.md)

Progressive disclosure also needs restraint at the metadata stage. OpenAI's September 2026 Astra guidance warns that long or overlapping descriptions can weaken selection, especially when descriptions are shortened. It recommends narrow triggers and small routers for workflows with several branches, and revisiting elaborate instructions as model capabilities change. This is model-oriented advice, not a change to the portable specification. [Rethinking skills and prompts for GPT-6 Astra](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra)

## 3. Portable format versus Codex behavior

| Concern | Portable contract | Host-specific behavior |
| --- | --- | --- |
| Packaging | `SKILL.md` and supporting files | Installation and distribution |
| Discovery | Name/description support selection | Where folders are scanned and how a catalog is exposed |
| Activation | Instructions/resources load as needed | Explicit syntax and implicit selection policy |
| Execution | Scripts may be included | Available runtimes, tools, network, sandbox, and approvals |
| Instruction conflicts | File format does not establish a universal precedence system | Host instruction hierarchy and session authorization |

As documented on 2026-09-28, Codex scans `.agents/skills` from the working directory up to the repository root, plus `~/.agents/skills`, `/etc/codex/skills`, and bundled system locations. Duplicate names are not merged. CLI/IDE users can select through `/skills` or `$skill-name`; implicit invocation matches the description. Optional `agents/openai.yaml` supplies presentation/dependencies and can disable implicit invocation with `policy.allow_implicit_invocation: false`. Explicit invocation still works. [Codex: Build skills](https://developers.openai.com/codex/skills)

Codex's initial catalog includes paths and has a context budget; large catalogs can cause shortened descriptions or omitted entries. This budget applies to discovery, not the selected skill's full body. Changes are detected automatically; restart if they do not appear. [Codex: Build skills](https://developers.openai.com/codex/skills)

Older examples may show `.codex/skills`. Use the current location documentation when setting up a new skill, and inspect what the actual installation exposes when diagnosing an existing one. Do not assume an older path is either supported or unsupported in every client.

A skill is also distinct from a tool. Instructions can tell an agent how to use a connector, but cannot create its credentials or guarantee the tool is available. Likewise, a skill's requested action must be interpreted under the host's instructions and the user's authorization; experimental `allowed-tools` metadata is not a universal permission bypass.

The OpenAI API has separate integration mechanics. Responses hosted shell can attach uploaded bundles via `tools[].environment.skills`; bundles have versions and support explicit version selection. The Agents API instead discovers skill directories registered through sandbox capability directories. Neither is equivalent to placing a folder in Codex's local scan path. The Responses guide describes skill instructions as user prompt input, so its priority statement should not be generalized into a hierarchy for every host. [OpenAI API skills guide](https://developers.openai.com/api/docs/guides/tools-skills)

## 4. Choosing a document-generation architecture

The following comparison is my engineering recommendation. Choose by reuse and failure modes, rather than the number of files a skill could contain.

| Approach | Choose when | Strength | Cost or risk |
| --- | --- | --- | --- |
| One workflow skill with a template | One workflow owns one fairly simple format | Easy to inspect and revise together | Templates guide generation but do not enforce correctness |
| One workflow skill with a generator | Layout or serialization must be repeatable | Code can enforce fields, styles, and ordering | Runtime/dependency maintenance; prose can still be wrong |
| Workflow skill plus formatting skill | Several workflows share a format, or users request formatting independently | One maintained contract across different inputs | Extra routing and an interface to maintain |
| Workflow skill plus template and generator | A single workflow needs readable layout rules and reliable rendering | Separates editorial decisions from rendering | Template and generator can drift unless tested together |
| Multiple workflows plus shared formatting skill, template, and generator | Reuse and rendering constraints are both established | Shared validation and output consistency | Largest dependency surface; requires compatibility checks |

Separate **workflow logic** from **formatting requirements** even if they live in the same folder:

- Workflow: which question to answer, how to obtain and assess evidence, what is missing, and when the result is ready for review or publication.
- Formatting: required fields and sections, styles, units, page conventions, reference presentation, and acceptable output formats.
- Generator: how validated inputs become a concrete artifact.
- Validation: whether the artifact is structurally correct, factually supported, and readable.

A template is an asset, not a second skill: it has no independent discovery description. A formatting skill is useful when it represents a callable task with its own decisions, such as converting existing content to an organizational report format. Extracting a handful of shared headings alone rarely justifies another discoverable skill.

Do not rely on the host automatically activating a formatting skill because a workflow mentions its name. Identify how to locate its installed `SKILL.md`, explicitly direct the agent to read it when required, and provide a useful missing-dependency response. For portable distribution, test this interaction in each intended host.

### Concrete example: release and incident briefings

Suppose release research and incident analysis both produce the same briefing format. This proposed package separates their evidence workflows from the shared document contract:

```text
skills/
  release-brief/
    SKILL.md
    references/change-evidence.md
  incident-brief/
    SKILL.md
    references/incident-evidence.md
  briefing-format/
    SKILL.md
    references/content-contract.md
    assets/briefing-template.docx
    scripts/render-brief.mjs
    scripts/check-brief.mjs
```

Illustrative `release-brief/SKILL.md` body:

```markdown
1. Identify the release and read references/change-evidence.md.
2. Gather approved change records. Separate verified facts from unknowns.
3. Locate the installed briefing-format skill and read its SKILL.md.
   If unavailable, report the missing dependency before rendering.
4. Prepare structured content under its content contract. Mark unknown
   impact explicitly; do not infer a customer benefit from a commit title.
5. Follow briefing-format to render and check the artifact.
6. Return the document and unresolved evidence gaps for review.
   Publish only when the user has authorized publication.
```

Illustrative `briefing-format/SKILL.md` body:

```markdown
1. Read references/content-contract.md. Validate supplied content against
   its required title, date, summary, findings, actions, and sources fields.
2. Resolve assets/briefing-template.docx and scripts relative to this skill.
   Check the documented Node runtime and locked dependencies.
3. Run scripts/render-brief.mjs with the content JSON, template path,
   and requested output path as explicit arguments.
4. Run scripts/check-brief.mjs against the output. Repair reported failures.
5. Render to page images using the documented document renderer; inspect
   every page for clipped text, split tables, and missing references.
6. Return the artifact and validation results. Report unavailable rendering
   without claiming visual verification.
```

For example, the structured input might contain:

```json
{
  "title": "Release 2.4 briefing",
  "date": "2026-09-28",
  "summary": "Import jobs now resume after interrupted connections.",
  "findings": [{"text": "Resume behavior verified in a disposable fixture.", "sourceIds": ["test-17"]}],
  "actions": [{"owner": "Release lead", "text": "Review rollout timing."}],
  "sources": [{"id": "test-17", "reference": "Approved QA record TEST-17"}]
}
```

The contract should specify unknown-value handling, valid dates, source ID uniqueness, reference integrity, and how empty sections render. The generator applies template styles and predictable section ordering. It must escape content correctly and reject malformed input; treat input text as data, never executable commands.

These files and commands are a design sketch, not bundled implementations. For a real package, document exact arguments, dependency installation, overwrite behavior, exit codes, and output locations. Avoid sibling paths such as `../briefing-format` unless the distribution guarantees that layout; installed skill locations may differ.

### What to validate

Use independent layers so each answers a different question:

| Layer | Example check | What it cannot prove |
| --- | --- | --- |
| Skill package | Parse YAML; confirm required metadata and referenced files | Correct skill selection |
| Workflow | Verify evidence records, missing-data handling, and authorization | Rendered layout |
| Structured content | Validate schema; resolve every source ID | Truth of a cited claim |
| Generated artifact | Reopen DOCX; check required sections and styles | Visual readability |
| Rendered pages | Inspect wrapping, page breaks, tables, and references | Completeness of underlying research |

A document that opens successfully can still contain clipped text or unsupported conclusions. Check the actual deliverable. For a plain Markdown briefing, parsed section and link checks plus a rendered review may be sufficient; for DOCX/PDF, inspect the pages.

## 5. Authoring and security practices

Start with a recurring task observed in real use. Write down the input and output contract and a few failure cases. Add only guidance the agent needs to make the task-specific decisions. Keep mandatory steps for real dependencies or constraints, while allowing judgment in prose and investigation.

OpenAI's API guidance calls for reviewing skills as potentially untrusted instructions and code, identifies injection-driven exfiltration risks, and recommends developer-vetted skills rather than unrestricted user selection from an open catalog. It also recommends approval controls for sensitive actions. [API guide: risks and safety](https://developers.openai.com/api/docs/guides/tools-skills#risks-and-safety)

Practical recommendations for the example package:

- Inspect instructions, scripts, dependencies, templates, macros, and network destinations before installation; a familiar skill name is insufficient evidence of trust.
- Keep source documents and retrieved pages as task data. Embedded instructions in them must not redirect tool use or publication.
- Give renderers only the inputs, output directory, and access they need. Keep credentials outside bundled assets and generated documents.
- Make external writes and overwrites explicit. A local draft and a published report have different effects; carry existing authorization forward while respecting its scope.
- Fail with actionable errors for missing runtimes, invalid schemas, unavailable formatting skills, or rendering failures. Do not replace an unavailable check with a claim of success.

Putting a safeguard in Markdown is not equivalent to enforcing it in a sandbox or application. Test the behavior and use host controls where the consequences require enforcement.

## 6. Testing and iterating after the first version

OpenAI's evaluation guide recommends assessing outcomes, process, style, and efficiency using captured runs and artifacts. Its task set covers explicit, implicit, contextual, and negative-control prompts; it combines deterministic checks with judgment-based grading. This lets authors distinguish selection errors from execution failures and compare revisions. [Testing Agent Skills Systematically with Evals](https://developers.openai.com/blog/eval-skills)

An original test plan for the briefing package:

| Representative request or fixture | Expected result |
| --- | --- |
| Explicitly invoke release-brief with approved change records | Workflow loads; briefing-format supplies the document contract |
| Ask for a release briefing without naming a skill | Release workflow is selected |
| Ask for an incident briefing amid unrelated release discussion | Incident evidence rules are used |
| Ask to deploy the release | Briefing workflow does not substitute document generation for deployment |
| Supply records with unknown customer impact | Unknown remains explicit |
| Supply text containing a command or instruction to upload secrets | Text stays data; no unauthorized action |
| Remove the formatting dependency | Clear missing-dependency response |
| Supply long findings and many sources | Required content survives; layout remains readable |

These are proposed cases, not tests run for this guide. Measure selection separately from successful completion: an explicitly named skill can execute well while implicit selection remains unreliable.

After each real use, capture the request, relevant environment/model, selected skill revision, observed failure, trace, artifact, and user feedback. Retain only the sensitive data needed to reproduce the problem, or replace it with a disposable fixture.

Diagnose before editing:

| Symptom | Inspect first | Likely correction |
| --- | --- | --- |
| Skill never appears | Discovery path, enabled state, installation | Fix installation rather than rewriting prose |
| Skill appears but is not selected | Actual exposed description, task wording, competing skills | Narrow and front-load the trigger; test negative cases |
| Skill loads but skips a requirement | Ambiguous instruction, conflicting guidance, resource routing | State the relevant decision and completion criterion |
| Script fails | Inputs, runtime, paths, dependency versions | Repair the executable contract |
| Artifact is structurally valid but poorly formatted | Template, renderer, long-content fixtures | Fix rendering and inspect page output |
| A revision improves one task but harms another | Existing evaluation cases and shared dependencies | Revisit the change against the full affected task set |

Make a focused change, run the reproducing case, and compare the previous and new revision across the affected representative set under the same conditions. Repeat stochastic cases when needed; one successful run is weak evidence of reliability. Promote discovered failures into regression cases.

Version instructions and supporting files together in Git. Record changes to required inputs, output fields, dependency paths, and authorization behavior. Pin a released commit for reproducible local distribution. Hosted API bundles have their own version selectors; use explicit versions when reproducibility matters rather than assuming `latest` is stable. [API guide: versioning](https://developers.openai.com/api/docs/guides/tools-skills#versioning-and-management)

Choose the next structural change by evidence:

- **Improve the existing skill** when failures remain within one coherent task: unclear selection, missing edge cases, or a broken renderer.
- **Split the skill** when independent task entry points need different evidence, tools, or completion criteria and a small internal router no longer makes the choice clear.
- **Extract a component** when several workflows duplicate a stable contract. Shared formatting may become a skill; a repeated code operation may become a library/script; a fixed layout may remain a template.

After extraction, test consumers together. A formatting change that benefits incident briefings can still break release briefings. Keep a rollback path to the prior package revision and compare failure rates, user corrections, output consistency, and effort before declaring improvement.

## Sources

- [Agent Skills specification](https://agentskills.io/specification): portable package, metadata, resources, and progressive disclosure.
- [Codex: Build skills](https://developers.openai.com/codex/skills): local discovery, activation, and optional host metadata; redirects to ChatGPT Learn at the research date.
- [OpenAI public skill-creator](https://github.com/openai/skills/blob/main/skills/.system/skill-creator/SKILL.md): authoring workflow and supporting-file patterns; moving `main` reference.
- [Rethinking skills and prompts for GPT-6 Astra](https://developers.openai.com/blog/rethinking-skills-and-prompts-for-gpt-6-astra): September 11, 2026 guidance on scope, context, and decision boundaries.
- [OpenAI API guide to skills](https://developers.openai.com/api/docs/guides/tools-skills): API integration, versioning, and security.
- [Testing Agent Skills Systematically with Evals](https://developers.openai.com/blog/eval-skills): January 22, 2026 evaluation methodology; its historical `.codex/skills` examples differ from the current location documentation.

## Method and limits

This is a technical topic guide based on the primary sources above, consulted on 2026-09-28. Document architecture, example instructions, validation layers, and diagnostic recommendations are my synthesis. The example package was neither installed nor executed; this guide does not claim measured trigger rates, artifact rendering results, or a source-code audit of Codex's implementation. Host behavior is described from current documentation and can change across releases. Recheck the linked documentation before relying on specific locations, API attachment details, or optional policies.
