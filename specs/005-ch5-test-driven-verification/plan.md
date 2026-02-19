# Content Plan: Chapter 5 — Test-Driven Verification: Trust But Verify

**Branch**: `005-ch5-test-driven-verification` | **Date**: 2026-02-18 | **Spec**: [spec.md](spec.md)

## Summary

Chapter 5 closes Part 1. It takes the Verification Checklist introduced in Ch2 and expands it into a full professional practice. The chapter's emotional core is the "AI Hallucination Horror Story" — a concrete accounting error story that makes every reader think "that could be me." Core deliverables: 7-point Verification Checklist, Golden Dataset concept (preview of Ch14), Verify-Then-Trust Progression, Verification Record Template. Target: 3,500–4,500 words.

## Content Context

**Format**: Markdown (MDX-compatible)
**Target Length**: 3,500–4,500 words
**Writing Style**: Second person, serious tone in hallucination section, practical in template sections
**Prerequisite**: Ch2-4 — verification is the professional wrapper around all the skills
**Key Deliverables**: 7-point Verification Checklist (expanded from Ch2's 5-point), Verify-Then-Trust Progression, Verification Record Template

## Constitution Check

- [x] I — Reconciliation/audit procedures analogy for verification
- [x] II — AI tax error, IFRS misquote, audit finding — real accounting failure scenarios
- [x] III — Supervisor mindset: "AI produces drafts; you produce signed deliverables"
- [x] IV — Verification = reconciliation procedure, not software testing
- [x] V — This IS the Verification chapter — the entire chapter is Principle V
- [x] VI — Closes Part 1, references Ch14 (Evaluation) as the systematic version
- [x] VII — Plan written before content
- [x] VIII — Roman Urdu glossary

## Chapter File (Docusaurus)

```text
docs/part-1-personal-skills/ch05-test-driven-verification.md
```

## Section Plan

### Section 1: Bridge + AI Hallucination Horror Story (CR-001, CR-002)
**Length**: 400–500 words
**Key Message**: "AI is confidently wrong more often than it admits. Your professional judgment is the only safeguard."
**Must Include**:
- Ch4 callback: "You've specified the task. Now AI has delivered. Do you sign off?"
- Horror story scenario: AI computes a tax liability using an outdated FBR rate. Returns are filed. Penalty follows. The accountant is liable — not the AI.
- "This is not a hypothetical. This is the risk profile of every accountant who uses AI without a verification practice."
- Tone: serious, not alarmist — this is professional responsibility, not fear-mongering

---

### Section 2: How AI Errors Differ from Human Errors (CR-003)
**Length**: 400–450 words
**Key Message**: "Human errors are obvious. AI errors are invisible — confident, well-formatted, and plausible."
**Must Include**:
- Comparison table: Human Error vs. AI Error
  - Human: slow, inconsistent, shows effort
  - AI: fast, consistent, LOOKS authoritative — but may be wrong
- The danger: AI uses official-sounding language even when wrong
- "A human junior who makes an error looks uncertain. AI that makes an error looks certain."
- Types of AI errors in accounting: hallucinated standards, wrong rates, calculation errors hidden in prose, outdated regulations cited as current

---

### Section 3: The 7-Point Verification Checklist (CR-004) — CORE
**Length**: 500–600 words
**Key Message**: "Seven checks. Every time. No exceptions."
**Must Include**:
- Expanded Verification Checklist (from Ch2's 5-point to 7-point — visually distinct box):
  1. Is the standard/law citation real? (Look it up)
  2. Is the math correct? (Recalculate independently)
  3. Is this the current regulation? (Check effective date)
  4. Is professional judgment being applied or avoided? (AI should flag, not decide)
  5. Would I sign off on this as my own work? (Final professional test)
  6. Did I verify against the primary source document? (Not AI's summary — the actual text)
  7. Would this withstand a regulator's scrutiny? (Regulatory robustness test)
- "This extends the checklist from Chapter 2. Two new points: primary source verification and regulatory robustness."

---

### Section 4: The Golden Dataset Concept — Preview (CR-005)
**Length**: 350–450 words
**Key Message**: "Before trusting AI with real work, test it with cases you already know the answers to."
**Must Include**:
- Preview of Ch14's full evaluation — "we'll build this systematically in Chapter 14"
- Simple Golden Dataset concept: 10-20 transactions you've already classified correctly → run through AI → measure accuracy
- "If AI gets 18 of 20 right, you have a baseline. If it gets 12 of 20, you know it needs more context."
- "The Golden Dataset turns 'I think AI is pretty good at this' into 'AI is 90% accurate on this task type.'"

---

### Section 5: Verify-Then-Trust Progression (CR-006)
**Length**: 400–500 words
**Key Message**: "Verification isn't permanent at 100%. It reduces as trust is earned — earned through evidence, not assumption."
**Must Include**:
- 3-stage progression table:
  - Stage 1 — Full Verification: Review every item AI produces (new task/new AI tool)
  - Stage 2 — Spot-Check: Review 20% randomly + all flagged exceptions (proven track record)
  - Stage 3 — Exception-Based: Review only flagged items (extensive proven accuracy)
- "Moving from Stage 1 to Stage 3 takes weeks, not days. Evidence required."
- Connection to Ch11 (Human-in-the-Loop modes) — same progression, different vocabulary

---

### Section 6: Verification Record Template (CR-007)
**Length**: 350–450 words
**Key Message**: "Document your verification. If you didn't document it, you didn't do it."
**Must Include**:
```
VERIFICATION RECORD
Task: [AI-assisted task name]
Date: [Date]
AI Tool: [ChatGPT / Claude / Other]
Reviewer: [Your name]

CHECKLIST:
[ ] 1. Citations verified against primary sources
[ ] 2. Math recalculated independently
[ ] 3. Regulation currency confirmed (effective date checked)
[ ] 4. Professional judgment calls identified and reviewed
[ ] 5. Output meets professional standard (I would sign this)
[ ] 6. Primary source document consulted (not AI summary)
[ ] 7. Regulatory robustness confirmed

ERRORS FOUND:
[List any errors found and how they were corrected]

VERIFICATION STAGE: Full / Spot-Check / Exception-Based
OUTCOME: Approved / Returned for revision
```
- "This record is your professional defence if AI output is ever questioned."

---

### Section 7: Part 1 Closing + Exercises + Takeaways + Glossary
**Length**: 700–800 words
**Must Include**:
- Part 1 summary: "You now have the 4 personal skills that make you an effective AI user: prompting, context, spec-writing, and verification. Part 2 teaches you the AI systems you'll supervise."
- **Exercise 1**: Horror Story Prevention — take one AI output you've already received. Run it through the 7-point checklist. How many checks does it pass? What did you find?
- **Exercise 2**: Build a Mini Golden Dataset — take 10 transactions you've already correctly classified. Run them through AI using your Ch2 few-shot prompt. Score the results.
- 6 key takeaways
- Part 2 preview: "Chapter 6 introduces MCP — how AI connects to your accounting tools"
- Roman Urdu glossary: Verification, Hallucination, Golden Dataset, Verification Checklist, Primary Source, Spot-Check, Exception-Based, Verify-Then-Trust, Professional Judgment, Verification Record

## Section Word Targets

| Section | Target Words |
|---|---|
| 1. Bridge + Horror Story | 400–500 |
| 2. AI vs. Human Errors | 400–450 |
| 3. 7-Point Checklist (CORE) | 500–600 |
| 4. Golden Dataset Preview | 350–450 |
| 5. Verify-Then-Trust | 400–500 |
| 6. Verification Record | 350–450 |
| 7. Part 1 Close + Exercises | 700–800 |
| **Total** | **3,100–3,750** |

*Note: Lighter than Ch2-3 — precision over volume. Every word in this chapter carries professional weight.*
