import { companyData } from '../data/company';

// ── Organization Schema ──────────────────────────────────────────────────────
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": companyData.name,
  "alternateName": "FoveaIT",
  "url": companyData.siteUrl,
  "logo": {
    "@type": "ImageObject",
    "url": `${companyData.siteUrl}/logo.png`,
    "width": 200,
    "height": 60
  },
  "description": companyData.shortDescription,
  "foundingDate": "2026",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": companyData.location.city,
    "addressRegion": companyData.location.region,
    "addressCountry": "NP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.700769,
    "longitude": 85.314940
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": companyData.contact.phone,
      "email": companyData.contact.email,
      "contactType": "customer service",
      "areaServed": "NP",
      "availableLanguage": ["English", "Nepali"]
    }
  ],
  "sameAs": Object.values(companyData.social || {}).filter(Boolean),
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 5,
    "maxValue": 20
  },
  "areaServed": {
    "@type": "Country",
    "name": "Nepal"
  }
});

// ── LocalBusiness Schema (boosts Google Maps / local search) ─────────────────
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "SoftwareApplication", "ProfessionalService"],
  "name": companyData.name,
  "image": `${companyData.siteUrl}/og-image.jpg`,
  "url": companyData.siteUrl,
  "telephone": companyData.contact.phone,
  "email": companyData.contact.email,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": companyData.location.city,
    "addressRegion": companyData.location.region,
    "addressCountry": "NP"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.700769,
    "longitude": 85.314940
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "currenciesAccepted": "NPR",
  "paymentAccepted": "Bank Transfer, Mobile Payment",
  "hasMap": companyData.location.mapUrl,
  "sameAs": Object.values(companyData.social || {}).filter(Boolean)
});

// ── WebSite Schema ────────────────────────────────────────────────────────────
export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": companyData.name,
  "url": companyData.siteUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${companyData.siteUrl}/news?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

// ── WebPage Schema ────────────────────────────────────────────────────────────
export const getWebPageSchema = ({ title, description, url, dateModified }) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": title,
  "description": description,
  "url": url || companyData.siteUrl,
  "isPartOf": {
    "@type": "WebSite",
    "name": companyData.name,
    "url": companyData.siteUrl
  },
  "inLanguage": "en-US",
  "dateModified": dateModified || "2026-10-01",
  "publisher": {
    "@type": "Organization",
    "name": companyData.name,
    "url": companyData.siteUrl
  }
});

// ── Service Schema ────────────────────────────────────────────────────────────
export const getServiceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": service.shortTitle,
  "name": service.title,
  "description": service.shortDescription,
  "url": `${companyData.siteUrl}/services/${service.slug}`,
  "provider": {
    "@type": "Organization",
    "name": companyData.name,
    "url": companyData.siteUrl
  },
  "areaServed": {
    "@type": "Country",
    "name": "Nepal"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": service.title,
    "itemListElement": (service.capabilities || []).map((cap, i) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": cap
      }
    }))
  }
});

// ── FAQ Schema ────────────────────────────────────────────────────────────────
export const getFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// ── Article / Blog Post Schema ────────────────────────────────────────────────
export const getArticleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": article.title,
  "description": article.excerpt,
  "url": `${companyData.siteUrl}/news/${article.slug}`,
  "datePublished": article.date,
  "dateModified": article.date,
  "author": {
    "@type": "Person",
    "name": article.author,
    "jobTitle": article.authorRole
  },
  "publisher": {
    "@type": "Organization",
    "name": companyData.name,
    "logo": {
      "@type": "ImageObject",
      "url": `${companyData.siteUrl}/logo.png`
    }
  },
  "image": `${companyData.siteUrl}/og-image.jpg`,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${companyData.siteUrl}/news/${article.slug}`
  },
  "keywords": (article.tags || []).join(", "),
  "articleSection": article.category,
  "inLanguage": "en-US"
});

// ── Project / Case Study Schema ───────────────────────────────────────────────
export const getProjectSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": project.title,
  "description": project.shortDescription,
  "url": `${companyData.siteUrl}/projects/${project.slug}`,
  "creator": {
    "@type": "Organization",
    "name": companyData.name,
    "url": companyData.siteUrl
  },
  "keywords": (project.technologies || []).join(", "),
  "genre": project.category,
  ...(project.liveUrl ? { "sameAs": project.liveUrl } : {})
});

// ── Breadcrumb Schema ─────────────────────────────────────────────────────────
export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url ? `${companyData.siteUrl}${item.url}` : undefined
  }))
});

// ── SiteLinks SearchBox Schema ────────────────────────────────────────────────
export const getSiteLinksSearchBoxSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": companyData.name,
  "url": companyData.siteUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${companyData.siteUrl}/news?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});
