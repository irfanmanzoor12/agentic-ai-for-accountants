# Content Plan: Chapter 6 — MCP: How AI Connects to Your Tools

**Branch**: `006-ch6-mcp-tool-connections` | **Date**: 2026-02-18 | **Spec**: [spec.md](spec.md)

## Summary

Chapter 6 opens Part 2 — the shift from personal skills to AI systems. MCP is explained entirely through the USB analogy: just as USB lets you plug any device into any computer, MCP lets AI plug into any accounting tool. The chapter never mentions protocol architecture, JSON, or APIs. Core deliverable: AI Vendor Evaluation Checklist, Before/After workflow comparison. Target: 3,000–4,000 words.

## Content Context

**Format**: Markdown (MDX-compatible)
**Target Length**: 3,000–4,000 words
**Writing Style**: Analogy-heavy, conceptual — reader understands MCP without knowing how it works
**Part**: Part 2 — AI Systems You'll Supervise (Chapter 6 of 15, opens Part 2)
**Prerequisite**: Part 1 complete — reader can prompt, context, spec, and verify
**Key Deliverables**: USB analogy, Before/After workflow table, 3 connection types, AI Vendor Evaluation Checklist

## Constitution Check

- [x] I — USB analogy throughout, no protocol details
- [x] II — Xero, QuickBooks, FBR portal, bank feeds as concrete accounting tool examples
- [x] III — Accountant chooses which tools AI connects to, sets permissions
- [x] IV — MCP = "USB for AI" — concept only, never implementation
- [x] V — Data security section connects to verification responsibility
- [x] VI — Opens Part 2 cleanly, prepares for Ch7 (Skills)
- [x] VII — Plan written before content
- [x] VIII — Roman Urdu glossary

## Chapter File (Docusaurus)

```text
docs/part-2-ai-systems/ch06-mcp-tool-connections.md
```

## Section Plan

### Section 1: Part 2 Opening + Bridge from Part 1 (CR-001)
**Length**: 300–400 words
**Key Message**: "Part 1 gave you skills. Part 2 shows you the systems those skills operate within."
**Must Include**:
- Brief Part 2 overview: 10 chapters, building from connections → skills → agents → workflows → quality
- Ch5 callback: "You can verify AI output. Now you need to understand how AI connects to your tools."
- "Without connections, AI can only work with text you paste in. With connections, AI can read your Xero, access your bank feeds, and update your ledger — within guardrails you set."

---

### Section 2: The USB Analogy (CR-001)
**Length**: 300–400 words
**Key Message**: "MCP is the USB port for AI. It's a universal connection standard."
**Must Include**:
- USB story: before USB, every device needed a different port. USB standardized everything.
- MCP does the same for AI tools: before MCP, every AI needed custom integration with every tool. MCP standardizes it.
- "You don't understand how USB works electronically — you just plug in. Same with MCP."
- Visual: USB → Device analogy mapped to MCP → Accounting Tool

---

### Section 3: Before and After MCP — Workflow Comparison (CR-002)
**Length**: 400–500 words
**Key Message**: "Without MCP: you do all the data movement. With MCP: AI does it, you supervise."
**Must Include**:
- 7-step workflow table: Manual (Before) vs. AI with MCP (After)
  - Manual: Download bank statement → Open CSV → Copy into AI → Paste result back → Manually post entries
  - With MCP: AI reads bank feed directly → Classifies and reconciles → Presents summary → You approve → AI posts approved entries
- "Notice: you don't copy-paste data. AI reads it directly. You review outcomes, not process."
- Time comparison (specific: 45 minutes → 5 minutes of human attention)

---

### Section 4: Three Types of AI Connections (CR-003)
**Length**: 400–500 words
**Key Message**: "AI can read, write, and trigger. You decide which."
**Must Include**:
- Type 1 — **Read Access**: AI reads your data but cannot change it. (Bank feeds, financial statements, regulatory databases) — Lowest risk
- Type 2 — **Write Access**: AI can create or update records. (Draft journal entries, create invoices) — Requires guardrails
- Type 3 — **Execute Access**: AI can trigger actions. (File with FBR, send invoices, trigger payments) — Always requires human approval
- 3-row table: Type | What AI Can Do | Accounting Example | Human Approval Required?
- "Start with Read. Add Write only after Trust Ladder Stage 2. Never automate Execute without human sign-off."

---

### Section 5: Three Accounting Scenarios (CR-004)
**Length**: 350–450 words
**Key Message**: "Three real scenarios showing MCP in your accounting practice."
**Must Include**:
- Scenario 1: AI reads Xero data → reconciles → presents summary for approval
- Scenario 2: AI accesses FBR tax rate tables → uses current rates in computation (Read-only — no submission)
- Scenario 3: AI reads bank feeds + ledger → identifies discrepancies → flags for human review
- Each scenario: 3–4 sentences + what connection type is used + what human role remains

---

### Section 6: Data Security + AI Vendor Evaluation (CR-005, CR-006)
**Length**: 400–500 words
**Key Message**: "Not every AI tool deserves access to your client data. Evaluate before you connect."
**Must Include**:
- Data security concerns: client data leaving your firm's environment
- "The same rules as cloud storage: where does it go? Who can see it? Can it be deleted?"
- AI Vendor Evaluation Checklist (5 questions):
  1. Does the vendor's data policy prohibit using my data for model training?
  2. Where are servers located — Pakistan? EU? US? (Regulatory compliance)
  3. Can I delete my data on request?
  4. Is there a data processing agreement available?
  5. Is this an enterprise/paid tier with privacy guarantees, or a free tier?
- Open standard vs. lock-in: "MCP is an open standard — like USB, it's not owned by one company. This protects you from being locked into one AI vendor."

---

### Section 7: Exercises + Takeaways + Glossary
**Length**: 500–600 words
**Must Include**:
- **Exercise 1**: Map Your Tool Connections — list your 5 most-used accounting tools. For each: what type of access would AI need (Read/Write/Execute)? Would you approve that access? What guardrails would you set?
- **Exercise 2**: Evaluate an AI Vendor — pick one AI tool you already use or are considering. Apply the 5-question checklist. What do you find?
- 6 key takeaways
- Ch7 preview: "You know how AI connects. Chapter 7 shows what AI can DO once connected — the accounting skill catalogue."
- Roman Urdu glossary: MCP, Connection Standard, Read Access, Write Access, Execute Access, Data Security, Vendor Evaluation, Open Standard, Tool Integration

## Section Word Targets

| Section | Target Words |
|---|---|
| 1. Part 2 Opening + Bridge | 300–400 |
| 2. USB Analogy | 300–400 |
| 3. Before/After Workflow | 400–500 |
| 4. Three Connection Types | 400–500 |
| 5. Three Accounting Scenarios | 350–450 |
| 6. Security + Vendor Checklist | 400–500 |
| 7. Exercises + Close | 500–600 |
| **Total** | **2,650–3,350** |
