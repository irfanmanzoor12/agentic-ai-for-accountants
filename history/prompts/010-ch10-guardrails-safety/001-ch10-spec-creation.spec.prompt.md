---
id: 001
title: Chapter 10 Guardrails Safety Spec Creation
stage: spec
date: 2026-02-18
surface: agent
model: claude-opus-4-6
feature: 010-ch10-guardrails-safety
branch: 010-ch10-guardrails-safety
user: irfan
command: /sp.specify
labels: ["chapter-10", "specification", "guardrails", "safety", "data-privacy", "compliance"]
links:
  spec: specs/010-ch10-guardrails-safety/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/010-ch10-guardrails-safety/spec.md
  - specs/010-ch10-guardrails-safety/checklists/requirements.md
tests:
  - Specification quality checklist validated (all items pass)
---

## Prompt

yes continue

## Response snapshot

Created Chapter 10 specification "Guardrails & Safety: Setting Boundaries for Your Digital Team." Five guardrail categories taught through internal control analogies: Data (what AI can see — Data Classification Matrix), Action (what AI can do — "AI prepares, you approve"), Quality (output thresholds + cross-checks), Compliance (FBR, ICAP, IFRS rules mapped to AI), Escalation (when AI stops and asks a human). Flagship example: guardrails applied to Ch9's month-end closing orchestration. Includes "Newspaper Test" heuristic for data decisions, Data Classification Matrix template, Guardrails Specification Template, and client transparency guidance. 3 reader journeys, 11 content requirements, 7 success criteria. All checklist items pass.

## Outcome

- Impact: Safety and compliance chapter complete — readers can now design guardrails for any AI workflow using accounting vocabulary
- Tests: Quality checklist — all items pass
- Files: spec.md, checklists/requirements.md
- Next prompts: /sp.specify for Chapter 11 (Human-in-the-Loop)
- Reflection: Five guardrail categories map perfectly to existing internal control concepts accountants already know. The "Newspaper Test" is the most memorable teaching tool — simple, visceral, and effective.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): Quality checklist PASS, Constitution compliance PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Ch11 (Human-in-the-Loop) should show the MECHANISMS for those approval gates — when and how AI pauses for human judgment, building on the escalation guardrails from Ch10
