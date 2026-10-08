import React from 'react';
import { technologiesData } from '../../data/technologies';
import SectionHeading from '../common/SectionHeading';

export function TechMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#0c1020] pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        
        {/* Banner Frame (Matching image curved pill container style) */}
        <div className="glass-panel rounded-[3rem] p-8 sm:p-12 border border-indigo-500/20 relative overflow-hidden text-center">
          
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400 block mb-2">
            STACK & ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-wider mb-8">
            TECHNOLOGIES & TOOLS USED BY FOVEA IT
          </h2>

          {/* Tech Marquee Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologiesData.map((tech) => (
              <div 
                key={tech.name} 
              className="glass-card px-4 py-3.5 rounded-2xl flex items-center justify-center space-x-2.5 border border-indigo-500/15 hover:border-indigo-400/50 transition-all hover:scale-105"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                <span className="text-xs font-bold text-gray-200 tracking-wide font-mono">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Wave divider → QuickContact (dark #0B0F19) */}
      <div className="relative w-full overflow-hidden" style={{ height: '80px', marginBottom: '-1px' }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C300,10 600,70 900,35 C1100,15 1300,60 1440,40 L1440,80 L0,80 Z"
            fill="#0B0F19"
          />
        </svg>
      </div>
    </section>
  );
}

export default TechMarquee;
