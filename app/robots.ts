import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/lottery-history"],
      },
    ],
    sitemap: "https://www.muguide-thailand.com/sitemap.xml",
    host: "https://www.muguide-thailand.com",
  };
}
