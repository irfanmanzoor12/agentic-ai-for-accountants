# Content Plan: Chapter 13 — RAG: AI Reads Your Firm's Documents

**Branch**: `013-ch13-rag` | **Date**: 2026-02-18 | **Spec**: [spec.md](spec.md)

## Summary

RAG transforms AI from a generalist to a specialist in YOUR firm's knowledge. The "Research Assistant with library access" analogy is the chapter's narrative spine. The side-by-side comparison (AI with vs. without RAG) is the most powerful visual in the chapter. The "Garbage In, Garbage Out" principle ensures readers maintain document quality. Core deliverables: 5-step "Look Up, Then Answer" model, with/without RAG comparison, Document Library Plan, Document Library Checklist. Target: 3,000–4,000 words.

## Content Context

**Format**: Markdown (MDX-compatible)
**Target Length**: 3,000–4,000 words
**Prerequisite**: Ch12 (memory) — RAG extends beyond memory to active document search
**Key Deliverables**: "Look Up, Then Answer" 5-step model, with/without RAG comparison, Document Library Plan template, Document Library Checklist

## Constitution Check

- [x] I — Library research analogy, not vector database vocabulary
- [x] II — IFRS 16, FBR Income Tax Ordinance, firm audit methodology as document library examples
- [x] III — Accountant curates library, verifies all RAG answers
- [x] IV — No embeddings, no chunking — librarian/research assistant vocabulary
- [x] V — "AI found it in IFRS 16.44 is a starting point, not proof" — always verify
- [x] VI — Memory (Ch12) → RAG (Ch13) → Evaluation (Ch14)
- [x] VII — Plan written before content
- [x] VIII — Roman Urdu glossary

## Chapter File (Docusaurus)

```text
docs/part-2-ai-systems/ch13-rag.md
```

## Section Plan

### Section 1: Bridge + Research Assistant Analogy (CR-001, CR-002)
**Length**: 300–400 words
**Key Message**: "Memory tells AI what it knows. RAG tells AI what to LOOK UP."
**Must Include**:
- Ch12 callback: "Memory is what AI remembers about your clients. RAG is how AI accesses your firm's knowledge."
- Research assistant with vs. without library access analogy
- Without RAG → generalist. With RAG → specialist in YOUR documents.

---

### Section 2: "Look Up, Then Answer" — 5-Step Model (CR-003)
**Length**: 300–400 words
**Key Message**: "RAG in 5 steps: Ask → Search → Retrieve → Answer → You Verify."
**Must Include**:
- Full 5-step model as formatted block:
  1. YOU ASK: "How should I account for a lease modification under IFRS 16?"
  2. AI SEARCHES: Your IFRS 16 document, firm policy, past working papers
  3. AI RETRIEVES: Specific paragraphs 39-46 (lease modifications)
  4. AI ANSWERS: Based on what it found (with citation)
  5. YOU VERIFY: Check paragraph 39-46 in the actual IFRS 16 document

---

### Section 3: With RAG vs. Without RAG — Side-by-Side (CR-004) — CORE VISUAL
**Length**: 400–500 words
**Key Message**: "Without RAG: vague or wrong. With RAG: specific and verifiable."
**Must Include**:
- 3-question comparison table:
  - FBR depreciation rate
  - "How did we handle this last year?" (past engagement)
  - "What is our firm's materiality policy?"
- Each: Without RAG (vague/no access) | With RAG (specific + citation)

---

### Section 4: Document Library Plan Template (CR-005)
**Length**: 400–500 words
**Key Message**: "Curate your library. Prioritize 10–20 key documents to start."
**Must Include**: Full template with 4 categories (Standards, Firm Policies, Past Engagements, Reference) + EXCLUDED category

---

### Section 5: Garbage In, Garbage Out (CR-007)
**Length**: 300–400 words
**Key Message**: "RAG is only as good as your documents. Outdated library = confidently wrong answers."
**Must Include**:
- Outdated IFRS 16 → outdated lease accounting guidance — stated as certainty, not warning
- Withdrawn FBR circular → cited as current law
- The accountant's responsibility: maintain the library like you maintain your physical references

---

### Section 6: Document Library Checklist (CR-006)
**Length**: 250–350 words
**Key Message**: "Seven questions before any document goes into your RAG library."
**Must Include**: 7-item checklist boxed — latest version? Current regulation? Anonymized? Categorized? Review schedule? Owner?

---

### Section 7: Exercises + Takeaways + Glossary
**Length**: 450–550 words
**Must Include**:
- **Exercise 1**: Plan Your Document Library — using template, list 15 documents with status
- **Exercise 2**: RAG vs. No-RAG Test — same question twice: general AI then with uploaded document
- 6 key takeaways, Ch14 preview, Roman Urdu glossary (8 terms)

## Section Word Targets

| Section | Target Words |
|---|---|
| 1. Bridge + Research Assistant | 300–400 |
| 2. 5-Step "Look Up, Then Answer" | 300–400 |
| 3. With/Without RAG Comparison | 400–500 |
| 4. Document Library Plan | 400–500 |
| 5. Garbage In, Garbage Out | 300–400 |
| 6. Document Library Checklist | 250–350 |
| 7. Exercises + Close | 450–550 |
| **Total** | **2,400–3,100** |

*Note: Tighter than other chapters — the power is in the comparison table and templates, not prose volume.*
