import React, { useState } from 'react';
import { ChevronDown, Shield, Eye, Lock, Users, Mail, Globe, Database, RefreshCw } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../seo/SEO';
import { pagesSeoData } from '../seo/seoData';
import Breadcrumbs from '../components/common/Breadcrumbs';

const sections = [
  {
    id: 'overview',
    icon: Shield,
    title: '1. Overview',
    content: (
      <>
        <p>
          Fovea IT ("we", "our", or "us") is a software development and digital services company headquartered in Kathmandu, Nepal. We respect your privacy and are committed to protecting any personal data you share with us through our website (<strong className="text-white">foveait.com</strong>) and our related digital services.
        </p>
        <p className="mt-3">
          This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of our site.
        </p>
      </>
    )
  },
  {
    id: 'data-collection',
    icon: Database,
    title: '2. Information We Collect',
    content: (
      <>
        <p className="font-semibold text-white mb-2">Information You Provide Directly</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li>Full name and professional title</li>
          <li>Email address and phone number</li>
          <li>Company or organization name</li>
          <li>Project descriptions, budget estimates, and requirements submitted via our contact form</li>
          <li>Any additional information you voluntarily include in messages</li>
        </ul>
        <p className="font-semibold text-white mb-2">Information Collected Automatically</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>IP address and approximate geographic location (country/city level)</li>
          <li>Browser type, version, and operating system</li>
          <li>Pages visited, time spent, and navigation paths on our site</li>
          <li>Referral URLs (the page you came from)</li>
          <li>Device identifiers and screen resolution for responsive design analytics</li>
        </ul>
      </>
    )
  },
  {
    id: 'data-use',
    icon: Eye,
    title: '3. How We Use Your Information',
    content: (
      <>
        <p className="mb-3">We use the information we collect exclusively to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Respond to your project inquiries, consultations, and support requests</li>
          <li>Prepare and deliver project proposals, timelines, and service agreements</li>
          <li>Communicate updates, milestones, and deliverables for active projects</li>
          <li>Improve our website performance, content, and user experience through analytics</li>
          <li>Comply with applicable legal obligations in Nepal and internationally</li>
          <li>Detect and prevent fraud, unauthorized access, or misuse of our services</li>
          <li>Send transactional emails directly related to your inquiries (no unsolicited marketing)</li>
        </ul>
        <p className="mt-3 text-indigo-300 font-medium">
          We do not sell, rent, trade, or share your personal data with third parties for their marketing or commercial purposes.
        </p>
      </>
    )
  },
  {
    id: 'data-sharing',
    icon: Users,
    title: '4. Information Sharing & Disclosure',
    content: (
      <>
        <p className="mb-3">We may share your information in limited circumstances:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Service Providers:</strong> Trusted third-party platforms (e.g., email delivery, cloud hosting, analytics) that process data on our behalf under strict confidentiality agreements.</li>
          <li><strong className="text-white">Legal Requirements:</strong> When required by Nepalese law, court order, or government authority, we may disclose information as legally compelled.</li>
          <li><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, personal data may be transferred as part of that transaction with equivalent privacy protections.</li>
          <li><strong className="text-white">Protection of Rights:</strong> To enforce our Terms of Use, protect our rights, or prevent harm to users or third parties.</li>
        </ul>
      </>
    )
  },
  {
    id: 'cookies',
    icon: Globe,
    title: '5. Cookies & Tracking Technologies',
    content: (
      <>
        <p className="mb-3">
          Our website uses cookies and similar tracking technologies to enhance functionality and analyze usage. See our full <a href="/cookies-policy" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Cookies Policy</a> for complete details.
        </p>
        <p className="mb-2 font-semibold text-white">Types of cookies we use:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong className="text-white">Essential Cookies:</strong> Required for the website to function (session management, security).</li>
          <li><strong className="text-white">Analytics Cookies:</strong> Help us understand visitor behavior to improve the site.</li>
          <li><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences across visits.</li>
        </ul>
        <p className="mt-3">You may disable cookies through your browser settings, though some features may not function properly.</p>
      </>
    )
  },
  {
    id: 'data-retention',
    icon: RefreshCw,
    title: '6. Data Retention',
    content: (
      <>
        <p className="mb-3">
          We retain personal data only for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Inquiry / Contact Data:</strong> Retained for up to 24 months from the last interaction, then securely deleted.</li>
          <li><strong className="text-white">Active Client Project Data:</strong> Retained for the duration of the engagement and up to 5 years post-project for contractual and legal compliance.</li>
          <li><strong className="text-white">Analytics Data:</strong> Aggregated, anonymized analytics are retained indefinitely; individual session data is purged after 14 months.</li>
        </ul>
        <p className="mt-3">
          You may request deletion of your personal data at any time by contacting us at <a href="mailto:contact@foveait.com" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">contact@foveait.com</a>.
        </p>
      </>
    )
  },
  {
    id: 'security',
    icon: Lock,
    title: '7. Data Security',
    content: (
      <>
        <p className="mb-3">
          We implement industry-standard technical and organizational safeguards to protect your personal data. These include:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>HTTPS/TLS encryption for all data in transit</li>
          <li>Encrypted storage for sensitive project and contact data</li>
          <li>Strict role-based access controls limiting data access to authorized personnel only</li>
          <li>Regular security reviews and vulnerability assessments</li>
        </ul>
        <p className="mt-3">
          For our comprehensive security practices, please review our <a href="/data-security" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Data Security Policy</a>.
        </p>
        <p className="mt-3">
          While we maintain strong safeguards, no method of internet transmission or electronic storage is 100% secure. We cannot guarantee absolute security.
        </p>
      </>
    )
  },
  {
    id: 'your-rights',
    icon: Shield,
    title: '8. Your Rights',
    content: (
      <>
        <p className="mb-3">You have the following rights with respect to your personal data:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete data.</li>
          <li><strong className="text-white">Deletion:</strong> Request erasure of your personal data ("right to be forgotten").</li>
          <li><strong className="text-white">Portability:</strong> Request your data in a structured, machine-readable format.</li>
          <li><strong className="text-white">Objection:</strong> Object to processing of your data for direct communications.</li>
          <li><strong className="text-white">Restriction:</strong> Request that we restrict processing of your data in specific circumstances.</li>
        </ul>
        <p className="mt-3">To exercise any of these rights, email <a href="mailto:contact@foveait.com" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">contact@foveait.com</a> with the subject line "Data Rights Request".</p>
      </>
    )
  },
  {
    id: 'contact',
    icon: Mail,
    title: '9. Contact Us',
    content: (
      <>
        <p className="mb-4">For any questions, concerns, or requests related to this Privacy Policy, please reach out:</p>
        <div className="space-y-1.5">
          <p><strong className="text-white">Fovea IT</strong></p>
          <p>Kathmandu, Nepal</p>
          <p>Email: <a href="mailto:contact@foveait.com" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">contact@foveait.com</a></p>
          <p>Phone: <a href="tel:+9779748542890" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">+977 9748542890</a></p>
        </div>
      </>
    )
  }
];

function AccordionSection({ section, isOpen, onToggle }) {
  const IconComponent = section.icon;
  return (
    <div className={`border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'border-indigo-500/40 bg-indigo-500/5' : 'border-white/8 hover:border-white/15'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-indigo-600/30 text-indigo-300' : 'bg-white/5 text-slate-400'}`}>
            <IconComponent className="w-4 h-4" />
          </div>
          <span className={`font-semibold text-sm sm:text-base transition-colors ${isOpen ? 'text-white' : 'text-slate-200'}`}>{section.title}</span>
        </div>
        <ChevronDown className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-indigo-400' : ''}`} />
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4">
          {section.content}
        </div>
      </div>
    </div>
  );
}

export function PrivacyPolicy() {
  const seoInfo = pagesSeoData.privacyPolicy;
  const [openId, setOpenId] = useState('overview');

  return (
    <PageLayout>
      <SEO
        title={seoInfo.title}
        description={seoInfo.description}
        canonical={seoInfo.canonical}
        keywords={seoInfo.keywords}
        ogImage={seoInfo.ogImage}
      />

      {/* Hero */}
      <div className="relative bg-[#0B0F19] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-1/4 w-[400px] h-[300px] bg-indigo-600/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-purple-600/6 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10">
          <Breadcrumbs items={[{ name: 'Privacy Policy' }]} />
          <div className="mt-6 flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
              <Shield className="w-7 h-7 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
              <p className="text-slate-400 text-sm mt-2">Last updated: <span className="text-indigo-400 font-mono">October 2026</span> &bull; Fovea IT, Kathmandu, Nepal</p>
            </div>
          </div>
          <p className="mt-6 text-slate-300 text-base leading-relaxed max-w-2xl">
            Your privacy matters to us. This policy details how Fovea IT collects, uses, and protects the personal information you share when using our website or engaging our software development services.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#0B0F19] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="space-y-3">
            {sections.map(section => (
              <AccordionSection
                key={section.id}
                section={section}
                isOpen={openId === section.id}
                onToggle={() => setOpenId(openId === section.id ? null : section.id)}
              />
            ))}
          </div>

          {/* Related pages */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: 'Terms of Use', href: '/terms-and-conditions', desc: 'Usage rules & agreements' },
              { label: 'Data Security', href: '/data-security', desc: 'How we protect your data' },
              { label: 'Cookies Policy', href: '/cookies-policy', desc: 'Cookie usage & control' },
            ].map(link => (
              <a key={link.href} href={link.href} className="glass-panel rounded-2xl p-5 border border-white/8 hover:border-indigo-500/40 hover:bg-indigo-500/5 transition-all group">
                <p className="text-white font-semibold text-sm group-hover:text-indigo-300 transition-colors">{link.label} &rarr;</p>
                <p className="text-slate-400 text-xs mt-1">{link.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default PrivacyPolicy;
