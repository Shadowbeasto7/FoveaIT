import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import { navLinks } from '../../data/navigation';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);

  // ── Scroll detection ──────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── Close on route change ─────────────────────────────────────────────────
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // ── Body scroll lock ──────────────────────────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // ── Close on Escape key ───────────────────────────────────────────────────
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggle = () => setMobileOpen(v => !v);
  const close  = () => setMobileOpen(false);

  return (
    <>
      {/* ── Top Bar ────────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            onClick={close}
            className="flex items-center gap-2.5 group shrink-0"
            aria-label="Fovea IT — Home"
          >
            <img
              src="/logo.png"
              alt="Fovea IT Logo"
              className="h-9 w-auto object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(147,51,234,0.35)]"
            />
            <span className="text-lg font-extrabold text-white tracking-tight">
              Fovea <span className="text-blue-400">IT</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1 bg-[#111827]/80 backdrop-blur-lg px-4 py-1.5 rounded-full border border-white/10"
            aria-label="Main navigation"
          >
            {navLinks.map(link => {
              const active = location.pathname === link.path ||
                (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    active
                      ? 'text-white bg-white/10 border border-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-3.5 h-0.5 bg-blue-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="hidden md:flex items-center gap-1.5 px-5 py-2 rounded-full border border-slate-600 text-xs font-semibold text-white hover:border-blue-400 hover:text-blue-400 transition-all duration-300 group shrink-0"
          >
            Get in Touch
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={toggle}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700 text-slate-200 hover:text-white hover:border-indigo-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-all"
          >
            {mobileOpen
              ? <X className="w-5 h-5 text-indigo-400" />
              : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* ── Mobile Drawer — rendered OUTSIDE header via sibling ─────────────── */}
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={close}
        className={`md:hidden fixed inset-0 z-[98] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-in drawer */}
      <div
        id="mobile-nav-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`md:hidden fixed top-0 right-0 bottom-0 z-[99] w-[min(320px,85vw)] bg-[#080d1a] border-l border-white/10 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-end px-5 py-4 border-b border-white/10 bg-[#0a1020]">
          <button
            type="button"
            onClick={close}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3" aria-label="Mobile navigation">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-indigo-400/70 px-3 mb-3">
            Navigation
          </p>
          <ul className="space-y-1">
            {navLinks.map(link => {
              const active = location.pathname === link.path ||
                (link.path !== '/' && location.pathname.startsWith(link.path));
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={close}
                    className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                      active
                        ? 'bg-indigo-600/20 text-white border border-indigo-500/40'
                        : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active
                      ? <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                      : <ChevronRight className="w-4 h-4 text-slate-500" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA footer */}
        <div className="px-4 py-5 border-t border-white/10 bg-[#090e1d] space-y-3">
          <Link
            to="/contact"
            onClick={close}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white font-bold text-sm shadow-lg shadow-indigo-500/30 hover:opacity-90 active:scale-[0.98] transition-all"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-center text-[10px] text-slate-500 font-mono tracking-wide">
            Fovea IT · Kathmandu, Nepal
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
