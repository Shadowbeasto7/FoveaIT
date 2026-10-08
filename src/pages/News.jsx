import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../seo/SEO';
import { pagesSeoData } from '../seo/seoData';
import Breadcrumbs from '../components/common/Breadcrumbs';
import CTASection from '../components/home/CTASection';
import { newsData, newsCategories } from '../data/news';
import { Calendar, Clock, User, ArrowRight, Tag, Search, X, Newspaper, Briefcase, Sparkles } from 'lucide-react';

export function News() {
  const seoInfo = pagesSeoData.news || pagesSeoData.home;
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredNews = newsData.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = newsData.find((item) => item.featured) || newsData[0];

  return (
    <PageLayout>
      <SEO
        title={seoInfo.title}
        description={seoInfo.description}
        canonical={seoInfo.canonical}
        keywords={seoInfo.keywords}
        ogImage={seoInfo.ogImage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <Breadcrumbs items={[{ name: 'News & Updates' }]} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto my-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Fovea IT Insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Fovea IT News, Blogs &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Engineering Updates</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Stay tuned with our latest company milestones, software engineering tips, Flutter &amp; Django developments, and digital marketing strategies.
          </p>
        </div>

        {/* Search & Category Filter Section */}
        <div className="my-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#111827]/80 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
            
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
              {newsCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 border border-blue-400/30'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Featured Article Banner (Show if no search query & activeCategory is 'All') */}
        {activeCategory === 'All' && !searchQuery && featuredArticle && (
          <div 
            onClick={() => setSelectedArticle(featuredArticle)}
            className="my-10 cursor-pointer group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-[#131B2E] to-[#1A103C] border border-indigo-500/30 p-6 sm:p-10 shadow-2xl hover:border-indigo-500/60 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-4xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                  Featured Story
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-medium">
                  {featuredArticle.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-blue-300 transition-colors leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                {featuredArticle.excerpt}
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 border-t border-white/10">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <User className="w-3.5 h-3.5 text-indigo-400" />
                    {featuredArticle.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    {featuredArticle.readTime}
                  </span>
                </div>

                <div className="inline-flex items-center gap-2 text-indigo-300 group-hover:text-white font-semibold text-xs transition-colors">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* News Grid */}
        <div className="my-10">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNews.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedArticle(item)}
                  className="cursor-pointer group flex flex-col justify-between rounded-2xl bg-[#0F172A]/80 border border-slate-800 p-6 hover:border-indigo-500/50 hover:bg-[#131C35]/90 transition-all duration-300 shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-semibold tracking-wide">
                        {item.category}
                      </span>
                      <span className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        {item.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-3">
                      {item.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded bg-slate-900 text-slate-400 text-[10px] flex items-center gap-1">
                          <Tag className="w-2.5 h-2.5 text-indigo-400" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {item.date}
                    </span>
                    <span className="text-indigo-400 font-semibold group-hover:text-white flex items-center gap-1">
                      Read <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#0F172A]/50 rounded-2xl border border-slate-800">
              <Newspaper className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white">No articles found</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                No news or blog posts match your current search or category filter. Try clearing the filter.
              </p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Modal for Reading Full Article */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
            <div 
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0B0F19] border border-indigo-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 scrollbar-thin scrollbar-thumb-indigo-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-slate-500 transition-all"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                    {selectedArticle.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {selectedArticle.date}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {selectedArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center gap-2 pt-2 border-b border-white/10 pb-4 text-xs text-slate-300">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white">
                    {selectedArticle.author.charAt(0)}
                  </div>
                  <div>
                    <span className="font-semibold text-white block">{selectedArticle.author}</span>
                    <span className="text-slate-400 text-[11px]">{selectedArticle.authorRole}</span>
                  </div>
                </div>
              </div>

              {/* Article Content Paragraphs */}
              <div className="space-y-4 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Article Tags */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium flex items-center gap-1">
                      <Tag className="w-3 h-3 text-indigo-400" />
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}

        <CTASection />
      </div>
    </PageLayout>
  );
}

export default News;
