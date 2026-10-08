import React, { useState } from 'react';
import { ChevronDown, Cookie, Globe, Settings, ToggleRight, Ban, RefreshCw, Mail, Info, Shield } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../seo/SEO';
import { pagesSeoData } from '../seo/seoData';
import Breadcrumbs from '../components/common/Breadcrumbs';

const cookieTypes = [
  {
    name: 'Essential Cookies',
    color: 'bg-green-500/20 border-green-500/30 text-green-400',
    dot: 'bg-green-400',
    desc: 'Required for core functionality. Cannot be disabled.',
    examples: ['Session tokens for security', 'CSRF protection tokens', 'Load balancing identifiers'],
    retention: 'Session / up to 24 hours'
  },
  {
    name: 'Analytics Cookies',
    color: 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400',
    dot: 'bg-indigo-400',
    desc: 'Help us understand how visitors use our website.',
    examples: ['Page view tracking', 'Time on page metrics', 'Navigation flow analysis', 'Bounce rate data'],
    retention: 'Up to 14 months'
  },
  {
    name: 'Preference Cookies',
    color: 'bg-violet-500/20 border-violet-500/30 text-violet-400',
    dot: 'bg-violet-400',
    desc: 'Remember your settings and preferences across visits.',
    examples: ['Language preferences', 'UI display settings', 'Returning visitor recognition'],
    retention: 'Up to 12 months'
  },
  {
    name: 'Marketing Cookies',
    color: 'bg-orange-500/20 border-orange-500/30 text-orange-400',
    dot: 'bg-orange-400',
    desc: 'Used only if you opt in. Track engagement for relevant content.',
    examples: ['Social sharing buttons', 'Referral campaign tracking', 'Re-engagement analytics'],
    retention: 'Up to 6 months (opt-in only)'
  }
];

const sections = [
  {
    id: 'what-are-cookies',
    icon: Info,
    title: '1. What Are Cookies?',
    content: (
      <>
        <p className="mb-3">
          Cookies are small text files that a website places on your browser or device when you visit. They allow the website to remember information about your visit — such as your preferences or whether you're logged in — making your next visit easier and the site more useful to you.
        </p>
        <p className="mb-3">
          Cookies do not contain personally identifiable information by themselves. However, when combined with other data, they can be used to identify browsing patterns. Fovea IT is committed to using cookies responsibly and transparently.
        </p>
        <p>
          In addition to cookies, we may also use similar technologies such as web beacons (tracking pixels), local storage, and session storage for equivalent purposes.
        </p>
      </>
    )
  },
  {
    id: 'cookies-we-use',
    icon: Cookie,
    title: '2. Cookies We Use',
    content: (
      <>
        <p className="mb-5">The following table summarizes the types of cookies we use on foveait.com:</p>
        <div className="space-y-4">
          {cookieTypes.map(ct => (
            <div key={ct.name} className={`rounded-xl border p-4 ${ct.color}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full ${ct.dot}`} />
                <p className="font-semibold text-sm">{ct.name}</p>
              </div>
              <p className="text-slate-300 text-xs mb-2">{ct.desc}</p>
              <ul className="text-slate-400 text-xs space-y-0.5 mb-2">
                {ct.examples.map(ex => <li key={ex}>&bull; {ex}</li>)}
              </ul>
              <p className="text-xs text-slate-500">Retention: <span className="text-slate-300">{ct.retention}</span></p>
            </div>
          ))}
        </div>
      </>
    )
  },
  {
    id: 'how-we-use',
    icon: Globe,
    title: '3. How We Use Cookies',
    content: (
      <>
        <p className="mb-3">Fovea IT uses cookies for the following specific purposes:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Website Security:</strong> Essential cookies protect our contact forms from CSRF attacks and manage secure user sessions.</li>
          <li><strong className="text-white">Performance Analytics:</strong> We use privacy-respecting analytics (such as aggregated page statistics) to understand which pages are most useful and identify performance bottlenecks.</li>
          <li><strong className="text-white">User Experience:</strong> Preference cookies allow us to remember any display or language preferences you have set during previous visits.</li>
          <li><strong className="text-white">Traffic Source Analysis:</strong> We track referral sources (e.g., LinkedIn, Google Search) to understand where our website visitors come from, helping us optimize our outreach.</li>
          <li><strong className="text-white">Error Detection:</strong> Anonymous error logging cookies help our engineering team identify and fix technical issues faster.</li>
        </ul>
        <p className="mt-3 text-indigo-300">
          We do not use cookies to serve targeted advertising, track you across other websites, or build advertising profiles.
        </p>
      </>
    )
  },
  {
    id: 'third-party',
    icon: Settings,
    title: '4. Third-Party Cookies',
    content: (
      <>
        <p className="mb-3">
          Some third-party services embedded on our website may set their own cookies. These are beyond our direct control but we only permit services with strong privacy practices:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-white">Google Maps:</strong> The embedded map on our Contact page may set cookies from Google when loaded. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Google's Privacy Policy</a>.</li>
          <li><strong className="text-white">Font Services:</strong> We may load web fonts from Google Fonts or similar CDNs, which may log your IP address for delivery purposes.</li>
          <li><strong className="text-white">Social Media Buttons:</strong> If you interact with social share buttons (LinkedIn, Instagram, Facebook), those platforms may set tracking cookies per their own policies.</li>
        </ul>
        <p className="mt-3">We recommend reviewing the cookie policies of any third-party services you interact with.</p>
      </>
    )
  },
  {
    id: 'manage-cookies',
    icon: ToggleRight,
    title: '5. Managing & Controlling Cookies',
    content: (
      <>
        <p className="mb-3">You have full control over cookies. You can manage them in several ways:</p>
        <p className="font-semibold text-white mb-2">Browser Controls</p>
        <p className="mb-3 text-sm">Most browsers allow you to view, delete, and block cookies. Instructions for popular browsers:</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-4">
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2">Microsoft Edge</a></li>
        </ul>
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
          <p className="text-amber-300 text-xs font-semibold mb-1">Important Note</p>
          <p className="text-slate-300 text-xs">Blocking essential cookies will affect the functionality of our website. Contact forms and security features may not work correctly if essential cookies are disabled.</p>
        </div>
      </>
    )
  },
  {
    id: 'do-not-track',
    icon: Ban,
    title: '6. Do Not Track (DNT) Signals',
    content: (
      <>
        <p className="mb-3">
          Some browsers send a "Do Not Track" (DNT) signal to websites indicating that you prefer not to be tracked across sites. Currently, there is no universal standard for how websites should respond to DNT signals.
        </p>
        <p className="mb-3">
          Fovea IT acknowledges DNT signals. When your browser sends a DNT signal, we will:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Disable non-essential analytics and preference tracking.</li>
          <li>Limit cookies to essential session and security cookies only.</li>
          <li>Not use cross-site tracking techniques.</li>
        </ul>
        <p className="mt-3">
          We will continue to monitor emerging DNT standards and update our practices accordingly.
        </p>
      </>
    )
  },
  {
    id: 'policy-updates',
    icon: RefreshCw,
    title: '7. Policy Updates',
    content: (
      <>
        <p className="mb-3">
          We may update this Cookies Policy from time to time to reflect changes in technology, legislation, or our operational practices. When we make significant changes, we will update the "Last updated" date at the top of this page.
        </p>
        <p className="mb-3">
          We encourage you to review this page periodically. Your continued use of our website after changes to this policy constitutes acceptance of the updated terms.
        </p>
        <p>
          For material changes that significantly affect your cookie experience, we will display a notice on our website.
        </p>
      </>
    )
  },
  {
    id: 'consent',
    icon: Shield,
    title: '8. Your Consent',
    content: (
      <>
        <p className="mb-3">
          By using the Fovea IT website, you consent to the use of cookies as described in this policy. For non-essential cookies (analytics, preference, marketing), we only set these when:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>You have not disabled them via browser settings, and</li>
          <li>Your browser does not send a DNT signal.</li>
        </ul>
        <p className="mt-3">
          You may withdraw consent at any time by adjusting your browser settings or clearing existing cookies.
        </p>
        <p className="mt-3 text-indigo-300 font-medium">
          Essential cookies are always active as they are strictly necessary for the security and basic function of the website.
        </p>
      </>
    )
  },
  {
    id: 'contact',
    icon: Mail,
    title: '9. Contact Us',
    content: (
      <>
        <p className="mb-4">If you have questions about our use of cookies or wish to exercise your data rights:</p>
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
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4">
          {section.content}
        </div>
      </div>
    </div>
  );
}

export function CookiesPolicy() {
  const seoInfo = pagesSeoData.cookiesPolicy;
  const [openId, setOpenId] = useState('what-are-cookies');

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
          <div className="absolute top-10 left-1/3 w-[450px] h-[320px] bg-amber-600/5 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 right-1/4 w-[350px] h-[250px] bg-indigo-600/6 rounded-full blur-[110px]" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 relative z-10">
          <Breadcrumbs items={[{ name: 'Cookies Policy' }]} />
          <div className="mt-6 flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-amber-600/15 border border-amber-500/25 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">Cookies Policy</h1>
              <p className="text-slate-400 text-sm mt-2">Last updated: <span className="text-indigo-400 font-mono">October 2026</span> &bull; Fovea IT, Kathmandu, Nepal</p>
            </div>
          </div>
          <p className="mt-6 text-slate-300 text-base leading-relaxed max-w-2xl">
            This policy explains exactly which cookies Fovea IT uses, why we use them, and how you can control them. We believe in full transparency about tracking technologies on our website.
          </p>

          {/* Cookie types quick summary */}
          <div className="mt-8 flex flex-wrap gap-2">
            {cookieTypes.map(ct => (
              <div key={ct.name} className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${ct.color}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${ct.dot}`} />
                {ct.name}
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
              { label: 'Data Security', href: '/data-security', desc: 'Our security measures' },
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

export default CookiesPolicy;
