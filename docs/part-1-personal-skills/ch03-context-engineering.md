---
id: ch03-context-engineering
title: "Chapter 3: Context Engineering — The Core Skill"
sidebar_label: "Ch3: Context Engineering"
sidebar_position: 3
---

# Chapter 3: Context Engineering — The Core Skill

> *"A great prompt in the wrong context is like a great question asked at the wrong meeting."*

Chapter 2 gave you the 6-Part Prompting Framework. You can now write structured, professional prompts that get you far better results than a casual one-liner. That skill matters — but it only solves half the problem.

Here is what you have probably already noticed: even with a well-crafted prompt, AI sometimes gives you a generic answer that ignores your specific standards, your client type, or your firm's way of working. You write a detailed question, but AI answers as if it has never met you before — because it hasn't. Every new conversation, you start from zero.

Chapter 3 fixes that. It teaches you context engineering: the art of designing a complete system of background information so that AI consistently produces professional, relevant, accountant-quality results — not just once, but every time you work on the same kind of task. This is the chapter that separates a ChatGPT hobbyist from an AI supervisor.

**What is context engineering?**

Context engineering is how you design the COMPLETE SYSTEM of information that surrounds every question you ask AI. It is not about how you phrase one question. It is about setting up the environment — your role, your firm's policies, your client's background, the applicable standards, and the expected output format — before you ask your first question. When the environment is right, every prompt in that session produces expert-level results without you having to repeat yourself.

Think of it like this: prompt engineering is giving your junior accountant a good instruction. Context engineering is setting up the entire briefing room — the client file on the desk, the accounting policies manual on the shelf, the regulatory reference on the whiteboard — so that every instruction your junior receives makes sense in full professional context.

---

## The CPU/RAM Mental Model

Before you can engineer context, you need to understand where context lives inside AI.

Here is the most useful mental model you will find in this book — and it uses no technical jargon.

**AI is made of two parts:**

| Component | Technical Name | What It Means for You |
|-----------|---------------|----------------------|
| The brain | LLM (Large Language Model) | AI's reasoning engine — constant, always the same |
| The working memory | Context Window | What AI can "see" right now — YOU control this |

The LLM — the brain — is fixed. You cannot change it. It is what makes AI intelligent. But the context window is yours to manage. It is the information AI has in front of it during your current session: your prompts, AI's responses, any documents you paste in, and any background you provide.

Here is the key insight: **the quality of AI's work depends more on what you put into its working memory than on how intelligent the brain is.** A brilliant accountant with the wrong file will give you the wrong advice. AI is the same. Give it the right context, and ordinary prompts produce excellent results. Give it the wrong context — or no context at all — and even a perfect prompt produces generic output.

**The "Too Little / Too Much / Just Right" rule:**

| Context Problem | What AI Does | What You Get |
|----------------|-------------|-------------|
| Too little context | AI fills the gaps with generic knowledge | Textbook answers that don't fit your client |
| Too much context | AI gets confused by contradictory or irrelevant information | Mixed-up, unfocused, inconsistent output |
| Right context | AI has exactly what it needs for this task | Focused, relevant, professional output |

Your job as an AI supervisor is to find "just right" for every task. The 4 Context Strategies in the next section show you exactly how to do that.

---

## The 4 Context Strategies — Your Core Toolkit

Think of these four strategies as four professional habits. Once you have them, you will use them every time you open a conversation with AI.

**The four verbs to master: Write. Select. Compress. Isolate.**

---

### Strategy 1: Writing Context

**What it means:** Create background documents that AI can reference, before you ask your first question.

Most accountants start a conversation by asking a question. AI supervisors start a conversation by providing a briefing. Writing context means you proactively give AI the information it needs — your role, your firm's policies, the client's background, the applicable standards — before any question is asked.

**Accounting example — Tax Consultant:**

Before asking AI to calculate advance tax, you open your conversation with this written context:

> *"I am a tax consultant at a mid-size accounting firm in Karachi, Pakistan. My clients are mostly private limited companies operating in manufacturing and retail. I work under the Income Tax Ordinance 2001 and Finance Act (current year). My standard output format is a tabular tax computation with each income head shown separately, deductions listed clearly, and the final tax liability reconciled to any advance tax already paid. I always verify tax rates against the actual Finance Act before finalising any computation."*

Now every question you ask in that session — about withholding tax, advance tax, minimum tax — gets answered in the context of YOUR practice, YOUR standards, and YOUR output format. You typed this once. It works for the entire session.

**Why it matters:** Without this written context, AI answers as if you are a generic user asking a generic question. With it, AI answers as if it knows your specialisation, your jurisdiction, and your professional standards.

---

### Strategy 2: Selecting Context

**What it means:** Choose ONLY the information relevant to the current task — not everything you have.

A common mistake is to paste everything you have into an AI conversation: last year's financial statements, the current year's trial balance, the prior audit report, management accounts, and the board minutes — all at once. More information seems safer. It is not.

When you feed AI too much, it loses focus. It starts mixing up which year you are referring to, applies findings from one section to another, and produces output that is technically informed but practically confused.

**Accounting example — Audit Senior:**

You are preparing an audit risk assessment. The client has given you three years of financial statements, five board minutes, a management letter from last year, and the current year's draft accounts.

**Wrong approach — selecting too much:** Paste everything and ask AI to identify audit risks.

**Right approach — selecting just right:** For the risk assessment, select ONLY:
- Current year trial balance (most relevant data)
- Prior year comparative numbers (for trend analysis)
- Last year's management letter findings (known issues carry forward)

Leave out the older financials, board minutes about unrelated decisions, and last year's full audit file. Those belong in a different task with a different focus.

**The selection test:** Before including any document, ask yourself: "If I removed this from the context, would AI's answer change?" If no — leave it out.

---

### Strategy 3: Compressing Context

**What it means:** Summarise long documents into key points before including them as context.

AI's working memory has a limit. A 50-page audit report, a 200-page annual report, or a complex regulatory document cannot be fed into AI all at once — at least not effectively. When the "desk" gets too full, AI starts losing track of what you said at the beginning.

Compressing context is the solution. You use AI itself to create the summary — then use that summary as context for further questions.

**Accounting example — Audit Manager:**

You have last year's 48-page audit report. You need AI to help you plan this year's audit based on prior findings.

**Step 1 — Compress:** Ask AI to summarise the report:

> *"Summarise this audit report in 10 bullet points. Focus on: material misstatements found, significant audit risks identified, management letter observations, and any areas flagged for follow-up in the subsequent audit."*

**Step 2 — Use the summary as context:** In a new conversation, paste the 10-bullet summary as your opening context, then ask your audit planning questions.

You have turned a 48-page document into 10 focused points. AI can hold those 10 points clearly in working memory for the entire session. The quality of the output improves — not because AI got smarter, but because you gave it a cleaner desk.

---

### Strategy 4: Isolating Context

**What it means:** Keep different clients, different tasks, and different engagement types in completely separate AI conversations.

This is the strategy most accountants skip — and it causes the most problems. When you mix a client's tax work and audit work in the same AI conversation, AI starts connecting information that should stay separate. It may apply an audit finding to a tax computation, or use prior year tax rates when you are asking about the current year.

Every separate engagement deserves its own separate AI conversation.

**Accounting example — Tax + Audit for Same Client:**

You act as both tax advisor and auditor for a medium-sized client. Wrong approach: one long ChatGPT conversation where you discuss audit risks in the morning and then ask tax computation questions in the afternoon. AI will remember the audit context and potentially bleed it into the tax answers.

Right approach: two completely separate conversations — one for audit work, one for tax work. When a month is done, close both. Start fresh the next month with fresh context documents.

**The professional parallel:** You keep separate working paper files for audit and tax engagements. You do not mix audit workpapers with tax computations, even for the same client. Context isolation in AI is exactly the same discipline.

---

### The 4 Strategies at a Glance

| Strategy | When to Use | Accounting Scenario |
|----------|------------|-------------------|
| **Writing** | At the start of every session | Paste your role, standards, and client profile before your first question |
| **Selecting** | When you have multiple documents | Include only documents directly relevant to today's task |
| **Compressing** | When a document is too long | Summarise a 50-page audit report before using it as context |
| **Isolating** | When switching clients or tasks | New client = new conversation; tax ≠ audit in the same session |

---

## The Monthly Closing Context Template

Here is the 4 strategies in action — built into a single reusable template.

The Monthly Closing Context Template is a document you fill in once per client and reuse every month. Paste it at the start of any AI conversation about that client's month-end close, and AI immediately knows everything it needs to work at your professional standard.

---

**MONTHLY CLOSING CONTEXT TEMPLATE**

```
ROLE AND BACKGROUND
I am a [senior accountant / accounting manager / finance controller] at [Firm/Company Name].
My specialisation: [Bookkeeping / Management Accounts / Group Reporting]
Applicable standards: [IFRS / IFRS for SMEs / Local GAAP]
Reporting currency: PKR

CLIENT / ENTITY
Company: [Company Name — or describe without identifying: "a mid-size textile manufacturer"]
Industry: [Industry sector]
Fiscal year: [e.g., July to June]
Period being closed: [Month and Year]

ACCOUNTING SETUP
Chart of accounts structure: [Brief description, e.g., "5-digit codes, Class 1=Assets, Class 2=Liabilities, etc."]
Key accounts to watch: [e.g., "Trade Payables 2-1001, Accrued Liabilities 2-2010"]
Depreciation method: [e.g., Straight-line, rates per asset class]
Revenue recognition policy: [e.g., Performance obligation basis under IFRS 15]

KNOWN ISSUES THIS PERIOD
[List any reconciling items, outstanding corrections, or specific areas needing attention]

CLOSING CHECKLIST (verify each before finalising)
1. All sub-ledgers reconciled to general ledger
2. Bank reconciliations completed and reviewed
3. Accruals and prepayments adjusted
4. Depreciation calculated and posted
5. Intercompany transactions eliminated (if applicable)
6. Trial balance balanced and reviewed

OUTPUT REQUIRED
[e.g., "Journal entries for accruals and adjustments" / "Reconciled trial balance" / "Management accounts commentary"]

EXCEPTION THRESHOLDS
Flag any item above: PKR [amount] for my review before posting.
```

---

Why does this template work? It uses all 4 strategies simultaneously:

- **Writing** — You wrote the background before asking anything
- **Selecting** — Only month-end relevant information is included
- **Compressing** — Complex accounting policies are summarised to key points
- **Isolating** — This template is for one client only; a different client gets their own

Once you have filled this template for each of your regular clients, monthly closing AI sessions take two minutes to set up instead of fifteen.

> **Connection to Chapter 12:** The context templates you build here are the early version of AI memory — a concept you will explore fully in Chapter 12. What you are doing manually now (copy-pasting a context document) will eventually happen automatically through memory systems.

---

## Context Limits — The "Desk" Problem

AI's working memory is not infinite. There is a physical limit to how much information AI can hold in front of it at one time. This limit is measured in "tokens" — but you do not need to know what a token is. What you need is the right mental model.

**The desk analogy:**

Imagine a physical desk. It has a fixed surface area. You can place files, reports, reference books, and working papers on it — but when the desk is full, something has to come off before anything new can go on. If you keep piling papers without clearing old ones, important documents slide off the back of the desk and become inaccessible. The work still looks busy, but key information is missing.

AI's context window works exactly like that desk.

| Desk Situation | What AI Experiences | What You Get |
|---------------|--------------------|-|
| Empty desk | AI has no background information | Generic, textbook-level answers |
| Well-organised desk | AI has exactly the right documents | Focused, professional, standards-aware output |
| Overflowing desk | AI cannot find what it needs | Confused, inconsistent, contradictory output |
| Old papers never cleared | AI mixes last session's context with today's | Answers that apply the wrong client, wrong period, wrong standard |

**The practical rule:** Include only information that directly affects the task you are working on right now. Not what might be relevant. Not what was relevant last time. Only what is relevant now.

**Test before you include:** Before pasting any document into your AI conversation, ask: "If I removed this, would AI's answer change?" If the answer is no, leave it out. Your desk stays organised. Your output stays focused.

As conversations grow longer within a session, quality can gradually drift — AI starts "forgetting" what you said in your opening context as new exchanges fill the working memory. The solution is the Compress and Select strategies: keep your context lean, and when a session becomes very long, start a fresh one with a clean context document.

---

## The Context Relevance Checklist

Before you start any AI session for an accounting task, run through this checklist. Five questions. Two minutes. Significantly better output.

---

> **Context Relevance Checklist**
>
> Before opening your AI conversation, confirm:
>
> 1. **Does AI know who I am and what I am doing?**
>    Have you written your role, specialisation, and the specific task for today?
>
> 2. **Does AI have the data it needs for THIS task only?**
>    Have you selected only the relevant documents — this client, this period, this engagement type?
>
> 3. **Is the context from a previous session cleared?**
>    Are you in a fresh conversation, or have you carried over last week's context by mistake?
>
> 4. **Is any long document compressed to its key points?**
>    If you are referencing a long report or policy document, have you summarised it first?
>
> 5. **Have you written the client-specific context AI cannot guess?**
>    Your firm's materiality thresholds, your client's specific accounting policies, your preferred output format — none of this is in AI's general knowledge. You must write it in.

---

If you answer yes to all five, start your session. If you answer no to any of them, take two minutes to fix it. The output quality difference is significant — and once you have context templates ready for your regular clients, the checklist takes thirty seconds.

---

## The Audit Planning Context Template

Here is the same structure applied to a completely different accounting domain — audit planning. This demonstrates that the context template approach is not specific to monthly closing. It works for any recurring professional task.

---

**AUDIT PLANNING CONTEXT TEMPLATE**

```
ROLE AND BACKGROUND
I am an [Audit Senior / Audit Manager / Partner] at [Firm Name].
My specialisation: [Statutory audits / Internal audits / Tax audits]
Applicable auditing standards: [ISAs / ISQM / Local standards]
Applicable accounting standards: [IFRS / IFRS for SMEs / Local GAAP]

CLIENT PROFILE (no identifying details needed)
Industry: [e.g., Manufacturing / Retail / Financial Services]
Entity size: [e.g., Revenue PKR X — approximate range is sufficient]
Audit type: [Statutory / Internal / Special Purpose]
Reporting period: [Year ending]

RISK CONTEXT
Overall materiality: PKR [amount]
Performance materiality: PKR [amount]
Key risk areas from prior year: [List 3-5 carry-forward risks]
New risks this year: [Any significant changes in business, regulation, or industry]
Prior year audit opinion: [Unmodified / Modified — if modified, brief reason]

PRIOR YEAR ISSUES (management letter observations to follow up)
1. [Issue + management response]
2. [Issue + management response]
3. [Issue + management response]

OUTPUT REQUIRED
[e.g., "Draft audit risk assessment" / "Audit planning memo" / "Time budget by section"]
```

---

Once you combine this context template with the system prompt from Chapter 2 — where you defined your AI as a senior ISA-specialist auditor — you have an AI that knows your firm, knows your client type, knows the prior year issues, and knows exactly what output format you need. Every audit planning question you ask in that session benefits from the full professional context.

> **The pattern is the same across all accounting domains.** Monthly closing, audit planning, tax computation, advisory reports — every recurring task becomes a reusable context template. Build them once. Refine them over time. They compound in value with every use.

---

## Context Engineering Is the Foundation

Here is why this chapter appears in Chapter 3, before agents, automation, or any of the more advanced tools in this book.

Everything that comes later depends on good context:

- **Chapter 8 — Agents:** An AI agent that handles your tax work autonomously operates on a context document you designed. The agent is only as good as the context you built for it.
- **Chapter 9 — Orchestration:** When five AI agents work together on a month-end close, each one receives a context document. The workflow is only as organised as the context design.
- **Chapter 12 — Memory:** AI memory systems are built on context templates. What you fill in manually today is what a memory system will fill in automatically tomorrow.
- **Chapter 13 — RAG:** Retrieval-Augmented Generation — where AI searches your firm's document library — is a technique for automatically selecting and compressing context. You will understand it immediately because you understand context engineering now.

Master context engineering in Chapter 3, and the remaining twelve chapters will feel like natural extensions of skills you already have.

---

## Hands-On Exercises

### Exercise 1: Build Your Role Context Document

**Time:** 20 minutes

Create a comprehensive context document for your specific accounting role. This becomes your "opening statement" at the start of every AI session related to your work.

Your document should include:

1. **Your role** — title, specialisation, years of experience (optional)
2. **Your firm or employer** — type (firm, company, government), size, typical client base
3. **Your recurring tasks** — list the three tasks you do most often
4. **Applicable standards** — IFRS, ISAs, Income Tax Ordinance, FBR regulations, local GAAP — whichever apply to your practice
5. **Your preferred output format** — tables, bullet points, narrative, formal working paper format
6. **Key constraints** — "Always flag items above PKR X for my review," "Always cite the relevant standard section," "Always mention if this requires professional judgment"

Once written, open a new Claude or ChatGPT conversation, paste your context document as the first message, then ask three different questions related to your work. Compare the results to questions you asked without any context in Chapter 2's exercises. You will notice the difference immediately.

---

### Exercise 2: Context vs. No-Context Challenge

**Time:** 30 minutes

Pick one complex accounting task — something that genuinely takes you time and requires professional judgment. A good choice: preparing a management accounts commentary, drafting a client advisory letter, or performing an analytical review.

**Round 1 — No context:** Use only Chapter 2's 6-Part Prompting Framework. Ask your question. Record the output.

**Round 2 — Full context:** Build a context document for this task using the Monthly Closing template as your model. Paste it as your opening message. Then ask the same question (or a version of it).

Compare the two outputs side by side:

| Dimension | Round 1 (No Context) | Round 2 (Full Context) |
|-----------|---------------------|----------------------|
| Relevance to your specific situation | Generic? Specific? | Generic? Specific? |
| Standards applied | Correct? Wrong? | Correct? Wrong? |
| Output format | What you wanted? | What you wanted? |
| Amount of follow-up needed | How many clarifications? | How many clarifications? |

Most accountants who do this exercise report that Round 2 requires significantly fewer follow-up questions to get to a usable result. That time saving, multiplied across every AI session you run, is the value of context engineering.

---

## Key Takeaways

1. **Prompt engineering and context engineering are different skills.** Prompt engineering is how you ask one question. Context engineering is how you design the complete information system that makes every question produce professional results.

2. **AI quality depends more on context quality than prompt quality.** A brilliant brain with the wrong information gives wrong answers. Give AI the right context, and ordinary prompts produce excellent output.

3. **The 4 Context Strategies are: Write, Select, Compress, Isolate.** Use them before and during every AI session for professional accounting work.

4. **Context templates are your biggest time investment with the highest return.** Build them once per client, per task type. Reuse them forever.

5. **The "desk" has limited space.** Include only what is relevant now. A clean, focused context outperforms a full, disorganised one every time.

6. **Everything in Part 2 of this book builds on context engineering.** Agents, orchestration, memory, and RAG are all sophisticated forms of context management. Master this chapter, and the rest becomes natural.

> **Chapter 4 preview:** Context tells AI WHAT information it has. Chapter 4 teaches AI WHAT TO DO with that information — using specifications. You will learn to write task specs for AI the same way you already write instructions for a junior team member.

---

## Roman Urdu Glossary

*(Key terms in the language of Pakistani accounting practice)*

| English Term | Roman Urdu | Usage in Practice |
|-------------|------------|-----------------|
| Context | Pasmanzar / Halaat | "Pehle AI ko poora pasmanzar do, phir sawaal karo" |
| Context Engineering | Maloomaat Ka Nizam Banana | "Yeh skill AI supervisor ki asli pehchaan hai" |
| Context Window | Kaam Ki Yaaddaasht | "AI ki kaam ki yaaddaasht محدود hai — dhyan se bharein" |
| Writing Context | Maloomaat Likhna | "Pehle apna role aur client ka background likh kar daein" |
| Selecting Context | Chunna | "Sirf zaroori documents chunein — sab kuch mat daalein" |
| Compressing Context | Mukhtasar Karna | "50 page ki report ko 10 points mein mukhtasar karein" |
| Isolating Context | Alag Rakhna | "Audit aur tax ka kaam alag conversations mein rakhein" |
| Context Template | Kaghaz Ka Dhancha | "Ek baar banaein, baar baar istemaal karein" |
| Context Limit | Mez Ki Jagah | "Mez par itni hi jagah hai — zaroori cheezein hi rakhein" |
| Context Relevance | Mauzu Honay Ki Jaanch | "Kya yeh context is kaam ke liye zaroori hai?" |
