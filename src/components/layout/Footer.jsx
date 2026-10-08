import React from 'react';
import { Link } from 'react-router-dom';
import { companyData } from '../../data/company';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0F19] text-slate-300 border-t border-white/10 pt-16 pb-0 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Brand Logo Block — same logo as navbar ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-10 border-b border-white/10 mb-10">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Fovea IT Logo"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(147,51,234,0.3)]"
            />
            <div>
              <span className="text-xl font-extrabold text-white tracking-tight block leading-none">
                Fovea <span className="text-blue-400">IT</span>
              </span>
            </div>
          </Link>
          <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
            Building reliable software, mobile apps, and digital platforms for ambitious teams across Nepal and beyond.
          </p>
        </div>

        {/* ── Top Section: 5 Navigation Columns ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-12">
          
          {/* Column 1: Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase">Company</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services & Projects</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">News & Updates</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase">Services</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/services/software-development" className="hover:text-white transition-colors">Software Engineering</Link>
              </li>
              <li>
                <Link to="/services/web-development" className="hover:text-white transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services/mobile-development" className="hover:text-white transition-colors">Mobile Apps (Flutter)</Link>
              </li>
              <li>
                <Link to="/services/digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: News & Updates (Replaced Resources) */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase">News & Updates</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/news" className="hover:text-white transition-colors">Latest News & Blogs</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">6 Months Milestone</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">Flutter & Django Tech</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors">Digital Marketing Tips</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase">Legal</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-white transition-colors">Terms of use</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Data Security</Link>
              </li>
              <li>
                <Link to="/cookies-policy" className="hover:text-white transition-colors">Cookies Policy</Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('open_cookie_preferences'))}
                  className="hover:text-white transition-colors text-left text-slate-400 focus:outline-none"
                >
                  Manage Cookies
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="text-sm font-bold text-white tracking-wider uppercase">Contact</h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href={`tel:${companyData.contact.phone.replace(/\s+/g, '')}`} className="text-white font-medium hover:text-indigo-400 transition-colors">
                  {companyData.contact.phone}
                </a>
              </li>
              <li className="break-all">
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-white transition-colors">
                  {companyData.contact.email}
                </a>
              </li>
              <li>{companyData.location.city}, {companyData.location.country}</li>
            </ul>
          </div>

        </div>

        {/* ── Divider Line ── */}
        <div className="border-t border-white/10 my-6" />

        {/* ── Middle Section: Address, Copyright & Social Icons ── */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6">
          <div className="space-y-1 text-xs text-slate-400">
            <p className="font-medium text-slate-300">
              Fovea IT HQ, {companyData.location.city}, {companyData.location.country}.
            </p>
            <p>
              &copy; {currentYear} Fovea IT. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-3">
            <a
              href={companyData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-slate-900/90 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a
              href={companyData.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-slate-900/90 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a
              href={companyData.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-slate-900/90 border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all flex items-center justify-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>

      </div>

      {/* ── Bottom Giant Watermark Text: FoveaIT ── */}
      <div className="w-full overflow-hidden leading-none pointer-events-none mt-2 -mb-2 sm:-mb-4 md:-mb-6 flex justify-center">
        <h2 
          className="text-[17vw] sm:text-[18vw] font-black tracking-tighter text-center leading-none text-[#161F33]/80 select-none whitespace-nowrap"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 80px rgba(79,70,229,0.1)'
          }}
        >
          FoveaIT
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
