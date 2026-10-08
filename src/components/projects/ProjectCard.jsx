import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Badge from '../common/Badge';

export function ProjectCard({ project }) {
  return (
    <article className="glass-panel rounded-[2.5rem] p-6 sm:p-8 border border-purple-500/20 hover:border-indigo-400/50 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Badges & Live Status */}
        <div className="flex items-center justify-between mb-4">
          <Badge variant="purple">{project.category}</Badge>
          {project.liveUrl ? (
            <span className="text-[11px] font-mono text-indigo-400 flex items-center gap-1 font-semibold">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              LIVE WEB
            </span>
          ) : (
            <span className="text-[11px] font-mono text-slate-400">
              COMING SOON
            </span>
          )}
        </div>

        <h3 className="text-2xl font-extrabold text-white mb-1 group-hover:text-indigo-300 transition-colors">
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="text-xs font-semibold text-indigo-400 mb-4">
          {project.subCategory}
        </p>

        <p className="text-sm text-gray-300 leading-relaxed mb-6 font-light">
          {project.shortDescription}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/10 font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-indigo-300 hover:text-white inline-flex items-center gap-2 transition-colors"
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
    </article>
  );
}

export default ProjectCard;
