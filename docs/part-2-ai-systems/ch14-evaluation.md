---
id: ch14-evaluation
title: "Chapter 14: Evaluation — Is AI Output Audit-Ready?"
sidebar_label: "Ch14: Evaluation"
sidebar_position: 14
---

# Chapter 14: Evaluation — Is AI Output Audit-Ready?

> *"Good enough is not a professional standard — for your work, or for your tools."*

Chapter 5 taught you to verify AI output — check the citation, confirm the calculation, apply the Verification Checklist before signing off. Chapter 10 taught you to set guardrails — defining what AI can and cannot do. Chapter 11 taught you to calibrate supervision — Shadow, Supervised, and Autonomous modes matched to the evidence of AI's competence.

All of that is essential. But there is a gap. Individual verification catches errors after the fact. Guardrails prevent specific violations. Supervision modes manage ongoing oversight. None of them answer the foundational question a senior partner asks when AI-assisted work crosses their desk for the first time:

*"How do I know this is good enough?"*

This chapter answers that question systematically. It brings together everything you have learned into a formal evaluation framework — the same Quality Control review your firm applies to all professional deliverables, now applied to AI. You will learn to test AI before it touches real client work, measure its performance with documented evidence, and use those results to make objective decisions about how much to trust it.

---

## You Already Do QC Reviews

Every accounting firm has quality control procedures. Before a financial statement leaves the office, it goes through a review: Is the work accurate? Is it complete? Does it comply with the applicable standards? Did professional judgment get applied at the right points? Cold file reviews, engagement quality reviews, peer reviews — these are all formal mechanisms for confirming that professional output meets the firm's standards.

AI evaluation uses exactly the same framework. The four questions are identical:
- Is AI's work **accurate**?
- Is AI's work **complete**?
- Does AI's work **comply** with applicable standards and policies?
- Does AI correctly **flag** situations requiring professional judgment?

The difference — and it is a significant advantage — is timing. You cannot test a new employee's work before they do real work. You can only review it after. With AI, you can test performance before it handles a single real client transaction. A Golden Dataset of pre-verified test cases lets you measure AI accuracy in advance, under controlled conditions, with no client risk. You would not give a new team member unsupervised access to client files before some form of competence assessment. Do not give AI that access either.

---

## The Golden Dataset

The Golden Dataset is the foundation of AI evaluation. It is a set of test cases you have already verified yourself — inputs with known correct outputs — that you run through AI to measure its accuracy objectively.

"I think AI is good at transaction classification" is an opinion. "AI correctly classified 47 of 50 test transactions = 94% accuracy, with 3 errors all in the Disposal category" is evidence. The Golden Dataset is what converts the opinion into the evidence.

**What a Golden Dataset looks like — transaction classification example:**

| # | Transaction (Input) | Correct Classification (Your Answer) | AI's Answer | Match? |
|---|---|---|---|---|
| 1 | Office furniture PKR 250,000 | Fixed Asset — Furniture & Fixtures | Fixed Asset — Furniture & Fixtures | ✓ |
| 2 | Monthly internet bill PKR 5,000 | Operating Expense — Utilities | Operating Expense — Utilities | ✓ |
| 3 | Sale of old delivery vehicle PKR 800,000 | Gain/Loss on Disposal of Asset | Operating Revenue | ✗ |
| 4 | Annual software subscription PKR 180,000 | Prepaid Expense — Software | Prepaid Expense — Software | ✓ |
| 5 | Advance rent for office PKR 600,000 | Prepaid Expense — Rent | Prepaid Expense — Rent | ✓ |
| ... | ... | ... | ... | ... |
| 50 | Legal retainer fee PKR 150,000/month | Professional Fees — Legal | Professional Fees — Legal | ✓ |

**Running the evaluation:** Enter each of the 50 transactions into AI. Record AI's answer. Check it against your pre-verified correct answer. Count the matches.

**Reading the result:** AI correctly classified 47 of 50 = **94% accuracy**. All 3 errors occurred in the Disposal category — AI classified disposal proceeds as operating revenue in every case.

**Making the decision:** Is 94% good enough for your transaction classification workflow? That depends on your firm's threshold, the risk level of misclassified disposals, and how your supervision mode handles exceptions. You set the threshold. The Golden Dataset gives you the data to evaluate against it.

The critical rule: **keep your Golden Dataset completely separate from AI's memory and RAG library.** If AI has seen your test cases before — through memory or document library — its score reflects memorisation, not genuine capability. Test cases must be unfamiliar to AI to produce a meaningful result.

---

## Four Evaluation Dimensions

Every AI evaluation covers four dimensions. Together they answer the complete quality question — not just "is AI correct?" but "is AI's output professionally suitable?"

---

### Dimension 1 — Accuracy: Is the Answer Correct?

Accuracy is the most fundamental dimension. It measures whether AI's answers are factually and numerically right.

**What to check:**
- *Numerical accuracy*: Do calculations add up? Does the depreciation computation use the right rate, the right base, and produce the right figure? Is the tax computation internally consistent?
- *Classification accuracy*: Are items in the correct categories? Does the Golden Dataset test reveal systematic misclassification in any category?
- *Reference accuracy*: When AI cites a standard or regulation, is the citation real and does the paragraph say what AI claims it says?

**How to measure:** The Golden Dataset is your primary tool. Run a representative set of known-correct test cases through AI. Count correct answers, note which categories produce errors, and calculate an accuracy percentage.

**What "passing" looks like:** Define your firm's accuracy threshold before running the test — not after. A threshold set after seeing results is not a standard; it is rationalisation. For classification tasks, 95%+ is a reasonable minimum for Supervised Mode consideration. For tax computations, even a single arithmetic error in a computation is a fail on that test case.

---

### Dimension 2 — Completeness: Is Anything Missing?

An accurate but incomplete output is still a professional failure. An audit planning memo that correctly identifies three risk areas but omits inventory valuation risk for a manufacturing client is inaccurate in its incompleteness — it gives a false picture of what was considered.

**What to check:**
- Are all required items included? For a tax computation, does it cover every head of income applicable to this client?
- Are all steps of the procedure performed? For a bank reconciliation, are all the standard steps completed — matching, timing differences, adjustments, final balance confirmation?
- Are all applicable standards considered? For an IFRS disclosure, does the note cover all required elements?

**How to measure:** Use a completeness checklist — a list of everything the output should contain. Check AI's output against the list item by item. A missing item is a completeness failure regardless of whether everything that is present is accurate.

**What "passing" looks like:** For most professional accounting output, completeness threshold is 100%. A financial statement with a missing disclosure is not "98% complete" — it is non-compliant. Set completeness thresholds accordingly: for structured deliverables, nothing should be missing.

---

### Dimension 3 — Compliance: Does It Follow the Rules?

AI can produce accurate and complete output that nevertheless violates a professional standard, a regulatory requirement, or a firm policy. Compliance evaluation checks whether the output follows the rules that govern the work.

**What to check:**
- *Standards compliance*: Does output conform to the applicable IFRS or IAS standard? Are disclosures worded per the standard's requirements? Are estimates and assumptions disclosed?
- *Regulatory compliance*: Does a tax computation apply the current Finance Act rates? Does it follow the Income Tax Ordinance provisions relevant to this client's situation?
- *Firm policy compliance*: Does output follow the firm's working paper format? Does it apply the firm's materiality thresholds? Does it use the approved engagement letter language?

**How to measure:** A compliance checklist specific to the work type. For an audit working paper, the checklist covers: objective stated? procedure described? evidence referenced? finding documented? conclusion reached? For a tax computation: current year rates applied? correct ordinance sections cited? applicable deductions and exemptions checked?

**What "passing" looks like:** Like completeness, compliance is not a sliding scale for professional work. A working paper that meets 90% of compliance requirements contains 10% of non-compliance — which may be material. Threshold: 100%. Every compliance requirement must be met. Non-compliant items are not "acceptable at the margin"; they are failures that require correction before the output can proceed.

---

### Dimension 4 — Professional Judgment: Does AI Know What It Does Not Know?

This is the most important evaluation dimension for accounting work, and the hardest to fake. Professional judgment evaluation does not measure whether AI made the right call — it measures whether AI correctly recognised that a judgment call was required and flagged it for human decision rather than deciding autonomously.

**What to check:**
- Does AI flag ambiguous situations rather than classifying them confidently?
- Does AI note when a regulation requires professional interpretation?
- Does AI escalate unusual transactions rather than processing them as routine?
- Does AI avoid making materiality judgments, going concern assessments, or audit opinion calls without flagging these as requiring human professional decision?

**How to measure:** Scenario testing — deliberately provide AI with situations that require professional judgment. Examples:
- A transaction where classification is genuinely ambiguous (maintenance vs. capital expenditure, borderline case)
- A tax provision with two competing interpretations in the Ordinance
- A contingent liability where management's estimate seems unreasonably optimistic
- A going concern situation where revenue has fallen 40% and a major loan is due for renewal

In each case, the correct AI behaviour is to identify the judgment requirement and escalate — not to classify, decide, or opine. Score AI on: did it flag the judgment requirement? Did it explain why this requires professional assessment? Did it avoid making the call?

**What "passing" looks like:** 100% of judgment-required scenarios must be correctly identified as requiring human input. An AI that confidently classifies a borderline maintenance/capital item, or drafts a going concern note without flagging it as a judgment area, has failed this dimension — regardless of whether its specific answer happened to be defensible.

---

## The AI Evaluation Scorecard

Complete this scorecard after every formal evaluation. It is your documented evidence — the professional record of what was tested, how it performed, and what the results mean for how the workflow should be used.

---

**AI EVALUATION SCORECARD**

```
AI EVALUATION SCORECARD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

WORKFLOW DETAILS
Workflow:         [e.g., "Monthly Transaction Classification — Standard Expenses"]
Evaluator:        [Name and designation]
Date:             [Date of evaluation]
AI tool used:     [ChatGPT GPT-4o / Claude Sonnet / Other]
Prompt version:   [Version or date of prompt template used]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GOLDEN DATASET
Dataset size:     [e.g., 50 test cases]
Coverage:         [e.g., "30 routine, 12 edge cases, 8 tricky scenarios"]
Date verified:    [When correct answers were last confirmed]
Separate from AI: [Confirmed: dataset NOT in AI memory or RAG library]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DIMENSION 1 — ACCURACY
Correct answers:  [X] of [Y] = [%]
Error categories: [List categories with errors — e.g., "3/3 errors in Disposal"]
Firm threshold:   [e.g., 95%]
Result:           PASS / FAIL

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DIMENSION 2 — COMPLETENESS
Items complete:   [X] of [Y] = [%]
Missing items:    [List what was omitted in failed cases]
Firm threshold:   [e.g., 100%]
Result:           PASS / FAIL

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DIMENSION 3 — COMPLIANCE
Standards correct:[X] of [Y] citations = [%]
Non-compliant:    [List specific compliance failures]
Firm threshold:   [e.g., 100%]
Result:           PASS / FAIL

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DIMENSION 4 — PROFESSIONAL JUDGMENT
Correctly flagged: [X] of [Y] judgment scenarios = [%]
Not flagged:       [List scenarios AI decided instead of escalated]
Firm threshold:    [e.g., 100%]
Result:            PASS / FAIL

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OVERALL ASSESSMENT
All 4 dimensions PASS → Ready for: [Shadow / Supervised / Autonomous Mode — per Trust Ladder]
Any dimension FAIL → Status:       [Not ready — specific improvements required]

RECOMMENDATIONS:
1. [Specific action — e.g., "Add 3 Disposal examples to AI memory to fix systematic error"]
2. [Next evaluation date]
3. [Prompt improvement needed]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Evaluator signature: _______________  Date: _______________
```

---

## Evaluation and the Trust Ladder

Evaluation results determine exactly where a workflow sits on the Trust Ladder from Chapter 11. The two frameworks are designed to work together.

| Evaluation Result | Trust Ladder Position |
|---|---|
| Any dimension FAIL | **Not ready** — do not use AI for this task until issues are resolved |
| All dimensions PASS at basic threshold (first evaluation) | **Shadow Mode** — AI works, human reviews everything and executes all actions |
| All dimensions PASS consistently across multiple evaluations | **Supervised Mode** — AI processes routine items, human reviews exceptions |
| All four dimensions consistently at maximum (multiple evaluations, no new errors) | **Autonomous Mode candidate** — spot-check review, human authorises finals |
| Any dimension drops below threshold (ongoing monitoring) | **Trust Regression** — move back one level, re-evaluate before re-promoting |

Every step up the Trust Ladder requires a passing evaluation — not just an informal sense that "AI has been doing well." When you document evaluation results in a Scorecard, you have the evidence to show a partner why you believe supervised autonomy is justified. When you keep evaluation records over time, you have the data to track AI's accuracy trend and make the promotion decision on evidence.

Trust Regression always requires a new evaluation. If AI's accuracy on the bank reconciliation drops below threshold after a banking system change, move back to Supervised Mode and run a new evaluation before promoting again. Do not re-promote on the assumption that the problem resolved itself.

---

## Building Good Golden Datasets

The quality of your Golden Dataset determines the quality of your evaluation. Thirty well-chosen test cases produce more insight than three hundred poorly chosen ones.

**Where to source test cases:** Your existing verified work is the best source. Use transactions you have already correctly classified, computations you have reviewed and confirmed, working papers you have signed off on. These have a built-in quality guarantee: you know the correct answer because you verified it yourself.

**Coverage distribution:** Aim for three categories of test cases:
- **Typical (70%):** The routine transactions, calculations, or procedures that AI handles most of the time. These test core competence on bread-and-butter work.
- **Edge cases (20%):** Scenarios that are less common but important — the first-time client type, the unusual transaction category, the borderline IFRS treatment. These test adaptability.
- **Tricky scenarios (10%):** Situations designed to expose systematic weaknesses — the Disposal category, the maintenance-vs-capital question, the transaction type that looks like something else. These test judgment and attention.

**Keeping datasets current:** A Golden Dataset built against last year's Finance Act rates will produce misleading results this year. Review and update your datasets:
- **Annually** for any dataset involving regulatory rates, thresholds, or tax rules
- **After any Finance Act** for tax-related classification or computation datasets
- **After any significant standard update** for IFRS or IAS-related evaluation datasets
- **Whenever you discover a new systematic error type** — add test cases specifically designed to catch that error in future evaluations

**One dataset per workflow:** Do not mix task types. Your transaction classification Golden Dataset should not include tax computation test cases. A mixed dataset produces a blended accuracy score that obscures where AI actually struggles.

---

## The Evaluation Calendar

One evaluation tells you where AI is today. Quarterly evaluations tell you whether AI is improving, stable, or declining over time.

Build an evaluation calendar for your firm's most important AI-assisted workflows. A simple structure:

| Workflow | Evaluation Frequency | Dataset Size | Responsible | Action Trigger |
|---|---|---|---|---|
| Transaction classification | Quarterly | 50 cases | Senior accountant | Accuracy drops below 95% → investigate prompt/memory |
| Bank reconciliation | Quarterly | 30 cases | In-charge accountant | Any completeness failure → back to Shadow Mode |
| Tax computation | Before each tax season | 20 cases | Tax manager | Any compliance failure → suspend use, update prompts |
| Audit working papers | Semi-annually | 25 cases | Audit manager | Any professional judgment failure → suspend use |
| Draft client report | Annually | 15 cases | Partner | Any dimension failure → return to Shadow Mode |

The calendar works as a firm management tool. It assigns ownership — someone is responsible for each evaluation, not "everyone" (which means no one). It sets action triggers — when results cross a threshold, the response is predetermined and does not require a committee decision.

Embed evaluation into existing QC cycles where possible. When you review AI-assisted work as part of normal quality control, document the results systematically. Over time, you accumulate evaluation data as a by-product of normal professional practice.

---

## Hands-On Exercises

### Exercise 1: Build a Mini Golden Dataset and Score AI

**Time:** 40 minutes

Choose the AI-assisted task you currently use most — or the one you are planning to start with. Transaction classification is ideal for a first Golden Dataset.

Build 20 test cases:
- 14 typical (routine transactions from your practice)
- 4 edge cases (less common transaction types)
- 2 tricky scenarios (transactions that look like something else)

For each test case, write the input exactly as you would give it to AI, and write the verified correct answer alongside.

Run all 20 through AI. Record AI's answer for each. Complete the AI Evaluation Scorecard — focusing on Accuracy and Professional Judgment for this exercise. What is AI's accuracy rate? Are errors clustered in one category? What does that tell you about where AI needs improvement?

---

### Exercise 2: Design Your Evaluation Calendar

**Time:** 25 minutes

List the three AI-assisted workflows your firm uses most (or intends to use first). For each, design the evaluation programme:

1. **How often should this workflow be evaluated?** Quarterly? Before each major filing season? After any significant regulatory change?
2. **What Golden Dataset size is needed?** A simple classification task: 30–50 cases. A complex computation: 15–20 carefully constructed cases.
3. **Who is responsible?** Name a specific role, not "the team."
4. **What accuracy threshold applies?** Set it now, before you see results, based on professional standards and the risk level of the task.
5. **What happens if AI fails?** Write the specific action: suspend use, return to Shadow Mode, update prompts, rebuild memory profile.

This exercise produces your firm's AI Evaluation Policy — one page, three workflows, complete accountability.

---

## Key Takeaways

1. **"I checked it and it seemed fine" is not a professional evaluation standard.** Formal evaluation uses documented test cases, defined thresholds, and recorded results — the same evidence-based approach your firm applies to all quality-sensitive work.

2. **The Golden Dataset turns opinion into evidence.** "AI is pretty good at classification" versus "AI correctly classified 94% of 50 test cases, with systematic errors in the Disposal category." The second statement tells you what to fix and how much to trust the result.

3. **Four dimensions cover the complete quality question.** Accuracy (is it right?), Completeness (is anything missing?), Compliance (does it follow the rules?), Professional Judgment (does it know when to stop?). All four, every time.

4. **Evaluation results drive Trust Ladder placement.** A passing first evaluation justifies Shadow Mode. Consistently passing evaluations justify Supervised Mode. Any failing dimension justifies a return to the prior level. Trust without evaluation is just hope.

5. **Evaluation is an ongoing practice, not a one-time test.** Standards change, regulations update, client types evolve. An AI workflow that passed evaluation in January may fail in July if the Finance Act changed in between. The evaluation calendar keeps quality monitoring current.

6. **Build evaluation into existing QC cycles.** The extra work of systematic evaluation is smaller than it appears. When you review AI-assisted work anyway — because that is your professional standard — documenting the result consistently produces evaluation data as a normal by-product of quality control.

> **Chapter 15 preview:** You have learned every component of the agentic AI system — from writing a prompt to orchestrating a team of agents, from setting guardrails to evaluating output quality. Chapter 15 brings it all together: what this transformation means for your career, your firm, and accounting as a profession — and the role you play in Pakistan's AI future.

---

## Roman Urdu Glossary

*(Key terms in the language of Pakistani accounting practice)*

| English Term | Roman Urdu | Usage in Practice |
|---|---|---|
| Evaluation | Jaanch / Jaayza | "AI ka jaayza lo pehle — phir client ka kaam karo" |
| Golden Dataset | Soney Ka Miaar / Test Ka Khazana | "50 test cases — sahi jawab pehle se pata hain" |
| Accuracy | Durusti / Sahi Hona | "94 fizdi durust — 3 disposal mein ghalat" |
| Completeness | Mukammal Hona | "Kuch missing hai toh 100% nahi — fail hai" |
| Compliance | Qawaaneen Ki Pabandi | "IFRS ka hawala sahi hai? FBR ka rate current hai?" |
| Scorecard | Nateeja Card | "Nateeja card bharo — partner ko dikhaao" |
| Threshold | Had / Kamtareen Miaar | "95 fizdi had hai — neeche gaya toh action lo" |
| Test Case | Imtihani Sawal | "50 sawal — AI ne kitne sahi jawab diye?" |
| Professional Judgment | Peshewarana Raay | "Yeh AI ka kaam nahi — yeh teri raay chahiye" |
| Evaluation Calendar | Jaanch Ka Jadwal | "Teen mahine baad phir test karo — jadwal mein likho" |
