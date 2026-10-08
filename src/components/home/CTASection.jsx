import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LottiePlayer from '../common/LottiePlayer';
import rocketAnim from '../../assets/lottie/rocket.json';

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0B0F19] pb-0">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">

        {/* CTA Banner — split: text left, Lottie right */}
        <div
          className="relative overflow-hidden min-h-[360px] sm:min-h-[400px] flex items-stretch"
          style={{
            borderRadius: '1.8rem',
            border: '1.5px solid rgba(99,102,241,0.2)',
            boxShadow: '0 30px 80px rgba(79,70,229,0.2), 0 8px 24px rgba(0,0,0,0.5)',
            background: 'linear-gradient(135deg, #090D16 0%, #0f0a2e 40%, #0d1535 100%)'
          }}
        >
          {/* Background subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(99,102,241,0.8) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(99,102,241,0.8) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Glow accents */}
          <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Left — Text Content */}
          <div className="relative z-10 flex-1 px-8 sm:px-12 lg:px-16 py-12 flex flex-col justify-center max-w-xl space-y-5">
            <span className="text-xs font-bold tracking-[0.25em] text-indigo-400/80 uppercase block">
              LET'S BUILD SOMETHING GREAT
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Have a{' '}
              <span className="gradient-text">Project</span>{' '}
              in Mind?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We'd love to hear from you. Let's turn your ideas into something amazing — together.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-500/25 hover:opacity-90 transition-all group"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs sm:text-sm transition-all"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </div>

          {/* Right — Lottie rocket/trophy animation */}
          <div className="hidden lg:flex relative z-10 w-[380px] xl:w-[440px] items-center justify-center p-8 shrink-0">
            {/* Glow behind animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
            </div>
            <div className="relative w-full h-full max-h-[320px]">
              <LottiePlayer
                animationData={rocketAnim}
                loop
                autoplay
                style={{ width: '100%', height: '100%' }}
                rendererSettings={{ preserveAspectRatio: 'xMidYMid meet' }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default CTASection;
