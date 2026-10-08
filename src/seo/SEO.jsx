import React, { useEffect } from 'react';
import { useHead } from '@unhead/react';
import { defaultSeoData } from './seoData';
import { companyData } from '../data/company';

export function SEO({
  title = defaultSeoData.title,
  description = defaultSeoData.description,
  canonical = defaultSeoData.canonical,
  keywords = defaultSeoData.keywords,
  ogImage = defaultSeoData.ogImage,
  robots = defaultSeoData.robots,
  jsonLd = null,
  articlePublishedTime = null,
  articleModifiedTime = null,
  articleAuthor = null,
  noindex = false
}) {
  const keywordString = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  const robotsContent = noindex ? 'noindex, follow' : robots;

  // Support array of JSON-LD objects or single object
  const jsonLdArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  useHead({
    title: title,
    htmlAttrs: { lang: 'en', dir: 'ltr' },
    meta: [
      // ── Core SEO ────────────────────────────────────────────────
      { name: 'description', content: description },
      { name: 'keywords', content: keywordString },
      { name: 'author', content: companyData.name },
      { name: 'robots', content: `${robotsContent}, max-snippet:-1, max-image-preview:large, max-video-preview:-1` },
      { name: 'googlebot', content: `${robotsContent}, max-snippet:-1, max-image-preview:large, max-video-preview:-1` },
      { name: 'revisit-after', content: '7 days' },
      { name: 'language', content: 'English' },
      // ── Geo Tags ────────────────────────────────────────────────
      { name: 'geo.region', content: 'NP-BA' },
      { name: 'geo.placename', content: `${companyData.location.city}, ${companyData.location.country}` },
      { name: 'geo.position', content: '27.700769;85.314940' },
      { name: 'ICBM', content: '27.700769, 85.314940' },
      // ── Open Graph ──────────────────────────────────────────────
      { property: 'og:site_name', content: companyData.name },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: articlePublishedTime ? 'article' : 'website' },
      { property: 'og:url', content: canonical },
      { property: 'og:image', content: ogImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: title },
      { property: 'og:locale', content: 'en_US' },
      // ── Article-specific OG (for blog posts) ────────────────────
      ...(articlePublishedTime ? [
        { property: 'article:published_time', content: articlePublishedTime },
        { property: 'article:modified_time', content: articleModifiedTime || articlePublishedTime },
        { property: 'article:author', content: articleAuthor || companyData.name },
        { property: 'article:publisher', content: companyData.social?.facebook || companyData.siteUrl }
      ] : []),
      // ── Twitter / X Card ────────────────────────────────────────
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@foveait' },
      { name: 'twitter:creator', content: '@foveait' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      { name: 'twitter:image:alt', content: title }
    ],
    link: [
      { rel: 'canonical', href: canonical },
      { rel: 'manifest', href: '/manifest.json' }
    ],
    script: jsonLdArray.map(ld => ({
      type: 'application/ld+json',
      children: JSON.stringify(ld)
    }))
  });

  // Fallback for SSR / no-JS environments
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);

  return null;
}

export default SEO;
