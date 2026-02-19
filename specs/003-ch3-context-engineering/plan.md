# Content Plan: Chapter 3 — Context Engineering: The Core Skill

**Branch**: `003-ch3-context-engineering` | **Date**: 2026-02-18 | **Spec**: [spec.md](spec.md)

## Summary

Chapter 3 is the most important chapter in Part 1 — it teaches the skill that determines whether AI works consistently or randomly. Where Ch2 taught how to write ONE good prompt, Ch3 teaches how to sustain quality across an entire working session. The CPU/RAM mental model and the 4 Context Strategies are the core deliverables. Target: 4,000–5,000 words. Tone: strategic — this is system-level thinking, not just a tip.

## Content Context

**Format**: Markdown (MDX-compatible)
**Target Length**: 4,000–5,000 words
**Writing Style**: Second person, short paragraphs, heavy use of tables and analogies
**Part**: Part 1 — Your Personal Skills
**Prerequisite**: Chapter 2 (prompts) — assumes reader can write structured prompts
**Key Deliverables**: 4 Context Strategies, Monthly Closing Context Template, Context Relevance Checklist

## Constitution Check

- [x] I — CPU/RAM analogy (not token/embedding), desk analogy for context limits
- [x] II — Monthly closing, client file management, audit planning context examples
- [x] III — Accountant as context architect — you design what AI sees
- [x] IV — Context limits = "desk with limited space," not technical window
- [x] V — Verification Checklist referenced when AI uses context
- [x] VI — Builds on Ch2 prompts, prepares for Ch4 spec-driven thinking
- [x] VII — Plan written before content
- [x] VIII — Roman Urdu glossary

## Chapter File (Docusaurus)

```text
docs/part-1-personal-skills/ch03-context-engineering.md
```

## Section Plan

### Section 1: Bridge from Ch2 + "What Is Context?" (CR-001)
**Length**: 250–350 words
**Key Message**: "A great prompt in the wrong context is like a great question asked at the wrong meeting."
**Must Include**: Ch2 callback, briefing-before-a-meeting analogy, one-sentence definition of context engineering

---

### Section 2: The CPU/RAM Mental Model (CR-002 + CR-004)
**Length**: 400–500 words
**Key Message**: "AI has a working memory. You fill it wisely, or AI fills it randomly."
**Must Include**:
- CPU = AI's processing power (constant)
- RAM = AI's working memory (what it sees right now — YOU control this)
- "Desk with limited space" for context limits
- Why more RAM ≠ better work — quality of what's on the desk matters more than quantity
- 3-row comparison table: Too Little Context | Too Much Context | Right Context

---

### Section 3: The 4 Context Strategies (CR-002) — CORE SECTION
**Length**: 1,000–1,200 words
**Key Message**: "Four verbs to master: Write, Select, Compress, Isolate."
**Must Include** (one accounting example per strategy):
- **Writing Context**: Proactively give AI what it needs before asking. Example: client profile before tax computation.
- **Selecting Context**: Choose WHICH documents/data to include — not everything, just the relevant. Example: only this year's trial balance, not 5 years of data.
- **Compressing Context**: Summarize long documents before including. Example: compress 50-page audit file into a 10-point summary for AI.
- **Isolating Context**: Separate different client/task contexts — don't let one client's context contaminate another. Example: use separate conversations/projects per client.
- Strategy comparison table: When to use each + accounting scenario

---

### Section 4: The Monthly Closing Context Template (CR-003)
**Length**: 400–500 words
**Key Message**: "A pre-built context template turns a 30-minute context setup into a 2-minute copy-paste."
**Must Include**:
- Full Monthly Closing Context Template (structured, fill-in-the-blank):
  ```
  MONTHLY CLOSING CONTEXT
  Company: [Name]
  Period: [Month/Year]
  Accounting Standards: [IFRS / Local GAAP]
  Chart of Accounts: [Paste key accounts or upload file]
  Known Issues This Period: [List any reconciling items, corrections needed]
  My Role: [Senior accountant / Tax consultant / Audit manager]
  Output Required: [Journal entries / Reconciliation / Report]
  ```
- Why this template saves time: fill once per client, use every month
- Connects to Ch12 (Memory) — this is the foundation of AI client memory

---

### Section 5: Context Limits and the "Desk" Analogy (CR-004)
**Length**: 350–450 words
**Key Message**: "AI can't see what's not on its desk. Your job: put the right things on the desk."
**Must Include**:
- Visual analogy: physical desk with limited surface space
- What happens when desk is overflowed: AI loses track, quality drops
- What happens when desk is empty: AI guesses, uses generic knowledge
- Practical rule: only include context that directly affects the current task
- "Test: if removing this context wouldn't change the answer, don't include it"

---

### Section 6: Context Relevance Checklist (CR-005)
**Length**: 250–350 words
**Key Message**: "Before every AI session: check what's on the desk."
**Must Include** — Context Relevance Checklist (boxed):
1. Does AI know who I am and what I'm doing? (Role + task)
2. Does AI have the data it needs for THIS task? (Relevant documents only)
3. Have I removed last session's context? (Isolation — clean desk)
4. Is long context compressed to essentials? (Compression)
5. Have I written the client-specific context AI doesn't know? (Writing)

---

### Section 7: Second Domain Template — Audit Planning (CR-003)
**Length**: 300–400 words
**Key Message**: "Context templates work for every accounting domain."
**Must Include**:
- Audit Planning Context Template:
  ```
  AUDIT PLANNING CONTEXT
  Client: [Industry + size — no identifying details]
  Audit Type: [Statutory / Internal / Special Purpose]
  Materiality: [PKR amount — overall and performance]
  Key Risk Areas: [List 3-5]
  Applicable Standards: [ISA + IFRS references]
  Prior Year Issues: [Key findings from last audit]
  My Role: [Audit manager / Senior / Partner]
  ```
- How this template + Ch2 system prompt = "AI that knows your audit practice"

---

### Section 8: Exercises + Takeaways + Glossary
**Length**: 600–700 words total
**Must Include**:
- **Exercise 1**: Monthly Closing Context — fill the template for one real client. Use it in a new AI session. Compare: does AI respond differently with this context vs. without?
- **Exercise 2**: Context Compression — take a 5-page document (audit report or financial statement). Compress it to 10 bullet points using AI. Then use the compressed version as context for a follow-up question. How much quality did you retain?
- 6 key takeaways
- Ch4 preview: "Context tells AI WHAT information it has. Chapter 4 teaches AI WHAT TO DO with it — using specs."
- Roman Urdu glossary: Context, CPU/RAM analogy, Writing Context, Selecting Context, Compressing Context, Isolating Context, Context Template, Context Limit, Context Relevance, Context Engineering

## Section Word Targets

| Section | Target Words |
|---|---|
| 1. Bridge + What Is Context | 250–350 |
| 2. CPU/RAM Mental Model | 400–500 |
| 3. 4 Context Strategies (CORE) | 1,000–1,200 |
| 4. Monthly Closing Template | 400–500 |
| 5. Context Limits (Desk) | 350–450 |
| 6. Context Relevance Checklist | 250–350 |
| 7. Audit Planning Template | 300–400 |
| 8. Exercises + Takeaways + Glossary | 600–700 |
| **Total** | **3,550–4,450** |
