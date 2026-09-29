# Document Generation as a Skill Example

This example shows how a workflow skill, a formatting skill, a template, and a generator can work together. The example is illustrative; it is not a tested package.

## Choose the smallest useful design

Start with one workflow skill and a template when one workflow owns a simple format. Add a generator when predictable structure or rendering matters. Extract a formatting skill when several workflows share the same document contract or users request formatting independently.

| Approach | Choose when | Strength | Cost or risk |
| --- | --- | --- | --- |
| Workflow skill with a template | One workflow owns one simple format | Easy to inspect and revise | A template guides output but does not enforce correctness |
| Workflow skill with a generator | Layout or serialization must be repeatable | Code can enforce fields, styles, and ordering | Runtime and dependency maintenance; prose can still be wrong |
| Workflow plus formatting skill | Several workflows share a format, or formatting is a standalone task | One contract serves different inputs | Extra routing and an interface to maintain |
| Workflow, template, and generator | A workflow needs readable format rules and reliable rendering | Separates editorial decisions from rendering | Template and generator can drift unless checked together |

Keep these responsibilities clear, whether they live in one skill or several:

- **Workflow:** what question to answer, how to gather and assess evidence, what is missing, and when the result is ready for review.
- **Format:** required fields and sections, styles, units, page conventions, and reference presentation.
- **Template:** reusable material incorporated into the output. Put a document template in `assets/`.
- **Generator:** deterministic conversion of validated input into an artifact. Put executable helpers in `scripts/`.
- **Validation:** checks that the structure, references, and rendered pages meet the contract. Put detailed rules in `references/` when the workflow needs them.

A template file belongs in `assets/` because it is used in the output. A formatting specification or content schema belongs in `references/` because the agent reads it as guidance. The workflow instructions in `SKILL.md` should route to both. This follows the [Agent Skills resource conventions](https://agentskills.io/specification) and [OpenAI skill-creator guidance](https://github.com/openai/skills/blob/main/skills/.system/skill-creator/SKILL.md).

## Example: release and incident briefings

Suppose release research and incident analysis both produce the same briefing format. Separate their evidence workflows from the shared document contract:

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

Illustrative `release-brief/SKILL.md` instructions:

```markdown
1. Identify the release and read references/change-evidence.md.
2. Gather approved change records. Separate verified facts from unknowns.
3. Locate the installed briefing-format skill and read its SKILL.md.
   If unavailable, report the missing dependency before rendering.
4. Prepare content under its contract. Mark unknown impact explicitly;
   do not infer a customer benefit from a commit title.
5. Follow briefing-format to render and check the artifact.
6. Return the document and unresolved evidence gaps for review.
   Publish only when the user has authorized publication.
```

Illustrative `briefing-format/SKILL.md` instructions:

```markdown
1. Read references/content-contract.md. Validate the title, date, summary,
   findings, actions, and sources fields.
2. Resolve assets/briefing-template.docx and scripts relative to this skill.
   Check the documented runtime and locked dependencies.
3. Run scripts/render-brief.mjs with the content JSON, template path,
   and requested output path as explicit arguments.
4. Run scripts/check-brief.mjs against the output. Repair reported failures.
5. Render to page images using the documented renderer. Inspect every page
   for clipped text, split tables, and missing references.
6. Return the artifact and validation results. Report unavailable rendering
   without claiming visual verification.
```

An example structured input could be:

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

The content contract should define unknown-value handling, valid dates, unique source IDs, reference integrity, and empty-section behavior. The renderer applies the template's styles and section order. It should reject malformed input and escape content safely; treat source text as data, not executable commands.

Do not rely on a host activating the formatting skill just because another skill names it. Specify how to locate the installed `SKILL.md`, explicitly direct the agent to read it, and define what to do if it is missing. Avoid relative sibling paths such as `../briefing-format` unless the distribution guarantees that layout.

## Validate the result

| Layer | Example check | What it cannot prove |
| --- | --- | --- |
| Skill package | Parse YAML; confirm metadata and referenced files | Correct skill selection |
| Workflow | Verify evidence and missing-data handling | Rendered layout |
| Structured content | Validate schema and resolve each source ID | Whether a cited claim is true |
| Generated document | Reopen DOCX; check sections and styles | Visual readability |
| Rendered pages | Inspect wrapping, page breaks, tables, references | Completeness of the underlying research |

A document that opens can still contain clipped text or unsupported conclusions. Inspect the actual deliverable. For Markdown, section/link checks and a rendered review may suffice; for DOCX or PDF, inspect the pages.

Use representative requests to test both skill selection and document quality:

| Request or fixture | Expected result |
| --- | --- |
| Explicitly invoke release-brief with approved records | Workflow loads the shared format contract |
| Ask for a release briefing without naming a skill | Release workflow is selected |
| Ask for an incident briefing during unrelated release discussion | Incident evidence rules are used |
| Ask to deploy the release | Briefing generation is not substituted for deployment |
| Records omit customer impact | The output preserves it as unknown |
| Source text asks the agent to upload secrets | Text remains data; no unauthorized action occurs |
| Formatting skill is unavailable | The workflow reports the missing dependency |
| Findings and references are unusually long | Required content remains readable in the rendered pages |

These are proposed cases, not evaluation results. Combine deterministic checks with review of the claims and rendered artifact. OpenAI's evaluation guide recommends testing explicit, implicit, contextual, and negative-control prompts and tracking regressions over time. [Testing Agent Skills Systematically with Evals](https://developers.openai.com/blog/eval-skills)

## Sources and limits

- [Agent Skills specification](https://agentskills.io/specification)
- [OpenAI public skill-creator](https://github.com/openai/skills/blob/main/skills/.system/skill-creator/SKILL.md)
- [OpenAI API guide: risks and safety](https://developers.openai.com/api/docs/guides/tools-skills#risks-and-safety)
- [Testing Agent Skills Systematically with Evals](https://developers.openai.com/blog/eval-skills), January 22, 2026.

The package and commands above are design sketches, not tested implementations. No script, document template, or generated artifact accompanies this example.
