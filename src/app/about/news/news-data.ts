/**
 * Single source of truth for News content — the grid on `/about/news` and
 * the article template at `/about/news/[slug]` both read from here so an
 * article's data only has to be entered once. Placeholder copy only, no
 * real press content yet.
 */
export interface NewsArticleData {
  slug: string;
  title: string;
  /** Display string, e.g. "Aug 11, 2026 | 5:57pm" — pre-formatted since this is static placeholder data. */
  date: string;
  /** Short teaser shown on the News grid card. */
  description: string;
  /** Full article copy — one paragraph per entry. */
  body: string[];
  image?: string;
  imageAlt?: string;
  isNew?: boolean;
  /** When set, the card's CTA points at this external link/label instead of the article template. */
  external?: { href: string; buttonLabel: string };
}

const LOREM_1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const LOREM_2 =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodo consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

export const NEWS_ARTICLES: NewsArticleData[] = [
  {
    slug: "innerverse-announced",
    isNew: true,
    title: "Innerverse Announced",
    date: "Aug 11, 2026  |  5:57pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    body: [LOREM_1, LOREM_2],
    image: "/news/forest-background.png",
    imageAlt: "A glowing forest at dusk, the setting for Innerverse.",
  },
  {
    slug: "meet-the-team",
    isNew: true,
    title: "Meet the Team!",
    date: "Aug 4, 2026  |  2:15pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    body: [LOREM_1, LOREM_2],
    external: { href: "#", buttonLabel: "Watch on YouTube" },
  },
  {
    slug: "apa",
    title: "A.P.A.",
    date: "Jul 22, 2026  |  11:40am",
    description:
      "We were recently interviewed by the American Psychological Association for our new release; Innerverse! Take a look.",
    body: [
      "We were recently interviewed by the American Psychological Association for our new release; Innerverse! Take a look.",
      LOREM_1,
    ],
    external: { href: "#", buttonLabel: "Visit Site" },
  },
  {
    slug: "first-convention",
    title: "First Convention",
    date: "Jul 9, 2026  |  4:30pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    body: [LOREM_1, LOREM_2],
  },
  {
    slug: "studio-update",
    title: "Studio Update",
    date: "Jun 28, 2026  |  9:05am",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    body: [LOREM_1, LOREM_2],
  },
  {
    slug: "behind-the-scenes",
    title: "Behind the Scenes",
    date: "Jun 14, 2026  |  1:50pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    body: [LOREM_1, LOREM_2],
  },
  {
    slug: "community-spotlight",
    title: "Community Spotlight",
    date: "Jun 1, 2026  |  6:20pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    body: [LOREM_1, LOREM_2],
  },
  {
    slug: "award-nomination",
    title: "Award Nomination",
    date: "May 19, 2026  |  10:10am",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
    body: [LOREM_1, LOREM_2],
  },
];

export function getNewsArticle(slug: string): NewsArticleData | undefined {
  return NEWS_ARTICLES.find((article) => article.slug === slug);
}
