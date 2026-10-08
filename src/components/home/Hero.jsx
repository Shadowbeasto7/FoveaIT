import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between pt-8 sm:pt-10 md:pt-12 pb-0 bg-[#0B0F19] overflow-hidden">
      {/* ── Background Video & Overlays ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          src="/hero_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 filter brightness-[0.7] contrast-110"
        />
        {/* Dark gradient overlay mask for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/85 via-[#0B0F19]/75 to-[#0B0F19]" />
        
        {/* Glowing ambient center accent */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full blur-[140px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(79,70,229,0.25) 0%, rgba(147,51,234,0.15) 50%, transparent 100%)' }}
        />
      </div>

      {/* ── Centered Hero Content ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center my-auto pb-16 sm:pb-24">
        


        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          Turning Your{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Vision
          </span>{' '}
          Into{' '}
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Reality
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
          We listen to and deeply understand your vision, then work tirelessly to transform it into reality using technology. From web platforms and Flutter mobile apps to Django backends and digital marketing, we turn ideas into high-impact software.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/services"
            className="
              relative px-7 py-3.5 rounded-full
              bg-indigo-600 text-white
              border border-indigo-500
              font-semibold text-sm
              flex items-center gap-2.5 group
              shadow-[0_0_25px_rgba(79,70,229,0.35)]
              transition-all duration-300 ease-out
              hover:bg-indigo-500
              hover:border-indigo-400
              hover:shadow-[0_0_35px_rgba(99,102,241,0.5)]
              active:scale-[0.98]
            "
          >
            <span>Our Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>

          <Link
            to="/contact"
            className="
              px-7 py-3.5 rounded-full
              bg-slate-900/80 text-slate-200
              border border-slate-700/80 backdrop-blur-md
              font-semibold text-sm
              flex items-center gap-2
              transition-all duration-300 ease-out
              hover:bg-slate-800
              hover:text-white
              hover:border-slate-500
              active:scale-[0.98]
            "
          >
            <span>Get in Touch</span>
          </Link>
        </div>

      </div>

      {/* ── Asymmetric Wave → light services section ── */}
      <div className="relative w-full overflow-hidden z-10" style={{ height: '80px', marginBottom: '-1px' }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C200,80 400,0 600,40 C800,80 1000,10 1200,50 C1300,65 1380,30 1440,40 L1440,80 L0,80 Z"
            fill="#f8f7ff"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
