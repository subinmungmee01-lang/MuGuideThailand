// app/[region]/[province]/page.tsx

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { temples } from "@/data/temples";
import { provinceToSlug, slugToProvince } from "@/lib/slug";
import { provinceImages } from "@/data/provinceImages";

/* =========================
   Static Params
========================= */
export async function generateStaticParams() {
  const paths: { region: string; province: string }[] = [];

  temples.forEach((t) => {
    const slug = provinceToSlug(t.province);

    const exists = paths.find(
      (p) => p.region === t.region && p.province === slug
    );

    if (!exists) {
      paths.push({
        region: t.region,
        province: slug,
      });
    }
  });

  return paths;
}

/* =========================
   SEO Metadata
========================= */
export async function generateMetadata({
  params,
}: {
  params: { region: string; province: string };
}) {
  const provinceName = slugToProvince(
    params.province,
    temples
      .filter((t) => t.region === params.region)
      .map((t) => t.province)
  );

  if (!provinceName) return {};

  const title = `ไหว้พระ ${provinceName} | วัดดัง ${provinceName} ขอพรเรื่องอะไร`;
  const description =
    `รวมวัดดังในจังหวัด${provinceName} สายมูต้องไป ` +
    `แนะนำวิธีขอพร การเงิน ความรัก โชคลาภ พร้อมแผนที่`;

  const url = `https://www.muguide-thailand.com/${params.region}/${params.province}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      locale: "th_TH",
      type: "website",
    },
  };
}

/* =========================
   Page
========================= */
export default function ProvincePage({
  params,
}: {
  params: { region: string; province: string };
}) {
  const provinceName = slugToProvince(
    params.province,
    temples.map((t) => t.province)
  );

  if (!provinceName) {
    return <div className="p-20 text-center">ไม่พบจังหวัดนี้</div>;
  }

  const provinceTemples = temples.filter(
    (t) =>
      t.region === params.region &&
      provinceToSlug(t.province) === params.province
  );


  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `วัดในจังหวัด${provinceName}`,
    numberOfItems: provinceTemples.length,
  };

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-[360px]">
        <Image
          src={provinceImages[provinceName] || "/no-image.jpg"}
          alt={`ไหว้พระ ${provinceName}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-6 pb-10 text-white">
          <h1 className="text-4xl font-bold">
            ไหว้พระ {provinceName}
          </h1>
          <p className="opacity-90 mt-2">
            รวมวัดดังสายมูในจังหวัดนี้
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      {/* ================= BREADCRUMB ================= */}
      <nav className="max-w-6xl mx-auto px-6 py-6 text-sm flex items-center gap-2">

        <Link
          href="/"
          className="text-gray-400 hover:text-burgundy transition"
        >
          หน้าแรก
        </Link>

        <span className="text-gray-300">/</span>

        <Link
          href={`/${params.region}`}
          className="text-gray-400 hover:text-burgundy transition"
        >
          {convertRegionToThai(params.region)}
        </Link>

        <span className="text-gray-300">/</span>

        <span className="text-burgundy font-semibold">
          {provinceName}
        </span>

      </nav>


      {/* ================= TEMPLE CARDS ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-3 gap-8">
          {provinceTemples.map((temple) => (
            <Link
              key={temple.slug}
              href={`/${params.region}/${params.province}/${temple.slug}`}
              className="group"
            >
              <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">

                {/* Image */}
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={temple.coverImage?.src || "/no-image.jpg"}
                    alt={temple.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="font-semibold text-lg text-burgundy group-hover:text-gold transition">
                    {temple.name}
                  </h2>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-2">
                    {temple.highlight}
                  </p>
                </div>

              </article>
            </Link>
          ))}
        </div>


        {/* SEO Content Block */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            เที่ยวไหว้พระจังหวัด{provinceName}
          </h2>
          <p className="text-gray-600">
            รวมวัดดังในจังหวัด{provinceName}
            แนะนำขอพรเรื่องการเงิน ความรัก และโชคลาภ
            พร้อมเส้นทางเดินทางและวิธีไหว้
          </p>
        </div>

      </section>

      <Script
        id="region-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </main>
  );
}

/* =========================
   Helper
========================= */
function convertRegionToThai(region: string) {
  const map: Record<string, string> = {
    north: "ภาคเหนือ",
    central: "ภาคกลาง",
    south: "ภาคใต้",
    northeast: "ภาคอีสาน",
    east: "ภาคตะวันออก",
    west: "ภาคตะวันตก",
  };
  return map[region] ?? region;
}