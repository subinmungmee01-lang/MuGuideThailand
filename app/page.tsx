import Hero from "@/components/Hero";
import TempleSection from "@/components/TempleSection";
import RandomTempleSection from "@/components/RandomTempleSection";
import MuCategorySection from "@/components/MuCategorySection";
import PopularProvince from "@/components/PopularProvince";
import ThailandMap from "@/components/ThailandMap";

import Link from "next/link";
import Image from "next/image";

import { provinceToSlug } from "@/lib/slug";
import { temples } from "@/data/temples";
import { regionImages } from "@/data/regionImages";

export async function generateMetadata() {
  const title =
    "คู่มือเที่ยววัด ไหว้พระ ทำบุญ และวัดดังทั่วไทย | MU GUIDE THAILAND";

  const description =
    "รวมข้อมูลวัดดังทั่วไทย ประวัติ วิธีไหว้ วิธีเดินทาง เวลาเปิด ข้อควรรู้ และเส้นทางเที่ยววัดสำหรับวางแผนไหว้พระทำบุญ";

  const keywords = [
    "ไหว้พระ",
    "เที่ยววัด",
    "วัดดังทั่วไทย",
    "ทำบุญ",
    "เส้นทางไหว้พระ",
    "วัดกรุงเทพ",
    "วัดกาญจนบุรี",
    "วัดแม่ฮ่องสอน",
    "วัดนครสวรรค์",
    "มารยาทเข้าวัด",
    "คู่มือเที่ยววัด",
    "วัฒนธรรมไทย",
  ];

  return {
    metadataBase: new URL("https://www.muguide-thailand.com"),
    title,
    description,
    keywords,
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: "https://www.muguide-thailand.com",
      siteName: "MU GUIDE THAILAND",
      locale: "th_TH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function Home() {
  const regions = Array.from(new Set(temples.map((t) => t.region)));

  return (
    <main className="bg-white min-h-screen">
      <Hero />

      <IntroTrustSection />

      <Divider />

      <MuCategorySection />

      <Divider />

      <SectionTitle title="เลือกภาคเพื่อวางแผนเที่ยววัด" />

      <ThailandMap />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {regions.map((region) => (
            <Link key={region} href={`/${region}`} className="group">
              <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-full">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <Image
                    src={regionImages[region] || "/no-image.jpg"}
                    alt={`เที่ยววัดภาค${convertRegionToThai(region)}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-4 sm:p-5 md:p-6">
                  <h2 className="text-lg font-semibold text-burgundy group-hover:text-gold transition leading-snug">
                    ภาค{convertRegionToThai(region)}
                  </h2>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                    ดูจังหวัดและวัดทั้งหมดในภาคนี้
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Divider />

      <RandomTempleSection />

      <Divider />

      <SectionTitle title="เส้นทางไหว้พระยอดนิยม" />

      <CardGrid>
        <Card title="ไหว้พระกรุงเทพ 1 วัน" href={`/central/${provinceToSlug("กรุงเทพมหานคร")}`} />
        <Card title="เที่ยววัดกาญจนบุรี" href={`/west/${provinceToSlug("กาญจนบุรี")}`} />
        <Card title="ไหว้พระแม่ฮ่องสอน" href={`/north/${provinceToSlug("แม่ฮ่องสอน")}`} />
      </CardGrid>

      <Divider />

      <section className="pb-12 md:pb-16">
        <TempleSection />
      </section>

      <Divider />

      <PopularProvince />

      <Divider />

      <SeoContentSection />
    </main>
  );
}

function IntroTrustSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="rounded-3xl border border-amber-100 bg-[#fffaf2] p-6 md:p-10 shadow-sm">
        <p className="text-xs tracking-[0.35em] text-amber-700 mb-4">TRAVEL GUIDE</p>
        <h2 className="text-2xl md:text-3xl font-semibold text-burgundy leading-snug">
          ข้อมูลเที่ยววัดที่อ่านง่าย เหมาะสำหรับวางแผนก่อนเดินทาง
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed max-w-4xl">
          เว็บไซต์นี้รวบรวมข้อมูลวัดและสถานที่ศรัทธาทั่วไทย โดยเน้นประวัติ จุดเด่น
          วิธีเดินทาง เวลาเปิด ข้อควรรู้ และมารยาทในการเข้าวัด เพื่อให้ผู้อ่านใช้เป็นคู่มือ
          วางแผนทริปไหว้พระ ทำบุญ และท่องเที่ยวเชิงวัฒนธรรมได้อย่างมั่นใจ
        </p>
      </div>
    </section>
  );
}

function SeoContentSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-20 text-left">
      <h1 className="text-3xl font-semibold text-burgundy mb-5 md:mb-6 leading-snug">
        ไหว้พระทั่วไทย เที่ยววัด ทำบุญ และเรียนรู้วัฒนธรรมไทย
      </h1>

      <p className="text-gray-700 leading-relaxed mb-5 md:mb-6">
        หากคุณกำลังมองหาสถานที่ไหว้พระหรือวางแผนเดินทางเที่ยววัดในประเทศไทย
        MU GUIDE THAILAND รวบรวมข้อมูลวัดดังและสถานที่ศรัทธาไว้ตามภาค จังหวัด
        และหมวดความตั้งใจ เพื่อช่วยให้เลือกจุดหมายที่เหมาะกับเวลาและรูปแบบการเดินทางของคุณ
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">วางแผนไหว้พระ 1 วัน</h2>
      <p className="text-gray-700 leading-relaxed">
        สำหรับผู้ที่มีเวลาจำกัด สามารถเลือกเส้นทางใกล้กรุงเทพ เช่น
        <Link href="/central/bangkok" className="text-gold underline mx-1">
          ไหว้พระกรุงเทพ 1 วัน
        </Link>
        หรือเลือกจังหวัดที่เดินทางสะดวก พร้อมอ่านข้อมูลเวลาเปิดและจุดเด่นของแต่ละวัดก่อนออกเดินทาง
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">อ่านข้อมูลก่อนเข้าวัด</h2>
      <p className="text-gray-700 leading-relaxed">
        แต่ละหน้าวัดมีข้อมูลประวัติ ความสำคัญ บรรยากาศ จุดสักการะ ข้อควรรู้
        และคำแนะนำการแต่งกาย เพื่อให้การเดินทางเป็นไปอย่างสุภาพ เคารพสถานที่
        และได้ประสบการณ์ที่ดีทั้งด้านการท่องเที่ยวและจิตใจ
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">รวมวัดดังแยกตามภาค</h2>
      <p className="text-gray-700 leading-relaxed">
        เว็บไซต์นี้จัดหมวดวัดตามภาคและจังหวัด เช่น ภาคเหนือ ภาคกลาง ภาคตะวันตก
        และจังหวัดยอดนิยม เพื่อให้ค้นหาข้อมูลได้ง่ายขึ้น เหมาะสำหรับผู้ที่ต้องการจัดทริปเอง
        หรือหาไอเดียเดินทางในวันหยุด
      </p>
    </section>
  );
}

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-40 my-8 sm:my-10 md:my-12" />
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-5 sm:py-6 md:py-8">
      <h2 className="text-3xl font-semibold text-center text-burgundy leading-snug">
        {title}
      </h2>
    </section>
  );
}

function CardGrid({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
        {children}
      </div>
    </section>
  );
}

function Card({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="group">
      <div className="p-4 sm:p-5 md:p-6 bg-white rounded-2xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-full">
        <h3 className="text-lg font-semibold text-burgundy group-hover:text-gold transition leading-snug">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
          อ่านรายละเอียด ประวัติ วิธีเดินทาง และข้อควรรู้ก่อนเดินทาง
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
