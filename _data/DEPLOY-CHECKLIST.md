# DEPLOY CHECKLIST
Read this file at the start of every Claude Code session.
Confirm every applicable item before outputting any file.

---

## EVERY COMMIT — PLATFORM
- [ ] alterrell-interactive.css not modified (unless this IS a CSS-only commit)
- [ ] YouTube links: color rgba(248,246,241,0.88) font-weight 500 — never muted
- [ ] Substack links: color rgba(248,246,241,0.88) font-weight 500 — never muted
- [ ] Ko-fi uses $ not ☕ anywhere in any file
- [ ] No purple #1e1040 used as background — use #0a0a12 for Obsidian Futures

---

## NEW PIECE
- [ ] OG meta tags present (title, description, image, url, twitter:card)
- [ ] Breadcrumb present
- [ ] Journey block present — all 4 items (Watch, Read, Explore, $ Ko-fi)
- [ ] Journey block position confirmed: appears after tab nav, before first .ct-section — not after tab sections
- [ ] Share block present — on Overview tab or most emotionally compelling tab
- [ ] Section floor nav on every tab and sub-tab (margin-top: auto)
- [ ] Screenshot nudge below every chart (DM Mono, right-aligned, muted)
- [ ] Hero headline renders on ONE line at all viewport widths
- [ ] Subhead runs full editorial container width — never capped at 2/3
- [ ] No [AMA to paste] placeholders remaining anywhere
- [ ] No em dashes in copy
- [ ] No "it is not incidental" / "it is worth noting" / "this is not X" AI tells
- [ ] Tables and dense copy on white or paper #f8f6f1 background — never dark
- [ ] Hub card added in same commit as piece

## OBSIDIAN FUTURES PIECES
- [ ] Background #0a0a12 (never #1e1040)
- [ ] Accent gold #E8B923
- [ ] T-charts and comparison tables: white or paper background, never dark card
- [ ] Surcharge/ledger visuals: white or paper background, never dark card

## ALTERRELL INTERACTIVE PIECES  
- [ ] Accent teal #0a7c72
- [ ] Tables on white or paper background only

---

## TAB ARCHITECTURE
- [ ] New pieces use show/hide tabs (hidden attribute pattern)
- [ ] Sub-tabs use pill tray: background #161620, active chip #E8B923/#0a7c72
- [ ] Accordions: first section open by default, rest closed
- [ ] Scroll-spy only on legacy pieces (sodium, naming) — do not apply to new pieces

---

## PRE-PUSH
- [ ] Opened file in local browser and checked visually
- [ ] GitHub Desktop diff reviewed — only intended files changed
- [ ] No unintended changes to alterrell-interactive.css
- [ ] If new piece: hub card change confirmed in same diff

---

## CURRENT SITE STATUS (update when pieces ship)
- Hub (index.html): LIVE
- Fast Food Sodium: HIDDEN (copy voice pass pending)
- What's in a Name Part 1: LIVE
- What's in a Name Part 0: BUILT, NOT DEPLOYED
- What's in a Name Part 2: BUILT, NOT DEPLOYED  
- Concert Tax: IN PROGRESS — fixes pending before deploy