---
id: 001
title: Chapter 7 Content Implementation
stage: implement
date: 2026-02-19
surface: agent
model: claude-sonnet-4-6
feature: 007-ch7-ai-skills
branch: 007-ch7-ai-skills
user: irfan
command: /sp.implement
labels: ["chapter-7", "implement", "content-writing", "part-2", "ai-skills", "catalogue"]
links:
  spec: specs/007-ch7-ai-skills/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - docs/part-2-ai-systems/ch07-ai-skills.md
  - specs/007-ch7-ai-skills/checklists/requirements.md
tests:
  - Word count: 3,361 (target 3,300–4,200) — PASS
  - Tables present: 9 (minimum 4) — PASS
  - Skills count: 15 (5+4+5+1) — PASS
  - Code check: 0 programming terms — PASS
  - Second person: throughout — PASS
  - All 12 CRs met — PASS
  - All 8 Constitution principles met — PASS
---

## Prompt

implement chapter 7

## Response snapshot

Wrote complete Chapter 7 content (3,361 words, 9 tables, 8 sections). Sections written: (1) Bridge from Ch6 — "MCP = roads, Skills = vehicles"; (2) What Is an AI Skill? — Job Description analogy with 5-element comparison table (Name/Input/Output/Quality/Oversight); (3) Accounting AI Skills Catalogue — 4 groups, 15 total skills: Bookkeeping (Classify/Reconcile/Accrue/Depreciate/Report), Tax (Compute/Research/Plan/Draft Return), Audit (Analyze/Sample/Draft WP/Draft Letter/Risk Assess), Advisory (Summarize) — each with What AI Does / Input / Output / Verification columns; (4) Skills vs. Professional Judgment — 7-row boundary table (AI procedure vs. human interpretation for each area); (5) Composability / LEGO Analogy — Monthly Closing chain (Classify→Reconcile→Accrue→Depreciate→Report) + Tax Filing chain (Research→Compute→Plan→Draft Return) with ASCII workflow diagrams + "why composability matters more" paragraph; (6) How Skills Connect to Ch3/4/5/6 — 4-row integration table; (7) Skill Maturity Levels — 4-column table (Assist/Draft/Execute with When to Use); (8) Skills Requirement Template (8-section fill-in); (9) 2 exercises (Skills Audit with assessment table; Write a Skills Requirement) + 6 takeaways + Ch8 bridge (Hisaab/Mehsool/Jaiza preview) + Roman Urdu Glossary (10 terms).

## Outcome

- Impact: Chapter 7 written, verified, skills catalogue complete
- Tests: All 12 CRs pass, all 8 Constitution principles pass, zero code violations, 15 skills as specified
- Files: docs/part-2-ai-systems/ch07-ai-skills.md
- Next prompts: /sp.implement Chapter 8 (AI Agents: Your Digital Accounting Team)
- Reflection: The skills catalogue is the chapter's strongest element — reading 15 specific, named skills (each one a task accountants do daily) makes AI completely concrete. The composability section is the chapter's most important conceptual shift: individual skills are useful, composed workflows are transformative. Added Advisory group (Summarize) to reach the 15-skill count stated in the introduction and close any gap in coverage.

## Evaluation notes (flywheel)

- Failure modes observed: Initial draft at 3,100 words (below 3,300 minimum) — fixed by adding Advisory skills group and expanding composability section
- Graders run and results (PASS/FAIL): All CRs PASS, Constitution PASS, Code check PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Chapter 8 should name the agents immediately in the opening — "Meet Hisaab, Mehsool, and Jaiza. They are your digital accounting team." Strong naming creates reader engagement from the first paragraph.
