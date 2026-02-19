---
id: 001
title: Chapter 6 Content Implementation
stage: implement
date: 2026-02-19
surface: agent
model: claude-sonnet-4-6
feature: 006-ch6-mcp-tool-connections
branch: 006-ch6-mcp-tool-connections
user: irfan
command: /sp.implement
labels: ["chapter-6", "implement", "content-writing", "part-2", "mcp", "tool-connections"]
links:
  spec: specs/006-ch6-mcp-tool-connections/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - docs/part-2-ai-systems/ch06-mcp-tool-connections.md
  - specs/006-ch6-mcp-tool-connections/checklists/requirements.md
tests:
  - Word count: 2,847 (target 2,650–3,350) — PASS
  - Tables present: 5 (minimum 4) — PASS
  - Code check: 0 programming terms, word "API" absent — PASS
  - Second person: throughout — PASS
  - All 12 CRs met — PASS
  - All 8 Constitution principles met — PASS
---

## Prompt

implement chapter 6

## Response snapshot

Wrote complete Chapter 6 content (2,847 words, 5 tables, 8 sections). First chapter of Part 2. Sections written: (1) Part 2 opening bridge — "Part 1 gave you skills, Part 2 shows you systems"; (2) The manual data transfer problem — bank reconciliation pain point as concrete opening; (3) USB for AI — full USB origin story, USB→MCP analogy, Without Standard vs. With MCP comparison table; (4) Before/After workflow — 8-step table (manual vs. MCP-connected AI for bank reconciliation); (5) Three connection types — Read/Write/Execute table with accounting examples, approval requirements, and start-with-Read guidance; (6) Three accounting scenarios — Bookkeeping (bank recon), Tax (computation with FBR), Audit (evidence collection — read-only for independence); (7) Data Security — staff credentials analogy + AI Vendor Evaluation Checklist (5 questions, boxed); (8) Open Standard vs. Lock-in — USB open standard parallel, "MCP is not owned by any company"; (9) 2 exercises (Map Your Tool Connections with fill-in table; Write an AI Integration Brief using Ch4 spec format); (10) 6 key takeaways + Ch7 bridge + Roman Urdu Glossary (9 terms). Word "API" does not appear anywhere.

## Outcome

- Impact: Chapter 6 written, verified, Part 2 opened
- Tests: All 12 CRs pass, all 8 Constitution principles pass, zero code violations, zero API references
- Files: docs/part-2-ai-systems/ch06-mcp-tool-connections.md
- Next prompts: /sp.implement Chapter 7 (AI Skills: The Accounting Skill Catalogue)
- Reflection: The bank reconciliation opening is the chapter's strongest decision — every accountant does this task and immediately recognises the pain point. The Before/After table is the chapter's core teaching moment. The Read/Write/Execute distinction gives readers a practical framework for evaluating risk before granting AI access to any system. The Audit scenario is careful to note read-only access for audit independence — an important professional detail.

## Evaluation notes (flywheel)

- Failure modes observed: None — 2,847 words is well within the 2,650–3,350 range; lighter chapter by design
- Graders run and results (PASS/FAIL): All CRs PASS, Constitution PASS, Code check PASS, API-free PASS
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Chapter 7 should open with the direct question: "Now that AI can connect to your tools — what can it actually DO? Chapter 7 catalogues the accounting skills AI can perform, and shows how to combine them."
