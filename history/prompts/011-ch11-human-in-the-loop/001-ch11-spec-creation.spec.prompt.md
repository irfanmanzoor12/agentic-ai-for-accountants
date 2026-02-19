---
id: 001
title: Chapter 11 Human-in-the-Loop Spec Creation
stage: spec
date: 2026-02-18
surface: agent
model: claude-opus-4-6
feature: 011-ch11-human-in-the-loop
branch: 011-ch11-human-in-the-loop
user: irfan
command: /sp.specify
labels: ["chapter-11", "specification", "human-in-the-loop", "shadow-mode", "supervised-mode", "trust-ladder"]
links:
  spec: specs/011-ch11-human-in-the-loop/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/011-ch11-human-in-the-loop/spec.md
  - specs/011-ch11-human-in-the-loop/checklists/requirements.md
tests:
  - Specification quality checklist validated (all items pass)
---

## Prompt

yes continue

## Response snapshot

Created Chapter 11 specification "Human-in-the-Loop: When AI Pauses for Your Judgment." Three collaboration modes taught through engagement management analogies: Shadow Mode (AI recommends, you execute — new junior), Supervised Mode (AI executes, you review exceptions — competent senior), Autonomous Mode (AI executes within guardrails, you spot-check — trusted team member). Key framework: Trust Ladder — structured progression from Shadow → Supervised → Autonomous with promotion criteria and trust regression. Flagship example: bank reconciliation over 6 months showing all three modes + regression scenario. Mode Decision Matrix for quick assessment. 3 reader journeys, 11 content requirements, 7 success criteria. All checklist items pass.

## Outcome

- Impact: Human-AI collaboration chapter complete — readers can now design appropriate supervision levels for every AI workflow
- Tests: Quality checklist — all items pass
- Files: spec.md, checklists/requirements.md
- Next prompts: /sp.specify for Chapter 12 (Memory)
- Reflection: The Trust Ladder is the most reusable framework in Part 2 — readers will reference it for every new AI workflow they design. Trust Regression is a crucial concept that prevents overconfidence.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): Quality checklist PASS, Constitution compliance PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Ch12 (Memory) should show how AI REMEMBERS client context across interactions — enabling agents to improve over time and work more effectively in Supervised/Autonomous modes
