import React, { useState } from 'react';
import {
  Calendar,
  User,
  Clock,
  Share2,
  Check,
  ArrowRight,
  ArrowLeft,
  Bookmark,
  Building,
  Tag
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { IndustrialImage } from '../components/common/IndustrialImage';

interface ArticleDetailPageProps {
  slug: string;
}

export const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ slug }) => {
  const { articles, navigateTo } = useApp();
  const [copied, setCopied] = useState(false);

  const article = articles.find((a) => a.slug === slug || a.id === slug) || (!slug ? articles[0] : undefined);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Artikel Tidak Ditemukan</h2>
        <p className="text-slate-500 text-sm">Artikel wawasan yang Anda tuju tidak tersedia.</p>
        <button
          onClick={() => navigateTo('artikel')}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-colors cursor-pointer"
        >
          Lihat Semua Artikel
        </button>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  // Find related articles (same category or others, excluding current)
  const relatedArticles = articles
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="pb-24 space-y-16">
      
      {/* 1. Header & Breadcrumbs */}
      <section className="bg-slate-900 text-white pt-10 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-dark opacity-35 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
          <div className="text-slate-400">
            <Breadcrumbs
              items={[
                { label: 'Artikel', path: 'artikel' },
                { label: article.title }
              ]}
            />
          </div>

          <div className="space-y-4">
            <span className="px-3 py-1 rounded bg-blue-600/90 text-white text-xs font-semibold uppercase tracking-wider inline-block">
              {article.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-blue-400" />
                <span>Oleh: <strong>{article.author}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Article Body & Cover */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Featured Cover Image */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[16/9]">
          <IndustrialImage
            type={article.imageType}
            alt={article.title}
            className="w-full h-full"
          />
        </div>

        {/* Lead Summary Callout */}
        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200/80 text-blue-950 text-sm sm:text-base leading-relaxed font-medium">
          {article.summary}
        </div>

        {/* Article Paragraphs */}
        <div className="space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags & Share Button */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              Tags:
            </span>
            {article.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          <button
            onClick={handleShare}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Tautan Disalin!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4" />
                <span>Bagikan Artikel</span>
              </>
            )}
          </button>

        </div>

      </article>

      {/* 3. Related Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-200/80 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600">
              Eksplorasi Wawasan Lain
            </span>
            <h2 className="text-2xl font-bold text-slate-900 font-display mt-1">
              Artikel Rekomendasi Terkait
            </h2>
          </div>

          <button
            onClick={() => navigateTo('artikel')}
            className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
          >
            <span>Semua Artikel</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedArticles.map((rel) => (
            <div
              key={rel.id}
              onClick={() => navigateTo(`artikel/${rel.slug}`)}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-lg hover:border-blue-400 transition-all duration-200 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="aspect-[16/10] bg-slate-900 overflow-hidden relative">
                  <IndustrialImage
                    type={rel.imageType}
                    alt={rel.title}
                    className="w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-blue-600/90 text-[10px] font-semibold text-white">
                    {rel.category}
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <span className="text-[11px] text-slate-400 block">{rel.date}</span>
                  <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                    {rel.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 pt-0 text-xs font-semibold text-blue-600 flex items-center justify-between">
                <span>Baca Selengkapnya</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
