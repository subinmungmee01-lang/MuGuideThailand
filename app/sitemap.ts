import { MetadataRoute } from "next";
import { temples } from "@/data/temples";
import { articles } from "@/data/articles";
import { provinceToSlug } from "@/lib/slug";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.muguide-thailand.com";
  const lastModified = new Date();

  const staticUrls = ["", "/temples", "/mu", "/articles", "/about", "/contact", "/privacy-policy", "/terms"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

  const muUrls = ["wealth", "work", "love", "success", "luck", "health"].map((category) => ({
    url: `${base}/mu/${category}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const articleUrls = articles.map((article) => ({
    url: `${base}/articles/${article.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const templeUrls = temples.map((t) => ({
    url: `${base}/${t.region}/${provinceToSlug(t.province)}/${t.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const provinceSet = new Set(temples.map((t) => `${t.region}/${provinceToSlug(t.province)}`));
  const provinceUrls = Array.from(provinceSet).map((path) => ({
    url: `${base}/${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const regionSet = new Set(temples.map((t) => t.region));
  const regionUrls = Array.from(regionSet).map((region) => ({
    url: `${base}/${region}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticUrls, ...muUrls, ...articleUrls, ...regionUrls, ...provinceUrls, ...templeUrls];
}
