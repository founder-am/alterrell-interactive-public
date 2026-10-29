
# Where's Beyoncé? (Piece Brief)
**Release target:** Q3 2026 (hurricane season)

## Thesis
White wealth = voluntary warmth, Black wealth = obligatory debt. 

## Emotional Arc
Recognition before outrage. The "oh" moment — Dolly/Oprah, same fund structure, opposite framing — must land before the user has to click anywhere. Not a shame database.

## Tab Structure
1. **Overview:** High-level bullets (government abdication → Dolly/Oprah → Black Tax → domicile = obligation → tool intro)  
2. **Data & Headlines:** Headline comparison table
3. **The Tool:** State selector with wealth database (V1 static), Beyoncé domicile dual-use row
4. **Sources:** Full verified citation list

## Overview Tab Essay Beats 
1. **Hook:** The scene every disaster produces — Black artist tagged before she's checked her family is safe. The man who owns the team in her hometown is not mentioned.
2. **Mechanism:** Dolly vs. Oprah — same fund, same ask, different reaction. Only variable: race. 
3. **The Black Tax:** Name the structure. The cultural inheritance that renders Black women responsible for community survival regardless of their own circumstances.
4. **Domicile = obligation:** Thomas Peterffy chose Florida's no-income-tax structure. He chose Florida. When Florida floods, he is not asked.
5. **The tool:** Equal asks. Equal visibility. What accountability looks like when it follows the money.
6. **Close:** Shame is an inefficient, inequitable mechanism. Until government funds disaster response as a public obligation, someone will be asked. This tool asks everyone.

<voice_note>AMA to write Overview copy from this beat outline. Route to Claude for visual pairing and component build.</voice_note>

## Visuals
**2x2 framework:** Asked/praised, asked/scrutinized, never asked quadrants. Layout TBD. 
<voice_note>Revisit 2x2 visual to simplify layout and strengthen "never asked" quadrant context.</voice_note>

**Entertainer bar chart:**  
X-axis: Entertainer  
Y-axis: Disaster donation as % of net worth
- Scrutinized (red #C0392B): Beyoncé, Oprah 
- Praised (platform teal #0a7c72): Dolly, Taylor, Wallen, Underwood

**Headline sentiment table:**
| Celebrity | Disaster | Amount | Headline | Sentiment |
|-----------|----------|--------|----------|-----------|
| Beyoncé | Hurricane Harvey | $2M | Beyoncé Called Out for $2M... | <reaction-tag class="tag-cold">COLD</reaction-tag> |
| Oprah | Maui wildfires | $10M | No One Knows if Oprah Has Donated Yet | <reaction-tag class="tag-cold">COLD</reaction-tag> |
| Dolly Parton | Tennessee floods | $12.5M | Dolly Parton Hailed for Generous... | <reaction-tag class="tag-warm">WARM</reaction-tag> |
| Morgan Wallen | Tennessee floods | $0 | Morgan Wallen Has Not Yet Donated... | <reaction-tag class="tag-neutral">NEUTRAL</reaction-tag> |

<voice_note>Scrape sentiment table source URLs into Sources tab.</voice_note>

**Billionaire "never asked" cards:**  
2-col grid: 380px white/paper left panel with `$12.5M =` benchmark, 380px right with colored verdict
- Ellison: `$12.5M = 11 minutes` (red)
- Fertitta: `$12.5M = 3 hours` (red) 
- Oprah: `$12.5M = 1 day` (teal contrast)

## Design
**Lane:** Obsidian Futures — deep indigo `#1e1040` accent color (NOT standard teal)  
**Piece-local variable to define:** `--obsidian: #1e1040;`  
**Hero:** Spectral 700 italic headline, dark/dramatic treatment  
**Stat numbers:** DM Serif Display — use for wealth ratio comparisons  
**Comparison table:** white background, standard `.ai-table` classes — never dark  

## Handoff Checklist
- [ ] Overview essay written (AMA voice pass) 
- [ ] 2x2 visual revisited and rebuilt
- [ ] Headline table source URLs scraped into Sources tab
- [ ] Type 2 session to build Overview tab (AMA essay + locked visuals)
- [ ] Copy pairing sessions for Data and Sources tabs
- [ ] Pre-deploy QA and checklist
