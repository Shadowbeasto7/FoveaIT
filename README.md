# Fovea IT — Production-Ready Corporate Website

> **Tagline:** Smart Vision. Intelligent Solutions.  
> **Location:** Kathmandu, Nepal  
> **Stack:** React, Vite, Tailwind CSS, React Router DOM, @unhead/react, Lucide Icons

---

## 1. Project Overview

Fovea IT is a modern corporate web application built for a Kathmandu-based technology and software development company. The site features a deep-space dark UI with purple/cyan glowing accents, glassmorphic panels, curved sci-fi visual graphics, responsive navigation, dynamic SEO management, structured JSON-LD data, and clean component architecture.

---

## 2. Tech Stack

- **Core Framework:** React 19 & Vite
- **Routing:** `react-router-dom` v7
- **Styling:** Tailwind CSS v4 & custom glassmorphism utilities (`src/index.css`)
- **Icons:** `lucide-react`
- **Dynamic SEO:** `@unhead/react` for title, meta tags, OpenGraph, Twitter Cards, and canonical URLs
- **Structured Data:** JSON-LD schema generators for Organization, WebSite, Service, SoftwareApplication, and BreadcrumbList

---

## 3. Getting Started

### Prerequisites

- Node.js (v18.x or later recommended)
- npm (v9.x or later)

### Installation

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 4. Folder Structure

```
d:/FOVEAIT/
├── public/
│   ├── favicon.svg          # Sci-fi brand favicon
│   ├── logo.svg             # Glowing SVG logo
│   ├── robots.txt           # Search crawler directives
│   └── sitemap.xml          # XML Sitemap for search engines
│
├── src/
│   ├── assets/              # Static media assets & project images
│   ├── components/
│   │   ├── common/          # Button, SectionHeading, Breadcrumbs, Badge, LoadingState, EmptyState
│   │   ├── layout/          # Navbar, Footer, PageLayout
│   │   ├── home/            # Hero, QuickContact, AboutPreview, FeaturedServices, FeaturedProjects, Process, TechMarquee, CTASection
│   │   ├── services/        # ServiceCard, EngagementModels, FAQAccordion
│   │   ├── projects/        # ProjectCard, ProjectFilter
│   │   └── contact/         # ContactForm, ContactDetails, OfficeMap
│   │
│   ├── data/                # Centralized data files
│   │   ├── company.js       # Verified company info & env fallbacks
│   │   ├── navigation.js    # Navbar & footer link definitions
│   │   ├── services.js      # 6 core service definitions
│   │   ├── projects.js      # Case studies (CourierYatra, WATCH Nepal, etc.)
│   │   ├── team.js          # Engineering role definitions
│   │   ├── faq.js           # Interactive accordion questions
│   │   └── technologies.js  # Stack & tools marquee items
│   │
│   ├── seo/
│   │   ├── SEO.jsx          # Reusable @unhead/react SEO component
│   │   ├── seoData.js       # Route-based SEO metadata definitions
│   │   └── structuredData.js# JSON-LD schema generators
│   │
│   ├── pages/
│   │   ├── Home.jsx         # /
│   │   ├── About.jsx        # /about
│   │   ├── Services.jsx     # /services
│   │   ├── ServiceDetails.jsx # /services/:serviceId
│   │   ├── Projects.jsx     # /projects
│   │   ├── ProjectDetails.jsx  # /projects/:projectId
│   │   ├── Contact.jsx      # /contact
│   │   ├── PrivacyPolicy.jsx# /privacy-policy
│   │   ├── Terms.jsx        # /terms-and-conditions
│   │   └── NotFound.jsx     # /404
│   │
│   ├── App.jsx              # React Router route registry
│   ├── main.jsx             # React root & Unhead setup
│   └── index.css            # Custom CSS theme, glassmorphism, fonts & scrollbar
│
├── .env.example             # Environment variables example template
├── package.json
└── vite.config.js
```

---

## 5. Environment Variables Configuration

Copy `.env.example` to `.env` to customize runtime values:

```env
VITE_SITE_URL=https://foveait.com
VITE_COMPANY_EMAIL=contact@foveait.com
VITE_COMPANY_PHONE=+977 (Kathmandu HQ)
VITE_COMPANY_ADDRESS=Kathmandu, Nepal
VITE_CONTACT_FORM_ENDPOINT=https://your-backend-api.com/api/contact
VITE_GOOGLE_MAPS_URL=https://maps.google.com/?q=Kathmandu,+Nepal
VITE_GA_ID=G-XXXXXXXXXX
VITE_CLARITY_ID=
```

---

## 6. How to Extend Content

### Adding a New Service
1. Open `src/data/services.js`.
2. Append a new object following the schema:
   ```javascript
   {
     id: "cybersecurity-audit",
     slug: "cybersecurity-audit",
     title: "Cybersecurity Audits & Penetration Testing",
     shortTitle: "Cybersecurity",
     iconName: "ShieldCheck",
     tagline: "Vulnerability assessments and security hardening.",
     shortDescription: "...",
     overview: "...",
     problemsSolved: [...],
     capabilities: [...],
     technologies: [...],
     approach: "...",
     faqs: [...]
   }
   ```
3. Add the route entry to `public/sitemap.xml`.

### Adding a New Project / Case Study
1. Open `src/data/projects.js`.
2. Append a new project object following the schema:
   ```javascript
   {
     id: "project-slug",
     slug: "project-slug",
     title: "Project Title",
     category: "Web Development",
     subCategory: "System Overview",
     shortDescription: "...",
     fullDescription: "...",
     clientContext: "...",
     challenge: "...",
     solution: "...",
     keyFeatures: [...],
     technologies: [...],
     services: [...],
     liveUrl: "https://example.com/", // Omit or set to null if unverified
     featured: true
   }
   ```

---

## 7. Contact Form Backend Integration

The `ContactForm` component (`src/components/contact/ContactForm.jsx`) sends JSON payloads to the endpoint configured in `VITE_CONTACT_FORM_ENDPOINT`.
If `VITE_CONTACT_FORM_ENDPOINT` is left blank during development, the form gracefully executes a client feedback state while logging an integration note.

---

## 8. Deployment & SPA SEO Strategy

Because this application is built with Vite (Single Page Application), client-side metadata updates seamlessly via `@unhead/react`. For optimal search engine indexing and social media preview card rendering:

### Recommended Deployment Options:
1. **Static Hosting with Prerendering (e.g. Vercel / Netlify / Cloudflare Pages):** Use Vite SSG or Cloudflare Edge workers to pre-render initial HTML tags for public routes.
2. **Nginx SPA Routing Rule:** When deploying on an Nginx server, include:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

---

## 9. Compliance & Accuracy Rules

This application strictly enforces factual accuracy:
- No fabricated phone numbers, addresses, social media metrics, client testimonials, or fake revenue figures.
- Neutral placeholders and environment variables are used wherever specific business contact details require production configuration.
