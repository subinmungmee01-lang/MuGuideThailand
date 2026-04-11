// page

import Hero from "@/components/Hero";
import TodaySection from "@/components/TodaySection";
import TempleSection from "@/components/TempleSection";
import RandomTempleSection from "@/components/RandomTempleSection";
import MuCategorySection from "@/components/MuCategorySection";
import PopularProvince from "@/components/PopularProvince";

import Link from "next/link";
import Image from "next/image";

import { provinceToSlug } from "@/lib/slug";
import { temples } from "@/data/temples";
import { regionImages } from "@/data/regionImages";

/* =========================
   SEO
========================= */
export async function generateMetadata() {
  const title =
    "ไหว้พระทั่วไทย เสริมดวง ขอพรการเงิน ความรัก โชคลาภ ขอหวย | MU GUIDE THAILAND";

  const description =
    "รวมวัดดังทั่วไทย พร้อมวิธีขอพร เสริมดวงการเงิน ความรัก การงาน และโชคลาภ แนะนำเส้นทางไหว้พระ ครบทุกภาค อัปเดตล่าสุด";

  const keywords = [
    "ไหว้พระ",
    "ไหว้พระทั่วไทย",
    "วัดดัง",
    "วัดดังทั่วไทย",
    "วัดสายมู",
    "ขอพร",
    "เสริมดวง",
    "เสริมดวงการเงิน",
    "เสริมดวงความรัก",
    "ขอพรการงาน",
    "โชคลาภ",
    "เลขธูป",
    "เลขธูปวันนี้",
    "ไหว้พระ 1 วัน",
    "เส้นทางไหว้พระ",
    "วัดขอพร",
    "วัดขอพรการเงิน",
    "วัดขอพรความรัก",
    "วัดขอพรโชคลาภ",
    "สายมู",
    "เที่ยววัด",
    "มูเตลู",
    "MU GUIDE THAILAND",
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

/* =========================
   Page
========================= */
export default function Home() {
  const regions = Array.from(new Set(temples.map((t) => t.region)));

  return (
    <main className="bg-white min-h-screen">
      {/* HERO */}
      <Hero />

      {/* เลขธูปวันนี้ */}
      <section id="today" className="py-8 sm:py-10 md:py-12">
        <TodaySection />
      </section>

      <Divider />

      {/* =========================
         วัดสายมู
      ========================= */}
      <MuCategorySection />

      <Divider />

      {/* =========================
         เลือกภาค
      ========================= */}
      <SectionTitle title="เลือกภาคเพื่อไหว้พระ" />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
          {regions.map((region) => (
            <Link key={region} href={`/${region}`} className="group">
              <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-full">
                {/* Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <Image
                    src={regionImages[region] || "/no-image.jpg"}
                    alt={`ไหว้พระภาค${convertRegionToThai(region)}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  <h2 className="text-lg font-semibold text-burgundy group-hover:text-gold transition leading-snug">
                    ภาค{convertRegionToThai(region)}
                  </h2>

                  <p className="text-gray-500 text-sm mt-2 leading-relaxed">
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
         วัดยอดนิยมทั่วไทย
      ========================= */}
      <RandomTempleSection />

      <Divider />

      {/* =========================
         เส้นทางยอดนิยม
      ========================= */}
      <SectionTitle title="เส้นทางไหว้พระยอดนิยม" />

      <CardGrid>
        <Card
          title="ไหว้พระ 1 วัน อยุธยา"
          href={`/central/${provinceToSlug("อยุธยา")}`}
        />

        <Card
          title="9 วัดดัง นครปฐม"
          href={`/central/${provinceToSlug("นครปฐม")}`}
        />

        <Card
          title="ไหว้พระ แม่ฮ่องสอน"
          href={`/north/${provinceToSlug("แม่ฮ่องสอน")}`}
        />
      </CardGrid>

      <Divider />

      {/* =========================
         วัดดังแนะนำ
      ========================= */}
      <section className="pb-12 md:pb-16">
        <TempleSection />
      </section>

      <Divider />

      {/* =========================
         จังหวัดยอดนิยม
      ========================= */}
      <PopularProvince />

      <Divider />

      {/* =========================
         SEO CONTENT
      ========================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 md:pb-20 text-left">
        <h1 className="text-3xl font-semibold text-burgundy mb-5 md:mb-6 leading-snug">
          ไหว้พระทั่วไทย ขอพร เสริมดวงการเงิน ความรัก การงาน และโชคลาภ
        </h1>

        <p className="text-gray-700 leading-relaxed mb-5 md:mb-6">
          หากคุณกำลังมองหาวัดดังทั่วไทยสำหรับไหว้พระ ขอพร และเสริมดวง
          หน้านี้ได้รวบรวมสถานที่ยอดนิยมสำหรับสายมูไว้ครบ
          ทั้งวัดขอพรเรื่องการเงิน ความรัก การงาน สุขภาพ และโชคลาภ
          พร้อมแนะนำเส้นทางไหว้พระในแต่ละภาคของประเทศไทย
          เพื่อช่วยให้คุณเลือกวัดที่เหมาะกับความตั้งใจได้ง่ายขึ้น
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          ขอพรเรื่องการเงิน
        </h2>
        <p className="text-gray-700 leading-relaxed">
          สำหรับผู้ที่ต้องการเสริมดวงการเงิน ค้าขาย และโชคลาภ
          ควรเลือกวัดที่มีชื่อเสียงด้านความมั่งคั่งและความสำเร็จ
          หลายวัดในไทยเป็นที่นิยมสำหรับการขอพรเรื่องเงินทอง ธุรกิจ
          และโอกาสใหม่ ๆ ในชีวิต
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          ขอพรเรื่องความรัก
        </h2>
        <p className="text-gray-700 leading-relaxed">
          วัดที่เด่นด้านความรักมักเหมาะสำหรับทั้งคนโสด
          คนที่ต้องการพบคู่ที่ดี
          และผู้ที่อยากให้ความสัมพันธ์มั่นคงมากขึ้น
          การเลือกวัดตามความเชื่อและตำนานของแต่ละแห่ง
          ช่วยให้การขอพรตรงกับสิ่งที่ตั้งใจมากขึ้น
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          ไหว้พระ 1 วัน ไปไหนดี
        </h2>
        <p className="text-gray-700 leading-relaxed">
          หากมีเวลาจำกัด สามารถเลือกเส้นทางไหว้พระ 1 วัน เช่น
          <Link href="/central/ayutthaya" className="text-gold underline ml-1">
            ไหว้พระอยุธยา 1 วัน
          </Link>
          ที่รวมวัดดังหลายแห่งไว้ในทริปเดียว
          เหมาะสำหรับทั้งการท่องเที่ยวและการขอพรเสริมดวง
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-3">
          รวมวัดดังแยกตามภาค
        </h2>
        <p className="text-gray-700 leading-relaxed">
          เว็บไซต์นี้ช่วยให้ค้นหาวัดดังได้ง่ายขึ้น
          โดยแยกข้อมูลตามภาคและจังหวัดอย่างชัดเจน
          ไม่ว่าจะเป็นภาคเหนือ ภาคกลาง ภาคอีสาน ภาคใต้
          ภาคตะวันออก หรือภาคตะวันตก
          ทำให้วางแผนเดินทางไหว้พระและขอพรได้สะดวกมากขึ้น
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