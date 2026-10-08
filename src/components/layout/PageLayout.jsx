import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import CookieConsent from '../common/CookieConsent';
import AIChatWidget from '../common/AIChatWidget';

export function PageLayout({ children }) {
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#07080c] text-gray-100 selection:bg-purple-500 selection:text-white relative">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <CookieConsent />
      <AIChatWidget />
    </div>
  );
}

export default PageLayout;
