# FRAMESHIFT — DATA FACT PACK & PRODUCT STRUCTURE
**Separate product — not Alterrell Interactive**
**Internal reference only. Not for publication.**
**Compiled: May 2026**

---

## SECTION 1 — PRODUCT IDENTITY (LOCKED)

**Product name:** FrameShift
**Product type:** Browser-native personal health empowerment tool
**Category:** Body composition estimation + health framing
**Access model:** Free tier (MVP built) + Paid tier (pending demand validation)
**Data model:** Zero data storage / zero data transmission — client-side only, browser-native
**Status:** Free tier MVP built. Paid tier pending waitlist demand validation via refundable deposit.
**Primary audience:** General users (personal health) + Personal trainers and coaches (day-one professional audience)
**Relationship to Alterrell Interactive:** Separate product. No editorial or platform dependency.

---

## SECTION 2 — THE PRODUCT ARGUMENT IN ONE SENTENCE

BMI is a 19th-century population statistics tool being used as a personal health metric — it was never designed to measure individual health, it is demonstrably inaccurate for large portions of the population, and FrameShift replaces it with methods that actually measure body composition.

**Two anchor claims:**
1. BMI's shortcomings are documented and well-established in the medical literature — it misclassifies people by race, gender, and body type at documented rates
2. Better methods exist, are accessible without clinical equipment, and should be the default for personal health self-assessment

---

## SECTION 3 — THE BMI CRITIQUE (DOCUMENTED)

### What BMI measures
- BMI = weight (kg) / height (m²)
- Developed by Adolphe Quetelet, 1832 — a statistician, not a physician
- Designed to describe population averages, not assess individual health
- Never validated as a clinical diagnostic tool for individuals

### Documented limitations
- **Race/ethnicity bias:** BMI thresholds were developed primarily from European white population data. Asian populations show cardiovascular risk at lower BMI thresholds; Black populations are frequently misclassified as "obese" when metabolically healthy.
- **Gender limitations:** Does not distinguish between fat mass and lean mass — a muscular person and a sedentary person with the same height/weight have the same BMI
- **Age limitations:** Does not account for age-related changes in muscle vs. fat distribution
- **Athletic misclassification:** Consistently classifies muscular athletes as "overweight" or "obese"
- Source: JAMA, NEJM, American Journal of Clinical Nutrition — multiple published critiques of BMI as individual diagnostic tool

### The reframe
- BMI tells you your weight-to-height ratio. That is what it measures. It does not tell you your body fat percentage, your cardiovascular risk, your metabolic health, or your fitness level.
- FrameShift's argument: you deserve a tool that actually measures what you think you're measuring.

---

## SECTION 4 — THE NAVY CIRCUMFERENCE METHOD (LOCKED DEFAULT)

### What it is
- Developed by the U.S. Navy for military fitness assessment
- Uses circumference measurements (neck, waist, and hips for women) to estimate body fat percentage
- Does not require any equipment beyond a measuring tape
- Validated against DEXA scan results in multiple studies — correlation is strong enough for population use

### Why it is the default in FrameShift
- Accessible: requires only a measuring tape
- Validated: documented correlation with DEXA (clinical gold standard)
- Does not require special equipment, clinic visit, or cost
- Produces a body fat percentage — a metric that actually describes body composition

### DEXA as optional override
- Dual-energy X-ray absorptiometry (DEXA) is the clinical gold standard for body composition measurement
- FrameShift accepts DEXA results as an input override for users who have access
- DEXA requires a clinic visit and costs approximately $50–$150 depending on location
- The product does not require DEXA — it is an option for users who have it

### Accuracy note (flag for methodology)
- The Navy method is an estimate — not clinical precision
- Error range: typically ±3–4% body fat vs. DEXA
- FrameShift must be transparent about this in the product UI: "This is an estimate. For clinical-grade precision, use DEXA."

---

## SECTION 5 — PRODUCT FEATURES (FREE TIER — BUILT)

- **Body fat estimation:** Navy circumference method as default; DEXA override available
- **BMI comparison:** Shows user's BMI alongside body fat estimate — the contrast is the argument
- **Framing layer:** Contextualizes results without judgment — no "obese" or "overweight" labels used in the product interface
- **Professional mode:** Personal trainers and coaches can use FrameShift with clients — day-one professional audience
- **Zero data storage:** Nothing is stored, transmitted, or logged. All calculations happen in the browser.

---

## SECTION 6 — PAID TIER CONCEPT (NOT BUILT — PENDING VALIDATION)

### What the paid tier would add
- PDF export of body composition report
- Progress tracking over time (client-side storage only — no server)
- Additional estimation methods (Jackson-Pollock skinfold equations — requires caliper measurements)
- Printable client report for personal trainers
- Possibly: integration with existing fitness tracking apps (scope TBD)

### Validation gate
- Do not build paid tier until waitlist shows meaningful demand signal
- Waitlist mechanism: sign-up with refundable deposit (validates real intent, not just email collection)
- Refundable deposit amount: TBD
- Waitlist platform: TBD

---

## SECTION 7 — PROFESSIONAL AUDIENCE DOCUMENTATION

### Personal trainers and coaches (day-one audience)
- Current industry standard: trainers use BMI or skinfold calipers (which require training and physical contact with clients)
- FrameShift offers: a validated, non-invasive, equipment-free alternative that trainers can use or assign to clients as self-assessment
- Value proposition for trainers: reduces the awkwardness of physical measurement; gives clients agency in their own assessment; provides a defensible, validated method
- Distribution channel: personal trainer communities, NASM/ACE certification forums, fitness professional networks

### Potential B2B angle (future — not in scope for MVP)
- Corporate wellness programs
- Physical therapy intake
- Registered dietitian practice tools
- All deferred until MVP validates

---

## SECTION 8 — CBUXO FLAGS

- **Non-analytical reader is the primary user.** Health data is emotionally charged. A person using FrameShift may have complicated feelings about their body. The framing layer must protect against shame and judgment.
- **Language matters enormously:** No "obese," no "overweight," no clinical labels that have cultural baggage. Body fat percentage is a neutral measurement — frame it that way.
- **The BMI critique must be accessible:** The argument against BMI must be legible to someone who has been told their whole life that BMI is the standard. Do not assume the user arrives skeptical of BMI — the product has to earn the reframe.

---

## SECTION 9 — WHAT THIS PRODUCT DOES NOT COVER (SCOPE LIMITS)

- Medical diagnosis or clinical advice — informational tool only
- Eating disorder support or weight loss programs — FrameShift is body composition measurement, not a diet tool
- Cardiovascular risk assessment beyond what body fat percentage implies
- Nutrition or exercise programming

---

## SECTION 10 — KNOWN GAPS / FLAGS

- [ ] Paid tier: do not build until demand validation — enforce in every build session
- [ ] Validation study citations for Navy method: confirm specific papers (believed to be Hodgdon & Beckett, 1984 + follow-up military validation studies)
- [ ] DEXA correlation claim: confirm specific published correlation coefficient
- [ ] BMI critique sources: confirm JAMA/NEJM citations for race bias and athletic misclassification
- [ ] Error range claim (±3–4%): confirm against published Navy method validation studies
- [ ] UI language audit: confirm no BMI-category labels used in current free tier build
- [ ] Mobile responsiveness: confirm all features function on mobile
- [ ] Paid tier deposit amount and waitlist platform: not decided

---

## SECTION 11 — SESSION AND BUILD DECISION LOG

### Locked decisions
- Product name: FrameShift
- Free tier MVP: built
- Navy circumference method: default body fat estimation
- DEXA: optional override only
- Zero data storage: non-negotiable product principle
- Personal trainers/coaches: day-one professional audience
- Paid tier: deferred pending waitlist demand validation

### Open decisions
- Paid tier features: scoped above, not locked — validate demand first
- Waitlist mechanism: refundable deposit concept noted, platform and amount TBD
- B2B angle: noted for future, not in scope

### Next session type
**Demand validation setup** — implement waitlist with refundable deposit before any paid tier scoping
**Type 2 build (Claude Code)** only after validation gate is addressed

---

*End of fact pack. Compiled May 2026. FrameShift is a separate product from Alterrell Interactive. No editorial calendar dependency. Build status: free tier MVP complete; paid tier deferred.*
