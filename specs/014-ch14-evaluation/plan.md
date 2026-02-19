# Content Plan: Chapter 14 — Evaluation: Is AI Output Audit-Ready?

**Branch**: `014-ch14-evaluation` | **Date**: 2026-02-18 | **Spec**: [spec.md](spec.md)

## Summary

Chapter 14 is the quality assurance capstone — it synthesizes Ch5 (verification), Ch10 (guardrails), and Ch11 (HITL) into a systematic, documented evaluation framework. The Golden Dataset concept turns "I think AI is good at this" into measurable evidence. The AI Evaluation Scorecard creates documented proof that can satisfy a partner or regulator. Core deliverables: Golden Dataset, 4 evaluation dimensions, AI Evaluation Scorecard, evaluation calendar. Target: 3,500–4,500 words.

## Content Context

**Format**: Markdown (MDX-compatible)
**Target Length**: 3,500–4,500 words
**Prerequisite**: Full book context — this synthesizes everything
**Key Deliverables**: Golden Dataset (build + use), 4 evaluation dimensions, AI Evaluation Scorecard template, evaluation calendar

## Constitution Check

- [x] I — QC review analogy, not testing frameworks or statistical analysis
- [x] II — Transaction classification Golden Dataset, PKR amounts, FBR/IFRS compliance checks
- [x] III — Accountant defines thresholds, builds tests, judges AI performance
- [x] IV — No testing frameworks, no statistics — QC review vocabulary
- [x] V — This chapter IS the culmination of Principle V across the whole book
- [x] VI — All 5 quality chapters synthesized (Ch5, Ch10, Ch11, Ch12, Ch13)
- [x] VII — Plan written before content
- [x] VIII — Roman Urdu glossary

## Chapter File (Docusaurus)

```text
docs/part-2-ai-systems/ch14-evaluation.md
```

## Section Plan

### Section 1: Bridge + QC Review Analogy (CR-001, CR-002)
**Length**: 350–450 words
**Key Message**: "AI output needs the same QC review as any professional deliverable — documented, systematic, evidence-based."
**Must Include**:
- Bridge: "You've verified (Ch5), set guardrails (Ch10), supervised (Ch11). This chapter makes it systematic."
- QC review analogy: every firm has engagement reviews, cold file reviews, peer reviews — same framework for AI
- "The difference: AI can be tested BEFORE it touches real work — something you can't easily do with a new employee."

---

### Section 2: The Golden Dataset (CR-003) — CORE CONCEPT
**Length**: 500–600 words
**Key Message**: "50 known-correct test cases turn 'pretty good' into '94% accurate on transaction classification.'"
**Must Include**:
- Definition: pre-verified test cases with KNOWN correct answers
- Building guide: start with tasks you already do, 30-50 cases (70% typical, 20% edge, 10% tricky)
- Transaction classification example with 3 sample rows (Office furniture, internet bill, vehicle sale)
- How to score: run 50 through AI → compare → count → "AI: 47/50 = 94%. 3 errors all in Disposal category"
- The actionable insight: "Is 94% enough for this task? You decide the threshold."
- CRITICAL: "Keep Golden Datasets SEPARATE from AI memory/RAG — AI must not memorize the tests"

---

### Section 3: Four Evaluation Dimensions (CR-004)
**Length**: 700–900 words
**Key Message**: "Four questions. Every evaluation. No shortcuts."
**Must Include**:
- **Dimension 1 — Accuracy**: Calculations right? Classifications right? References correct? (Measured: Golden Dataset comparison)
- **Dimension 2 — Completeness**: Everything included? All steps? All standards? (Measured: Checklist comparison)
- **Dimension 3 — Compliance**: Follows FBR/IFRS/ICAP/firm policies? Required disclosures included? (Measured: Compliance checklist)
- **Dimension 4 — Professional Judgment**: AI flags judgment calls instead of making them? Escalates appropriately? (Measured: Scenario testing)
- Each dimension: what it measures, how to measure it, what "passing" looks like

---

### Section 4: AI Evaluation Scorecard Template (CR-005)
**Length**: 400–500 words
**Key Message**: "Fill this in. Show it to your partner. That's your evidence."
**Must Include**: Full scorecard template from the spec plan — all four dimensions with PASS/FAIL, overall assessment, recommendations

---

### Section 5: Evaluation → Trust Ladder (CR-006)
**Length**: 250–350 words
**Key Message**: "Evaluation results determine which Trust Ladder mode a workflow is ready for."
**Must Include**:
- Below threshold → Not ready
- Meets basic threshold → Shadow Mode
- Exceeds consistently → Supervised Mode
- Perfect consistently → Autonomous candidate
- "Every step UP the Trust Ladder requires a passing evaluation"

---

### Section 6: Building Good Golden Datasets (CR-007)
**Length**: 300–400 words
**Key Message**: "30-50 cases beats 1,000 mediocre cases."
**Must Include**: Start with most common task; 70/20/10 coverage distribution; annual review; separate from AI memory

---

### Section 7: Evaluation Calendar
**Length**: 200–300 words
**Key Message**: "Evaluation once is a snapshot. Quarterly is a practice."
**Must Include**: Sample calendar — workflow → frequency → dataset size → responsible person → action triggers

---

### Section 8: Exercises + Takeaways + Glossary
**Length**: 500–600 words
**Must Include**:
- **Exercise 1**: Build a Mini Golden Dataset — 20 test cases, score AI, fill in scorecard
- **Exercise 2**: Design Evaluation Calendar — 3 workflows, frequency, thresholds, owner
- 6 key takeaways, Ch15 preview, Roman Urdu glossary (8 terms)

## Section Word Targets

| Section | Target Words |
|---|---|
| 1. Bridge + QC Analogy | 350–450 |
| 2. Golden Dataset (CORE) | 500–600 |
| 3. Four Dimensions | 700–900 |
| 4. Scorecard Template | 400–500 |
| 5. Evaluation → Trust Ladder | 250–350 |
| 6. Building Good Datasets | 300–400 |
| 7. Evaluation Calendar | 200–300 |
| 8. Exercises + Close | 500–600 |
| **Total** | **3,200–4,100** |
