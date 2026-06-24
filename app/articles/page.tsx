import Link from "next/link";
import { articles } from "@/data/articles";

export const metadata = {
  title: "บทความเที่ยววัด ไหว้พระ และวัฒนธรรมไทย | MuGuideThailand",
  description:
    "รวมบทความแนะนำการเที่ยววัด ไหว้พระ ทำบุญ มารยาทการเข้าวัด การแต่งกาย และการวางแผนเดินทางทั่วไทย",
};

export default function ArticlesPage() {
  return (
    <main className="relative bg-gradient-to-b from-[#faf6ee] via-[#f3ead7] to-[#faf6ee]">
      <div className="absolute inset-0 bg-[url('/thai-pattern.png')] opacity-5 pointer-events-none" />

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.35em] text-amber-700 mb-4">MU GUIDE THAILAND</p>

          <h1 className="text-4xl md:text-5xl font-semibold text-[#6b1f1f]">
            บทความเที่ยววัดและวัฒนธรรมไทย
          </h1>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            คู่มือการวางแผนเที่ยววัด มารยาทการเข้าวัด การแต่งกาย และข้อควรรู้ก่อนเดินทาง
          </p>

          <div className="mt-8 h-[1px] max-w-xl mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {articles.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="group">
              <article className="bg-white/90 backdrop-blur border border-amber-100 rounded-[2rem] p-8 shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl h-full">
                <p className="text-xs text-amber-700 uppercase tracking-[0.25em] mb-3">{article.category}</p>
                <h2 className="text-xl font-semibold text-[#6b1f1f] group-hover:text-amber-600 transition mb-3">
                  {article.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                  {article.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
