---
id: ch04-spec-driven-thinking
title: "Chapter 4: Spec-Driven Thinking — Write the Brief, Not the Code"
sidebar_label: "Ch4: Spec-Driven Thinking"
sidebar_position: 4
---

# Chapter 4: Spec-Driven Thinking — Write the Brief, Not the Code

> *"The spec is your source code."*
> — Agent Factory thesis

Chapter 3 taught you to design context — the information AI needs to work at your professional level. This chapter teaches you to design intent — exactly what you want AI to produce, how it should be structured, and what "done" looks like before you start. Together, context and spec are the complete AI supervisor toolkit.

If context engineering is setting up the briefing room, spec-driven thinking is writing the brief itself.

There is one thing you need to know before reading further. You already know how to do this. You have been doing it your entire career.

---

## You Already Write Specs

Every accountant writes specifications. They just do not call them that.

Read the table below. You will recognise every document in the left column. Now look at the right column.

| Your Professional Document | What It Does | AI Equivalent |
|---|---|---|
| **Engagement Letter** | Defines scope, objectives, deliverables, and responsibilities | AI Task Specification |
| **Audit Plan** | Maps procedures, timing, team assignments, and materiality | AI Workflow Plan |
| **Terms of Reference** | Sets boundaries, authority, and reporting requirements | AI Constraints and Rules |
| **Working Paper Template** | Standardises format, content, and review points | AI Output Template |
| **Quality Control Checklist** | Ensures completeness, accuracy, and compliance | AI Verification Criteria |

These are specifications. Every time you write an engagement letter, you are defining scope, objectives, deliverables, and acceptance criteria. Every time you write an audit plan, you are mapping out a step-by-step process with quality gates. Every time you create a working paper template, you are specifying exactly how output must be structured and presented.

You have been writing specifications your entire professional life. You just have not been using them for AI yet.

This is the shift Chapter 4 asks you to make: take the same discipline you already apply to client engagements and apply it to directing AI. Stop giving AI vague instructions. Start giving AI a brief — written with the same rigour you bring to a client engagement letter.

---

## What Is Spec-Driven Thinking?

Spec-driven thinking is the discipline of defining what "done" looks like BEFORE you start a task.

In accounting, you already practice this. You do not walk into an audit without an audit plan. You do not begin a tax engagement without understanding the scope. You do not produce financial statements without knowing the applicable standards and disclosure requirements. You think first, plan second, execute third.

Spec-driven thinking applies that same logic to directing AI:

1. **Think first** — What exactly do I want? What are the boundaries? What standards apply? What should the output look like?
2. **Specify second** — Write it down in a structured brief before typing anything into ChatGPT or Claude.
3. **Execute third** — Give AI the spec and let it work.

The alternative — typing a vague request and hoping AI figures out what you mean — is the AI equivalent of telling a junior: "Just prepare something on the audit." You know what you get back.

**When vague instructions produce vague results, the problem is almost always a missing spec.**

### When to Write a Spec vs. When to Just Prompt

Not every AI interaction needs a formal specification. Here is the rule:

| Use a Prompt (Chapter 2 approach) | Write a Spec (Chapter 4 approach) |
|---|---|
| Quick single-step tasks | Multi-step tasks or workflows |
| One-off questions or explanations | Recurring tasks you do regularly |
| Exploratory queries ("Explain IFRS 16 to me") | Professional deliverables (audit memos, advisory letters) |
| Tasks that take less than 15 minutes | Tasks with compliance or standards requirements |
| You're the only one who needs the output | Output that others will review or rely on |
| No verification needed | Needs a quality check before sign-off |

One "yes" in the right column is enough reason to write a spec. If the task is multi-step, recurring, compliance-related, or something you would need to review before signing off — write a spec first.

---

## The 5 Components of an AI Task Specification

Every professional specification you have ever written shares the same core logic. An AI task specification follows the same structure — just applied to directing AI instead of directing a team.

Here are the five components, each mapped to the accounting document you already know:

### Component 1: Objective
*Accounting equivalent: Engagement letter scope clause*

What must AI produce? Be specific — "Draft an audit planning memo for a new manufacturing client" not "help with audit planning." The objective is one clear, measurable statement of what completed work looks like.

**Example:** "Prepare a structured audit risk assessment identifying the top 5 areas of material misstatement risk for a mid-size textile manufacturer, with recommended audit procedures for each risk area."

### Component 2: Inputs
*Accounting equivalent: Client information package*

What information are you providing to AI? List every document, dataset, or reference AI needs to complete the task. Be explicit — AI cannot ask for what you forgot to include.

**Example inputs for an audit risk assessment:**
- Current year draft trial balance (pasted below)
- Prior year comparative figures
- Three key financial ratios: current ratio, debt-to-equity, gross margin
- Industry: textile manufacturing, mid-size, export-oriented

### Component 3: Process
*Accounting equivalent: Audit programme steps*

What should AI do, and in what order? Break complex tasks into steps. This mirrors an audit programme — each procedure listed clearly so nothing is skipped.

**Example process steps:**
- Step 1: Analyse the trial balance and identify accounts with significant year-on-year movements
- Step 2: For each significant movement, assess the possible causes and associated risks
- Step 3: Cross-reference against the prior year findings listed in the context
- Step 4: Rank risks by likelihood and potential impact
- Step 5: For the top 5 risks, recommend specific ISA-compliant audit procedures

### Component 4: Constraints
*Accounting equivalent: Applicable standards and scope boundaries*

What rules must AI follow? What is out of scope? What must AI NOT do?

**Example constraints:**
- Apply International Standards on Auditing (ISAs)
- Do not suggest procedures that require specialised valuation expertise without flagging that a specialist is needed
- Flag any area where the risk requires partner-level judgment rather than staff-level procedures
- Present all amounts in PKR

### Component 5: Output Format
*Accounting equivalent: Working paper template*

Exactly what should the output look like? Specify headings, tables, structure, and level of detail. This is the most commonly skipped component — and the one that causes the most rework.

**Example output format:**
- Table with columns: Risk Area | Risk Description | Likelihood (High/Medium/Low) | Potential Impact | Recommended Audit Procedure
- Follow each table with a brief narrative summary (2-3 sentences)
- Format as an audit planning working paper with reference number, date, and preparer fields at the top

---

## The AI Task Specification Template

Here is the complete template. Copy it. Fill it in. Your AI works better immediately.

---

**AI TASK SPECIFICATION**

```
TASK SPECIFICATION
Task Name:  [Short descriptive name — e.g., "Audit Risk Assessment: ABC Textiles FY2025"]
Prepared by: [Your name and role]
Date: [Date prepared]
For use with: [ChatGPT / Claude / other]

1. OBJECTIVE
[One clear, measurable statement of what completed work looks like]
What AI must produce:
How "done" is defined:

2. INPUTS
[Everything AI needs to complete this task — list each item]
- Item 1:
- Item 2:
- Item 3:
[Note: paste or attach the actual data after this spec]

3. PROCESS
[Step-by-step instructions — what to do, in what order]
Step 1:
Step 2:
Step 3:
Step 4:
[Add as many steps as needed — more steps = more consistency]

4. CONSTRAINTS
[Rules, standards, and limits AI must follow]
Applicable standards:
Applicable laws or regulations:
Amount thresholds to flag:
What AI must NOT do:
What requires human judgment (do not automate):

5. OUTPUT FORMAT
[Exactly how AI should present results]
Format: [Table / List / Working Paper / Narrative / Combined]
Required headings or columns:
Level of detail required:
Tone and language: [Professional / Plain English / Formal / Semi-formal]
Length guidance: [Approximate length or number of items]

6. VERIFICATION CRITERIA
[How you will judge if the output is correct and complete]
Accuracy check: [e.g., "Math must be verified against input figures"]
Completeness check: [e.g., "All 5 risk areas addressed"]
Standards check: [e.g., "Each procedure references a specific ISA"]
Mandatory flags: [e.g., "Flag anything requiring partner review"]

7. NOTES AND EDGE CASES
[Anything unusual, client-specific rules, or known complications]
-
-
```

---

**Why each section earns its place:**

| Section | Why It Matters |
|---|---|
| **Objective** | Tells AI what success looks like — without this, AI decides for itself |
| **Inputs** | Prevents AI from guessing or inventing data it doesn't have |
| **Process** | Ensures multi-step tasks are completed in the right order |
| **Constraints** | Keeps AI within your professional and regulatory boundaries |
| **Output Format** | Eliminates reformatting work — AI delivers what you need, not what it prefers |
| **Verification Criteria** | Gives you a checklist to review AI's work against — like audit objectives |
| **Notes and Edge Cases** | Handles the exceptions that would otherwise derail the output |

---

## Worked Example — Audit Planning Memo

Here is a complete, filled-in AI Task Specification for a common accounting task: an audit planning memo for a new client.

---

**AI TASK SPECIFICATION — WORKED EXAMPLE**

```
TASK SPECIFICATION
Task Name:  Audit Planning Memo — Faisal Textiles (Pvt) Ltd, FY ended June 30, 2025
Prepared by: Senior Auditor
Date: October 2025

1. OBJECTIVE
Prepare a structured audit planning memo identifying the top 5 areas of material
misstatement risk for Faisal Textiles, with specific ISA-compliant audit procedures
for each risk. The memo will be reviewed by the engagement partner before fieldwork.

2. INPUTS
- Comparative trial balance for FY2025 and FY2024 (pasted below)
- Materiality: Overall PKR 4,500,000; Performance PKR 3,150,000
- Industry: Textile manufacturing, export-oriented, 400 employees
- Prior year audit opinion: Unmodified
- Prior year management letter findings: 2 issues (inventory valuation, cut-off)

3. PROCESS
Step 1: Review the trial balance for significant year-on-year movements (>15%)
Step 2: Identify high-risk accounts based on movement, industry risks, and prior year issues
Step 3: For each risk, assess inherent risk and control risk
Step 4: Rank the top 5 risks by potential impact on the financial statements
Step 5: For each ranked risk, recommend 2-3 specific audit procedures referencing ISAs

4. CONSTRAINTS
- Apply International Standards on Auditing (ISAs) throughout
- Reference specific ISA numbers for each procedure recommended
- Do not suggest procedures requiring specialist valuers without flagging that a
  specialist may be needed
- Flag any area requiring partner judgment rather than senior-level procedures
- All amounts in PKR

5. OUTPUT FORMAT
Table 1: Risk Summary
Columns: Risk Rank | Risk Area | Account(s) Affected | Risk Level (H/M/L) | Basis for Risk Assessment

Table 2: Audit Procedures
Columns: Risk Area | ISA Reference | Audit Procedure | Responsible | Timing

Followed by: Brief narrative summary (3-5 sentences) suitable for inclusion in the
planning file. Format as a working paper with Ref No, Prepared by, Date, Reviewed by.

6. VERIFICATION CRITERIA
- All 5 risks must reference specific ISA sections, not just ISA names
- Prior year issues (inventory, cut-off) must appear in the risk assessment
- Math: If any percentage movements are calculated, verify against inputs
- Each procedure must be actionable by a senior auditor — not vague ("review" must
  specify what to review, how, and to what standard)
- Would I present this to the engagement partner without changes? If yes, complete.

7. NOTES AND EDGE CASES
- Client is export-oriented: foreign exchange risk is likely a top-3 risk
- Inventory valuation was flagged last year — treat as carry-forward risk
- If AI identifies more than 5 significant risks, rank all of them but develop
  detailed procedures for the top 5 only
```

---

With this spec, AI produces a structured, ISA-referenced, partner-ready document on the first attempt. Without it, AI produces a generic audit risk framework that could apply to any company in any industry.

**The side-by-side comparison:**

| Without a Spec | With This Spec |
|---|---|
| AI applies generic audit risks | AI references Faisal Textiles' actual trial balance movements |
| No ISA references | Specific ISA sections cited for every procedure |
| Generic procedures ("review the accounts") | Actionable procedures ("test export sales cut-off within 10 days of period end per ISA 315") |
| Prior year issues not considered | Inventory and cut-off carry-forward risks explicitly addressed |
| Requires significant rewriting | Ready for partner review with minimal editing |
| Rework time: 45–60 minutes | Rework time: 5–10 minutes |

---

## The Overhead Myth

At this point, some readers are thinking: "This spec template looks like a lot of work. Can't I just ask ChatGPT?"

Here is the honest answer: for a simple query, yes. For a complex professional deliverable, no.

**The time maths:**

| Approach | Time to Prepare | Time to Review/Fix Output | Total Time |
|---|---|---|---|
| Vague prompt | 2 minutes | 45 minutes (rewriting, fixing gaps) | **47 minutes** |
| Structured 6-Part prompt (Ch2) | 8 minutes | 20 minutes (targeted corrections) | **28 minutes** |
| Full spec (this chapter) | 12 minutes | 5–10 minutes (minor adjustments only) | **17–22 minutes** |

A 10-minute spec saves 30 minutes of rework. On a task you do monthly, that is 6 hours a year on a single task. Build specs for your top 10 recurring tasks and the savings compound.

There is a more important reason, though. When you use a spec, the output is reviewable. You can check it against the spec's acceptance criteria the same way you check an audit working paper against the audit programme. You know what "complete" looks like. Without a spec, you are reviewing against a standard that exists only in your head — and that is not a professional quality process.

---

## Specs and the Supervisor Role

There is a line from the Agent Factory thesis that belongs at the centre of this chapter: "The spec is your source code."

In the programming world, source code is the most important document — it is the precise, unambiguous instruction set that machines follow. In the AI era, for accountants, the spec plays that role. It is the most important document you produce when directing AI work.

As an AI supervisor, you do not touch the keyboard to do the work. You write the spec. AI does the work. You verify the output against the spec's acceptance criteria. This is exactly how you supervise a team of junior accountants — except the team works 168 hours a week, never calls in sick, and follows your instructions with perfect consistency, every time. The quality of that team's output depends entirely on the quality of the brief you give them.

A senior accountant who writes precise engagement letters already thinks like an AI supervisor. This chapter simply makes that connection explicit.

---

## Hands-On Exercises

### Exercise 1: Convert an Engagement Letter to an AI Spec

**Time:** 20 minutes

Take one real or sample engagement letter from your practice — audit, tax, or advisory. It does not need to be long; a simple 2-page letter works well.

Read through it and map each section to the AI Task Specification Template:

- The scope clause → becomes your **Objective**
- The services to be provided → becomes your **Process**
- The information client will provide → becomes your **Inputs**
- The applicable standards mentioned → become your **Constraints**
- The format and timing of deliverables → become your **Output Format**
- Any quality review requirements → become your **Verification Criteria**

Once you have filled in all 7 sections, use the spec to direct AI through the task. Compare the output to what you would normally get from a prompt. Note specifically: how many corrections did you need to make?

---

### Exercise 2: The Spec vs. No-Spec Challenge

**Time:** 30 minutes

Pick one complex, recurring task from your work — ideally something that currently takes you more than an hour. Good choices: a quarterly tax computation, a management accounts commentary, an analytical review, or an advisory report on a specific standard.

**Round 1 — No spec (5 minutes):** Ask AI to perform the task using only a prompt (using Chapter 2's 6-Part Framework). Record the output. Count: How many corrections, additions, or reformatting steps did you need?

**Round 2 — Full spec (15 minutes):** Write a complete AI Task Specification using the 7-section template. Then give AI the spec and the relevant data. Record the output. Count: How many corrections were needed now?

**Compare the results:**

| Metric | Round 1 (Prompt Only) | Round 2 (Spec + Prompt) |
|---|---|---|
| Time to produce first draft | | |
| Corrections needed | | |
| Standards correctly applied? | | |
| Output format matched expectations? | | |
| Would you sign off on this? | | |

Most accountants who do this exercise report that Round 2 requires two or three corrections at most, compared to a substantial rewriting exercise in Round 1. Keep both outputs — they become a compelling example when you show colleagues why specs matter.

---

## Key Takeaways

1. **You already write specifications.** Engagement letters, audit plans, terms of reference, and working paper templates are all specifications. Chapter 4 simply applies that professional discipline to directing AI.

2. **"The spec is your source code."** In the AI era, the most important document you produce is not a financial statement — it is the specification that tells AI what to build and how to verify it.

3. **The 5 components of every AI spec are: Objective, Inputs, Process, Constraints, and Output Format.** Add Verification Criteria and Notes for professional deliverables.

4. **Vague instructions produce vague results.** A 10-line spec eliminates most rework. The investment in writing the spec always pays off for tasks that take more than 15 minutes.

5. **Use the "When to Spec / When to Prompt" rule.** One-off questions and simple tasks need only a prompt. Multi-step, recurring, compliance-related, or sign-off-required work needs a spec.

6. **As an AI supervisor, the spec is your primary tool.** You write the brief. AI does the work. You verify against the spec. This is the professional workflow of the AI era.

> **Chapter 5 preview:** You have now defined what "done" looks like. Chapter 5 teaches you how to verify that AI actually delivered it — with the same systematic rigour you apply to audit evidence.

---

## Roman Urdu Glossary

*(Key terms in the language of Pakistani accounting practice)*

| English Term | Roman Urdu | Usage in Practice |
|---|---|---|
| Specification (Spec) | Tafseel / Hadayaat Nama | "AI ko kaam dene se pehle ek tafseel likho" |
| Engagement Letter | Muahida Khat | "Engagement letter hi ek spec hai — ab AI ke liye bhi likhein" |
| Objective | Maqsad | "Spec ka pehla hissa: maqsad kya hai?" |
| Constraints | Hadood / Pabandiyan | "Kaunse standards laagu hain, kya nahi karna AI ko?" |
| Acceptance Criteria | Qubooliyat Ki Sharait | "Kaise pata chalega ke kaam mukammal hua?" |
| Deliverable | Haasil-e-Kaar | "Kya cheez AI ne deliver karni hai?" |
| Scope | Daaira-e-Kaar | "Kaam ki seemaen kya hain?" |
| Spec-Driven Thinking | Pehle Socho, Phir Batao | "Kaam shuru karne se pehle brief likho" |
