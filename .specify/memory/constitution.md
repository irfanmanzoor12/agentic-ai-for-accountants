<!--
Sync Impact Report
- Version change: 0.0.0 → 1.0.0
- Added principles: I through VIII (initial constitution)
- Added sections: Content Standards, Development Workflow
- Templates requiring updates: ⚠ pending (first constitution — templates to be validated on first /sp.specify)
-->

# Agentic AI for Accounting Professionals — Constitution

## Core Principles

### I. Accountant-First, Always
Every piece of content MUST be written for accounting professionals who have zero programming background. No code, no terminal commands, no technical jargon unless immediately explained with an accounting analogy. The litmus test: "Would a practicing accountant in Pakistan understand this without Googling?"

### II. Domain Authenticity
All examples, exercises, and case studies MUST use real accounting scenarios — audit, tax (FBR/Pakistan), bookkeeping, financial reporting, IFRS, ICAP standards. Never use generic AI examples like "write me a poem" or "plan a vacation." Every concept is taught through the accounting lens.

### III. Supervisor Mindset
The book's core message: accountants become AI supervisors, not programmers. Every chapter MUST reinforce that the reader's role is to define intent (what "correct" looks like), direct AI agents, and verify output — not to build or code AI systems.

### IV. Concept Over Implementation
Teach the WHAT and WHY, never the HOW-to-build. MCP is explained as "USB for AI," not as JSON schemas. Agents are explained as "digital accounting staff," not as Python classes. Orchestration is explained as "coordinating a team," not as code pipelines. Technical accuracy maintained, but abstracted for the audience.

### V. Verification as Professional Duty
Every chapter that shows AI producing output MUST include verification guidance. AI hallucinations in accounting have real consequences — wrong tax calculations, non-compliant disclosures, audit failures. The Accountant's AI Verification Checklist is a recurring element throughout the book.

### VI. Progressive Complexity
Content flows from familiar to unfamiliar: Prompt Engineering (Week 1 skills) → Context Engineering (system thinking) → Agent Concepts (skills, agents, orchestration) → Business Transformation (Agent Factory thesis). Each chapter builds on the previous. No concept is introduced without its prerequisite being covered first.

### VII. Spec-Driven Book Development
This book is itself built using Spec-Driven Development. Every chapter starts as a specification (what it covers, learning objectives, key examples, exercises) before content is written. This serves dual purpose: quality book content AND a real-world demonstration of SDD principles taught in Chapter 4.

### VIII. Bilingual Accessibility
Key terms and glossaries MUST include Roman Urdu translations. The book targets Pakistani accounting professionals who communicate daily in Roman Urdu. This is not full translation — it is key term glossary and concept explanations in Roman Urdu alongside English.

## Content Standards

### Book Structure
- **Platform:** Docusaurus deployed on GitHub Pages
- **Chapters:** 15 chapters aligned to the 15 teaching topics
- **Each chapter contains:** Concept explanation, accounting analogy, real-world example, hands-on exercise, common mistakes, key takeaways, Roman Urdu glossary
- **RAG Chatbot:** Embedded in the book site — readers can ask questions about content
- **Source Materials:** Agent Factory Thesis, Prompt Engineering Course (Panaversity), Context Engineering Tutorial

### Quality Gates for Content
- No unexplained technical terms — every term gets an accounting analogy on first use
- No code blocks visible to the reader — all examples use natural language prompts and AI chat interfaces
- Every AI-generated example MUST be verified against actual accounting standards (IFRS, FBR, ICAP)
- Every chapter MUST have at least 2 hands-on exercises using ChatGPT or Claude (no other tools required)
- Roman Urdu glossary of 5-10 key terms per chapter

### Writing Style
- Simple, direct English (not academic)
- Second person ("you") — speaking directly to the accountant reader
- Short paragraphs (3-4 sentences max)
- Tables and bullet points preferred over long prose
- Accounting-specific action verbs: Analyze, Reconcile, Classify, Prepare, Calculate, Verify, Draft

## Development Workflow

### Book Development Pipeline
1. **Constitution** (this document) — project principles and constraints
2. **Specify** — chapter specification (learning objectives, key concepts, examples, exercises)
3. **Plan** — chapter outline and content architecture
4. **Tasks** — break chapter into writable sections
5. **Implement** — write chapter content using Claude Code
6. **Verify** — check against Content Standards quality gates

### Technology Stack
- **Book Site:** Docusaurus 3.x on GitHub Pages
- **Development:** Claude Code with Spec-Kit Plus
- **Skills:** From panaversity/claude-code-skills-lab (doc-coauthoring, pdf, xlsx, pptx)
- **Version Control:** Git + GitHub
- **Content Format:** Markdown (MDX where needed for interactive elements)

### What This Project Does NOT Include
- No Python, TypeScript, or any programming language in reader-facing content
- No Kubernetes, Docker, or infrastructure topics
- No building MCP servers, custom agents, or voice agents
- No API development or database management
- These topics exist in the Agent Factory book (Parts 4-9) but are explicitly out of scope for this accounting audience

## Governance

This constitution is the authoritative source for all content and development decisions in this project. All chapters, exercises, and supplementary materials MUST comply with these principles. Amendments require documenting the change, rationale, and updating all affected content.

When in doubt about whether content is appropriate for the target audience, apply Principle I: "Would a practicing accountant in Pakistan understand this without Googling?"

**Version**: 1.0.0 | **Ratified**: 2026-02-18 | **Last Amended**: 2026-02-18
