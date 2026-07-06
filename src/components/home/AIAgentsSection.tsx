'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { AI_AGENT_USECASES } from '@/lib/content'
import { Users, MessageCircle, Calendar, Workflow, BarChart2, MessageSquare } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ICON_MAP: Record<string, React.ElementType> = {
  users: Users,
  'message-circle': MessageCircle,
  calendar: Calendar,
  workflow: Workflow,
  'bar-chart-2': BarChart2,
  'message-square': MessageSquare,
}

export function AIAgentsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ai-left',
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
      )
      gsap.fromTo(
        '.ai-card',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.09, ease: 'power2.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden" style={{ background: '#080810' }}>
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="ai-left space-y-8">
            <div>
              <p className="section-label mb-4">// AI AUTOMATION</p>
              <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white leading-tight mb-6">
                Build AI Agents that{' '}
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  run your business
                </span>
              </h2>
              <p className="text-white/55 leading-relaxed text-lg">
                Earney designs and deploys intelligent AI agents that handle the repetitive, time-consuming work — so your team can focus on what actually matters. Our agents run 24/7, learn from interactions, and integrate with your existing tools.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-3">
              {[
                { value: '24/7', label: 'Always-on automation' },
                { value: 'Zero', label: 'Manual follow-up' },
                { value: '∞', label: 'Scalable capacity' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl border border-white/8 bg-white/3"
                >
                  <span className="text-xl font-bold font-space-grotesk bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/45">{stat.label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-violet-200 transition-colors group"
            >
              Explore AI Services
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Right — use-case cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {AI_AGENT_USECASES.map((usecase) => {
              const Icon = ICON_MAP[usecase.icon] ?? Users
              return (
                <div
                  key={usecase.label}
                  className="ai-card group relative p-5 rounded-xl border border-white/6 bg-white/2 hover:border-violet-500/30 hover:bg-violet-500/4 transition-all duration-300 overflow-hidden"
                >
                  {/* Left accent */}
                  <div className="absolute left-0 top-4 bottom-4 w-px bg-transparent group-hover:bg-gradient-to-b group-hover:from-violet-500 group-hover:to-cyan-500 transition-all duration-300" />

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-violet-500/10 border border-violet-500/20">
                      <Icon className="w-4 h-4 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">{usecase.label}</p>
                      <p className="text-xs text-white/45 leading-relaxed">{usecase.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
