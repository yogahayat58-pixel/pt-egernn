export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  imageType: string;
  benefits: string[];
  specs: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  location: string;
  category: string;
  year: string;
  imageType: string;
  shortDesc: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  gallery: string[];
  featured?: boolean;
}

export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  imageType: string;
  summary: string;
  content: string[];
  tags: string[];
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarInitials: string;
  quote: string;
  rating: number;
  projectRef: string;
}

export interface ClientPartner {
  id: string;
  name: string;
  industry: string;
  logoText: string;
}

export interface ContactMessage {
  id: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  message: string;
  isRead: boolean;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  establishedYear: number;
  phone: string;
  email: string;
  address: string;
  city: string;
  workingHours: string;
  whatsapp: string;
  socials: {
    linkedin: string;
    instagram: string;
    youtube: string;
    facebook: string;
  };
  certifications: string[];
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
}

export interface SEOSettings {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogType: string;
  twitterCard: string;
  enableSchemaOrg: boolean;
}

export interface ThemeSettings {
  primaryColor: string;
  accentColor: string;
  darkMode: boolean;
}
