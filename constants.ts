import { Project } from './types';

export const FILTERS = ['All', 'Fintech', 'AI/ML', 'Product Management', 'SaaS', 'UX/UI Design'];

// Fix: Added STATS constant
export const STATS = [
  { label: 'Years of Experience', value: '6+' },
  { label: 'Team Size Led', value: '30+' },
  { label: 'Global Markets', value: '3' },
  { label: 'Portfolio Size', value: '$10M' },
];

// Fix: Added SKILLS constant
export const SKILLS = [
    {
        icon: 'insights',
        title: 'Product Strategy',
        description: 'Defining the "why", "what", and "when" of the product that is being built.',
    },
    {
        icon: 'design_services',
        title: 'UX/UI Design',
        description: 'Creating user-centered designs by understanding business requirements, and user feedback.',
    },
    {
        icon: 'code',
        title: 'AI Transformation',
        description: 'Understanding the opportunities and potential AI brings to products.',
    },
    {
        icon: 'analytics',
        title: 'Data Analysis',
        description: 'Using data to inform product decisions and measure success.',
    },
    {
        icon: 'groups',
        title: 'Business Leadership',
        description: 'Leading cross-functional teams to deliver high-quality products on time.',
    },
    {
        icon: 'monitoring',
        title: 'Fintech Expertise',
        description: 'Deep understanding of the financial technology landscape and regulations.',
    },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    image: 'https://lh3.googleusercontent.com/d/1SZBfUFUQPGN89KrLXcHRXfOWTgKYRUJS',
    alt: 'Abstract image of a fintech dashboard with glowing charts and graphs.',
    title: 'AI-Powered Payroll and Lending Platform',
    description: 'Revolutionized payroll and credit scoring with machine learning to increase loan approval accuracy.',
    // Fix: Converted tags to an array and added impact property
    tags: ['Fintech', 'AI', 'Strategy'],
    categories: ['Fintech', 'AI/ML'],
    impact: {
      title: 'Increased Accuracy',
      description: 'Reduced payroll processing time by over 200%, Improved Loan disbursement time by 50% and reduction in default rates by implementing a new credit scoring model.',
    },
  },
  {
    id: 2,
    image: 'https://lh3.googleusercontent.com/d/1QuptK56OGqjm-AMKD-YCsAcA3Xeavnvt',
    alt: 'A person using a modern mobile banking application.',
    title: 'Cross Border Fintech Mobile App',
    description: 'Product Management launching from zero to one.',
    // Fix: Converted tags to an array and added impact property
    tags: ['UX/UI', 'Mobile', 'Fintech'],
    categories: ['UX/UI Design', 'Fintech'],
    impact: {
      title: 'Enhanced User Engagement',
      description: 'Redesigned the user flow, leading to a 35% increase in daily active users.',
    },
  },
  {
    id: 3,
    image: 'https://lh3.googleusercontent.com/d/1wAP7Aa7xTzzjQAiXobUBxYPT4vsAOV-O',
    alt: 'A world map with interconnected nodes representing a global payments network.',
    title: 'Marketplace',
    description: 'Website to help couple plan weddings on a budget',
    // Fix: Converted tags to an array and added impact property
    tags: ['E-commerce'],
    categories: ['Product Management'],
    impact: {
        title: 'Market Expansion',
        description: 'Managed mobile and web app platforms from scratch',
    },
  },
  {
    id: 4,
    image: 'https://lh3.googleusercontent.com/d/1Y3Dd0pqVHMuJdNIIXmyXzDpy7YmtCSCW',
    alt: 'A clean and modern data analytics dashboard on a laptop screen.',
    title: 'Music Review App',
    description: 'Product Strategy',
    // Fix: Converted tags to an array and added impact property
    tags: ['Product Management'],
    categories: ['Product Management'],
    impact: {
        title: 'Share your love for music',
        description: 'Product Improvement, Team Setup, Processes',
    },
  },
  {
    id: 5,
    image: 'https://lh3.googleusercontent.com/d/10cUK8_iembOsgGzDJ4Zd4rMs3GdP_85P',
    alt: 'An online shopping interface with product recommendations.',
    title: 'Social Media & Bookings',
    description: 'Algorithms to help people connect and book trips at destinations',
    // Fix: Converted tags to an array and added impact property
    tags: ['E-commerce'],
    categories: ['Product Management'],
    impact: {
        title: 'Revenue Growth',
        description: 'The recommendation engine contributed to a 25% uplift in average order value.',
    },
  },
  {
    id: 6,
    image: 'https://lh3.googleusercontent.com/d/129A4E_QVNcGdpsZNU9UPQ3IH9h1YBN3L',
    alt: 'Revamp of Powerful CRM',
    title: 'CRM Platform UX Overhaul',
    description: 'Streamlined user workflows, reducing support tickets by 50%.',
    // Fix: Converted tags to an array and added impact property
    tags: ['SaaS', 'UX/UI', 'Product Strategy'],
    categories: ['SaaS', 'UX/UI Design', 'Product Management'],
    impact: {
        title: 'Operational Efficiency',
        description: 'The new design reduced user-reported issues by 50%, freeing up support resources.',
    },
  },
];