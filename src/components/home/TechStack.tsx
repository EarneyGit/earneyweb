'use client'

import { useEffect, useRef } from 'react'
import { TECH_STACK } from '@/lib/content'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: '#8b5cf6',
  Backend: '#06b6d4',
  AI: '#d946ef',
  Automation: '#f59e0b',
  Cloud: '#10b981',
  Database: '#3b82f6',
}

export function TechStack() {
  const sectionRef = useRef<HTMLElement>(null)

  const categories = [...new Set(TECH_STACK.map((t) => t.category))]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tech-group',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-[#080810] overflow-hidden">
      <div className="absolute inset-0 grid-bg-fine opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-violet-600/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">// TECH STACK</p>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-4">
            Built with the best{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              tools
            </span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Modern, proven technologies that deliver performance, scalability, and security.
          </p>
        </div>

        {/* Dashboard panel */}
        <div className="relative rounded-2xl border border-white/6 bg-white/2 overflow-hidden">
          {/* Panel header */}
          <div className="flex items-center gap-2 px-6 py-3 border-b border-white/5 bg-white/2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            <span className="ml-4 text-xs font-jetbrains text-white/30">earney.tech-stack.config</span>
          </div>

          {/* Tech grid */}
          <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => {
              const techs = TECH_STACK.filter((t) => t.category === cat)
              const color = CATEGORY_COLORS[cat] ?? '#8b5cf6'
              return (
                <div key={cat} className="tech-group space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 rounded-full" style={{ background: color }} />
                    <span
                      className="text-xs font-jetbrains uppercase tracking-widest"
                      style={{ color }}
                    >
                      {cat}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-white/70 border border-white/8 bg-white/3 hover:text-white transition-colors cursor-default"
                        style={{
                          borderColor: `${color}20`,
                        }}
                        onMouseEnter={(e) => {
                          ;(e.currentTarget as HTMLElement).style.borderColor = `${color}50`
                          ;(e.currentTarget as HTMLElement).style.color = 'white'
                          ;(e.currentTarget as HTMLElement).style.background = `${color}10`
                        }}
                        onMouseLeave={(e) => {
                          ;(e.currentTarget as HTMLElement).style.borderColor = `${color}20`
                          ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.7)'
                          ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'
                        }}
                      >
                        {tech.name}
                      </span>
                    ))}
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
