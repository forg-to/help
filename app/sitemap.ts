import { MetadataRoute } from "next";
import { HELP_CONTENT } from "@/data/content";

const BASE_URL = "https://help.forg.to";

function parseDate(dateStr?: string): Date {
  if (!dateStr) return new Date();
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date() : d;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  for (const category of HELP_CONTENT) {
    for (let i = 0; i < category.articles.length; i++) {
      const article = category.articles[i];
      entries.push({
        url: `${BASE_URL}/${category.slug}/${article.slug}`,
        lastModified: parseDate(article.lastUpdated),
        changeFrequency: "monthly",
        // First article in each category gets slightly higher priority (it's the category landing)
        priority: i === 0 ? 0.8 : 0.7,
      });
    }
  }

  return entries;
}
