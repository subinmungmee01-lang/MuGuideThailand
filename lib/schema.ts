// lib/schema.ts
import { Temple } from "@/data/temples";

const BASE_URL = "https://www.muguide-thailand.com";

export function generateTempleSchema(temple: Temple) {
  return {
    "@context": "https://schema.org",
    "@type": temple.schemaType || "TouristAttraction",
    name: temple.name,
    description: temple.seoDescription || temple.highlight,
    image: temple.coverImage.src,
    address: {
      "@type": "PostalAddress",
      addressLocality: temple.province,
      addressCountry: "TH",
      streetAddress: temple.address,
    },
    geo: temple.coordinates
      ? {
          "@type": "GeoCoordinates",
          latitude: temple.coordinates.lat,
          longitude: temple.coordinates.lng,
        }
      : undefined,
    url: `${BASE_URL}/temple/${temple.slug}`,
  };
}

export function generateFAQSchema(temple: Temple) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: temple.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}