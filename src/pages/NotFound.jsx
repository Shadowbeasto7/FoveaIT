import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../seo/SEO';
import { pagesSeoData } from '../seo/seoData';
import Button from '../components/common/Button';
import { Home, ArrowRight, Compass, Mail, Terminal } from 'lucide-react';

export function NotFound() {
  const seoInfo = pagesSeoData.notFound;

  return (
    <PageLayout>
      <SEO
        title={seoInfo.title}
        description={seoInfo.description}
        canonical={seoInfo.canonical}
        robots={seoInfo.robots}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="liquid-glass-strong rounded-[2.5rem] p-8 sm:p-16 border border-white/10 relative overflow-hidden shadow-2xl">
          
          <div className="w-24 h-24 mx-auto rounded-full bg-violet-950/80 border border-violet-500/40 flex items-center justify-center text-violet-300 mb-6 shadow-xl">
            <Terminal className="w-12 h-12 text-violet-400" />
          </div>

          <span className="text-sm font-mono tracking-widest text-violet-400 uppercase block mb-2">
            ERR_CODE: 404_PAGE_NOT_FOUND
          </span>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            System Route <span className="text-violet-400">Unmapped</span>
          </h1>

          <p className="text-gray-300 max-w-md mx-auto text-base font-light mb-8">
            The page or resource you are looking for has been moved or does not exist on Fovea IT platform.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button to="/" variant="primary" size="md" icon={Home}>
              Return Home
            </Button>
            <Button to="/services" variant="secondary" size="md" icon={Compass}>
              Explore Services
            </Button>
            <Button to="/contact" variant="outline" size="md" icon={Mail}>
              Contact Engineering
            </Button>
          </div>

          <div className="pt-8 border-t border-purple-500/15 text-xs text-gray-400 flex flex-wrap justify-center gap-6">
            <Link to="/about" className="hover:text-purple-300 transition-colors">About Us</Link>
            <Link to="/services#projects" className="hover:text-purple-300 transition-colors">Services & Projects</Link>
            <Link to="/news" className="hover:text-purple-300 transition-colors">News & Updates</Link>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default NotFound;
