# Agent Skills

Skills package reusable instructions and supporting files for agent workflows. This guide explains the format, how agents discover skills, where teams store and distribute them, and how to organize one concrete document-generation workflow.

## What each guide answers

- [Basics](basics.md)
  - What belongs in a skill directory, and what are `SKILL.md`, `scripts/`, `references/`, and `assets/` for?
  - Which parts of the format are portable, and which behaviors are specific to Codex?
  - How do discovery and progressive disclosure work?
  - How should a skill be authored, tested, secured, and improved over time?
- [Storage and distribution](storage-and-distribution.md)
  - What are common ways to store and distribute skills?
  - How can a public or private Git repository work with an installer?
  - How do you install a skill for particular agents, and choose between symlinks and copies?
  - When should a skill live in a project, and when should it be installed at user level?
- [Document generation example](document-generation-example.md)
  - When should a workflow use a template, a generator, or a separate formatting skill?
  - Where do the format contract, template, and helper scripts belong?
  - How can the generated document be validated, including its rendered pages?

The [Agent Skills specification](https://agentskills.io/specification) defines the portable package format. Paths, invocation, installation, and sharing vary by product. Product details in these guides were checked on 2026-09-29; recheck the linked documentation before relying on them.
