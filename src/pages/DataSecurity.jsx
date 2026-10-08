import React, { useState } from 'react';
import { ChevronDown, Lock, Server, ShieldCheck, Eye, Key, AlertTriangle, RefreshCw, Mail, Wifi } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../seo/SEO';
import { pagesSeoData } from '../seo/seoData';
import Breadcrumbs from '../components/common/Breadcrumbs';

const sections = [
  {
    id: 'commitment',
    icon: ShieldCheck,
    title: '1. Our Security Commitment',
    content: (
      <>
        <p>
          At Fovea IT, data security is not an afterthought — it is a foundational design principle embedded in every system we build and every process we operate. We are committed to protecting the confidentiality, integrity, and availability of all personal and business data entrusted to us.
        </p>
        <p className="mt-3">
          This Data Security Policy describes the specific technical and organizational measures Fovea IT maintains to protect data across our own website, internal systems, and client-facing software products.
        </p>
        <p className="mt-3">
          Our practices align with internationally recognized frameworks including ISO/IEC 27001 principles and the OWASP Top 10 security guidelines, adapted for our operational scale as a growing Nepalese IT company.
        </p>
      </>
    )
  },
  {
    id: 'encryption',
    icon: Lock,
    title: '2. Encryption & Data in Transit',
    content: (
      <>
        <p className="mb-3">We enforce encryption across all layers of data transmission:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">TLS 1.2 / 1.3:</strong> All communication between your browser and our website is encrypted using modern TLS certificates. We do not support outdated SSL or TLS 1.0/1.1 protocols.</li>
          <li><strong className="text-white">HTTPS-Only:</strong> Our website enforces HTTPS across all pages. HTTP connections are automatically redirected to HTTPS.</li>
          <li><strong className="text-white">Form Data Encryption:</strong> All contact form submissions and client data are encrypted in transit before reaching our backend systems.</li>
          <li><strong className="text-white">API Security:</strong> Internal API communications between services use token-based authentication (JWT/OAuth 2.0) over encrypted channels.</li>
          <li><strong className="text-white">Email:</strong> Sensitive correspondence is sent through TLS-secured email channels where supported by the recipient's mail server.</li>
        </ul>
      </>
    )
  },
  {
    id: 'data-at-rest',
    icon: Server,
    title: '3. Data at Rest',
    content: (
      <>
        <p className="mb-3">Data stored on our systems and in client project repositories is protected through:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Encrypted Storage:</strong> Sensitive contact and project data is stored in encrypted databases (AES-256 encryption standard).</li>
          <li><strong className="text-white">Secure Cloud Infrastructure:</strong> We use reputable cloud providers (AWS, DigitalOcean, or equivalent) with built-in physical data center security, redundancy, and compliance certifications.</li>
          <li><strong className="text-white">Backup Encryption:</strong> All data backups are encrypted and stored separately from primary data with restricted access.</li>
          <li><strong className="text-white">Database Hardening:</strong> Production databases are not publicly accessible. Access requires VPN or bastion host authentication.</li>
        </ul>
      </>
    )
  },
  {
    id: 'access-control',
    icon: Key,
    title: '4. Access Control & Authentication',
    content: (
      <>
        <p className="mb-3">We enforce the principle of least privilege across all internal systems:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Role-Based Access:</strong> Each team member has access only to the systems and data required for their specific role. Access is revoked immediately upon role change or departure.</li>
          <li><strong className="text-white">Multi-Factor Authentication (MFA):</strong> MFA is required for all internal admin systems, cloud consoles, code repositories (GitHub), and project management tools.</li>
          <li><strong className="text-white">Strong Password Policy:</strong> All internal accounts enforce complex passwords (minimum 12 characters, mixed case, special characters) and use a secure password manager.</li>
          <li><strong className="text-white">SSH Key Authentication:</strong> Server access is restricted to SSH key pairs. Password-based SSH login is disabled on all production servers.</li>
          <li><strong className="text-white">Session Management:</strong> Admin sessions automatically expire after periods of inactivity to prevent unauthorized use of unattended workstations.</li>
        </ul>
      </>
    )
  },
  {
    id: 'network',
    icon: Wifi,
    title: '5. Network & Infrastructure Security',
    content: (
      <>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Firewall Protection:</strong> Web Application Firewalls (WAF) protect our public-facing systems from common attacks including SQL injection, XSS, and CSRF.</li>
          <li><strong className="text-white">DDoS Mitigation:</strong> We use CDN-level DDoS protection (via Cloudflare or equivalent) on public infrastructure.</li>
          <li><strong className="text-white">VPN Access:</strong> Remote access to internal systems is gated through a VPN. Direct public access to internal networks is blocked.</li>
          <li><strong className="text-white">Intrusion Detection:</strong> Automated alerting systems monitor for unusual access patterns, unauthorized login attempts, and anomalous data transfers.</li>
          <li><strong className="text-white">Port Management:</strong> Unnecessary network ports are closed. Only required ports (80, 443, 22 via VPN) are open on production servers.</li>
        </ul>
      </>
    )
  },
  {
    id: 'monitoring',
    icon: Eye,
    title: '6. Monitoring & Incident Response',
    content: (
      <>
        <p className="mb-3">
          We maintain continuous monitoring and a documented incident response process:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">24/7 Uptime Monitoring:</strong> Infrastructure health, response times, and error rates are monitored continuously with instant alerts to the engineering team.</li>
          <li><strong className="text-white">Security Logging:</strong> All access attempts, system changes, and admin actions are logged with timestamps and user identifiers for audit trails.</li>
          <li><strong className="text-white">Incident Response Plan:</strong> In the event of a confirmed security incident, we will: (1) contain the breach, (2) assess scope and impact, (3) notify affected parties within 72 hours where legally required, and (4) remediate and document findings.</li>
          <li><strong className="text-white">Penetration Testing:</strong> We conduct periodic security reviews and vulnerability assessments on critical systems and client-facing applications.</li>
        </ul>
      </>
    )
  },
  {
    id: 'dev-security',
    icon: Lock,
    title: '7. Secure Development Practices',
    content: (
      <>
        <p className="mb-3">Security is integrated throughout our software development lifecycle (SDLC):</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Code Reviews:</strong> All code changes undergo peer review with a security checklist before merging to production branches.</li>
          <li><strong className="text-white">Dependency Scanning:</strong> We use automated tools (npm audit, Dependabot) to identify and remediate vulnerable third-party dependencies.</li>
          <li><strong className="text-white">Secret Management:</strong> API keys, tokens, and credentials are never committed to source code. We use environment variables and secret managers (AWS Secrets Manager or similar).</li>
          <li><strong className="text-white">OWASP Standards:</strong> Our development team applies OWASP Top 10 mitigations including input validation, output encoding, and parameterized queries.</li>
          <li><strong className="text-white">Staging Environments:</strong> All code is tested in isolated staging environments before deployment to production.</li>
        </ul>
      </>
    )
  },
  {
    id: 'breach',
    icon: AlertTriangle,
    title: '8. Data Breach Notification',
    content: (
      <>
        <p className="mb-3">
          In the event of a data breach that may affect your personal information, Fovea IT will:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Investigate and contain the breach as a top priority.</li>
          <li>Notify affected individuals within 72 hours of confirmed discovery where required by applicable law or the severity of the incident warrants it.</li>
          <li>Provide clear details of what data was affected, how it occurred, and what steps we are taking.</li>
          <li>Cooperate fully with relevant authorities in Nepal as required.</li>
          <li>Document the incident and implement corrective measures to prevent recurrence.</li>
        </ul>
        <p className="mt-3">
          If you believe your data may have been compromised, please contact us immediately at <a href="mailto:contact@foveait.com" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">contact@foveait.com</a>.
        </p>
      </>
    )
  },
  {
    id: 'team-training',
    icon: RefreshCw,
    title: '9. Team Training & Policy Reviews',
    content: (
      <>
        <p className="mb-3">
          Our people are our first line of defense. We invest in ongoing security awareness:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>All team members receive security onboarding covering data handling, phishing awareness, and secure coding practices.</li>
          <li>Regular team briefings on emerging threats and updated security protocols.</li>
          <li>This Data Security Policy is reviewed and updated at least annually or following any significant security incident.</li>
          <li>All contractors and third-party service providers with system access must agree to our data security standards before engagement.</li>
        </ul>
      </>
    )
  },
  {
    id: 'contact',
    icon: Mail,
    title: '10. Contact Our Security Team',
    content: (
      <>
        <p className="mb-4">To report a vulnerability, ask a security question, or request our security documentation:</p>
        <div className="space-y-1.5">
          <p><strong className="text-white">Fovea IT — Security</strong></p>
          <p>Kathmandu, Nepal</p>
          <p>Email: <a href="mailto:contact@foveait.com" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">contact@foveait.com</a></p>
          <p className="text-xs text-slate-400 mt-2">Please use subject: "Security Report — [brief description]"</p>
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

export function DataSecurity() {
  const seoInfo = pagesSeoData.dataSecurity;
  const [openId, setOpenId] = useState('commitment');

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
          <div className="absolute top-0 left-1/3 w-[500px] h-[350px] bg-indigo-600/8 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-0 w-[300px] h-[250px] bg-blue-600/5 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10">
          <Breadcrumbs items={[{ name: 'Data Security' }]} />
          <div className="mt-6 flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
              <Lock className="w-7 h-7 text-indigo-400" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Data Security Policy</h1>
              <p className="text-slate-400 text-sm mt-2">Last updated: <span className="text-indigo-400 font-mono">October 2026</span> &bull; Fovea IT, Kathmandu, Nepal</p>
            </div>
          </div>
          <p className="mt-6 text-slate-300 text-base leading-relaxed max-w-2xl">
            Security is core to everything we build. This policy outlines the technical and organizational safeguards Fovea IT employs to protect your data — from encrypted transmission to secure infrastructure, access controls, and incident response.
          </p>

          {/* Security pillars summary */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'TLS Encrypted', sub: 'All data in transit' },
              { label: 'AES-256 Storage', sub: 'At-rest encryption' },
              { label: 'MFA Required', sub: 'All internal systems' },
              { label: 'Regular Audits', sub: 'Ongoing assessments' },
            ].map(pill => (
              <div key={pill.label} className="bg-indigo-600/10 border border-indigo-500/20 rounded-xl px-4 py-3 text-center">
                <p className="text-white font-semibold text-xs">{pill.label}</p>
                <p className="text-indigo-400 text-[11px] mt-0.5">{pill.sub}</p>
              </div>
            ))}
          </div>
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
              { label: 'Terms of Use', href: '/terms-and-conditions', desc: 'Usage rules & agreements' },
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

export default DataSecurity;
