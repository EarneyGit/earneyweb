import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { SITE } from '@/lib/content'

export const metadata: Metadata = {
  title: 'AI automation for Chennai businesses',
  description:
    'Planning AI automation for a Chennai business? Earney helps teams map manual work, choose the right workflow to start with, and build practical automations.',
  alternates: {
    canonical: '/chennai-ai-automation',
  },
  openGraph: {
    title: 'AI automation for Chennai businesses | Earney',
    description:
      'A practical starting point for Chennai teams considering AI agents and workflow automation.',
    url: `${SITE.url}/chennai-ai-automation`,
  },
}

const questions = [
  {
    question: 'What should we automate first?',
    answer:
      'Start with work that is frequent, rule-based, and easy to check. Lead routing, appointment reminders, support triage, and moving data between tools are common starting points. A workflow with unclear ownership or unreliable source data usually needs some cleanup before automation helps.',
  },
  {
    question: 'Do we need an AI agent for every workflow?',
    answer:
      'No. A simple integration is often a better fit when the steps and inputs are predictable. AI can help where messages, documents, or customer questions need interpretation, but it should have clear boundaries and a person to handle exceptions.',
  },
  {
    question: 'What does a useful discovery call cover?',
    answer:
      'Bring the current process, the tools involved, a few real examples, and the person who owns the result. We can then identify where the handoffs happen, what needs approval, and whether an automation is worth building.',
  },
]

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE.url}/chennai-ai-automation#service`,
      name: 'AI automation for Chennai businesses',
      provider: {
        '@id': `${SITE.url}/#organization`,
      },
      areaServed: {
        '@type': 'City',
        name: 'Chennai',
      },
      serviceType: 'AI automation and workflow automation',
      url: `${SITE.url}/chennai-ai-automation`,
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE.url}/chennai-ai-automation#faq`,
      mainEntity: questions.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      })),
    },
  ],
}

export default function ChennaiAiAutomationPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Navbar />

      <main>
        <section className="relative overflow-hidden px-4 pb-20 pt-40 sm:px-6 lg:pb-28">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 75% 60% at 50% -5%, rgba(139,92,246,0.2) 0%, transparent 68%)',
            }}
          />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-violet-400">
              Chennai AI automation
            </p>
            <h1 className="font-space-grotesk text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Put repetitive work on a better path.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              AI automation works best when it fixes a specific bottleneck, not when it gets bolted onto everything. Earney helps Chennai teams find the manual steps worth changing and turn them into a workflow people can use.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-violet-500 px-6 py-3 font-medium text-white transition-colors hover:bg-violet-400"
              >
                Discuss a workflow <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-medium text-white/85 transition-colors hover:border-white/35 hover:text-white"
              >
                See all services
              </Link>
            </div>
          </div>
        </section>

        <section className="border-y border-white/8 bg-white/[0.02] px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400">
                Start with the real work
              </p>
              <h2 className="mt-4 font-space-grotesk text-3xl font-bold sm:text-4xl">
                A good automation has a job to do.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-white/65">
              <p>
                Start with the task that keeps getting delayed, copied between systems, or handled differently by every person. That is usually a better place to look than a broad question about using AI.
              </p>
              <p>
                We begin by mapping that task with the people who do it. That makes it easier to spot the inputs, decisions, approvals, and exceptions before any tools are connected.
              </p>
              <p>
                Some workflows only need an integration. Others need an AI-assisted step, such as sorting incoming enquiries or drafting a first response. The right setup depends on the work, not the label.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400">Where to begin</p>
              <h2 className="mt-4 font-space-grotesk text-3xl font-bold sm:text-4xl">
                Bring one process, not a vague wish list.
              </h2>
              <p className="mt-5 leading-relaxed text-white/65">
                The first project should be small enough to understand and important enough that the team notices when it improves. These are the details that make a discovery conversation productive.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                'The trigger: what starts the work, and where does that information arrive?',
                'The handoffs: who touches it next, and which tools do they use?',
                'The decision points: what can be handled automatically and what needs approval?',
                'The exceptions: what goes wrong today, and who is responsible when it does?',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
                  <CheckCircle2 className="mb-4 h-5 w-5 text-violet-400" aria-hidden="true" />
                  <p className="leading-relaxed text-white/75">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/8 px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400">Questions teams ask</p>
            <div className="mt-8 space-y-5">
              {questions.map(({ question, answer }) => (
                <article key={question} className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
                  <h2 className="font-space-grotesk text-xl font-semibold text-white">{question}</h2>
                  <p className="mt-3 leading-relaxed text-white/65">{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-4xl rounded-3xl border border-violet-400/20 bg-violet-500/10 px-6 py-12 text-center sm:px-12">
            <h2 className="font-space-grotesk text-3xl font-bold sm:text-4xl">Have a workflow in mind?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/65">
              Tell us how it works today, where it gets stuck, and what a better outcome looks like. We will start with the process rather than a pre-set solution.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-white/90"
            >
              Contact Earney <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
