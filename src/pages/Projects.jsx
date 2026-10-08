import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../seo/SEO';
import { pagesSeoData } from '../seo/seoData';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ProjectFilter from '../components/projects/ProjectFilter';
import ProjectCard from '../components/projects/ProjectCard';
import EmptyState from '../components/common/EmptyState';
import CTASection from '../components/home/CTASection';
import { projectsData } from '../data/projects';

export function Projects() {
  const seoInfo = pagesSeoData.projects;
  const [activeCategory, setActiveCategory] = useState('All');

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
        <Breadcrumbs items={[{ name: 'Projects & Case Studies' }]} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto my-12 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300 block">
            OUR PORTFOLIO
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Work & <span className="text-violet-400">Case Studies</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Real software systems and web platforms engineered for organizations in Nepal and internationally.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <ProjectFilter
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
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

        <CTASection />
      </div>
    </PageLayout>
  );
}

export default Projects;
