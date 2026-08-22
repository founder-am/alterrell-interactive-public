# OG Images

Social share preview images, referenced by the `og:image` meta tag on each page.
The intended size is 1200×630px.

## Present

Measured by reading each file's PNG header on 2026-08-21:

- `concert-tax.png` — Female Musicians Earn Less But Share More — **1200 × 630**
  (52,081 bytes)
- `fast-food-sodium.png` — Fast Food's Hidden Sodium Tax — 1760 × 674
  (189,587 bytes)
- `hub.png` — hub page — 1982 × 1232 (247,125 bytes)
- `naming.png` — That Name Is So Ghetto — 1768 × 752 (178,322 bytes)

## Outstanding

None. Every piece with a built page has an og image on disk.

## Known: three of the four files are off-spec

`concert-tax.png` is the only file that measures 1200 × 630. The other three
were each cropped ad hoc from a screenshot and none of them matches the stated
size or any of the others: 1760 × 674, 1982 × 1232 and 1768 × 752 are three
different shapes. Re-rendering them to 1200 × 630 is not done here and needs an
AMA ruling, because it changes what every existing share of those three URLs
renders as.

## Generating one

Two methods have been used, and they do not produce the same thing.

1. **Screenshot crop** (the three off-spec files above). Screenshot the hero
   stat section of the piece at 1200px viewport width, crop to 630px height,
   save as PNG named for the piece slug. This is what produced the mismatched
   sizes.

2. **Live share card, framed** (`concert-tax.png`, 2026-08-21). The piece's own
   `.ai-share-card` element is photographed where it renders, on the Share tab,
   and centred on a 1200 × 630 field painted `var(--dark-section)` #16141f —
   the card's own background, so no new colour enters. The card is scaled up
   intact rather than cropped: it measures 380 × 227.23 CSS px, a ratio of
   1.672 against the target's 1.905, so clipping to the target ratio would cut
   the context sentence or the footer. Every string in the image is the live
   card's own; nothing is authored or shortened. The script is
   `_tools/scratch/bw-og-concert-tax-2026-08-21.cjs`.

`tools/ai-card-studio.html` cannot generate these. It calls html2canvas with a
hardcoded `{width:300, height:280, scale:1}` — it is a 300×280 carousel-card
studio and supports no other output size.

This list is measured, not aspirational. Every filename under Present exists on
disk at the dimensions stated; anything that does not exist belongs under
Outstanding.
