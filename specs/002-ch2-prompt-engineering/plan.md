# Content Plan: Chapter 2 — Prompt Engineering for Accountants

**Branch**: `002-ch2-prompt-engineering` | **Date**: 2026-02-18 | **Spec**: [spec.md](spec.md)

## Summary

Chapter 2 is the first hands-on skill chapter — every reader DOES something and sees measurably better results. The 6-Part Prompting Framework is the chapter's core deliverable: a structured, memorable method that transforms inconsistent AI results into repeatable professional-quality output. Target: 4,000–5,000 words. Tone: instructional but encouraging — "you can do this right now."

## Content Context

**Format**: Markdown (MDX-compatible)
**Target Length**: 4,000–5,000 words (heavier than Ch1 — lots of examples and tables)
**Writing Style**: Second person, short paragraphs, heavy use of tables, prompt examples in code-style blocks (plain text)
**Part**: Part 1 — Your Personal Skills
**Prerequisite**: Chapter 1 (paradigm shift, why AI matters)
**Exercises**: 3 hands-on exercises, free ChatGPT/Claude only, max 15 min each

## Constitution Check

- [x] I — No code, accounting analogy for every term (prompt = instructions to junior)
- [x] II — FBR/ICAP/IFRS examples throughout, PKR amounts, Pakistan context
- [x] III — 6-Part Framework = "how to instruct your digital team"
- [x] IV — Zero/one/few-shot explained through training-a-junior analogy, not ML theory
- [x] V — Verification Checklist introduced here as professional duty
- [x] VI — Builds on Ch1 (why AI), prepares for Ch3 (context engineering)
- [x] VII — Plan written before content
- [x] VIII — Roman Urdu glossary + one example prompt in Roman Urdu

## Chapter File (Docusaurus)

```text
docs/part-1-personal-skills/ch02-prompt-engineering.md
```

## Section Plan

### Section 1: Bridge from Ch1 + What Is a Prompt? (CR-001, CR-002)
**Purpose**: Connect to Ch1 and immediately ground the reader in familiar territory
**Key Message**: "A prompt is like instructions to a junior — specificity determines quality."
**Length**: 250–350 words
**Must Include**: Ch1 callback, "junior accountant" analogy for prompts, 1-sentence definition

---

### Section 2: Your First Prompt — Walkthrough (Reader Journey 1)
**Purpose**: Get first-timers doing something real in the first 10 minutes
**Key Message**: "You don't need a perfect prompt to start — try, see, improve."
**Length**: 300–400 words
**Must Include**:
- Step-by-step: Open ChatGPT/Claude → Type → Read → Evaluate
- First prompt: "Explain IFRS 16 — Leases — in 5 bullet points for a Pakistani accountant"
- What good output looks like vs. what to do if output is weak
- "What If AI Gets It Wrong?" sidebar (CR-003 edge case)

---

### Section 3: Bad Prompt vs. Good Prompt Table (CR-005)
**Purpose**: Show the difference dramatically before teaching the framework
**Key Message**: "The problem isn't AI — it's the instructions."
**Length**: 400–500 words
**Must Include**:
- 4-row comparison table: Task | Vague Prompt | Its Result | 6-Part Prompt | Its Result
  - Row 1 (Bookkeeping): "Classify expenses" → "Please explain more" vs. structured classification prompt
  - Row 2 (Tax): "Calculate tax" → generic response vs. specific FBR computation prompt
  - Row 3 (Audit): "Write a report" → generic vs. audit working paper format prompt
  - Row 4 (Advisory): "Analyze financials" → generic vs. specific ratio analysis prompt
- After table: "Notice a pattern? Better input = better output. Every time."

---

### Section 4: Zero-Shot, One-Shot, Few-Shot (CR-003)
**Purpose**: Teach the power of examples through a concrete classification exercise
**Key Message**: "The more examples you give AI, the closer it gets to your way of working."
**Length**: 500–600 words
**Must Include**:
- Zero-shot example: classify "Office furniture PKR 250,000" with no examples
- One-shot example: provide one classified item, then ask AI to classify a new item
- Few-shot example: provide 3-4 examples from reader's chart of accounts
- Comparison showing improvement across the three approaches
- Analogy: "Like training a new junior — the more examples you give, the faster they learn your firm's way."

---

### Section 5: The 6-Part Framework (CR-004) — CORE SECTION
**Purpose**: Teach the framework systematically with one complete accounting example per part
**Key Message**: "Six parts. One professional prompt. Accountants already write this way — engagement letters have the same structure."
**Length**: 900–1,100 words (largest section — the chapter's core)
**Must Include**:
- Brief intro: "Think of this as your standard format for AI instructions — like how engagement letters have a standard format"
- Each part gets its own sub-section (H3):
  - **Command** — Accounting action verbs list (Analyze, Reconcile, Classify, Prepare, Calculate, Verify, Draft, Summarize, Compare, Audit). Example: "Classify the following 10 transactions according to the chart of accounts below."
  - **Context** — Who you are + what you need + applicable standards. Example: "I am a tax consultant for a manufacturing company. The tax year is July 2024–June 2025. FBR rules apply."
  - **Logic** — Structure the output. Example: "Organize results in a table with columns: Transaction | Amount | Classification | Applicable Section"
  - **Roleplay** — "Act as a senior IFRS specialist with 20 years of experience." Show how this changes the depth and tone of AI output.
  - **Formatting** — "Format as an audit working paper with: Objective, Procedure, Finding, Conclusion sections." Accounting document formats demonstrated.
  - **Questions** — "Before proceeding, ask me 5 clarifying questions about the client's situation." This is the most underused part.
- Full combined example at the end: one 6-Part prompt for a tax computation task (all 6 parts shown together)

---

### Section 6: System Prompts — Your AI Assistant's Rules (CR-006)
**Purpose**: Show how to create a persistent professional identity for AI
**Key Message**: "A system prompt is like the firm's policy manual — it sets the rules before work begins."
**Length**: 400–500 words
**Must Include**:
- Plain-language definition: "Rules and personality you set for AI before your conversation starts"
- Demo system prompt for accounting AI assistant:
  ```
  You are an accounting AI assistant specializing in Pakistan taxation and IFRS.
  Rules:
  1. Always cite the specific standard, section, or FBR rule you are applying
  2. If you are uncertain, say so explicitly — do not guess
  3. Use PKR for all monetary amounts
  4. When professional judgment is required, flag it: "⚠ Professional judgment required"
  5. Conclude every response with: "Please verify this against the primary source"
  ```
- How to set in ChatGPT (Custom Instructions) and Claude (Project Instructions) — described in plain language, no screenshots
- "This saves you from repeating context in every conversation"

---

### Section 7: The Verification Checklist (CR-007) — RECURRING ELEMENT
**Purpose**: Introduce the professional duty of verifying AI output — will recur in every subsequent chapter
**Key Message**: "AI produces drafts. You produce signed deliverables. The checklist is the bridge."
**Length**: 300–400 words
**Must Include**:
- "Accountant's AI Verification Checklist" — boxed, visually distinct, easy to reference later:
  1. Is the standard/law citation real? (Verify the reference exists)
  2. Is the math correct? (Recalculate at least once)
  3. Is this the current version of the regulation? (Check the date)
  4. Is professional judgment being applied or avoided? (AI should flag judgment calls, not make them)
  5. Would you sign off on this? (The final professional test)
- "This checklist appears at the end of every chapter where AI produces output. Professional standards don't change because AI was involved."

---

### Section 8: Prompt Template Library (CR-009)
**Purpose**: Give readers immediately usable tools they can take to work today
**Key Message**: "Copy, customize, use. These templates work out of the box."
**Length**: 400–500 words
**Format**: Each template as a numbered, formatted block with blank fields to fill in
**Must Include** 5 templates:
1. Transaction Classification Template
2. Accounting Standard Explanation Template
3. Audit Working Paper Draft Template
4. Tax Computation Template
5. Client Letter/Email Draft Template

---

### Section 9: Hands-On Exercises (CR-008)
**Purpose**: Convert understanding to skill through practice
**Length**: 500–600 words (3 exercises × ~180 words each)
**Must Include**:
- **Exercise 1**: Classification Challenge — classify 10 transactions zero-shot, then one-shot, then few-shot. Compare results. Record improvement.
- **Exercise 2**: 6-Part Framework Practice — choose one real task from your work. Build a prompt using all 6 parts. Test it. Note which parts made the biggest difference.
- **Exercise 3**: Build Your AI Persona — create a system prompt for your specialization (audit / tax / bookkeeping). Test with 3 different queries. Does AI stay consistent?
- Each exercise: exact prompt to start with, reflection question after

---

### Section 10: Ch3 Preview + Key Takeaways + Glossary (CR-013)
**Purpose**: Close the chapter with momentum toward Ch3
**Length**: 350–400 words total
**Must Include**:
- "What's Next" paragraph: Context Engineering (Ch3) is where you learn to SUSTAIN prompt quality across long sessions — not just one good prompt, but a system
- 6 key takeaways (one per framework part + verification)
- Roman Urdu glossary: 10 terms — Prompt, Zero-Shot, One-Shot, Few-Shot, 6-Part Framework, Command, Context, System Prompt, Verification Checklist, Roleplay

## Section Word Targets

| Section | Target Words |
|---|---|
| 1. Bridge + What Is Prompt | 250–350 |
| 2. First Prompt Walkthrough | 300–400 |
| 3. Bad vs. Good Prompt Table | 400–500 |
| 4. Zero/One/Few-Shot | 500–600 |
| 5. 6-Part Framework (CORE) | 900–1,100 |
| 6. System Prompts | 400–500 |
| 7. Verification Checklist | 300–400 |
| 8. Template Library | 400–500 |
| 9. Exercises | 500–600 |
| 10. Preview + Takeaways + Glossary | 350–400 |
| **Total** | **4,300–5,350** |
