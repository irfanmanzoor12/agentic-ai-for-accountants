---
id: 001
title: Chapter 8 Content Implementation
stage: implement
date: 2026-02-19
surface: agent
model: claude-sonnet-4-6
feature: 008-ch8-ai-agents
branch: 008-ch8-ai-agents
user: irfan
command: /sp.implement
labels: ["chapter-8", "implement", "content-writing", "part-2", "ai-agents", "hisaab", "mehsool", "jaiza"]
links:
  spec: specs/008-ch8-ai-agents/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - docs/part-2-ai-systems/ch08-ai-agents.md
  - specs/008-ch8-ai-agents/checklists/requirements.md
tests:
  - Word count: 3,595 (target 3,550–4,350) — PASS
  - Tables present: 11 (minimum 4) — PASS
  - Code check: 0 programming terms — PASS
  - Second person: throughout — PASS
  - All 11 CRs met — PASS
  - All 8 Constitution principles met — PASS
---

## Prompt

implement chapter 8

## Response snapshot

Wrote complete Chapter 8 content (3,595 words, 11 tables, 8 sections). Sections written: (1) Bridge — "You've learned the components separately. This chapter assembles them."; (2) Anatomy of an AI Agent — 6-component table mapped to Chapters 1-7 (Brain/Communication/Instructions/Quality Control/Connections/Capabilities); (3) Digital FTE — "tireless junior" analogy + 7-row comparison table (hours/cost/training/consistency/judgment/tasks/scalability in PKR); (4) Hisaab profile (حساب) — profile card table + 8-step "Day in the Life" narrative (06:00–09:00, classification + reconciliation + flagging + summary); (5) Mehsool profile (محصول) — profile card table + tax computation workflow narrative (Research → Compute → Plan → Draft Return + two planning opportunities flagged); (6) Jaiza profile (جائزہ) — profile card table + audit fieldwork narrative (Analyze → Risk Assess → Sample → Draft WP, Shadow Mode for new clients); (7) Three Paths — 5-column decision table + "start Path 1 today" guidance + progression framework; (8) Agent Economics — PKR monthly cost table (Junior / Path 1 / Path 3) with effective hourly rate comparison + compound benefit framing; (9) Principal-Performer relationship — 2-column responsibilities table; (10) 2 exercises (Design Your Agent with 7-field fill-in table; Choose Your Path with decision factors + one-paragraph recommendation); (11) 6 key takeaways + Ch9 bridge + Roman Urdu Glossary (10 terms, including Urdu scripts for agent names).

## Outcome

- Impact: Chapter 8 written, verified — synthesis chapter complete, digital team introduced
- Tests: All 11 CRs pass, all 8 Constitution principles pass, zero code violations
- Files: docs/part-2-ai-systems/ch08-ai-agents.md
- Next prompts: /sp.implement Chapter 9 (Orchestration: Your Agents Working Together)
- Reflection: The "Day in the Life" narratives are the chapter's strongest elements — Hisaab's morning routine (6 AM bank feed → 9 AM review-ready summary), Mehsool's tax computation workflow with two flagged planning opportunities, and Jaiza's audit fieldwork narrative all make abstract agent concepts completely concrete. The Urdu scripts (حساب، محصول، جائزہ) alongside the Roman Urdu add authentic cultural resonance. The Principal-Performer table cleanly resolves any confusion about the accountant's role not diminishing — it amplifies.

## Evaluation notes (flywheel)

- Failure modes observed: None — 3,595 words is cleanly within 3,550–4,350 range
- Graders run and results (PASS/FAIL): All CRs PASS, Constitution PASS, Code check PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Chapter 9 should open by immediately placing Hisaab, Mehsool, and Jaiza in the same workflow — "They each do their job. Chapter 9 teaches them to hand off to each other." This creates narrative continuity from the named agents introduced here.
