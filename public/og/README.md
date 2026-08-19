# OG Images

Social share preview images, 1200×630px, referenced by the `og:image` meta tag on each page.

## Present

Measured by `ls public/og/` on 2026-08-19:

- `fast-food-sodium.png` — Fast Food's Hidden Sodium Tax (189,587 bytes)
- `hub.png` — hub page (247,125 bytes)
- `naming.png` — That Name Is So Ghetto (178,322 bytes)

## Outstanding

- `concert-tax.png` — **outstanding.** It does not exist in this directory.
  Until it exists, Female Musicians Earn Less But Share More falls back to no
  image: the piece ships without an `og:image`, and a share of that URL renders
  as a text-only card.

## Generating one

Screenshot the hero stat section of the piece at 1200px viewport width, crop to
630px height, save as PNG into this directory named for the piece slug.

This list is measured, not aspirational. Every filename under Present exists on
disk; anything that does not exist belongs under Outstanding.
