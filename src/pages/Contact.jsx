import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import SEO from '../seo/SEO';
import { pagesSeoData } from '../seo/seoData';
import Breadcrumbs from '../components/common/Breadcrumbs';
import ContactForm from '../components/contact/ContactForm';
import ContactDetails from '../components/contact/ContactDetails';
import OfficeMap from '../components/contact/OfficeMap';

export function Contact() {
  const seoInfo = pagesSeoData.contact;

  return (
    <PageLayout>
      <SEO
        title={seoInfo.title}
        description={seoInfo.description}
        canonical={seoInfo.canonical}
        keywords={seoInfo.keywords}
        ogImage={seoInfo.ogImage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <Breadcrumbs items={[{ name: 'Contact Us' }]} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto my-12 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300 block">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Discuss Your <span className="text-violet-400">Next IT Solution</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            Reach out to our software development and technical team in Kathmandu, Nepal for inquiries, project proposals, or consultations.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12 items-start">
          
          {/* Left Form (7 Cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Details & Location (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <ContactDetails />
            <OfficeMap />
          </div>

        </div>
      </div>
    </PageLayout>
  );
}

export default Contact;
