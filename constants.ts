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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhOIEwcncoOrfpiWjFakclkFcO92OmuBoktqnjzr_HZHPcYeV1_gC1xVOOWPGD1JRaIyaChy-ERv5Fwv9FKFP2c-rjAzf27Yknt5i0Ua-SWGyNP3Tn5572h8ZPPggFj_v3rsz1KojdX9mHY1Lw_aMEpDC5F0DdETs0LcQIwhd1PXgAkfwamQ1vBh30Ih1IuAuLBW9mqIMSQcOJqzZ7SfwFCnzbG-dJaOB5UOk8_Q_c6skBCaom_9FhebkFQbJaouHl2XWa9sokKS3e',
    alt: 'Abstract image of a fintech dashboard with glowing charts and graphs.',
    title: 'AI-Powered Lending Platform',
    description: 'Revolutionized credit scoring with machine learning to increase loan approval accuracy.',
    // Fix: Converted tags to an array and added impact property
    tags: ['Fintech', 'AI', 'Strategy'],
    categories: ['Fintech', 'AI/ML'],
    impact: {
      title: 'Increased Accuracy',
      description: 'Achieved a 15% reduction in default rates by implementing a new credit scoring model.',
    },
  },
  {
    id: 2,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcqUvMYk2EmSi3Oxi0g24HTg-qQvfWZl96GAHLV5YlXXzUGPf6kboNO0DJ-QHNj-1Iyjojxtc9VvAynKcpa7xL27jehumPYoqJD9rGjm9CLtRsyvAKC6J6AO77AB9ys6M2-AAE8gVN-9w6nVuJw1ied-ETU2Y3tXHQluMVW1TBZGu3ak4b93E0hZbXuChI241HUs12kR4oh00e0GCECZ_ZKXQ_5iM0M2-zAfwtBQyV8-KlnuVLaV6gr_mzXeZbMOliup5CMxChMUng',
    alt: 'A person using a modern mobile banking application.',
    title: 'Fintech Mobile App Redesign',
    description: 'Led a complete UX overhaul that boosted user engagement by 35%.',
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
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNsMyEnSkQwNihwQQBvdkIJRXY4blB6Rhy6yFx3mx4K_rYQ6IBxyg4BVcW93qsx1SwV20CQpQzFHyDAs11TMdA722Y3BBTUA1NofcnQPi4mZLWZtbPAkDADqlsJbFASCuDrYAilz0J3Ffa5-oNRaRLIv9ywDHOpezEv3OGNGuCQic8tX7cPUUCkaPQMgDtrlKWcx-fSkMkI-ZaAsmjcY1TYZzuD6DC3DTnrRFZc77d9o-AT_mEct2_RRuWe66V_12coQvihnHinV3d',
    alt: 'A world map with interconnected nodes representing a global payments network.',
    title: 'Global Payment Gateway',
    description: 'Developed a scalable payment infrastructure for emerging markets.',
    // Fix: Converted tags to an array and added impact property
    tags: ['Fintech', 'Product Management'],
    categories: ['Fintech', 'Product Management'],
    impact: {
        title: 'Market Expansion',
        description: 'Enabled transactions in 5 new countries, increasing payment volume by $10M.',
    },
  },
  {
    id: 4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6GUumMR-8jb23g_eq4vvwK3hNciD5Pyul_11VzDC4JJmL8jeQrAUY60vdyv-kY28hnv-C_6nfzDqPDDhOeUq_rWu3YBw2dKUtEn1rB0B9d8RGyUNXrPuRXS8y3JFCPcICyDiVntsQNiRHoYIdSLFhENdybBvrI0jW_fkOjDLKBHJ-QqjTa_mfsBNAuC54ISyna5manjOhb3T-SqTZU2SfFy4cIcP9AVUL1ZCHLKRGNdz4DVPtlTwY0X2nA3UwRzZW_NSwyLdGx9xu',
    alt: 'A clean and modern data analytics dashboard on a laptop screen.',
    title: 'Data Analytics Dashboard',
    description: 'Designed an intuitive SaaS dashboard for complex data visualization.',
    // Fix: Converted tags to an array and added impact property
    tags: ['SaaS', 'Data', 'AI/ML'],
    categories: ['SaaS', 'AI/ML'],
    impact: {
        title: 'Data-Driven Decisions',
        description: 'Empowered clients to gain critical insights, resulting in a 20% increase in customer retention.',
    },
  },
  {
    id: 5,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJ0K85szA3Iv-MR4rKYc1ZILBjCrTecsugzRR-9MQW6Edlvgz8_JOzABjATro7llqziKSgcNqoty24Q_l7b7n4UlDPNdYmlg9Qckf8uUjYCaoDe8lyb6AeLNrg_3legd8twFunc7tKydecJ-3t4ZNqCzn7wstbTUqW2T4EpcmYpUJXwfw1eUoEwhnzoyK_4wdvHmx5fmc6ye2Ngjy0WEtuwFs7YBq1q_Nl4XziEd0DhKKK3wgIBAhc_zUXT9CysWe-ZE4a-yo6ntT1',
    alt: 'An online shopping interface with product recommendations.',
    title: 'E-commerce ML Recommendation Engine',
    description: 'Built an ML model that increased average order value through personalized recommendations.',
    // Fix: Converted tags to an array and added impact property
    tags: ['E-commerce', 'AI/ML'],
    categories: ['AI/ML'],
    impact: {
        title: 'Revenue Growth',
        description: 'The recommendation engine contributed to a 25% uplift in average order value.',
    },
  },
  {
    id: 6,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxJVRyZM1ym9Y5-FPJiDR0RDgmNdzzsbzXJFHNKbbN4z3dqJVsenKPTHAhVHwg9Og7mcq8kHK3TS-D43bADy8o4ldH5A2IlN51gubXsdNpwmbxCmBJZG3T-uiotKJBRvxbO2ZiVcq9_Ink3qmEVJRBp4UVCohM5KNhZw5q583E1_64WWL1iZ-rrbMvNYWS2PiN0HdZfTuXKvaiuJDG7PRijmCO6PvqrTSTx0LHsamNqkAI9_sChuy3ET4jSyQoVKCYFteZuB18TBkR',
    alt: 'Wireframes and UI designs being planned on a whiteboard for a SaaS platform.',
    title: 'SaaS Platform UX Overhaul',
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