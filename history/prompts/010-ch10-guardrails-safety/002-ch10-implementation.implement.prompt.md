---
id: 002
title: Chapter 10 Content Implementation
stage: implement
date: 2026-02-19
surface: agent
model: claude-sonnet-4-6
feature: 010-ch10-guardrails-safety
branch: 010-ch10-guardrails-safety
user: irfan
command: /sp.implement
labels: ["chapter-10", "implement", "content-writing", "part-2", "guardrails", "safety", "data-privacy", "compliance"]
links:
  spec: specs/010-ch10-guardrails-safety/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - docs/part-2-ai-systems/ch10-guardrails-safety.md
  - specs/010-ch10-guardrails-safety/checklists/requirements.md
tests:
  - Word count: 3,690 (target 3,500–4,500) — PASS
  - Tables present: 7 (minimum 4) — PASS
  - Code check: 0 programming terms — PASS
  - Second person: throughout — PASS
  - All 11 CRs met — PASS
  - All 8 Constitution principles met — PASS
  - All 4 edge cases covered — PASS
---

## Prompt

implement chapter 10

## Response snapshot

Wrote complete Chapter 10 content (3,690 words, 7 tables, 8 sections). Sections written: (1) Bridge from Ch9 — new junior without induction analogy + "A team without rules is a liability"; (2) You Already Have Guardrails — 6-row recognition table (juniors can't sign reports / PKR 500K approval / client data on firm servers / staff confidentiality / induction checklist / segregation of duties, mapped to AI equivalents); (3) Five Categories of AI Guardrails: Data (AI-Safe/Anonymize-First/Never-Share tiers + "Newspaper Test" heuristic), Action (9-row "AI prepares / You approve" table with permitted vs. prohibited actions), Quality (accuracy thresholds + mandatory cross-checks + format compliance + Ch5 Verification connection), Compliance (5-row table: FBR/ICAP-ACCA/IFRS/AML/Companies Act — can do / cannot do / accountant responsibility), Escalation (6-row trigger table: amount / unusual pattern / first-time / conflicting data / uncertainty signal / regulatory flag); (4) Month-End Closing Flagship with Guardrails — all 5 guardrail categories applied phase-by-phase to Ch9 workflow (anonymization in Phase 1, posting prohibition in Phase 2, depreciation citation in Phase 3, FBR non-filing in Phase 4, DRAFT watermark in Phase 5); (5) Data Classification Matrix — 3-row table with accounting examples per category + free-tier data safety note; (6) Guardrails Specification Template — all 5 sections with example entries; (7) Client Transparency — when disclosure required, sample engagement letter language, explicit consent guidance, "Are you using AI?" answer; (8) 2 exercises (Build Data Classification Matrix; Write Guardrails Specification); (9) 6 key takeaways + Ch11 bridge + Roman Urdu Glossary (10 terms).

## Outcome

- Impact: Chapter 10 written, verified — guardrails framework complete, professional ethics and data safety addressed
- Tests: All 11 CRs pass, all 8 Constitution principles pass, zero code violations, all 4 edge cases covered
- Files: docs/part-2-ai-systems/ch10-guardrails-safety.md
- Next prompts: /sp.implement Chapter 11 (Human-in-the-Loop)
- Reflection: The "You Already Have Guardrails" recognition table is the chapter's strongest opening — every row maps something accountants enforce daily onto its AI equivalent, making guardrails instantly intuitive rather than intimidating. The five-category framework is comprehensive without being overwhelming: each category connects to a familiar accounting concept (internal controls, segregation of duties, accuracy standards, regulatory compliance, escalation matrix). The Newspaper Test is the chapter's most memorable practical tool. The month-end closing flagship (applying all 5 categories to the Ch9 workflow) creates strong continuity — the reader sees their existing workflow through a safety lens without needing to learn a new example.

## Evaluation notes (flywheel)

- Failure modes observed: None — 3,690 words within 3,500–4,500 range on first draft
- Graders run and results (PASS/FAIL): All CRs PASS, Constitution PASS, Code check PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Chapter 11 (Human-in-the-Loop) should open with a specific near-miss scenario — a real situation where AI almost did something wrong, and the human gate caught it. Starting with a concrete "the gate saved us" story creates immediate appreciation for the chapter's concept before the framework is introduced.
