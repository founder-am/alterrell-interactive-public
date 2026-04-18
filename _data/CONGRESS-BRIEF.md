# CONGRESS PART 1A — PIECE BRIEF
**Platform:** Alterrell Interactive (civic lane)
**Status:** Architecture locked · Hook locked · Not yet built
**Last updated:** April 16, 2026
**URL target:** interactive.alterrell.com/congress-salary/
**Timing:** Q3/Q4 2026, general election window Sept–Oct

## OPEN QUESTIONS / ASSUMPTIONS TO VERIFY BEFORE BUILD
- [ ] $174,000 congressional salary — confirm this is current.
  Has it changed? Last raise was 2009. Confirm no COLA
  adjustments have been made since.
- [ ] State minimum wage data — needs a current research pass.
  Some states have increased minimum wage since
  the data was originally compiled.
- [ ] "Why would anyone raise $2M to earn $174K?" hook —
  confirm the average fundraising cost for a House seat
  (the $2M figure). Source: OpenSecrets or FEC data.
- [ ] BEA regional groupings used in the piece —
  confirm these are the correct groupings and
  that they're still the standard reference.
- [ ] The "express lane" visual (minimum wage workers
  vs. congressional pay raise process) —
  confirm the number of years since Congress last
  raised the federal minimum wage ($7.25 since 2009).
- [ ] Moulton vs. Markey primary (only race with 20+ age gap) —
  confirm this race is still happening and
  the age gap figures are accurate.
  Moulton 47 vs. Markey 79 as of last confirmed data.

## THESIS (locked)
"Why would anyone raise $2M to earn $174K?
Because $174K isn't the salary. It's the cover charge."

## LOCKED DECISIONS
- Series split into independently deployable parts
- Part 1A: salary/minimum wage comparison + state calculator
- General election window, NOT primaries
- One primary exception: MA Moulton/Markey if age gap holds
- BEA regional groupings (not cultural regions)
- State-level cards, not individual member profiles
- "Congressional minutes per worker hour" as metric frame

## INTERACTIVE COMPONENTS (locked)
1. Four-line indexed chart: congressional pay vs.
   federal minimum wage vs. inflation vs. median income
2. State calculator: "How many hours at your state's
   minimum wage to match one day of congressional pay?"
3. Time warp receipt: what $174K bought in 2009 vs. now
4. Express lane visual: how many times minimum wage
   has been debated vs. raised since 2009
5. Fundraising closer: cost to win vs. salary earned

## DESIGN
Alterrell Interactive civic lane: teal accent.
Dark hero. Tables and calculators on white/paper backgrounds.

## DO NOT
- Do not build until salary and minimum wage data
  are verified current
- Do not target primaries — general election window only
- Do not build individual member profiles
- Do not deploy before September 2026