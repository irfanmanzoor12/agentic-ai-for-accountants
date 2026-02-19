---
id: 001
title: Chapter 7 AI Skills Spec Creation
stage: spec
date: 2026-02-18
surface: agent
model: claude-opus-4-6
feature: 007-ch7-ai-skills
branch: 007-ch7-ai-skills
user: irfan
command: /sp.specify
labels: ["chapter-7", "specification", "ai-skills", "composability", "catalogue"]
links:
  spec: specs/007-ch7-ai-skills/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/007-ch7-ai-skills/spec.md
  - specs/007-ch7-ai-skills/checklists/requirements.md
tests:
  - Specification quality checklist validated (all items pass)
---

## Prompt

yes continue

## Response snapshot

Created the Chapter 7 specification for "AI Skills: What Agents Can Do." Skills are presented as "job description tasks" for AI — discrete, composable capabilities. Includes a full Accounting AI Skills Catalogue across bookkeeping (Classify, Reconcile, Accrue, Depreciate, Report), tax (Compute, Research, Plan, Draft Return), and audit (Analyze, Sample, Draft WP, Draft Letter). Teaches composability via LEGO analogy, Skills vs. Professional Judgment boundary table, Skill Maturity Levels (Assist → Draft → Execute), and a Skills Requirement Template. 3 reader journeys, 12 content requirements, 7 success criteria. All checklist items pass.

## Outcome

- Impact: Skills catalogue makes AI capabilities tangible — readers can now see exactly what AI does in their domain
- Tests: Quality checklist at checklists/requirements.md — all items pass
- Files: spec.md (specification), checklists/requirements.md (validation)
- Next prompts: /sp.specify for Chapter 8 (AI Agents — Your Digital Accounting Team)
- Reflection: The MCP → Skills → Agents → Orchestration progression (Ch6-9) is building cleanly. Each chapter adds one layer: connections → capabilities → employees → team coordination.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): Quality checklist PASS, Constitution compliance PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Ch8 should combine skills into complete "digital employees" — verify the agent concept builds naturally on the skills catalogue
