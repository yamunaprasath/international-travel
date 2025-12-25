import { Clock, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const newsArticles = [
  {
    id: 1,
    title: "New Visa-Free Travel Agreements Announced for 2025",
    excerpt: "Several countries have signed bilateral agreements to facilitate easier travel for tourists and business travelers.",
    category: "Policy",
    date: "Dec 20, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1716918265579-9f41924d67d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBuZXdzJTIwYWlycG9ydHxlbnwxfHx8fDE3NjY2NDI2Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    trending: true
  },
  {
    id: 2,
    title: "Sustainable Tourism: Europe's New Environmental Standards",
    excerpt: "EU introduces stricter regulations for tour operators to reduce carbon footprint and promote eco-friendly travel.",
    category: "Environment",
    date: "Dec 18, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1595685842822-7893ddb30176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJjZWxvbmElMjBzcGFpbiUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjY1ODc3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    trending: false
  },
  {
    id: 3,
    title: "Digital Nomad Visas: Complete Guide to Remote Work Programs",
    excerpt: "A comprehensive overview of countries offering extended stay visas for remote workers and their requirements.",
    category: "Work & Travel",
    date: "Dec 15, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1581032841303-0ba9e894ebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2NjY0MDUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    trending: true
  },
  {
    id: 4,
    title: "Airport Technology Updates: Biometric Screening Expands",
    excerpt: "Major international airports accelerate adoption of facial recognition and automated passport control systems.",
    category: "Technology",
    date: "Dec 12, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1657106251952-2d584ebdf886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NjY1NTk0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    trending: false
  }
];

export function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl mb-2">Latest Travel News</h2>
            <p className="text-gray-600">Stay informed with the latest global travel updates</p>
          </div>
          <button className="hidden sm:block px-6 py-2 text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {newsArticles.map((article) => (
            <article 
              key={article.id}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {article.trending && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-teal-500 text-white rounded-full flex items-center gap-1 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    Trending
                  </div>
                )}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm">
                  {article.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-3 group-hover:text-teal-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <button className="w-full px-6 py-3 text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors">
            View All News
          </button>
        </div>
      </div>
    </section>
  );
}
