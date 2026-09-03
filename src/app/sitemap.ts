import type { MetadataRoute } from "next";

import { NEWS_ARTICLES } from "./about/news/news-data";

const BASE_URL = "https://vibrainiac.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/games",
    "/about/team",
    "/about/values",
    "/about/partners",
    "/about/news",
    "/contact",
    "/terms-of-service",
    "/privacy-policy",
    "/app-disclaimer",
  ].map((route) => ({ url: `${BASE_URL}${route}`, lastModified: new Date() }));

  const newsRoutes = NEWS_ARTICLES.filter((article) => !article.external).map((article) => ({
    url: `${BASE_URL}/about/news/${article.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...newsRoutes];
}
