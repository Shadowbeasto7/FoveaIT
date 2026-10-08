import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../seo/SEO';
import { pagesSeoData } from '../seo/seoData';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ServiceCard from '../components/services/ServiceCard';
import EngagementModels from '../components/services/EngagementModels';
import FAQAccordion from '../components/services/FAQAccordion';
import CTASection from '../components/home/CTASection';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';
import EmptyState from '../components/common/EmptyState';
import LottiePlayer from '../components/common/LottiePlayer';
import { servicesData } from '../data/services';
import { projectsData } from '../data/projects';
import { faqCategories } from '../data/faq';
import { Layers, FolderKanban } from 'lucide-react';
import webAnim from '../assets/lottie/web.json';

export function Services() {
  const seoInfo = pagesSeoData.services;
  const generalFaqs = faqCategories[0]?.questions || [];
  const [activeCategory, setActiveCategory] = useState('All');
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#projects') {
      const el = document.getElementById('projects');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory || p.services.includes(activeCategory));

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
        <Breadcrumbs items={[{ name: 'Services & Projects' }]} />

        {/* ── Hero Header — Split: Text left, Lottie right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center my-12">
          {/* Left — Text */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              IT Services &amp; Web Development{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
                in Kathmandu, Nepal
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
              From custom Django web platforms and Flutter mobile applications to digital marketing and enterprise logistics systems in Kathmandu, Nepal.
            </p>

            {/* Quick stat pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { label: '6 Services', sub: 'End-to-end' },
                { label: '50+ Clients', sub: 'Delivered' },
                { label: 'Nepal-based', sub: 'Global reach' },
              ].map(({ label, sub }) => (
                <div key={label} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="text-sm font-bold text-white">{label}</span>
                  <span className="text-xs text-slate-400 ml-1.5">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Lottie animation */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow behind */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />
            </div>
            <div
              className="relative w-full max-w-sm aspect-square rounded-3xl overflow-hidden border border-indigo-500/20 shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #1e1b4b 50%, #0d1535 100%)' }}
            >
              {/* Subtle grid */}
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
                  backgroundSize: '32px 32px'
                }}
              />
              <LottiePlayer
                animationData={webAnim}
                loop
                autoplay
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>

        {/* ── Section 1: Services Grid (6 Core Services) ── */}
        <div className="my-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-7 bg-indigo-500 rounded-full"></span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Our Core Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        {/* Interactive Engagement Models */}
        <EngagementModels />

        {/* ── Section 2: Merged Projects & Case Studies ── */}
        <div id="projects" className="my-20 pt-10 border-t border-white/10 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>Proven Results</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Projects & Case Studies</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Explore real-world software platforms engineered for our 50+ clients and partners across Nepal.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <ProjectFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <EmptyState
              title={`No ${activeCategory} projects`}
              description="No current case studies match this filter. Try selecting 'All' or another category."
              actionText="Show All Projects"
              onAction={() => setActiveCategory('All')}
            />
          )}
        </div>

        {/* FAQ Accordion */}
        <div className="my-16">
          <FAQAccordion items={generalFaqs} title="Services & Engagement FAQ" />
        </div>

        <CTASection />
      </div>
    </PageLayout>
  );
}

export default Services;
