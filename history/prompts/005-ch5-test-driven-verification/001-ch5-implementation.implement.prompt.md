---
id: 001
title: Chapter 5 Content Implementation
stage: implement
date: 2026-02-19
surface: agent
model: claude-sonnet-4-6
feature: 005-ch5-test-driven-verification
branch: 005-ch5-test-driven-verification
user: irfan
command: /sp.implement
labels: ["chapter-5", "implement", "content-writing", "part-1", "verification", "part-1-close"]
links:
  spec: specs/005-ch5-test-driven-verification/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - docs/part-1-personal-skills/ch05-test-driven-verification.md
  - specs/005-ch5-test-driven-verification/checklists/requirements.md
tests:
  - Word count: 3,546 (target 3,100–3,750) — PASS
  - Tables present: 8 (minimum 4) — PASS
  - Code check: 0 programming terms — PASS
  - Second person: throughout — PASS
  - All 13 CRs met — PASS
  - All 8 Constitution principles met — PASS
---

## Prompt

implement chapter 5

## Response snapshot

Wrote complete Chapter 5 content (3,546 words, 8 tables, 9 sections). Sections written: (1) Horror story opening — FBR tax penalty from outdated AI rate, "consultant is liable, not the AI"; (2) "You Already Do This" table (Bank Recon / Trial Balance / Audit Procedures / Tax Return Review / FS Review → AI equivalents); (3) How AI Errors Differ — 6-row comparison table (typos vs. fabrications; inconsistent vs. systematic; asks for help vs. never says I don't know) + 4 dangerous error types (hallucinated standards, outdated regulations, hidden calculation errors, wrong jurisdiction); (4) 7-Point Verification Checklist — boxed, numbered (Citation / Currency / Math / Completeness / Consistency / Judgment / Sign-Off); (5) Golden Dataset concept — step-by-step table + scoring guide (93%+ / 80-87% / below 80%); (6) Verify-Then-Trust Progression — 3-stage table with trigger criteria for each stage; (7) Verification Record Template — complete fill-in-the-blank; (8) Professional Judgment Gap — 6-row table of decisions AI cannot make (going concern, materiality, fraud, opinion, client relationships, uncertain tax advice); (9) 2 exercises (Spot the Errors — 5 AI outputs across 5 task types; Build Your Mini Golden Dataset — 15 items with scoring interpretation) + Part 1 Closing 4-skill summary table + 6 takeaways + Ch6 bridge + Roman Urdu Glossary (10 terms). Zero code throughout.

## Outcome

- Impact: Chapter 5 written, verified, Part 1 complete — all 5 personal skills chapters done
- Tests: All 13 CRs pass, all 8 Constitution principles pass, zero code violations
- Files: docs/part-1-personal-skills/ch05-test-driven-verification.md
- Next prompts: /sp.implement Chapter 6 (MCP: How AI Connects to Your Tools) — Part 2 begins
- Reflection: The FBR tax penalty horror story is the chapter's strongest moment — concrete, plausible, and directly threatening to the reader's professional standing. The "AI errors vs. human errors" distinction lands especially well because experienced verifiers think they can just apply their existing review skills — this section shows why that's insufficient. The Part 1 Closing 4-skill table gives the chapter a satisfying arc: you came with zero AI skills, you leave with a complete professional toolkit.

## Evaluation notes (flywheel)

- Failure modes observed: None — word count 3,546 is well within 3,100–3,750 range
- Graders run and results (PASS/FAIL): All CRs PASS, Constitution PASS, Code check PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Chapter 6 (MCP) should open with a strong contrast: "Part 1 was about YOU using AI. Part 2 is about AI systems working FOR you — connected to your tools, handling your workflows, supervised by the skills you just built."
