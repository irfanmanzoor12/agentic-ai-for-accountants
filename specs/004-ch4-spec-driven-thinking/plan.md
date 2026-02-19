# Content Plan: Chapter 4 — Spec-Driven Thinking: Write the Brief, Not the Code

**Branch**: `004-ch4-spec-driven-thinking` | **Date**: 2026-02-18 | **Spec**: [spec.md](spec.md)

## Summary

Chapter 4's opening revelation is the chapter's strongest moment: "You Already Write Specs." Engagement letters, audit plans, and terms of reference ARE specifications. This immediately removes the fear of a "new skill" and repositions spec-writing as something accountants already do — but now applied to AI tasks. Core deliverable: the 7-section AI Task Specification Template. Target: 3,500–4,500 words.

## Content Context

**Format**: Markdown (MDX-compatible)
**Target Length**: 3,500–4,500 words
**Writing Style**: Second person, highly practical, template-heavy
**Prerequisite**: Ch2 (prompts), Ch3 (context) — SDD is the next level of structure
**Key Deliverable**: AI Task Specification Template (7 sections), "When to Spec vs. When to Prompt" guide

## Constitution Check

- [x] I — Engagement letter analogy makes spec-writing immediately familiar
- [x] II — Audit planning memo as flagship worked example
- [x] III — Accountant writes specs; AI executes to spec
- [x] IV — SDD explained as engagement letter process, not software methodology
- [x] V — Verification references: spec includes acceptance criteria (like audit objectives)
- [x] VI — Builds on Ch2-3 prompts/context; prepares for Ch5 verification
- [x] VII — This chapter teaches what this book is built on — meta-demonstration
- [x] VIII — Roman Urdu glossary

## Chapter File (Docusaurus)

```text
docs/part-1-personal-skills/ch04-spec-driven-thinking.md
```

## Section Plan

### Section 1: Bridge from Ch3 + The Revelation (CR-001)
**Length**: 300–400 words
**Key Message**: "You already write specs. Engagement letters, audit plans, terms of reference — they are all AI task specifications. You just haven't been using them for AI yet."
**Must Include**:
- Ch3 callback
- Side-by-side comparison table (the revelation):

| Your Professional Document | What It Does | AI Task Spec Equivalent |
|---|---|---|
| Engagement Letter | Defines scope, deliverables, responsibilities | AI Task Specification |
| Audit Plan | Defines procedures, objectives, timing | AI Workflow Specification |
| Terms of Reference | Defines the task, success criteria, constraints | AI Task Brief |
| Tax Computation Memo | Defines computation approach, applicable rules | AI Computation Specification |

---

### Section 2: What Is Spec-Driven Thinking? (CR-001)
**Length**: 300–400 words
**Key Message**: "Think first, specify second, execute third. In that order. Always."
**Must Include**:
- Why vague instructions produce vague results (connection to Ch2 Bad Prompts)
- The discipline of thinking through a task BEFORE giving it to AI
- "A spec isn't about software — it's about clarity. What does 'done' look like?"
- "When to Spec vs. When to Prompt" decision guide (2-column table):
  - Use a Prompt: quick single-step tasks, one-off questions, exploration
  - Write a Spec: multi-step tasks, recurring tasks, deliverables that need verification, tasks with compliance requirements

---

### Section 3: 5 Components of an AI Task Specification (CR-002)
**Length**: 500–600 words
**Key Message**: "Five questions every AI task spec must answer."
**Must Include** (with accounting example per component):
1. **Objective** — What does the completed task look like? ("Classify all 200 transactions per the chart of accounts below, with 98%+ accuracy")
2. **Inputs** — What data does AI need? ("This month's bank statement, the chart of accounts, prior month's reconciliation")
3. **Process** — What steps should AI follow? ("Match each transaction to the closest account; for ambiguous items, flag for human review")
4. **Constraints** — What rules apply? ("Apply IFRS, PKR amounts, flag anything over PKR 500,000")
5. **Output Format** — What should the result look like? ("Table: Date | Description | Amount | Account Code | Notes")

---

### Section 4: The AI Task Specification Template (CR-003) — CORE SECTION
**Length**: 700–900 words
**Key Message**: "Copy this template. Fill it in. Your AI works better immediately."
**Must Include**:
Full 7-section template — formatted for copy-paste:
```
AI TASK SPECIFICATION

Task Name: [Short descriptive name]
Prepared by: [Your name/role]
Date: [Date]

1. OBJECTIVE
[What completed work looks like — one clear, measurable statement]

2. INPUTS
[List all data/documents AI needs to complete this task]
-
-

3. PROCESS
[Step-by-step instructions for AI — what to do, in what order]
Step 1:
Step 2:
Step 3:

4. CONSTRAINTS
[Rules, standards, limits AI must follow]
- Applicable standards:
- Amount thresholds:
- What AI should NOT do:

5. OUTPUT FORMAT
[Exactly how AI should present results]
- Format: [Table / List / Paragraph / Working Paper]
- Required columns/sections:
- Language/style:

6. VERIFICATION CRITERIA
[How you will judge if the output is correct — like audit objectives]
- Accuracy threshold:
- Mandatory checks:
- Flags that require human review:

7. NOTES / EDGE CASES
[Anything unusual, exceptions, client-specific rules]
```
- Annotation of each section: WHY it matters (one sentence per section)

---

### Section 5: Worked Example — Audit Planning Memo (CR-003)
**Length**: 600–800 words
**Key Message**: "Here is a complete AI Task Specification for audit planning — the same approach you already use, now structured for AI."
**Must Include**:
- Complete filled-in AI Task Specification for audit planning
- Side-by-side: Traditional Audit Planning Memo vs. AI Task Specification — show they have the same logic
- Result: with this spec, AI produces a structured audit plan instead of a generic checklist

---

### Section 6: When to Write a Spec vs. When to Just Prompt
**Length**: 300–400 words
**Key Message**: "Not every task needs a spec. Use the 2-minute rule."
**Must Include**:
- The 2-minute rule: "If the task takes less than 2 minutes to explain, just prompt. If it takes longer, write a spec."
- Decision table: 4 criteria with Y/N assessment:
  - Multi-step? → Yes: write spec
  - Recurring? → Yes: write spec
  - Has compliance requirements? → Yes: write spec
  - Needs verification criteria? → Yes: write spec
- "Single Y is enough to write a spec"

---

### Section 7: Exercises + Takeaways + Glossary
**Length**: 600–700 words
**Must Include**:
- **Exercise 1**: Convert an Engagement Letter — take one real engagement letter or audit plan. Rewrite it as an AI Task Specification using the 7-section template.
- **Exercise 2**: Spec From Scratch — pick one recurring accounting task (monthly reconciliation, quarterly tax estimate). Write a complete AI Task Specification and test it with AI.
- 6 key takeaways
- Ch5 preview: "You've now specified what 'done' looks like. Chapter 5 teaches you how to VERIFY that AI delivered it."
- Roman Urdu glossary: Specification, AI Task Spec, Objective, Constraint, Verification Criteria, Spec-Driven Thinking, Deliverable, Acceptance Criteria

## Section Word Targets

| Section | Target Words |
|---|---|
| 1. Bridge + Revelation | 300–400 |
| 2. What Is SDD? | 300–400 |
| 3. 5 Components | 500–600 |
| 4. Template (CORE) | 700–900 |
| 5. Worked Example | 600–800 |
| 6. Spec vs. Prompt Guide | 300–400 |
| 7. Exercises + Close | 600–700 |
| **Total** | **3,300–4,200** |
