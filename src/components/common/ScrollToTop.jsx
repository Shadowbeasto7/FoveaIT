import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-slate-900/90 text-indigo-400 border border-indigo-500/30 backdrop-blur-md shadow-2xl hover:bg-indigo-600 hover:text-white hover:border-indigo-400 transition-all duration-300 group hover:scale-110 active:scale-95"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
      <span className="sr-only">Back to top</span>
    </button>
  );
}

export default ScrollToTop;
