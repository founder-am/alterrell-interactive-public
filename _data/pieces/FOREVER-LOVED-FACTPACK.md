# FOREVER LOVED — DATA FACT PACK & PRODUCT STRUCTURE
**Separate product — not Alterrell Interactive**
**Internal reference only. Not for publication.**
**Compiled: May 2026**

---

## SECTION 1 — PRODUCT IDENTITY (LOCKED)

**Product name:** Forever Loved
**Tagline:** TBD
**Product type:** Free, tip-supported grief logistics web tool
**URL:** TBD (Netlify deployment)
**Stack:** Vite + React + Tailwind CSS
**Deployment:** Netlify (auto-deploy ~30 seconds after push)
**Repo:** GitHub (separate from Alterrell Interactive public repo)
**Local setup:** GitHub Desktop + Claude Code confirmed
**Support model:** Free — no paywall. Tip-supported via Ko-fi (`ko-fi.com/alterrell`)
**Status:** Free tier MVP built. Three-tab structure implemented.
**Relationship to Alterrell Interactive:** Separate product. Not editorially or structurally connected to the platform. Shares Ko-fi link but has its own identity.

---

## SECTION 2 — THE PRODUCT ARGUMENT IN ONE SENTENCE

When someone dies, the people who loved them are immediately handed a logistics problem they have never been trained for — and the institutions that profit from grief (funeral homes, probate courts, insurance companies) are not organized to help. Forever Loved is.

**Two anchor claims:**
1. Grief logistics are genuinely complex — there are documented, time-sensitive tasks that must be completed and most families do not know what they are or in what order
2. The tools that exist for grief logistics are either paywalled, institutional, or clinical — none are built with the emotional reality of a person in acute grief in mind

---

## SECTION 3 — PRODUCT STRUCTURE (LOCKED)

### Three-tab architecture
**Tab 1: Admin**
- Death certificate ordering and distribution
- Notifying Social Security, banks, pension providers, insurance companies
- Closing accounts and canceling subscriptions
- Estate and probate basics
- Key document checklist

**Tab 2: Making Arrangements**
- Funeral home selection and what to ask
- Burial vs. cremation decision framework (not prescriptive — informational)
- Obituary builder with live preview
- Donations/flowers block — where to direct people
- Ready-to-send messages (pre-written templates for notifying friends, employers, schools)

**Tab 3: Helpful Resources**
- Grief support organizations
- Legal resources (probate, estate, small estate affidavit)
- Financial resources (survivor benefits, life insurance claims)
- Ko-fi tip link — integrated into resources tab naturally

---

## SECTION 4 — FEATURE DOCUMENTATION

### Obituary builder (built)
- Live preview as user types
- Fields: name, dates, surviving family, life summary, service details
- Output: ready-to-copy formatted obituary text
- Does NOT store any data — client-side only, zero data transmission

### Donations/flowers block (built)
- Allows family to specify preferred charities or florists
- Pre-formatted language for sharing in notifications

### Ready-to-send messages (built)
- Pre-written message templates for:
  - Notifying close friends
  - Notifying employer / HR
  - Notifying child's school
  - General social notification
- User edits name/dates inline; copies and sends

### Ko-fi integration
- Tip link embedded in Helpful Resources tab
- Not prominently featured — present but not the focus
- Product is free; tip is offered as an option for those who found value

---

## SECTION 5 — PRODUCT PRINCIPLES

- **Zero data storage.** The product stores nothing. No account, no login, no server-side data. Everything lives in the user's browser session.
- **Emotionally intelligent design.** The product acknowledges that users are in grief. Tone is warm, direct, and never clinical. Nothing assumes the user has capacity for complex decisions.
- **Non-prescriptive.** The tool presents options and information — it never tells the user what to do. Burial vs. cremation, religious vs. secular — all framed as decisions that belong to the family.
- **Accessibility first.** Text sizes, contrast ratios, and reading level are calibrated for someone under stress who may not be at full cognitive capacity.

---

## SECTION 6 — CBUXO FLAGS

- **Non-analytical reader is THE user.** This product has no analytical audience. Every person using this tool is in acute grief and has likely never done this before. Every word, every label, every button must be readable by someone who is not okay.
- **Emotional arc:** This is not recognition → outrage. It is: overwhelm → one clear next step → small exhale. The product does not need to mobilize. It needs to reduce cognitive load.
- **CBUXO priority:** Contrast, font size, and label clarity are life-or-death design decisions for this product. More than any other Alterrell property.

---

## SECTION 7 — TECHNICAL DOCUMENTATION

### Stack
- **Framework:** Vite + React
- **Styling:** Tailwind CSS
- **Deployment:** Netlify
- **Version control:** GitHub Desktop (local) + GitHub repo
- **Local dev:** Claude Code confirmed for build sessions

### Data architecture
- **Zero server-side storage.** This is a product principle, not a technical limitation.
- All form data (obituary builder, message templates) lives in React state only
- No cookies, no localStorage, no analytics that capture personal data
- Ko-fi link is an outbound link — no integration beyond the href

### Paid tier status
- **Not built.** Pending demand validation via waitlist with refundable deposit.
- Paid tier concept: additional templates, PDF export of obituary, potentially a printable checklist package
- Do not build paid tier until waitlist shows meaningful demand signal

---

## SECTION 8 — WHAT THIS PRODUCT DOES NOT COVER (SCOPE LIMITS)

- Legal advice (the tool provides information, not advice — all legal content is framed as "questions to ask" not "here is what to do")
- Financial advice (same framing — informational only)
- Grief counseling or mental health support (the product acknowledges grief and points to resources; it does not attempt to provide support)
- International probate or estate law (U.S. only for MVP)

---

## SECTION 9 — KNOWN GAPS / FLAGS

- [ ] Paid tier: do not build until waitlist demand validation — flag explicitly in every build session
- [ ] Tailwind CSS: confirm all utility classes used are in base stylesheet (no compiler required — platform constraint)
- [ ] Ko-fi link placement: confirm it reads naturally in resources tab and does not feel like a monetization push
- [ ] Accessibility audit: has a formal contrast/font-size check been run against WCAG standards?
- [ ] Mobile responsiveness: confirm all three tabs are fully functional on mobile (primary use case is likely on phone in a moment of crisis)
- [ ] Tagline: not locked
- [ ] URL: confirm Netlify deployment URL

---

## SECTION 10 — SESSION AND BUILD DECISION LOG

### Locked decisions
- Product name: Forever Loved
- Free, tip-supported model — no paywall ever on free tier
- Zero data storage — non-negotiable product principle
- Three-tab structure: Admin / Making Arrangements / Helpful Resources
- Stack: Vite + React + Tailwind CSS / Netlify
- Obituary builder with live preview: built
- Ko-fi integration in resources tab: built
- Paid tier: deferred pending demand validation

### Open decisions
- Tagline: not locked
- URL: confirm
- Paid tier features: not scoped until waitlist validation
- Accessibility audit: not confirmed as completed
- Mobile QA: not confirmed as completed

### Next session type
**Type 2 build (Claude Code)** — any fixes, mobile QA, or accessibility improvements
**Demand validation setup** — waitlist with refundable deposit concept needs implementation before paid tier scoping begins

---

*End of fact pack. Compiled May 2026. Forever Loved is a separate product from Alterrell Interactive. No editorial calendar dependency. Build status: free tier MVP complete.*
