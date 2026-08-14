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
 * CONFLICT, PRINTED RATHER THAN RESOLVED SILENTLY (bench rule 13).
 * Until 2026-08-13 there was one list, and its stated invariant ran both ways:
 * "a card can never point at a page that was not built, and a page is never
 * built that nothing points at." AMA's acceptance list for the 2026-08-13
 * session asks for both of these at once:
 *   line 7  each of the five pieces renders at /pieces/<slug>/
 *   line 8  the hub shows five cards, only concert-tax carries an href
 * Those cannot both hold under one list. The second half of the old invariant
 * is the half that loses: four pages are now built that nothing on the hub
 * points at. What that costs is that the four ported pieces are reachable by
 * anyone who types or shares the URL while their cards still read coming-soon,
 * so they are public before AMA has read them. The first half is kept intact —
 * LINKED_SLUGS is checked against BUILT_SLUGS below.
 */

/** Every piece with a built route. */
export const BUILT_SLUGS = [
  'concert-tax',
  'fast-food-sodium',
  'gay-uncles',
  'naming',
  'wheres-beyonce',
] as const;

/** Every piece whose hub card carries an href. A subset of BUILT_SLUGS. */
export const LINKED_SLUGS = ['concert-tax'] as const;

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
