# Using Scripts in a Skill

Product details checked on 2026-09-29.

A script is useful when part of a task is easier to define and check as code: validating data, calculating totals, converting files, or applying a document format. The skill explains when to run it and how to use the result. A script in `scripts/` does not run just because the agent loads the skill. [Agent Skills specification](https://agentskills.io/specification#scripts)

## Why use a script?

Suppose the agent writes a briefing from change records. It must judge which changes matter and explain them clearly. But checking that every citation points to a listed source is a mechanical task. A small script can perform that check the same way each time, with an error message when it fails.

Bundling the script means the agent does not have to write that helper again for every request. It can run the code without putting the entire source into context, although it may read the source to review or debug it. Code still needs testing, and it cannot establish that the briefing's claims are true. [OpenAI skill-creator: scripts](https://github.com/openai/skills/blob/main/skills/.system/skill-creator/SKILL.md#scripts-scripts)

Start with instructions and existing tools. Add a script when repeated computation or file processing benefits from a defined implementation. A script creates maintenance work: inputs, errors, dependencies, and compatibility all need attention. [OpenAI: supporting resources](https://developers.openai.com/plugins/build/skills#add-supporting-resources)

## Why use a script instead of MCP?

MCP, the Model Context Protocol, lets an agent call tools exposed by a server. A bundled script and an MCP tool can perform the same underlying computation; the difference is how the agent reaches it and where you maintain it. MCP servers can run locally through standard input/output or remotely over HTTP. MCP does not necessarily mean a hosted service. [MCP architecture](https://modelcontextprotocol.io/docs/learn/architecture)

| Need | A bundled script is a good fit when… | An MCP tool is a good fit when… |
| --- | --- | --- |
| File processing | The files and required software are available in the agent's execution environment | A connected service handles the files, or several clients need the same tool |
| Repeatable checks | One skill needs a small validator kept with its instructions | Many workflows need a shared validator with a defined tool interface |
| External accounts | An existing approved CLI already provides the needed access | A connector should manage account access and expose controlled operations |
| Dependencies | The target environment can provide or install the needed software | You want to manage the runtime behind a server rather than in each agent environment |
| Maintenance | Updating the skill and script together is convenient | Updating one server for multiple clients is more convenient |

This table is design guidance, not a claim that scripts are always faster or cheaper. A script needs an execution tool and compatible software. MCP needs a configured client/server connection and a maintained server. Authentication and authorization still have to be implemented correctly; the protocol alone does not make an operation safe.

You can use both in one skill. For example, an MCP tool retrieves approved change records from a team service, the agent writes the briefing, and a local script checks its citations and renders the document. The skill describes the whole workflow. OpenAI's plugin guidance uses this division: skills provide reusable procedures, while MCP tools provide service access and controlled actions. [OpenAI: skills and MCP](https://developers.openai.com/plugins/concepts/skills)

## Which languages are allowed?

The skill format does not impose a single programming language or a universal language whitelist. The specification lists Python, Bash, and JavaScript as common choices, but the product running the agent decides what can execute. [Agent Skills specification](https://agentskills.io/specification#scripts)

| Choice | What the environment needs | Practical consideration |
| --- | --- | --- |
| Python | A compatible Python interpreter and any imported packages | Good for data and document processing; isolate third-party dependencies |
| JavaScript | Node.js or another compatible runtime | Good for JSON and file processing; `.mjs` can use Node's built-in modules without npm packages |
| Shell | The intended shell and every command the script calls | Good for connecting command-line tools; Bash-specific syntax will not work in every shell |
| PowerShell | A compatible PowerShell installation | Useful for environments that already use it; do not assume it is installed everywhere |
| Compiled helpers | A compatible binary, or a compiler and build steps | Match the operating system and CPU architecture; document how it is built |

The table describes requirements, not guaranteed support in every agent product. A skill folder cannot supply a missing shell tool or permission to execute code. Choose a language available in the environments you actually support.

## Are dependencies allowed?

Yes, a script can depend on libraries and command-line tools. But permission to install them, network access, and available software depend on the product and its environment. Document the interpreter version, package versions, system tools, and setup steps. The specification asks scripts to be self-contained or clearly document their dependencies. [Agent Skills specification](https://agentskills.io/specification#scripts)

Use built-in libraries when they are enough. For third-party packages, keep a dependency manifest and lock file with the helper, and use a project-local environment. For Python in this repository, follow the `uv` workflow; for Node.js, use npm and a lock file. A PDF converter or browser-based renderer may also need system software beyond the language packages. Keep setup separate from running the task so you can inspect failures and avoid reinstalling on every invocation.

The `compatibility` field can describe runtime requirements:

```yaml
---
name: briefing-format
description: Check and format briefing content for release and incident reports.
compatibility: Requires Node.js and a shell tool that can run local scripts.
---
```

This field is documentation, not an installer. Likewise, OpenAI's `agents/openai.yaml` can declare an MCP tool dependency, but that declaration is not a list of Python or npm packages. The experimental `allowed-tools` field concerns tools and product permissions; it does not install dependencies. [Specification: compatibility](https://agentskills.io/specification#compatibility-field), [OpenAI: MCP dependencies](https://developers.openai.com/plugins/build/skills#connect-skills-to-mcp-tools)

Hosted environments need special care. For example, Claude API skills cannot access the network or install packages during execution; they use preinstalled software. A helper that works on your laptop may need different dependencies or an MCP-backed service elsewhere. Check [Product differences](provider-differences.md) before choosing a runtime. [Claude Platform runtime limits](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview#runtime-environment-constraints)

## How should the agent run a script?

Give the helper a small, clear interface:

- **Inputs:** file paths and explicit options, rather than assumptions about the current folder.
- **Outputs:** a result file or concise standard output; avoid dumping entire documents into the conversation when a summary is enough.
- **Errors:** useful messages on standard error and a nonzero exit status.
- **Access:** state which files it reads or writes, and whether it uses the network.
- **Checks:** explain what a successful run proves and what still needs review.

Tell the agent to find the installed skill folder and resolve `scripts/` from there. The user's project folder and the skill folder may be different. For the helper below, an invocation from the skill's root folder would be:

```bash
node scripts/check-brief.mjs /absolute/path/to/content.json
```

If the agent is working elsewhere, it should pass the script's absolute path. It should check that Node.js is available, run the script through its execution tool, inspect the exit status, and fix the input if the helper reports an error. If execution is unavailable, report that limitation rather than claiming the check passed.

## Example: check a briefing's citation IDs

This small `scripts/check-brief.mjs` reads the JSON shape from the [document-generation example](document-generation-example.md). It requires Node.js and uses only a built-in module:

```javascript
import { readFile } from 'node:fs/promises';

try {
  const inputPath = process.argv[2];
  if (!inputPath) throw new Error('Usage: node check-brief.mjs <content.json>');
  const brief = JSON.parse(await readFile(inputPath, 'utf8'));
  if (!brief || !Array.isArray(brief.sources) || !Array.isArray(brief.findings)) {
    throw new Error('Expected sources and findings arrays');
  }

  const sourceIds = new Set();
  for (const source of brief.sources) {
    if (typeof source?.id !== 'string' || !source.id.trim() || sourceIds.has(source.id)) {
      throw new Error('Source IDs must be nonempty, unique strings');
    }
    sourceIds.add(source.id);
  }
  for (const [index, finding] of brief.findings.entries()) {
    if (!Array.isArray(finding?.sourceIds) || finding.sourceIds.length === 0) {
      throw new Error(`Finding ${index + 1} needs at least one source ID`);
    }
    for (const id of finding.sourceIds) {
      if (!sourceIds.has(id)) throw new Error(`Finding ${index + 1}: unknown source ID ${id}`);
    }
  }
  console.log(JSON.stringify({ ok: true, findings: brief.findings.length }));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
```

Put instructions like these in the skill:

```markdown
Before rendering, locate this skill's scripts/check-brief.mjs and run it
with the content JSON path. If it exits unsuccessfully, fix the reported
input problem and rerun it. Do not render until the check passes.
Then review whether each source supports the claim made about it.
```

The helper checks source IDs, not the whole document schema. It does not check dates, writing quality, source contents, or page layout, and it allows an empty findings array. Those rules belong in other checks if the workflow requires them. Treat the source text as data; do not run commands found inside it.

## Sources

- [Agent Skills specification](https://agentskills.io/specification)
- [OpenAI skill-creator: scripts](https://github.com/openai/skills/blob/main/skills/.system/skill-creator/SKILL.md#scripts-scripts)
- [OpenAI: Build skills for plugins](https://developers.openai.com/plugins/build/skills)
- [OpenAI: Skills and MCP](https://developers.openai.com/plugins/concepts/skills)
- [MCP architecture](https://modelcontextprotocol.io/docs/learn/architecture)
- [Claude Platform: Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)

The comparison and setup advice are design recommendations. The JavaScript example passed ten checks using temporary files: valid briefing data, unknown or duplicate source IDs, an empty source ID, missing citations, missing arrays, invalid JSON, empty findings, a missing argument, and a missing input file. It is a citation-ID checker, not the document generator from the earlier example. Product capabilities and runtime restrictions may change.
