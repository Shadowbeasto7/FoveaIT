import React from 'react';
import { Heart, Star, TrendingUp } from 'lucide-react';
import LottiePlayer from '../common/LottiePlayer';
import teamAnim from '../../assets/lottie/team2.json';  // Wavy people/team animation

export function AboutPreview() {
  return (
    /* Dark section — preceded by wave from services */
    <section className="relative pb-0 overflow-hidden bg-[#0D121F]">
      {/* ambient glows */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-purple-600/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-blue-600/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left — Lottie Animation in organic blob */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md">

              {/* Halo Layer 1 — darkest indigo-950, outermost */}
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: '50% 50% 46% 54% / 50% 52% 48% 50%',
                  background: 'rgba(30, 27, 75, 0.85)',
                  transform: 'scale(1.15) translate(7px, 9px)',
                  filter: 'blur(2px)',
                  zIndex: 0
                }}
              />
              {/* Halo Layer 2 — mid indigo-900 */}
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: '56% 44% 48% 52% / 48% 52% 48% 52%',
                  background: 'rgba(49, 46, 129, 0.7)',
                  transform: 'scale(1.075) translate(3px, 4px)',
                  zIndex: 1
                }}
              />
              {/* Halo Layer 3 — lighter indigo-700 */}
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: '58% 42% 44% 56% / 52% 46% 54% 48%',
                  background: 'rgba(67, 56, 202, 0.4)',
                  transform: 'scale(1.025) translate(1px, 2px)',
                  zIndex: 2
                }}
              />

              {/* Main blob container — Lottie team/people animation */}
              <div
                className="relative aspect-[5/4] overflow-hidden flex items-center justify-center"
                style={{
                  borderRadius: '60% 40% 44% 56% / 50% 56% 44% 50%',
                  boxShadow: '0 30px 70px rgba(79,70,229,0.28), 0 10px 30px rgba(0,0,0,0.5)',
                  border: '2px solid rgba(99,102,241,0.35)',
                  background: 'linear-gradient(135deg, #1e1b4b 0%, #0f0c29 100%)',
                  zIndex: 3
                }}
              >
                <div className="w-full h-full p-4">
                  <LottiePlayer
                    animationData={teamAnim}
                    loop
                    autoplay
                    style={{ width: '100%', height: '100%' }}
                  />
                </div>

                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(79,70,229,0.08) 0%, transparent 60%)'
                  }}
                />
              </div>

              {/* Floating stat badge */}
              <div
                className="absolute top-5 left-4 bg-[#0B0F19]/85 backdrop-blur-md px-4 py-2.5 border border-indigo-500/25 shadow-xl z-10"
                style={{ borderRadius: '52% 48% 60% 40% / 44% 56% 44% 56%' }}
              >
                <span className="font-handwriting text-xl text-white/90 leading-snug block">6 Months</span>
                <span className="font-handwriting text-xl text-indigo-400 leading-snug block">50+ Partners</span>
              </div>
            </div>
          </div>

          {/* Right — Copy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-[0.25em] text-indigo-400/80 uppercase block">
              OUR JOURNEY &amp; VALUES
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              6 Months. <span className="gradient-text">50+ Partners.</span>
              <br />
              Software Built with <span className="gradient-text">Heart</span>.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We started Fovea IT just 6 months ago with a simple goal: craft software that works seamlessly without corporate fluff. In this short time, we've had the privilege of partnering with over 50 amazing companies in Nepal and beyond, turning complex technical ideas into reliable, scalable digital products.
            </p>

            {/* 3 Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
              {[
                { icon: Heart,      label: '50+ Partners',  sub: 'Trusted by visionary companies', br: '46% 54% 62% 38% / 52% 44% 56% 48%', cls: 'text-indigo-300 bg-indigo-900/40 border-indigo-500/30' },
                { icon: Star,       label: '6 Months Young',sub: 'Rapid growth & momentum',         br: '62% 38% 50% 50% / 44% 56% 44% 56%', cls: 'text-indigo-300 bg-indigo-900/40 border-indigo-500/30' },
                { icon: TrendingUp, label: 'Human Focus',   sub: 'Clear & honest collaboration',    br: '38% 62% 44% 56% / 56% 44% 56% 44%', cls: 'text-indigo-300 bg-indigo-900/40 border-indigo-500/30' }
              ].map(({ icon: Icon, label, sub, br, cls }) => (
                <div key={label} className="flex items-start space-x-3">
                  <div
                    className={`w-9 h-9 flex items-center justify-center border shrink-0 ${cls}`}
                    style={{ borderRadius: br }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">{label}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Asymmetric Wave Divider ── */}
      <div className="relative w-full overflow-hidden" style={{ height: '80px', marginBottom: '-1px' }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C240,10 480,70 720,40 C960,10 1200,65 1440,30 L1440,80 L0,80 Z"
            fill="#0B0F19"
          />
        </svg>
      </div>
    </section>
  );
}

export default AboutPreview;
