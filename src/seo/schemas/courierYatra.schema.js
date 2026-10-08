/**
 * CourierYatra — Rich Structured Data Schemas
 * 
 * These schemas power:
 * 1. Google Knowledge Panel for "Fovea IT CourierYatra"
 * 2. SoftwareApplication rich result in Search
 * 3. Product/Service card when searching "Fovea IT projects"
 * 4. BreadcrumbList for breadcrumb display in SERP
 * 5. Organization attribution back to Fovea IT
 */

import { companyData } from '../../data/company';

const SITE_URL = companyData.siteUrl || 'https://foveait.com';
const COURIER_YATRA_URL = 'https://courieryatra.com/';
const PROJECT_PAGE_URL = `${SITE_URL}/projects/courier-yatra`;

// ── 1. SoftwareApplication Schema ─────────────────────────────────────────────
// Triggers a rich result card in Google Search with rating, screenshots, OS info
export const getCourierYatraSoftwareSchema = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CourierYatra",
  "alternateName": ["Courier Yatra", "CourierYatra Nepal", "CourierYatra Shipping Platform"],
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "Logistics & Freight Management",
  "operatingSystem": "Web Browser (All Platforms)",
  "url": COURIER_YATRA_URL,
  "sameAs": COURIER_YATRA_URL,
  "description": "CourierYatra is an international freight and courier management web platform built by Fovea IT. It provides real-time shipment tracking, instant volumetric shipping fee calculation, multi-carrier API integration, and a secure admin dashboard for managing cross-border parcel delivery operations.",
  "featureList": [
    "Real-time international shipment tracking",
    "Instant volumetric shipping fee calculator",
    "Multi-carrier API integration for unified tracking",
    "Automated customer notification system",
    "Secure admin dashboard for manifest management",
    "Responsive customer tracking portal"
  ],
  "screenshot": `${SITE_URL}/assets/projects/courieryatra.svg`,
  "softwareVersion": "1.0",
  "releaseNotes": "Initial production release — international parcel tracking and freight management platform for Nepal-based logistics companies.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "NPR",
    "description": "Enterprise logistics platform — custom pricing for deployment"
  },
  "creator": {
    "@type": "Organization",
    "name": companyData.name,
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kathmandu",
      "addressCountry": "NP"
    }
  },
  "maintainer": {
    "@type": "Organization",
    "name": companyData.name,
    "url": SITE_URL
  },
  "inLanguage": "en",
  "keywords": "courier tracking Nepal, international parcel delivery, freight management software, logistics platform Nepal, shipping fee calculator, courier yatra"
});

// ── 2. Product Schema ──────────────────────────────────────────────────────────
// Makes CourierYatra appear as a product when searching "Fovea IT"
export const getCourierYatraProductSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "CourierYatra — International Freight & Courier Management Platform",
  "alternateName": "CourierYatra by Fovea IT",
  "description": "A streamlined web portal for international courier tracking, shipping fee calculations, multi-carrier API integration, and logistics management. Engineered by Fovea IT for cross-border shipping enterprises in Nepal.",
  "url": PROJECT_PAGE_URL,
  "image": `${SITE_URL}/assets/projects/courieryatra.svg`,
  "brand": {
    "@type": "Brand",
    "name": "CourierYatra"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": companyData.name,
    "url": SITE_URL,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kathmandu",
      "addressRegion": "Bagmati Province",
      "addressCountry": "NP"
    },
    "sameAs": Object.values(companyData.social || {}).filter(Boolean)
  },
  "category": "Enterprise Logistics Software",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Technology Stack",
      "value": "React, Node.js, Express, MongoDB, Tailwind CSS, REST APIs"
    },
    {
      "@type": "PropertyValue",
      "name": "Service Type",
      "value": "Web Application Development"
    },
    {
      "@type": "PropertyValue",
      "name": "Client Industry",
      "value": "International Freight & Courier Logistics"
    },
    {
      "@type": "PropertyValue",
      "name": "Platform",
      "value": "Web Browser"
    },
    {
      "@type": "PropertyValue",
      "name": "Region Served",
      "value": "Nepal & Cross-border International"
    }
  ],
  "offers": {
    "@type": "Offer",
    "seller": {
      "@type": "Organization",
      "name": companyData.name,
      "url": SITE_URL
    },
    "availability": "https://schema.org/InStock",
    "url": `${SITE_URL}/contact`
  }
});

// ── 3. Service Schema (for the web dev service used to build it) ─────────────
export const getCourierYatraServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "CourierYatra Logistics Platform — Web Development Service",
  "description": "Custom enterprise web application development service delivered by Fovea IT for CourierYatra — an international shipping logistics company. Includes real-time tracking, shipping calculator, and admin dashboard.",
  "url": PROJECT_PAGE_URL,
  "serviceType": "Custom Web Application Development",
  "provider": {
    "@type": "Organization",
    "name": companyData.name,
    "url": SITE_URL,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kathmandu",
      "addressCountry": "NP"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "Nepal"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Features Delivered",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Real-time shipment tracking portal" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Volumetric shipping fee calculator" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Multi-carrier API integration" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Automated customer notifications" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Secure admin manifest dashboard" } }
    ]
  }
});

// ── 4. Case Study / CreativeWork Schema ───────────────────────────────────────
// Shows up as a creative work / portfolio item in Google results
export const getCourierYatraCaseStudySchema = () => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "CourierYatra Case Study — Logistics Platform by Fovea IT",
  "alternateName": "CourierYatra International Freight Platform",
  "description": "An engineering case study on how Fovea IT built a full-stack international shipment tracking and freight fee calculation portal for CourierYatra — an international shipping enterprise in Nepal. Built with React, Node.js, MongoDB, and third-party carrier APIs.",
  "url": PROJECT_PAGE_URL,
  "image": `${SITE_URL}/assets/projects/courieryatra.svg`,
  "creator": {
    "@type": "Organization",
    "name": companyData.name,
    "url": SITE_URL
  },
  "about": {
    "@type": "Thing",
    "name": "Logistics Software",
    "description": "International courier and freight management software"
  },
  "keywords": "CourierYatra, Fovea IT, logistics platform Nepal, courier tracking software, freight management, international shipping Nepal, React Node.js MongoDB, Kathmandu software development",
  "genre": "Case Study",
  "inLanguage": "en",
  "sameAs": COURIER_YATRA_URL,
  "isPartOf": {
    "@type": "WebSite",
    "name": companyData.name,
    "url": SITE_URL
  }
});

// ── 5. Combined Schema Export (use this on the CourierYatra project page) ──────
export const getAllCourierYatraSchemas = () => [
  getCourierYatraSoftwareSchema(),
  getCourierYatraProductSchema(),
  getCourierYatraServiceSchema(),
  getCourierYatraCaseStudySchema()
];
