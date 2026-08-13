/**
 * Hub card list — one source of truth for what the hub shows and what the
 * piece route builds.
 *
 * Two rules live here, and nowhere else:
 *
 * 1. LINKED_SLUGS names every piece that has a built page. A hub card carries
 *    an href if and only if its slug is in this list, and
 *    src/pages/pieces/[slug].astro builds a route if and only if its slug is
 *    in this list. The two cannot drift: a card can never point at a page
 *    that was not built, and a page is never built that nothing points at.
 *
 * 2. EXTRA_CARDS names every piece that has no .mdx file in
 *    src/content/pieces but must still appear on the hub. Without this the
 *    card would silently disappear the moment the piece stopped being a
 *    hand-written folder, which is exactly what happened to Where's Beyoncé
 *    on the previous hub: it had a page, and no card.
 */

/** Every piece with a built page. Everything else renders coming-soon. */
export const LINKED_SLUGS = ['concert-tax'] as const;

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
 * Where's Beyoncé: title and description are lifted verbatim from its own
 * page, archived at _archive/legacy-2026-08-13/wheres-beyonce/index.html
 * (<h1 class="ai-hero-hed"> and <meta name="description">). That file names
 * no category and no stakes line, so this card carries neither rather than
 * carrying an invented one.
 */
export const EXTRA_CARDS: HubCard[] = [
  {
    slug: 'wheres-beyonce',
    title: "Where's Beyoncé?",
    description:
      'White wealth is framed as voluntary warmth. Black wealth is treated as obligatory debt. This tool makes the architecture visible.',
  },
];

export function isLinked(slug: string): boolean {
  return (LINKED_SLUGS as readonly string[]).includes(slug);
}

export const CATEGORY_CLASS: Record<string, string> = {
  industry: 'hub-card--industry',
  culture: 'hub-card--culture',
  govt: 'hub-card--govt',
  health: 'hub-card--health',
};
