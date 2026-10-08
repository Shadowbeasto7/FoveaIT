import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../seo/SEO';
import { pagesSeoData } from '../seo/seoData';
import { getOrganizationSchema, getWebSiteSchema, getLocalBusinessSchema } from '../seo/structuredData';
import Hero from '../components/home/Hero';
import FeaturedServices from '../components/home/FeaturedServices';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import TechMarquee from '../components/home/TechMarquee';
import Process from '../components/home/Process';
import CTASection from '../components/home/CTASection';

export function Home() {
  const seoInfo = pagesSeoData.home;
  const jsonLd = [getOrganizationSchema(), getWebSiteSchema(), getLocalBusinessSchema()];

  return (
    <PageLayout>
      <SEO
        title={seoInfo.title}
        description={seoInfo.description}
        canonical={seoInfo.canonical}
        keywords={seoInfo.keywords}
        ogImage={seoInfo.ogImage}
        jsonLd={jsonLd}
      />
      <Hero />
      <FeaturedServices />
      <AboutPreview />
      <FeaturedProjects />
      <TechMarquee />
      <Process />
      <CTASection />
    </PageLayout>
  );
}

export default Home;
