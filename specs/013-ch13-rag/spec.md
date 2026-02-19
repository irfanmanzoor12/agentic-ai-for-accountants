# Feature Specification: Chapter 13 — RAG: AI Reads Your Firm's Documents

**Feature Branch**: `013-ch13-rag`
**Created**: 2026-02-18
**Status**: Draft
**Input**: User description: "Chapter 13 of 'Agentic AI for Accounting Professionals.' After Ch12 gave AI a memory (remembering client profiles and firm policies), Ch13 teaches how AI actively searches and retrieves information from your firm's document library — standards, past engagement files, templates, regulations, and reference materials. Uses the 'Research Assistant' analogy: instead of you searching through binders and folders, AI reads your firm's documents and brings you the relevant sections. RAG = Retrieval-Augmented Generation: AI looks up information BEFORE answering, like an accountant who checks the standard before giving an opinion."

## User Scenarios & Testing *(mandatory)*

<!--
  RAG is what makes AI answers grounded in YOUR firm's actual documents.
  Without RAG, AI answers from its general training. With RAG, AI answers
  from YOUR standards library, YOUR past engagements, YOUR firm's templates.
  The difference: generic advice vs. advice grounded in your firm's knowledge.
-->

### Reader Journey 1 — The Standard Searcher: "I Spend Hours Looking Up Standards — Can AI Do This?" (Priority: P1)

An accountant who frequently needs to look up IFRS paragraphs, FBR circulars, Companies Act sections, or ICAP guidelines. Currently, they open PDFs, search manually, or rely on memory. This reader needs to understand that AI can search their document library and bring the relevant section — complete with the paragraph reference — in seconds. RAG turns AI from a generalist into an expert on YOUR specific reference materials.

**Why this priority**: Standards research is a universal time sink for every accountant — audit, tax, and bookkeeping alike. Showing that AI can instantly retrieve the relevant standard section is the most immediately compelling RAG benefit.

**Independent Test**: After reading the chapter, can the reader explain how RAG would work for their most commonly referenced document (IFRS, FBR Income Tax Ordinance, etc.) — how the document gets into the AI system, how AI searches it, and how the reader verifies the retrieved answer? If yes, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader who frequently searches IFRS standards, **When** they read the "Research Assistant" section, **Then** they understand that AI can search the full IFRS library and return the specific paragraph relevant to their question — like having a junior who has read every standard and can find any reference instantly.
2. **Given** a reader who asks AI "How should I account for a lease modification under IFRS 16?", **When** AI uses RAG to search the IFRS 16 document, **Then** AI returns the specific paragraphs about lease modifications (not a general summary from training data) with section references the reader can verify.
3. **Given** a reader completing the chapter, **When** they compare AI without RAG vs. AI with RAG, **Then** they understand: without RAG, AI gives general knowledge (may be outdated or inaccurate); with RAG, AI gives answers grounded in YOUR actual documents (current and verifiable).

---

### Reader Journey 2 — The Knowledge Reuser: "We've Done This Before — Where's the Past File?" (Priority: P2)

An accountant who knows their firm has handled a similar engagement before but can't find the relevant working papers or memos. They need AI to search past engagement files, templates, and internal memos to surface relevant precedents. This reader sees RAG as "institutional memory on demand" — the firm's collective experience accessible in seconds.

**Why this priority**: Reinventing the wheel is expensive. Firms accumulate years of working papers, memos, and templates. RAG makes this historical knowledge searchable and reusable, saving hours of duplicated effort.

**Independent Test**: After reading the chapter, can the reader describe how RAG could search their firm's past engagement files to find a relevant precedent for a current engagement — and explain what documents they would need to make available to AI? If yes, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader starting a new audit engagement for a manufacturing client, **When** they ask AI "What audit procedures did we use for inventory valuation in past manufacturing audits?", **Then** AI searches past engagement files and returns relevant audit programs, working papers, and approaches — because those documents are part of the RAG library.
2. **Given** a reader completing the chapter, **When** they identify which firm documents should be RAG-accessible, **Then** they can build a "Document Library Plan" — categorizing documents by type, sensitivity, and relevance.

---

### Reader Journey 3 — The Quality Guardian: "How Do I Know AI's Answer Comes From the Right Source?" (Priority: P3)

A senior accountant concerned about AI citing outdated standards, withdrawn circulars, or wrong versions of regulations. They need to understand that RAG quality depends on WHAT DOCUMENTS YOU FEED IT. Good documents = accurate answers. Outdated documents = confidently wrong answers. This reader manages the document library that powers RAG.

**Why this priority**: RAG is only as good as its source documents. This reader ensures the foundation is solid — the documents are current, complete, and correctly categorized. Without this, RAG becomes a source of well-cited but wrong answers.

**Independent Test**: After reading the chapter, can the reader create a "Document Library Checklist" — ensuring all documents in the RAG system are current, authorized, and correctly categorized? If yes, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader responsible for firm standards, **When** they read the "Garbage In, Garbage Out" section, **Then** they understand that RAG accuracy depends entirely on document quality — outdated standards produce outdated answers.
2. **Given** a reader managing the document library, **When** they use the Document Library Checklist, **Then** they can verify that every document is current, properly categorized, and authorized for AI use.

---

### Edge Cases

- What if the reader's firm has documents in Urdu or mixed Urdu/English? The chapter MUST acknowledge this reality and advise: start with English-language documents (IFRS, English versions of FBR rules). AI handles English documents best. For Urdu documents, results may vary — test before relying on them.
- What if the document library includes confidential or privileged documents? The chapter MUST connect to Ch10 Data Classification — some documents (e.g., client engagement files) need anonymization before entering RAG. Apply the same AI-Safe / Anonymize-First / Never-Share framework.
- What if AI retrieves the wrong section or an outdated reference? The chapter MUST reinforce: RAG does NOT replace verification. Every RAG-retrieved answer must be verified against the source document — just like you'd verify a junior's research by checking the original standard. The paragraph reference AI provides is your verification shortcut.
- What if the firm is too small to have a large document library? The chapter MUST explain that even a small library is valuable: start with the standards you reference most (IFRS for SMEs, FBR Income Tax Ordinance, your firm's standard templates). A focused library of 20 key documents is more useful than a disorganized library of 2,000.

## Requirements *(mandatory)*

### Content Requirements

- **CR-001**: Chapter MUST open by connecting to Chapter 12 — "Chapter 12 gave AI a memory — it remembers your clients and your firm's way of working. But memory is limited to what you've told it. What about the thousands of pages of standards, regulations, past files, and templates your firm has accumulated? This chapter teaches you about RAG — Retrieval-Augmented Generation — which means: AI looks up information in YOUR documents before answering. Think of it as giving AI access to your firm's library, not just its own general knowledge."

- **CR-002**: Chapter MUST include the "Research Assistant" analogy:
  - Without RAG: "Like asking a brilliant generalist 'How should I account for this lease?' — they give you a good general answer based on what they remember from their studies, but it might not be the LATEST standard or YOUR firm's specific approach."
  - With RAG: "Like asking a research assistant who has access to your firm's entire library 'How should I account for this lease?' — they look up IFRS 16, find the specific paragraphs, check your firm's lease accounting policy, and bring you an answer with source references you can verify."

- **CR-003**: Chapter MUST explain RAG in simple terms using the "Look Up, Then Answer" model:
  ```
  HOW RAG WORKS (Simple Version)

  Step 1: YOU ASK a question
    "How do we account for lease modifications under IFRS 16?"

  Step 2: AI SEARCHES your document library
    AI looks through: IFRS 16 full text, your firm's lease accounting policy,
    past lease modification working papers

  Step 3: AI RETRIEVES relevant sections
    AI finds: IFRS 16 paragraphs 39-46 (lease modifications),
    your firm's policy note on lease modifications,
    last year's working paper for a similar case

  Step 4: AI ANSWERS using what it found
    AI gives you an answer BASED ON your documents — with references
    "According to IFRS 16.44, a lease modification that is not a
    separate lease requires the lessee to..."

  Step 5: YOU VERIFY the answer
    You check the paragraph reference. Does IFRS 16.44 actually say that?
    Is this the current version? Does it match your firm's policy?
  ```

- **CR-004**: Chapter MUST show the difference between AI with and without RAG using a side-by-side comparison:

  | Question | AI WITHOUT RAG | AI WITH RAG |
  |---|---|---|
  | "What is the depreciation rate for machinery under FBR rules?" | "The rate is typically 10-15% depending on the type of machinery." (vague, possibly outdated) | "Per the Third Schedule to the Income Tax Ordinance 2001, Part I, the normal depreciation rate for plant and machinery is 15%. [Reference: Section 22, read with Third Schedule]" (specific, verifiable) |
  | "How did we handle the contingent liability last year?" | "I don't have information about your past engagements." (no access) | "In last year's audit of Client A, the contingent liability for the pending tax case was disclosed under IAS 37, Note 24. The estimated range was PKR 5M-8M. [Source: 2025 audit file, WP ref C-24]" (firm-specific) |
  | "What is our firm's policy on materiality?" | "Materiality is typically 1-2% of total assets or 5% of net income." (generic textbook answer) | "Per the firm's Audit Methodology Manual v3.2, overall materiality is set at 1% of total assets for listed companies and 2% for private companies. Performance materiality is 75% of overall materiality. [Source: Firm Policy, Section 4.3]" (your actual policy) |

- **CR-005**: Chapter MUST include a "Document Library Plan" template for readers to organize their RAG-ready documents:
  ```
  DOCUMENT LIBRARY PLAN

  STANDARDS & REGULATIONS:
  - [ ] IFRS Standards (full text or IFRS for SMEs)
  - [ ] FBR Income Tax Ordinance 2001 (latest amended version)
  - [ ] Companies Act 2017
  - [ ] ICAP Ethical Code
  - [ ] FBR Sales Tax Act (if applicable)
  - [ ] [Other applicable regulations]
  Status: Current as of [date]

  FIRM POLICIES & TEMPLATES:
  - [ ] Audit Methodology Manual
  - [ ] Standard working paper templates
  - [ ] Engagement letter templates
  - [ ] Quality control policies
  - [ ] Chart of accounts templates
  - [ ] Report templates (audit, tax, advisory)
  Status: Last updated [date]

  PAST ENGAGEMENT FILES (Anonymized):
  - [ ] Sample audit files by industry
  - [ ] Tax computation templates by entity type
  - [ ] Advisory report samples
  - [ ] Common findings and how they were resolved
  Status: Anonymized — client names and identifiers removed

  REFERENCE MATERIALS:
  - [ ] Industry-specific guidance
  - [ ] FBR circulars and SROs
  - [ ] ICAP technical releases
  - [ ] Training materials
  Status: Current as of [date]

  EXCLUDED (Never in AI library):
  - Active client engagement files with identifying data
  - Confidential correspondence
  - [See Ch10 Data Classification Matrix]
  ```

- **CR-006**: Chapter MUST include a "Document Library Checklist" for maintaining RAG quality:
  - Is every standard the LATEST version? (Check for amendments, replacements)
  - Is every regulation current? (Tax rates, thresholds, circulars may be superseded)
  - Are firm policies up to date? (Methodology changes, new templates)
  - Are past engagement files properly anonymized? (No client names, NTNs, or identifying details)
  - Are documents properly categorized? (Standards vs. policies vs. templates vs. past work)
  - Is there a review schedule? (Standards: annually; FBR: after every Finance Act; Firm policies: after any change)
  - Who is responsible for updates? (Assign ownership)

- **CR-007**: Chapter MUST address the "Garbage In, Garbage Out" principle:
  - If you feed AI an outdated version of IFRS 16, it will give you outdated lease accounting guidance — confidently and with references
  - If you feed AI a withdrawn FBR circular, it will cite it as current law
  - If you feed AI unvetted past working papers, it may propagate errors from those papers
  - The accountant's responsibility: curate the document library with the same care you'd use for your firm's physical reference library
  - Connection to Ch5 (verification) — ALWAYS verify RAG-retrieved references against the actual source

- **CR-008**: Chapter MUST include at least 2 hands-on exercises:
  - Exercise 1: Plan Your Document Library — using the template, list all documents you would want AI to have access to. Categorize them. Identify which are current, which need updating, and which need anonymization. Prioritize: which 10 documents would give you the most value?
  - Exercise 2: Test RAG vs. No-RAG — ask AI the same accounting question twice: once without any document (general AI), once after uploading the relevant standard or policy document. Compare the answers. Which is more specific? Which has verifiable references? Which would you trust in professional work?

- **CR-009**: Chapter MUST include a Roman Urdu glossary (e.g., RAG = "Pehle Parho Phir Jawaab Do / Dastaawezon Se Jawaab", Retrieval = "Talaash / Dhoondna", Document Library = "Dastaawezon Ka Kitaab Khana", Source Reference = "Hawala", Verification = "Tasdeeq", Outdated = "Purana / Mansookh", Knowledge Base = "Ilm Ka Khazana", Search = "Talaash Karna").

- **CR-010**: Chapter MUST NOT contain any code, vector database configurations, embedding explanations, or technical RAG architecture. All concepts are described using library research and document search vocabulary.

- **CR-011**: Chapter MUST follow the book's writing style: second person ("you"), short paragraphs, tables and bullets, accounting-specific action verbs.

### Key Entities

- **RAG (Retrieval-Augmented Generation)**: A technique where AI searches a document library BEFORE answering — like looking up the standard before giving an opinion. Ensures AI answers are grounded in specific, verifiable sources rather than general training knowledge.
- **Document Library**: The curated collection of standards, regulations, firm policies, templates, and past work that AI can search. The digital equivalent of your firm's reference library.
- **Source Reference**: The specific document and section that AI cites in its answer — the paragraph number, policy section, or working paper reference that allows the reader to verify the AI's response.
- **Document Library Plan**: A structured inventory of all documents to include in RAG, organized by category (standards, policies, templates, past work) with currency and anonymization status.
- **Document Library Checklist**: A periodic quality review tool ensuring all documents in the RAG system are current, properly categorized, and authorized. Prevents "garbage in, garbage out."
- **Look Up, Then Answer**: The simple mental model for RAG — AI searches first, retrieves relevant sections, then constructs an answer based on what it found, with references.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: After reading the chapter, a reader can explain RAG using the "Look Up, Then Answer" model in plain language — without using technical terms.
- **SC-002**: A reader can articulate the difference between AI with RAG and AI without RAG using the side-by-side comparison — and explain why RAG answers are more trustworthy for professional work.
- **SC-003**: A reader can create a complete Document Library Plan for their practice — listing at least 15 documents across all categories with currency status.
- **SC-004**: A reader can identify at least 3 risks of poor document library management and explain how the Document Library Checklist addresses each risk.
- **SC-005**: All exercises can be completed with pen and paper (for planning) and a basic AI chat tool (for the RAG vs. no-RAG test) — no specialized RAG software required.
- **SC-006**: The chapter passes the Constitution's litmus test: "Would a practicing accountant in Pakistan understand this without Googling?"
- **SC-007**: A reader can explain to a colleague why "AI said so" is not good enough — but "AI found it in IFRS 16, paragraph 44" IS a useful starting point for verification.

## Chapter Outline *(reference)*

1. **Bridge from Chapter 12** — Memory Is What AI Remembers; RAG Is What AI Looks Up
2. **The Research Assistant Analogy** — From Generalist to Your Firm's Expert
3. **How RAG Works** — Look Up, Then Answer (5-step simple model)
4. **With RAG vs. Without RAG** — Side-by-Side Comparison (3 accounting examples)
5. **Flagship Example: Standards Research** — IFRS Query Answered With and Without RAG
6. **The Document Library Plan** — Organize Your Firm's Knowledge for AI
7. **Garbage In, Garbage Out** — Why Document Quality Determines Answer Quality
8. **The Document Library Checklist** — Keeping Your Library Current
9. **Hands-On Exercises** — 2 Exercises (Document Library Plan + RAG vs. No-RAG Test)
10. **What's Next** — Evaluation: Is AI Output Audit-Ready? (Ch14 preview)
11. **Key Takeaways** — Chapter Summary
12. **Roman Urdu Glossary** — Key Terms in Your Language

## Assumptions

- Readers have completed Chapters 1-12 and understand memory (Ch12), guardrails (Ch10), and verification (Ch5).
- Readers are familiar with searching standards, regulations, and past files as part of their daily professional work.
- Current AI tools support basic RAG capabilities: ChatGPT allows file uploads to conversations, Claude Projects allow document libraries. The chapter focuses on WHAT DOCUMENTS and WHY, not on specific tool configuration.
- The Document Library Plan is tool-agnostic — it works whether the reader uses ChatGPT, Claude, or any future AI tool that supports document upload.
- Anonymization of past engagement files (Connection to Ch10) is a prerequisite for including them in any AI-accessible library.
- RAG does NOT replace verification — it provides a starting point with source references. The accountant ALWAYS verifies against the original document, especially for regulatory citations.
