// Centralized company information
// Environment variables are used as primary sources with natural fallbacks.

export const companyData = {
  name: "Fovea IT",
  tagline: "6 Months. 50+ Companies. Software Built Right.",
  shortDescription: "Fovea IT is a high-energy software engineering team based in Kathmandu, Nepal. In just 6 months, we've partnered with over 50 companies to build custom web applications, mobile apps, cloud systems, and AI tools.",
  fullDescription: "Founded just 6 months ago in Kathmandu, Nepal, Fovea IT was built on a simple promise: make software development transparent, human, and deeply impactful. In this short time, we've had the privilege of partnering with over 50 visionary companies — from agile local startups to growing regional enterprises — building fast, reliable, and scalable digital solutions.",
  
  // Location details
  location: {
    city: "Kathmandu",
    country: "Nepal",
    region: "Bagmati Province",
    addressPlaceholder: import.meta.env.VITE_COMPANY_ADDRESS || "Kathmandu, Nepal",
    mapUrl: import.meta.env.VITE_GOOGLE_MAPS_URL || "https://maps.app.goo.gl/zaMg3v5qgvMLDbGd7"
  },

  // Contact details
  contact: {
    email: import.meta.env.VITE_COMPANY_EMAIL || "ITfovea@gmail.com",
    phone: import.meta.env.VITE_COMPANY_PHONE || "+977 9714510758",
    formEndpoint: import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "",
    operatingHours: "Monday - Friday: 9:00 AM - 6:00 PM (NPT)"
  },

  // Core Strengths
  capabilities: [
    { title: "50+ Partnered Companies", desc: "Collaborating with 50+ companies in 6 months, with 7 completed projects and many active developments underway." },
    { title: "Modern Tech Stack", desc: "Crafted with React, Node.js, Python, Tailwind, and cloud-native services." },
    { title: "Built to Scale", desc: "Architecture designed to stay fast, secure, and reliable as your user base expands." },
    { title: "Human & Transparent", desc: "No corporate jargon — just clear communication, regular demos, and dedicated support." }
  ],

  // Social Links
  social: {
    linkedin: "https://www.linkedin.com/company/fovea-it",
    instagram: "https://www.instagram.com/foveaitnepal?stkn=OTBsaTdqcTczbTg1",
    facebook: "https://www.facebook.com/people/FoveaIT/61595024248398/"
  },

  // Production Domain
  siteUrl: import.meta.env.VITE_SITE_URL || "https://foveait.com"
};
