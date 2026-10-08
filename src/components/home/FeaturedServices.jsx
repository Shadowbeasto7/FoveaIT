import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LottiePlayer from '../common/LottiePlayer';

import codingAnim    from '../../assets/lottie/developer.json';     // Dev at laptop
import webAnim       from '../../assets/lottie/webapp.json';         // Business WebSite
import appDevAnim    from '../../assets/lottie/appdev.json';          // Laptop + Mobile app dev (500×500)
import cloudAnim     from '../../assets/lottie/cloud2.json';          // Cloud/server
import marketingAnim from '../../assets/lottie/growth.json';         // Growth/marketing
import designAnim    from '../../assets/lottie/uidesign.json';       // UI Design comp

const coreServices = [
  { id: 'software-development', slug: 'software-development', title: 'Custom Software',   desc: 'Bespoke ERPs, backend APIs, and custom enterprise tools engineered to automate daily operations.',                                         tags: ['Python', 'Django', 'PostgreSQL'], lottie: codingAnim,    lottieBg: 'from-indigo-950 to-violet-950' },
  { id: 'web-development',      slug: 'web-development',      title: 'Web Platforms',     desc: 'High-speed, SEO-optimized web apps and storefronts crafted with React, Django, and modern CSS.',                                           tags: ['React', 'Django', 'Tailwind CSS'],lottie: designAnim,    lottieBg: 'from-blue-950 to-indigo-950'   },
  { id: 'mobile-development',   slug: 'mobile-development',   title: 'Mobile Apps',       desc: 'Native-performing cross-platform iOS and Android apps built with Flutter, with offline caching and real-time push sync.',                   tags: ['Flutter', 'Dart', 'Firebase'],    lottie: appDevAnim,    lottieBg: 'from-purple-950 to-blue-950'   },
  { id: 'cloud-solutions',      slug: 'cloud-solutions',      title: 'Cloud & DevOps',    desc: 'Resilient cloud server setups, automated CI/CD pipelines, Docker containerization, and zero-downtime hosting.',                            tags: ['AWS', 'Docker', 'Terraform'],     lottie: cloudAnim,     lottieBg: 'from-cyan-950 to-indigo-950'   },
  { id: 'digital-marketing',    slug: 'digital-marketing',    title: 'Digital Marketing', desc: 'Grow your online presence with targeted SEO, social media management, and performance ad campaigns that drive real growth.',               tags: ['SEO', 'Social Media', 'Google Ads'], lottie: marketingAnim, lottieBg: 'from-emerald-950 to-teal-950' },
  { id: 'ui-ux-design',         slug: 'ui-ux-design',         title: 'UI/UX Design',      desc: 'User-centered interface design, wireframes, interactive Figma prototypes, and comprehensive design systems.',                               tags: ['Figma', 'Prototypes', 'WCAG'],    lottie: webAnim,       lottieBg: 'from-violet-950 to-pink-950'   }
];

export function FeaturedServices() {
  return (
    <section className="relative pb-0 overflow-hidden" style={{ background: '#f8f7ff' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold tracking-[0.25em] text-indigo-500/80 uppercase">
              WHAT WE BUILD &amp; DESIGN
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Comprehensive{' '}
              <span
                className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text"
                style={{ WebkitTextFillColor: 'transparent' }}
              >
                Engineering Services
              </span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We design, build, and deploy reliable software platforms that solve real business challenges and help your team run efficiently.
            </p>
          </div>

          <Link
            to="/services"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-indigo-700 transition-all group shrink-0"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* 6 Service Cards — Lottie animated preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, idx) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-indigo-100 shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Lottie Animation Container */}
              <Link
                to={`/services/${service.slug}`}
                className={`block relative w-full aspect-[16/11] overflow-hidden bg-gradient-to-br ${service.lottieBg} flex items-center justify-center`}
              >
                {/* Number badge */}
                <span className="absolute top-3 right-3 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 border border-white/20 z-10">
                  0{idx + 1}
                </span>

                {/* Lottie Animation */}
                <div className="w-full h-full flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-500">
                  <LottiePlayer
                    animationData={service.lottie}
                    loop
                    autoplay
                    style={{ width: '100%', height: '100%' }}
                    rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
                  />
                </div>

                {/* Subtle shimmer overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2 group-hover:text-indigo-600 transition-colors">
                    <Link to={`/services/${service.slug}`}>{service.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-indigo-50 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-indigo-50/80 text-indigo-700 border border-indigo-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 hover:bg-indigo-600 text-indigo-600 hover:text-white text-xs font-bold transition-all duration-200 group/btn shrink-0"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Asymmetric Wave Divider → dark About section */}
      <div className="relative w-full overflow-hidden" style={{ height: '80px', marginBottom: '-1px' }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,20 C180,70 360,0 600,35 C840,70 1000,5 1200,45 C1320,65 1400,25 1440,30 L1440,80 L0,80 Z"
            fill="#0D121F"
          />
        </svg>
      </div>
    </section>
  );
}

export default FeaturedServices;
