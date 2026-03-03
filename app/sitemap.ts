// app/sitemap.ts
import { MetadataRoute } from "next";
import { temples } from "@/data/temples";
import { provinceToSlug } from "@/lib/slug";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.muguide-thailand.com";
  const lastModified = new Date("2025-01-01");

  const templeUrls = temples.map((t) => ({
    url: `${base}/temple/${t.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const provinceUrls = Array.from(
    new Set(
      temples.map(
        (t) => `${base}/${t.region}/${provinceToSlug(t.province)}`
      )
    )
  ).map((url) => ({
    url,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const regionUrls = Array.from(
    new Set(temples.map((t) => `${base}/${t.region}`))
  ).map((url) => ({
    url,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 1.0,
  }));

  return [
    {
      url: base,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    ...regionUrls,
    ...provinceUrls,
    ...templeUrls,
  ];
}