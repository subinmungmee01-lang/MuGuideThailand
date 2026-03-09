import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { Metadata } from "next";

import { temples } from "@/data/temples";
import { provinceToSlug } from "@/lib/slug";

/* ===============================
   MU CATEGORY TYPE
================================ */
type MuCategory =
  | "wealth"
  | "work"
  | "love"
  | "success"
  | "luck"
  | "health";

/* ===============================
   CATEGORY TITLE
================================ */
const categoryTitle: Record<MuCategory, string> = {
  wealth: "วัดขอพรการเงิน",
  work: "วัดขอพรการงาน",
  love: "วัดขอพรความรัก",
  success: "วัดขอพรความสำเร็จ",
  luck: "วัดขอโชคลาภ",
  health: "วัดขอพรสุขภาพ",
};

/* ===============================
   SEO Metadata
================================ */
export function generateMetadata({
  params,
}: {
  params: { category: MuCategory };
}): Metadata {
  const title = categoryTitle[params.category] ?? "วัดสายมู";

  return {
    title: `${title} ทั่วไทย | MuGuideThailand`,
    description: `รวม${title}ทั่วประเทศไทย แนะนำวัดสายมูยอดนิยม พร้อมวิธีไหว้ จุดเด่น และข้อมูลการเดินทาง`,
  };
}

/* ===============================
   PAGE
================================ */
export default function MuCategoryPage({
  params,
}: {
  params: { category: MuCategory };
}) {
  const list = temples.filter((t) =>
    t.muTags?.includes(params.category)
  );

  const title = categoryTitle[params.category] ?? "วัดสายมู";

  return (
    <>
      {/* ===============================
         Schema SEO
      =============================== */}
      <Script
        id="mu-category-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: title,
            description: `รวม${title}ทั่วประเทศไทย`,
          }),
        }}
      />

      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h1>

          <p className="text-gray-500">
            รวมวัดสายมูทั่วประเทศไทย
          </p>

          <p className="text-sm text-gray-400 mt-2">
            พบทั้งหมด {list.length} วัด
          </p>
        </div>

        {/* Temple Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {list.map((t) => (
            <Link
              key={t.slug}
              href={`/${t.region}/${provinceToSlug(t.province)}/${t.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-48">
                <Image
                  src={t.coverImage?.src || "/images/temple-default.jpg"}
                  alt={t.coverImage?.alt || t.name}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="font-semibold text-lg mb-2 group-hover:text-yellow-600">
                  {t.name}
                </h2>

                <p className="text-sm text-gray-500 mb-3">
                  จังหวัด{t.province}
                </p>

                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {t.highlight}
                </p>

                {/* Mu Tags */}
                <div className="flex flex-wrap gap-2">
                  {t.muTags?.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full"
                    >
                      {categoryTitle[tag as MuCategory] ?? tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}