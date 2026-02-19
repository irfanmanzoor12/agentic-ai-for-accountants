# Feature Specification: Chapter 2 — Prompt Engineering for Accountants

**Feature Branch**: `002-ch2-prompt-engineering`
**Created**: 2026-02-18
**Status**: Draft
**Input**: User description: "Chapter 2 of 'Agentic AI for Accounting Professionals.' This chapter teaches the foundation skill — how to communicate effectively with AI. Covers zero-shot, one-shot, few-shot prompting, the 6-Part Prompting Framework (Command, Context, Logic, Roleplay, Formatting, Questions), and system prompts. All taught through accounting examples — transaction classification, standard explanations, audit working papers, tax computations."

## User Scenarios & Testing *(mandatory)*

<!--
  Reader journeys for a practical skills chapter. Unlike Chapter 1 (motivation),
  Chapter 2 is the first hands-on chapter — every reader must DO something with AI
  and see measurably better results by the end.
-->

### Reader Journey 1 — The First-Timer: "I've Never Typed a Prompt Before" (Priority: P1)

An accountant who has never used ChatGPT or Claude opens the book at Chapter 2 (or continues from Chapter 1). They have their phone or laptop open and are ready to try. They need clear, step-by-step guidance — what to type, what to expect, and how to evaluate the response. By the end of Chapter 2, they must be able to write structured, professional-quality prompts for their daily accounting tasks.

**Why this priority**: The entire book rests on this skill. If a reader cannot write effective prompts by the end of Chapter 2, every subsequent chapter becomes inaccessible. This is the foundational skill.

**Independent Test**: Give a first-time user the chapter and 3 accounting tasks (classify transactions, explain a standard, draft a letter). Measure: Can they write prompts using the 6-Part Framework and get usable results? If yes for at least 2 of 3 tasks, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader who has never used AI tools, **When** they follow the "Your First Prompt" walkthrough, **Then** they successfully get a useful accounting response from ChatGPT or Claude within 5 minutes.
2. **Given** a reader who typed a vague prompt and got a vague response, **When** they apply the 6-Part Framework to the same task, **Then** they can see a clear, measurable improvement in AI output quality.
3. **Given** a reader who completed the few-shot exercise, **When** they compare zero-shot vs. one-shot vs. few-shot results for the same classification task, **Then** they understand why providing examples produces better results.

---

### Reader Journey 2 — The Casual User: "I Use ChatGPT But My Results Are Hit-or-Miss" (Priority: P2)

An accountant who already uses ChatGPT occasionally but gets inconsistent results. Sometimes AI gives great answers, sometimes nonsense. They don't understand WHY results vary. This reader needs the 6-Part Framework as a diagnostic tool — when output is poor, which part of the prompt was missing?

**Why this priority**: These readers already believe in AI but lack structure. The 6-Part Framework transforms their random success into repeatable skill. They become the strongest advocates for the book.

**Independent Test**: Have a casual ChatGPT user bring 3 of their actual prompts. After reading the chapter, can they identify what was missing from each prompt using the framework? Can they rewrite and get better results? If yes for 2 of 3, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader who gets inconsistent AI results, **When** they learn the 6-Part Framework, **Then** they can diagnose which component (Command, Context, Logic, Roleplay, Formatting, Questions) was weak in any failed prompt.
2. **Given** a reader who rewrites an old prompt using all 6 parts, **When** they compare old vs. new AI output side-by-side, **Then** the improvement is obvious and they can articulate WHY it improved.

---

### Reader Journey 3 — The Template Builder: "I Want Reusable Prompts for My Practice" (Priority: P3)

An accountant who wants to create a personal library of prompt templates for recurring tasks — monthly closing, audit planning, tax computation, client letters. They want to build once, use repeatedly. This reader needs to understand system prompts and how to create reusable AI "personas" for their specialization.

**Why this priority**: This is the highest-value outcome — repeatable productivity. A reader who builds 5 good templates will use AI daily and recommend the book to colleagues.

**Independent Test**: After reading the chapter, can the reader create a system prompt for their specific role AND 3 task-specific prompt templates that produce consistent, professional results across multiple uses? If yes, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader who completes the system prompt exercise, **When** they create a custom AI persona for their accounting specialization, **Then** all subsequent prompts in that session produce more relevant, standards-aware responses.
2. **Given** a reader who builds prompt templates, **When** they use the same template on different data sets (e.g., different clients' bank reconciliations), **Then** the output quality is consistent and professional each time.

---

### Edge Cases

- What if the reader uses ChatGPT free tier and hits message limits? The chapter MUST note that all exercises work within free tier limits and suggest spreading exercises across sessions if needed.
- What if the reader uses a different AI tool (Gemini, Copilot)? The chapter MUST state that the 6-Part Framework works with ANY AI chat tool — examples shown in ChatGPT/Claude but principles are universal.
- What if AI gives a wrong accounting answer during an exercise? The chapter MUST include a "What If AI Gets It Wrong?" sidebar explaining that prompt quality affects but doesn't guarantee accuracy — verification (Chapter 5 topic) is always required.
- What if the reader's English is weak and they struggle with prompt writing? The chapter MUST include a note that prompts can be written in Roman Urdu or simple English — AI understands both. Provide at least one example prompt in Roman Urdu.

## Requirements *(mandatory)*

### Content Requirements

- **CR-001**: Chapter MUST open by connecting to Chapter 1 — "You now understand WHY AI changes accounting. This chapter teaches you the HOW — how to communicate with AI so it produces professional-quality accounting output."
- **CR-002**: Chapter MUST explain the concept of a "prompt" using an accounting analogy — "A prompt is like the instructions you give to a junior accountant. The more specific and structured your instructions, the better the work you get back."
- **CR-003**: Chapter MUST teach zero-shot, one-shot, and few-shot prompting using accounting examples:
  - Zero-shot: "Classify this expense: Office furniture PKR 250,000" (no examples given)
  - One-shot: Provide one classified example, then ask AI to classify a new item
  - Few-shot: Provide 3-4 classified examples matching the reader's chart of accounts, then ask AI to classify new items
  - Include a comparison showing how results improve from zero to few-shot
- **CR-004**: Chapter MUST teach the 6-Part Prompting Framework with one complete accounting example per part:
  - **Command**: Use accounting action verbs — Analyze, Reconcile, Classify, Prepare, Calculate, Verify, Draft, Summarize, Compare, Audit
  - **Context**: Who you are, what you need, applicable standards, constraints (demo with tax consultant scenario)
  - **Logic**: Structure the output — tables, columns, step-by-step (demo with tax computation table)
  - **Roleplay**: Assign AI a professional role — "Act as a senior IFRS specialist" or "Act as an FBR tax advisor"
  - **Formatting**: Demand professional output — audit working paper format, management letter format, financial statement note format
  - **Questions**: Make AI ask clarifying questions before proceeding — "Before preparing this tax computation, ask me 5 questions about the client's situation"
- **CR-005**: Chapter MUST include a "Bad Prompt vs. Good Prompt" comparison table showing at least 4 examples across different accounting domains (audit, tax, bookkeeping, advisory). Each pair shows the vague prompt, its poor result, the 6-Part prompt, and its professional result.
- **CR-006**: Chapter MUST teach system prompts / custom instructions in plain language — "Setting up AI's personality and rules before you start working." Demo creating an accounting AI assistant with rules for citation, uncertainty flagging, PKR formatting, and professional judgment awareness.
- **CR-007**: Chapter MUST introduce the "Accountant's AI Verification Checklist" as a recurring element (introduced here, referenced in later chapters):
  1. Is the standard/law citation real? (Verify)
  2. Is the math correct? (Recalculate)
  3. Is this the current version of the regulation? (Check date)
  4. Is professional judgment being applied or avoided? (Think)
  5. Would you sign off on this? (Final test)
- **CR-008**: Chapter MUST include at least 3 hands-on exercises using ChatGPT or Claude:
  - Exercise 1: Classification Challenge — classify 10 transactions using zero-shot, one-shot, few-shot and compare results
  - Exercise 2: 6-Part Framework Practice — take a real task from your job, build a complete prompt using all 6 parts
  - Exercise 3: Build Your AI Persona — create a system prompt for your accounting specialization and test it with 3 queries
- **CR-009**: Chapter MUST include a "Prompt Template Library" sidebar or section with 4-5 ready-to-use templates:
  - Transaction classification prompt
  - Accounting standard explanation prompt
  - Audit working paper draft prompt
  - Tax computation prompt
  - Client letter/email draft prompt
- **CR-010**: Chapter MUST include a Roman Urdu glossary of 5-10 key terms (e.g., Prompt = "AI Ko Hukm/Hidayat", Zero-shot = "Bina Misaal Ke", Few-shot = "Chand Misaalein De Kar", System Prompt = "Bunyadi Hidayaat", Verification = "Tasdeeq").
- **CR-011**: Chapter MUST NOT contain any code, terminal commands, or programming concepts. All examples use natural language in AI chat interfaces.
- **CR-012**: Chapter MUST follow the book's writing style: second person ("you"), short paragraphs (3-4 sentences max), tables and bullet points over long prose, accounting-specific action verbs.
- **CR-013**: Chapter MUST explicitly state that prompt engineering is a FOUNDATION skill, not the destination — "This chapter gives you the vocabulary. Chapter 3 (Context Engineering) gives you the strategy. Together, they make you an effective AI supervisor."

### Key Entities

- **Prompt**: The instruction or question you type into an AI chat interface. Analogous to verbal instructions given to a junior accountant — clarity and specificity determine output quality.
- **Zero-Shot Prompting**: Asking AI to perform a task without providing any examples. Like hiring a new junior and asking them to classify expenses on day one without showing your chart of accounts.
- **One-Shot Prompting**: Providing one example before asking AI to perform the task. Like showing the new junior one classified transaction and saying "do the rest like this."
- **Few-Shot Prompting**: Providing 3-5 examples before the task. Like spending an hour training the junior on your firm's specific classification approach — much better results.
- **6-Part Prompting Framework**: A structured method for writing professional prompts — Command, Context, Logic, Roleplay, Formatting, Questions. Analogous to a standardized engagement letter format.
- **System Prompt / Custom Instructions**: Pre-set rules and personality for AI that apply to all conversations. Like a firm's policy manual that every staff member must follow.
- **AI Verification Checklist**: A 5-point quality check for any AI-generated accounting output. The accountant's professional duty — introduced here, used throughout the book.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: After completing the chapter, a reader can write a prompt using all 6 parts of the framework for any accounting task within 5 minutes.
- **SC-002**: A reader who compares their "before" (unstructured) and "after" (6-Part Framework) prompts rates the improvement as significant — AI output goes from "vague/generic" to "specific/professional."
- **SC-003**: After completing the classification exercise, a reader can demonstrate that few-shot prompting produces more accurate transaction classifications than zero-shot — measured by matching their firm's actual chart of accounts.
- **SC-004**: A reader can create a reusable system prompt for their accounting specialization that consistently produces domain-aware, standards-citing responses across at least 3 different queries.
- **SC-005**: All 3 hands-on exercises can be completed with a free ChatGPT or Claude account, in under 15 minutes each.
- **SC-006**: The chapter passes the Constitution's litmus test: "Would a practicing accountant in Pakistan understand this without Googling?" — validated by a non-technical accountant reviewer.
- **SC-007**: The Prompt Template Library provides at least 4 templates that a reader can use immediately at work with only minor customization (filling in their specific data).

## Chapter Outline *(reference)*

1. **Bridge from Chapter 1** — From Understanding AI to Using AI
2. **What Is a Prompt?** — Instructions for Your Digital Junior (analogy)
3. **Your First Prompt** — Step-by-step walkthrough with an accounting task
4. **Bad Prompt vs. Good Prompt** — Side-by-side comparison table (4 examples)
5. **Zero-Shot, One-Shot, Few-Shot** — The Power of Examples (classification exercise)
6. **The 6-Part Prompting Framework** — Your Professional Standard
   - 6a. Command — Use Accounting Action Verbs
   - 6b. Context — Tell AI Who You Are and What You Need
   - 6c. Logic — Structure the Output You Want
   - 6d. Roleplay — Assign AI a Professional Role
   - 6e. Formatting — Demand Professional Output
   - 6f. Questions — Make AI Ask Before It Answers
7. **System Prompts** — Setting Up Your AI Assistant's Rules
8. **The Verification Checklist** — Trust But Verify (5-point checklist)
9. **Prompt Template Library** — Ready-to-Use Templates for Common Tasks
10. **Hands-On Exercises** — 3 Exercises to Practice
11. **What's Next** — Preview of Context Engineering (Chapter 3)
12. **Key Takeaways** — Chapter Summary
13. **Roman Urdu Glossary** — Key Terms in Your Language

## Assumptions

- Readers have completed Chapter 1 or at minimum understand why AI matters for accounting.
- Readers have access to ChatGPT (free tier) or Claude (free tier) on phone or laptop.
- Readers are familiar with basic accounting tasks referenced in examples (transaction classification, bank reconciliation, tax computation, audit working papers).
- The 6-Part Prompting Framework is adapted from the Panaversity prompt engineering course's `six_part_prompting_framework.md` — simplified and reframed for accountants.
- All examples use Pakistani accounting context (PKR, FBR, IFRS, ICAP) as primary, with universal applicability noted.
