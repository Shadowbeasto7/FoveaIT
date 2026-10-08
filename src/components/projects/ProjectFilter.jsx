import React from 'react';
import { projectCategories } from '../../data/projects';

export function ProjectFilter({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist" aria-label="Project Categories Filter">
      {projectCategories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500 ${
              isActive
                ? 'liquid-glass-btn-primary text-white shadow-lg shadow-violet-900/40 border border-violet-400'
                : 'liquid-glass text-gray-300 hover:text-white hover:bg-white/10 border-white/10'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default ProjectFilter;
