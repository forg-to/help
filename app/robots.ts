import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/_next/"],
      },
      {
        // AI search crawlers — full public content access for citations
        userAgent: ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot"],
        allow: "/",
        disallow: ["/_next/"],
      },
      {
        // Training-only crawlers — allow help content (it's public documentation)
        userAgent: ["CCBot", "Bytespider", "cohere-ai", "anthropic-ai"],
        allow: "/",
        disallow: ["/_next/"],
      },
    ],
    sitemap: "https://help.forg.to/sitemap.xml",
  };
}
