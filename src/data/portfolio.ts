/**
 * Portfolio content configuration for Avishkar Raut.
 * Edit text, add LinkedIn post URLs, or unhide Case Study #3 directly in this file.
 */

export interface ProofStat {
  value: string;
  label: string;
}

export interface FeaturedPost {
  title: string;
  url: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  approach: string;
  result: string;
  details: string[];
  featuredPosts?: FeaturedPost[];
  externalLink?: {
    label: string;
    url: string;
  };
  /** Set to false when ready to publish on the site. */
  hidden?: boolean;
}

export interface ServiceItem {
  number: string;
  title: string;
}

export const SITE_META = {
  name: 'Avishkar Raut',
  email: 'avishkarraut72@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/avishkar-raut',
  githubUrl: 'https://github.com/avishkar999',
  headshotSrc: '/assets/aistudio/26BBFA57_e16dd53b.jpg',
  headshotAlt: 'Portrait of Avishkar Raut, finance and fintech content creator',
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_CONTENT = {
  headline: 'Finance & FinTech, made simple.',
  subheadline:
    'I help fintech and finance startups turn complex money topics into simple content people actually read.',
  primaryCta: 'See my work',
  secondaryCta: 'Connect on LinkedIn',
  credentials:
    'BBA FinTech & Banking, Kristu Jayanti University | Founder, WalletWisely | Bengaluru',
};

export const PROOF_STATS: ProofStat[] = [
  {
    value: '100+',
    label: 'posts published on finance and fintech',
  },
  {
    value: '5K+',
    label: 'weekly impressions, grown organically',
  },
  {
    value: 'Since 2025',
    label: 'creating content consistently',
  },
];

export const ABOUT_CONTENT = {
  heading: 'About',
  paragraphs: [
    "I'm a first-year BBA FinTech & Banking student in Bengaluru. Since 2025 I've written 100+ posts on finance, fintech, and personal branding, explaining topics like UPI, credit, investing, and banking in plain language.",
    "I'm also building WalletWisely, an AI-powered finance tool for students and early-stage founders.",
    "I believe the future of finance is built on technology, data, and clear communication, and I'm building skills in all three.",
  ],
  learningHeading: 'Currently learning',
  currentlyLearning: ['Excel', 'Python', 'SQL', 'Financial Modelling', 'AI tools'],
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'walletwisely',
    title: 'WalletWisely',
    subtitle: 'Founder · January 2026 – Present',
    problem:
      'Students and early-stage founders struggle to track spending and plan budgets.',
    approach:
      'Designed, prototyped, and tested an AI-powered personal finance tool using AI tools while learning to code it myself, focused on straightforward spending tracking and budget planning.',
    result: 'Currently in development.',
    details: [
      'Built for students and early-stage founders who need a clear view of day-to-day spending without complicated spreadsheets.',
      'Prototyped and tested end-to-end using modern AI tools alongside hands-on coding.',
      'Currently in active development in Bengaluru.',
    ],
  },
  {
    id: 'linkedin-content',
    title: 'Finance & FinTech LinkedIn Content',
    subtitle: 'LinkedIn Content Creator · June 2025 – Present',
    problem: 'Finance topics feel complicated and boring to most readers.',
    approach:
      'Educational posts written in plain language covering UPI, credit, investing, banking, and personal branding for students and founders, published consistently without paid ads.',
    result: '100+ posts, 5K+ weekly impressions organically.',
    details: [
      'Published 100+ posts breaking down everyday financial and fintech concepts into clear, readable takeaways.',
      'Grew organically to 5K+ weekly impressions with zero paid promotion.',
      'Focused on practical clarity for both student readers and fintech founders.',
    ],
    // Add your 3 best LinkedIn post links here when ready; empty array stays hidden.
    featuredPosts: [],
    externalLink: {
      label: 'View profile on LinkedIn',
      url: 'https://www.linkedin.com/in/avishkar-raut',
    },
  },
  {
    id: 'excel-analysis-project',
    title: 'Data & Excel Finance Project',
    subtitle: 'Financial Analysis · Upcoming',
    problem: 'Placeholder for upcoming data or Excel case study.',
    approach: 'Add your Excel or SQL analysis approach here when ready.',
    result: 'Upcoming.',
    details: [],
    // Keep hidden until the project is ready to showcase.
    hidden: true,
  },
];

export const SERVICES_CONTENT = {
  heading: 'Services',
  items: [
    {
      number: '01',
      title: 'LinkedIn content for finance and fintech brands',
    },
    {
      number: '02',
      title: 'Plain-language explainers (UPI, credit, investing, banking)',
    },
    {
      number: '03',
      title: 'Excel-based finance analysis (starter level)',
    },
  ] as ServiceItem[],
  availability:
    'Open to part-time and remote content, growth, and analyst internships at fintech startups.',
};

export const SKILLS_AND_CERTS = {
  heading: 'Skills & Certifications',
  skills: [
    'Content Writing',
    'LinkedIn Content Strategy',
    'Financial Analysis',
    'Microsoft Excel',
    'Social Media Marketing',
  ],
  certifications: ['HubSpot Social Media', 'HubSpot Inbound'],
};

export const CONTACT_CONTENT = {
  heading: "Let's work together.",
  subline: 'Tell me about your project or role.',
};

export const FOOTER_CONTENT = {
  copyright: '© 2026 Avishkar Raut',
  backToTop: 'Back to top',
};
