---
id: ch02-prompt-engineering
title: "Chapter 2: Prompt Engineering for Accountants"
sidebar_label: "Ch2: Prompt Engineering"
sidebar_position: 2
---

# Chapter 2: Prompt Engineering for Accountants

---

## 1. From Understanding AI to Using AI

Chapter 1 showed you the *why* — the paradigm shift, the Digital FTE, the Supervisor Mindset. Now comes the *how*.

Before you can supervise AI, you need to communicate with it. That communication happens through prompts — the instructions, questions, and context you type into an AI tool. The quality of your prompt determines the quality of AI's response. Every time. Without exception.

This chapter gives you a professional framework for writing prompts. Not tips and tricks — a system. The 6-Part Prompting Framework is adapted from how accounting professionals already communicate: structured, purposeful, and specific. By the end of this chapter, you will write prompts that produce professional-quality accounting output consistently.

**A prompt is like the instructions you give to a junior accountant.** The more specific and structured your instructions, the better the work you get back. A vague brief produces a vague result. A well-written brief produces work you can actually use.

This principle is not new. You already know it from engagement letters, audit instructions, and tax briefs. This chapter simply applies it to AI.

---

## 2. Your First Prompt: A Step-by-Step Walkthrough

Open ChatGPT (chat.openai.com) or Claude (claude.ai) on your phone or laptop. You do not need a paid account for this exercise.

**Step 1:** Click "New Chat" or start a fresh conversation.

**Step 2:** Type this prompt exactly:

> *Explain IFRS 16 — Leases — to a Pakistani accountant in 5 bullet points. Use simple English. Include how a finance lease affects the balance sheet.*

**Step 3:** Read the response. Within 20–30 seconds, AI will produce five structured points about IFRS 16.

**Step 4:** Evaluate the response. Ask yourself:
- Is each point accurate?
- Is the balance sheet treatment correct?
- Is anything important missing?
- Is the language simple enough for a client briefing?

**What If AI Gets It Wrong?** This happens. AI can misquote a paragraph number, confuse an amendment date, or describe a standard slightly inaccurately. This does not mean the tool is useless — it means the output needs verification, exactly as you would verify a junior's research. Chapter 5 covers verification in detail. For now: never send AI output to a client without reviewing it first.

You have just used Level 1 AI. A single question, a single answer. Useful, but limited. The rest of this chapter teaches you Level 2 — structured, professional, repeatable.

---

## 3. Bad Prompt vs. Good Prompt

The most common reason AI produces disappointing results is not a limitation of AI. It is a poorly written prompt. Compare these four examples.

| Accounting Task | Vague Prompt | What AI Returns | 6-Part Prompt | What AI Returns |
|---|---|---|---|---|
| Expense classification | *"Classify these expenses"* | *"Could you provide more details about the expenses you need classified?"* — AI cannot proceed | *"You are a bookkeeper for a manufacturing company. Classify the following 10 expenses according to the chart of accounts below. Format as a table: Date, Description, Amount (PKR), Account Code, Notes. Flag any item where classification requires judgment."* | Structured table with every item classified, judgment flags on 2 ambiguous items |
| Tax computation | *"Calculate the tax"* | *"I need more information — which type of tax? Which period? What is the taxable income?"* — unhelpful | *"Act as an FBR tax advisor. Calculate the income tax liability for a salaried individual with annual income PKR 2,400,000 for tax year 2025. Apply the current tax rates from the Finance Act 2024. Show your working in a table."* | Step-by-step computation with tax slabs, rates, and final liability |
| Audit finding | *"Write an audit report"* | Generic three-paragraph text with no accounting substance | *"Draft an audit finding for a working paper. Finding: Bank reconciliation not performed for 3 months. Risk: Undetected errors or fraud. Standard: ISA 315. Format: Condition, Criteria, Cause, Effect, Recommendation."* | Professional working paper format with all five sections |
| Financial analysis | *"Analyse the financials"* | *"Please share the financial data you want me to analyse."* | *"Analyse the following income statement for ABC Manufacturing (PKR, FY2025). Calculate: gross margin, operating margin, and net margin. Compare to the prior year figures below. Identify the 3 most significant changes and suggest possible explanations."* | Calculated ratios, year-on-year comparison, three identified changes with explanations |

The pattern is consistent. Vague prompt → AI asks for clarification or produces generic content. Specific, structured prompt → AI produces professional output.

Notice what every good prompt has in common: it tells AI *who it is*, *what to do*, *what data to use*, *what format to produce*, and *what standards apply*. That is the 6-Part Prompting Framework.

---

## 4. Zero-Shot, One-Shot, Few-Shot: The Power of Examples

Before learning the framework, understand one important principle: the more examples you give AI, the closer its output matches your expectations.

**Zero-Shot: No Examples Given**

> *"Classify this transaction: Internet service PKR 8,500 paid by bank transfer."*

AI gives a reasonable answer based on general accounting knowledge. But "general" may not match your chart of accounts. AI might say "Utilities Expense" when your firm uses "IT & Communication Expense" as the account code.

**One-Shot: One Example Given**

> *"Classify transactions using my chart of accounts. Example: Office rent PKR 95,000 → Account: 5210 — Rent Expense.*
> *Now classify: Internet service PKR 8,500 paid by bank transfer."*

Better. AI now has one reference point. It knows your account numbering style and is more likely to match your format.

**Few-Shot: Multiple Examples Given**

> *"Classify transactions using my chart of accounts. Examples:*
> *Office rent PKR 95,000 → Account: 5210 — Rent Expense*
> *Electricity bill PKR 12,000 → Account: 5310 — Utilities Expense*
> *Mobile phone PKR 3,500 → Account: 5320 — IT & Communication*
> *Staff salaries PKR 280,000 → Account: 4110 — Salaries & Wages*
> *Now classify these 10 transactions: [list your transactions]"*

Significantly better. AI has four reference points covering different expense categories. It can now match your account codes, your account names, and your classification logic.

**The analogy:** Training a new junior. If you hand a new junior your chart of accounts and say "classify these," you will get inconsistent results. If you show them four or five classified examples first, they understand your firm's approach. More examples → faster alignment → better results.

For recurring tasks — monthly transaction classification, quarterly expense reviews — invest 5 minutes building a few-shot example set once. Use it every time.

---

## 5. The 6-Part Prompting Framework

This is the core skill of Chapter 2. Six parts. One professional prompt. Every time you write a prompt using all six parts, you give AI everything it needs to produce professional-quality accounting output.

Think of it as your standard format for AI instructions — the same way an engagement letter has a standard format: scope, objectives, deliverables, standards, timeline, responsibilities. The 6-Part Framework is your engagement letter for AI.

---

### Part 1 — Command: Use Accounting Action Verbs

The Command is the first word (or words) of your prompt. It tells AI exactly what *type* of work you want.

Weak commands: *"Tell me about…"* / *"Can you help with…"* / *"I need…"*

Strong commands use accounting-specific action verbs:

| Verb | When to Use |
|---|---|
| **Analyse** | Financial statements, variances, ratios |
| **Reconcile** | Bank statements, ledger accounts, intercompany |
| **Classify** | Transactions, expenses, assets |
| **Prepare** | Working papers, computations, schedules |
| **Calculate** | Tax, depreciation, ratios, accruals |
| **Verify** | Figures, citations, compliance |
| **Draft** | Letters, reports, disclosures, memos |
| **Summarise** | Long documents, meeting notes, standards |
| **Compare** | Year-on-year, budget vs. actual, benchmarks |
| **Audit** | Sampling, procedures, findings |

**Example command:** *"Reconcile the following bank statement transactions against the general ledger…"*

The verb tells AI the job. Before you add anything else, choose the right verb.

---

### Part 2 — Context: Tell AI Who You Are and What You Need

Context is the background AI needs to give you a relevant answer. Without context, AI answers generically. With context, AI answers specifically.

Context has three layers:

1. **Who you are:** Your role and specialisation. *"I am a tax consultant in Pakistan specialising in manufacturing companies."*
2. **What you need:** The specific task and why. *"I need to compute the income tax liability for a client's annual return."*
3. **Applicable standards:** Rules and regulations that govern the output. *"Apply the Income Tax Ordinance 2001 as amended by Finance Act 2024. Use FBR tax slabs for salaried individuals."*

**Full context example:**
> *"I am a senior auditor at a mid-sized accounting firm in Karachi. I am conducting a statutory audit for a private manufacturing company with a June fiscal year end. The client follows IFRS. I need to assess the completeness of the accruals balance."*

With this context, every answer AI gives is tailored to your situation. Without it, you get textbook content that may or may not apply.

---

### Part 3 — Logic: Structure the Output You Want

Logic tells AI how to *organise* its response. This is often the most neglected part of a prompt — and the one that transforms a readable paragraph into a usable work product.

**Without logic:** AI produces flowing prose. You have to extract the relevant figures yourself.

**With logic:** AI produces structured output you can drop directly into a working paper.

Logic examples for accounting:

- *"Organise results in a table with columns: Transaction Date | Description | Amount (PKR) | Classification | Account Code | Notes"*
- *"Present as a numbered list of steps. Each step: action, applicable standard, and risk if skipped."*
- *"Format as an audit working paper with sections: Objective, Procedure, Findings, Conclusion, Recommendation."*
- *"Show your tax computation as a schedule: Gross Income → Allowable Deductions → Taxable Income → Tax Liability → Tax Paid → Balance Due."*

The more specific your Logic instruction, the more useful the output. If you know the exact format your working papers use, describe it. AI will match it.

---

### Part 4 — Roleplay: Assign AI a Professional Role

Roleplay tells AI *who to be*. When you assign AI a professional role, two things happen: the depth of the response increases, and the tone becomes more appropriate for professional use.

Compare:
- Without roleplay: AI answers as a general assistant.
- With roleplay: AI answers as a domain specialist.

**Accounting roleplay examples:**

- *"Act as a senior IFRS specialist with 20 years of experience in listed companies."*
- *"You are an experienced FBR tax advisor who specialises in manufacturing sector tax compliance."*
- *"Act as an internal audit manager reviewing this working paper for quality."*
- *"You are a Big Four audit partner reviewing a junior's draft management letter."*

When you assign an IFRS specialist role, AI cites specific standards, uses professional terminology, and acknowledges nuances. The same question answered without a roleplay gives you a more basic response.

One caution: roleplay improves quality but does not guarantee accuracy. Always verify citations regardless of the role you assign.

---

### Part 5 — Formatting: Demand Professional Output

Formatting tells AI what the final product should *look like*. Accountants work with specific document formats: working papers, management letters, tax computations, financial statement notes. Tell AI to produce in those formats.

**Formatting examples:**

- *"Format as an audit working paper. Include: Prepared by, Reviewed by, Date, Objective, Procedure, Results, Conclusion."*
- *"Present as a professional management letter. Include: Addressee, observation, risk rating (High/Medium/Low), recommendation, and management response field."*
- *"Format this as a financial statement note under IAS 1. Include: accounting policy, disclosure, and comparative figures."*
- *"Structure as a tax computation schedule. Bold the sub-totals. Use PKR with two decimal places."*

When you specify the format, you receive output that can go directly into your working papers with minimal editing. Without formatting instructions, you receive content that needs significant restructuring.

---

### Part 6 — Questions: Make AI Ask Before It Answers

This is the most underused part of the framework — and often the most powerful.

When you add a Questions instruction, you tell AI: *"Before you produce the output, ask me what you need to know."* This prevents AI from making assumptions. It ensures the output is based on your specific situation, not a generic interpretation.

**Questions example:**
> *"Before you begin the tax computation, ask me 5 clarifying questions about the client's income sources and applicable deductions."*

AI will ask about employment vs. business income, rental income, foreign income, zakat paid, provident fund contributions — all the variables that affect the final computation. You answer. Then AI computes with your specific data.

This is particularly valuable for:
- Complex, multi-variable tasks (tax planning, financial modelling)
- New client or new transaction types
- Any task where assumptions made incorrectly would invalidate the output

---

### Putting It All Together: A Complete 6-Part Prompt

Here is a complete tax computation prompt using all six parts, labelled:

> **[Roleplay]** *Act as an experienced FBR tax advisor specialising in individual income tax.*
>
> **[Context]** *I am a tax consultant in Lahore. My client is a salaried individual employed at a private company. Tax year: July 2024 – June 2025. Applicable law: Income Tax Ordinance 2001, Finance Act 2024.*
>
> **[Command]** *Calculate the income tax liability for the following data:*
> *Basic salary: PKR 180,000/month*
> *Medical allowance: PKR 18,000/month*
> *Bonus received: PKR 360,000 (December 2024)*
> *Zakat paid to approved institution: PKR 25,000*
>
> **[Logic]** *Present the computation as a schedule showing: Gross Income breakdown → Allowable deductions → Taxable income → Tax slab applied → Tax liability → Tax credits → Net tax payable.*
>
> **[Formatting]** *Format as a working paper with header fields: Client Name [BLANK], Tax Year, Prepared by [BLANK], Date [BLANK]. Use PKR with commas. Bold all sub-totals.*
>
> **[Questions]** *Before computing, ask me if there are any other income sources, investments, or payments I should include in this computation.*

When you run this prompt, AI will first ask its clarifying questions. After you answer, it will produce a complete, formatted tax computation schedule — professional, structured, and ready for your review.

---

## 6. System Prompts: Setting Up Your AI Assistant's Rules

A system prompt is a set of rules and personality instructions you set *before* your conversation begins. It applies to every message in that session — you write it once, and AI follows it throughout.

Think of it as your firm's policy manual for AI. Every staff member follows the manual without needing to be reminded each time. Your system prompt means AI follows your professional standards without needing to be reminded in each prompt.

**Demo: Accounting AI Assistant System Prompt**

```
You are an accounting AI assistant for a Pakistani accounting practice.

Rules you must always follow:
1. Always cite the specific IFRS standard, FBR rule, or ISA section you are applying. Include paragraph numbers where possible.
2. When you are uncertain about a figure, rate, or rule — say so explicitly. Do not guess.
3. Use PKR for all monetary amounts, formatted with commas (e.g., PKR 1,250,000).
4. When a question requires professional judgment rather than a factual answer, flag it clearly: "⚠ Professional judgment required — consult a qualified accountant."
5. End every substantive response with: "Please verify this against the primary source before relying on it professionally."
```

**How to set a system prompt:**
- **In ChatGPT:** Go to Settings → Personalization → Custom Instructions. Paste your system prompt in the "How would you like ChatGPT to respond?" field.
- **In Claude:** Create a new Project. In the Project Instructions field, paste your system prompt. All conversations within that project follow these instructions.

With this system prompt active, every response will cite standards, flag uncertainty, use PKR, warn about judgment calls, and remind you to verify. You do not need to repeat these requirements in every prompt. You write them once and they apply everywhere.

Build one system prompt per specialisation: one for tax work, one for audit, one for bookkeeping. Switch between them as you switch tasks.

---

## 7. The Accountant's AI Verification Checklist

AI produces drafts. *You* produce signed deliverables. The checklist below is the bridge between the two.

This is the first time this checklist appears in the book. It will appear again — referenced or expanded — in every chapter where AI produces accounting output. Professional standards do not change because AI was involved.

---

> ### Accountant's AI Verification Checklist
>
> Before using any AI-generated accounting output in professional work:
>
> - [ ] **1. Is the standard or law citation real?** Look up the specific paragraph or section AI cited. Does it exist? Does it say what AI claims?
> - [ ] **2. Is the math correct?** Recalculate at least one key figure independently. Do not assume calculations are correct because they look professional.
> - [ ] **3. Is this the current version of the regulation?** Check the effective date. Tax rates and accounting standards change. AI may apply an outdated version.
> - [ ] **4. Is professional judgment being applied or avoided?** AI should flag judgment calls, not make them. If AI has decided something that requires your assessment — review that decision.
> - [ ] **5. Would you sign off on this as your own work?** The final test. If you would not put your name on it without changes, do not use it without changes.

---

Apply this checklist to every AI output before it enters a client file, a working paper, or a deliverable. Five checks. Every time.

---

## 8. Prompt Template Library

These five templates are ready to use. Copy them, fill in the bracketed fields with your data, and run them. Each template uses the 6-Part Framework — the parts are embedded in the structure.

---

**Template 1: Transaction Classification**

> Act as a bookkeeper following IFRS for SMEs.
> I am classifying transactions for [COMPANY NAME], a [INDUSTRY] company. Fiscal year: [MONTH–MONTH].
> Using the chart of accounts below, classify the following transactions into a table with columns: Date | Description | Amount (PKR) | Account Code | Account Name | Notes.
> Flag any transaction where the classification requires judgment as "⚠ Judgment required."
>
> **Chart of accounts:** [Paste your relevant account codes and names]
> **Transactions to classify:** [Paste your transaction list]

---

**Template 2: Accounting Standard Explanation**

> Act as a senior IFRS specialist.
> I am a [YOUR ROLE] preparing a client briefing on [STANDARD NAME, e.g., IFRS 16].
> Explain the key requirements in 5–7 bullet points. For each point: state the requirement, give a practical example relevant to [INDUSTRY], and cite the specific paragraph number.
> Keep language professional but accessible — this is for a non-accountant business owner.

---

**Template 3: Audit Working Paper Draft**

> Act as an audit manager drafting working papers to ISA standards.
> I am auditing [ACCOUNT OR AREA, e.g., "Accounts Receivable"] for a [INDUSTRY] company.
> Draft a working paper with the following sections: Objective | Applicable Standard (cite ISA) | Procedure Performed | Findings | Conclusion | Points for Partner.
> Materiality: PKR [AMOUNT]. Audit risk assessment: [HIGH/MEDIUM/LOW].
> Data: [Paste relevant data or describe what you found]

---

**Template 4: Tax Computation**

> Act as an FBR tax advisor.
> Compute the income tax liability for [INDIVIDUAL/COMPANY] for tax year [YEAR].
> Applicable law: Income Tax Ordinance 2001, Finance Act [YEAR].
> Present as a schedule: Income sources → Allowable deductions → Taxable income → Tax liability → Tax credits → Net payable.
> Data: [Paste income and deduction figures]
> Before computing, ask me 3 clarifying questions about income sources or deductions I may have missed.

---

**Template 5: Client Letter or Email Draft**

> Act as a senior accountant drafting professional client correspondence.
> Draft a [TYPE: letter/email] to [CLIENT TYPE, e.g., a private company director] regarding [SUBJECT, e.g., "outstanding tax return for TY2024"].
> Tone: professional but clear. Include: the key message, required action from client, deadline, and consequences of non-action.
> Keep to [NUMBER] paragraphs. No legal jargon.
> Context: [Brief description of the situation]

---

## 9. Hands-On Exercises

Three exercises. Each takes under 15 minutes with a free account. Do them in order — they build on each other.

---

### Exercise 1: The Classification Challenge

**Objective:** See how zero-shot, one-shot, and few-shot produce different results.

**Step 1 — Zero-Shot:**
Open a new AI conversation. Type:
> *"Classify this transaction: Repairs to office air conditioning unit, PKR 45,000, paid by bank transfer."*

Note AI's response — account code and name it suggests.

**Step 2 — One-Shot:**
Start a fresh conversation. Type:
> *"Classify transactions for a service company. Example: Office cleaning PKR 8,000 → 5410 — Repairs & Maintenance.*
> *Now classify: Repairs to office air conditioning unit, PKR 45,000, paid by bank transfer."*

Note the difference. Does AI now match your account numbering format?

**Step 3 — Few-Shot:**
Start another fresh conversation. Type:
> *"Classify transactions for a service company using this chart of accounts:*
> *Office cleaning PKR 8,000 → 5410 — Repairs & Maintenance*
> *Electricity bill PKR 15,000 → 5310 — Utilities — Electricity*
> *Staff tea and refreshments PKR 2,500 → 5720 — Staff Welfare*
> *Now classify: (1) Repairs to air conditioning PKR 45,000, (2) Generator fuel PKR 12,000, (3) Annual fire extinguisher inspection PKR 8,500."*

**Reflection:** Which result matched your firm's classification approach most closely? What changed between zero-shot and few-shot? This is why context and examples matter.

---

### Exercise 2: Build a Complete 6-Part Prompt

**Objective:** Apply all six parts of the framework to a real task from your work.

**Step 1:** Choose a task you did this week or last week — any accounting task. It could be a reconciliation, a computation, a working paper, or a client email.

**Step 2:** Write a complete 6-Part prompt for that task:
- **Command:** Which action verb fits? (Analyse / Reconcile / Classify / Prepare / Calculate / Verify / Draft…)
- **Context:** Your role, the client's situation, the applicable standards
- **Logic:** How should AI organise the output?
- **Roleplay:** Which professional role should AI take?
- **Formatting:** Which document format does the output need to match?
- **Questions:** What should AI ask before starting?

**Step 3:** Run the prompt. Review the output against the Verification Checklist.

**Reflection:** Which of the six parts made the biggest improvement to the output? That part is your current weakest element — keep practising it.

---

### Exercise 3: Build Your AI Persona

**Objective:** Create a system prompt for your accounting specialisation and test it.

**Step 1:** Decide your primary focus: Tax / Audit / Bookkeeping / Advisory.

**Step 2:** Write a system prompt for that specialisation using this structure:
- What role AI takes ("You are an accounting AI assistant specialising in [YOUR SPECIALISATION]…")
- 3–5 rules that govern every response (citation requirements, uncertainty handling, PKR formatting, professional judgment flags, verification reminder)

**Step 3:** Set it in ChatGPT Custom Instructions or a Claude Project.

**Step 4:** Ask three different questions in that session — a technical question, a practical question, and a judgment-heavy question. Review: Does AI stay consistent? Does it cite standards? Does it flag judgment calls?

**Reflection:** Did your system prompt produce more consistent, professional output than conversations without it? What would you add or change?

---

## 10. What's Next: Context Engineering

You now have the vocabulary. The 6-Part Framework gives you a repeatable, professional standard for communicating with AI. But a framework is only the beginning.

Chapter 3 — Context Engineering — gives you the *strategy* behind the vocabulary. A great prompt in the wrong context is like a great question asked at the wrong meeting. Context Engineering teaches you how to sustain quality across entire working sessions — not just one good prompt, but a system that works every time.

---

## 11. Key Takeaways

- **A prompt is an instruction to a junior.** Specificity and structure determine quality — in both cases.

- **The 6-Part Framework is your professional standard.** Command, Context, Logic, Roleplay, Formatting, Questions. Use all six for any serious accounting task.

- **Examples matter more than you think.** Few-shot prompting — providing 3–5 examples that match your firm's approach — dramatically improves classification and formatting accuracy.

- **System prompts set standing rules.** Write your firm's professional standards once. AI follows them in every subsequent conversation.

- **The Verification Checklist is non-negotiable.** AI produces drafts. Five checks before every deliverable. Every time.

- **Templates save time.** Five ready-to-use templates in this chapter. Customise once, use repeatedly. Build your personal prompt library from here.

---

## 12. Roman Urdu Glossary

| English Term | Roman Urdu | Meaning in Context |
|---|---|---|
| Prompt | AI Ko Hidayat / Hukm | Woh likhawat jo aap AI ko dete hain — kaam karne ka tareeqa batane ke liye |
| Zero-Shot | Bina Misaal Ke | AI ko koi example diye baghair seedha kaam karne ko kehna |
| One-Shot | Ek Misaal De Kar | Ek example de kar AI ko guide karna |
| Few-Shot | Chand Misaalein De Kar | Teen se paanch examples de kar AI ko train karna |
| 6-Part Framework | Chhey Hissey Wala Dhanccha | Prompt likhne ka professional tareeqa — chhe parts mein |
| Command | Hukm / Kaam Batao | Prompt ka pehla lafz — AI ko batao kya karna hai |
| Context | Halaat / Pasmanzar | AI ko apni situation aur zaroorat batana |
| System Prompt | Bunyadi Hidayaat | Woh hukm jo AI ke liye puri baat-cheet pe laagu hoti hain |
| Verification Checklist | Tasdeeq Ki Fehrist | AI output check karne ki paanch-point list |
| Roleplay | Kirdar Dena | AI ko koi professional role assign karna jaise "Senior IFRS Expert" |
