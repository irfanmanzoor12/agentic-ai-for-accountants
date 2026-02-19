---
id: 002
title: Chapter 15 Content Implementation
stage: implement
date: 2026-02-19
surface: agent
model: claude-sonnet-4-6
feature: 015-ch15-agent-factory
branch: 015-ch15-agent-factory
user: irfan
command: /sp.implement
labels: ["chapter-15", "implement", "content-writing", "part-2", "agent-factory", "capstone", "four-roles", "90-day-plan", "digital-fte"]
links:
  spec: specs/015-ch15-agent-factory/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - docs/part-2-ai-systems/ch15-agent-factory.md
  - specs/015-ch15-agent-factory/checklists/requirements.md
tests:
  - Word count: 4,483 (target 4,000–5,000) — PASS
  - Tables present: 4 (minimum 4) — PASS
  - Code check: 0 programming terms — PASS
  - Second person: throughout — PASS
  - All 12 CRs met — PASS
  - All 8 Constitution principles met — PASS
  - All 4 edge cases covered — PASS
---

## Prompt

implement chapter 15

## Response snapshot

Wrote complete Chapter 15 content (4,483 words, 4 tables, 10 sections). Sections written: (1) Return to Ch1 Promise — lists all 14 chapter skills acquired across Ch2–Ch14, asks "what do you do with all of this?"; (2) Complete Picture formatted text diagram — Part 1 YOUR SKILLS (Ch1–5), Part 2 YOUR DIGITAL TEAM (Ch6–14), "YOUR ROLE = AI SUPERVISOR / You don't build. You don't code. You DIRECT, VERIFY, and DECIDE." with before/after narrative framing (operator → supervisor); (3) Four New Professional Roles — each with description, key chapters, deliverables, accounting analogy: AI Supervisor (Engagement Manager, Ch10/11/14), Prompt Architect (Training Manager, Ch2/3/12), Workflow Designer (Operations Manager, Ch4/7/9), AI Quality Auditor (QC Partner, Ch5/13/14); (4) Skills Matrix 4-row table — Role | Primary Chapters | Key Deliverables; (5) Digital FTE Economics in PKR — junior cost PKR 80,000–110,000/month vs. AI tools PKR 15,000–20,000/month, 160 hrs vs. 720 hrs/month, "same team 3–5x output" framing, emphasis on capacity multiplication not headcount reduction; (6) Pakistan Competitive Landscape — FBR digitization, "as of 2026 no one in Pakistan is teaching agentic AI to accountants", first-mover advantage, ICAP/ACCA awareness driving demand; (7) 90-Day AI Adoption Plan — Month 1 Foundations (5 prompt templates, 3 client memory profiles, 1 workflow spec, first evaluation scorecard), Month 2 Systems (1 workflow mapped + guardrails + Shadow Mode launched), Month 3 Scale (5 client profiles, document library started, promote to Supervised, firm proposal drafted); (8) Addressing Concerns — "Am I replacing my team?" (No — multiplying capacity), "What if leadership resists?" (evaluation scorecard is your evidence), "I'm a solo practitioner" (same plan, smaller scale); (9) Exercises (Customise Your 90-Day Plan with accountability partner + Role Assessment 1–5 rating table) + 7 key takeaways + Roman Urdu Glossary (10 terms); (10) Closing Statement — "Accountants don't become programmers. Accountants become AI supervisors." + "You define what 'correct' means. AI cannot do that without you." + "Your move."

## Outcome

- Impact: Chapter 15 written, verified — all 15 chapters of "Agentic AI for Accounting Professionals" complete; the book is fully drafted
- Tests: All 12 CRs pass, all 8 Constitution principles pass, zero code violations
- Files: docs/part-2-ai-systems/ch15-agent-factory.md
- Next prompts: Initialize Docusaurus site (add Context7 MCP), create GitHub remote repository, configure sidebar/navigation for all 15 chapters
- Reflection: The "Complete Picture" formatted diagram is the chapter's structural centrepiece — it gives readers a visual map they can return to after finishing the book. The 90-day plan's specificity is intentional: naming exact deliverables per week (not vague "explore AI") removes the most common friction point between understanding and action. The Digital FTE economics section uses ranges rather than single figures — PKR 80,000–110,000 for junior cost, PKR 15,000–20,000 for AI tools — to maintain accuracy across firms of different sizes. The closing statement's brevity is deliberate: three short sentences, each carrying full weight, ending on "Your move." — a prompt for action, not a summary.

## Evaluation notes (flywheel)

- Failure modes observed: None — 4,483 words within 4,000–5,000 range on first draft
- Graders run and results (PASS/FAIL): All CRs PASS, Constitution PASS, Code check PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): The book's introduction (Chapter 1) should be revisited after all 15 chapters are written — the opening promise can now explicitly enumerate what readers will learn, with confidence that all 14 skills are fully developed in the chapters that follow. A revised Ch1 opening that lists the 14 chapters by name would make the "Return to Ch1 Promise" payoff in Ch15 even more satisfying.
