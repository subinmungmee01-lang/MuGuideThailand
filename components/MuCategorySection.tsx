import Link from "next/link";
import {
  Wallet,
  Heart,
  Briefcase,
  Trophy,
  Dice5,
  Activity
} from "lucide-react";

const muCategories = [
  { title: "วัดขอพรการเงิน", icon: Wallet, href: "/mu/wealth" },
  { title: "วัดขอพรความรัก", icon: Heart, href: "/mu/love" },
  { title: "วัดขอพรการงาน", icon: Briefcase, href: "/mu/work" },
  { title: "วัดขอพรความสำเร็จ", icon: Trophy, href: "/mu/success" },
  { title: "วัดขอโชคลาภ", icon: Dice5, href: "/mu/luck" },
  { title: "วัดขอพรสุขภาพ", icon: Activity, href: "/mu/health" },
];

export default function MuCategorySection() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      <h2 className="text-3xl font-semibold text-center mb-12">
        วัดสายมูยอดนิยม
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {muCategories.map((cat) => {
          const Icon = cat.icon;

          return (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative p-6 bg-white border border-yellow-100 rounded-2xl hover:shadow-2xl hover:-translate-y-1 transition text-center overflow-hidden"
            >
              
              {/* glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute inset-0 bg-yellow-200 blur-2xl opacity-30"></div>
              </div>

              {/* icon */}
              <div className="relative flex justify-center mb-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-600 shadow-md group-hover:shadow-yellow-400/60 transition">

                  <Icon
                    size={26}
                    className="text-white group-hover:scale-110 transition"
                  />

                </div>
              </div>

              {/* title */}
              <h3 className="relative font-semibold text-sm text-gray-800">
                {cat.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </section>
  );
}