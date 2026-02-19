---
id: 001
title: Chapter 6 MCP Spec Creation
stage: spec
date: 2026-02-18
surface: agent
model: claude-opus-4-6
feature: 006-ch6-mcp-tool-connections
branch: 006-ch6-mcp-tool-connections
user: irfan
command: /sp.specify
labels: ["chapter-6", "specification", "mcp", "tool-connections", "part-2"]
links:
  spec: specs/006-ch6-mcp-tool-connections/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/006-ch6-mcp-tool-connections/spec.md
  - specs/006-ch6-mcp-tool-connections/checklists/requirements.md
tests:
  - Specification quality checklist validated (all items pass)
---

## Prompt

Excute next

## Response snapshot

Created the Chapter 6 specification for "MCP: How AI Connects to Your Tools" — the first chapter of Part 2 (AI Systems You'll Supervise). MCP explained purely through the USB analogy with zero technical depth. Defines 3 reader journeys (Manual Worker P1, Tool Evaluator P2, Bridge Builder P3), 12 content requirements covering Before/After workflow comparison, 3 types of connections (data sources, work tools, external services), 3 accounting scenarios, AI vendor evaluation checklist, data security, open standard vs. lock-in, and 2 conceptual exercises. Includes 7 success criteria, 5 key entities. All checklist items pass.

## Outcome

- Impact: Part 2 opener complete — shifts book tone from personal skills to system supervision
- Tests: Quality checklist at checklists/requirements.md — all items pass
- Files: spec.md (specification), checklists/requirements.md (validation)
- Next prompts: /sp.specify for Chapter 7 (AI Skills — What Agents Can Do)
- Reflection: Keeping the word "API" out entirely was the right call. The vendor evaluation checklist adds immediate practical value for readers whose firms are evaluating AI tools right now.

## Evaluation notes (flywheel)

- Failure modes observed: None
- Graders run and results (PASS/FAIL): Quality checklist PASS, Constitution compliance PASS (all 8 principles)
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Ch7 (Skills) should build naturally on MCP — skills USE MCP connections to perform tasks
