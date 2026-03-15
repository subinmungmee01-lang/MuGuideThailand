// app/[region]/[province]/[slug]/page.tsx

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { temples } from "@/data/temples";
import { provinceToSlug } from "@/lib/slug";
import { Metadata } from "next";

/* =========================
   REGION MAP (ไว้แสดงชื่อไทย)
========================= */
const regionNameMap: Record<string, string> = {
  north: "ภาคเหนือ",
  northeast: "ภาคตะวันออกเฉียงเหนือ",
  central: "ภาคกลาง",
  east: "ภาคตะวันออก",
  west: "ภาคตะวันตก",
  south: "ภาคใต้",
};

/* =========================
   STATIC PARAMS
========================= */
export async function generateStaticParams() {
  return temples.map((temple) => ({
    region: temple.region,
    province: provinceToSlug(temple.province),
    slug: temple.slug,
  }));
}

/* =========================
   METADATA
========================= */
export async function generateMetadata({
  params,
}: {
  params: { region: string; province: string; slug: string };
}): Promise<Metadata> {
  const temple = temples.find(
    (t) =>
      t.slug === params.slug &&
      t.region === params.region &&
      provinceToSlug(t.province) === params.province
  );

  if (!temple) return {};

  const title =
    temple.seoTitle ??
    `${temple.name} จังหวัด${temple.province} ขอพรเรื่องอะไร | MU GUIDE`;

  const description =
    temple.seoDescription ??
    `${temple.name} จังหวัด${temple.province} เด่นเรื่อง${temple.highlight}`;

  const url = `https://www.muguide-thailand.com/${params.region}/${params.province}/${params.slug}`;

  return {
    title,
    description,
    keywords: temple.keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      locale: "th_TH",
      type: "article",
      images: [
        {
          url: `https://www.muguide-thailand.com${temple.coverImage.src}`,
        },
      ],
    },
  };
}

/* =========================
   PAGE COMPONENT
========================= */
export default function TemplePage({
  params,
}: {
  params: { region: string; province: string; slug: string };
}) {
  const temple = temples.find(
    (t) =>
      t.slug === params.slug &&
      t.region === params.region &&
      provinceToSlug(t.province) === params.province
  );

  if (!temple) {
    return (
      <div className="p-20 text-center font-bold text-burgundy">
        ไม่พบข้อมูลวัดนี้
      </div>
    );
  }

  const regionThai =
    regionNameMap[params.region] ?? `ภาค${params.region}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": temple.schemaType || "ReligiousPlace",
    name: temple.name,
    description: temple.meritHighlight?.description || temple.highlight,
    image: `https://www.muguide-thailand.com${temple.coverImage.src}`,
    address: {
      "@type": "PostalAddress",
      addressRegion: temple.province,
      addressCountry: "TH",
    },
  };

  return (
    <main className="min-h-screen bg-white pb-20">
      <Script
        id="temple-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ================= BREADCRUMB ================= */}
      <nav className="max-w-5xl mx-auto px-6 pt-10 text-sm flex items-center gap-2">

        <Link href="/" className="text-gray-500 hover:text-gold transition">
          หน้าแรก
        </Link>

        <span className="text-gray-400">/</span>

        <Link
          href={`/${params.region}`}
          className="text-gray-500 hover:text-gold transition"
        >
          {regionThai}
        </Link>

        <span className="text-gray-400">/</span>

        <Link
          href={`/${params.region}/${params.province}`}
          className="text-gray-500 hover:text-gold transition"
        >
          {temple.province}
        </Link>

        <span className="text-gray-400">/</span>

        <span className="text-burgundy font-semibold">
          {temple.name}
        </span>
      </nav>

      <article className="max-w-5xl mx-auto px-6 py-8">
        {/* --- HEADER --- */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.2] md:leading-[1.15] mb-4 bg-gradient-to-b from-yellow-600 to-yellow-800 bg-clip-text text-transparent">
            {temple.name}
          </h1>

          <p className="text-xl text-burgundy font-medium tracking-widest mt-2">
            {temple.province}
          </p>
        </header>

        {/* --- COVER IMAGE --- */}
        <div className="relative mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-gold/10 group">
          <Image
            src={temple.coverImage.src}
            alt={temple.coverImage.alt ?? temple.name}
            width={1200}
            height={700}
            priority
            className="object-cover w-full h-auto aspect-[16/9] group-hover:scale-105 transition duration-1000"
          />
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="space-y-16">

          {/* Highlight Section */}
          {/* <section className="relative p-8 bg-gradient-to-br from-cream to-white rounded-3xl border border-gold/20 shadow-sm overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl">✨</div>
            <h2 className="text-2xl font-bold text-gold mb-4 flex items-center gap-2">
              จุดเด่นสำคัญ
            </h2>
            <p className="text-xl text-burgundy font-semibold leading-relaxed relative z-10">
              {temple.highlight}
            </p>
          </section>*/}

          {/* Merit Detail */}
          {temple.meritHighlight && (
            <section className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-burgundy flex items-center gap-3 mb-6">
                <span className="text-2xl">🙏</span> เด่นขอพรเรื่องอะไร?
              </h2>
              <div className="bg-white p-8 rounded-2xl border-l-8 border-gold shadow-md">
                <p className="text-2xl font-bold text-gold mb-3">{temple.meritHighlight.main}</p>
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  &quot;{temple.meritHighlight.description}&quot;                </p>
              </div>
            </section>
          )}

          {/* History Content */}
          <section>
            <h2 className="text-3xl font-bold text-gold mb-6 border-b border-gold/10 pb-2 italic">ประวัติและความสำคัญ</h2>
            <div className="whitespace-pre-line leading-[2.2rem] text-lg text-gray-700 font-light">
              {temple.content}
            </div>
          </section>

          {/* --- CONTENT IMAGES GALLERY (ใส่ภาพประกอบ 2 ภาพที่นี่) --- */}
          {temple.contentImages && temple.contentImages.length > 0 && (
            <section className="py-10">
              <h2 className="text-2xl font-bold text-burgundy mb-8 flex items-center gap-2">
                <span>📸</span> บรรยากาศภายในวัด
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {temple.contentImages.map((img, index) => (
                  <figure key={index} className="space-y-3 group">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] border border-gray-100">
                      <Image
                        src={img.src}
                        alt={img.alt || temple.name}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-700"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="text-center text-gray-500 text-sm font-medium">
                        — {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          )}

          {/* Blessing Technique (The Luxury Box) */}
          {temple.blessingTechnique && (
            <section className="bg-burgundy text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl"></div>

              <h2 className="text-3xl font-bold text-gold mb-10 text-center tracking-tight">
                {temple.blessingTechnique.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-12 mb-10">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gold flex items-center gap-2 border-b border-gold/20 pb-2 uppercase">
                    ขั้นตอนการขอพร
                  </h3>
                  <ol className="space-y-4">
                    {temple.blessingTechnique.steps.map((step, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold text-white flex items-center justify-center font-bold text-sm mt-0.5 shadow-lg">
                          {i + 1}
                        </span>
                        <span className="opacity-95 leading-relaxed text-lg font-light">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {temple.blessingTechnique.offering && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gold flex items-center gap-2 border-b border-gold/20 pb-2 uppercase">
                      ของไหว้แนะนำ
                    </h3>
                    <ul className="grid grid-cols-1 gap-3">
                      {temple.blessingTechnique.offering.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition">
                          <span className="text-gold text-lg">✦</span> <span className="text-lg font-light opacity-95">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {temple.blessingTechnique.mantra && (
                <div className="mt-8 bg-gradient-to-b from-gold/20 to-transparent p-10 rounded-3xl border border-gold/30 text-center shadow-inner relative z-10">
                  <p className="text-gold/80 text-xl tracking-[0.1em] uppercase mb-4 font-bold">คาถาบูชา (ตั้งนะโม 3 จบ)</p>
                  <div className="text-2xl md:text-3xl font-medium leading-relaxed italic text-gold-100">
                    {temple.blessingTechnique.mantra}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Info Cards */}
          <section className="grid md:grid-cols-2 gap-8">
            {/* Location Box */}
            <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-burgundy flex items-center gap-2 uppercase tracking-tight">
                <span>📍</span> ข้อมูลสถานที่
              </h3>
              <div className="space-y-2 text-gray-600">
                <p className="text-lg leading-relaxed">{temple.address}</p>
                <p className="font-medium text-gold">{temple.openTime}</p>
                <Link href={temple.googleMap} target="_blank" className="inline-block mt-4 bg-[#8a2d2d] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-yellow-700 transition shadow-md">
                  เปิด Google Maps
                </Link>
              </div>
            </div>

            {/* Travel Tip Box */}
            <div className="bg-cream p-8 rounded-[2rem] border border-gold/10 space-y-4 shadow-sm">
              <h3 className="text-xl font-bold text-gold flex items-center gap-2 uppercase tracking-tight">
                {/* แก้ไขโดยเพิ่ม className="text-white" หรือระบุสีที่ไม่ใช่ gold ให้ไอคอน */}
                <span className="brightness-100 filter-none text-white">🧭</span>
                เคล็ดลับการเที่ยว
              </h3>
              <p className="text-burgundy font-medium italic">{temple.bestTimeToVisit}</p>
              <ul className="space-y-2 text-gray-600">
                {temple.tips?.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-gold mt-1 shrink-0">✦</span> <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ================= Nearby Hotels (Agoda) ================= */}
          {temple.nearbyHotels && temple.nearbyHotels.length > 0 && (
            <section className="pt-16">
              <h2 className="text-3xl font-bold text-burgundy mb-10 text-center">
                🏨 ที่พักใกล้{temple.name}
              </h2>

              <div className="grid md:grid-cols-3 gap-8">

                {temple.nearbyHotels.map((hotel, index) => (
                  <a
                    key={index}
                    href={hotel.link}
                    target="_blank"
                    rel="nofollow sponsored"
                    className="group border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
                  >

                    <h3 className="text-lg font-semibold text-burgundy group-hover:text-gold transition">
                      {hotel.name}
                    </h3>

                    {hotel.distance && (
                      <p className="text-sm text-gray-500 mt-1">
                        {hotel.distance}
                      </p>
                    )}

                    {hotel.highlight && (
                      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                        {hotel.highlight}
                      </p>
                    )}

                    <span className="inline-block mt-5 text-gold font-semibold">
                      ดูราคาใน Agoda →
                    </span>

                  </a>
                ))}

              </div>
            </section>
          )}

          {/* FAQ Section */}
          {temple.faq && temple.faq.length > 0 && (
            <section className="pt-10">
              <h2 className="text-3xl font-bold text-burgundy mb-8 text-center tracking-tight italic">— FAQ —</h2>
              <div className="divide-y divide-gray-100 bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
                {temple.faq.map((item, i) => (
                  <div key={i} className="p-8 hover:bg-gray-50 transition">
                    <h3 className="text-xl font-bold text-gold mb-3 leading-snug">Q: {item.q}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg font-light">A: {item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {temple.relatedPlaces && temple.relatedPlaces.length > 0 && (
            <section className="pt-16 border-t border-gray-100">
              <h2 className="text-2xl font-semibold text-burgundy mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-gold/50"></span>
                สายมูต้องไปต่อ ในจังหวัด{temple.province}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {temple.relatedPlaces.map((place) => {
                  const fullTemple = temples.find(t => t.slug === place.slug);
                  if (!fullTemple) return null;


                  return (
                    <Link
                      key={place.slug}
                      href={`/${fullTemple.region}/${provinceToSlug(fullTemple.province)}/${fullTemple.slug}`}
                      className="group"
                    >
                      <div className="relative p-8 bg-white border border-gray-100 rounded-[2rem] transition-all duration-500 
                group-hover:border-gold/30 group-hover:shadow-xl group-hover:-translate-y-1.5 overflow-hidden">

                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -mr-16 -mt-16 
                  transition-transform duration-1000 group-hover:scale-150"></div>

                        <div className="relative z-10 flex flex-col h-full justify-between">
                          <div>
                            <p className="text-[10px] text-gold font-medium uppercase tracking-[0.3em] mb-2 opacity-70">
                              Recommended
                            </p>

                            <p className="text-xl font-semibold text-burgundy group-hover:text-gold transition-colors duration-300">
                              {place.name}
                            </p>
                          </div>

                          <div className="mt-8 flex items-center gap-2 text-gray-400 group-hover:text-burgundy transition-colors duration-300">
                            <span className="text-xs font-medium uppercase tracking-widest">
                              อ่านคู่มือเดินทาง
                            </span>
                            <span className="text-lg transform transition-transform duration-300 group-hover:translate-x-2">
                              →
                            </span>
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

        </div>
      </article>

      {/* --- FOOTER CTA --- */}
      <footer className="bg-gray-50 mt-20 py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-burgundy mb-4 uppercase tracking-wider">Muguide Thailand</h2>
          <p className="text-gray-500 font-light mb-8 italic"> &quot;เพราะความศรัทธา คือจุดเริ่มต้นของความสำเร็จ&quot;</p>
          <div className="h-1 w-20 bg-gold mx-auto mb-8"></div>
          <p className="text-sm text-gray-400">แบ่งปันบุญและความรู้ให้เพื่อนของคุณ</p>
        </div>
      </footer>
    </main>
  );
}