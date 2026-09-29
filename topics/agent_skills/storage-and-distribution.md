# Agent Skill Storage and Distribution

Paths and product behavior checked on 2026-09-29. These are common approaches, not an exhaustive or ranked market survey.

## Where skills live

| Approach | Examples | Good fit | Trade-off |
| --- | --- | --- | --- |
| Project folder in Git | `.agents/skills/<name>/SKILL.md` | Team instructions versioned with the code; supported by Codex, Cursor, and GitHub Copilot | Check each target agent's discovery rules before assuming one path works everywhere |
| Agent-specific folder | `.claude/skills/`, `.cursor/skills/`, `.github/skills/`; personal folders such as `~/.claude/skills/`, `~/.cursor/skills/`, `~/.copilot/skills/`, and `~/.agents/skills/` | Product-specific features or personal skills | Clients may not discover the same paths; independent copies can drift |
| Git repository plus installer | A shared public or private repository installed into agent-specific paths | Reuse across projects, machines, or agents | The install tool and its update behavior become part of the workflow |
| Managed product distribution | Cursor team marketplace; Claude Code plugins or workspace API skills; Codex plugins | Team catalogs, hosted/API environments, or managed rollout | Availability and sharing are product-specific; uploads may not sync across product surfaces |
| Public registry | [skills.sh](https://skills.sh/) | Discover community skills and inspect install activity | Registry presence or install counts do not establish quality, safety, or fit |

For a repository used with multiple coding agents, `.agents/skills/` is a practical shared project location: Codex, Cursor, and GitHub Copilot document support for it. Use a vendor-specific path when a product feature requires one. Personal locations such as `~/.agents/skills/` keep private preferences out of the repository. [Codex locations](https://developers.openai.com/codex/skills), [Cursor paths](https://prod.cursor.com/help/customization/skills), [Copilot locations](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)

Claude Code documents project skills in `.claude/skills/` and personal skills in `~/.claude/skills/`. Cursor also discovers `.cursor/skills/`, `.agents/skills/`, Claude, and Codex directories. Copilot supports `.github/skills/`, `.claude/skills/`, and `.agents/skills/` in a repository, plus personal locations. Hosted products can have different upload and sharing behavior from their local coding agents. [Claude Platform overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview), [Cursor documentation](https://prod.cursor.com/help/customization/skills), [GitHub Copilot documentation](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)

## Public Git repository plus installer

A Git repository is a straightforward source of truth for skills: review changes with familiar code review, track scripts and references beside `SKILL.md`, and publish revisions with the rest of the repository. One repository can contain one skill at its root or several skill folders:

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

The open-source Vercel `skills` CLI can inspect a repository and install selected skills to supported agents. For example:

```bash
npx skills add acme/agent-skills --list
npx skills add acme/agent-skills --skill release-brief --agent codex
```

The default install scope is project-level; `--global` installs for the user. Choose target agents with `--agent`. The CLI can symlink one canonical copy into agent directories; its documentation recommends this approach. Use `--copy` when independent files are preferable or symlinks are unavailable. The CLI accepts GitHub repositories, other Git URLs, and local paths, including private repositories when Git authentication is configured. [Vercel `skills` CLI](https://github.com/vercel-labs/skills)

This keeps the Git repository as the source of truth while an installer adapts its contents to each agent's expected directory. For a single client, cloning a repository directly into that client's documented project or user folder is also valid; an installer is optional.

### Versioning and review

Public repositories are easy to discover and consume, while private repositories suit organization-specific procedures. In either case, review `SKILL.md`, scripts, dependencies, templates, and network behavior before installing. Public hosting does not make executable helpers trustworthy by itself.

For a reproducible team install, review a specific tag or commit before rollout. If the installer flow does not pin the exact revision you need, check out that revision locally and install from the local path, or use a team-managed mirror and update procedure. Avoid unattended updates to `latest` for workflows whose output or access matters.

The CLI offers both copy and symlink installs. Symlinks keep one local copy in sync across agent directories, but clients and remote workers may not follow them. Copies are more self-contained, but can drift unless updates are managed. Choose project scope for skills shared with a repository; use global scope for individual preferences that should travel across projects.

## Registries and managed catalogs

[skills.sh](https://skills.sh/) is a public discovery directory and leaderboard backed by Vercel's `skills` CLI. The CLI can search or install skills from repositories. Its docs explain that leaderboard order uses anonymous CLI install telemetry and that they cannot guarantee the quality or security of every listed skill. Treat install counts as one discovery signal, not a review. [skills.sh documentation](https://www.skills.sh/docs), [CLI reference](https://www.skills.sh/docs/cli)

Product-managed distribution can fit a team that already uses that product: Cursor has a team marketplace; Claude Code supports plugins, while Claude API skills are uploaded and shared at the workspace level; Codex can package skills in plugins. These are product distribution mechanisms, not interchangeable local paths, and skills uploaded to one Claude surface do not automatically sync to another. [Cursor team skills](https://prod.cursor.com/help/customization/skills), [Claude sharing model](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview), [Codex skills and plugins](https://developers.openai.com/codex/skills)

## Recommendation for this repository

Keep the report-writing skill under the repository's existing `.agents/skills/` directory, with `SKILL.md`, its references, and output templates committed together. Use a public Git repository when you want other people to install and adapt a reusable version. Use `skills.sh` or another installer to discover and place it into clients' paths; keep the reviewed repository revision as the canonical source.

## Sources and limits

- [Codex: Build skills](https://developers.openai.com/codex/skills)
- [Claude Platform Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [Cursor skills documentation](https://prod.cursor.com/help/customization/skills)
- [GitHub Copilot agent skills](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
- [Vercel `skills` CLI](https://github.com/vercel-labs/skills)
- [skills.sh CLI docs](https://www.skills.sh/docs/cli)

Product paths and installer behavior were checked on 2026-09-29 and may change. Install syntax and options follow the Vercel CLI documentation; no skill was installed as part of this guide.
