//page

import Hero from "@/components/Hero";
import TodaySection from "@/components/TodaySection";
import TempleSection from "@/components/TempleSection";
import Link from "next/link";
import Image from "next/image";
import { luckyData } from "@/data/luckyColors";
import { getThaiDate } from "@/lib/getThaiDate";
import { provinceToSlug } from "@/lib/slug";
import { temples } from "@/data/temples";
import { regionImages } from "@/data/regionImages";


/* =========================
   SEO
========================= */
export async function generateMetadata() {
  const thaiDate = getThaiDate();
  const day = thaiDate.getDay() as 0 | 1 | 2 | 3 | 4 | 5 | 6;
  const todayData = luckyData[day];

  const title =
    `เลขธูปวันนี้ ${todayData.dayNameTH} | ไหว้พระที่ไหนดี | วัดนี้ขอพรเรื่องอะไร`;

  const description =
    `อัปเดตเลขธูปวันนี้ สีมงคลประจำ${todayData.dayNameTH} ` +
    `รวมวัดดังทั่วไทย ขอพรการเงิน ความรัก งาน โชคลาภ ` +
    `แนะนำเส้นทางไหว้พระ 1 วัน และทริปสายบุญ`;

  return {
    title,
    description,
    alternates: {
      canonical: "https://www.muguide-thailand.com",
    },
    openGraph: {
      title,
      description,
      url: "https://www.muguide-thailand.com",
      siteName: "MU GUIDE THAILAND",
      locale: "th_TH",
      type: "website",
    },
  };
}

/* =========================
   Page
========================= */
export default function Home() {

  /* ===== รวมภาค ===== */
  const regions = Array.from(new Set(temples.map(t => t.region)));

  /* ===== เลือกวัดตัวแทนภาค ===== */
  const regionRepresentatives = regions.map(region => {
    const temple = temples.find(t => t.region === region);
    return {
      region,
      temple,
    };
  });

  return (
    <main className="bg-gradient-to-b from-[#f6f2ea] to-white min-h-screen">

      <Hero />

      <section className="py-12 md:py-16">
        <TodaySection />
      </section>

      <Divider />

      {/* =========================
         เลือกภาค
      ========================= */}
      <SectionTitle title="เลือกภาคเพื่อไหว้พระ" />

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-8">

          {regionRepresentatives.map(({ region, temple }) => (
            <Link key={region} href={`/${region}`}>
              <article className="group bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition">

                <div className="relative w-full h-56">
                  <Image
                    src={regionImages[region] || "/no-image.jpg"}
                    alt={`ไหว้พระภาค${convertRegionToThai(region)}`}
                    fill
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-lg font-semibold">
                    ภาค{convertRegionToThai(region)}
                  </h2>

                  <p className="text-gray-600 text-sm mt-2">
                    ดูวัดทั้งหมดในภาคนี้
                  </p>
                </div>
              </article>
            </Link>
          ))}

        </div>
      </section>

      <Divider />

      {/* =========================
         เส้นทางยอดนิยม
      ========================= */}
      <SectionTitle title="เส้นทางไหว้พระยอดนิยม" />

      <CardGrid>
        <Card title="ไหว้พระ 1 วัน อยุธยา" href={`/central/${provinceToSlug("อยุธยา")}`} />
        <Card title="9 วัดดัง นครปฐม" href={`/central/${provinceToSlug("นครปฐม")}`} />
        <Card title="ไหว้พระ แม่ฮ่องสอน" href={`/north/${provinceToSlug("แม่ฮ่องสอน")}`} />
      </CardGrid>

      <Divider />

      <section className="pb-16">
        <TempleSection />
      </section>

      {/* =========================
         SEO Content
      ========================= */}
      <section className="max-w-5xl mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          ไหว้พระ เสริมดวง สายมูทั่วไทย
        </h2>

        <p className="text-gray-700 leading-relaxed">
          รวมวัดดังทั่วไทย พร้อมคำแนะนำการขอพรให้สมหวัง
          เสริมดวงการเงิน ความรัก โชคลาภ และความสำเร็จในชีวิต
          แนะนำเส้นทางไหว้พระ 1 วัน และทริปสายบุญยอดนิยม
        </p>
      </section>

    </main>
  );
}

/* =========================
   UI Components
========================= */

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-40 my-14" />
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-semibold text-center">{title}</h2>
    </section>
  );
}

function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <div className="grid md:grid-cols-3 gap-6">{children}</div>
    </section>
  );
}

function Card({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href}>
      <div className="p-6 bg-white rounded-2xl border hover:shadow-xl transition h-full">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">
          อ่านรายละเอียด วิธีไหว้ และเคล็ดลับเสริมดวง
        </p>
      </div>
    </Link>
  );
}

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