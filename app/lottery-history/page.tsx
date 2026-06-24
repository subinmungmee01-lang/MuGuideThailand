import Link from "next/link";

export const metadata = {
  title: "หน้านี้ปิดปรับปรุง | MU GUIDE THAILAND",
  description: "หน้านี้ถูกปิดปรับปรุงชั่วคราว กรุณากลับไปอ่านคู่มือเที่ยววัดและบทความวัฒนธรรมไทย",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ClosedPage() {
  return (
    <main className="bg-white">
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-xs tracking-[0.35em] text-amber-700 mb-4">MU GUIDE THAILAND</p>
        <h1 className="text-4xl font-semibold text-burgundy mb-4">หน้านี้ปิดปรับปรุงชั่วคราว</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          เพื่อปรับปรุงคุณภาพเนื้อหาให้เหมาะกับผู้อ่าน เว็บไซต์จึงปิดหน้านี้ไว้ก่อน
          คุณสามารถกลับไปอ่านบทความเที่ยววัดและข้อมูลวัดทั่วไทยได้จากเมนูด้านล่าง
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/articles" className="rounded-xl bg-burgundy px-5 py-3 text-white font-medium hover:opacity-90 transition">
            อ่านบทความ
          </Link>
          <Link href="/temples" className="rounded-xl border border-[#6a1e2c] px-5 py-3 text-burgundy font-medium hover:bg-[#fffaf2] transition">
            ดูวัดทั้งหมด
          </Link>
        </div>
      </section>
    </main>
  );
}
