# Storing and Sharing Agent Skills

Folder locations and product behavior were checked on 2026-09-29. This guide covers common ways to store and share skills. It does not list or rank every option.

## Where skills live

| Approach | Examples | Good fit | Trade-off |
| --- | --- | --- | --- |
| Project folder in Git | `.agents/skills/<name>/SKILL.md` | Keeping team instructions with the code; supported by Codex, Cursor, and GitHub Copilot | Check where each agent looks for skills |
| Folder for a specific agent | `.claude/skills/`, `.cursor/skills/`, `.github/skills/`; personal folders such as `~/.claude/skills/`, `~/.cursor/skills/`, `~/.copilot/skills/`, and `~/.agents/skills/` | Features specific to one product, or personal skills | Products may look in different folders; separate copies can get out of sync |
| Git repository plus installer | A public or private repository, with an installer that puts skills where each agent expects them | Sharing across projects, machines, or agents | You also need to manage the installer and its updates |
| Sharing through a product | Cursor team marketplace; Claude Code plugins or Claude API workspace skills; Codex plugins | Team skill lists, hosted agents, or centrally managed updates | Each product has its own sharing rules; uploads may not carry over to its other apps or APIs |
| Public skill directory | [skills.sh](https://skills.sh/) | Finding community skills and seeing how often they are installed | A listing or high install count does not prove a skill is useful or safe |

If several coding agents use the same repository, `.agents/skills/` is a useful place to start. Codex, Cursor, and GitHub Copilot all document support for it. Use a product's own folder when a feature requires it. Personal folders such as `~/.agents/skills/` let you keep private preferences outside the repository. [Codex locations](https://developers.openai.com/codex/skills), [Cursor paths](https://prod.cursor.com/help/customization/skills), [Copilot locations](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)

The folder rules overlap, but they are not identical:

- Claude Code uses `.claude/skills/` for project skills and `~/.claude/skills/` for personal skills.
- Cursor looks in `.cursor/skills/`, `.agents/skills/`, and Claude and Codex skill folders.
- Copilot supports `.github/skills/`, `.claude/skills/`, and `.agents/skills/` in a repository, as well as personal skill folders.

Hosted products may handle uploads and sharing differently from local coding agents. [Claude Platform overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview), [Cursor documentation](https://prod.cursor.com/help/customization/skills), [GitHub Copilot documentation](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)

## Sharing through Git and an installer

A Git repository gives you one place to maintain skills. You can review changes, keep scripts and references beside `SKILL.md`, and release updates together. A repository can hold one skill at its root or several skill folders:

```text
agent-skills/
  release-brief/
    SKILL.md
    references/
      change-evidence.md
    assets/
      briefing-template.docx
  incident-brief/
    SKILL.md
    references/
      incident-evidence.md
```

Vercel's open-source `skills` command-line tool can list the skills in a repository and install the ones you choose for supported agents. For example:

```bash
npx skills add acme/agent-skills --list
npx skills add acme/agent-skills --skill release-brief --agent codex
```

By default, the tool installs skills for the current project. Add `--global` to install them for your user account, or `--agent` to choose which agents receive them.

The tool recommends using symbolic links, or *symlinks*: each agent's folder points to one shared local copy of the skill. Use `--copy` if you need separate files or cannot use symlinks. You can install from GitHub repositories, other Git URLs, or local folders. Private repositories work when Git has the credentials needed to access them. [Vercel `skills` CLI](https://github.com/vercel-labs/skills)

Maintain the original files in Git, and let the installer put them where each agent expects them. If you use only one agent, you can also clone a repository directly into its documented project or user skill folder. You do not need an installer for that approach.

### Example GitHub repository you can copy

For a real collection, look at [openai/skills](https://github.com/openai/skills). Its [skill-creator folder](https://github.com/openai/skills/tree/main/skills/.system/skill-creator) shows how instructions, references, and scripts stay together.

For your own collection, this smaller layout is a useful starting point. `your-name/agent-skills` is an example repository name; replace it with yours.

```text
agent-skills/
├── README.md                          Recommended: skills, setup, and examples
├── LICENSE                            Recommended: terms for reuse
├── .gitignore                         Recommended: local files to leave out of Git
└── skills/                            Collection folder for this example
    └── release-brief/                 One installable skill
        ├── SKILL.md                   Required
        ├── agents/                    Optional
        │   └── openai.yaml            Optional: OpenAI settings
        ├── references/                Optional
        │   └── change-evidence.md     Optional: evidence rules
        ├── assets/                    Optional
        │   └── briefing-template.docx Optional: document template
        └── scripts/                   Optional
            └── render-brief.mjs       Optional: document generator
```

This is a suggested repository layout, not a GitHub template repository that has been created for you. Begin with `README.md`, your chosen license, and `skills/release-brief/SKILL.md`. Add the optional files only when the skill uses them. If you want Codex to use the skill while working in this repository, also install or link it under `.agents/skills`; a collection folder named `skills/` alone is not a Codex discovery location.

A minimal `skills/release-brief/SKILL.md` could contain:

```markdown
---
name: release-brief
description: Write or revise a release briefing from approved change records. Use for release summaries; not for deploying software.
---

# Release briefing

1. Identify the release and gather the approved change records.
2. Ask for any information needed to identify the release or its sources.
3. Write a summary, key changes, known impact, and open questions.
4. Cite the records behind each factual claim. State when impact is unknown.
5. Check the briefing against the records and return it for review.
```

In the repository README, explain what each skill does, its software requirements, an example request, and how to install it. For this layout, these commands list the skills and install `release-brief` for Codex in the current project:

```bash
npx skills add your-name/agent-skills --list
npx skills add your-name/agent-skills --skill release-brief --agent codex
```

The example uses Vercel's installer, which supports repositories with skill subfolders and selection by skill name. [Vercel `skills` CLI](https://github.com/vercel-labs/skills)

### Versioning and review

Use a public repository when you want others to find and use the skill. Use a private repository for internal procedures. Before installing either, review `SKILL.md`, scripts, dependencies, templates, and any network access. A public repository can still contain unsafe code.

To give everyone on a team the same version, review a specific tag or commit before installing it. If the installer cannot select that exact version, check it out locally and install from that folder. Another option is a team-maintained copy of the repository with a defined update process. For workflows where changes could affect important output or data access, review updates before installing them automatically.

Choose between links and copies based on where the skill will run:

- **Symlinks:** several agents use one local copy, so an update applies to all of them. Some products or remote agents may not follow the links.
- **Copies:** each installation has its own files. You need to update each copy to keep them in sync.

Install at project level for skills that belong with a repository. Install globally for personal preferences you want to use across projects.

## Exporting and installing a skill for Codex

### Export the whole skill folder

To share a skill, include `SKILL.md` and every local file its instructions use. Keep their relative paths intact. Check for private examples, machine-specific paths, and secrets before sharing. A standalone skill can be sent as a folder, stored in Git, or packed into an archive for transport.

For example, run this from a project that contains `.agents/skills/release-brief`. It creates a fresh export folder and a `.tar.gz` archive:

```bash
mkdir skill-export
cp -R .agents/skills/release-brief skill-export/release-brief
tar -czf skill-export/release-brief.tar.gz -C skill-export release-brief
```

If `skill-export` already exists, choose a new export folder before running the commands. The archive should contain `release-brief/SKILL.md` and its supporting files. Unpack it before using the manual installation below. This is a file-copy example, not a Codex export command.

### Install by copying the folder

Choose the scope first:

| Scope | Destination | Use it when |
| --- | --- | --- |
| Project | `.agents/skills/release-brief/` | The skill belongs with this repository |
| Personal | `~/.agents/skills/release-brief/` | You want the skill across your projects |

These are Codex's documented local discovery locations. [Codex skill locations](https://developers.openai.com/codex/skills#where-codex-loads-local-skills)

From the root of the target project, copy the exported folder:

```bash
mkdir -p .agents/skills
test ! -e .agents/skills/release-brief && cp -R skill-export/release-brief .agents/skills/release-brief
```

Or copy it to your personal skill folder:

```bash
mkdir -p "$HOME/.agents/skills"
test ! -e "$HOME/.agents/skills/release-brief" && cp -R skill-export/release-brief "$HOME/.agents/skills/release-brief"
```

The `test` prevents copying over an existing installation. If it fails, compare the versions and decide which to keep. In these examples, `skill-export/release-brief` is the unpacked folder; change that source path if you stored it elsewhere.

### Install from GitHub

In Codex, ask the built-in installer to install the repository's skill folder:

```text
$skill-installer Install release-brief from https://github.com/your-name/agent-skills/tree/main/skills/release-brief.
```

Replace the example URL with your repository. `$skill-installer` supports skills from other GitHub repositories. [Codex installer guidance](https://developers.openai.com/codex/skills#install-curated-skills-for-local-use)

**Check the destination.** The published installer currently defaults to `$CODEX_HOME/skills`, usually `~/.codex/skills`, while Codex's documented personal discovery folder is `~/.agents/skills`. To use the latter, ask for it explicitly:

```text
$skill-installer Install release-brief from https://github.com/your-name/agent-skills/tree/main/skills/release-brief into ~/.agents/skills.
```

The installer's helper supports `--dest` for the destination and `--ref` for a Git tag or commit. Ask for a reviewed revision when you need a fixed version. Its script location depends on where the built-in skill is installed. [Published skill-installer instructions](https://github.com/openai/skills/blob/main/skills/.system/skill-installer/SKILL.md)

You can also use Vercel's installer. Add `--global` for a personal installation:

```bash
npx skills add your-name/agent-skills --skill release-brief --agent codex --global
```

### Check that Codex can use it

In Codex CLI or the IDE extension, open `/skills` or mention `$release-brief`. If it is missing, restart Codex and check the destination and `SKILL.md`. Then try a small request with sample change records and confirm that it follows the briefing steps. Seeing the skill listed checks discovery; a sample task checks whether it works. [Codex loading and installation](https://developers.openai.com/codex/skills)

### When to package it as a plugin

For wider distribution, OpenAI recommends plugins. A plugin can bundle skills and optional connectors into one installable package. Copying or archiving a skill folder does not create a plugin; follow the separate [plugin packaging guide](https://developers.openai.com/plugins/build/plugins).

## Public directories and team sharing

[skills.sh](https://skills.sh/) lists public skills and ranks them using anonymous installation data from Vercel's `skills` tool. The tool can also search for skills and install them from repositories. The documentation says it cannot guarantee the quality or safety of every listed skill. Install counts can help you find candidates, but you still need to review them. [skills.sh documentation](https://www.skills.sh/docs), [CLI reference](https://www.skills.sh/docs/cli)

Teams can also share skills through a product they already use. Cursor has a team marketplace. Claude Code supports plugins, and Claude API skills can be uploaded and shared within a workspace. Codex can include skills in plugins. Each method has its own rules. For example, a skill uploaded to one Claude app or API does not automatically appear in the others. [Cursor team skills](https://prod.cursor.com/help/customization/skills), [Claude sharing model](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview), [Codex skills and plugins](https://developers.openai.com/codex/skills)

## Recommendation for this repository

Keep this repository's report-writing skill in its existing `.agents/skills/` folder. Commit `SKILL.md`, references, and output templates together. If you want others to install and adapt it, share a reusable version in a public Git repository. People can find it through `skills.sh` and use an installer to put it in their agents' folders. Keep track of the reviewed Git version so you know what is installed.

## Sources

- [Codex: Build skills](https://developers.openai.com/codex/skills)
- [Claude Platform Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [Cursor skills documentation](https://prod.cursor.com/help/customization/skills)
- [GitHub Copilot agent skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
- [Vercel `skills` CLI](https://github.com/vercel-labs/skills)
- [skills.sh CLI docs](https://www.skills.sh/docs/cli)
- [OpenAI skills repository](https://github.com/openai/skills)
- [OpenAI skill-installer instructions](https://github.com/openai/skills/blob/main/skills/.system/skill-installer/SKILL.md)
- [OpenAI plugin packaging](https://developers.openai.com/plugins/build/plugins)

Folder locations and installer behavior were checked on 2026-09-29 and may change. Installer commands follow the linked documentation. The repository layout, sample skill, and export commands are examples. No skill was installed into Codex while writing this guide.
