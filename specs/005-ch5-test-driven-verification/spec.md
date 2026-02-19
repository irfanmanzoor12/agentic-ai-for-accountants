# Feature Specification: Chapter 5 — Test-Driven Verification: Trust But Verify

**Feature Branch**: `005-ch5-test-driven-verification`
**Created**: 2026-02-18
**Status**: Draft
**Input**: User description: "Chapter 5 of 'Agentic AI for Accounting Professionals.' Teaches verification as professional duty. Key insight: accountants ALREADY do this — reconciliation IS testing, audit procedures ARE verification, the trial balance IS a test that debits equal credits. This chapter extends Chapter 4's acceptance criteria into a complete verification discipline. Covers the Golden Dataset concept from the Agent Factory thesis, the AI Verification Checklist (expanded from Ch2), and systematic methods to catch AI hallucinations, math errors, and outdated regulation citations."

## User Scenarios & Testing *(mandatory)*

<!--
  Test-Driven Verification is where professional liability meets AI.
  Accountants sign off on work. AI hallucinations in accounting have real consequences:
  wrong tax filings, non-compliant disclosures, audit failures.
  This chapter turns the reader's existing verification instincts into a
  systematic AI output verification discipline.
-->

### Reader Journey 1 — The Trusting User: "AI Gave Me the Answer, It Must Be Right" (Priority: P1)

An accountant who has been using AI (Chapters 2-4) and is getting good results. They're starting to trust AI output without thorough checking. This is the most dangerous reader — comfortable enough to rely on AI, not yet disciplined enough to verify systematically. They need a wake-up call: AI confidently gives wrong tax rates, fabricates accounting standard references, and makes calculation errors. Their professional reputation and their client's money are at stake.

**Why this priority**: Over-trust is the single biggest risk of AI adoption in accounting. One wrong tax computation filed with FBR, one fabricated IFRS reference in an audit report, one calculation error in a financial statement — and the accountant's career is damaged. This reader MUST learn verification before going further.

**Independent Test**: Give the reader 5 AI-generated accounting outputs, 2 of which contain deliberate errors (wrong tax rate, fake standard citation). Can they identify both errors using the verification methods taught in this chapter? If yes, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader who trusts AI output, **When** they see the "AI Hallucination Horror Stories" section showing AI confidently citing non-existent accounting standards, **Then** they understand that AI can be wrong with complete confidence — and verification is not optional.
2. **Given** a reader who reads an AI-generated tax computation, **When** they apply the expanded AI Verification Checklist, **Then** they can systematically identify whether tax rates are current, calculations are correct, and sections of law are accurately cited.
3. **Given** a reader who has verified AI output, **When** they compare the time spent on verification vs. the time saved by using AI, **Then** they understand that verification is a fraction of the total time and is non-negotiable for professional work.

---

### Reader Journey 2 — The Experienced Verifier: "I Already Check Everything" (Priority: P2)

A senior accountant who already has strong verification habits from years of reviewing junior staff work. They reconcile, cross-check, and review as second nature. This reader needs to understand that AI errors are DIFFERENT from human errors — AI doesn't make tired mistakes or typos, it makes confident fabrications and systematic pattern errors. Their existing skills are valuable but need adaptation for AI-specific failure modes.

**Why this priority**: These readers are the fastest to become effective AI supervisors because they already have the verification mindset. They just need to learn AI-specific failure patterns so they know WHERE to look.

**Independent Test**: After reading the chapter, can the reader list 3 ways AI errors differ from junior staff errors and explain how their verification approach needs to adapt? If yes, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a senior accountant who reviews junior staff work, **When** they read the "How AI Errors Differ" section, **Then** they understand that AI doesn't make typos — it fabricates with confidence, applies outdated rules consistently, and fails at edge cases where professional judgment is needed.
2. **Given** a reader who builds a Golden Dataset for their practice area, **When** they test AI output against known-correct examples, **Then** they can quantify AI accuracy for specific task types and decide which tasks are safe to delegate.

---

### Reader Journey 3 — The Quality System Builder: "I Want a Repeatable Verification Process" (Priority: P3)

An accountant or manager who wants to build a systematic quality assurance process for AI-assisted work across their team. They don't want ad-hoc checking — they want checklists, verification templates, and a "Golden Dataset" of known-correct examples to test AI against. This reader turns verification from an individual habit into a firm-wide quality system.

**Why this priority**: Systematic verification is what separates professional AI usage from casual AI usage. A firm with a verification framework can confidently scale AI adoption. Without it, every team member is guessing what to check.

**Independent Test**: After reading the chapter, can the reader create a verification template for their practice area that any team member can follow to verify AI output consistently? If yes, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a manager who wants consistent AI quality control, **When** they create a Golden Dataset and verification template, **Then** any team member can verify AI output against known-correct examples using a standardized process.
2. **Given** a team using the verification template, **When** they review AI-generated work, **Then** they catch errors at the same rate regardless of which team member performs the review — consistency is achieved.

---

### Edge Cases

- What if the reader doesn't have access to current tax rates or standards to verify against? The chapter MUST recommend specific free sources: FBR website for tax rates, IFRS Foundation for standards, ICAP website for local guidance.
- What if AI output is partially correct — some parts right, some wrong? The chapter MUST teach "section-by-section verification" rather than all-or-nothing acceptance. Show how to approve correct sections and send incorrect sections back to AI with specific corrections.
- What if the reader can't tell whether AI is right or wrong because the topic is unfamiliar? The chapter MUST address this directly: "If you don't know enough to verify the answer, you don't know enough to use AI for that task. Either build your knowledge first or consult a specialist."
- What if verification takes longer than doing the work manually? The chapter MUST acknowledge this happens for simple tasks and explain the breakeven point: "For tasks under 10 minutes, manual may be faster. For tasks over 30 minutes, AI + verification is almost always faster."

## Requirements *(mandatory)*

### Content Requirements

- **CR-001**: Chapter MUST open by bridging from Chapter 4 — "Chapter 4 taught you to write acceptance criteria — what 'done' looks like. This chapter teaches you HOW to verify that AI actually met those criteria. Specification without verification is a wish. Specification WITH verification is professional practice."
- **CR-002**: Chapter MUST establish the "You Already Do This" connection with a comparison table:

  | Accounting Verification | What You Check | AI Equivalent |
  |---|---|---|
  | Bank Reconciliation | Ledger matches bank statement | AI output matches source data |
  | Trial Balance | Debits equal credits | AI calculations are mathematically correct |
  | Audit Procedures | Evidence supports assertions | AI citations are real and accurate |
  | Tax Return Review | Rates and sections are current | AI uses current regulations, not outdated ones |
  | Financial Statement Review | Disclosures comply with standards | AI output follows applicable IFRS/IAS |

- **CR-003**: Chapter MUST include an "AI Hallucination Horror Stories" section with 3-4 realistic accounting examples showing AI errors:
  - AI cites "IAS 42" (doesn't exist) with complete confidence
  - AI applies last year's tax rates instead of current ones
  - AI calculates compound interest incorrectly but presents the answer confidently
  - AI gives tax advice based on a different jurisdiction's rules
  - Each example MUST show: what AI said, why it looks convincing, how to catch it, and what the real answer is
- **CR-004**: Chapter MUST explain the "How AI Errors Differ from Human Errors" concept:
  - Human junior: makes typos, forgets steps, asks when unsure → errors are random and usually small
  - AI: fabricates with confidence, applies outdated rules consistently, fails at judgment calls, never says "I don't know" → errors are systematic and can be large
  - Key message: "You can't verify AI the same way you review a junior's work. AI errors require different detection methods."
- **CR-005**: Chapter MUST present the expanded "Accountant's AI Verification Checklist" (building on Ch2's introduction) as a formal 7-point framework:
  1. **Citation Check**: Is every standard/law reference real? (Look it up)
  2. **Currency Check**: Are regulations and rates from the current period? (Check dates)
  3. **Math Check**: Are all calculations correct? (Recalculate key figures)
  4. **Completeness Check**: Are all required elements present? (Compare to your spec's acceptance criteria from Ch4)
  5. **Consistency Check**: Does the output contradict itself or other known facts? (Cross-reference)
  6. **Judgment Check**: Does the output require professional judgment that AI cannot provide? (Flag for human decision)
  7. **Sign-Off Test**: Would you put your name on this? (The final professional gate)
- **CR-006**: Chapter MUST teach the "Golden Dataset" concept from the Agent Factory thesis in accounting terms:
  - A Golden Dataset = a set of tasks with KNOWN correct answers that you use to test AI accuracy
  - Accounting analogy: "It's like the sample transactions your firm uses to train new juniors — you know the correct classification, so you can immediately see if the junior (or AI) gets it right."
  - Example: Create 20 transactions with known correct classifications. Run them through AI. Count how many AI gets right. This gives you a measurable accuracy rate for that specific task.
  - Teach readers to build their own Golden Datasets for their practice areas
- **CR-007**: Chapter MUST teach the "Verify-Then-Trust" progression:
  - **Phase 1 — Full Verification**: Check everything AI produces (weeks 1-4 of AI usage)
  - **Phase 2 — Spot Checking**: Verify a sample of outputs once you know AI's accuracy rate (months 2-3)
  - **Phase 3 — Exception-Based Review**: Only review items AI flags as uncertain or unusual (month 4+)
  - Emphasize: you NEVER reach "zero verification" — even Phase 3 requires professional oversight
- **CR-008**: Chapter MUST include a "Verification Template" — a reusable document for any AI-verified accounting task:
  ```
  AI OUTPUT VERIFICATION RECORD
  Task: [What AI was asked to produce]
  Spec Reference: [Link to the AI Task Specification from Ch4]
  Date Verified: [Date]
  Verified By: [Your name]

  CHECKLIST:
  □ Citations verified (list sources checked)
  □ Rates/regulations current (period confirmed)
  □ Key calculations rechecked (list figures verified)
  □ All spec requirements met (reference acceptance criteria)
  □ No internal contradictions found
  □ Professional judgment items flagged
  □ Sign-off: I would put my name on this

  ISSUES FOUND: [List any errors, corrections made]
  RESULT: □ Approved □ Returned to AI for revision □ Rejected
  ```
- **CR-009**: Chapter MUST include at least 2 hands-on exercises:
  - Exercise 1: Spot the Errors — provide 5 AI-generated accounting outputs (tax computation, standard explanation, journal entries, disclosure note, audit procedure). 2-3 contain deliberate errors. Reader must apply the 7-point checklist to identify all errors.
  - Exercise 2: Build Your Golden Dataset — create 10-15 tasks with known correct answers for the reader's practice area (e.g., 15 transactions to classify, 10 tax scenarios with known rates). Test AI against the dataset and calculate accuracy rate.
- **CR-010**: Chapter MUST include a Roman Urdu glossary of 5-10 key terms (e.g., Verification = "Tasdeeq", Hallucination = "AI Ki Ghalat Fehmi / Khud-Sakhta Jawab", Golden Dataset = "Peemaaishi Misaalein", Reconciliation = "Mutaabikat", Sign-Off = "Dastakhat / Manzoori").
- **CR-011**: Chapter MUST NOT contain any code, automated testing frameworks, or programming concepts. All verification is manual, professional, and done through AI chat interfaces or standard accounting tools (calculators, regulation lookups).
- **CR-012**: Chapter MUST follow the book's writing style: second person ("you"), short paragraphs (3-4 sentences max), tables and bullet points over long prose, accounting-specific action verbs.
- **CR-013**: Chapter MUST position verification as the bridge between Chapters 1-4 (individual AI skills) and Chapters 6-15 (AI systems and agents) — "Now that you can prompt, design context, write specs, and verify output, you have the complete toolkit to supervise AI. The rest of this book shows you what AI systems you'll be supervising."

### Key Entities

- **AI Hallucination**: When AI generates information that sounds correct but is fabricated — citing non-existent standards, inventing tax rules, or producing plausible but wrong calculations. The most dangerous AI failure mode for accountants because it's hard to detect without deliberate verification.
- **Golden Dataset**: A collection of tasks with known correct answers used to measure AI accuracy for a specific task type. Analogous to sample transactions used to train new staff — you know the right answer, so you can immediately score performance.
- **AI Verification Checklist**: The 7-point systematic framework for verifying any AI-generated accounting output: Citation, Currency, Math, Completeness, Consistency, Judgment, Sign-Off. Introduced in Ch2 (5 points), expanded here to the full professional framework.
- **Verification Record**: A formal document recording what was verified, by whom, what issues were found, and whether the output was approved. Analogous to the review sign-off on audit working papers.
- **Verify-Then-Trust Progression**: The 3-phase journey from full verification (check everything) to spot checking to exception-based review. Represents the professional trust-building process with AI as a new team member.
- **Professional Judgment Gap**: Tasks or decisions that require human professional judgment and cannot be delegated to AI — materiality assessments, going concern opinions, fraud risk evaluation. AI can gather data and suggest options, but the accountant must decide.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: After completing the "Spot the Errors" exercise, a reader can identify at least 80% of deliberate errors in AI-generated accounting outputs using the 7-point checklist.
- **SC-002**: A reader can build a Golden Dataset of at least 10 items for their practice area within 30 minutes and use it to calculate AI's accuracy rate for that specific task.
- **SC-003**: A reader can articulate at least 3 differences between how AI errors differ from human junior errors — and explain how their verification approach adapts accordingly.
- **SC-004**: A reader can complete a Verification Record for any AI-generated output within 10 minutes, using the template provided.
- **SC-005**: All exercises can be completed with a free ChatGPT or Claude account plus a calculator or spreadsheet, in under 20 minutes each.
- **SC-006**: The chapter passes the Constitution's litmus test: "Would a practicing accountant in Pakistan understand this without Googling?" — no testing frameworks or programming jargon present.
- **SC-007**: After reading the chapter, a reader rates their confidence in using AI for professional work as HIGHER (not lower) — because they now have a systematic way to ensure quality, rather than relying on blind trust.

## Chapter Outline *(reference)*

1. **Bridge from Chapter 4** — From Acceptance Criteria to Systematic Verification
2. **You Already Do This** — Reconciliation, Audit Procedures, Trial Balance = Testing (comparison table)
3. **AI Hallucination Horror Stories** — When AI Gets Accounting Wrong (3-4 realistic examples)
4. **How AI Errors Differ from Human Errors** — Why You Can't Verify AI Like a Junior
5. **The Accountant's AI Verification Checklist** — The Full 7-Point Framework
6. **The Golden Dataset** — Your AI Accuracy Scorecard (build and measure)
7. **The Verify-Then-Trust Progression** — From Full Check to Exception-Based Review
8. **The Verification Record Template** — Documenting Your Quality Assurance
9. **The Professional Judgment Gap** — What AI Cannot Decide for You
10. **Hands-On Exercises** — 2 Exercises (Spot the Errors + Build Your Golden Dataset)
11. **Bridge to Part 2** — "You Now Have the Complete Toolkit — Next: What AI Systems Will You Supervise?"
12. **Key Takeaways** — Chapter Summary
13. **Roman Urdu Glossary** — Key Terms in Your Language

## Assumptions

- Readers have completed Chapters 1-4, can write prompts, design context, and write specs with acceptance criteria.
- Readers understand that professional liability remains with the accountant, not with AI — this is foundational professional ethics, not new information.
- Readers have access to verification sources: FBR website, IFRS Foundation website, ICAP resources, or their firm's reference library.
- "Horror stories" are realistic but fictional — constructed to illustrate common AI failure modes, not taken from real incidents (to avoid legal issues).
- The Golden Dataset concept is adapted from the Agent Factory thesis but presented without any reference to automated testing, CI/CD, or evaluation frameworks.
