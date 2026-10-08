import React, { useState } from 'react';
import { ChevronDown, FileText, Briefcase, AlertTriangle, Scale, Ban, Globe, Mail, CheckCircle, ShieldCheck } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../seo/SEO';
import { pagesSeoData } from '../seo/seoData';
import Breadcrumbs from '../components/common/Breadcrumbs';

const sections = [
  {
    id: 'acceptance',
    icon: CheckCircle,
    title: '1. Acceptance of Terms',
    content: (
      <>
        <p>
          By accessing, browsing, or using any part of the Fovea IT website (<strong className="text-white">foveait.com</strong>) or engaging our digital services, you confirm that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy.
        </p>
        <p className="mt-3">
          If you are accessing our services on behalf of a company or organization, you represent and warrant that you have the authority to bind that entity to these terms. If you do not agree with any part of these Terms of Use, please discontinue use of our website and services immediately.
        </p>
        <p className="mt-3">
          Fovea IT reserves the right to update or modify these Terms of Use at any time without prior notice. Continued use of our website after any changes constitutes your acceptance of the revised terms.
        </p>
      </>
    )
  },
  {
    id: 'services',
    icon: Briefcase,
    title: '2. Services & Engagements',
    content: (
      <>
        <p className="mb-3">
          Fovea IT provides custom software engineering, web development, mobile application development (Flutter), cloud infrastructure & DevOps, UI/UX design, and digital marketing & SEO services.
        </p>
        <p className="mb-3">
          All services are delivered under separate, formal agreements (Statements of Work, Service Contracts, or Project Proposals) which govern the specific scope, timeline, deliverables, and pricing for each engagement. These Terms of Use apply to your general interaction with our website and company.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Service scope and deliverables are defined exclusively in signed project agreements.</li>
          <li>Fovea IT reserves the right to refuse any project or engagement at its sole discretion.</li>
          <li>Project timelines are estimates; delays caused by client feedback cycles, scope changes, or external dependencies are not the liability of Fovea IT.</li>
          <li>Fovea IT may engage qualified subcontractors for specific aspects of a project while retaining overall delivery responsibility.</li>
        </ul>
      </>
    )
  },
  {
    id: 'ip',
    icon: ShieldCheck,
    title: '3. Intellectual Property',
    content: (
      <>
        <p className="mb-3">
          All content on this website — including but not limited to text, graphics, logos, design elements, icons, images, and software — is the property of Fovea IT or its content suppliers and is protected by applicable intellectual property laws.
        </p>
        <p className="mb-3">
          <strong className="text-white">Our Website Content:</strong> You may not reproduce, distribute, modify, publicly display, or create derivative works from any content on this site without express written permission from Fovea IT.
        </p>
        <p className="mb-3">
          <strong className="text-white">Client Work:</strong> Intellectual property ownership for custom-developed software, designs, and deliverables is determined by the terms of the signed project agreement. Unless otherwise agreed in writing, full ownership transfers to the client upon receipt of final payment.
        </p>
        <p>
          <strong className="text-white">Open Source Components:</strong> Where our work incorporates open-source libraries or frameworks, those components remain governed by their respective licenses (e.g., MIT, Apache 2.0).
        </p>
      </>
    )
  },
  {
    id: 'user-conduct',
    icon: Scale,
    title: '4. Acceptable Use',
    content: (
      <>
        <p className="mb-3">When using our website and services, you agree not to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Use the site for any unlawful purpose or in violation of any regulations.</li>
          <li>Attempt to gain unauthorized access to any portion of our website, servers, or databases.</li>
          <li>Upload or transmit malicious code, viruses, or any software designed to damage or disrupt systems.</li>
          <li>Scrape, harvest, or collect personal information about other users without consent.</li>
          <li>Submit false or misleading information through any of our forms or contact channels.</li>
          <li>Impersonate Fovea IT, its employees, or any other person or entity.</li>
          <li>Use automated bots or scripts to access the site in a manner that overloads our infrastructure.</li>
        </ul>
      </>
    )
  },
  {
    id: 'liability',
    icon: AlertTriangle,
    title: '5. Limitation of Liability',
    content: (
      <>
        <p className="mb-3">
          Fovea IT's website and general informational content is provided on an "as is" and "as available" basis without any warranties of any kind, express or implied.
        </p>
        <p className="mb-3">
          To the fullest extent permitted by Nepalese law, Fovea IT shall not be liable for:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Any indirect, incidental, special, or consequential damages arising from use of this website.</li>
          <li>Loss of profits, data, or business opportunities resulting from reliance on website content.</li>
          <li>Temporary unavailability of our website due to technical maintenance or unforeseen outages.</li>
          <li>Inaccuracies or errors in informational content, which may be updated without notice.</li>
        </ul>
        <p className="mt-3">
          Our total liability for any claim arising from your use of this website shall not exceed NPR 10,000 (approximately USD 75). Liability for contracted development services is governed separately in the applicable project agreement.
        </p>
      </>
    )
  },
  {
    id: 'third-party',
    icon: Globe,
    title: '6. Third-Party Links',
    content: (
      <>
        <p className="mb-3">
          Our website may contain links to third-party websites, platforms, or services that are not owned or controlled by Fovea IT. These links are provided for your convenience and informational purposes only.
        </p>
        <p className="mb-3">
          Fovea IT has no control over the content, privacy practices, or terms of external websites and assumes no responsibility for them. We encourage you to review the privacy policy and terms of any third-party site you visit.
        </p>
        <p>
          Inclusion of any external link does not imply endorsement, sponsorship, or affiliation with the linked website or its owners.
        </p>
      </>
    )
  },
  {
    id: 'prohibited',
    icon: Ban,
    title: '7. Prohibited Interactions',
    content: (
      <>
        <p className="mb-3">The following interactions with Fovea IT are strictly prohibited:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Submitting inquiry forms with intent to spam, phish, or conduct social engineering.</li>
          <li>Contacting Fovea IT staff through personal channels obtained via our website without professional intent.</li>
          <li>Misrepresenting yourself as a client, partner, or employee of Fovea IT.</li>
          <li>Using project proposals, pricing information, or technical documentation received from Fovea IT for competitive intelligence.</li>
        </ul>
      </>
    )
  },
  {
    id: 'governing-law',
    icon: FileText,
    title: '8. Governing Law & Disputes',
    content: (
      <>
        <p className="mb-3">
          These Terms of Use are governed by and construed in accordance with the laws of Nepal, without regard to conflict of law principles.
        </p>
        <p className="mb-3">
          Any disputes arising from the use of this website or our general services shall first be attempted to be resolved through good-faith negotiation between the parties. If unsuccessful, disputes shall be submitted to the jurisdiction of courts in Kathmandu, Nepal.
        </p>
        <p>
          For disputes related to contracted development services, the dispute resolution clause in the applicable project agreement shall take precedence.
        </p>
      </>
    )
  },
  {
    id: 'contact',
    icon: Mail,
    title: '9. Contact',
    content: (
      <>
        <p className="mb-4">For questions or concerns about these Terms of Use, please contact:</p>
        <div className="space-y-1.5">
          <p><strong className="text-white">Fovea IT — Legal Enquiries</strong></p>
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

export function Terms() {
  const seoInfo = pagesSeoData.terms;
  const [openId, setOpenId] = useState('acceptance');

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
          <div className="absolute top-10 right-1/3 w-[400px] h-[300px] bg-violet-600/8 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-indigo-600/6 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10">
          <Breadcrumbs items={[{ name: 'Terms of Use' }]} />
          <div className="mt-6 flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
              <FileText className="w-7 h-7 text-violet-400" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Terms of Use</h1>
              <p className="text-slate-400 text-sm mt-2">Last updated: <span className="text-indigo-400 font-mono">October 2026</span> &bull; Fovea IT, Kathmandu, Nepal</p>
            </div>
          </div>
          <p className="mt-6 text-slate-300 text-base leading-relaxed max-w-2xl">
            These Terms of Use govern your access to and use of the Fovea IT website and services. By using our site, you agree to these terms. Please review them carefully before proceeding.
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
              { label: 'Privacy Policy', href: '/privacy-policy', desc: 'How we handle your data' },
              { label: 'Data Security', href: '/data-security', desc: 'Our security measures' },
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

export default Terms;
