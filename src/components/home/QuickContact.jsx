import React from 'react';

const statsData = [
  { value: '6',    label: 'Months of\nGrowth' },
  { value: '50+',  label: 'Companies\nPartnered' },
  { value: '7',    label: 'Completed\nProjects' },
  { value: 'Many', label: 'Active Projects\nin Development' }
];

// Each stat card has a unique organic border-radius
const cardRadii = [
  '54% 46% 38% 62% / 48% 56% 44% 52%',
  '38% 62% 58% 42% / 58% 42% 58% 42%',
  '62% 38% 46% 54% / 40% 60% 40% 60%',
  '46% 54% 62% 38% / 60% 40% 60% 40%'
];

export function QuickContact() {
  return (
    <section className="relative pb-0 overflow-hidden bg-[#0B0F19]">
      {/* ambient glow */}
      <div className="absolute top-1/2 left-20 w-[350px] h-[350px] bg-indigo-600/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left — Label + Heading */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-indigo-400/80 uppercase block">
              OUR REAL IMPACT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              6 Months.<br />
              <span className="gradient-text">50+ Partnered</span><br />
              Companies.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Every project we deliver is rooted in honest collaboration, rapid execution, and real business results.
            </p>
          </div>

          {/* Center — 4 Organic Stat Blobs */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-5">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-5 text-center"
                style={{
                  background: 'rgba(22,30,54,0.8)',
                  border: '1.5px solid rgba(99,102,241,0.2)',
                  borderRadius: cardRadii[idx],
                  boxShadow: '0 8px 30px rgba(79,70,229,0.12)',
                  minHeight: '110px'
                }}
              >
                <span className="text-3xl sm:text-4xl font-black text-indigo-300 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[11px] font-medium text-slate-400 mt-1.5 leading-tight whitespace-pre-line">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right — Organic Blob Mountain Image with Indigo Shade Halos */}
          <div className="lg:col-span-4 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs">

              {/* Halo Layer 1 — darkest violet-950, outermost */}
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: '46% 54% 58% 42% / 52% 46% 54% 48%',
                  background: 'rgba(46, 16, 101, 0.85)',
                  transform: 'scale(1.16) translate(7px, 9px)',
                  filter: 'blur(2px)',
                  zIndex: 0
                }}
              />
              {/* Halo Layer 2 — mid violet-900 */}
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: '52% 48% 44% 56% / 48% 54% 46% 52%',
                  background: 'rgba(76, 29, 149, 0.65)',
                  transform: 'scale(1.075) translate(3px, 4px)',
                  zIndex: 1
                }}
              />
              {/* Halo Layer 3 — lighter violet-700 */}
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: '58% 42% 48% 52% / 44% 58% 42% 56%',
                  background: 'rgba(109, 40, 217, 0.38)',
                  transform: 'scale(1.025) translate(1px, 2px)',
                  zIndex: 2
                }}
              />

              {/* Main blob image */}
              <div
                className="relative aspect-[4/3] overflow-hidden"
                style={{
                  borderRadius: '44% 56% 62% 38% / 50% 44% 56% 50%',
                  boxShadow: '0 25px 60px rgba(139,92,246,0.28), 0 8px 24px rgba(0,0,0,0.5)',
                  border: '2px solid rgba(139,92,246,0.35)',
                  zIndex: 3,
                  position: 'relative'
                }}
              >
                <img
                  src="/code_matrix_screen.jpg"
                  alt="Software source code on screen"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Asymmetric Wave Divider → light Process section ── */}
      <div className="relative w-full overflow-hidden" style={{ height: '80px', marginBottom: '-1px' }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,30 C300,80 600,10 900,50 C1100,75 1300,20 1440,45 L1440,80 L0,80 Z"
            fill="#f8f7ff"
          />
        </svg>
      </div>
    </section>
  );
}

export default QuickContact;
