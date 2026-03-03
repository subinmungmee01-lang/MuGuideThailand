// app/[region]/page.tsx

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { temples } from "@/data/temples";
import { provinceToSlug } from "@/lib/slug";
import { regionImages } from "@/data/regionImages";
import { provinceImages } from "@/data/provinceImages";


/* =========================
   Static Params
========================= */
export async function generateStaticParams() {
  const regions = Array.from(new Set(temples.map((t) => t.region)));
  return regions.map((region) => ({ region }));
}

/* =========================
   SEO Metadata
========================= */
export async function generateMetadata({
  params,
}: {
  params: { region: string };
}) {
  const regionThai = convertRegionToThai(params.region);

  const title = `ไหว้พระภาค${regionThai} | รวมวัดดังสายมู`;
  const description =
    `รวมวัดดังภาค${regionThai} ขอพรการเงิน ความรัก โชคลาภ ` +
    `แนะนำเส้นทางไหว้พระ และจังหวัดยอดนิยม`;

  const url = `https://www.muguide-thailand.com/${params.region}`;

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
export default function RegionPage({
  params,
}: {
  params: { region: string };
}) {
  const regionTemples = temples.filter(
    (t) => t.region === params.region
  );

  if (regionTemples.length === 0) {
    return <div className="p-20 text-center">ไม่พบข้อมูล</div>;
  }

  /* ===== รวมจังหวัด ===== */
  const provinces = Array.from(
    new Map(regionTemples.map((t) => [t.province, t])).values()
  );

  const heroTemple = regionTemples[0];

  /* ===== Schema SEO ===== */
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `วัดภาค${convertRegionToThai(params.region)}`,
    numberOfItems: provinces.length,
  };

  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative h-[360px]">
        <Image
          src={regionImages[params.region] || "/no-image.jpg"}
          alt={`ไหว้พระภาค${convertRegionToThai(params.region)}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 max-w-6xl mx-auto px-6 pb-10 text-white">
          <h1 className="text-4xl font-bold">
            ไหว้พระภาค{convertRegionToThai(params.region)}
          </h1>
          <p className="opacity-90 mt-2">
            รวมจังหวัดและวัดดังสายมูในภาคนี้
          </p>
        </div>
      </section>

      {/* ================= Breadcrumb ================= */}
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-500">
        <Link href="/">หน้าแรก</Link> /
        <span> ภาค{convertRegionToThai(params.region)}</span>
      </div>

      {/* ================= Province Cards ================= */}
      <section className="max-w-6xl mx-auto px-6 pb-16">

        <div className="grid md:grid-cols-3 gap-8">

          {provinces.map((temple) => (
            <Link
              key={temple.province}
              href={`/${params.region}/${provinceToSlug(
                temple.province
              )}`}
            >
              <article className="group bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition">

                <div className="relative w-full h-56">
                  <Image
                    src={provinceImages[temple.province] || "/no-image.jpg"}
                    alt={`จังหวัด${temple.province}`}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-6">
                  <h2 className="font-semibold text-lg">
                    จังหวัด{temple.province}
                  </h2>

                  <p className="text-gray-600 text-sm mt-2">
                    ดูวัดทั้งหมดในจังหวัดนี้
                  </p>
                </div>

              </article>
            </Link>
          ))}

        </div>

        {/* SEO Content */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">
            เที่ยวไหว้พระภาค{convertRegionToThai(params.region)}
          </h2>
          <p className="text-gray-600">
            รวมวัดดังสายมูในภาค{convertRegionToThai(params.region)}
            แนะนำจังหวัดยอดนิยม วิธีขอพร และเส้นทางไหว้พระ
          </p>
        </div>

      </section>

      <Script
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
    north: "เหนือ",
    central: "กลาง",
    south: "ใต้",
    northeast: "อีสาน",
    east: "ตะวันออก",
    west: "ตะวันตก",
  };
  return map[region] ?? region;
}