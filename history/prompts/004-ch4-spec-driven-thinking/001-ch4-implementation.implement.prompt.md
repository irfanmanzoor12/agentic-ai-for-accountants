---
id: 001
title: Chapter 4 Content Implementation
stage: implement
date: 2026-02-19
surface: agent
model: claude-sonnet-4-6
feature: 004-ch4-spec-driven-thinking
branch: 004-ch4-spec-driven-thinking
user: irfan
command: /sp.implement
labels: ["chapter-4", "implement", "content-writing", "part-1", "spec-driven-thinking"]
links:
  spec: specs/004-ch4-spec-driven-thinking/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - docs/part-1-personal-skills/ch04-spec-driven-thinking.md
  - specs/004-ch4-spec-driven-thinking/checklists/requirements.md
tests:
  - Word count: 3,358 (target 3,300–4,200) — PASS
  - Tables present: 7 (minimum 4) — PASS
  - Code check: 0 programming terms — PASS
  - Second person: throughout — PASS
  - All 13 CRs met — PASS
  - All 8 Constitution principles met — PASS
---

## Prompt

implement chapter 4

## Response snapshot

Wrote complete Chapter 4 content (3,358 words, 7 tables, 7 sections). Sections written: (1) Bridge from Ch3 with "You Already Write Specs" 5-row revelation table (Engagement Letter / Audit Plan / Terms of Reference / Working Paper Template / QC Checklist); (2) Spec-Driven Thinking definition — Think first / Specify second / Execute third — plus When to Spec vs. Prompt 2-column table; (3) 5 Components of AI Task Specification (Objective / Inputs / Process / Constraints / Output Format, each with accounting equivalent and concrete example); (4) 7-section AI Task Specification Template (copy-paste ready with annotations explaining why each section matters); (5) Complete worked example — Audit Planning Memo for Faisal Textiles with all 7 sections filled in + Without Spec vs. With Spec comparison table (rework: 45-60 min vs. 5-10 min); (6) The Overhead Myth — 3-row time comparison (Vague / 6-Part / Spec), plus professional review argument; (7) Specs and the Supervisor Role ("spec is source code"); (8) 2 exercises (Convert Engagement Letter + Spec vs. No-Spec Challenge with comparison table); (9) 6 key takeaways + Ch5 bridge + Roman Urdu Glossary (8 terms). Zero code, zero technical jargon without accounting analogy. Second person throughout.

## Outcome

- Impact: Chapter 4 written, verified, ready for author review
- Tests: All 13 CRs pass, all 8 Constitution principles pass, zero code violations
- Files: docs/part-1-personal-skills/ch04-spec-driven-thinking.md
- Next prompts: /sp.implement Chapter 5 (Test-Driven Verification)
- Reflection: The "You Already Write Specs" table is the strongest opening of any chapter so far — experienced accountants will feel instant recognition. The worked example (Faisal Textiles audit planning memo, all 7 sections filled in) is immediately usable in a classroom. The Overhead Myth time comparison (47 min vs. 17-22 min) gives the chapter a quantified argument that skeptics cannot dismiss.

## Evaluation notes (flywheel)

- Failure modes observed: Word count 3,358 is at the lower end of 3,300–4,200 target — acceptable, content is dense and table-heavy
- Graders run and results (PASS/FAIL): All CRs PASS, Constitution PASS, Code check PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Chapter 5 should open with "Chapter 4 taught you to define what 'done' looks like. Chapter 5 shows you how to verify AI actually got there — before you put your name on it."
