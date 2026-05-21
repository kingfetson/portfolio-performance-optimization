import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "ecommerce-store",
    title: "E-Commerce Store Performance Overhaul",
    industry: "E-Commerce",
    beforeScore: 42,
    afterScore: 92,
    lcp: {
      before: "5.2s",
      after: "1.8s"
    },
    improvements: [
      "Reduced bundle size by 65%",
      "Implemented image optimization",
      "Code splitting and lazy loading",
      "Server-side rendering setup",
      "CDN optimization"
    ],
    description: "A Kenyan e-commerce store struggling with slow load times. After optimization, conversion rates increased by 45% and bounce rate dropped significantly."
  },
  {
    id: "saas-platform",
    title: "SaaS Platform Speed Boost",
    industry: "SaaS",
    beforeScore: 58,
    afterScore: 94,
    lcp: {
      before: "4.1s",
      after: "1.2s"
    },
    improvements: [
      "React component optimization",
      "Database query optimization",
      "API response caching",
      "Frontend asset optimization",
      "Performance monitoring setup"
    ],
    description: "A SaaS startup with performance issues affecting user experience. Implemented advanced optimization techniques resulting in 3x faster platform."
  },
  {
    id: "news-portal",
    title: "News Portal Mobile Optimization",
    industry: "Media",
    beforeScore: 35,
    afterScore: 88,
    lcp: {
      before: "6.8s",
      after: "2.1s"
    },
    improvements: [
      "Mobile-first redesign",
      "Lazy loading images",
      "AMP optimization",
      "Critical CSS extraction",
      "Font optimization"
    ],
    description: "A news portal focusing on mobile readers. After optimization, mobile traffic increased by 120% and page views per session doubled."
  },
  {
    id: "corporate-website",
    title: "Corporate Website SEO Optimization",
    industry: "Corporate",
    beforeScore: 52,
    afterScore: 96,
    lcp: {
      before: "4.9s",
      after: "1.5s"
    },
    improvements: [
      "Technical SEO audit",
      "Core Web Vitals optimization",
      "Structured data implementation",
      "Mobile responsiveness fix",
      "Content optimization"
    ],
    description: "A corporate website losing search visibility. After implementing comprehensive optimization, organic traffic increased by 250% and ranking positions improved significantly."
  }
];