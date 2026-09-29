# Agent Skills

An agent skill is a folder of instructions and supporting files that helps an AI agent carry out a particular task. These guides explain what goes in that folder, how agents find and use skills, and how to share them. A document-generation example shows how the pieces fit together.

## What each guide answers

- [Basics](basics.md)
  - What belongs in a skill folder, and what are `SKILL.md`, `scripts/`, `references/`, and `assets/` for?
  - How does an agent find a skill and read its files as needed?
  - How do you write, test, review, and improve a skill?
- [How many skills are too many?](managing-skills.md)
  - What happens when the agent's skill list becomes crowded?
  - Is there a safe number, and what limits do products document?
  - How do you trim, scope, disable, and test a collection?
- [How different products use skills](provider-differences.md)
  - What do Codex, Claude Code, Gemini CLI, Cursor, and Copilot share?
  - How do discovery, activation, permissions, and sharing differ?
  - How do local skills differ from skills attached through an API?
- [Storing and sharing skills](storage-and-distribution.md)
  - What are common ways to store and share skills?
  - How can a public or private Git repository work with an installer?
  - What would a small GitHub skill repository look like?
  - How do you export a skill and install it for Codex?
  - How do you install a skill for a particular agent, and choose between linked files and copies?
  - When should a skill belong to one project, and when should it be available across your projects?
- [Document generation example](document-generation-example.md)
  - When should a task use a template, a generator, or a separate formatting skill?
  - Where should you put the document rules, template, and helper scripts?
  - How do you check the document's contents and page layout?

The [Agent Skills specification](https://agentskills.io/specification) defines the shared file format. Each product has its own rules for finding, starting, installing, and sharing skills. Product details in these guides were checked on 2026-09-29. Check the linked documentation for later changes.
