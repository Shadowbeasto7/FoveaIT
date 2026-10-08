export const servicesData = [
  {
    id: "software-development",
    slug: "software-development",
    title: "Custom Software Engineering",
    shortTitle: "Software Development",
    iconName: "Code2",
    image: "/services/custom-software.png",
    tagline: "Tailor-made software built to automate your workflows and scale with your business.",
    shortDescription: "End-to-end software engineering from initial system design to secure, maintainable core platforms.",
    overview: "We build custom software systems designed around your specific business operations. Whether you're replacing outgrown tools or creating automated workflows from scratch, we engineer clean, reliable software that keeps your team working efficiently.",
    problemsSolved: [
      "Outgrown or inflexible software that slows down daily work",
      "Time wasted copying data manually across disconnected internal tools",
      "Lack of granular security controls, user roles, and audit trails",
      "Performance bottlenecks when handling higher workloads and user volume"
    ],
    capabilities: [
      "Custom ERP & CRM Platform Development",
      "Microservices & Serverless Architectures",
      "API Integrations & Data Pipelines",
      "Database Optimization & Data Migration",
      "Automated Testing & Continuous Delivery"
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Docker", "Redis", "TypeScript"],
    approach: "We write clean, modular code with automated testing and continuous integration, ensuring your software is rock-solid, secure, and straightforward to maintain.",
    faqs: [
      {
        question: "How do you protect data security in enterprise software?",
        answer: "We build with security from day one—implementing role-based access control (RBAC), end-to-end data encryption in transit and at rest, and automated vulnerability scanning."
      },
      {
        question: "Can Fovea IT connect with our existing internal software?",
        answer: "Absolutely. We build custom API connectors to bridge existing databases, payment gateways, and third-party tools seamlessly."
      }
    ]
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Application Development",
    shortTitle: "Web Development",
    iconName: "Globe",
    image: "/services/web-platform.png",
    tagline: "Fast, responsive web platforms designed for seamless user experiences and growth.",
    shortDescription: "Modern web applications built with React, Django, and Tailwind CSS, focused on speed and search visibility.",
    overview: "We construct high-performance web applications that look great on any device, load fast, and rank well on search engines. From interactive client portals to full-scale web platforms, we focus on smooth usability and clean code.",
    problemsSolved: [
      "Slow load times driving visitors away and lowering search rankings",
      "Layouts breaking on smartphones and tablet screen sizes",
      "Clunky content management and complex database updates",
      "Web application security vulnerabilities"
    ],
    capabilities: [
      "Single Page Apps (SPA) & Fast Server Rendering",
      "E-Commerce & Digital Marketplace Portals",
      "Headless CMS Integration (Strapi, Sanity)",
      "Progressive Web Apps (PWA) with Offline Access",
      "Core Web Vitals & Speed Optimization"
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Django", "Node.js", "MongoDB"],
    approach: "We focus on clean component structure, fast loading times, accessible markup, dynamic meta tag management, and responsive layouts to ensure your site performs at its best.",
    faqs: [
      {
        question: "What web frameworks do you work with?",
        answer: "Our primary stack includes React, modern JavaScript/TypeScript, Vite, Next.js, Tailwind CSS, Django for backend APIs, and Node.js."
      },
      {
        question: "Is search engine optimization (SEO) included?",
        answer: "Yes, every web project we launch includes proper meta tags, JSON-LD schema integration, sitemaps, clean HTML structure, and speed optimization."
      }
    ]
  },
  {
    id: "mobile-development",
    slug: "mobile-development",
    title: "Mobile Application Engineering",
    shortTitle: "Mobile Development",
    iconName: "Smartphone",
    image: "/services/mobile-app.png",
    tagline: "Smooth, native-performing iOS and Android apps built for real people.",
    shortDescription: "Cross-platform iOS & Android mobile apps engineered with Flutter for seamless performance.",
    overview: "We design and build intuitive mobile apps that run smoothly on both iOS and Android using Flutter. With offline support, instant push notifications, and clean UI navigation, we deliver mobile experiences that keep users coming back.",
    problemsSolved: [
      "High costs of keeping separate iOS and Android development teams",
      "Confusing app navigation that frustrates new users",
      "Sluggish app launch speeds and high battery consumption",
      "Unreliable real-time data syncing and push notifications"
    ],
    capabilities: [
      "Cross-Platform iOS & Android Apps with Flutter",
      "Offline Storage & Real-Time Syncing",
      "Biometric Login & Secure Data Caching",
      "Push Notifications & Location Services",
      "App Store & Google Play Publishing Support"
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Django REST APIs", "SQLite"],
    approach: "We use Flutter's shared codebase to save you time and budget without compromising on native performance, verifying app quality across real devices.",
    faqs: [
      {
        question: "Do you handle App Store and Google Play submissions?",
        answer: "Yes, we handle the full submission process—including asset guidelines, privacy documentation, store listings, and build release management."
      }
    ]
  },
  {
    id: "cloud-solutions",
    slug: "cloud-solutions",
    title: "Cloud Infrastructure & DevOps",
    shortTitle: "Cloud Solutions",
    iconName: "Cloud",
    image: "/services/cloud-devops.png",
    tagline: "Resilient cloud setups, automated deployments, and zero-downtime performance.",
    shortDescription: "Cloud migration, container setup, CI/CD pipeline automation, and high-availability server management.",
    overview: "We help businesses set up, migrate, and optimize cloud infrastructure on AWS, Google Cloud, and modern serverless platforms. We ensure your application remains online, fast, and cost-effective under any traffic load.",
    problemsSolved: [
      "Unexpected server crashes during high traffic surges",
      "Overpaying for idle server infrastructure",
      "Slow, manual updates prone to human error",
      "Lack of automated backups and disaster recovery plans"
    ],
    capabilities: [
      "AWS & Multi-Cloud Infrastructure Engineering",
      "Container Setup & Orchestration (Docker, Kubernetes)",
      "Automated CI/CD Deployment Pipelines",
      "Infrastructure as Code (Terraform)",
      "Server Health Monitoring & Instant Alerts"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Nginx", "GitHub Actions", "Terraform"],
    approach: "We set up infrastructure as code so your server setup is fully documented, automated, easily reproducible, and ready to scale automatically.",
    faqs: [
      {
        question: "How do you help lower monthly cloud costs?",
        answer: "We review server usage, set up auto-scaling rules, configure intelligent caching, and remove unused cloud resources to keep costs lean."
      }
    ]
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    iconName: "TrendingUp",
    image: "/services/digital-marketing.png",
    tagline: "Grow your online presence, reach more customers, and drive real business results.",
    shortDescription: "SEO, social media management, content strategy, and performance campaigns that generate measurable growth.",
    overview: "We help businesses build a strong digital footprint through targeted SEO, social media management, paid ad campaigns, and content marketing. Our data-driven approach ensures every marketing dollar is working hard for your business.",
    problemsSolved: [
      "Low website traffic and poor search engine rankings",
      "Inconsistent social media presence and low engagement",
      "Advertising spend with no clear return on investment",
      "Unclear brand messaging that doesn't convert visitors into customers"
    ],
    capabilities: [
      "Search Engine Optimization (On-Page & Technical SEO)",
      "Social Media Strategy & Management",
      "Google & Meta Paid Advertising Campaigns",
      "Content Marketing & Blog Strategy",
      "Analytics, Reporting & Performance Tracking"
    ],
    technologies: ["Google Analytics", "Meta Ads", "Google Search Console", "Semrush", "Canva Pro", "Mailchimp"],
    approach: "We combine honest data analysis with creative content strategy, building sustainable organic growth alongside targeted paid campaigns that put your brand in front of the right people.",
    faqs: [
      {
        question: "How long before we see results from digital marketing?",
        answer: "SEO typically shows meaningful improvement in 2–4 months, while paid ad campaigns can drive results within the first few weeks. We provide regular reports so you always know where things stand."
      },
      {
        question: "Do you manage our social media accounts directly?",
        answer: "Yes — we can fully manage posting schedules, content creation, community responses, and performance tracking across platforms like Instagram, Facebook, LinkedIn, and more."
      }
    ]
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design & Product Strategy",
    shortTitle: "UI/UX Design",
    iconName: "Palette",
    image: "/services/ui-ux-design.png",
    tagline: "Clean interface design and interactive prototypes that feel intuitive from day one.",
    shortDescription: "User research, wireframing, interactive Figma prototypes, and complete design systems.",
    overview: "We transform ideas into clean, user-friendly digital interfaces. By keeping user needs front and center, we design intuitive web and mobile layouts that help people get things done effortlessly.",
    problemsSolved: [
      "Confusing menus and layouts that lead to high user drop-off",
      "Inconsistent visual styles across web and mobile screens",
      "Interfaces that are hard to navigate for users with accessibility needs",
      "Unclear buttons and call-to-action paths"
    ],
    capabilities: [
      "User Journey Mapping & Information Design",
      "Interactive Wireframes & Figma Prototypes",
      "Design Systems & Component Style Libraries",
      "Accessibility Audits (WCAG Compliance)",
      "User Testing & Design Refinement"
    ],
    technologies: ["Figma", "Design Systems", "Tailwind Design Tokens", "Prototyping Tools", "WCAG Standards"],
    approach: "We combine quick visual wireframes, interactive prototypes, and design component systems to ensure a smooth transition from design to working code.",
    faqs: [
      {
        question: "What files and assets do we receive after the design phase?",
        answer: "You receive full Figma design files, clickable prototypes, UI component libraries, export-ready visual assets, and developer handover documentation."
      }
    ]
  }
];
