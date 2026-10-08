import { companyData } from '../data/company';

const siteUrl = companyData.siteUrl;

export const defaultSeoData = {
  title: "Fovea IT | Custom Software & Web Development in Kathmandu, Nepal",
  description: "Fovea IT is a software studio in Kathmandu, Nepal. In just 6 months, we've partnered with over 50 growing companies to engineer custom web apps, mobile apps, cloud DevOps, and digital marketing solutions.",
  canonical: siteUrl,
  keywords: [
    "Software Development Company Kathmandu",
    "IT Company Nepal",
    "Custom Software Development",
    "Web Development Agency Nepal",
    "Mobile App Development iOS Android Nepal",
    "React Web Applications",
    "Cloud Infrastructure DevOps Nepal",
    "Digital Marketing Agency Kathmandu",
    "Fovea IT"
  ],
  ogImage: `${siteUrl}/og-image.jpg`,
  robots: "index, follow"
};

export const pagesSeoData = {
  home: {
    title: "Fovea IT | Software Development for 50+ Companies in Kathmandu, Nepal",
    description: "In 6 months, Fovea IT has built custom software, web platforms, and mobile apps for 50+ partner companies in Kathmandu, Nepal.",
    canonical: `${siteUrl}/`,
    keywords: [
      "Software Development Company Kathmandu",
      "Software Company Nepal",
      "Web Development Kathmandu",
      "Mobile App Development Nepal",
      "Enterprise Software Solutions",
      "Cloud DevOps Nepal",
      "Digital Marketing Agency",
      "Fovea IT"
    ],
    ogImage: `${siteUrl}/og-image.jpg`
  },
  about: {
    title: "About Fovea IT | Software Engineering Team in Kathmandu, Nepal",
    description: "Learn about Fovea IT — a team of software engineers, web developers, and cloud specialists based in Kathmandu, Nepal building reliable digital solutions.",
    canonical: `${siteUrl}/about`,
    keywords: [
      "About Fovea IT",
      "Software Engineers Kathmandu",
      "IT Company Profile Nepal",
      "Software Development Team Kathmandu",
      "Tech Agency Nepal"
    ],
    ogImage: `${siteUrl}/og-image.jpg`
  },
  services: {
    title: "Software & Web Development Services | Fovea IT Kathmandu",
    description: "Explore our IT services in Nepal: custom software engineering, full-stack web development, Flutter mobile apps, cloud infrastructure DevOps, digital marketing, and UI/UX design.",
    canonical: `${siteUrl}/services`,
    keywords: [
      "IT Services Nepal",
      "Custom Software Engineering",
      "Web Application Development Kathmandu",
      "Mobile App Development iOS Android",
      "Cloud DevOps Infrastructure",
      "Digital Marketing Services Nepal",
      "UI UX Design Agency Nepal"
    ],
    ogImage: `${siteUrl}/og-image.jpg`
  },
  projects: {
    title: "Portfolio & Case Studies | Fovea IT Projects Nepal",
    description: "Browse software case studies by Fovea IT including CourierYatra logistics platform, WATCH Nepal NGO portal, New Basanta Nursery e-commerce, and DeadPoetSociety Nepal.",
    canonical: `${siteUrl}/services#projects`,
    keywords: [
      "Fovea IT Case Studies",
      "Software Projects Nepal",
      "CourierYatra Logistics",
      "WATCH Nepal Portal",
      "Web App Case Studies Kathmandu"
    ],
    ogImage: `${siteUrl}/og-image.jpg`
  },
  news: {
    title: "News, Blogs & Engineering Updates | Fovea IT Kathmandu",
    description: "Stay updated with company milestones, Flutter mobile tips, Django web backends, and digital marketing insights from Fovea IT in Kathmandu, Nepal.",
    canonical: `${siteUrl}/news`,
    keywords: [
      "Fovea IT News",
      "Tech Blogs Nepal",
      "Software Development News Kathmandu",
      "Flutter Engineering Blog",
      "Django Web Development Nepal",
      "Digital Marketing Insights Nepal"
    ],
    ogImage: `${siteUrl}/og-image.jpg`
  },
  careers: {
    title: "Careers & Internships | Join Fovea IT Software Team Kathmandu",
    description: "Join Fovea IT in Kathmandu, Nepal. Apply for software engineering internships, fresher developer roles, Flutter mobile app, Python Django backend, and SEO marketing positions.",
    canonical: `${siteUrl}/news/careers`,
    keywords: [
      "Fovea IT Careers",
      "IT Internship Nepal",
      "Software Engineering Intern Kathmandu",
      "Fresher Jobs Nepal Tech",
      "Flutter Developer Jobs Nepal",
      "Python Django Developer Jobs Kathmandu",
      "Join Fovea IT"
    ],
    ogImage: `${siteUrl}/og-image.jpg`
  },
  contact: {
    title: "Contact Fovea IT | Software Consultation in Kathmandu, Nepal",
    description: "Contact Fovea IT in Kathmandu, Nepal for custom software, web, and mobile app project inquiries. Request a technical scoping consultation today.",
    canonical: `${siteUrl}/contact`,
    keywords: [
      "Contact Fovea IT",
      "Software Development Consultation Kathmandu",
      "Hire Web Developers Nepal",
      "Kathmandu IT Office Contact"
    ],
    ogImage: `${siteUrl}/og-image.jpg`
  },
  privacyPolicy: {
    title: "Privacy Policy | Fovea IT",
    description: "Read Fovea IT's privacy policy regarding data collection, protection, and user rights.",
    canonical: `${siteUrl}/privacy-policy`,
    keywords: ["Privacy Policy Fovea IT", "Data Protection Nepal"],
    ogImage: `${siteUrl}/og-image.jpg`
  },
  terms: {
    title: "Terms & Conditions | Fovea IT",
    description: "Review Fovea IT's terms of service and website usage conditions.",
    canonical: `${siteUrl}/terms-and-conditions`,
    keywords: ["Terms and Conditions Fovea IT", "Service Terms"],
    ogImage: `${siteUrl}/og-image.jpg`
  },
  notFound: {
    title: "Page Not Found (404) | Fovea IT",
    description: "The page you are looking for does not exist on Fovea IT website.",
    canonical: `${siteUrl}/404`,
    keywords: ["404 Fovea IT"],
    ogImage: `${siteUrl}/og-image.jpg`,
    robots: "noindex, follow"
  },
  cookiesPolicy: {
    title: "Cookies Policy | Fovea IT",
    description: "Learn how Fovea IT uses cookies and similar technologies on our website.",
    canonical: `${siteUrl}/cookies-policy`,
    keywords: ["Cookies Policy Fovea IT", "Cookie Usage Nepal"],
    ogImage: `${siteUrl}/og-image.jpg`,
    robots: "noindex, follow"
  },
  dataSecurity: {
    title: "Data Security | Fovea IT",
    description: "Understand Fovea IT's approach to data security, encryption, and safe data handling practices.",
    canonical: `${siteUrl}/data-security`,
    keywords: ["Data Security Fovea IT", "Data Protection Nepal", "Secure Software Nepal"],
    ogImage: `${siteUrl}/og-image.jpg`,
    robots: "noindex, follow"
  }
};

// ── Per-Project SEO Data ────────────────────────────────────────────────────
export const projectsSeoData = {
  "courier-yatra": {
    title: "CourierYatra — International Shipping Platform | Fovea IT Case Study",
    description: "CourierYatra is a full-stack international courier tracking and freight management platform built by Fovea IT in Kathmandu, Nepal. Features real-time shipment tracking, volumetric shipping fee calculator, multi-carrier API integration, and admin dashboard.",
    canonical: `${siteUrl}/projects/courier-yatra`,
    keywords: [
      "CourierYatra",
      "Courier Yatra Nepal",
      "International Shipping Software Nepal",
      "Logistics Platform Nepal",
      "Courier Tracking Software",
      "Freight Management Platform",
      "Fovea IT Projects",
      "Fovea IT Portfolio",
      "Custom Logistics Software Kathmandu",
      "React Node.js Logistics App"
    ],
    ogImage: `${siteUrl}/assets/projects/courieryatra.svg`
  },
  "watch-nepal": {
    title: "WATCH Nepal — NGO Community Platform | Fovea IT Case Study",
    description: "WATCH Nepal is a grassroots leadership and community web platform built by Fovea IT for a leading NGO. Features digital resource library, program gallery, and accessible publication archive.",
    canonical: `${siteUrl}/projects/watch-nepal`,
    keywords: [
      "WATCH Nepal NGO Website",
      "Nepal NGO Web Development",
      "Community Platform Nepal",
      "Fovea IT NGO Project",
      "React Tailwind NGO Website Nepal"
    ],
    ogImage: `${siteUrl}/assets/projects/watchnepal.svg`
  },
  "new-basanta-nursery": {
    title: "New Basanta Nursery — Online Plant Catalog | Fovea IT Case Study",
    description: "New Basanta Nursery is an online plant catalog and e-commerce storefront built by Fovea IT. Smart filters, vibrant photo galleries, plant care guides, and a landscape inquiry cart.",
    canonical: `${siteUrl}/projects/new-basanta-nursery`,
    keywords: [
      "New Basanta Nursery",
      "Online Plant Shop Nepal",
      "Nursery E-commerce Nepal",
      "Fovea IT E-commerce Project",
      "React Vite E-commerce Nepal"
    ],
    ogImage: `${siteUrl}/assets/projects/nursery.svg`
  },
  "dead-poet-society": {
    title: "DeadPoetSociety Nepal — Literary Portal | Fovea IT Case Study",
    description: "DeadPoetSociety Nepal is a distraction-free literary hub and creative writing portal built by Fovea IT with dark mode design, poem submission forms, and author profile pages.",
    canonical: `${siteUrl}/projects/dead-poet-society`,
    keywords: [
      "DeadPoetSociety Nepal",
      "Literary Portal Nepal",
      "Poetry Website Nepal",
      "Fovea IT Creative Project",
      "Dark Mode Literary Platform"
    ],
    ogImage: `${siteUrl}/assets/projects/deadpoet.svg`
  }
};

