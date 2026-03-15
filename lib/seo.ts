// lib/seo.ts
import type { Metadata } from "next";
import { Temple } from "@/data/temples";

const BASE_URL = "https://www.muguide-thailand.com";

export function generateTempleMetadata(temple: Temple): Metadata {
  const url = `${BASE_URL}/temple/${temple.slug}`;

  return {
    title: temple.seoTitle || `${temple.name} ${temple.province}`,
    description: temple.seoDescription || temple.highlight,
    keywords: temple.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: temple.seoTitle,
      description: temple.seoDescription,
      url,
      siteName: "Mu Guide Thailand",
      images: [
        {
          url: temple.coverImage.src,
          width: 1200,
          height: 630,
          alt: temple.coverImage.alt,
        },
      ],
      locale: "th_TH",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: temple.seoTitle,
      description: temple.seoDescription,
      images: [temple.coverImage.src],
    },
  };
}