import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Bot,
  Globe,
  Smartphone,
  Code2,
  TrendingUp,
  Video,
  Search,
  Zap,
  ArrowRight,
  CheckCircle2,
  Phone,
} from 'lucide-react'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { SERVICES, PROCESS_STEPS, SITE } from '@/lib/content'

// ─── Metadata ────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Services | Earney',
  description:
    'Earney offers AI agents & automation, website development, app development, software engineering, digital marketing, reels & content production, AI SEO, and no-code automation — all under one roof for ambitious businesses.',
  keywords: [
    'AI automation Chennai',
    'AI agents Chennai',
    'website development Chennai',
    'app development Chennai',
    'software development Chennai',
    'digital marketing Chennai',
    'SEO AEO GEO Chennai',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services | Earney',
    description:
      'From AI automation to reels — every service Earney offers is designed to help your business grow faster in the AI era.',
    url: `${SITE.url}/services`,
  },
}

// ─── Icon map ─────────────────────────────────────────────────────────────────
const ICON_MAP: Record<string, React.ElementType> = {
  bot: Bot,
  globe: Globe,
  smartphone: Smartphone,
  'code-2': Code2,
  'trending-up': TrendingUp,
  video: Video,
  search: Search,
  zap: Zap,
}

// ─── Static FAQ data ──────────────────────────────────────────────────────────
const FAQS = [
  {
    id: 'faq-1',
    q: 'What types of AI agents do you build?',
    a: 'We build sales agents, customer support agents, appointment booking agents, WhatsApp outreach bots, and internal workflow automation agents — all designed to operate 24/7 and integrate with your existing tools.',
  },
  {
    id: 'faq-2',
    q: 'How long does a website project take?',
    a: 'Typically 2–4 weeks for a standard marketing or landing-page site. Larger web applications or e-commerce builds with custom features can take 4–8 weeks depending on scope and content readiness.',
  },
  {
    id: 'faq-3',
    q: 'Do you work with startups?',
    a: 'Yes — we work with startups, SMEs, and growing businesses at all stages. Whether you need an MVP, a launch website, or a full automation stack, we scope our engagement to match your stage and budget.',
  },
  {
    id: 'faq-4',
    q: 'Can you handle the full digital marketing funnel?',
    a: 'Absolutely. We manage the complete funnel — from strategy and creative, to Meta Ads, Google Ads, SEO, content funnels, landing pages, and analytics dashboards — all under one roof with a performance-first mindset.',
  },
  {
    id: 'faq-5',
    q: 'What platforms do you use for no-code automation?',
    a: "We work with Make (formerly Integromat), Zapier, Airtable, Notion, and custom CRM integrations. We also build hybrid solutions using lightweight code where no-code tools hit their limits.",
  },
  {
    id: 'faq-6',
    q: 'How do we get started?',
    a: "Fill in our contact form or call us directly. We'll schedule a short discovery call to understand your goals, current stack, and challenges — then propose the right engagement model for you.",
  },
]

const servicesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE.url}/services#service-catalog`,
      name: 'Earney Service Stack',
      serviceType: 'AI automation, app development, software, and digital growth services',
      provider: {
        '@type': 'Organization',
        '@id': `${SITE.url}/#organization`,
        name: 'Earney',
        url: SITE.url,
      },
      areaServed: {
        '@type': 'City',
        name: 'Chennai',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Earney Services',
        itemListElement: SERVICES.map((svc) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: svc.name,
            description: svc.shortDesc,
            areaServed: {
              '@type': 'City',
              name: 'Chennai',
            },
          },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE.url}/services#faq`,
      mainEntity: FAQS.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ],
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Navbar />

      {/* ════════════════════════════════════════════
          HERO SECTION
      ════════════════════════════════════════════ */}
      <section className="relative pt-40 pb-24 flex flex-col items-center text-center px-4 sm:px-6 overflow-hidden">
        {/* Background radial glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.18) 0%, transparent 65%)',
          }}
        />

        {/* Grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6">
          {/* Section label */}
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-violet-400/80 uppercase">
            <span className="w-4 h-px bg-violet-400/50" />
            // EXPERTISE
            <span className="w-4 h-px bg-violet-400/50" />
          </span>

          {/* H1 */}
          <h1 className="font-space-grotesk text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            Services Built for{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-white/55 leading-relaxed max-w-2xl">
            From AI automation to reels — every service we offer is designed to
            help your business grow faster in the AI era.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-full px-8 py-3 font-semibold text-sm shadow-lg shadow-violet-900/40 hover:shadow-violet-700/40 transition-all duration-300"
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={SITE.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold text-sm border border-white/10 text-white/70 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-300"
            >
              View Our Work
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 inset-x-0 h-32"
          style={{
            background: 'linear-gradient(to bottom, transparent, #0A0A0A)',
          }}
        />
      </section>

      {/* Gradient separator */}
      <div
        aria-hidden
        className="w-full h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.35) 35%, rgba(6,182,212,0.25) 65%, transparent 100%)',
        }}
      />

      {/* ════════════════════════════════════════════
          SERVICES GRID
      ════════════════════════════════════════════ */}
      <section className="relative py-24 px-4 sm:px-6">
        {/* Subtle grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-cyan-400/70 uppercase">
              <span className="w-4 h-px bg-cyan-400/40" />
              // WHAT WE BUILD
              <span className="w-4 h-px bg-cyan-400/40" />
            </span>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold leading-tight">
              Our Full{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Service Stack
              </span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-xl">
              Eight specialisations. One team. Built to deliver AI-powered
              growth across every dimension of your business.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((svc) => {
              const Icon = ICON_MAP[svc.icon] ?? Zap
              return (
                <article
                  key={svc.id}
                  className="group relative flex flex-col gap-5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {/* Hover glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${svc.color}14 0%, transparent 70%)`,
                    }}
                  />

                  {/* Icon + id row */}
                  <div className="relative z-10 flex items-start justify-between">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl"
                      style={{
                        background: `linear-gradient(135deg, ${svc.color}22, ${svc.color}10)`,
                        border: `1px solid ${svc.color}30`,
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{ color: svc.color }}
                      />
                    </div>
                    <span
                      className="font-mono text-xs tracking-widest"
                      style={{ color: `${svc.color}60` }}
                    >
                      {svc.id}
                    </span>
                  </div>

                  {/* Name */}
                  <div className="relative z-10">
                    <h3 className="font-space-grotesk text-lg font-semibold text-white leading-snug">
                      {svc.name}
                    </h3>
                  </div>

                  {/* Short description */}
                  <p className="relative z-10 text-sm text-white/50 leading-relaxed flex-1">
                    {svc.shortDesc}
                  </p>

                  {/* Tags */}
                  <div className="relative z-10 flex flex-wrap gap-2 pt-1">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: `${svc.color}14`,
                          border: `1px solid ${svc.color}28`,
                          color: `${svc.color}cc`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div
        aria-hidden
        className="w-full h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(217,70,239,0.3) 40%, rgba(139,92,246,0.3) 60%, transparent 100%)',
        }}
      />

      {/* ════════════════════════════════════════════
          PROCESS SECTION
      ════════════════════════════════════════════ */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
        {/* Deep background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(139,92,246,0.07) 0%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col items-center text-center gap-4 mb-16">
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-violet-400/70 uppercase">
              <span className="w-4 h-px bg-violet-400/40" />
              // HOW WE WORK
              <span className="w-4 h-px bg-violet-400/40" />
            </span>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold leading-tight">
              Our{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-xl">
              A clear, repeatable framework that takes your idea from concept to
              a live, growing system — without the confusion.
            </p>
          </div>

          {/* Process steps — horizontal row with connectors */}
          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-0">
            {PROCESS_STEPS.map((step, idx) => {
              const isLast = idx === PROCESS_STEPS.length - 1
              return (
                <div
                  key={step.id}
                  className="relative flex flex-col md:flex-row items-start md:items-stretch flex-1 min-w-0"
                >
                  <div className="flex flex-col items-start gap-4 flex-1 px-0 md:px-2">
                    {/* Number circle + horizontal connector */}
                    <div className="flex items-center gap-3 w-full">
                      <div
                        className="flex items-center justify-center w-12 h-12 rounded-full font-space-grotesk text-base font-bold text-white shrink-0 shadow-lg"
                        style={{
                          background:
                            'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                          boxShadow: '0 0 24px rgba(139,92,246,0.35)',
                        }}
                      >
                        {step.phase}
                      </div>
                      {/* Horizontal line (desktop, not last) */}
                      {!isLast && (
                        <div
                          className="hidden md:block h-px flex-1"
                          style={{
                            background:
                              'linear-gradient(90deg, rgba(139,92,246,0.5) 0%, rgba(6,182,212,0.15) 100%)',
                          }}
                        />
                      )}
                    </div>

                    {/* Vertical connector (mobile, not last) */}
                    {!isLast && (
                      <div
                        className="md:hidden ml-6 w-px h-6"
                        style={{
                          background:
                            'linear-gradient(180deg, rgba(139,92,246,0.5), rgba(139,92,246,0.05))',
                        }}
                      />
                    )}

                    {/* Text card */}
                    <div
                      className="flex flex-col gap-2 flex-1 rounded-2xl p-5 w-full transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      <span className="font-mono text-xs tracking-widest text-violet-400/60 uppercase">
                        Phase {step.phase}
                      </span>
                      <h3 className="font-space-grotesk text-base font-semibold text-white leading-snug">
                        {step.name}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Desktop right spacer (not last) */}
                  {!isLast && <div className="hidden md:block w-4 shrink-0" />}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div
        aria-hidden
        className="w-full h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(6,182,212,0.3) 40%, rgba(139,92,246,0.3) 60%, transparent 100%)',
        }}
      />

      {/* ════════════════════════════════════════════
          FAQ SECTION
      ════════════════════════════════════════════ */}
      <section className="relative py-24 px-4 sm:px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col items-center text-center gap-4 mb-14">
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-cyan-400/70 uppercase">
              <span className="w-4 h-px bg-cyan-400/40" />
              // FAQ
              <span className="w-4 h-px bg-cyan-400/40" />
            </span>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold leading-tight">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-white/50 text-sm sm:text-base max-w-lg">
              Quick answers to questions we hear most often. Still have
              something to ask?{' '}
              <Link
                href="/contact"
                className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
              >
                Drop us a message.
              </Link>
            </p>
          </div>

          {/* Accordion — base-ui, multiple={false} */}
          <Accordion multiple={false} className="flex flex-col gap-3">
            {FAQS.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="rounded-2xl overflow-hidden border-0"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <AccordionTrigger className="px-6 py-5 text-sm sm:text-base font-medium text-white/85 hover:text-white hover:no-underline transition-colors">
                  <span className="flex items-center gap-3 text-left">
                    <CheckCircle2 className="w-4 h-4 text-violet-400/70 shrink-0 mt-0.5" />
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <p className="text-sm text-white/55 leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Gradient separator */}
      <div
        aria-hidden
        className="w-full h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.35) 35%, rgba(217,70,239,0.25) 65%, transparent 100%)',
        }}
      />

      {/* ════════════════════════════════════════════
          CTA SECTION
      ════════════════════════════════════════════ */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
        {/* Background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(139,92,246,0.12) 0%, rgba(217,70,239,0.05) 40%, transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Glass panel */}
          <div
            className="flex flex-col items-center text-center gap-8 rounded-3xl px-6 sm:px-14 py-14"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow:
                '0 0 80px rgba(139,92,246,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}
          >
            {/* Top accent line */}
            <div
              aria-hidden
              className="w-16 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, #8b5cf6, #d946ef, transparent)',
              }}
            />

            <div className="flex flex-col items-center gap-4">
              <h2 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to build{' '}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                  something great?
                </span>
              </h2>
              <p className="text-white/55 text-base sm:text-lg max-w-xl leading-relaxed">
                Tell us about your project and we&apos;ll get back within{' '}
                <span className="text-white/80 font-medium">24 hours</span>.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-full px-9 py-3.5 font-semibold text-sm shadow-lg shadow-violet-900/40 hover:shadow-violet-700/50 transition-all duration-300"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                <Phone className="w-4 h-4 text-violet-400" />
                {SITE.phone}
              </a>
            </div>

            {/* Trust note */}
            <p className="text-xs text-white/30 font-mono tracking-wide">
              No commitment. Just a conversation about your goals.
            </p>

            {/* Bottom accent line */}
            <div
              aria-hidden
              className="w-16 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, #06b6d4, #8b5cf6, transparent)',
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
