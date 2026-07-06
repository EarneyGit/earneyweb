'use client'

import { useEffect, useRef } from 'react'
import { TIMELINE } from '@/lib/content'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function StoryTimeline() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.timeline-entry',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )
      // Animate the timeline line height
      gsap.fromTo(
        '.timeline-line-inner',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: 'power2.inOut',
          transformOrigin: 'top',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-[#0A0A0A] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="section-label mb-4">// OUR JOURNEY</p>
          <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk text-white mb-4">
            From Startup to{' '}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              AI Innovation Studio
            </span>
          </h2>
          <p className="text-white/50 text-lg">Five years. Constant evolution. Always building.</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px overflow-hidden">
            <div className="timeline-line-inner w-full h-full bg-gradient-to-b from-violet-500 via-cyan-500 via-fuchsia-400 to-transparent" />
          </div>

          <div className="space-y-12">
            {TIMELINE.map((entry, i) => (
              <div key={entry.year} className="timeline-entry relative flex gap-8 md:gap-12">
                {/* Dot + Year */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="relative z-10 w-4 h-4 mt-1 rounded-full bg-violet-500 ring-4 ring-violet-500/20 shrink-0"
                    style={{
                      background: i === 4 ? 'linear-gradient(135deg, #f59e0b, #ef4444)' :
                        i === 3 ? 'linear-gradient(135deg, #10b981, #06b6d4)' :
                        i === 2 ? 'linear-gradient(135deg, #ec4899, #f97316)' :
                        i === 1 ? 'linear-gradient(135deg, #06b6d4, #6366f1)' :
                        'linear-gradient(135deg, #8b5cf6, #d946ef)',
                    }}
                  />
                </div>

                {/* Content */}
                <div className="pb-4 flex-1 -mt-1">
                  {/* Year */}
                  <div
                    className="text-5xl md:text-6xl font-bold font-space-grotesk mb-3 leading-none"
                    style={{
                      background: i === 4 ? 'linear-gradient(135deg, #f59e0b, #ef4444)' :
                        i === 3 ? 'linear-gradient(135deg, #10b981, #06b6d4)' :
                        i === 2 ? 'linear-gradient(135deg, #ec4899, #f97316)' :
                        i === 1 ? 'linear-gradient(135deg, #06b6d4, #6366f1)' :
                        'linear-gradient(135deg, #8b5cf6, #d946ef)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {entry.year}
                  </div>

                  {/* Card */}
                  <div className="glass-card rounded-2xl p-6">
                    <h3 className="text-lg font-semibold font-space-grotesk text-white mb-2">
                      {entry.title}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed mb-5">
                      {entry.desc}
                    </p>

                    {/* Tag grid */}
                    <div className="grid grid-cols-2 gap-2">
                      {entry.tags.map((tag) => (
                        <div
                          key={tag}
                          className="rounded-lg px-3 py-2 text-xs font-medium text-white/60 border border-white/6 bg-white/3 flex items-center justify-center text-center"
                          style={{
                            background: `radial-gradient(ellipse at center, ${entry.gradient.split(' ')[1]?.replace('from-', '').replace('/20', '')}08, transparent)`,
                          }}
                        >
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
  )
}
