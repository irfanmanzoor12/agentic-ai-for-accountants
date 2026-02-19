# Content Plan: Chapter 11 — Human-in-the-Loop: When AI Pauses for Your Judgment

**Branch**: `011-ch11-human-in-the-loop` | **Date**: 2026-02-18 | **Spec**: [spec.md](spec.md)

## Summary

Chapter 11 defines the three modes of human-AI collaboration through the Engagement Manager lens — adjusting supervision based on trust and task risk. The Trust Ladder is the chapter's most actionable framework: a structured, bidirectional progression from Shadow → Supervised → Autonomous. The bank reconciliation flagship walks through all three modes over 6 months including trust regression. Core deliverables: 3 modes, Trust Ladder, Mode Decision Matrix. Target: 3,500–4,500 words.

## Content Context

**Format**: Markdown (MDX-compatible)
**Target Length**: 3,500–4,500 words
**Prerequisite**: Ch10 (guardrails set) — HITL defines how YOU interact with those guardrails
**Key Deliverables**: 3 collaboration modes, Trust Ladder (bidirectional), Mode Decision Matrix, bank reconciliation flagship (6 months + regression)

## Constitution Check

- [x] I — New junior / competent senior / trusted team member as mode analogies
- [x] II — Bank reconciliation flagship — universal accounting task
- [x] III — Accountant as engagement manager who adjusts supervision level
- [x] IV — No AI configuration, no API — engagement management vocabulary
- [x] V — Verification intensity varies by mode (100% → spot-check)
- [x] VI — Guardrails (Ch10) → human interaction modes (Ch11) → memory (Ch12)
- [x] VII — Plan written before content
- [x] VIII — Roman Urdu glossary

## Chapter File (Docusaurus)

```text
docs/part-2-ai-systems/ch11-human-in-the-loop.md
```

## Section Plan

### Section 1: Bridge + Engagement Manager Analogy (CR-001, CR-002)
**Length**: 350–450 words
**Key Message**: "You already adjust supervision based on trust. Same principle, digital team."
**Must Include**:
- Ch10 callback
- New junior → competent senior → trusted team member progression as the analogy foundation

---

### Section 2: Three Modes — Shadow, Supervised, Autonomous (CR-003) — CORE
**Length**: 1,000–1,200 words
**Key Message**: "Three modes. Choose based on task risk, AI track record, and your guardrails."
**Must Include** (each mode with analogy, example, when to use):
- **Shadow Mode**: AI recommends, you execute — "New junior prepares, you review everything and execute all actions"
- **Supervised Mode**: AI executes, you review exceptions — "Competent senior — you review summary and exceptions only"
- **Autonomous Mode**: AI executes within guardrails, you spot-check — "Trusted team member — weekly summary, occasional spot-check"
- CRITICAL for Autonomous: "Even in Autonomous Mode, YOU authorize all submissions, filings, client-facing documents"
- 3-row mode table: Mode | Human Role | AI Role | When to Use | Review Effort

---

### Section 3: The Trust Ladder (CR-004)
**Length**: 500–600 words
**Key Message**: "Trust is earned through evidence. The ladder goes up AND down."
**Must Include**:
- Full Trust Ladder with promotion criteria (all 5 must be true to move up)
- Trust Regression explicitly called out: if accuracy drops → move back immediately
- "Trust Regression is not failure — it's responsible supervision"

---

### Section 4: Bank Reconciliation Flagship — 6 Months (CR-005)
**Length**: 600–700 words
**Key Message**: "The same task, three modes, over 6 months — including a regression."
**Must Include**:
- Month 1: Shadow Mode — every item reviewed, accuracy baseline established
- Month 3: Supervised Mode — 488 matched automatically, 12 exceptions reviewed
- Month 6: Autonomous Mode — daily reconciliation, weekly summary, 5% spot-check
- Month 7 Regression: new bank fee type → accuracy drops to 95% → back to Supervised
- Time comparison at each stage: 2 hours → 45 min → 8 min (+ one-time setup)

---

### Section 5: Mode Decision Matrix (CR-006)
**Length**: 300–400 words
**Key Message**: "Seven factors, three modes. Use this before every new AI workflow."
**Must Include**: Full 7-factor matrix table from spec plan

---

### Section 6: Approval Workflows — How AI Pauses (CR-007)
**Length**: 250–350 words
**Key Message**: "The pause point is where your professional judgment lives."
**Must Include**:
- Mechanics of AI pausing: batch complete → summary presented → human action required
- "The pause is not a bottleneck — it is your highest-value contribution"
- Connection to Ch9 Human Gates and Ch10 Escalation Guardrails

---

### Section 7: Exercises + Takeaways + Glossary
**Length**: 500–600 words
**Must Include**:
- **Exercise 1**: Classify Your Workflows by Mode — 10 tasks, which mode for each
- **Exercise 2**: Design a Trust Ladder for One Workflow — promotion criteria, regression triggers
- 6 key takeaways, Ch12 preview, Roman Urdu glossary (8 terms)

## Section Word Targets

| Section | Target Words |
|---|---|
| 1. Bridge + Engagement Manager | 350–450 |
| 2. Three Modes (CORE) | 1,000–1,200 |
| 3. Trust Ladder | 500–600 |
| 4. Bank Recon Flagship | 600–700 |
| 5. Mode Decision Matrix | 300–400 |
| 6. Approval Workflows | 250–350 |
| 7. Exercises + Close | 500–600 |
| **Total** | **3,500–4,300** |
