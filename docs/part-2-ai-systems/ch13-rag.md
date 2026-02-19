---
id: ch13-rag
title: "Chapter 13: RAG — AI Reads Your Firm's Documents"
sidebar_label: "Ch13: RAG"
sidebar_position: 13
---

# Chapter 13: RAG — AI Reads Your Firm's Documents

> *"Any accountant can answer from general knowledge. A great accountant checks the standard first."*

Chapter 12 gave AI a memory — it remembers your clients, your preferences, your firm's established way of working. Memory holds what you have told AI across past conversations. But memory cannot hold everything. It cannot hold the full text of IFRS 16. It cannot hold all 800 pages of the Income Tax Ordinance 2001. It cannot hold ten years of your firm's working papers, audit programs, and advisory memos.

This is where RAG comes in.

RAG stands for Retrieval-Augmented Generation. It means, in plain language: AI looks up information in your documents before answering. Instead of answering from general training knowledge — which may be outdated, generic, or simply wrong for your specific situation — AI searches your firm's document library, finds the relevant sections, and answers based on what it actually found. With source references you can verify.

Think of it as the difference between asking a brilliant generalist and asking a research assistant with access to your firm's complete library.

---

## From Generalist to Your Firm's Expert

Without RAG, every AI conversation draws from the same source: general training knowledge. This is broad but shallow for specialist accounting work. Ask AI about IFRS 16 lease modifications, and it answers from what it absorbed during training — a summary, not the actual paragraphs. The answer may be correct in outline but lack the specificity you need for professional work. It cannot tell you what YOUR firm's lease accounting policy says. It cannot tell you how you handled a similar lease modification last year.

With RAG, AI has access to YOUR library. It can search the IFRS 16 full text. It can search your firm's audit methodology manual. It can search past working papers. It answers not from general knowledge but from your specific documents — with paragraph references, section numbers, and policy citations you can verify directly.

**Without RAG** — the brilliant generalist:
> *"You ask how to account for a lease modification. AI gives you a correct general overview — recognise, remeasure, use revised discount rate — but cannot tell you the specific IFRS 16 paragraph, cannot tell you your firm's established treatment, and may not know whether the guidance changed in the most recent amendment."*

**With RAG** — the research assistant with library access:
> *"You ask the same question. AI searches your IFRS 16 document, your firm's lease policy memo, and last year's working papers for a similar case. It returns IFRS 16 paragraphs 44–46 on the specific modification type, your firm's policy on revised discount rates, and a reference to WP-L-22 from the prior year engagement. You verify against the actual paragraphs in two minutes."*

The knowledge is the same. The specificity, verifiability, and relevance to your practice are completely different.

---

## How RAG Works: Look Up, Then Answer

The mental model for RAG is simple — and it mirrors exactly what a thorough accountant does before giving a professional opinion.

---

**HOW RAG WORKS**

**Step 1 — You Ask**
> *"How do we account for a lease modification where the scope of the lease has increased under IFRS 16?"*

**Step 2 — AI Searches Your Library**
> AI looks through: IFRS 16 full text, your firm's lease accounting policy, past lease modification working papers in your document library.

**Step 3 — AI Retrieves the Relevant Sections**
> AI finds: IFRS 16 paragraphs 44–46 (modification that is a new, separate lease), IFRS 16 paragraph 45 (modification not a separate lease — remeasure), your firm's policy note dated March 2025, WP reference L-18 from last year's engagement with similar facts.

**Step 4 — AI Answers Using What It Found**
> *"Based on IFRS 16 paragraph 45, a lease modification that is not accounted for as a separate lease requires the lessee to remeasure the lease liability using a revised discount rate at the modification date. Per your firm's lease accounting policy (March 2025), the revised rate applied is the client's incremental borrowing rate at the date of modification. For reference, see WP-L-18 from the prior year for a worked example."*

**Step 5 — You Verify**
> You open IFRS 16, paragraph 45. Does it say what AI reported? You confirm. You check the firm's policy note. Consistent? You confirm. Your review took three minutes instead of forty.

---

This five-step sequence is the same sequence a careful accountant follows before giving an opinion: look up the standard, find the relevant paragraph, understand what it says, form the answer, and verify. RAG automates Steps 2 and 3. You still own Steps 1 and 5.

---

## With RAG vs. Without RAG

The practical difference between RAG and non-RAG AI is most visible in three types of accounting questions every professional asks regularly.

| Question | AI Without RAG | AI With RAG |
|---|---|---|
| **"What is the FBR depreciation rate for plant and machinery?"** | "The rate is typically 10–15% depending on the type of machinery and use." *(vague, possibly outdated, no citation)* | "Per the Third Schedule to the Income Tax Ordinance 2001, Part I, plant and machinery used in industrial undertakings carries a normal depreciation rate of 15%. Initial allowance of 25% applies in the first year for qualifying assets. [Source: Third Schedule, Part I, S. No. 4, ITO 2001 — current to Finance Act 2025]" *(specific, citable, verifiable)* |
| **"How did we handle the contingent liability for the pending FBR case last year?"** | "I don't have information about your past engagements." *(no access)* | "In the 2025 audit of Client A, the contingent FBR assessment of PKR 12M was disclosed as a contingent liability under IAS 37 in Note 18 of the financial statements. Management's legal advisors considered the case probable of partial settlement — estimated PKR 4–6M range disclosed. [Source: Audit file 2025, WP ref C-18, Review note dated April 2025]" *(firm-specific, with reference)* |
| **"What is our firm's policy on setting materiality for a manufacturing audit?"** | "Materiality is commonly set at 1–2% of total assets or 5% of net income, depending on the risk profile." *(generic textbook answer)* | "Per the firm's Audit Methodology Manual, Section 4.3 (updated January 2025): Overall materiality for manufacturing clients is set at 1% of total assets or 5% of profit before tax, whichever is lower. Performance materiality is 70% of overall materiality. The threshold for reporting identified errors to management is 5% of overall materiality. [Source: Firm Policy AMM-4.3]" *(your actual policy, with section reference)* |

The pattern is consistent: without RAG, AI answers with general knowledge — often correct in broad terms but impossible to cite in professional work. With RAG, AI answers with your specific documents — specific paragraphs, policy sections, working paper references — giving you a verifiable starting point that dramatically reduces research time.

"AI said so" is not an acceptable footnote in a working paper. "Per IFRS 16.45, as retrieved and verified" is.

---

## Flagship: IFRS Research in Real Time

Imagine it is mid-audit for a manufacturing client who recently modified one of their equipment leases — the scope increased and the consideration changed. You need to determine the correct accounting treatment before the partner review tomorrow.

**Without RAG:** You ask AI about IFRS 16 lease modifications. You receive a summary that covers the general topic but does not distinguish clearly between modifications that are new separate leases and those that are not. You spend 45 minutes searching the actual IFRS 16 PDF, cross-referencing the Basis for Conclusions, and pulling last year's working paper from the file to check your firm's prior treatment.

**With RAG:** Your document library contains IFRS 16 full text, your firm's lease accounting policy memo, and past lease modification working papers. You ask: "The client modified an equipment lease — scope increased, consideration increased proportionally. New separate lease or remeasure?" AI searches all three documents, retrieves IFRS 16 paragraphs 44–45 with the criteria for separateness, your policy note on the assessment, and the prior year WP showing an identical scenario. Your answer — with references — arrives in 90 seconds. You verify the IFRS 16 paragraphs (two minutes) and draft the treatment note based on confirmed, firm-consistent guidance.

**Time saved:** 45 minutes of searching reduced to 5 minutes of reading and verifying. Multiplied across an audit season, this is a material productivity improvement.

---

## The Document Library Plan

Before RAG can work, you need a library. Not thousands of documents — a focused, well-organized collection of the materials AI needs most. A curated library of 20 current, relevant documents is more powerful than an uncurated pile of 2,000.

Build your library in four categories, with one exclusion list.

---

**DOCUMENT LIBRARY PLAN**

```
DOCUMENT LIBRARY PLAN
Firm: [Firm Name]          Last Updated: [Date]          Owner: [Name]

─────────────────────────────────────────────────────────────
CATEGORY 1: STANDARDS & REGULATIONS
Priority documents (add first):
  [ ] IFRS Standards — full text OR IFRS for SMEs (as applicable)
  [ ] IAS Standards — particularly IAS 1, 2, 16, 36, 37, 38, 40
  [ ] FBR Income Tax Ordinance 2001 — latest amended version
  [ ] FBR Third Schedule (depreciation rates) — updated annually
  [ ] Companies Act 2017 — with SECP notifications
  [ ] ICAP Code of Ethics
  [ ] FBR Sales Tax Act (if tax practice area)
  [ ] Current Finance Act (update every year after budget)
Status: Current as of [date] | Review: Annually + after Finance Act

─────────────────────────────────────────────────────────────
CATEGORY 2: FIRM POLICIES & TEMPLATES
  [ ] Audit Methodology Manual (including sampling, materiality)
  [ ] Standard working paper templates (planning, fieldwork, reporting)
  [ ] Engagement letter templates (audit, tax, advisory)
  [ ] Quality control and review policies
  [ ] Standard chart of accounts templates by entity type
  [ ] Firm's approved tax computation formats
  [ ] Report and financial statement presentation templates
Status: Updated as of [date] | Review: After any policy change

─────────────────────────────────────────────────────────────
CATEGORY 3: PAST ENGAGEMENT FILES (ANONYMIZED)
  [ ] Sample audit programs by industry (remove client identifiers)
  [ ] Tax computation worked examples (anonymize all client data)
  [ ] Advisory report templates based on past work (anonymized)
  [ ] Compilation of common audit findings and resolutions
  [ ] Precedents for unusual accounting treatments (anonymized)
Status: All identifiers removed — apply Ch10 Data Classification Matrix

─────────────────────────────────────────────────────────────
CATEGORY 4: REFERENCE MATERIALS
  [ ] FBR circulars and SROs (current year + last 3 years)
  [ ] ICAP technical releases and practice bulletins
  [ ] SECP notifications relevant to your client base
  [ ] Industry-specific guidance for your main sectors
Status: Current | Remove superseded circulars immediately

─────────────────────────────────────────────────────────────
EXCLUDED — NEVER IN AI LIBRARY:
  • Active client engagement files with identifying information
  • Confidential correspondence with clients or regulators
  • Whistleblower or fraud investigation files
  • Pre-transaction M&A or IPO materials
  • (Apply Ch10 Data Classification Matrix — Never-Share category)
```

---

**Starting point for small firms:** Do not try to build the complete library at once. Start with the five documents you reference most often. For most accounting practices in Pakistan, this is: IFRS for SMEs, FBR Income Tax Ordinance (latest), Finance Act (current), your firm's standard working paper template, and your firm's engagement letter template. These five documents alone give RAG enough material to answer the majority of day-to-day questions with specific, verifiable references.

---

## Garbage In, Garbage Out

The most important principle in RAG is not technical. It is the same principle that applies to any reference material: what you put in determines what you get out.

**If you load an outdated version of IFRS 16**, AI will give you outdated lease accounting guidance — stated confidently, with paragraph references, appearing completely authoritative. The guidance will be wrong. The references will be real paragraphs from the old standard. The error will be invisible until a professional verification step catches it.

**If you load a superseded FBR circular**, AI will cite it as current law. The circular may have been replaced two Finance Acts ago. AI does not know this unless the updated version is in your library.

**If you load past working papers that contained errors** — misapplied standards, incorrect classifications, outdated treatments — AI will learn from those errors and propagate them into future answers. Your library's mistakes become AI's reference points.

The accountant's responsibility is to curate the document library with the same diligence you apply to your physical reference shelf. You would not keep a 2018 Companies Act on your shelf without updating it to 2023 amendments. Apply the same standard to your AI library.

Every document in the library carries an implicit claim: *This is current. This is correct. This is what we rely on.* Make sure that claim is justified before any document enters the library.

---

## The Document Library Checklist

Run this checklist before adding any document to your RAG library, and repeat it for the full library at least annually.

- [ ] **Is this the latest version?** Standards and legislation are amended. Check for superseding documents, amendments, and withdrawals before adding.
- [ ] **Is this regulation current?** FBR circulars, SROs, and Finance Act provisions change annually. Confirm the effective date and whether anything supersedes it.
- [ ] **Are firm policies up to date?** Methodology manuals and templates should reflect current practice — not procedures from two partners ago.
- [ ] **Are past engagement files properly anonymized?** No client names, NTN/CNIC numbers, engagement identifiers, or personally identifying references. Apply the Anonymize-First rule from Ch10.
- [ ] **Is the document correctly categorized?** Standards, firm policies, past work, and reference materials should be clearly separated — AI searches more accurately in an organized library.
- [ ] **Is there a review schedule for this document?** Standards: annually. FBR rules: after every Finance Act. Firm policies: after any update. Assign a review date to every document.
- [ ] **Is there a named owner for updates?** Someone must be responsible for keeping each document current. Without ownership, outdated documents accumulate unnoticed.

A document library without a maintenance plan degrades over time. Today's accurate library becomes next year's source of well-cited errors. Build the maintenance schedule at the same time as the library — not after the first problem appears.

---

## Hands-On Exercises

### Exercise 1: Plan Your Document Library

**Time:** 25 minutes

Using the Document Library Plan template, build your firm's library plan. For each category, list the specific documents you would include. For each document, note:
- **Current status:** Do you have it? Is it the latest version?
- **Priority:** High (reference daily or weekly), Medium (monthly), Low (occasional)
- **Action needed:** Already ready, needs updating, needs to be sourced, needs anonymizing

When complete, identify your top 10 priority documents — the ones that would give you the most immediate value if AI could search them. These are your starting library. Build that first, verify it is current, then expand.

---

### Exercise 2: Test RAG vs. No-RAG

**Time:** 20 minutes

Choose one accounting question you answer regularly — a standards question, a firm policy question, or a recurring technical treatment.

**Round 1 — No RAG:** Ask AI the question directly, with no document uploaded. Note the answer: Is it specific? Does it cite a paragraph or section number? Would you use this answer in professional work without verification?

**Round 2 — With RAG:** Upload the relevant document (IFRS standard, FBR ordinance section, firm policy) to your AI conversation. Ask the same question again. Note the answer: Is it more specific? Does it cite the actual paragraph from the document you provided? Can you verify it directly?

Compare the two answers. Which is more specific? Which gives you a verifiable reference? Which would a partner accept in a working paper? The difference is the value of RAG.

---

## Key Takeaways

1. **RAG is "Look Up, Then Answer."** AI searches your document library before responding — just like a careful accountant checks the standard before giving an opinion. The search is automated; the verification is yours.

2. **With RAG, AI gives specific, citable answers. Without RAG, AI gives general, hard-to-verify answers.** For professional accounting work, the difference matters. "AI said so" fails audit; "IFRS 16.45, verified" does not.

3. **Your document library determines RAG quality.** A focused, current library of 20 documents outperforms a disorganized library of 2,000. Start small, start current, expand deliberately.

4. **Garbage in, garbage out — with citations.** An outdated standard in your library produces outdated answers, stated confidently, with real paragraph numbers. The error looks authoritative. Maintain your library as carefully as your physical reference shelf.

5. **RAG does not replace verification — it accelerates it.** AI gives you the paragraph reference in seconds. You verify the paragraph in two minutes. Total time: two minutes instead of forty-five. The professional judgment about what the paragraph means for your client is still yours.

6. **Memory (Ch12) and RAG (Ch13) are complementary.** Memory holds what you have told AI about your clients. RAG gives AI access to the knowledge base your clients' work requires. Together, they make AI feel less like a generic tool and more like a knowledgeable team member who knows both your clients and your standards.

> **Chapter 14 preview:** Your AI agents are working, remembering, and researching. But how do you know if their output is actually good enough? Chapter 14 — Evaluation — teaches you how to measure AI output quality systematically, build golden datasets of known-correct answers, and set the quality standards that determine when AI output is ready for professional use.

---

## Roman Urdu Glossary

*(Key terms in the language of Pakistani accounting practice)*

| English Term | Roman Urdu | Usage in Practice |
|---|---|---|
| RAG | Pehle Parho Phir Jawaab Do | "AI apne documents mein dhoondta hai — phir jawaab deta hai" |
| Retrieval | Talaash / Dhoondna | "AI ne IFRS 16 mein talaash ki — paragraph 45 mila" |
| Document Library | Dastaawezon Ka Khazana | "Firm ka khazana — standards, policies, past work sab" |
| Source Reference | Hawala | "AI ka hawala — paragraph number, section — verify karo" |
| Verification | Tasdeeq | "Hawala mila — phir asli document mein tasdeeq karo" |
| Outdated | Purana / Mansookh | "Purana standard rakha — AI galat jawaab deta raha" |
| Knowledge Base | Ilm Ka Khazana | "Firm ka ilm — AI ko loota — behtar jawaab milega" |
| Garbage In, Garbage Out | Kachra Daalo — Kachra Nikle | "Galat document — galat jawaab. Sahi rakho." |
| Search | Talaash Karna | "AI documents mein talaash karta hai — aap verify karo" |
| Document Curation | Dastaawezon Ki Dekhbhal | "Library ki safaai — outdated hatao, current rakho" |
