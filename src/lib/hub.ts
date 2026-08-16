/**
 * Hub card list — one source of truth for what the hub shows and what the
 * piece route builds.
 *
 * Three rules live here, and nowhere else:
 *
 * 1. BUILT_SLUGS names every piece src/pages/pieces/[slug].astro builds a
 *    route for.
 *
 * 2. LINKED_SLUGS names every piece whose hub card carries an href. It is a
 *    subset of BUILT_SLUGS, so a card can never point at a page that was not
 *    built.
 *
 * 3. EXTRA_CARDS names every piece that has no .mdx file in
 *    src/content/pieces but must still appear on the hub. Without this the
 *    card would silently disappear the moment the piece stopped being a
 *    hand-written folder, which is exactly what happened to Where's Beyoncé
 *    on the previous hub: it had a page, and no card.
 *
 * GO-LIVE SET, ruled by AMA 2026-08-13, narrowed by AMA 2026-08-16.
 * Two pieces ship: concert-tax and fast-food-sodium. naming came off the live
 * list on 2026-08-16 and now sits where wheres-beyonce and gay-uncles already
 * sat — unfinished, and so no page and no card. There are no coming-soon cards
 * on the hub at all; the hub shows exactly the pieces you can read.
 *
 * The three unfinished .mdx files stay in src/content/pieces. They are not
 * deleted and not archived — they are work in progress. They are simply absent
 * from both lists, so nothing builds them and nothing points at them. Adding
 * one back is one line in each list.
 *
 * BUILT_SLUGS and LINKED_SLUGS are equal again, which restores the invariant
 * in both directions: a card can never point at a page that was not built,
 * and no page is built that nothing points at. They stayed separate only
 * while four pieces were built-but-unlinked, which ended with this ruling.
 */

/** Every piece with a built route. */
export const BUILT_SLUGS = [
  'concert-tax',
  'fast-food-sodium',
] as const;

/** Every piece whose hub card carries an href. Equal to BUILT_SLUGS. */
export const LINKED_SLUGS = BUILT_SLUGS;

const unbuilt = (LINKED_SLUGS as readonly string[]).filter(
  (slug) => !(BUILT_SLUGS as readonly string[]).includes(slug),
);
if (unbuilt.length > 0) {
  throw new Error(
    `LINKED_SLUGS points at pieces with no built route: ${unbuilt.join(', ')}`,
  );
}

export type HubCard = {
  slug: string;
  title: string;
  description: string;
  /** Footer stamp. Omitted when no source in the repo carries one. */
  stakes?: string;
  /** Left border colour. Omitted when no source in the repo names a category. */
  category?: 'industry' | 'culture' | 'govt' | 'health';
};

/**
 * Cards with no .mdx behind them.
 *
 * Empty since 2026-08-13. Where's Beyoncé was the only entry; it now has
 * src/content/pieces/wheres-beyonce.mdx, so its card comes from the
 * collection like every other one and would be a duplicate here. The
 * mechanism stays because the failure it exists to prevent has not gone
 * away: a piece with a page and no card.
 *
 * That .mdx still carries no category and no stakes, for the reason this
 * entry recorded — the archived file names neither, so nothing is invented.
 */
export const EXTRA_CARDS: HubCard[] = [];

export function isLinked(slug: string): boolean {
  return (LINKED_SLUGS as readonly string[]).includes(slug);
}

export const CATEGORY_CLASS: Record<string, string> = {
  industry: 'hub-card--industry',
  culture: 'hub-card--culture',
  govt: 'hub-card--govt',
  health: 'hub-card--health',
};
