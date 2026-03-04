// app/sitemap.ts
import { MetadataRoute } from "next";
import { temples } from "@/data/temples";
import { provinceToSlug } from "@/lib/slug";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.muguide-thailand.com";
  const lastModified = new Date();

  /* ========================
     TEMPLE URLS
  ======================== */
  const templeUrls = temples.map((t) => ({
    url: `${base}/${t.region}/${provinceToSlug(t.province)}/${t.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  /* ========================
     PROVINCE URLS
  ======================== */
  const provinceSet = new Set(
    temples.map((t) => `${t.region}/${provinceToSlug(t.province)}`)
  );

  const provinceUrls = Array.from(provinceSet).map((path) => ({
    url: `${base}/${path}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  /* ========================
     REGION URLS
  ======================== */
  const regionSet = new Set(temples.map((t) => t.region));

  const regionUrls = Array.from(regionSet).map((region) => ({
    url: `${base}/${region}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 1.0,
  }));

  /* ========================
     HOMEPAGE
  ======================== */
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