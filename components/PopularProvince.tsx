import Link from "next/link";
import { provinceToSlug } from "@/lib/slug";
import { regions } from "@/data/regions";

const provinces = [
  "เชียงใหม่",
  "อยุธยา",
  "นครสวรรค์",
  "กาญจนบุรี",
  "สุโขทัย",
  "กำแพงเพชร",
];

function getRegionFromProvince(province: string) {
  for (const region of Object.values(regions)) {
    if (region.provinces.includes(province)) {
      return region.slug;
    }
  }
  return "";
}

export default function PopularProvince() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">

      <h2 className="text-3xl font-semibold text-center text-burgundy mb-12">
        จังหวัดยอดนิยม
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {provinces.map((province) => {
          const region = getRegionFromProvince(province);

          return (
            <Link
              key={province}
              href={`/${region}/${provinceToSlug(province)}`}
              className="group"
            >

              <article className="p-6 bg-white border border-gray-100 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 h-full">

                <h3 className="text-lg font-semibold text-burgundy group-hover:text-gold transition">
                  วัดดัง {province}
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  รวมวัดศักดิ์สิทธิ์ในจังหวัด{province}
                  แนะนำสถานที่ไหว้พระและเคล็ดลับขอพร
                </p>

              </article>

            </Link>
          );
        })}

      </div>

    </section>
  );
}