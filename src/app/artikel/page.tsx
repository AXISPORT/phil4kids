import { articles } from '@/data/content';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export const metadata = {
  title: 'Artikel - Phil4Kids',
  description: 'Tipps, Interviews und Geschichten rund um Kinder, Bewegung und Phil4Kids.',
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function ArtikelPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#2C3E50] mb-4 font-[family-name:var(--font-poppins)]">
            Artikel & Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tipps für Eltern, Spielanleitungen und Geschichten rund um Bewegung und Kinder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article) => (
            <Card key={article.slug} hover>
              <Link href={`/artikel/${article.slug}`}>
                <div className="aspect-video bg-[#3498DB] flex items-center justify-center">
                  <span className="text-white text-lg font-medium text-center px-4">{article.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-[#2ECC71] uppercase">{article.category}</span>
                    <span className="text-xs text-gray-400">{formatDate(article.date)}</span>
                  </div>
                  <h2 className="text-lg font-bold text-[#2C3E50] mb-2 font-[family-name:var(--font-poppins)]">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-600">{article.excerpt}</p>
                  <span className="inline-block mt-3 text-[#2ECC71] hover:text-[#27ae60] text-sm font-medium">
                    Weiterlesen →
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
