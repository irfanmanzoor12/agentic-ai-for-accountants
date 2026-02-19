---
id: 002
title: Chapter 11 Content Implementation
stage: implement
date: 2026-02-19
surface: agent
model: claude-sonnet-4-6
feature: 011-ch11-human-in-the-loop
branch: 011-ch11-human-in-the-loop
user: irfan
command: /sp.implement
labels: ["chapter-11", "implement", "content-writing", "part-2", "human-in-the-loop", "trust-ladder", "shadow-mode", "supervised-mode"]
links:
  spec: specs/011-ch11-human-in-the-loop/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - docs/part-2-ai-systems/ch11-human-in-the-loop.md
  - specs/011-ch11-human-in-the-loop/checklists/requirements.md
tests:
  - Word count: 3,663 (target 3,500–4,500) — PASS
  - Tables present: 5 (minimum 4) — PASS
  - Code check: 0 programming terms — PASS
  - Second person: throughout — PASS
  - All 11 CRs met — PASS
  - All 8 Constitution principles met — PASS
  - All 4 edge cases covered — PASS
---

## Prompt

implement chapter 11

## Response snapshot

Wrote complete Chapter 11 content (3,663 words, 5 tables, 8 sections). Sections written: (1) Bridge from Ch10 — "Rules tell your team what they cannot do. Trust tells your team how much they can do on their own." + engagement calibration need; (2) Engagement Manager Analogy — new junior → competent senior → trusted team member progression (same calibration principle applies to AI); (3) Three Modes with accounting examples and analogies: Shadow Mode (transaction classification review, audit memo sign-off, tax computation verification — "new junior who prepared the working paper"), Supervised Mode (500 transactions → 488 auto + 12 exceptions; 200 expenses → 190 auto + 10 reviewed — "competent senior"), Autonomous Mode (daily classification + weekly summary + 5% spot-check — "trusted team member"; non-negotiable: you submit always) + 6-column Mode Comparison table; (4) Trust Ladder — 3 levels with promotion criteria (all must be true to advance) + Trust Regression warning ("responsible supervision, not failure"); (5) Bank Reconciliation Flagship — Month 1 Shadow (312 transactions, 2 hours, 2 mismatches caught), Month 3 Supervised (1,847 transactions across 5 accounts, 45 minutes, 12 exceptions), Month 6 Autonomous (daily reconciliation, 8 min/day, 5% spot-check), Month 7 Regression (new bank fee type → 95.3% accuracy → back to Supervised → 2 months → Autonomous restored); (6) Mode Decision Matrix — 7-factor table; (7) Approval Workflows — pause point mechanics, "highest-value contribution" framing, Ch9/Ch10 connection, professional responsibility; (8) 2 exercises (Classify 10 workflows by mode; Design Trust Ladder for one workflow); (9) 6 key takeaways + Ch12 bridge + Roman Urdu Glossary (10 terms).

## Outcome

- Impact: Chapter 11 written, verified — HITL framework complete, Trust Ladder introduced, three collaboration modes established
- Tests: All 11 CRs pass, all 8 Constitution principles pass, zero code violations
- Files: docs/part-2-ai-systems/ch11-human-in-the-loop.md
- Next prompts: /sp.implement Chapter 12 (Memory — AI Remembers Your Clients)
- Reflection: The bank reconciliation flagship is the chapter's strongest section — walking through all three modes with concrete time comparisons (2 hours → 45 minutes → 8 minutes per day) and including the trust regression scenario makes the Trust Ladder feel real rather than theoretical. The "pause point is your highest-value contribution" framing resolves the concern that HITL design slows everything down — it reframes the pause as the moment where the accountant's professional judgment lives. The 6-column Mode Comparison table is a clean reference that readers will return to when deciding how to structure new workflows.

## Evaluation notes (flywheel)

- Failure modes observed: None — 3,663 words within 3,500–4,500 range on first draft
- Graders run and results (PASS/FAIL): All CRs PASS, Constitution PASS, Code check PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Chapter 12 (Memory) should open with a frustration story — the accountant who has to re-explain the same client situation to AI every single session. Starting with that friction makes the value of memory immediately obvious before any concept is introduced.
