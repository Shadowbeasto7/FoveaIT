import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../seo/SEO';
import { projectsSeoData } from '../seo/seoData';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import CTASection from '../components/home/CTASection';

import { projectsData } from '../data/projects';
import { getProjectSchema, getBreadcrumbSchema } from '../seo/structuredData';
import { getAllCourierYatraSchemas } from '../seo/schemas/courierYatra.schema';
import { ExternalLink, CheckCircle2, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { companyData } from '../data/company';

export function ProjectDetails() {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.slug === projectId || p.id === projectId);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const canonicalUrl = `${companyData.siteUrl}/projects/${project.slug}`;
  const isCourierYatra = project.slug === 'courier-yatra';

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services & Projects', url: '/services#projects' },
    { name: project.title }
  ]);

  const jsonLd = isCourierYatra
    ? [...getAllCourierYatraSchemas(), breadcrumbSchema]
    : [getProjectSchema(project), breadcrumbSchema];

  // SEO metadata — richer for CourierYatra
  const seoTitle = isCourierYatra
    ? `CourierYatra — International Shipping Platform | Fovea IT Case Study`
    : `${project.title} Case Study | Fovea IT`;

  const seoDescription = isCourierYatra
    ? `CourierYatra is a full-stack international courier tracking and freight management platform built by Fovea IT in Kathmandu, Nepal. Features real-time tracking, shipping fee calculator, and admin dashboard.`
    : project.shortDescription;

  const seoKeywords = isCourierYatra
    ? [
        'CourierYatra', 'Courier Yatra Nepal', 'international shipping Nepal',
        'logistics platform Nepal', 'courier tracking software', 'freight management Nepal',
        'Fovea IT projects', 'Fovea IT portfolio', 'custom logistics software Kathmandu',
        ...project.technologies
      ]
    : [project.title, project.category, ...project.technologies];

  // Prefer lookup table, fall back to generated values
  const projectSeo = projectsSeoData[project.slug];
  const finalTitle = projectSeo?.title ?? seoTitle;
  const finalDescription = projectSeo?.description ?? seoDescription;
  const finalKeywords = projectSeo?.keywords ?? seoKeywords;
  const finalCanonical = projectSeo?.canonical ?? canonicalUrl;
  const finalOgImage = projectSeo?.ogImage ?? `${companyData.siteUrl}/og-image.jpg`;

  const relatedProjects = projectsData.filter(p => p.id !== project.id).slice(0, 2);

  return (
    <PageLayout>
      <SEO
        title={finalTitle}
        description={finalDescription}
        canonical={finalCanonical}
        keywords={finalKeywords}
        ogImage={finalOgImage}
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <Breadcrumbs items={[
          { name: 'Services & Projects', url: '/services#projects' },
          { name: project.title }
        ]} />

        {/* Hero Header Card */}
        <div className="glass-panel rounded-[3rem] p-8 sm:p-12 border border-purple-500/30 my-8 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="purple">{project.category}</Badge>
              <Badge variant="cyan">{project.subCategory}</Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {isCourierYatra
                ? <><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">CourierYatra</span> — International Shipping Platform by Fovea IT</>
                : project.title
              }
            </h1>

            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
              {project.fullDescription}
            </p>

            {project.liveUrl && (
              <div className="pt-4 flex flex-wrap gap-4">
                <Button href={project.liveUrl} variant="primary" size="md" icon={ExternalLink}>
                  Visit Live Platform
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Client Context, Challenge, Solution */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          
          <div className="glass-panel rounded-[2rem] p-6 sm:p-8 border border-purple-500/20">
            <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 mb-2">Project Context</h3>
            <h4 className="text-lg font-bold text-white mb-3">Client Scope</h4>
            <p className="text-xs text-gray-300 leading-relaxed font-light">{project.clientContext}</p>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8 border border-purple-500/20">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">The Challenge</h3>
            <h4 className="text-lg font-bold text-white mb-3">Core Problem</h4>
            <p className="text-xs text-gray-300 leading-relaxed font-light">{project.challenge}</p>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8 border border-cyan-500/20">
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">Engineering Solution</h3>
            <h4 className="text-lg font-bold text-white mb-3">Our Approach</h4>
            <p className="text-xs text-gray-300 leading-relaxed font-light">{project.solution}</p>
          </div>

        </div>

        {/* Key Features & Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-16">
          
          <div className="lg:col-span-8 glass-panel rounded-[2.5rem] p-8 border border-purple-500/25">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-2">PLATFORM CAPABILITIES</h3>
            <h2 className="text-2xl font-bold text-white mb-6">Key Engineering Features</h2>
            <div className="space-y-4">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="flex items-start space-x-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="font-light">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 glass-panel rounded-[2.5rem] p-8 border border-purple-500/25 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400 mb-2">TECHNOLOGY STACK</h3>
              <h2 className="text-xl font-bold text-white mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-purple-950/60 border border-purple-500/40 text-purple-200 text-xs font-mono font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.liveUrl && (
              <div className="pt-6 border-t border-purple-500/20">
                <Button href={project.liveUrl} variant="outline" size="sm" icon={ExternalLink} className="w-full text-xs uppercase font-semibold">
                  Launch {project.title}
                </Button>
              </div>
            )}
          </div>

        </div>

        {/* Related Projects */}
        <div className="my-16">
          <h2 className="text-2xl font-bold text-white mb-8 border-l-2 border-purple-400 pl-3">
            More Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map(rel => (
              <div key={rel.id} className="glass-card p-6 rounded-[2rem] border border-purple-500/20 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">{rel.category}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{rel.title}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed font-light mb-4">{rel.shortDescription}</p>
                </div>
                <Link to={`/projects/${rel.slug}`} className="text-xs font-semibold text-purple-300 hover:text-white inline-flex items-center gap-1">
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <CTASection />
      </div>
    </PageLayout>
  );
}

export default ProjectDetails;
