# Tasks: Chapter 1 — Why AI Changes Accounting Forever

**Input**: Plan from `specs/001-ch1-why-ai-changes-accounting/plan.md`
**Output**: `docs/part-1-personal-skills/ch01-why-ai-changes-accounting.md`
**Prerequisites**: plan.md ✅, spec.md ✅

**Organization**: Tasks grouped by chapter section — each section can be written independently, then assembled. Each task = one writable chunk (300–500 words) with clear inputs and acceptance criteria.

---

## Phase 1: Setup (File + Structure)

**Purpose**: Create the chapter file with correct front matter and section scaffolding

- [ ] **T001** — Create chapter file `docs/part-1-personal-skills/ch01-why-ai-changes-accounting.md` with Docusaurus front matter (id, title, sidebar_label, sidebar_position: 1)
- [ ] **T002** [P] — Add all 11 section headings as empty H2s so the structure is visible before writing begins
- [ ] **T003** [P] — Confirm file is in the correct Docusaurus docs path and can be rendered (visual check after Docusaurus init)

**Checkpoint**: Chapter file exists with front matter and all section headings. Ready to write.

---

## Phase 2: Reader Journey 1 — The Skeptic (P1)
*Sections that serve the skeptic: Hook (urgency), Paradigm Shift (what's happening), Supervisor Mindset (reassurance), Fear Factor.*

**Goal**: After writing these 4 sections, a skeptical reader would continue to Chapter 2.

**Independent Test**: Have a skeptical non-AI-user read only these sections. Do they want to know more?

### Section 1: Opening Hook — The SaaSpocalypse

- [ ] **T004** — Write the SaaSpocalypse hook (300–400 words):
  - Start with February 2026 context: $1 trillion SaaS disruption story
  - Name at least one accounting tool the reader uses (Xero, QuickBooks, SAP)
  - Short, punchy sentences — story pace, not explanation pace
  - End with pivot: "This isn't a tech story. This is your story."
  - **Acceptance**: First paragraph hooks the reader in one reading. No jargon in first 200 words.

### Section 2: Paradigm Shift Table

- [ ] **T005** — Write the SaaS → Agent Factory transition section (400–500 words):
  - One-sentence SaaS definition with accounting example BEFORE using the term
  - Build the comparison table: "Your Current Tools" vs. "Agent Era" — 5–6 rows covering reconciliation, expense classification, tax filing, audit sampling, report drafting
  - Agent Factory concept: firms manufacture AI workers instead of buying software
  - **Acceptance**: A reader who has never heard "Agent Factory" can explain it after reading this section.

### Section 6: Supervisor Mindset + Fear Factor

- [ ] **T006** — Write the Supervisor Mindset section (400–500 words):
  - Address the fear directly in the first paragraph — do not avoid it
  - Core insight: AI NEEDS professional judgment to define "correct" — accountants are more valuable, not less
  - Quote-worthy line: "AI + Accountant replaces Accountant. But Accountant who supervises AI is irreplaceable."
  - Preview of supervisor role: define intent, direct agents, verify output
  - **Acceptance**: A scared reader feels reassured — not by dismissing the fear, but by reframing their role.

**Checkpoint**: Reader Journey 1 complete. Skeptic conversion sections written and passing.

---

## Phase 3: Reader Journey 2 — The Curious (P2)
*Sections that serve the curious reader: Digital FTE (bigger picture), Three Levels (where they are, where to go), Intent→Outcome (framework).*

**Goal**: After writing these 3 sections, a reader who already uses ChatGPT understands the full transformation arc.

**Independent Test**: Ask a ChatGPT-using accountant: "Can you explain the difference between using ChatGPT and having an AI agent?" — they should be able to articulate this after reading.

### Section 3: Digital FTE

- [ ] **T007** — Write the Digital FTE section (350–450 words):
  - 168 hours/week calculation made concrete and simple
  - Comparison table: Junior Accountant vs. Digital FTE (3 rows: hours available, supervision needed, task type)
  - "You are still the senior. The Digital FTE is your junior."
  - Not replacement — augmentation framing throughout
  - **Acceptance**: Reader can repeat the Digital FTE concept to a colleague without consulting notes.

### Section 5: Three Levels of AI Maturity

- [ ] **T008** — Write the AI Maturity Levels section (350–450 words):
  - Level 1 — Chat: Ask AI one question at a time ("Explain IAS 16")
  - Level 2 — Assistant: Give AI context and get structured help ("Classify these 50 transactions")
  - Level 3 — Agent: AI executes multi-step workflows with human supervision
  - 3-level table: Level | Name | What You Do | Accounting Example
  - Self-assessment question: "Which level are you at today?"
  - Bridge: "This book takes you from wherever you are to Level 3."
  - **Acceptance**: Reader can immediately self-locate on the 3-level scale.

### Section 4: Intent → Factory → Outcome

- [ ] **T009** — Write the Intent → Factory → Outcome section (400–500 words):
  - 3-step model explained with an accounting analogy for each step
  - Intent = "like writing an engagement letter"
  - Factory = "the AI system — you don't build this, you use it"
  - Outcome = "the draft working paper AI produces — you review and sign off"
  - Bank reconciliation as the worked example through all 3 steps
  - "You own Intent and Outcome. Factory is AI's job."
  - **Acceptance**: Reader can apply this model to one task from their own work immediately.

**Checkpoint**: Reader Journey 2 complete. Curious reader sections written and passing.

---

## Phase 4: Reader Journey 3 — The Manager (P3)
*Sections that serve the practice manager: Before/After example (business impact), Book Roadmap (investment case).*

**Goal**: After writing these 2 sections, a practice manager can name one firm-level change they would make.

### Section 7: Before & After — Bank Reconciliation

- [ ] **T010** — Write the Before & After example section (400–500 words):
  - Manual process: 7-step breakdown with time (2 hours total)
  - AI-assisted process: 3 steps for human (load context → review 6 flagged items → approve)
  - Side-by-side table: Manual | AI-Assisted (steps and human time)
  - Time comparison: 2 hours → 8 minutes of human time
  - "The 6 discrepancies still need your professional judgment. AI can't decide that — you can."
  - **Acceptance**: Reader can calculate the time savings for their own reconciliation workload.

### Section 8: 15-Chapter Roadmap

- [ ] **T011** — Write the Book Roadmap section (300–400 words):
  - Table: Chapter | What You'll Learn | AI Maturity Level
  - Part 1 (Ch1-5): Personal skills, Level 1→2
  - Part 2 (Ch6-15): AI systems, Level 2→3
  - Each chapter listed by number and 5-7 word title
  - "Each chapter builds on the previous. No chapter assumes knowledge beyond what came before."
  - **Acceptance**: Reader knows exactly what the next 14 chapters cover.

**Checkpoint**: Reader Journey 3 complete. Manager-reader sections written and passing.

---

## Phase 5: Exercises + Polish (All Readers)

**Purpose**: Hands-on exercises, takeaways, and glossary — applicable to all readers.

### Section 9: Hands-On Exercises

- [ ] **T012** — Write Exercise 1: "Ask AI to Explain a Standard" (200 words):
  - Exact prompt to type: "Explain IFRS 16 — Leases — to a Pakistani accountant in 5 bullet points. Use simple language."
  - What to notice: accuracy, completeness, style
  - Reflection question: "Did AI get anything wrong? What would you verify?"
  - **Acceptance**: Reader can complete this exercise in under 10 minutes with a free account.

- [ ] **T013** — Write Exercise 2: "Have AI Review a Transaction" (200 words):
  - Exact prompt: "Here is a transaction: Office furniture purchased for PKR 250,000 paid by bank transfer. How should this be classified in the accounts? Which IFRS standard applies? Is this capital or revenue expenditure?"
  - What to notice: Does AI cite a standard? Is the classification correct? Would you sign off on this?
  - Reflection question: "What information did you have to give AI? Why does that matter?"
  - **Acceptance**: Reader can complete this in under 10 minutes. Connects to the Intent → Outcome model.

### Section 10: Key Takeaways

- [ ] **T014** [P] — Write Key Takeaways section (200–250 words):
  - 6 bullet points — one per major concept
  - Order: Paradigm shift → Digital FTE → Intent/Outcome → 3 Levels → Supervisor Mindset → Chapter 2 bridge
  - Each point: 1-2 sentences, actionable phrasing
  - Last takeaway: "Next up: Prompt Engineering — how to give AI the right instructions."
  - **Acceptance**: A reader who only reads the takeaways can reconstruct the chapter's core message.

### Section 11: Roman Urdu Glossary

- [ ] **T015** [P] — Write Roman Urdu Glossary (150–200 words):
  - Table format: English Term | Roman Urdu | Meaning in Context (one sentence)
  - 10 terms: AI Agent, Digital FTE, Supervisor, Intent, Outcome, Agent Factory, Paradigm Shift, SaaS, AI Maturity Level, Agentic AI
  - Use natural Pakistani accounting professional speech — not formal Urdu
  - Example: "AI Agent" = "AI Ka Karkun" (not "AI Wakeel")
  - **Acceptance**: Author validation — each translation sounds natural in a sentence a Pakistani accountant would say.

---

## Phase 6: Assembly + Quality Check

- [ ] **T016** — Assemble all sections into the final chapter file in order (T004–T015 combined)
- [ ] **T017** — Read the complete chapter for flow: does each section connect to the next? Add 1-2 transition sentences at section boundaries if needed
- [ ] **T018** [P] — Count tables and lists: minimum 4 required. If fewer, identify sections where prose can become a table.
- [ ] **T019** [P] — Scan for paragraphs longer than 4 sentences — break any that exceed this
- [ ] **T020** [P] — Scan for unexplained technical terms — every first use must have an accounting analogy
- [ ] **T021** [P] — Verify PKR amounts, FBR references, and accounting standards are accurate
- [ ] **T022** — Final word count check: target 3,500–4,500 words. Trim or expand as needed.
- [ ] **T023** — Update quality checklist in `checklists/requirements.md` — mark writing complete

---

## Dependencies & Execution Order

- **Phase 1 (Setup)**: Must come first — creates the file
- **Phase 2 (P1 sections)**: Can start after Phase 1
- **Phase 3 (P2 sections)**: Can run in parallel with Phase 2 (different sections, no dependencies)
- **Phase 4 (P3 sections)**: Can run in parallel with Phases 2 & 3
- **Phase 5 (Exercises + Polish)**: Can run in parallel with Phases 2-4
- **Phase 6 (Assembly)**: Depends on ALL sections complete (Phases 2-5)

### Parallel Writing Opportunities

All sections within Phases 2-5 can be written in parallel — they are independent sections. Recommend starting with T004 (Hook) and T006 (Supervisor Mindset) first as they set the chapter's tone.

---

## Writing Notes

- The Hook (T004) is the most important task — if it doesn't create urgency, readers won't continue.
- The Supervisor Mindset section (T006) must NOT sound defensive — it should sound empowering.
- The Before & After table (T010) should use exact times (2 hours, 8 minutes) not vague comparisons.
- All PKR amounts in exercises should be realistic for Pakistani accounting contexts (PKR 250,000 for furniture is realistic; PKR 25,000 would be too low).
- The exercises use exact prompts the reader can copy-paste — make them specific, not generic.
