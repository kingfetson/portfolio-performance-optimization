export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  expectedResults: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  beforeScore: number;
  afterScore: number;
  lcp: {
    before: string;
    after: string;
  };
  improvements: string[];
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
}