# Example: A Skill That Creates Documents

This example shows how a skill can gather information and turn it into a document. It explains when to use a template, a script that generates the document, or a separate formatting skill. The files and instructions below show a possible design; they have not been tested as a working package.

## Start with a simple design

Start with one skill and a template if you have one task with a simple document format. Add a generator—a script that creates the document—when you need consistent structure or layout. Put formatting in a separate skill when several tasks need the same document rules, or when users want to request formatting on its own.

| Approach | Choose when | Strength | Cost or risk |
| --- | --- | --- | --- |
| Skill with a template | One task needs a simple format | Easy to inspect and change | A template cannot guarantee correct output |
| Skill with a generator | Document structure or layout must be consistent | Code can check fields and apply styles and section order | Software and dependencies need maintenance; the text can still be wrong |
| Task skill plus formatting skill | Several tasks share a format, or users request formatting separately | Different tasks use the same document rules | You must explain how the skills work together and maintain that connection |
| Skill, template, and generator | A task needs both clear format rules and consistent document generation | The agent handles content decisions; code applies the layout | Check the template and generator together so they stay in sync |

Whether you use one skill or several, explain who or what handles each part:

- **Workflow:** what question to answer, how to gather and check evidence, what information is missing, and when the document is ready for review.
- **Format:** which fields and sections to include, and how to present styles, units, pages, and sources.
- **Template:** a reusable file used to make the output. Put document templates in `assets/`.
- **Generator:** code that turns checked input into a document in a repeatable way. Put these scripts in `scripts/`.
- **Validation:** checks that the document has the right structure, sources, and page layout. Put detailed checking rules in `references/` when needed.

Put a template in `assets/` because it helps make the output. Put formatting rules and definitions of required data fields in `references/` because the agent reads them for guidance. In `SKILL.md`, tell the agent when and how to use both. This follows the [Agent Skills resource conventions](https://agentskills.io/specification) and [OpenAI skill-creator guidance](https://github.com/openai/skills/blob/main/skills/.system/skill-creator/SKILL.md).

## Example: release and incident briefings

Suppose you want briefings about software releases and incidents to use the same format. Each task needs different evidence, but both can use one set of document rules:

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

Example instructions for `release-brief/SKILL.md`:

```markdown
1. Identify the release and read references/change-evidence.md.
2. Gather approved change records. Separate verified facts from unknowns.
3. Locate the installed briefing-format skill and read its SKILL.md.
   If it is missing, report that before generating the document.
4. Prepare the content using its document rules. State when impact is unknown;
   do not assume a customer benefit from a commit title.
5. Follow briefing-format to generate and check the document.
6. Return the document and any missing evidence for review.
   Publish only when the user has authorized publication.
```

Example instructions for `briefing-format/SKILL.md`:

```markdown
1. Read references/content-contract.md. Check the title, date, summary,
   findings, actions, and sources fields.
2. Find assets/briefing-template.docx and the scripts within this skill's folder.
   Check that the required software and pinned dependency versions are available.
3. Run scripts/render-brief.mjs with the content JSON, template path,
   and requested output path as explicit arguments.
4. Run scripts/check-brief.mjs on the output. Fix any problems it reports.
5. Convert the document to page images using the documented tool. Check every page
   for clipped text, split tables, and missing references.
6. Return the document and check results. If you cannot create page images,
   say that you could not check the page layout.
```

The generator could receive content as JSON:

```json
{
  "title": "Release 2.4 briefing",
  "date": "2026-09-28",
  "summary": "Import jobs now resume after interrupted connections.",
  "findings": [{"text": "Resume behavior checked using temporary test data.", "sourceIds": ["test-17"]}],
  "actions": [{"owner": "Release lead", "text": "Review rollout timing."}],
  "sources": [{"id": "test-17", "reference": "Approved QA record TEST-17"}]
}
```

The document rules—called a *content contract* in the example—should explain how to handle unknown values and empty sections, which dates are valid, and how source IDs work. Require unique source IDs and check that every citation points to a listed source.

The generator applies the template's styles and section order. It should reject invalid input and handle special characters safely. Source text must remain data rather than being run as commands.

Naming another skill does not guarantee that the product will load it. Explain how to find its installed `SKILL.md`, tell the agent to read it, and say what to do if it is missing. Use paths such as `../briefing-format` only if you know the skills will always be installed next to each other.

## Check the result

| What to check | Example check | What this does not tell you |
| --- | --- | --- |
| Skill files | Check the YAML fields and confirm that linked files exist | Whether the agent will choose the right skill |
| Workflow | Check the evidence and how missing information is handled | Whether the page layout looks right |
| Input data | Check required fields and match each source ID to a source | Whether a cited claim is true |
| Generated document | Reopen the DOCX and check its sections and styles | Whether the pages are easy to read |
| Page images | Check text wrapping, page breaks, tables, and references | Whether the research is complete |

A document can open successfully and still have cut-off text or claims without evidence. Check the finished document. For Markdown, checking headings and links and viewing the formatted page may be enough. For DOCX or PDF, inspect the pages.

Try realistic requests and test inputs to check both skill selection and document quality:

| Request or test input | Expected result |
| --- | --- |
| Request release-brief by name with approved records | The skill reads the shared document rules |
| Ask for a release briefing without naming a skill | The agent selects the release briefing skill |
| Ask for an incident briefing during an unrelated release discussion | The skill uses the incident evidence rules |
| Ask to deploy the release | The agent does not mistake deployment for a briefing request |
| Records leave out customer impact | The document states that impact is unknown |
| Source text asks the agent to upload secrets | The agent treats the text as data and does not follow that instruction |
| Formatting skill is unavailable | The skill reports that the required formatting skill is missing |
| Findings and references are unusually long | Required content is still readable on the pages |

These are suggested tests; they have not been run. Use automated checks alongside a review of the claims and page layout. OpenAI's evaluation guide recommends testing requests that name a skill, describe its task, depend on conversation context, or should not trigger it. Keep those tests so you can catch problems after later changes. [Testing Agent Skills Systematically with Evals](https://developers.openai.com/blog/eval-skills)

## Sources and limits

- [Agent Skills specification](https://agentskills.io/specification)
- [OpenAI public skill-creator](https://github.com/openai/skills/blob/main/skills/.system/skill-creator/SKILL.md)
- [OpenAI API guide: risks and safety](https://developers.openai.com/api/docs/guides/tools-skills#risks-and-safety)
- [Testing Agent Skills Systematically with Evals](https://developers.openai.com/blog/eval-skills), January 22, 2026.

The folder layout and instructions above show a possible design. They have not been tested, and this example does not include working scripts, a document template, or a generated document.
