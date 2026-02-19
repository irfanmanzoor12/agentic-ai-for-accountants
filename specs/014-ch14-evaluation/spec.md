# Feature Specification: Chapter 14 — Evaluation: Is AI Output Audit-Ready?

**Feature Branch**: `014-ch14-evaluation`
**Created**: 2026-02-18
**Status**: Draft
**Input**: User description: "Chapter 14 of 'Agentic AI for Accounting Professionals.' The quality assurance chapter — bringing together verification (Ch5), guardrails (Ch10), and human-in-the-loop (Ch11) into a systematic evaluation framework. Teaches how to formally assess whether AI output meets professional standards: accuracy, compliance, completeness, and professional judgment. Uses the 'Quality Control Review' analogy — every firm has QC procedures before signing off on deliverables. AI output needs the same rigorous QC. Introduces the Golden Dataset concept: pre-verified test cases that you can run AI against to measure accuracy before trusting it with real client work."

## User Scenarios & Testing *(mandatory)*

<!--
  Evaluation is the capstone of the quality assurance thread that runs
  through the entire book: Verification (Ch5) → Guardrails (Ch10) →
  Human-in-the-Loop (Ch11) → Evaluation (Ch14).
  This chapter systematizes everything into a repeatable QC framework.
-->

### Reader Journey 1 — The Quality Controller: "How Do I Know AI Output Is Good Enough?" (Priority: P1)

An accountant who uses AI regularly and gets useful results — but isn't sure HOW good the results are. Is AI 90% accurate? 99%? Is that good enough for professional work? This reader needs a systematic way to measure AI output quality — not just spot-checking, but a formal evaluation process they can document and defend.

**Why this priority**: "Good enough" is not a professional standard. Accountants need measurable quality metrics. This reader learns to evaluate AI the same way they'd evaluate a new team member's work — with documented standards, test cases, and performance tracking.

**Independent Test**: After reading the chapter, can the reader define specific quality criteria for one AI-assisted task (e.g., "transaction classification must be 98%+ accurate, with all misclassifications flagged") and describe how they would measure performance against that criteria? If yes, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader who informally checks AI output, **When** they read the "QC Review for AI" section, **Then** they understand that professional AI use requires the same formal quality control as any other professional deliverable — documented criteria, systematic testing, and performance tracking.
2. **Given** a reader who wants to know AI accuracy for transaction classification, **When** they build a Golden Dataset of 50 pre-classified transactions, **Then** they can measure AI's accuracy objectively: "AI correctly classified 47 of 50 transactions = 94% accuracy."
3. **Given** a reader completing the chapter, **When** they present AI evaluation results to a partner or regulator, **Then** they have documented evidence: what was tested, how it was tested, what the results were, and what thresholds were applied.

---

### Reader Journey 2 — The Trust Builder: "How Do I Convince My Partners That AI Output Is Reliable?" (Priority: P2)

A mid-level accountant who trusts AI but needs to convince senior partners or clients that AI-assisted work meets professional standards. They need an evaluation framework that produces EVIDENCE — not just "I checked it and it looked right," but documented testing with measurable results. This reader uses evaluation as a tool for organizational buy-in.

**Why this priority**: AI adoption at the firm level requires leadership buy-in. Partners want evidence, not enthusiasm. This reader produces the evidence — formal evaluation reports that demonstrate AI quality in terms partners understand.

**Independent Test**: After reading the chapter, can the reader create an "AI Evaluation Report" for one workflow that a skeptical partner could review — with test methodology, results, accuracy metrics, and a recommendation? If yes, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader who needs to justify AI use to partners, **When** they create a Golden Dataset and run an evaluation, **Then** they produce a one-page evaluation report showing: task, test method, sample size, accuracy rate, error types, and recommendation.
2. **Given** an evaluation report, **When** a partner reviews it, **Then** they have enough information to make an informed decision about AI use — based on data, not opinion.

---

### Reader Journey 3 — The Continuous Improver: "How Do I Track AI Performance Over Time?" (Priority: P3)

A practice manager who wants to track AI quality trends — is AI getting better as we refine prompts and memory? Are there patterns in errors? Where should we invest in improving AI workflows? This reader builds an ongoing evaluation practice, not just a one-time test.

**Why this priority**: One-time evaluation tells you where you are. Ongoing evaluation tells you where you're going. This reader ensures that AI quality is monitored, trends are tracked, and improvements are data-driven.

**Independent Test**: After reading the chapter, can the reader design a quarterly evaluation cycle for their most important AI workflow — including what to test, how to measure, and how to act on results? If yes, the chapter succeeds.

**Acceptance Scenarios**:

1. **Given** a reader who evaluates AI quarterly, **When** they compare Q1 vs. Q2 results, **Then** they can identify: accuracy improved from 94% to 97% after prompt refinement; common error type (misclassifying consulting fees) was resolved by adding examples to memory.
2. **Given** a reader completing the chapter, **When** they set up an evaluation calendar, **Then** they have a sustainable process for tracking AI quality over time — like the firm's existing QC review cycle.

---

### Edge Cases

- What if the reader doesn't have enough data to build a meaningful Golden Dataset? The chapter MUST explain: start small. Even 20-30 test cases are valuable for initial evaluation. Grow the dataset over time. Quality of test cases matters more than quantity — each test case should cover a distinct scenario.
- What if AI scores perfectly on the Golden Dataset but still makes errors in real work? The chapter MUST explain the difference between controlled testing and real-world performance. The Golden Dataset covers KNOWN scenarios. New transaction types, unusual clients, and edge cases will still challenge AI. Continuous evaluation catches these gaps.
- What if the firm can't afford dedicated evaluation time? The chapter MUST explain that evaluation doesn't need to be separate from work. Turn routine QC reviews into evaluation opportunities — when you check AI's work anyway, document the results. Over time, you build evaluation data as a byproduct of normal quality control.
- What if different evaluators give different judgments on the same AI output? The chapter MUST address inter-rater consistency — use clear, objective criteria (numerical accuracy is binary; professional judgment calls need a rubric). Where judgment is required, have two reviewers evaluate independently, then reconcile.

## Requirements *(mandatory)*

### Content Requirements

- **CR-001**: Chapter MUST open by connecting to previous quality chapters — "You've learned to verify AI output (Ch5), set guardrails for AI behavior (Ch10), and define your supervision level (Ch11). This chapter brings it all together into a systematic evaluation framework. Think of it as your firm's Quality Control review — but for AI. Before you trust AI with real client work, you need to TEST it formally, MEASURE its accuracy, and DOCUMENT the results. This is how professionals evaluate any tool — with evidence, not gut feeling."

- **CR-002**: Chapter MUST include the "Quality Control Review" analogy:
  - Every accounting firm has QC procedures: engagement quality reviews, cold file reviews, peer reviews
  - These procedures check: Is the work accurate? Is it complete? Does it comply with standards? Did professional judgment get applied where needed?
  - AI evaluation uses the SAME framework: Is AI's work accurate? Complete? Compliant? Did it flag what needs human judgment?
  - The difference: AI can be tested BEFORE it does real work, using test cases — something you can't easily do with a new employee

- **CR-003**: Chapter MUST introduce the Golden Dataset concept with a clear accounting example:
  - **What it is:** A set of pre-verified test cases with KNOWN correct answers
  - **Example:** 50 transactions that you have ALREADY correctly classified:
    - Transaction: "Office furniture PKR 250,000" → Correct classification: Fixed Asset - Furniture & Fixtures
    - Transaction: "Monthly internet bill PKR 5,000" → Correct classification: Operating Expense - Utilities
    - Transaction: "Sale of old vehicle PKR 800,000" → Correct classification: Gain/Loss on Disposal
    - ... (50 total, covering all common categories + edge cases)
  - **How you use it:** Run all 50 through AI. Compare AI's classifications to YOUR pre-verified answers. Count: How many did AI get right?
  - **The result:** "AI correctly classified 47 of 50 = 94%. The 3 errors were all in the 'Gain/Loss on Disposal' category."
  - **The decision:** Is 94% good enough for this task? What's your firm's threshold? Should AI handle disposals, or should those always route to human?

- **CR-004**: Chapter MUST teach four evaluation dimensions with accounting-specific criteria:

  **Dimension 1 — Accuracy: Is the Answer Correct?**
  - Numerical accuracy: Do the calculations add up?
  - Classification accuracy: Are items in the right categories?
  - Reference accuracy: Are cited standards/laws correct and current?
  - How to measure: Compare AI output to known correct answers (Golden Dataset)

  **Dimension 2 — Completeness: Is Anything Missing?**
  - Are all required items included?
  - Are all steps of the procedure performed?
  - Are all applicable standards considered?
  - How to measure: Checklist comparison — does AI output cover everything the procedure requires?

  **Dimension 3 — Compliance: Does It Follow the Rules?**
  - Does output comply with applicable standards (IFRS, FBR, ICAP)?
  - Does output follow firm policies and templates?
  - Are required disclosures included?
  - How to measure: Compliance checklist — every requirement checked against output

  **Dimension 4 — Professional Judgment: Does It Know What It Doesn't Know?**
  - Does AI flag areas requiring professional judgment?
  - Does AI avoid making judgment calls it shouldn't?
  - Does AI escalate appropriately (Connection to Ch10 escalation guardrails)?
  - How to measure: Scenario-based testing — give AI situations requiring judgment and check if it flags them rather than deciding

- **CR-005**: Chapter MUST include an "AI Evaluation Scorecard" template:
  ```
  AI EVALUATION SCORECARD
  Workflow: [e.g., "Transaction Classification"]
  Evaluator: [Name]
  Date: [Date]
  AI Tool: [ChatGPT / Claude / Other]

  TEST DETAILS:
  Golden Dataset size: [number of test cases]
  Test cases cover: [list of categories/scenarios]
  Date of test: [Date]

  RESULTS:
  Dimension 1 — Accuracy:
    Correct: [X] of [Y] = [%]
    Error categories: [list types of errors]
    Threshold: [firm's minimum — e.g., 95%]
    PASS / FAIL

  Dimension 2 — Completeness:
    Items complete: [X] of [Y] = [%]
    Missing items: [list what was missing]
    Threshold: [e.g., 100% — nothing should be missing]
    PASS / FAIL

  Dimension 3 — Compliance:
    Standards cited correctly: [X] of [Y] = [%]
    Non-compliant items: [list]
    Threshold: [e.g., 100% — no compliance failures]
    PASS / FAIL

  Dimension 4 — Professional Judgment:
    Correctly flagged for human: [X] of [Y] = [%]
    Inappropriately decided (should have flagged): [list]
    Threshold: [e.g., 100% — all judgment calls must be flagged]
    PASS / FAIL

  OVERALL ASSESSMENT:
  [Ready for Shadow Mode / Ready for Supervised Mode / Not Ready — needs improvement]

  RECOMMENDATIONS:
  - [Specific improvements needed]
  - [Next evaluation date]
  ```

- **CR-006**: Chapter MUST connect evaluation to the Trust Ladder from Ch11:
  - Evaluation results determine which mode a workflow is ready for:
    - Below threshold → Not ready for any AI assistance
    - Meets basic threshold → Ready for Shadow Mode (human reviews everything)
    - Exceeds threshold consistently → Ready for Supervised Mode (exception-based review)
    - Perfect scores consistently → Candidate for Autonomous Mode (spot-check)
  - Every step UP the Trust Ladder requires a passing evaluation
  - Trust Regression requires re-evaluation at the lower level

- **CR-007**: Chapter MUST include guidance on building Golden Datasets:
  - Start with your firm's most common, most time-consuming task
  - Create 30-50 test cases covering: typical scenarios (70%), edge cases (20%), tricky scenarios (10%)
  - Each test case needs: the input (what you give AI), the correct answer (pre-verified by a qualified professional), and the evaluation criteria (how to judge AI's response)
  - Golden Datasets should be reviewed and updated annually — or whenever standards/regulations change
  - Keep Golden Datasets SEPARATE from AI memory/RAG — AI should not "memorize" the test cases

- **CR-008**: Chapter MUST include at least 2 hands-on exercises:
  - Exercise 1: Build a Mini Golden Dataset — pick one routine task (e.g., expense classification). Create 20 test cases with known correct answers. Run them through AI. Score the results using the four dimensions. Record the evaluation on the scorecard.
  - Exercise 2: Design Your Evaluation Calendar — for your firm's 3 most important AI workflows, decide: How often should each be evaluated? What Golden Dataset size is needed? Who performs the evaluation? What are the accuracy thresholds? When do results trigger action?

- **CR-009**: Chapter MUST include a Roman Urdu glossary (e.g., Evaluation = "Jaanch / Jaayza", Golden Dataset = "Soney Ka Miaar / Pehle Se Tayashodah Test", Accuracy = "Durusti / Sahi Hona", Completeness = "Mukammal Hona", Compliance = "Qawaaneen Ki Pabandi", Scorecard = "Nateeja Card", Threshold = "Had / Kamtareen Miaar", Test Case = "Imtihani Sawal").

- **CR-010**: Chapter MUST NOT contain any code, testing frameworks, statistical formulas, or technical evaluation methodology. All evaluation concepts use quality control and QC review vocabulary.

- **CR-011**: Chapter MUST follow the book's writing style: second person ("you"), short paragraphs, tables and bullets, accounting-specific action verbs.

### Key Entities

- **Evaluation**: The systematic process of assessing AI output quality against defined professional standards — the QC review for AI. Produces documented, measurable results.
- **Golden Dataset**: A set of pre-verified test cases with known correct answers, used to objectively measure AI accuracy. The benchmark against which AI performance is judged.
- **AI Evaluation Scorecard**: A structured document recording evaluation results across four dimensions (accuracy, completeness, compliance, professional judgment) with pass/fail thresholds.
- **Accuracy**: Whether AI's answers are factually and numerically correct — calculations add up, classifications are right, references are valid.
- **Completeness**: Whether AI's output includes everything required — all steps performed, all items covered, no missing elements.
- **Compliance**: Whether AI's output follows applicable standards, regulations, and firm policies — correct citations, proper disclosures, rule adherence.
- **Professional Judgment Flags**: Whether AI correctly identifies situations requiring human judgment rather than making autonomous decisions — the most important evaluation dimension for accounting.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: After reading the chapter, a reader can explain why formal evaluation matters — "gut feeling" is not a professional standard for assessing any tool, including AI.
- **SC-002**: A reader can build a Golden Dataset of at least 20 test cases for one routine accounting task, with each test case having a known correct answer.
- **SC-003**: A reader can score AI output across all four evaluation dimensions (accuracy, completeness, compliance, professional judgment) using the AI Evaluation Scorecard.
- **SC-004**: A reader can connect evaluation results to the Trust Ladder — explaining which evaluation scores justify Shadow, Supervised, or Autonomous mode.
- **SC-005**: All exercises can be completed with pen and paper + a basic AI chat tool — no testing frameworks or statistical software required.
- **SC-006**: The chapter passes the Constitution's litmus test: "Would a practicing accountant in Pakistan understand this without Googling?"
- **SC-007**: A reader can design an evaluation calendar for their firm's AI workflows — specifying frequency, dataset size, responsible person, and action thresholds.

## Chapter Outline *(reference)*

1. **Bridge from Previous Chapters** — From Verification to Systematic Evaluation
2. **The Quality Control Analogy** — QC Review for AI (same framework, new tool)
3. **The Golden Dataset** — Your Pre-Verified Test Bank (what it is, how to build it)
4. **Four Evaluation Dimensions**
   - 4a. Accuracy — Is the Answer Correct?
   - 4b. Completeness — Is Anything Missing?
   - 4c. Compliance — Does It Follow the Rules?
   - 4d. Professional Judgment — Does It Know What It Doesn't Know?
5. **The AI Evaluation Scorecard** — Document Your Results
6. **Evaluation and the Trust Ladder** — Results Determine Autonomy Level (Connection to Ch11)
7. **Building Golden Datasets** — Practical Guide (size, coverage, maintenance)
8. **Hands-On Exercises** — 2 Exercises (Mini Golden Dataset + Evaluation Calendar)
9. **What's Next** — The Agent Factory: Your Future Role (Ch15 preview)
10. **Key Takeaways** — Chapter Summary
11. **Roman Urdu Glossary** — Key Terms in Your Language

## Assumptions

- Readers have completed Chapters 1-13 and understand verification (Ch5), guardrails (Ch10), human-in-the-loop (Ch11), memory (Ch12), and RAG (Ch13).
- Readers are familiar with quality control procedures in their professional practice — engagement reviews, peer reviews, cold file reviews.
- The four evaluation dimensions (accuracy, completeness, compliance, professional judgment) cover the essential quality aspects that accounting professionals assess in any deliverable.
- Golden Datasets can be built from existing verified work — past classifications, computations, and filings that have already been reviewed and confirmed correct.
- Evaluation is ongoing, not one-time. AI accuracy can change as regulations change, client types evolve, or AI tools update. The evaluation calendar ensures continuous quality monitoring.
- The AI Evaluation Scorecard is designed to be simple enough for pen-and-paper use while producing results rigorous enough to satisfy a partner or regulator.
