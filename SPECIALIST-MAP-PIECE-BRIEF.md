# PIECE BRIEF: The Appointment You Didn't Know to Make
**Platform:** Alterrell Interactive — Civics & Policy lane
**Status:** Research complete · Brief locked · Not yet in build
**Last updated:** March 19, 2026
**Series:** Standalone (soft setup for Therapy Navigator, Piece 2)

---

## Tagline
*How specialist care works, who learns to use it, and how to make your benefits count.*

---

## Editorial North Star
This piece does not indict a system. It hands people a map they were never given.
The argument: navigating specialist care is a learned skill, and who teaches you is not random.
Being without resources meant you didn't have access to that knowledge — not that the system
was designed to exclude you. Here's us showing you the way.

**Emotional arc:** Recognition → Revelation → Action
**User outcome:** "I am going to schedule an appointment to better my health."

---

## Voice Seed
AMA's Substack post "Annual Benefits Enrollment is Here" is the emotional rough cut.
The "I called my mother" moment is the recognition beat. The McDonald's/Applebee's/fine
dining tier observation is the structural argument in plain language. Both carry forward.

---

## Tab Structure (locked)

### Tab 1 — The Map Nobody Gave You
Editorial entry point. Short, personal, punchy.
- The knowledge-as-inheritance frame: who you know determines what you know to do
- Plain statement of the argument: specialist navigation is a class and social capital issue
- One visceral stat: TBD — needs research pass on specialist utilization by income
- The tier observation (McDonald's → Applebee's → fine dining) reframed as system, not complaint
- Transition into the tool: "Here's the map."

### Tab 2 — Find Your Concern (The Tool)
Self-directed explorer. Non-linear. People move at their own pace.
No invasive questions. Full landscape visible at once.
Built as accordion cards, one per concern category — modeled on sodium franchise build.

**Concern card structure (each accordion):**
- Relatable symptom signal as the header (conversational, not clinical)
- Who you see
- What they typically do
- Tests to ask for by name
- What to expect at the appointment
- Referral note: plan-dependent — prompt to call benefits line
- Family history layer: embedded inside each card, not a separate entry point
  ("This also applies if you have a family history of X")

**Concern categories (draft — to be confirmed with research):**
1. "People tell you that you snore" → Pulmonologist / Sleep specialist
2. "You have a mole you've been avoiding" → Dermatologist
3. "You're sometimes constipated, sometimes not" → Gastroenterologist
4. "You're tired all the time even when you sleep enough" → Endocrinologist / PCP
5. "Your vision has changed but you haven't updated your glasses" → Ophthalmologist vs. Optometrist
6. "You've been having headaches or ear issues" → ENT
7. "Your weight has changed and you don't know why" → Endocrinologist
8. "You've been wanting to talk to someone but don't know where to start" → Therapist/Psychiatrist
   (Soft handoff to Piece 2 — no deep dive here)

**Family history layer triggers (embedded per card):**
- Diabetes → Endocrinologist, fasting blood panel annually
- Heart disease / hypertension → Cardiologist, PCP monitoring
- Cancer (skin, colon, breast) → Dermatologist, Gastroenterologist, OB/GYN
- Mental health conditions → Therapist / Psychiatrist

### Tab 3 — Before You Call (Benefits Checklist)
Sits between concern finder and action. The empowerment move.
We give people the exact words to find out what their plan covers.
Prompt: call your member services number (on the back of your insurance card).

**Checklist questions to ask:**
- Do I need a referral to see a [specialist]?
- Is [specialist name] in my network?
- What is my current deductible and how much have I met?
- What is my out-of-pocket maximum?
- Does my plan cover [specific test — e.g. colonoscopy, sleep study]?
- Is telehealth covered for this specialist type?

Note on referrals: not all plans require them. PPOs typically do not.
HMOs typically do. This varies — call to confirm.

After the call: return to Tab 2 with your answers and book.

**Results storage guidance (embedded here):**
Where to keep your results if you're seeing multiple doctors:
- A shared notes doc or folder (Google Drive, Apple Notes, etc.)
- What to track: test name, date, result, ordering doctor
- Why it matters: specialists often don't share records automatically

### Tab 4 — The Cost of Not Going
The structural argument. Quiet, not accusatory.
- The deductible front-loading insight: hitting your deductible in January vs. December
  means the same care costs you radically different amounts
- The urgent care vs. primary care cost gap (data needed)
- The cost-of-inaction narrative: the diabetes example
  Frame: "The person who went routinely got a heads up two years before it became a problem.
  Here's what that appointment looks like." Not: "you should have gone sooner."
- One forward-looking number: provider shortage projections — why finding someone good now matters
- The wait time reality: some specialists have 6–10 month waits for good providers.
  The best time to book was last year. The second best time is now.

### Tab 5 — Sources & Methodology
Standard Alterrell footer treatment. Collapsible.

---

## The Interactive Tool — Full Spec

**What it is:** Self-directed concern explorer. Not a quiz. Not a decision tree.
People see the full accordion landscape and open what's relevant to them.

**What it is not:**
- A spend calculator (requires saved data — out of scope for v1)
- A diagnostic tool (explicitly disclaimed)
- A quiz with invasive health questions

**Build reference:** Sodium piece franchise accordion. Same interaction model.

**Tool does not require saved data.** Checklist is copyable/printable.
Family history layer is embedded inside concern cards, not a separate entry.

---

## Data Still Needed (Research Pass Required Before Build)

- Specialist utilization rates by income bracket (Tab 1 stat)
- Urgent care vs. primary care average cost differential
- Average wait times by specialist type
- Referral requirement breakdown: PPO vs. HMO by prevalence
- Colonoscopy age recommendation (currently 45 — confirm current guideline)
- Ophthalmologist vs. optometrist distinction — scope of practice by state

---

## Piece 2 Handoff Note
The therapy navigator lives inside Tab 2 as one concern card only.
It does not go deep. It names the entry point and points forward.
Full Piece 2 brief to be written in a separate session.

Piece 2 user outcome (locked for reference):
"I understand what a therapist does and does not do. I know it will take me
X tries to find someone. I know what I want and under what conditions.
I will give it 3 sessions and if the vibe is off, I start over."

---

## Design System Notes
- Tab structure: anchor-scroll with scroll-spy (standard Alterrell pattern)
- Accordion build: modeled on sodium franchise cards
- Typography: DM Serif Display for concern card headers, DM Sans for body
- Colors: teal for action prompts, orange for cost/urgency signals
- No dark backgrounds on any tab with dense copy or the tool
- 44px minimum touch targets on all accordion triggers
- Mobile-first: accordion stacks cleanly at 375px
- Breadcrumb nav: standard Alterrell pattern
- Journey block: Interactive / YouTube / Substack (every piece)
- Collapsible methodology footer: standard

---

## Editorial Calendar Placement
Not yet scheduled. Hub and Sodium ship first (Q1 2026).
This piece is in research/brief phase only.
Do not begin build until Hub and Sodium are deployed and confirmed.

---

## DO NOT
- Do not build a spend calculator in v1 — requires persistent storage
- Do not ask invasive health questions in the tool
- Do not frame the cost-of-inaction argument as blame or shame
- Do not go deep on therapy — one card only, Piece 2 owns that story
- Do not begin build without a research pass on the data gaps listed above
- Do not use dark backgrounds under the accordion tool or any dense copy tab

