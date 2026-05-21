import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "speed-optimization",
    icon: "Zap",
    title: "Website Speed Optimization",
    description: "Lightning-fast load times that keep visitors engaged and improve your search rankings.",
    benefits: [
      "Reduce page load time by 60-80%",
      "Improve Core Web Vitals scores",
      "Better user experience",
      "Lower bounce rates"
    ],
    expectedResults: [
      "Mobile Score: 42 → 92",
      "Desktop Score: 58 → 94",
      "LCP: 5.2s → 1.8s",
      "CLS: 0.25 → 0.05"
    ]
  },
  {
    id: "mobile-optimization",
    icon: "Smartphone",
    title: "Mobile Optimization",
    description: "Perfect mobile experience on all devices with responsive design and touch-optimized interactions.",
    benefits: [
      "Mobile-first responsive design",
      "Fast mobile loading",
      "Touch-optimized interactions",
      "Mobile SEO optimization"
    ],
    expectedResults: [
      "Mobile Score: 35 → 90+",
      "Reduced mobile bounce rate",
      "Improved mobile conversions",
      "Better mobile UX metrics"
    ]
  },
  {
    id: "seo-performance",
    icon: "Search",
    title: "SEO Performance",
    description: "Optimize your website for search engines and improve visibility on Google rankings.",
    benefits: [
      "Improved Google rankings",
      "Better organic traffic",
      "Higher click-through rates",
      "Better SERP positioning"
    ],
    expectedResults: [
      "Keyword rankings improve",
      "Organic traffic +150-300%",
      "Better meta descriptions",
      "Structured data optimization"
    ]
  },
  {
    id: "core-web-vitals",
    icon: "Activity",
    title: "Core Web Vitals Optimization",
    description: "Master Google's key metrics: LCP, FID/INP, and CLS for maximum SEO impact.",
    benefits: [
      "Google ranking boost",
      "Better user experience",
      "Optimized page interactions",
      "Visual stability improvements"
    ],
    expectedResults: [
      "LCP < 2.5s (Good)",
      "INP < 200ms (Good)",
      "CLS < 0.1 (Good)",
      "All green metrics"
    ]
  },
  {
    id: "accessibility",
    icon: "Eye",
    title: "Accessibility Improvements",
    description: "Make your website accessible to everyone with WCAG compliance and inclusive design.",
    benefits: [
      "WCAG 2.1 AA compliance",
      "Screen reader friendly",
      "Keyboard navigation",
      "Larger audience reach"
    ],
    expectedResults: [
      "Accessibility score: 90+",
      "ARIA labels optimized",
      "Semantic HTML structure",
      "Better for all users"
    ]
  },
  {
    id: "react-nextjs",
    icon: "Code",
    title: "React & Next.js Optimization",
    description: "Expert optimization for modern React and Next.js applications with advanced techniques.",
    benefits: [
      "Code splitting",
      "Image optimization",
      "Bundle size reduction",
      "Server-side rendering"
    ],
    expectedResults: [
      "Bundle size: -60%",
      "Faster rendering",
      "Better performance",
      "Optimized components"
    ]
  },
  {
    id: "performance-audits",
    icon: "BarChart3",
    title: "Performance Audits",
    description: "Comprehensive analysis of your website performance with detailed reports and recommendations.",
    benefits: [
      "Detailed performance report",
      "Actionable recommendations",
      "Competitor analysis",
      "Monthly monitoring"
    ],
    expectedResults: [
      "Complete audit report",
      "Optimization roadmap",
      "Priority fixes identified",
      "Implementation guide"
    ]
  },
  {
    id: "asset-optimization",
    icon: "Image",
    title: "Image & Asset Optimization",
    description: "Optimize images, fonts, and assets for faster loading without sacrificing quality.",
    benefits: [
      "Image compression",
      "WebP conversion",
      "Font optimization",
      "CDN setup"
    ],
    expectedResults: [
      "Image size: -70%",
      "Faster font loading",
      "Better format usage",
      "Optimized delivery"
    ]
  }
];