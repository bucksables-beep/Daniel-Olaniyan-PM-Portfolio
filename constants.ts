import { Project } from './types';

export const FILTERS = ['All', 'Fintech', 'AI/ML', 'Product Management', 'SaaS', 'UX/UI Design'];

// Fix: Added STATS constant
export const STATS = [
  { label: 'AI Agents Shipped', value: '5', suffix: '+' },
  { label: 'Platform Users', value: '10', suffix: 'k+' },
  { label: 'Global Fellowships', value: '3', suffix: '' },
];

export const SKILLS = [
  'Multi-Agent Systems', 'Product Strategy', 'LangChain / LangSmith', 'GCP',
  'RAG Architecture', 'MLOps', 'Full Stack Development', 'Node.js',
  'Python', 'Claude API', 'Gemini', 'OpenAI', 'HubSpot'
];

export const RECOGNITION = [
  {
    year: '2025',
    org: 'U.S. State Dept / IREX',
    name: 'Mandela Washington Fellow',
    detail: 'Clark Atlanta University. The YALI flagship programme for emerging African leaders in business, civic leadership, and public management.'
  },
  {
    year: 'Active',
    org: 'INSEAD',
    name: 'AI Venture Lab Fellow',
    detail: 'Programme for AI-native founders building ventures at the frontier of artificial intelligence and business.'
  },
  {
    year: 'Active',
    org: 'Ashoka',
    name: 'Changemaker Fellow',
    detail: 'Global fellowship recognising systems-level change and entrepreneurial approaches to social impact.'
  },
  {
    year: '2019',
    org: 'Merck KGaA',
    name: 'X-Innovation Award',
    detail: 'Awarded for the AI telemedicine platform reaching 10,000+ users in underserved communities.'
  },
  {
    year: '2019',
    org: 'Robert Bosch Stiftung',
    name: 'Innovation Recognition',
    detail: 'Impact-driven technology work in digital health across underserved populations globally.'
  },
  {
    year: '2019',
    org: 'NeurIPS / Black in AI',
    name: 'AI Research Presenter',
    detail: 'AI research presentation at the Black in AI workshop, NeurIPS Vancouver — one of the premier ML conferences globally.'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    image: 'https://lh3.googleusercontent.com/d/1SZBfUFUQPGN89KrLXcHRXfOWTgKYRUJS',
    alt: 'B2B Acquisition Engine',
    title: 'B2B Acquisition Engine',
    description: 'A 4-agent autonomous lead generation system on GCP. Agent 1 mines qualified prospects via sector, company size, and geographic signals. Subsequent agents enrich, score, and push into CRM with Slack notifications.',
    tags: ['Node.js', 'GCP', 'PM2', 'Gemini 2.5', 'HubSpot'],
    categories: ['AI/ML', 'SaaS'],
    impact: {
      title: 'Autonomous Acquisition',
      description: 'First corrected run produced qualified prospects without manual intervention.',
    },
  },
  {
    id: 2,
    image: 'https://lh3.googleusercontent.com/d/1QuptK56OGqjm-AMKD-YCsAcA3Xeavnvt',
    alt: 'SmartTrader',
    title: 'SmartTrader',
    description: 'A 5-agent autonomous trading pipeline covering stocks, ETFs, and prediction markets. Signal detection, portfolio analysis, risk assessment, execution logic, and reporting — deployed on GCP.',
    tags: ['Python', 'GCP', '5 Agents'],
    categories: ['Fintech', 'AI/ML'],
    impact: {
      title: 'Autonomous Trading',
      description: 'Full end-to-end trading pipeline with automated risk assessment.',
    },
  },
  {
    id: 3,
    image: 'https://lh3.googleusercontent.com/d/1wAP7Aa7xTzzjQAiXobUBxYPT4vsAOV-O',
    alt: 'RevIntel (ShopAI)',
    title: 'RevIntel (ShopAI)',
    description: 'AI-powered retail intelligence platform providing inventory, pricing, and demand signals to supermarket operators. Full PRD and architecture completed; in active build.',
    tags: ['AI Analytics', 'Retail', 'SaaS'],
    categories: ['SaaS', 'AI/ML'],
    impact: {
      title: 'Retail Intelligence',
      description: 'Providing actionable signals to supermarket operators.',
    },
  },
  {
    id: 4,
    image: 'https://lh3.googleusercontent.com/d/1Y3Dd0pqVHMuJdNIIXmyXzDpy7YmtCSCW',
    alt: 'AutoHunt',
    title: 'AutoHunt',
    description: 'A 5-agent system using job postings as declared pain-point signals to surface and qualify SMBs globally. Built for internal and client consulting pipelines.',
    tags: ['5 Agents', 'Signal Mining'],
    categories: ['AI/ML', 'SaaS'],
    impact: {
      title: 'Lead Intelligence',
      description: 'Surfacing qualified SMBs via declared pain-point signals.',
    },
  },
  {
    id: 5,
    image: 'https://lh3.googleusercontent.com/d/10cUK8_iembOsgGzDJ4Zd4rMs3GdP_85P',
    alt: 'AI Telemedicine Platform',
    title: 'AI Telemedicine Platform',
    description: '10,000+ users across underserved communities. AI-powered triage and consultation at the intersection of public health and technology. Merck X-Innovation Award. NeurIPS 2019.',
    tags: ['AI Health', '10k+ Users', 'NeurIPS 19'],
    categories: ['AI/ML', 'HealthTech'],
    impact: {
      title: 'Global Impact',
      description: 'Reached 10,000+ users in underserved communities with AI triage.',
    },
  },
];