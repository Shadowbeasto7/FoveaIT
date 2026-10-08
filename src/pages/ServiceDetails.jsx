import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../seo/SEO';
import Breadcrumbs from '../components/common/Breadcrumbs';
import Button from '../components/common/Button';
import Badge from '../components/common/Badge';
import FAQAccordion from '../components/services/FAQAccordion';
import CTASection from '../components/home/CTASection';
import { servicesData } from '../data/services';
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from '../seo/structuredData';
import { CheckCircle2, ArrowRight, Code2, Globe, Smartphone, Cloud, Cpu, Palette, AlertCircle } from 'lucide-react';
import { companyData } from '../data/company';

import LottiePlayer from '../components/common/LottiePlayer';
import codingAnim from '../assets/lottie/developer.json';
import webAnim from '../assets/lottie/webapp.json';
import appDevAnim from '../assets/lottie/appdev.json';
import cloudAnim from '../assets/lottie/cloud2.json';
import marketingAnim from '../assets/lottie/growth.json';
import designAnim from '../assets/lottie/uidesign.json';

const lottieMap = {
  'software-development': { anim: codingAnim, grad: 'from-indigo-950 to-violet-950' },
  'web-development': { anim: designAnim, grad: 'from-blue-950 to-indigo-950' },
  'mobile-development': { anim: appDevAnim, grad: 'from-purple-950 to-blue-950' },
  'cloud-solutions': { anim: cloudAnim, grad: 'from-cyan-950 to-indigo-950' },
  'digital-marketing': { anim: marketingAnim, grad: 'from-emerald-950 to-teal-950' },
  'ui-ux-design': { anim: webAnim, grad: 'from-violet-950 to-pink-950' }
};

const iconMap = {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Cpu,
  Palette
};

export function ServiceDetails() {
  const { serviceId } = useParams();
  const service = servicesData.find(s => s.slug === serviceId || s.id === serviceId);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const IconComponent = iconMap[service.iconName] || Code2;
  const lottieInfo = lottieMap[service.slug] || lottieMap['mobile-development'];
  const canonicalUrl = `${companyData.siteUrl}/services/${service.slug}`;
  const hasFaqs = service.faqs && service.faqs.length > 0;
  const jsonLd = [
    getServiceSchema(service),
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Services', url: '/services' },
      { name: service.shortTitle }
    ]),
    ...(hasFaqs ? [getFAQSchema(service.faqs)] : [])
  ];

  // Related services excluding current
  const relatedServices = servicesData.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <PageLayout>
      <SEO
        title={`${service.title} | Fovea IT`}
        description={service.shortDescription}
        canonical={canonicalUrl}
        keywords={[service.shortTitle, ...service.technologies, "Fovea IT Service", "Kathmandu Software"]}
        jsonLd={jsonLd}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <Breadcrumbs items={[
          { name: 'Services', url: '/services' },
          { name: service.shortTitle }
        ]} />

        {/* Header Hero Block with Lottie Animation */}
        <div className="glass-panel rounded-[3rem] p-8 sm:p-12 border border-purple-500/30 my-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-purple-950 border border-purple-500/40 flex items-center justify-center text-purple-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <Badge variant="purple">Service Specification</Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                {service.title}
              </h1>

              <p className="text-lg text-cyan-300 font-semibold">
                {service.tagline}
              </p>

              <p className="text-base text-gray-300 font-light leading-relaxed">
                {service.overview}
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button to="/contact" variant="primary" size="md" icon={ArrowRight}>
                  Request Scoping for {service.shortTitle}
                </Button>
              </div>
            </div>

            {/* Lottie App / Service Animation */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                className={`relative w-full max-w-sm aspect-[4/3] rounded-3xl overflow-hidden border border-indigo-500/30 shadow-2xl bg-gradient-to-br ${lottieInfo.grad} flex items-center justify-center p-4 group`}
              >
                <LottiePlayer
                  animationData={lottieInfo.anim}
                  loop
                  autoplay
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>
        </div>

        {/* Problems Solved & Core Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-16">
          
          {/* Problems Solved */}
          <div className="glass-panel rounded-[2.5rem] p-8 border border-rose-500/20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-950/80 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">Challenges We Solve</h2>
            </div>
            <ul className="space-y-4 text-sm text-gray-300">
              {service.problemsSolved.map((prob, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0"></span>
                  <span className="font-light">{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="glass-panel rounded-[2.5rem] p-8 border border-cyan-500/20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-white">Service Capabilities</h2>
            </div>
            <ul className="space-y-4 text-sm text-gray-300">
              {service.capabilities.map((cap, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="font-light">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Development Approach & Tech Stack */}
        <div className="glass-panel rounded-[2.5rem] p-8 sm:p-12 border border-purple-500/25 my-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">ENGINEERING METHODOLOGY</span>
              <h2 className="text-2xl font-bold text-white">Development Approach</h2>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                {service.approach}
              </p>
            </div>

            <div className="lg:col-span-5 bg-purple-950/40 p-6 rounded-2xl border border-purple-500/30 space-y-3">
              <h3 className="text-xs uppercase font-bold tracking-widest text-cyan-400">Primary Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map(t => (
                  <span key={t} className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-200 border border-white/10 text-xs font-mono font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Service FAQ */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="my-16">
            <FAQAccordion items={service.faqs} title={`${service.shortTitle} FAQ`} />
          </div>
        )}

        {/* Related Services */}
        <div className="my-16">
          <h2 className="text-2xl font-bold text-white mb-8 border-l-2 border-cyan-400 pl-3">
            Related Engineering Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map(rel => (
              <div key={rel.id} className="glass-card p-6 rounded-2xl border border-purple-500/20">
                <h3 className="text-lg font-bold text-white mb-2">{rel.shortTitle}</h3>
                <p className="text-xs text-gray-300 mb-4 line-clamp-2">{rel.shortDescription}</p>
                <Link to={`/services/${rel.slug}`} className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <CTASection />
      </div>
    </PageLayout>
  );
}

export default ServiceDetails;
