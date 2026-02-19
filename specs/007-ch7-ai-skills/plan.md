# Content Plan: Chapter 7 — AI Skills: What Agents Can Do

**Branch**: `007-ch7-ai-skills` | **Date**: 2026-02-18 | **Spec**: [spec.md](spec.md)

## Summary

Chapter 7 delivers the most satisfying "aha moment" in Part 2: the Accounting AI Skills Catalogue. Reading through 15 specific skills — each one a task accountants do daily — makes the abstract concept of "AI can help" completely concrete. The LEGO analogy for composability turns individual skills into a buildable system. Core deliverables: Full Skills Catalogue (Bookkeeping + Tax + Audit), composability via LEGO, Skills Requirement Template. Target: 3,500–4,500 words.

## Content Context

**Format**: Markdown (MDX-compatible)
**Target Length**: 3,500–4,500 words
**Prerequisite**: Ch6 (MCP/connections) — skills need connections to be useful
**Key Deliverables**: 15-skill Accounting AI Skills Catalogue, Skills vs. Judgment table, Skill Maturity Levels (Assist→Draft→Execute), Skills Requirement Template

## Constitution Check

- [x] I — Skills described as "what a junior does," not as APIs or functions
- [x] II — 15 skills are all real accounting tasks: Classify, Reconcile, Accrue, Compute, Research, Sample, etc.
- [x] III — Accountant decides WHICH skills to use and in WHAT ORDER
- [x] IV — Skills = "LEGO bricks," not microservices or functions
- [x] V — Every skill entry notes what verification looks like for that skill
- [x] VI — Builds on Ch6 (connections enable skills), prepares for Ch8 (skills compose into agents)
- [x] VII — Plan written before content
- [x] VIII — Roman Urdu glossary

## Chapter File (Docusaurus)

```text
docs/part-2-ai-systems/ch07-ai-skills.md
```

## Section Plan

### Section 1: Bridge + What Is an AI Skill? (CR-001)
**Length**: 250–350 words
**Key Message**: "A skill is one thing AI can reliably do. Think of it as a job description item."
**Must Include**: Ch6 callback, "job description item" analogy, skill vs. agent distinction preview

---

### Section 2: The Accounting AI Skills Catalogue — CORE (CR-002)
**Length**: 1,200–1,500 words (the centrepiece)
**Key Message**: "Fifteen skills. Every one a task you do daily. Every one AI can do."
**Format**: Three groups, each with 5 skills as a structured table
**Must Include**:

**Bookkeeping Skills** (5):
| Skill | What AI Does | Verification Required |
|---|---|---|
| Classify | Matches transactions to chart of accounts | Human reviews misclassifications |
| Reconcile | Matches bank vs. ledger, flags differences | Human resolves differences |
| Accrue | Calculates and drafts accrual entries | Human approves before posting |
| Depreciate | Calculates depreciation per schedule | Human verifies rates match FBR/IFRS |
| Report | Drafts trial balance, P&L, balance sheet | Human reviews for completeness |

**Tax Skills** (5):
| Skill | What AI Does | Verification Required |
|---|---|---|
| Compute | Calculates tax liability from financial data | Human verifies rate + base |
| Research | Finds relevant FBR rules, SROs, circulars | Human verifies currency and applicability |
| Plan | Identifies legal optimization opportunities | Human judgment on risk appetite |
| Draft Return | Prepares tax return data | Human reviews before ANY filing |

**Audit Skills** (4-5 — confirm in spec):
| Skill | What AI Does | Verification Required |
|---|---|---|
| Analyze | Identifies patterns, outliers, trends | Human assesses significance |
| Sample | Selects audit sample per ISA 530 | Human reviews sample logic |
| Draft WP | Creates audit working paper structure | Human adds professional content |
| Draft Letter | Creates management letter draft | Human reviews before issuing |

---

### Section 3: Skills vs. Professional Judgment (CR-004)
**Length**: 350–450 words
**Key Message**: "AI handles the procedure. You handle the judgment."
**Must Include**:
- Table: Skill (AI does) | Professional Judgment (You do)
  - Classify → Judgment on unusual/new transaction types
  - Reconcile → Judgment on whether a difference is material
  - Compute tax → Judgment on positions and risk
  - Analyze audit → Judgment on what is a finding vs. noise
- "Every skill has a judgment boundary. AI operates on one side; you operate on the other."

---

### Section 4: Composability — The LEGO Analogy (CR-003)
**Length**: 400–500 words
**Key Message**: "Skills are LEGO bricks. An agent is a LEGO model built from those bricks."
**Must Include**:
- Individual LEGO brick = individual skill
- LEGO model = agent combining multiple skills into a workflow
- Example: Monthly Tax Preparation = Compute + Research + Draft Return (3 skills in sequence)
- Example: Month-End Close = Classify + Reconcile + Accrue + Report (4 skills in sequence)
- "You don't need to build the LEGO factory. You choose the bricks and decide the model."

---

### Section 5: Skill Maturity Levels (CR-005)
**Length**: 300–400 words
**Key Message**: "The same skill can operate at three levels. Where you position it depends on trust."
**Must Include**:
- 3-level table: Level | What AI Does | Human Role | When to Use
  - Assist: AI suggests, human decides and executes
  - Draft: AI produces a complete draft, human reviews and finalizes
  - Execute: AI executes within guardrails, human reviews summary
- "Skill maturity connects to the Trust Ladder in Chapter 11."

---

### Section 6: Skills Requirement Template (CR-006)
**Length**: 300–400 words
**Key Message**: "Before adding a skill to a workflow, specify it."
**Must Include**:
```
SKILLS REQUIREMENT
Skill Name: [e.g., "Classify Transactions"]
Maturity Level: Assist / Draft / Execute
Inputs Required: [what AI needs to perform this skill]
Output Format: [what AI produces]
Accuracy Threshold: [minimum acceptable — e.g., 95%]
Verification Method: [how human checks this skill's output]
Connected Skills: [skills this feeds into or receives from]
```

---

### Section 7: Exercises + Takeaways + Glossary
**Length**: 500–600 words
**Must Include**:
- **Exercise 1**: Build Your Skills Inventory — review the catalogue. Mark: (A) already doing, (B) could do with AI now, (C) will do with AI in 3 months. Prioritize B items.
- **Exercise 2**: Design a Skill Sequence — pick one multi-step task (month-end close, quarterly filing). List the skills involved in order. Draft a Skills Requirement for the most important one.
- 6 key takeaways
- Ch8 preview: "Skills are what agents DO. Chapter 8 introduces the agents who DO them — Hisaab, Mehsool, and Jaiza."
- Roman Urdu glossary: Skill, Accounting AI Skills, Composability, LEGO Analogy, Maturity Level, Assist Level, Draft Level, Execute Level, Skills Catalogue

## Section Word Targets

| Section | Target Words |
|---|---|
| 1. Bridge + What Is a Skill? | 250–350 |
| 2. Skills Catalogue (CORE) | 1,200–1,500 |
| 3. Skills vs. Judgment | 350–450 |
| 4. LEGO Composability | 400–500 |
| 5. Skill Maturity Levels | 300–400 |
| 6. Skills Requirement Template | 300–400 |
| 7. Exercises + Close | 500–600 |
| **Total** | **3,300–4,200** |
