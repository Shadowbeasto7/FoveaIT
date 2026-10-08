import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../seo/SEO';
import { pagesSeoData } from '../seo/seoData';
import Breadcrumbs from '../components/common/Breadcrumbs';
import SectionHeading from '../components/common/SectionHeading';
import CTASection from '../components/home/CTASection';
import { companyData } from '../data/company';
import { leadershipData, teamData } from '../data/team';
import { Shield, Zap, Users, Code, Terminal, Layout, Cloud, TrendingUp } from 'lucide-react';

const iconMap = {
  Terminal,
  Layout,
  Cloud,
  TrendingUp
};

export function About() {
  const seoInfo = pagesSeoData.about;

  return (
    <PageLayout>
      <SEO
        title={seoInfo.title}
        description={seoInfo.description}
        canonical={seoInfo.canonical}
        keywords={seoInfo.keywords}
        ogImage={seoInfo.ogImage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <Breadcrumbs items={[{ name: 'About Fovea IT' }]} />

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto my-12 space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300 block">
            ABOUT FOVEA IT • SOFTWARE ENGINEERING STUDIO
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Purposeful Software Engineering in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Kathmandu, Nepal</span>
          </h1>
          <p className="text-lg text-slate-300 font-light leading-relaxed">
            {companyData.fullDescription}
          </p>
        </div>

        {/* ── Our Story Section ── */}
        <div className="my-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-400 block mb-3">HOW IT ALL BEGAN</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Story</span>
              </h2>
            </div>

            {/* Story Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 via-purple-500/40 to-transparent hidden sm:block" />

              <div className="space-y-10">

                {/* Chapter 1 */}
                <div className="sm:pl-20 relative">
                  <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-indigo-600 border-4 border-[#0B0F19] items-center justify-center text-white font-extrabold text-sm shadow-lg shadow-indigo-500/40">
                    01
                  </div>
                  <div className="liquid-glass rounded-[2rem] p-7 sm:p-8 border border-indigo-500/20">
                    <h3 className="text-xl font-bold text-white mb-3">A Problem Hiding in Plain Sight</h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      Fovea IT's story begins with <span className="text-indigo-300 font-medium">CourierYatra</span> — an international courier company operating out of Kathmandu, Nepal. Our founder Sudip Basnet and CTO Nirdesh Khatiwada were working closely with the company and quickly noticed something that many businesses quietly struggle with: the entire operation — parcel records, payment tracking, customer data, and delivery status — was being managed through Excel spreadsheets and, in many cases, handwritten paper logs.
                    </p>
                  </div>
                </div>

                {/* Chapter 2 */}
                <div className="sm:pl-20 relative">
                  <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-purple-600 border-4 border-[#0B0F19] items-center justify-center text-white font-extrabold text-sm shadow-lg shadow-purple-500/40">
                    02
                  </div>
                  <div className="liquid-glass rounded-[2rem] p-7 sm:p-8 border border-purple-500/20">
                    <h3 className="text-xl font-bold text-white mb-3">The Real Cost of Manual Operations</h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      The problems were real and growing. Staff struggled daily to track <span className="text-purple-300 font-medium">which customers had paid and which had not</span>, to match parcels to the right owners, and to keep financial records accurate and up to date. As the business scaled, manual systems that once felt manageable became a constant source of errors, confusion, and lost revenue. It was clear that without proper software, growth would continue to come at a cost.
                    </p>
                  </div>
                </div>

                {/* Chapter 3 */}
                <div className="sm:pl-20 relative">
                  <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-cyan-600 border-4 border-[#0B0F19] items-center justify-center text-white font-extrabold text-sm shadow-lg shadow-cyan-500/40">
                    03
                  </div>
                  <div className="liquid-glass rounded-[2rem] p-7 sm:p-8 border border-cyan-500/20">
                    <h3 className="text-xl font-bold text-white mb-3">Building the Solution</h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      Rather than accepting this as the norm, Sudip and Nirdesh decided to build a solution from scratch. They developed a <span className="text-cyan-300 font-medium">comprehensive management software</span> that digitised CourierYatra's entire workflow — organising parcel records, automating payment tracking, linking packages to customers, and giving the team a single reliable system to run daily operations. What had once taken hours of manual cross-checking could now be done accurately in minutes.
                    </p>
                  </div>
                </div>

                {/* Chapter 4 */}
                <div className="sm:pl-20 relative">
                  <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-indigo-500 border-4 border-[#0B0F19] items-center justify-center text-white font-extrabold text-sm shadow-lg shadow-indigo-500/40">
                    04
                  </div>
                  <div className="liquid-glass rounded-[2rem] p-7 sm:p-8 border border-indigo-500/20">
                    <h3 className="text-xl font-bold text-white mb-3">Growing the Platform</h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      As the software proved its value, the team continued to evolve it. The next major step was introducing a <span className="text-indigo-300 font-medium">real-time parcel tracking system</span>, giving customers the ability to follow their shipment from pickup to delivery. What began as a simple operational fix had grown into a full-featured logistics platform — a complete system built to handle the demands of an international courier business.
                    </p>
                  </div>
                </div>

                {/* Chapter 5 — Birth of Fovea IT */}
                <div className="sm:pl-20 relative">
                  <div className="hidden sm:flex absolute left-0 top-1 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-[#0B0F19] items-center justify-center text-white font-extrabold text-sm shadow-lg shadow-purple-500/40">
                    05
                  </div>
                  <div className="relative overflow-hidden rounded-[2rem] p-7 sm:p-8 border border-indigo-400/30 bg-gradient-to-br from-indigo-950/60 via-[#111827] to-purple-950/40">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                    <h3 className="text-xl font-bold text-white mb-3">From One Problem to Many Solutions — Fovea IT is Born</h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      That first project lit the spark. The experience of solving a tangible, real-world business problem through software made one thing clear: <span className="text-white font-medium">there were hundreds of businesses across Nepal facing exactly the same challenges</span>, trapped in outdated, manual processes that technology could solve. Fovea IT was founded to do exactly that — to listen closely to businesses, understand their operational pain points, and build smart, reliable software that makes their work easier and their growth possible. CourierYatra was where it all began. And it remains a living example of what we do best.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ── Leadership Team Section ── */}
        <div className="my-20">
          <SectionHeading
            subtitle="LEADERSHIP & VISION"
            title="MEET OUR LEADERS"
            description="The driving force behind Fovea IT's software engineering, innovation, and client partnerships."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
            {leadershipData.map((leader) => (
              <div
                key={leader.id}
                className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#111827] to-[#0D121F] border border-indigo-500/20 hover:border-indigo-500/50 p-6 shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[4/4] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 group-hover:border-indigo-400/40 transition-colors">
                    <img
                      src={leader.image}
                      alt={`${leader.name} - ${leader.companyRole}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
                    
                    <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-indigo-600/90 backdrop-blur-md text-white text-[11px] font-bold tracking-wide shadow-lg border border-indigo-400/30">
                      {leader.role}
                    </span>
                  </div>

                  {/* Leader Info */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                      {leader.name}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-400 tracking-wide">
                      {leader.companyRole}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-indigo-300 font-medium">
                    Fovea IT Leadership
                  </span>
                  <span>Kathmandu, Nepal</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Section */}
        <div className="my-20">
          <SectionHeading
            subtitle="WHAT DRIVES US"
            title="CORE VALUES"
            description="Four simple principles guiding every line of code we write and every solution we build."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="liquid-glass rounded-[2rem] p-6 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-indigo-950/80 text-indigo-300 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Practical Innovation</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">Using modern web, mobile, and cloud tools to solve real everyday operational challenges.</p>
            </div>

            <div className="liquid-glass rounded-[2rem] p-6 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-indigo-950/80 text-indigo-300 flex items-center justify-center mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Scalability</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">Building modular systems with Flutter & Django that expand smoothly as your business grows.</p>
            </div>

            <div className="liquid-glass rounded-[2rem] p-6 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-indigo-950/80 text-indigo-300 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Data Security</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">Protecting data with strong encryption, role permissions, and security best practices.</p>
            </div>

            <div className="liquid-glass rounded-[2rem] p-6 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-indigo-950/80 text-indigo-300 flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Real Collaboration</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">Focusing on clear communication, regular updates, and honest collaboration every step of the way.</p>
            </div>
          </div>
        </div>

        {/* Engineering Capabilities Section */}
        <div className="my-20">
          <SectionHeading
            subtitle="TECHNICAL CAPABILITIES"
            title="ENGINEERING DEPARTMENTS"
            description="Our dedicated technical focus areas across web development, cloud, mobile, and digital marketing."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.map((member) => {
              const IconComp = iconMap[member.placeholderIcon] || Code;
              return (
                <div key={member.id} className="liquid-glass rounded-[2rem] p-6 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-full bg-indigo-950/80 border border-indigo-500/40 flex items-center justify-center text-indigo-300 mb-4 shadow-md">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 block mb-1">
                      {member.department}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{member.role}</h3>
                    <p className="text-xs font-semibold text-indigo-300 mb-3">{member.focus}</p>
                    <p className="text-xs text-slate-300 leading-relaxed font-light">{member.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <CTASection />
      </div>
    </PageLayout>
  );
}

export default About;
