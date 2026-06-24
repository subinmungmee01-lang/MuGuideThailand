import Link from "next/link";
import { Activity, Briefcase, Heart, Sparkles, Trophy, Wallet } from "lucide-react";

export const metadata = {
  title: "หมวดขอพรและวัดแนะนำ | MU GUIDE THAILAND",
  description:
    "เลือกวัดและสถานที่ศรัทธาตามความตั้งใจ เช่น การงาน การเงิน ความรัก สุขภาพ และความสำเร็จ พร้อมข้อมูลเดินทาง",
};

const categories = [
  { title: "ขอพรการเงิน", description: "สถานที่ที่ผู้คนนิยมไปไหว้พระเพื่อความสบายใจด้านการเงินและธุรกิจ", href: "/mu/wealth", icon: Wallet },
  { title: "ขอพรการงาน", description: "วัดและสถานที่สำหรับตั้งจิตอธิษฐานเรื่องหน้าที่การงานและการเริ่มต้นใหม่", href: "/mu/work", icon: Briefcase },
  { title: "ขอพรความรัก", description: "สถานที่ศรัทธาที่เกี่ยวข้องกับความสัมพันธ์ ครอบครัว และความเมตตา", href: "/mu/love", icon: Heart },
  { title: "ขอพรความสำเร็จ", description: "สถานที่ที่เหมาะกับการตั้งเป้าหมาย ขอพรเรื่องความก้าวหน้า และกำลังใจ", href: "/mu/success", icon: Trophy },
  { title: "เสริมสิริมงคล", description: "รวมวัดสำหรับทำบุญ ไหว้พระ และเพิ่มความสบายใจก่อนเริ่มสิ่งสำคัญ", href: "/mu/luck", icon: Sparkles },
  { title: "ขอพรสุขภาพ", description: "สถานที่ที่ผู้คนนิยมไปทำบุญและตั้งจิตอธิษฐานเกี่ยวกับสุขภาพกายใจ", href: "/mu/health", icon: Activity },
];

export default function MuPage() {
  return (
    <main className="bg-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] text-amber-700 mb-4">MU GUIDE THAILAND</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-burgundy">เลือกวัดตามหมวดขอพร</h1>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            รวมหมวดวัดและสถานที่ศรัทธา เพื่อช่วยให้ค้นหาข้อมูลได้ง่ายขึ้นตามความตั้งใจของแต่ละคน
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className="group">
                <article className="h-full rounded-3xl border border-amber-100 bg-[#fffaf2] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 flex items-center justify-center mb-6">
                    <Icon className="text-white" size={26} />
                  </div>
                  <h2 className="text-xl font-semibold text-burgundy group-hover:text-gold transition">{item.title}</h2>
                  <p className="text-gray-600 mt-3 leading-relaxed text-sm">{item.description}</p>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
