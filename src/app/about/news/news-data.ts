import fs from "node:fs";
import path from "node:path";

/**
 * Single source of truth for News content — the grid on `/about/news` and
 * the article template at `/about/news/[slug]` both read from here so an
 * article's data only has to be entered once. Backed by the `.md` files in
 * `content/news/`, not hardcoded — adding a new article is just adding a
 * new file there.
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

const NEWS_CONTENT_DIR = path.join(process.cwd(), "content", "news");

/**
 * Minimal `key: value` frontmatter parser — no quoting/nesting support, just
 * enough for this flat article schema. Keeps the content format dependency-free
 * rather than pulling in a full YAML parser for a handful of scalar fields.
 */
function parseFrontmatter(raw: string): { fields: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) {
    return { fields: {}, body: raw.trim() };
  }

  const [, frontmatter, content] = match;
  const fields: Record<string, string> = {};

  for (const line of frontmatter.split(/\r?\n/)) {
    const lineMatch = line.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (!lineMatch) continue;
    const [, key, rawValue] = lineMatch;
    const value = rawValue.trim().replace(/^"(.*)"$/, "$1");
    fields[key] = value;
  }

  return { fields, body: content.trim() };
}

function slugFromFilename(filename: string): string {
  return filename.replace(/\.md$/, "").replace(/^\d+-/, "");
}

function loadNewsArticles(): NewsArticleData[] {
  const filenames = fs
    .readdirSync(NEWS_CONTENT_DIR)
    .filter((filename) => filename.endsWith(".md"))
    .sort();

  return filenames.map((filename) => {
    const raw = fs.readFileSync(path.join(NEWS_CONTENT_DIR, filename), "utf8");
    const { fields, body } = parseFrontmatter(raw);
    const paragraphs = body.split(/\r?\n\s*\r?\n/).filter(Boolean);

    return {
      slug: slugFromFilename(filename),
      title: fields.title ?? "",
      date: fields.date ?? "",
      description: fields.description ?? paragraphs[0] ?? "",
      body: paragraphs,
      image: fields.image,
      imageAlt: fields.imageAlt,
      isNew: fields.isNew === "true",
      external:
        fields.externalHref && fields.externalButtonLabel
          ? { href: fields.externalHref, buttonLabel: fields.externalButtonLabel }
          : undefined,
    };
  });
}

export const NEWS_ARTICLES: NewsArticleData[] = loadNewsArticles();

export function getNewsArticle(slug: string): NewsArticleData | undefined {
  return NEWS_ARTICLES.find((article) => article.slug === slug);
}
