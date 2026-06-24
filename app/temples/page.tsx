import Link from "next/link";
import Image from "next/image";
import { temples } from "@/data/temples";
import { provinceToSlug } from "@/lib/slug";

export const metadata = {
  title: "วัดทั้งหมดใน MU GUIDE THAILAND | คู่มือเที่ยววัดทั่วไทย",
  description:
    "รวมรายชื่อวัดและสถานที่ศรัทธาทั้งหมด พร้อมลิงก์ไปยังข้อมูลประวัติ วิธีเดินทาง เวลาเปิด และข้อควรรู้ก่อนเดินทาง",
};

export default function TemplesPage() {
  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] text-amber-700 mb-4">TEMPLE DIRECTORY</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-burgundy">วัดทั้งหมด</h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            ค้นหาวัดตามจังหวัด อ่านประวัติ จุดเด่น เวลาเปิด และข้อมูลเดินทางก่อนวางแผนทริป
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {temples.map((temple, index) => (
            <Link
              key={`${temple.region}-${temple.province}-${temple.slug}-${index}`}
              href={`/${temple.region}/${provinceToSlug(temple.province)}/${temple.slug}`}
              className="group"
            >
              <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-full">
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={temple.coverImage?.src || "/no-image.jpg"}
                    alt={temple.coverImage?.alt || temple.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm text-amber-700 mb-2">จังหวัด{temple.province}</p>
                  <h2 className="font-semibold text-lg text-burgundy group-hover:text-gold transition">
                    {temple.name}
                  </h2>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-3">
                    {temple.highlight}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
