import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Globe, Smartphone, Cloud, TrendingUp, Palette, ArrowRight, Check } from 'lucide-react';
import Button from '../common/Button';
import Badge from '../common/Badge';
import LottiePlayer from '../common/LottiePlayer';

import codingAnim from '../../assets/lottie/developer.json';     // Dev at laptop
import webAnim from '../../assets/lottie/webapp.json';         // Business Website
import appDevAnim from '../../assets/lottie/appdev.json';          // Laptop + Mobile app dev
import cloudAnim from '../../assets/lottie/cloud2.json';          // Cloud/server
import marketingAnim from '../../assets/lottie/growth.json';         // Growth/marketing
import designAnim from '../../assets/lottie/uidesign.json';       // UI Design comp

const iconMap = { Code2, Globe, Smartphone, Cloud, TrendingUp, Palette };

// Each service slug maps to the RIGHT animation + gradient
const lottieMap = {
  'software-development': { anim: codingAnim, grad: 'from-indigo-950 to-violet-950' },
  'web-development': { anim: designAnim, grad: 'from-blue-950 to-indigo-950' },
  'mobile-development': { anim: appDevAnim, grad: 'from-purple-950 to-blue-950' },
  'cloud-solutions': { anim: cloudAnim, grad: 'from-cyan-950 to-indigo-950' },
  'digital-marketing': { anim: marketingAnim, grad: 'from-emerald-950 to-teal-950' },
  'ui-ux-design': { anim: webAnim, grad: 'from-violet-950 to-pink-950' },
};

export function ServiceCard({ service }) {
  const IconComponent = iconMap[service.iconName] || Code2;
  const lottie = lottieMap[service.slug];

  return (
    <div className="glass-panel rounded-[2.5rem] p-6 sm:p-8 border border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Lottie Animation Header — replaces static image */}
        <Link
          to={`/services/${service.slug}`}
          className={`block relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-gradient-to-br ${lottie?.grad || 'from-indigo-950 to-slate-950'} border border-indigo-500/20 group-hover:border-indigo-400/40 transition-colors shadow-lg flex items-center justify-center`}
        >
          {lottie ? (
            <>
              {/* Lottie fills the card header */}
              <div className="w-full h-full p-3 group-hover:scale-105 transition-transform duration-500">
                <LottiePlayer
                  animationData={lottie.anim}
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              {/* Gradient fade at bottom for smooth blending */}
              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </>
          ) : (
            /* Fallback: icon if no lottie mapping found */
            <div className="flex items-center justify-center w-full h-full">
              <IconComponent className="w-16 h-16 text-indigo-400 opacity-60" />
            </div>
          )}

          {/* Service spec badge */}
          <div className="absolute top-3 right-3 z-10">
            <Badge variant="purple">Service Spec</Badge>
          </div>
        </Link>

        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
          {service.title}
        </h3>

        <p className="text-xs font-semibold text-indigo-400 mb-4">
          {service.tagline}
        </p>

        <p className="text-sm text-slate-300 leading-relaxed mb-6 font-light">
          {service.shortDescription}
        </p>

        {/* Key Capabilities */}
        <div className="space-y-2 mb-6">
          <p className="text-xs uppercase tracking-wider text-indigo-400 font-bold mb-2">Core Capabilities:</p>
          {service.capabilities.slice(0, 3).map((cap, i) => (
            <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
              <Check className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-indigo-500/15 flex items-center justify-between">
        <Button to={`/services/${service.slug}`} variant="glass" size="sm" icon={ArrowRight}>
          Learn More
        </Button>
        <span className="text-[11px] font-mono text-slate-400">
          {service.technologies.slice(0, 2).join(' • ')}
        </span>
      </div>
    </div>
  );
}

export default ServiceCard;
