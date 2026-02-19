# Feature Specification: Chapter 3 — Context Engineering: The Core Skill

**Feature Branch**: `003-ch3-context-engineering`
**Created**: 2026-02-18
**Status**: Draft
**Input**: User description: "Chapter 3 of 'Agentic AI for Accounting Professionals.' This is the CORE SKILL chapter — the most important chapter in the book. Moves readers from single prompts to designing complete systems of information for AI. Covers the LLM=CPU / Context=RAM mental model, the 4 context strategies (Writing, Selecting, Compressing, Isolating), and how to build reusable context templates for recurring accounting workflows like monthly closing, audit planning, and tax computation."

## User Scenarios & Testing *(mandatory)*

<!--
  Context Engineering is identified as THE CORE SKILL in the curriculum.
  Chapter 2 taught how to ask a single question well.
  Chapter 3 teaches how to design a complete information system so AI
  consistently produces professional results across complex, recurring workflows.
  This is the chapter that separates "ChatGPT hobbyist" from "AI supervisor."
-->

### Reader Journey 1 — The Prompt-by-Prompt User: "I Ask One Question at a Time" (Priority: P1)

An accountant who completed Chapter 2 and can write good individual prompts, but treats every AI interaction as a standalone question. They don't carry context between prompts. They re-explain their role, their firm, and their standards every single time. They need to understand that their biggest productivity gain comes not from better prompts but from better CONTEXT — giving AI the right background information so every prompt in a session produces expert-level results without repetition.

**Why this priority**: This is the critical mindset shift. Most AI users stay at the "one prompt at a time" level forever. Chapter 3 is what makes this book worth more than a free YouTube tutorial. If this reader doesn't make the leap from prompts to context, they will never become an effective AI supervisor.

**Independent Test**: Give the reader a complex accounting task (e.g., month-end closing for a mid-size company). Measure: Do they start by designing a context document before typing their first prompt? Do they get consistently better results than they would with standalone prompts? If yes to both, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader who writes prompts one at a time, **When** they read the CPU/RAM analogy (LLM = brain, context = working memory), **Then** they understand that AI quality depends more on WHAT INFORMATION you feed it than on HOW you ask the question.
2. **Given** a reader who re-explains their role in every prompt, **When** they build their first context template, **Then** they experience the "aha moment" — AI remembers their role, standards, and preferences throughout the entire session.
3. **Given** a reader attempting a multi-step workflow (e.g., audit planning), **When** they use a context document vs. standalone prompts, **Then** the context-based approach produces noticeably more consistent, relevant, and professional output across all steps.

---

### Reader Journey 2 — The Workflow Designer: "I Have Recurring Tasks That Take Hours" (Priority: P2)

An accountant who does the same complex tasks every month (monthly closing, quarterly reporting, annual audit planning) and wants AI to help consistently — not just once, but every time. They need to learn how to build reusable context templates that capture their firm's policies, applicable standards, preferred formats, and verification requirements. Once built, these templates make every future AI interaction faster and more reliable.

**Why this priority**: Recurring workflows are where AI delivers the most value in accounting. A reader who builds 3 good context templates saves hours every month for the rest of their career. This is the ROI story of the entire book.

**Independent Test**: After reading the chapter, can the reader create a complete context template for their most time-consuming recurring task, use it with AI, and produce output that matches their firm's standards without additional manual correction? If yes, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader who does monthly bank reconciliation manually, **When** they build a context template including their chart of accounts, reconciliation rules, materiality thresholds, and exception handling policies, **Then** AI produces reconciliation outputs that match their firm's format and standards consistently.
2. **Given** a reader with a completed context template, **When** they use it across 3 different months' data, **Then** the output quality and format remain consistent without needing to redesign the template each time.

---

### Reader Journey 3 — The Information Overloader: "I Dump Everything Into AI and Get Confused Results" (Priority: P3)

An accountant who has tried giving AI lots of information but gets worse results — AI gets confused, mixes up clients, applies the wrong standard, or produces overly generic output. They need to learn the critical skill of context SELECTION — not everything is relevant, and mixing contexts (e.g., tax and audit in the same conversation) degrades output quality. The 4 strategies (Write, Select, Compress, Isolate) solve this problem.

**Why this priority**: This is a common failure mode for enthusiastic AI users. Without understanding context management, more information often means worse results. This reader needs discipline, not enthusiasm.

**Independent Test**: Have the reader take a task where they previously got poor results from "information dumping." After applying the Select and Isolate strategies, do results improve? If yes, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader who feeds AI a 50-page audit report and asks for a summary, **When** they apply the Compress strategy (summarize key sections first, then feed the summary), **Then** AI produces a focused, accurate summary instead of a vague overview.
2. **Given** a reader who mixes tax and audit queries in one conversation, **When** they apply the Isolate strategy (separate conversations for separate tasks), **Then** each conversation produces more accurate, focused results without cross-contamination.

---

### Edge Cases

- What if the reader's firm has no documented policies or procedures? The chapter MUST include guidance on how to CREATE context from scratch — "If your firm doesn't have a written chart of accounts policy, this chapter helps you create one as a side benefit."
- What if the reader works across multiple clients with different standards? The chapter MUST explain how to create client-specific context templates that can be swapped in and out — "One template per client, one template per task type."
- What if the context window gets too long and AI starts "forgetting" earlier information? The chapter MUST explain the concept of context limits in plain language — "AI has a working memory limit, like a desk that can only hold so many papers. The Compress and Select strategies help you stay within that limit."
- What if the reader doesn't know which information is relevant? The chapter MUST provide a "Context Relevance Checklist" — a simple framework for deciding what to include and what to leave out for common accounting tasks.

## Requirements *(mandatory)*

### Content Requirements

- **CR-001**: Chapter MUST open by bridging from Chapter 2 — "Chapter 2 taught you how to ask one good question. Chapter 3 teaches you something more powerful: how to design a complete information system so AI consistently produces professional results for complex, recurring work. This is THE core skill of an AI supervisor."
- **CR-002**: Chapter MUST explain the CPU/RAM mental model in plain accounting language:
  - LLM (the AI model) = the CPU / the brain — it does the thinking
  - Context window = RAM / working memory — it holds the information AI is currently working with
  - Your job as an AI supervisor = feed the RIGHT information at the RIGHT time
  - Analogy: "Think of it like a meeting with your junior. The quality of their work depends not just on your instructions (prompts) but on the briefing file, policy manual, and client history you put on the table before the meeting starts (context)."
- **CR-003**: Chapter MUST clearly distinguish prompt engineering from context engineering:
  - Prompt engineering = how you ask a SINGLE question
  - Context engineering = how you design the COMPLETE SYSTEM of information that surrounds every question
  - "Prompt engineering is giving your junior one good instruction. Context engineering is setting up the entire briefing room — the policies on the wall, the client file on the desk, the standards reference on the shelf — so that EVERY instruction produces expert work."
- **CR-004**: Chapter MUST teach the 4 Context Strategies with one complete accounting example each:
  - **Writing context**: Create background documents AI can reference. Example: Write up your firm's accounting policies, chart of accounts structure, and reporting standards as a reusable AI reference document.
  - **Selecting context**: Only feed information relevant to the current task. Example: For a tax query, include the client's income details and applicable Finance Act sections — don't include their audit working papers or last year's management letter.
  - **Compressing context**: Summarize long documents before feeding to AI. Example: "Summarize this 50-page audit report into key findings, material misstatements, and management recommendations in 500 words" — then use the summary for further analysis.
  - **Isolating context**: Separate tasks into different conversations to prevent confusion. Example: Don't mix a client's tax computation and audit planning in the same AI conversation — keep them separate for cleaner, more focused results.
- **CR-005**: Chapter MUST include a complete, detailed "Monthly Closing Context Template" as a worked example showing all elements:
  - Role definition (who you are, your firm, your responsibilities)
  - Background (chart of accounts structure, accounting policies, reporting currency, fiscal year, applicable standards)
  - Current task description (specific month, specific deliverables)
  - Verification checklist (sub-ledger reconciliation, bank reconciliation, accruals, depreciation, intercompany)
  - Output format specification
  - Exception thresholds (what to flag for human review)
- **CR-006**: Chapter MUST include a second context template for a different accounting domain (tax OR audit) to demonstrate that the template structure is transferable across tasks. Suggested: "Tax Computation Context Template" or "Audit Planning Context Template."
- **CR-007**: Chapter MUST include a "Context Relevance Checklist" — a simple decision framework for what to include:
  - Always include: Your role, applicable standards, client/company specifics, output format requirements, verification rules
  - Include if relevant: Prior period data, industry benchmarks, regulatory deadlines, firm policies
  - Never include: Unrelated client data, personal opinions without basis, information from a different engagement type
- **CR-008**: Chapter MUST explain the concept of context limits (token limits) in non-technical language — "AI can only hold so much information at once, like a desk with limited space. If you put too many documents on the desk, some fall off and AI stops referencing them. The Compress and Select strategies help you work within this limit."
- **CR-009**: Chapter MUST include at least 2 hands-on exercises:
  - Exercise 1: Build Your Role Context — create a comprehensive context document for your specific accounting role (your specialization, common tasks, applicable standards, firm policies, preferred output formats). Test it by using it as the opening message in a new ChatGPT/Claude conversation, then asking 3 different work-related questions.
  - Exercise 2: Context vs. No-Context Challenge — take the same complex accounting task, do it once with just a prompt (Chapter 2 approach) and once with a full context document (Chapter 3 approach). Compare the quality, consistency, and relevance of outputs side by side.
- **CR-010**: Chapter MUST explicitly position context engineering as the foundation for everything that follows — "The context templates you build in this chapter are the building blocks for AI agents (Chapter 8), multi-agent workflows (Chapter 9), and memory systems (Chapter 12). Master this, and the rest of the book becomes natural."
- **CR-011**: Chapter MUST include a Roman Urdu glossary of 5-10 key terms (e.g., Context = "Pasmanzar / Halaat", Context Engineering = "Maloomaat Ka Nizam Banana", Working Memory = "Kaam Wali Yaaddaasht", Writing Context = "Maloomaat Likhna", Selecting = "Chunna", Compressing = "Mukhtasar Karna", Isolating = "Alag Rakhna").
- **CR-012**: Chapter MUST NOT contain any code, terminal commands, JSON schemas, or API references. All examples use natural language in AI chat interfaces.
- **CR-013**: Chapter MUST follow the book's writing style: second person ("you"), short paragraphs (3-4 sentences max), tables and bullet points over long prose, accounting-specific action verbs.

### Key Entities

- **Context**: The complete system of background information, rules, policies, and references that you provide to AI before and during a task. Analogous to the briefing file, policy manual, and client history you prepare before a meeting with your team.
- **Context Window**: The amount of information AI can "hold in mind" at one time. Analogous to a desk — it has limited space, and if you pile on too many documents, some become inaccessible. Measured in tokens (roughly ¾ of a word each), but readers only need to understand the concept, not the numbers.
- **Context Template**: A reusable document that captures all the information AI needs for a specific recurring task. Analogous to a standardized working paper template — fill in the specifics for each client/period, and the structure ensures consistent quality.
- **Writing (Strategy)**: Creating new background documents specifically for AI reference. Like writing a firm's internal policy manual that every staff member (including AI) must follow.
- **Selecting (Strategy)**: Choosing only the relevant information for the current task. Like pulling only the relevant client file before a meeting, not the entire filing cabinet.
- **Compressing (Strategy)**: Summarizing long documents into key points before feeding to AI. Like creating an executive summary of a 200-page annual report for a board presentation.
- **Isolating (Strategy)**: Keeping different tasks in separate AI conversations to prevent cross-contamination. Like using separate working paper files for audit and tax engagements for the same client.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: After completing the chapter, a reader can articulate the difference between prompt engineering and context engineering in their own words — using an accounting analogy.
- **SC-002**: A reader who completes the "Context vs. No-Context Challenge" exercise observes measurably better AI output (more relevant, more consistent, more standards-aware) when using a context document vs. standalone prompts.
- **SC-003**: A reader can build a complete context template for their most common recurring task within 20 minutes, using the Monthly Closing template as a model.
- **SC-004**: A reader who uses their role context document at the start of 3 different AI conversations reports that AI responses are consistently more relevant to their specific practice area than conversations started without context.
- **SC-005**: All exercises can be completed with a free ChatGPT or Claude account, in under 20 minutes each.
- **SC-006**: The chapter passes the Constitution's litmus test: "Would a practicing accountant in Pakistan understand this without Googling?" — validated by a non-technical accountant reviewer.
- **SC-007**: A reader can correctly apply the "Context Relevance Checklist" to decide what to include and exclude for a new accounting task they haven't encountered in the chapter.

## Chapter Outline *(reference)*

1. **Bridge from Chapter 2** — From Single Prompts to Complete Information Systems
2. **The CPU/RAM Analogy** — How AI Actually Uses Information (LLM = brain, context = working memory)
3. **Prompt Engineering vs. Context Engineering** — The Crucial Difference (single instruction vs. complete briefing room)
4. **The 4 Context Strategies** — Your Toolkit for Managing Information
   - 4a. Writing — Create Background Documents for AI
   - 4b. Selecting — Feed Only What's Relevant
   - 4c. Compressing — Summarize Before You Feed
   - 4d. Isolating — Keep Tasks Separate
5. **Worked Example: Monthly Closing Context Template** — Complete walkthrough
6. **Second Template: Tax Computation (or Audit Planning)** — Proving the pattern transfers
7. **The Context Relevance Checklist** — What to Include, What to Leave Out
8. **Context Limits** — Why AI's "Desk" Has Limited Space
9. **Hands-On Exercises** — 2 Exercises (Build Your Role Context + Context vs. No-Context Challenge)
10. **The Foundation for Everything** — How Context Engineering Connects to Agents, Memory, and RAG
11. **Key Takeaways** — Chapter Summary
12. **Roman Urdu Glossary** — Key Terms in Your Language

## Assumptions

- Readers have completed Chapters 1 and 2, or at minimum can write structured prompts using the 6-Part Framework.
- Readers have access to ChatGPT (free tier) or Claude (free tier) on phone or laptop.
- Readers have at least one recurring accounting task they perform weekly or monthly (closing, reconciliation, reporting, filing).
- The 4 Context Strategies are adapted from the Panaversity `context_engineering_tutorial.md` — simplified and reframed for accounting professionals.
- Readers do not need to know exact token counts or context window sizes — the "desk with limited space" analogy is sufficient.
- The Monthly Closing Context Template will serve as the primary worked example; readers can adapt it for their own tasks.
