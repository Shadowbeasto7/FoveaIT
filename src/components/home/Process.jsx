import React from 'react';
import { Lightbulb, FileText, Code2, Rocket } from 'lucide-react';
import LottiePlayer from '../common/LottiePlayer';
import mobileAnim from '../../assets/lottie/mobile.json';

const processSteps = [
  {
    step: 'Discover',
    desc: 'We understand your goals and requirements.',
    icon: Lightbulb,
    bg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    br: '54% 46% 36% 64% / 50% 60% 40% 50%'
  },
  {
    step: 'Plan',
    desc: 'We create a clear strategy and roadmap.',
    icon: FileText,
    bg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    br: '40% 60% 58% 42% / 46% 42% 58% 54%'
  },
  {
    step: 'Build',
    desc: "We bring your idea to life with clean code.",
    icon: Code2,
    bg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    br: '62% 38% 46% 54% / 38% 62% 38% 62%'
  },
  {
    step: 'Launch',
    desc: 'We deploy and support for long-term success.',
    icon: Rocket,
    bg: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    br: '44% 56% 62% 38% / 58% 44% 56% 42%'
  }
];

export function Process() {
  return (
    /* Light lavender-white — flows from QuickContact wave */
    <section className="relative pb-0 overflow-hidden" style={{ background: '#f8f7ff' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left — Header + Lottie animation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-[0.25em] text-indigo-500/70 uppercase block">
                OUR PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                From Idea to{' '}
                <span
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text"
                  style={{ WebkitTextFillColor: 'transparent' }}
                >
                  Impact
                </span>
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                We keep things simple, transparent and collaborative — so you're always in the loop.
              </p>
            </div>

            {/* Lottie animation — mobile/app launch visual */}
            <div className="relative w-full max-w-[280px] mx-auto lg:mx-0">
              {/* Soft glow behind animation */}
              <div className="absolute inset-0 bg-indigo-100/60 rounded-3xl blur-2xl" />
              <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl border border-indigo-100/80 shadow-lg overflow-hidden p-2">
                <LottiePlayer
                  animationData={mobileAnim}
                  loop
                  autoplay
                  style={{ width: '100%', height: 'auto', maxHeight: '220px' }}
                  rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
                />
              </div>
            </div>
          </div>

          {/* Right — 4 organic process icon cards */}
          <div className="lg:col-span-7 relative">
            {/* Dashed purple connector line desktop */}
            <div
              className="hidden lg:block absolute top-9 left-14 right-14 h-0"
              style={{ borderTop: '2px dashed #c4b5fd', zIndex: 0 }}
            />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {processSteps.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.step} className="flex flex-col items-center text-center space-y-3">
                    <div
                      className={`w-16 h-16 flex items-center justify-center border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${item.bg}`}
                      style={{ borderRadius: item.br }}
                    >
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800">{item.step}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* ── Asymmetric Wave Divider → dark CTA section ── */}
      <div className="relative w-full overflow-hidden" style={{ height: '80px', marginBottom: '-1px' }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,45 C180,5 420,70 660,35 C900,5 1140,65 1440,25 L1440,80 L0,80 Z"
            fill="#0B0F19"
          />
        </svg>
      </div>
    </section>
  );
}

export default Process;
