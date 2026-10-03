import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Phone } from 'lucide-react'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { SITE } from '@/lib/content'

export const metadata: Metadata = {
  title: 'AI automation in Chennai',
  description:
    'Earney helps Chennai teams plan and build AI automation for lead handling, support, reporting, scheduling, and internal workflows.',
  alternates: {
    canonical: '/ai-automation-chennai',
  },
  openGraph: {
    title: 'AI automation in Chennai | Earney',
    description:
      'A practical starting point for Chennai businesses considering AI automation.',
    url: `${SITE.url}/ai-automation-chennai`,
  },
}

const automationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${SITE.url}/ai-automation-chennai#service`,
  name: 'AI automation',
  description:
    'Planning and implementation of AI automation for business workflows.',
  provider: {
    '@id': `${SITE.url}/#organization`,
  },
  areaServed: {
    '@type': 'City',
    name: 'Chennai',
  },
  url: `${SITE.url}/ai-automation-chennai`,
}

const goodFits = [
  'Leads arrive through several channels and someone still has to sort or reply to them manually.',
  'Your team answers the same customer questions before an enquiry reaches the right person.',
  'Appointments, follow-ups, or handoffs rely on spreadsheets, inboxes, or memory.',
  'Recurring reports require someone to copy data between tools every week.',
]

const projectSteps = [
  {
    title: 'Map the current workflow',
    body: 'We start with the real handoffs: where a request arrives, who acts on it, the systems involved, and where it gets stuck.',
  },
  {
    title: 'Choose one useful first job',
    body: 'The first release should solve a specific, repeatable task. That gives everyone something concrete to review before more of the workflow changes.',
  },
  {
    title: 'Build in checks and handoffs',
    body: 'Automated work still needs clear ownership. We define what the system can handle, when it should ask for human input, and where the record lives.',
  },
  {
    title: 'Review it with the people using it',
    body: 'After launch, the workflow gets checked against actual day-to-day use. If it creates more exceptions than it removes, it needs another pass.',
  },
]

export default function AIAutomationChennaiPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0A0A0A] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(automationSchema) }}
      />
      <Navbar />

      <main>
        <section className="relative px-4 pb-20 pt-40 sm:px-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_-5%,rgba(139,92,246,0.2),transparent_70%)]" />
          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-5 font-mono text-xs tracking-[0.2em] text-violet-400 uppercase">
              Chennai AI automation
            </p>
            <h1 className="font-space-grotesk text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Put the repetitive parts of your workflow on a better path
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              AI automation works best when it starts with a real bottleneck, not a vague promise to automate everything. Earney helps Chennai businesses examine the work, choose a sensible first use case, and build around the tools their teams already use.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Discuss a workflow
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-white/30 hover:text-white"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </section>

        <section className="border-y border-white/7 px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl">
              <h2 className="font-space-grotesk text-3xl font-bold">Where automation usually earns its keep</h2>
              <p className="mt-4 leading-relaxed text-white/60">
                A workflow does not need to be flashy to be worth improving. The best candidates tend to be repeated often, easy to describe, and painful to chase manually.
              </p>
            </div>
            <ul className="mt-9 grid gap-4 md:grid-cols-2">
              {goodFits.map((fit) => (
                <li key={fit} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.02] p-5 text-white/75">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />
                  <span className="leading-relaxed">{fit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <p className="font-mono text-xs tracking-[0.2em] text-cyan-400 uppercase">How we approach it</p>
            <h2 className="mt-4 max-w-2xl font-space-grotesk text-3xl font-bold">Start with the workflow, then decide what technology belongs in it</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {projectSteps.map((step, index) => (
                <article key={step.title} className="rounded-2xl border border-white/8 bg-white/[0.02] p-7">
                  <p className="font-mono text-sm text-violet-400">0{index + 1}</p>
                  <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/60">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-24 sm:px-6">
          <div className="mx-auto max-w-4xl rounded-3xl border border-violet-400/20 bg-violet-500/5 px-7 py-12 text-center sm:px-12">
            <h2 className="font-space-grotesk text-3xl font-bold">Bring the messy version of the process</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/65">
              A short description of the task, the tools involved, and the point where the work slows down is enough to begin. We can work out whether automation is a good fit before proposing a build.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200">
              Talk to Earney about AI automation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
