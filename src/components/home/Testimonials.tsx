'use client'

// NOTE: Testimonials are generic placeholders until real client names are confirmed.

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TESTIMONIALS } from '@/lib/content'

gsap.registerPlugin(ScrollTrigger)

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(headerRef.current, { opacity: 0, y: 36 })
      gsap.set('.testimonial-card', { opacity: 0, y: 40 })

      // Header reveal
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(headerRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            overwrite: 'auto',
          })
        },
      })

      // Cards stagger reveal
      ScrollTrigger.create({
        trigger: '.testimonial-grid',
        start: 'top 82%',
        onEnter: () => {
          gsap.to('.testimonial-card', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            overwrite: 'auto',
          })
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(217,70,239,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(217,70,239,0.4) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full blur-[130px] opacity-[0.08]"
        style={{ background: 'radial-gradient(ellipse, #d946ef 0%, #8b5cf6 60%, transparent 100%)' }}
      />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="mb-14 text-center">
          <p className="mb-4 font-mono text-sm text-fuchsia-400 tracking-[0.2em] uppercase">
            // CLIENT FEEDBACK
          </p>
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-white leading-tight">
            What our{' '}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              clients say
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 testimonial-grid">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="testimonial-card group relative rounded-2xl p-8 flex flex-col gap-6 transition-all duration-300 hover:border-fuchsia-500/30 hover:shadow-lg hover:shadow-fuchsia-500/5"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Gradient border glow on hover */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    index === 0
                      ? 'linear-gradient(135deg, rgba(139,92,246,0.06) 0%, transparent 60%)'
                      : index === 1
                      ? 'linear-gradient(135deg, rgba(6,182,212,0.06) 0%, transparent 60%)'
                      : 'linear-gradient(135deg, rgba(217,70,239,0.06) 0%, transparent 60%)',
                }}
              />

              {/* Large quote mark */}
              <span
                className="text-6xl font-serif leading-none select-none"
                style={{
                  background:
                    index === 0
                      ? 'linear-gradient(to right, #8b5cf6, #7c3aed)'
                      : index === 1
                      ? 'linear-gradient(to right, #06b6d4, #3b82f6)'
                      : 'linear-gradient(to right, #d946ef, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                aria-hidden
              >
                &ldquo;
              </span>

              {/* Quote */}
              <p className="text-white/80 text-base leading-relaxed italic flex-1">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="h-px bg-white/[0.06]" />

              {/* Author */}
              <div className="flex flex-col gap-0.5">
                <span className="text-white font-semibold text-sm font-space-grotesk">
                  {testimonial.author}
                </span>
                <span className="text-white/40 text-xs">
                  {testimonial.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
