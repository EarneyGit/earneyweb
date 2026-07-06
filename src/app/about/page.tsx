import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { TIMELINE, SITE } from '@/lib/content'
import { MapPin, Zap, Target, Users, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Earney',
  description: "Earney started as a brand strategy and content studio in 2020. Today, we're a full-stack AI automation and digital growth agency.",
}

const VALUES = [
  { icon: Zap, title: 'Speed', desc: 'We move fast without cutting corners. From strategy to launch, we keep momentum.' },
  { icon: Target, title: 'Precision', desc: 'Every component is deliberate. We design and build with purpose and clarity.' },
  { icon: Users, title: 'Partnership', desc: "We're not a vendor. We're your digital growth partner — long-term thinking only." },
  { icon: Lightbulb, title: 'Innovation', desc: "We build with today's best tools and stay ahead so you don't have to." },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-20 flex flex-col items-center text-center px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-violet-400/80 uppercase">
            <span className="w-4 h-px bg-violet-400/50" />
            // OUR STORY
            <span className="w-4 h-px bg-violet-400/50" />
          </span>

          <h1 className="font-space-grotesk text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
            We Build Digital Systems that{' '}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Grow Businesses
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-3xl">
            Earney started as a brand strategy and content studio in 2020. Today, we&apos;re a full-stack AI automation and digital growth agency — building AI agents, websites, apps, software, reels, and performance marketing systems for ambitious businesses.
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full border border-white/10 bg-white/5 text-sm text-white/70">
            <MapPin className="w-4 h-4 text-violet-400" />
            Kolapakkam, Chennai, India
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      {/* VALUES */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((val) => {
              const Icon = val.icon
              return (
                <div key={val.title} className="glass-card p-8 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-violet-400" />
                  </div>
                  <h3 className="font-space-grotesk text-xl font-semibold text-white mb-3">
                    {val.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gradient separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* TIMELINE */}
      <section className="relative py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-cyan-400/70 uppercase mb-4">
              <span className="w-4 h-px bg-cyan-400/40" />
              // OUR JOURNEY
              <span className="w-4 h-px bg-cyan-400/40" />
            </span>
            <h2 className="font-space-grotesk text-3xl sm:text-4xl font-bold">
              Five Years of{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Building
              </span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 via-fuchsia-400 to-transparent" />

            <div className="space-y-12">
              {TIMELINE.map((entry, i) => (
                <div key={entry.year} className="relative flex gap-8 md:gap-12">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="relative z-10 w-4 h-4 mt-1 rounded-full bg-violet-500 ring-4 ring-violet-500/20 shrink-0" 
                         style={{ background: entry.gradient.includes('amber') ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : 
                                             entry.gradient.includes('emerald') ? 'linear-gradient(135deg, #10b981, #06b6d4)' :
                                             entry.gradient.includes('pink') ? 'linear-gradient(135deg, #ec4899, #f97316)' :
                                             entry.gradient.includes('cyan') ? 'linear-gradient(135deg, #06b6d4, #6366f1)' :
                                             'linear-gradient(135deg, #8b5cf6, #d946ef)' }} />
                  </div>

                  <div className="pb-4 flex-1 -mt-1">
                    <div className="text-5xl md:text-6xl font-bold font-space-grotesk mb-3 leading-none"
                         style={{ background: entry.gradient.includes('amber') ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : 
                                             entry.gradient.includes('emerald') ? 'linear-gradient(135deg, #10b981, #06b6d4)' :
                                             entry.gradient.includes('pink') ? 'linear-gradient(135deg, #ec4899, #f97316)' :
                                             entry.gradient.includes('cyan') ? 'linear-gradient(135deg, #06b6d4, #6366f1)' :
                                             'linear-gradient(135deg, #8b5cf6, #d946ef)',
                                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                      {entry.year}
                    </div>

                    <div className="glass-card rounded-2xl p-6">
                      <h3 className="text-lg font-semibold font-space-grotesk text-white mb-2">{entry.title}</h3>
                      <p className="text-sm text-white/55 leading-relaxed mb-5">{entry.desc}</p>

                      <div className="grid grid-cols-2 gap-2">
                        {entry.tags.map(tag => (
                          <div key={tag} className="rounded-lg px-3 py-2 text-xs font-medium text-white/60 border border-white/6 bg-white/3 flex items-center justify-center text-center"
                               style={{ background: `radial-gradient(ellipse at center, ${entry.gradient.split(' ')[1]?.replace('from-', '').replace('/20', '')}08, transparent)` }}>
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FIND US / CTA */}
      <section className="relative py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-violet-400/80 uppercase mb-4">
            <span className="w-4 h-px bg-violet-400/50" />
            // FIND US
            <span className="w-4 h-px bg-violet-400/50" />
          </span>
          <h2 className="font-space-grotesk text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Based in Chennai. Working across{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              India.
            </span>
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            We work with businesses of all sizes — from local startups in Chennai to companies across India and beyond. Ready to start your project?
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-full px-10 py-4 font-semibold text-base shadow-lg shadow-violet-900/40 hover:shadow-violet-700/50 transition-all duration-300">
            Let&apos;s Talk
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
