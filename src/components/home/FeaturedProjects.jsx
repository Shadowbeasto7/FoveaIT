import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { projectsData } from '../../data/projects';

export function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F19] pb-0">
      {/* ambient glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[400px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5">
            <SectionHeading
              subtitle="FEATURED PORTFOLIO WORK"
              title="OUR RECENT WORK"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-gray-300 text-base leading-relaxed font-light">
              Explore recent digital platforms engineered by Fovea IT. From global courier tracking portals to NGO social platforms and custom e-commerce web applications.
            </p>
          </div>
        </div>

        {/* Featured Projects — asymmetric: first card spans full, rest in 2-col */}
        <div className="space-y-6">
          {projectsData.slice(0, 1).map((project) => (
            <div 
              key={project.id}
              className="liquid-glass-strong rounded-[2rem] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center gap-8 group"
            >
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <Badge>{project.category}</Badge>
                  {project.liveUrl ? (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-indigo-300 hover:text-white flex items-center gap-1 font-mono transition-colors"
                    >
                      <span>LIVE</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400">COMING SOON</span>
                  )}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  <Link to={`/projects/${project.slug}`} className="hover:text-indigo-300 transition-colors">
                    {project.title}
                  </Link>
                </h3>
                <p className="text-xs font-semibold text-indigo-400">
                  {project.subCategory}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed font-light max-w-xl">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-[11px] px-2.5 py-1 rounded-lg bg-white/4 text-gray-300 border border-white/8 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg transition-all group/btn"
                  >
                    <span>Visit the Site</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-slate-400 font-semibold text-xs sm:text-sm border border-slate-700/60 cursor-not-allowed">
                    <span>Coming Soon</span>
                  </span>
                )}

                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 hover:text-white px-4 py-3 transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectsData.slice(1, 4).map((project) => (
              <div 
                key={project.id}
                className="liquid-glass rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge>{project.category}</Badge>
                    {project.liveUrl ? (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-indigo-300 hover:text-white flex items-center gap-1 font-mono transition-colors"
                      >
                        <span>LIVE</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-400">COMING SOON</span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">
                    <Link to={`/projects/${project.slug}`} className="hover:text-indigo-300 transition-colors">
                      {project.title}
                    </Link>
                  </h3>
                  <p className="text-xs font-semibold text-indigo-400 mb-3">
                    {project.subCategory}
                  </p>

                  <p className="text-sm text-gray-300 leading-relaxed mb-5 font-light">
                    {project.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[11px] px-2.5 py-1 rounded-lg bg-white/4 text-gray-300 border border-white/8 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  {project.liveUrl ? (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-indigo-400 hover:text-indigo-200 inline-flex items-center gap-2 transition-colors"
                    >
                      <span>Visit the Site</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-slate-400 font-mono">
                      Coming Soon
                    </span>
                  )}

                  <Link 
                    to={`/projects/${project.slug}`}
                    className="text-xs font-semibold text-slate-300 hover:text-white inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button to="/services#projects" variant="primary" size="lg" icon={ArrowRight}>
            Explore All Projects & Services
          </Button>
        </div>

      </div>

      {/* Wave divider → TechMarquee (also dark) */}
      <div className="relative w-full overflow-hidden" style={{ height: '80px', marginBottom: '-1px' }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,30 C240,75 480,5 720,45 C960,80 1200,15 1440,50 L1440,80 L0,80 Z"
            fill="#0c1020"
          />
        </svg>
      </div>
    </section>
  );
}

export default FeaturedProjects;
