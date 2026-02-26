import { useEffect, useState } from 'react';
import Hero from '../components/Hero';

// Fallback sample articles when API is unavailable
const SAMPLE_ARTICLES = [
  {
    _id: '1',
    title: 'Chohan Commodities Expands to European Markets',
    content:
      'We are proud to announce the expansion of our export operations into key European markets, including the United Kingdom, Germany, and the Netherlands. This milestone reflects our commitment to quality and our ability to meet international regulatory standards.',
    date: new Date('2024-11-15').toISOString(),
  },
  {
    _id: '2',
    title: 'New Basmati Rice Varieties Added to Our Product Range',
    content:
      'In response to growing demand, Chohan Commodities has added three new Basmati rice varieties to its product portfolio: Super Kernel, PK-385, and 1509 Steam. These varieties offer distinct aroma profiles and grain lengths to meet diverse buyer preferences.',
    date: new Date('2024-10-01').toISOString(),
  },
  {
    _id: '3',
    title: 'Q3 2024 Commodity Market Outlook',
    content:
      'Global rice and lentil prices have shown stabilization in Q3 2024, following supply disruptions in key producing regions. Our procurement team has secured forward contracts to ensure uninterrupted supply to all our customers through the coming quarter.',
    date: new Date('2024-09-10').toISOString(),
  },
];

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch('/api/news', { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch news');
        return res.json();
      })
      .then((data) => {
        setArticles(data.length > 0 ? data : SAMPLE_ARTICLES);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setArticles(SAMPLE_ARTICLES);
          setError('Using sample content — connect to the backend for live articles.');
          setLoading(false);
        }
      });
    return () => controller.abort();
  }, []);

  return (
    <>
      <Hero
        title="News & Insights"
        subtitle="Stay updated with our latest news, market insights, and company announcements."
      />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {error && (
            <div className="mb-8 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-xl px-5 py-3 text-sm">
              ℹ️ {error}
            </div>
          )}

          {loading ? (
            <div className="text-center py-20 text-gray-500">Loading articles…</div>
          ) : (
            <div className="space-y-8">
              {articles.map((article) => (
                <article key={article._id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="p-8">
                    <time className="text-sm text-gray-400">
                      {new Date(article.date).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </time>
                    <h2 className="text-xl font-bold text-navy-700 mt-1 mb-3">{article.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{article.content}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
