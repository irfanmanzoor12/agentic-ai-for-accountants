# Feature Specification: Chapter 7 — AI Skills: What Agents Can Do

**Feature Branch**: `007-ch7-ai-skills`
**Created**: 2026-02-18
**Status**: Draft
**Input**: User description: "Chapter 7 of 'Agentic AI for Accounting Professionals.' Introduces the concept of AI 'skills' — discrete, composable capabilities that AI agents can perform. Think of skills as the specific tasks on a job description. An accounting AI agent might have skills like: classify transactions, reconcile accounts, draft disclosures, calculate tax, generate reports. Skills use MCP connections (Ch6) to work with real tools. Accountants define WHICH skills they need — technical teams build them."

## User Scenarios & Testing *(mandatory)*

<!--
  Skills are the building blocks of AI agents (Ch8).
  Chapter 6 taught HOW AI connects to tools (MCP).
  Chapter 7 teaches WHAT AI can do with those connections (Skills).
  Chapter 8 will combine skills into complete agents.

  Analogy: MCP = the office equipment, Skills = the job description tasks,
  Agent = the employee who performs those tasks.
-->

### Reader Journey 1 — The Task Lister: "What Exactly Can AI Do in Accounting?" (Priority: P1)

An accountant who understands AI conceptually (Chapters 1-6) but has a nagging question: "What SPECIFIC tasks can AI actually perform in my work?" They've used AI for chat-based tasks (Chapters 2-3) but don't know the full range of capabilities. This reader needs a concrete catalogue of accounting AI skills — not vague promises, but specific capabilities they can envision in their daily work.

**Why this priority**: This is the most common question from accountants exploring AI. "Can it do X?" is more important to them than "how does it work." A clear skills catalogue makes AI tangible and actionable.

**Independent Test**: After reading the chapter, can the reader list at least 8 specific AI skills relevant to their accounting practice area (audit, tax, or bookkeeping)? Can they describe what each skill does in one sentence? If yes, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader who wonders what AI can do, **When** they read the Accounting AI Skills Catalogue, **Then** they can identify at least 8 skills directly relevant to their daily work.
2. **Given** a reader who has identified relevant skills, **When** they consider their weekly task list, **Then** they can map at least 5 of their recurring tasks to specific AI skills.
3. **Given** a reader reviewing the skills catalogue, **When** they see both "AI-ready" skills (classify, calculate, draft) and "human-only" tasks (judge, decide, sign-off), **Then** they understand which parts of their work are candidates for AI assistance and which require their professional expertise.

---

### Reader Journey 2 — The Composability Thinker: "Can AI Combine Tasks?" (Priority: P2)

An accountant who notices that their complex workflows involve multiple simple tasks chained together. Monthly closing isn't ONE task — it's reconcile + accrue + depreciate + eliminate + verify + report. This reader needs to understand that AI skills are COMPOSABLE — they can be combined like building blocks to form complex workflows. This is the bridge to orchestration (Chapter 9).

**Why this priority**: Understanding composability is what separates "AI does one thing" thinking from "AI handles entire workflows" thinking. This mental leap prepares readers for agents (Ch8) and orchestration (Ch9).

**Independent Test**: After reading the chapter, can the reader take one complex workflow from their practice and break it into 4-6 individual AI skills that could be composed together? If yes, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader who sees monthly closing as one big task, **When** they read the composability section, **Then** they can decompose it into 5+ individual skills (reconcile bank, calculate depreciation, review accruals, eliminate intercompany, generate trial balance).
2. **Given** a reader who understands composability, **When** they compare a single-skill approach vs. composed skills for the same workflow, **Then** they see how composition creates more powerful automation than any single skill alone.

---

### Reader Journey 3 — The Skills Definer: "How Do I Tell My Team What Skills We Need?" (Priority: P3)

A senior accountant or manager who is working with a technical team (internal IT or external vendor) to implement AI. They need to specify WHAT skills the AI system needs — like writing a job description for a digital employee. This reader learns to write "AI Skills Requirements" — a structured document listing the skills, inputs, outputs, and quality standards for each capability.

**Why this priority**: The gap between "we want AI" and "here's exactly what we need AI to do" is where most firm-level AI projects fail. Skills requirements bridge this gap by giving accountants a structured way to communicate needs.

**Independent Test**: After reading the chapter, can the reader write an AI Skills Requirements document listing 5 skills for their practice area, with inputs, outputs, and quality criteria for each? If yes, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader preparing to work with an IT team, **When** they use the Skills Requirements Template, **Then** they produce a document that clearly lists needed AI capabilities with inputs, expected outputs, and verification criteria.
2. **Given** a completed Skills Requirements document, **When** a developer reads it, **Then** they understand what to build without needing the accountant to explain technical implementation.

---

### Edge Cases

- What if the reader thinks skills are the same as prompts? The chapter MUST distinguish: a prompt is something you TYPE into a chat. A skill is a CAPABILITY built into an AI system that runs automatically (often without you typing anything). Skills use prompts internally, but the user doesn't see them.
- What if the reader asks about skills that don't exist yet? The chapter MUST acknowledge that AI skills are expanding rapidly. The catalogue shows what's possible TODAY and where it's heading. New skills will emerge — the framework for evaluating them remains the same.
- What if the reader's practice area isn't covered in the catalogue? The chapter MUST provide a general framework for identifying skills in ANY accounting domain, not just the examples shown.
- What if the reader confuses "skill" with "feature" of existing software? The chapter MUST clarify: existing software features are pre-built and rigid. AI skills are flexible, context-aware, and can be composed in new ways. "Xero can reconcile" is a fixed feature. "An AI skill that reconciles" adapts to your specific chart of accounts, policies, and thresholds.

## Requirements *(mandatory)*

### Content Requirements

- **CR-001**: Chapter MUST open by connecting to Chapter 6 — "Chapter 6 showed you HOW AI connects to your tools (MCP = the roads). This chapter shows you WHAT AI can actually do with those connections (skills = the vehicles). Together, connections + skills = the capabilities of your digital team."
- **CR-002**: Chapter MUST explain skills using the "Job Description" analogy — "When you hire a new accountant, you write a job description listing specific tasks they must perform. AI skills are the job description for a digital employee — each skill is one specific task the AI can do, defined by: what goes in, what comes out, and what 'correct' looks like."
- **CR-003**: Chapter MUST include an "Accounting AI Skills Catalogue" organized by practice area:

  **Bookkeeping Skills:**
  | Skill | What It Does | Input | Output |
  |---|---|---|---|
  | Classify | Categorizes transactions to correct accounts | Transaction description + amount | Account code + category |
  | Reconcile | Matches ledger entries to bank/source records | Ledger data + bank data | Matched items + exceptions |
  | Accrue | Identifies and calculates period-end accruals | Contracts, invoices, patterns | Accrual journal entries |
  | Depreciate | Calculates asset depreciation | Asset register + policies | Depreciation schedule + entries |
  | Report | Generates formatted financial reports | Trial balance + templates | Financial statements |

  **Tax Skills:**
  | Skill | What It Does | Input | Output |
  |---|---|---|---|
  | Compute | Calculates tax liability per applicable law | Income data + tax rates | Tax computation worksheet |
  | Research | Finds relevant tax provisions and rulings | Query + jurisdiction | Applicable sections + guidance |
  | Plan | Identifies tax-efficient strategies | Client profile + goals | Planning options with impact analysis |
  | Draft Return | Prepares tax return draft for review | Computation + client data | Formatted return for filing |

  **Audit Skills:**
  | Skill | What It Does | Input | Output |
  |---|---|---|---|
  | Analyze | Performs analytical procedures on financial data | Multi-period financials | Ratios, trends, anomalies |
  | Sample | Selects audit samples using statistical methods | Population + parameters | Selected sample + rationale |
  | Draft WP | Creates audit working paper drafts | Procedures + findings | Formatted working paper |
  | Draft Letter | Prepares management/representation letters | Findings + context | Professional letter draft |

- **CR-004**: Chapter MUST explain composability — how individual skills combine to form workflows:
  - Single skill: "Classify this transaction" → AI classifies
  - Composed skills: "Process daily bank feed" → Classify + Reconcile + Flag Exceptions + Generate Report
  - Analogy: "Individual LEGO bricks are useful. But when you snap them together, you build something powerful. AI skills work the same way — each one does one thing well, but combined, they handle entire workflows."
- **CR-005**: Chapter MUST include a "Skills vs. Professional Judgment" boundary table:

  | AI Skill (Automatable) | Professional Judgment (Human Only) |
  |---|---|
  | Classify transactions by pattern | Determine if classification reflects economic substance |
  | Calculate depreciation per policy | Choose appropriate depreciation method |
  | Draft audit working paper | Assess audit risk and materiality |
  | Compute tax per current rates | Advise on tax planning strategy |
  | Generate financial report | Interpret results and draw conclusions |
  | Reconcile data across systems | Investigate unexplained discrepancies |

- **CR-006**: Chapter MUST explain the relationship between skills and the concepts from previous chapters:
  - Skills use **MCP connections** (Ch6) to access tools and data
  - Skills follow **specifications** (Ch4) that define inputs, outputs, and quality criteria
  - Skills produce output that requires **verification** (Ch5) against the Golden Dataset
  - Skills execute within **context** (Ch3) that provides firm policies and standards
- **CR-007**: Chapter MUST include a "Skills Requirements Template" that readers can use to define AI capabilities for their practice:
  ```
  AI SKILL REQUIREMENT
  Skill Name: [e.g., "Bank Reconciliation"]
  Practice Area: [Bookkeeping / Tax / Audit / Advisory]

  PURPOSE: [What this skill accomplishes]
  INPUT: [What data/information the skill needs]
  OUTPUT: [What the skill produces]
  STANDARDS: [Applicable standards — IFRS, FBR, ISA]
  QUALITY CRITERIA: [How to verify output is correct]
  HUMAN REVIEW: [What aspects require professional judgment]
  FREQUENCY: [Daily / Weekly / Monthly / As needed]
  ```
- **CR-008**: Chapter MUST include a "Skill Maturity" concept showing that skills evolve:
  - **Level 1 — Assist**: AI helps you do the task (you still do most of the work)
  - **Level 2 — Draft**: AI produces a first draft, you review and finalize
  - **Level 3 — Execute**: AI handles the task end-to-end, you verify the output
  - Not all skills reach Level 3 — some always require human involvement
- **CR-009**: Chapter MUST include at least 2 hands-on exercises:
  - Exercise 1: Skills Audit — list 10 tasks you perform weekly. For each one, identify: Is this a single skill or composed skills? What are the inputs and outputs? Is it AI-ready or human-only? Rate it Level 1, 2, or 3 maturity.
  - Exercise 2: Write a Skills Requirement — pick one task from Exercise 1 that is AI-ready. Write a complete Skills Requirement using the template. Include all fields: purpose, input, output, standards, quality criteria, human review points.
- **CR-010**: Chapter MUST include a Roman Urdu glossary of 5-10 key terms (e.g., Skill = "Hunar / Salahiyat", Composability = "Jor Kar Banana", Classify = "Darja Bandi Karna", Reconcile = "Mutaabikat Karna", Draft = "Musawwada Banana", Execute = "Anjaam Dena").
- **CR-011**: Chapter MUST NOT contain any code, function definitions, class hierarchies, or programming concepts. Skills are described as CAPABILITIES, not as software constructs.
- **CR-012**: Chapter MUST follow the book's writing style: second person ("you"), short paragraphs (3-4 sentences max), tables and bullet points over long prose, accounting-specific action verbs.

### Key Entities

- **AI Skill**: A discrete, well-defined capability that an AI agent can perform — like one task on a job description. Has defined inputs, outputs, quality criteria, and can be composed with other skills. Examples: Classify, Reconcile, Compute, Draft, Analyze.
- **Skills Catalogue**: A structured inventory of AI capabilities organized by accounting practice area (bookkeeping, tax, audit, advisory). Helps accountants see the full range of what AI can do in their domain.
- **Composability**: The ability to combine individual skills into complex workflows — like snapping LEGO bricks together. Monthly closing = Reconcile + Accrue + Depreciate + Eliminate + Report.
- **Skill Maturity Level**: How much of a task AI can handle autonomously. Level 1 (Assist), Level 2 (Draft), Level 3 (Execute). Progression depends on task complexity and professional judgment requirements.
- **Skills Requirement**: A structured document defining what an AI skill must do — purpose, inputs, outputs, standards, quality criteria, and human review points. Like a job description for a specific AI capability.
- **Professional Judgment Boundary**: The line between what AI can handle (pattern-based, rule-based, calculation-based tasks) and what requires human expertise (interpretation, strategy, risk assessment, ethical decisions).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: After reading the chapter, a reader can list at least 8 specific AI skills relevant to their accounting practice area from the catalogue.
- **SC-002**: A reader can decompose one complex workflow from their practice into 4-6 individual composable skills.
- **SC-003**: A reader can correctly categorize 10 of their weekly tasks into "AI-ready skill" vs. "professional judgment required" using the boundary table.
- **SC-004**: A reader can write a complete Skills Requirement document for one AI skill within 10 minutes using the template.
- **SC-005**: A reader can assign appropriate Skill Maturity Levels (1, 2, or 3) to at least 5 tasks based on their automation potential and judgment requirements.
- **SC-006**: All exercises can be completed with pen and paper or a word processor — no AI tools required (these are planning exercises).
- **SC-007**: The chapter passes the Constitution's litmus test: "Would a practicing accountant in Pakistan understand this without Googling?"

## Chapter Outline *(reference)*

1. **Bridge from Chapter 6** — From Connections to Capabilities (MCP = roads, Skills = vehicles)
2. **The Job Description Analogy** — What Is an AI Skill? (one task, defined inputs/outputs)
3. **Accounting AI Skills Catalogue** — What AI Can Do, By Practice Area
   - 3a. Bookkeeping Skills (Classify, Reconcile, Accrue, Depreciate, Report)
   - 3b. Tax Skills (Compute, Research, Plan, Draft Return)
   - 3c. Audit Skills (Analyze, Sample, Draft WP, Draft Letter)
4. **Composability** — Snapping Skills Together Like LEGO (single vs. composed)
5. **Skills vs. Professional Judgment** — The Boundary Table (AI does / Human decides)
6. **How Skills Connect to What You've Learned** — Context, Specs, MCP, Verification
7. **Skill Maturity Levels** — Assist → Draft → Execute (not everything reaches Level 3)
8. **The Skills Requirement Template** — Writing a Job Description for AI
9. **Hands-On Exercises** — 2 Exercises (Skills Audit + Write a Skills Requirement)
10. **What's Next** — From Skills to Agents: The Complete Digital Employee (Ch8 preview)
11. **Key Takeaways** — Chapter Summary
12. **Roman Urdu Glossary** — Key Terms in Your Language

## Assumptions

- Readers have completed Chapters 1-6 and understand MCP connections, context design, specs, and verification.
- Readers are familiar with the concept of a job description — used as the primary analogy.
- The skills catalogue is illustrative, not exhaustive. It covers the most common tasks across bookkeeping, tax, and audit — the three primary practice areas of the target audience.
- Readers do not need to know how skills are implemented (no Python functions, no class definitions). Skills are presented as CAPABILITIES with inputs and outputs.
- The LEGO composability analogy works across cultures and age groups in the target audience.
- Skill Maturity Levels are a simplified version of automation maturity models — appropriate for non-technical readers.
