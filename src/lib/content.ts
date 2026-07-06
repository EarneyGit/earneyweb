// ─────────────────────────────────────────────
// Earney — Site Content Constants
// Brand: AI Automation, Apps & Digital Growth Systems
// Source of truth: Wayback April 2025 + local hosting dump + portfolio.earney.in
// ─────────────────────────────────────────────

export const SITE = {
  name: 'Earney',
  tagline: "AI Automation, Apps & Digital Growth Systems",
  title: 'Earney — AI Automation, Apps & Digital Growth Systems',
  description:
    'Earney builds AI agents, automations, modern websites, apps, software, reels, and digital growth systems for ambitious businesses in Chennai and beyond.',
  phone: '+91 99418 75131',
  phoneRaw: '9941875131',
  email: 'hello@earney.in',
  address: 'Kolapakkam, Chennai, India',
  url: 'https://earney.in',
  portfolioUrl: 'https://portfolio.earney.in/',
  copyright: `© ${new Date().getFullYear()} Earney. All Rights Reserved.`,
} as const

export const SOCIAL = [
  { label: 'Facebook', url: 'https://www.facebook.com/earneysolutions/', icon: 'facebook' },
  { label: 'LinkedIn', url: 'https://in.linkedin.com/company/earney', icon: 'linkedin' },
  { label: 'Instagram', url: 'https://www.instagram.com/earneysolutions/?hl=en', icon: 'instagram' },
  { label: 'X', url: 'https://x.com/DigitalEar37032', icon: 'twitter-x' },
] as const

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: 'https://portfolio.earney.in/', external: true },
  { label: 'Blogs', href: '/blogs' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Our Work', href: 'https://portfolio.earney.in/', external: true },
  { label: 'Blogs', href: '/blogs' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms' },
] as const

// ── Services — modernized for 2025/2026 market ──
export const SERVICES = [
  {
    id: 'SVC.01',
    slug: 'ai-agents-automation',
    name: 'AI Agents & Automation',
    shortDesc:
      'AI agents that handle your sales, support, lead capture, WhatsApp outreach, and internal workflows — running 24/7 so your team doesn\'t have to.',
    icon: 'bot',
    gradient: 'from-violet-500 to-purple-700',
    color: '#8b5cf6',
    tags: ['AI Agents', 'WhatsApp Bots', 'Workflow Automation', '24/7 Ops'],
  },
  {
    id: 'SVC.02',
    slug: 'website-development',
    name: 'Website Development',
    shortDesc:
      'High-performance modern websites built with Next.js and React. SEO-ready, conversion-focused, and built to load fast and look premium.',
    icon: 'globe',
    gradient: 'from-cyan-500 to-blue-600',
    color: '#06b6d4',
    tags: ['Next.js', 'React', 'Landing Pages', 'SEO'],
  },
  {
    id: 'SVC.03',
    slug: 'app-development',
    name: 'App Development',
    shortDesc:
      'Mobile apps, web apps, MVPs, and dashboards built around your workflow. From idea to launch, we handle the full build.',
    icon: 'smartphone',
    gradient: 'from-pink-500 to-rose-600',
    color: '#ec4899',
    tags: ['Mobile Apps', 'Web Apps', 'MVPs', 'Dashboards'],
  },
  {
    id: 'SVC.04',
    slug: 'software-development',
    name: 'Software Development',
    shortDesc:
      'Custom internal tools, CRM systems, portals, admin panels, and automation dashboards. Built around how your business actually works.',
    icon: 'code-2',
    gradient: 'from-emerald-500 to-teal-600',
    color: '#10b981',
    tags: ['CRM Systems', 'Internal Tools', 'Admin Panels', 'Portals'],
  },
  {
    id: 'SVC.05',
    slug: 'digital-marketing',
    name: 'Digital Marketing (End-to-End)',
    shortDesc:
      'Strategy, Meta ads, Google ads, SEO, content funnels, and analytics — all handled under one roof with a performance-first mindset.',
    icon: 'trending-up',
    gradient: 'from-orange-500 to-amber-600',
    color: '#f59e0b',
    tags: ['Meta Ads', 'Google Ads', 'SEO', 'Content Funnels'],
  },
  {
    id: 'SVC.06',
    slug: 'reels-content-production',
    name: 'Reels & Content Production',
    shortDesc:
      'High-quality reels, shorts, ad creatives, and campaign videos that capture attention and convert — built for the social-first era.',
    icon: 'video',
    gradient: 'from-fuchsia-500 to-purple-600',
    color: '#d946ef',
    tags: ['Reels', 'Shorts', 'Ad Creatives', 'Campaign Videos'],
  },
  {
    id: 'SVC.07',
    slug: 'ai-seo-search',
    name: 'AI Search & Modern SEO',
    shortDesc:
      'SEO, AEO, and GEO — structured content strategies that get you visible on Google, AI search assistants, and modern discovery platforms.',
    icon: 'search',
    gradient: 'from-sky-500 to-indigo-600',
    color: '#6366f1',
    tags: ['SEO', 'AEO', 'GEO', 'LLM Visibility'],
  },
  {
    id: 'SVC.08',
    slug: 'nocode-automation',
    name: 'No-Code / Low-Code Automation',
    shortDesc:
      'Make, Zapier, Airtable, Notion, and CRM integrations that automate your business workflows — fast, without heavy dev costs.',
    icon: 'zap',
    gradient: 'from-yellow-500 to-orange-500',
    color: '#eab308',
    tags: ['Make', 'Zapier', 'Airtable', 'CRM Integrations'],
  },
] as const

// ── AI Agents use cases ──
export const AI_AGENT_USECASES = [
  { icon: 'users', label: 'Lead Capture', desc: 'Auto-qualify leads from your website, ads, and social — no manual follow-up needed.' },
  { icon: 'message-circle', label: 'Customer Support', desc: '24/7 AI support agents that handle FAQs, escalate issues, and close tickets.' },
  { icon: 'calendar', label: 'Appointment Booking', desc: 'Smart scheduling agents that book, confirm, and remind — synced with your calendar.' },
  { icon: 'workflow', label: 'Internal Workflows', desc: 'Automate internal processes: reporting, approvals, data entry, and cross-tool syncing.' },
  { icon: 'bar-chart-2', label: 'Business Reporting', desc: 'Automated dashboards and reports delivered on schedule — always up to date.' },
  { icon: 'message-square', label: 'WhatsApp Automation', desc: 'AI-powered WhatsApp agents for sales, support, and onboarding.' },
] as const

// ── Company timeline (from portfolio.earney.in Our Story) ──
export const TIMELINE = [
  {
    year: '2020',
    title: 'The Beginning',
    desc: 'Founded Earney with a focus on brand strategy, content creation, and end-to-end digital marketing. Established our core UI/UX design expertise.',
    tags: ['Brand Strategy', 'Content Creation', 'UI/UX Design', 'Digital Marketing'],
    gradient: 'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20',
  },
  {
    year: '2023',
    title: 'Building Digital Products',
    desc: 'Expanded into full-scale development — delivering websites, mobile applications, custom software, and elevated video content production.',
    tags: ['Website Projects', 'Mobile Apps', 'Software Solutions', 'Video Content'],
    gradient: 'from-cyan-500/20 via-blue-500/20 to-indigo-500/20',
  },
  {
    year: '2024',
    title: 'Content & Reels Era',
    desc: 'Mastered short-form video marketing. Specialized in high-quality reels, shorts, and viral content for social media and paid campaigns.',
    tags: ['Instagram Reels', 'YouTube Shorts', 'Ad Creatives', 'Viral Marketing'],
    gradient: 'from-pink-500/20 via-rose-500/20 to-orange-500/20',
  },
  {
    year: '2025',
    title: 'The AI Automation Era',
    desc: 'Embracing AI. Integrated advanced AI automations, intelligent agents, and smart tools to revolutionize business operations.',
    tags: ['AI Automations', 'AI Agents', 'AI Tools', 'AI Marketing'],
    gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
  },
  {
    year: '2026',
    title: 'AI Growth Systems',
    desc: 'Building next-generation AI growth systems — full-stack business automation from lead capture to customer success, powered by intelligent agents.',
    tags: ['AI Growth Systems', 'Full Automation', 'Business Intelligence', 'AI-First Operations'],
    gradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
  },
] as const

// ── Tech Stack ──
export const TECH_STACK = [
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Backend' },
  { name: 'FastAPI', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'OpenAI', category: 'AI' },
  { name: 'Claude API', category: 'AI' },
  { name: 'LangChain', category: 'AI' },
  { name: 'Make.com', category: 'Automation' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'n8n', category: 'Automation' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Vercel', category: 'Cloud' },
  { name: 'Supabase', category: 'Cloud' },
] as const

// ── Partner logos (recovered assets) ──
export const PARTNER_LOGOS = [
  { name: 'Microsoft', src: '/recovered-assets/local-microsoft.webp' },
  { name: 'Cisco', src: '/recovered-assets/local-cisco.webp' },
  { name: 'BroadSoft', src: '/recovered-assets/local-broadsoft.webp' },
  { name: 'NearbyComputing', src: '/recovered-assets/local-nearbycomputing.webp' },
  { name: '6sense', src: '/recovered-assets/local-6sense.webp' },
  { name: 'Zoom', src: '/recovered-assets/local-zoom.webp' },
  { name: 'Easy', src: '/recovered-assets/local-easy.webp' },
  { name: 'Huo', src: '/recovered-assets/local-huo.webp' },
  { name: 'Chili', src: '/recovered-assets/local-chili.webp' },
] as const

// ── Testimonials (recovered + safe generic) ──
export const TESTIMONIALS = [
  {
    id: 'TST.01',
    quote: '"Earney completely overhauled our lead-gen pipeline. They built an AI agent that qualifies leads 24/7 and books them straight into our calendar. Our close rate jumped by 40% in just two months. Unbelievable ROI."',
    author: 'Karthik Subramaniam',
    company: 'Director of Growth, Chennai Retail',
  },
  {
    id: 'TST.02',
    quote: '"The new web application they designed and built for us is stunning. Not only does it look incredibly premium with the dark aesthetic we asked for, but it loads instantly. The team is hyper-responsive and actually cares about the details."',
    author: 'Priya Rajan',
    company: 'Founder, Nexus SaaS Chennai',
  },
  {
    id: 'TST.03',
    quote: '"Their content production is on another level. The reels they shot and edited for our ad campaigns consistently beat our own internal creatives in CTR and ROAS. If you want top-tier modern marketing, Earney is the team to hire."',
    author: 'Arun Kumar',
    company: 'Marketing Head, Elevate Lifestyle Adyar',
  },
] as const

// ── Blog posts (recovered from Wayback earney.in/blogs/ April 2025) ──
export const BLOG_POSTS = [
  {
    slug: 'ai-automation-for-small-business-cost-savings',
    title: 'How AI Automation Can Slash Operational Costs for Small Businesses in 2025',
    category: 'AI Automation',
    excerpt:
      'Practical automation strategies that small businesses are using to cut overheads and accelerate growth with AI-powered tools.',
    image: '/recovered-assets/wp-content-uploads-2024-08-img-sg-post5-832x630-webp.webp',
    author: 'Earney Team',
    date: 'March 2025',
  },
  {
    slug: 'the-future-of-workflow-automation',
    title: 'The Future of Workflow Automation: Comparing ChatGPT, Claude, and Grok for Business',
    category: 'Workflow',
    excerpt:
      'A deep look at leading AI platforms and how businesses can choose the right tool to automate their workflows effectively.',
    image: '/recovered-assets/wp-content-uploads-2024-08-img-sg-post7-832x630-webp.webp',
    author: 'Earney Team',
    date: 'February 2025',
  },
  {
    slug: 'ai-search-aeo-geo-modern-seo',
    title: 'Beyond SEO: How to Get Found on AI Search Assistants and Modern Discovery Platforms',
    category: 'AI Search',
    excerpt:
      'AEO and GEO are changing how businesses get discovered. Here\'s what you need to do now to stay visible in the AI search era.',
    image: '/recovered-assets/wp-content-uploads-2024-08-img-sg-post8-832x630-webp.webp',
    author: 'Earney Team',
    date: 'January 2025',
  },
  {
    slug: 'harnessing-predictive-analytics-in-business',
    title: 'Harnessing Predictive Analytics to Make Better Business Decisions',
    category: 'Data Analytics',
    excerpt:
      'From demand forecasting to customer churn prediction — how predictive analytics is becoming a must-have for competitive businesses.',
    image: '/recovered-assets/wp-content-uploads-2024-08-img-sg-post5-832x630-webp.webp',
    author: 'Earney Team',
    date: 'December 2024',
  },
] as const

// ── Hero content ──
export const HERO = {
  eyebrow: "We're not watching the Future. We're Building it.",
  h1: 'AI Automation, Apps & Digital Growth Systems',
  sub: 'Earney builds AI agents, modern websites, mobile apps, software systems, high-quality reels, and performance marketing engines for ambitious businesses ready to grow.',
  cta1: { label: 'Get a Quote', href: '/contact' },
  cta2: { label: 'Explore Services', href: '/services' },
  cta3: { label: 'View Our Work', href: 'https://portfolio.earney.in/' },
} as const

// ── Process steps ──
export const PROCESS_STEPS = [
  {
    id: 'PH1',
    phase: '01',
    name: 'Discovery & Strategy',
    desc: 'We analyze your goals, market, and opportunities to design the right system — not just the nearest tool.',
  },
  {
    id: 'PH2',
    phase: '02',
    name: 'Design & Build',
    desc: 'Our team designs and develops your solution with precision — from UX wireframes to production-ready code.',
  },
  {
    id: 'PH3',
    phase: '03',
    name: 'Test & Optimize',
    desc: 'We rigorously test, refine, and tune every component before launch to ensure it performs exactly as expected.',
  },
  {
    id: 'PH4',
    phase: '04',
    name: 'Launch & Grow',
    desc: 'Once live, we monitor, support, and continue improving your system as your business scales.',
  },
] as const
