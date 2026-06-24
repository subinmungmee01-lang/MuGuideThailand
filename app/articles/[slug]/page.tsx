import { notFound } from "next/navigation";
import { articles } from "@/data/articles";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: { canonical: `/articles/${article.slug}` },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) return notFound();

  return (
    <main className="relative bg-gradient-to-b from-[#faf6ee] via-[#f3ead7] to-[#faf6ee]">
      <div className="absolute inset-0 bg-[url('/thai-pattern.png')] opacity-5 pointer-events-none" />

      <article className="relative max-w-3xl mx-auto px-6 py-24">
        <header className="mb-14 text-center">
          <p className="text-xs tracking-[0.35em] text-amber-700 mb-4">ARTICLE</p>

          <h1 className="text-3xl md:text-4xl font-semibold text-[#6b1f1f] leading-snug">
            {article.title}
          </h1>

          <p className="text-gray-500 mt-6 text-lg leading-relaxed">
            {article.excerpt}
          </p>

          <div className="mt-8 h-[1px] max-w-md mx-auto bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        </header>

        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
