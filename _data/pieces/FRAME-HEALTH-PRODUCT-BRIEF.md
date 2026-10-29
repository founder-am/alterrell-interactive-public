# FRAME HEALTH REPORT — PRODUCT BRIEF

**Last updated:** March 29, 2026
**Status:** Free tier MVP built (React prototype). Paid tier scoped but not built.
**Repository:** TBD (separate from alterrell-interactive-public)

---

## What This Is

A browser-native personal health empowerment tool that uses skeletal frame
analysis, body composition estimation, and lab trend tracking to generate
a report with specific questions for a healthcare provider.

**Core thesis:** BMI was designed for populations, not people. Standard
weight charts are structurally wrong for anyone with a large or very large
skeletal frame. This tool gives people the data and the language to have a
different conversation with their doctor.

**Philosophy:** Data as Dignity, applied to the body. The tool reveals what
your body actually is — it never judges. Free tier does not render diagnostic
labels. Interpretation belongs to providers. The tool empowers the
conversation, not the diagnosis.

---

## Audience

**Primary (launch):** Person A — "The Visitor to Being Fat." Someone who
is heavier, has been told by BMI they're broken, gets generic advice from
doctors, and has never seen their health data synthesized in a way that
respects their body. They want recognition: "the charts weren't built for me."

**Secondary (follows naturally):** Person B — fitness professionals.
Personal trainers and coaches are the day-one professional audience — they
want to know what exercises make sense for a client from a pain reduction
and fitness-oriented perspective, calibrated to that client's actual body
composition and frame. PTs and dietitians may follow but are slower to
adopt and may not care enough initially.

**Not primary:** Person C — quantified-self enthusiasts. Too niche, too
competitive. They may use it, but we don't design for them first.

---

## Brand & Positioning

**Relationship to Alterrell Interactive:** Separate product with its own
name (TBD), but linked as "Built by Alterrell Interactive." The Alterrell
credibility is visible. The "Being Fat" editorial piece (on Alterrell's
editorial calendar, not yet calendared) could serve as the story that
introduces the tool — same pattern as the sodium piece introducing the
sodium calculator.

**Product name:** Not yet decided. "FrameShift" is interesting — continue
to iterate. Working title for now: "Frame Health Report."

**Tagline direction:** Something in the spirit of "Same weight. Completely
different body." — the recognition moment.

**Launch strategy (under consideration):** The "Being Fat" editorial piece
lives on Alterrell Interactive. The free tool launches alongside or within
that piece. The paid tier launches as a waitlist with $5 refundable deposit
to gauge demand before building. If sufficient interest materializes, build
and ship. If not, refund deposits and reassess. This de-risks the paid tier
entirely — we only build what people have already said they'd pay for.

---

## Product Architecture

### Free Tier (MVP — BUILT)

Single-page React app. No account required. Zero data stored or transmitted.
Four sections:

**1. Body Frame Assessment (required inputs)**
- Sex assigned at birth (with note: "about bone structure, not identity")
- Height, weight, wrist circumference, ankle circumference (optional)
- Imperial / metric toggle
- Outputs: frame size classification (Small / Medium / Large / Very Large),
  frame-adjusted healthy weight range, BMI comparison showing how many
  lbs/kg BMI is wrong by
- Measurement instructions (expandable, inclusive language — no "Adam's
  apple" reference)

**2. Body Composition Estimate (optional inputs)**
- Waist, neck, hip circumferences
- Navy method body fat estimate (±3.5% vs DEXA)
- Lean mass calculation, waist-to-hip ratio
- Composition-based goal weight ("going below X means losing muscle, not fat")

**3. Your Numbers Over Time (optional inputs)**
- 8 lab markers: A1c, fasting glucose, triglycerides, HDL, LDL, ALT, eGFR,
  Vitamin D
- Current + prior value per marker
- Time horizon dropdown (3mo / 6mo / 1yr / 2yr / not sure)
- Visual range bars (position indicator, no diagnostic labels)
- Threshold language: "Within range" / "Approaching threshold" /
  "Above clinical threshold"
- TG/HDL ratio auto-calculated as insulin resistance proxy
- Expandable panel explaining what's in standard bloodwork (CMP vs lipid
  panel vs must-request items like A1c and Vitamin D)

**4. Questions for Your Provider (auto-generated)**
- Specific, assertive questions generated from entered data
- Frame argument, body fat argument, fat distribution argument, lab flags
- Four delivery methods: Copy to clipboard, Email to myself, Text to myself,
  Save as PDF
- Methodology disclosure at bottom

### Paid Tier 1 — Enhanced Report (NOT YET BUILT)

**Pricing model:** Pay-per-report generation + optional subscription for
device data imports.

**Price point:** TBD. Working assumption ~$9.99 per report.

**Features confirmed as valuable (ranked by AMA):**
1. Multi-reading trend engine with projections — unlimited historical
   entries per marker with dates. Trend lines, velocity, projected
   trajectories ("At this rate, your A1c will cross 5.7% by October")
2. Cross-metric correlation analysis — glucose→liver 3-month lag pattern
   and similar cross-signal intelligence
3. Exercise prescription calibrated to their body — based on body fat
   distribution (central vs peripheral), frame size, composition.
   Resistance training / Zone 2 / HRV framework, generalized
4. GLP-1 muscle-loss risk scoring — if user indicates GLP-1 agonist use,
   flag lean mass protection protocol
5. Body composition tracking over time — radar chart showing circumference
   changes, lean mass preservation

**NOT in paid tier 1:** Professionally formatted PDF for provider (cut from
scope — the questions + clipboard copy are sufficient for now).

### Paid Tier 2 — Device Data Import (FUTURE)

**Pricing model:** Subscription (price TBD).

**Vision (from HANDOFF.md):** Browser-native drag-and-drop of Fitbit,
Apple Health, CPAP exports. Client-side JavaScript parsing. Full dashboard
experience: sleep architecture, HRV trends, stress timeline, inferred
stress events, "Your Story" narrative engine.

**Status:** Python script exists (health_dashboard.py, ~2,500 lines).
JavaScript port not started. Blocked on Tier 1 completion and input
method resolution.

---

## Data Input Strategy

### Free Tier
Manual entry only. User types numbers into form fields. Simple, fast,
zero friction.

### Paid Tier — Resolved Direction, Details TBD

**Primary method:** Paste-from-screenshot using OS-level text recognition.

Workflow:
1. User opens patient portal (MyChart, LabCorp, Quest, etc.)
2. Screenshots lab results
3. Uses phone's built-in text recognition (iOS Live Text / Android
   Google Lens) to copy text from screenshot
4. Pastes into tool's text field
5. Parser extracts recognized lab values and maps to markers
6. User confirms / corrects

**Fallback:** Print-to-PDF from portal, copy-paste from PDF. Or guided
manual entry with specific instructions per portal.

**Open questions:**
- Do major patient portals (MyChart, LabCorp, Quest) allow screenshots?
  Need to verify.
- What do common paste formats look like? Need samples from multiple
  portals to build parser.
- Should we show users visual examples of what their portal screen looks
  like and where to find each number?

### Device Data (Tier 2)
Drag-and-drop zip files. Client-side parsing via JSZip + FileReader API.
Parser logic already exists in Python — needs JavaScript port.
Supported sources: Fitbit (Google Takeout), Apple Health (export.xml +
clinical-records FHIR JSON), ResMed MyAir (CSV), manual body measurements.

---

## Data & Privacy

- **Zero data stored by us.** Everything processes client-side.
- **Zero data transmitted.** No server, no database, no analytics on
  health data.
- **No accounts.** No login, no user profiles, no PII collected.
- **User-side persistence:** For paid tier, tool generates a downloadable
  data file (JSON) containing their entries. User saves it locally (phone
  files, iCloud, Google Drive — their choice). On return, they upload it
  to restore prior entries. We never see or store this file.
- **HIPAA exposure: none.** No covered entity relationship. No data
  storage. No transmission.
- **For paid tier:** Payment processing only (Stripe or similar). Payment
  identity is never linked to health data because health data never
  touches our servers.

### Legal Liability

**Status:** Needs research. Key questions:
- What legal disclaimers are required for a health information tool that
  does not provide medical advice?
- AI models disclaim they are not providing advice — we should frame
  similarly: "These are questions you might consider asking your provider.
  Your medical team has the final say."
- Worst case: if any feature creates legally risky exposure, we cut it.
  The tool must be defensible.
- Need to review: FTC health claims guidance, state-by-state health
  information tool regulations, standard disclaimers used by comparable
  tools (e.g., Cronometer, MacroFactor, body fat calculators).
- **AMA can spin up legal review with 1–2 weeks notice.**

---

## Design & UX Principles

1. **"Data as Dignity" applied to the body.** Data reveals what your body
   is. It never judges. No shame language. No "WARNING: OBESE."
2. **Threshold language, not diagnostic labels.** "Within range" /
   "Approaching threshold" / "Above clinical threshold." Position on a
   spectrum, not a verdict.
3. **Free tier does not render diagnostic judgments.** Interpretation
   belongs to providers. The tool empowers the conversation.
4. **The data collection experience IS the product.** Telling users what
   to get and how to get it is as valuable as the analysis.
5. **Progressive value with more data.** 1 reading = snapshot. 2 = direction.
   3+ = trajectory. Tool gets smarter, never requires a minimum.
6. **Inclusive by default.** "Sex assigned at birth" with explanation.
   Measurement instructions reference anatomy, not gendered landmarks.
   Metric/imperial toggle.
7. **Mobile-first.** Most users will do this on their phone. All delivery
   methods (clipboard, text, email, PDF) optimized for mobile.
8. **CBUXO lens:** Every feature must work for non-analytical users. If
   it only makes sense to someone who already understands metabolic panels,
   it's not done.

---

## Design System

**For MVP / prototyping:** System fonts, functional styling. No brand
investment yet.

**For production:** TBD. Shares DNA with Alterrell Interactive design
system but needs its own identity. Likely draws from: DM Sans (body),
DM Serif Display (stats/headers), teal as accent. But this is a product,
not a journalism piece — the visual language should feel more like a
health tool and less like an editorial.

---

## Revenue Model

**Free tier:** Unlimited use. Frame calculator + one-time lab snapshot +
doctor questions. This is the top of funnel. Lives on or linked from
Alterrell Interactive.

**Paid Tier 1:** Pay-per-report ($TBD — pricing blocked until we can
demonstrate the insights that justify the value). Enhanced report with
trend engine, correlations, exercise Rx, GLP-1 scoring, composition
tracking.

**Paid Tier 2 (Device Import):** Complexity TBD. May not be feasible as
a product — depends on parseable formats and whether we can reduce Fitbit
data to a few key KPIs that make manual entry viable. If device import is
too complex, we skip it entirely and focus on making manual + paste-from-
screenshot exceptional.

**NO subscription model.** No accounts. No data persistence on our end.
Instead: generate a downloadable data file (JSON or similar) that the user
saves locally. On return visit, they upload that file to restore their
prior entries. The onus of storage is on the user. This eliminates the need
for accounts, databases, and HIPAA-adjacent concerns entirely.

**Demand validation approach:** Launch free tier on/alongside the "Being
Fat" Alterrell piece. Include waitlist for paid tier with $5 refundable
deposit. Build paid tier only if sufficient deposits indicate real demand.

**Other revenue possibilities (not yet decided):**
- Provider-facing version for personal trainers / coaches
- "Behind the data" methodology content on Substack
- Ko-fi tipping on free tier

---

## Technical Architecture

### Current State
- React prototype (frame-health-report.jsx) — renders in Claude artifacts
- Python script (health_dashboard.py, ~2,500 lines) — generates standalone
  HTML dashboard from exported data files
- Sample data files for all 4 sources (MyAir, Fitbit, Apple Health,
  body measurements)

### Target Architecture
- **Free tier:** Single static HTML file or lightweight React app. No
  backend. Deployable on Netlify / Vercel / GitHub Pages.
- **Paid tier:** Still client-side for health data processing. Backend
  only for: payment processing (Stripe), report generation trigger,
  feature gating. No health data ever touches the server.
- **Device imports:** Client-side JavaScript parsers (port from Python).
  JSZip for zip handling. Plotly.js or similar for charting.

### Deployment
TBD. Separate from interactive.alterrell.com. Own domain recommended
(e.g., framehealth.com, framereport.com — not yet checked).

---

## Build Roadmap

### Phase 1 — Free Tier Ship (NEARLY COMPLETE)
- [x] Frame assessment calculator
- [x] Body composition estimate (Navy method)
- [x] Lab snapshot with threshold language
- [x] Range bar visualizations
- [x] Doctor question generator
- [x] Four delivery methods (copy, email, text, PDF)
- [x] Imperial / metric toggle
- [x] Inclusive language throughout
- [x] Measurement instructions
- [ ] Export React prototype to standalone HTML
- [ ] Visual design pass (brand identity, not just functional)
- [ ] Mobile responsiveness audit
- [ ] Accessibility pass
- [ ] Deploy to production URL

### Phase 1.5 — Launch & Validate Demand
- [ ] Publish "Being Fat" editorial piece on Alterrell Interactive
- [ ] Embed or link free tool from the piece
- [ ] Add waitlist for paid tier with $5 refundable deposit
- [ ] Set deposit threshold for go/no-go on Tier 1 build (TBD: 50? 100?)
- [ ] Collect LabCorp + Quest paste samples from AMA for parser prototyping
- [ ] Legal review (AMA to initiate, 1-2 week turnaround)

### Phase 2 — Paid Tier 1 MVP (GATED on Phase 1.5 validation)
- [ ] Multi-reading entry with dates (unlimited per marker)
- [ ] Trend line + velocity calculations
- [ ] Projected trajectory ("at this rate, X by Y date")
- [ ] Cross-metric correlation engine (glucose→liver lag, etc.)
- [ ] Exercise prescription module
- [ ] GLP-1 muscle-loss risk scoring
- [ ] Composition tracking with radar chart over time
- [ ] Paste-from-screenshot parser (prototype)
- [ ] Payment integration (Stripe)
- [ ] Feature gating (free vs paid)

### Phase 3 — Device Import (DEFERRED — feasibility not confirmed)
- [ ] Determine if Fitbit can be reduced to 3-5 manually-enterable KPIs
- [ ] If yes: add KPI fields to manual entry (no parsing needed)
- [ ] If no: evaluate JavaScript port of Python parsers
- [ ] Apple Health clinical records (FHIR JSON) — most structured, most
  feasible to parse
- [ ] MyAir CSV — straightforward, smallest files
- [ ] Fitbit (Google Takeout) — largest files, most complex structure
- [ ] Decision: build import or abandon based on Tier 1 validation

### Phase 4 — Provider Version (FUTURE — follows consumer validation)
- [ ] Personal trainer / coach focused (not clinical PTs)
- [ ] Exercise Rx from pain reduction and fitness perspective
- [ ] Client report sharing (trainer receives anonymized summary)
- [ ] B2B pricing model

---

## Open Questions

1. **Product name.** "FrameShift" is interesting, continue to iterate.
   Need brainstorm session.
2. **Pricing.** Blocked until we can demonstrate the insight layer that
   justifies a price. Build the intelligence features first, then price
   based on perceived value.
3. **Portal screenshot compatibility.** AMA has LabCorp and Quest (not
   MyChart) and can prototype/share what's possible from those portals.
   Need to test screenshot + paste workflow on actual devices with real
   portal screens.
4. **Paste parser scope.** Need real pasted samples from LabCorp and Quest
   to build parser. AMA to provide.
5. **Fitbit data feasibility.** Fitbit exports are massive (~500MB for
   18 months). If we can identify the 3-5 key KPIs that matter most,
   manual entry of those KPIs may be more feasible than parsing the full
   export. Candidate KPIs: sleep score, HRV (RMSSD), resting heart rate,
   deep sleep minutes, steps. TBD.
6. **Device import complexity.** May not be feasible as a product at all.
   Depends on whether formats are parseable and whether the value justifies
   the engineering. Decision deferred until Tier 1 is proven.
7. **Domain / hosting.** Own domain vs. subdomain of alterrell.com. TBD.
8. **Legal liability.** Needs research. AMA can spin up with 1–2 weeks
   notice. Frame as informational tool, not medical advice. Cut any
   feature that creates legally risky exposure.
9. **Provider audience.** Personal trainers and coaches are more likely
   day-one adopters than PTs or dietitians. Focus on pain reduction and
   fitness-oriented exercise Rx, not clinical protocols.
10. **"Being Fat" editorial piece timing.** Not yet calendared on Alterrell.
    Should launch before or alongside the free tool to drive awareness.
    TBD on timing.
11. **Demand validation.** Waitlist with $5 refundable deposit on the
    Alterrell piece. Build paid tier only with demonstrated interest.
    What's the threshold? 50 deposits? 100? TBD.
12. **Data persistence without accounts.** User downloads a JSON file
    with their entries, re-uploads on return. Need to design this UX
    so it feels simple, not burdensome. "Save your progress" → downloads
    file. "Continue where you left off" → upload file.

---

## Key Learnings & Principles (Carried from Tonight)

- **"Same weight, completely different body"** is the marketing headline.
- **The data collection experience is the product.** Telling people what
  to get and how to get it is as valuable as the analysis itself.
- **Paste-from-screenshot using OS-level text recognition** (iOS Live Text,
  Android Google Lens) is the primary input method for lab data. Not OCR
  we build. Fallback: guided manual entry.
- **Progressive value with more data.** No minimums. 1 reading is useful.
  More is better. Tool never punishes sparse data.
- **Free tier = recognition. Paid tier = utility.** Free answers "Is BMI
  wrong about me?" Paid answers "What's happening and what should I do?"
- **Provider sale follows consumer adoption.** Personal trainers and
  coaches are day-one professional audience, not PTs or dietitians.
- **Annual physicals aren't universal.** Don't assume a cadence.
- **Insurance language must be careful.** "Call your provider's office to
  ask what's covered under your plan."
- **No data persistence on our end.** User downloads a JSON file of their
  entries. Re-uploads to continue. No accounts, no database, no HIPAA.
- **No subscription model.** Pay-per-report for enhanced tier. Subscription
  only revisited if device import tier proves feasible.
- **Validate demand before building paid tier.** Waitlist + $5 refundable
  deposit on the Alterrell piece. Only build if deposits indicate real
  interest.
- **Legal: frame as informational, not advisory.** "Questions you might
  consider asking your provider. Your medical team has the final say."
  Cut anything legally risky rather than hedging.
- **Fitbit data: identify 3-5 key KPIs.** If we can reduce Fitbit to a
  handful of manually-enterable numbers, we avoid the 500MB export problem.
- **Device import is NOT confirmed.** Complexity may make it infeasible.
  Decision deferred until Tier 1 is validated.

---

## Session Protocol

Every session working on this product should:
1. Read this brief before acting
2. Check the React prototype for current state
3. Confirm which phase / feature is being built
4. Update this brief at session close with decisions made

---

## Files

```
(to be organized into repo)
├── frame-health-report.jsx      Free tier React prototype (v2)
├── health_dashboard.py           Python dashboard script (~2,500 lines)
├── health_dashboard.html         Generated dashboard (visual reference)
├── PRODUCT-BRIEF.md              This file
├── HANDOFF.md                    Original developer handoff doc
└── sample_data/
    ├── MyAir_sample.zip
    ├── FitBit_sample.zip
    ├── AppleHealth_sample.zip
    └── bodymeasurements_sample.txt
```
