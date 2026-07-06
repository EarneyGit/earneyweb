'use client'

import { useEffect, useRef } from 'react'
import { SERVICES } from '@/lib/content'
import { Bot, Globe, Smartphone, Code2, TrendingUp, Video, Search, Zap } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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

export function ExpertiseBento() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.bento-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">// OUR EXPERTISE</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-white mb-6">
            Everything Your Business
            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Needs to Grow
            </span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            From AI automation to reels — we cover the full stack of modern digital growth.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] ?? Bot
            // Make first card span 2 columns on large screens
            const isWide = i === 0
            return (
              <div
                key={service.id}
                className={`bento-card relative group rounded-2xl p-6 glass-card overflow-hidden ${isWide ? 'lg:col-span-1' : ''}`}
                style={{ minHeight: '220px' }}
              >
                {/* Gradient glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${service.color}10, transparent 60%)`,
                  }}
                />

                {/* Icon */}
                <div
                  className="relative w-10 h-10 rounded-xl flex items-center justify-center mb-4 shrink-0"
                  style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
                >
                  <Icon className="w-5 h-5" style={{ color: service.color }} />
                </div>

                {/* Content */}
                <div className="relative space-y-2">
                  <h3 className="text-base font-semibold font-space-grotesk text-white leading-snug">
                    {service.name}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Tags */}
                <div className="relative flex flex-wrap gap-1.5 mt-4">
                  {service.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white/50 border border-white/8 bg-white/3"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom gradient accent line */}
                <div
                  className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
