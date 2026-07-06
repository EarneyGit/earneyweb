'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SITE } from '@/lib/content'

gsap.registerPlugin(ScrollTrigger)

export function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 48,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })

      // Stagger children
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          delay: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-28 md:py-40 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Gradient border top */}
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #8b5cf6 30%, #06b6d4 60%, #d946ef 80%, transparent 100%)',
        }}
      />

      {/* Gradient border bottom */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, #d946ef 20%, #8b5cf6 50%, #06b6d4 80%, transparent 100%)',
        }}
      />

      {/* Large radial purple glow centered */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          className="w-[800px] h-[600px] rounded-full blur-[160px] opacity-[0.12]"
          style={{
            background:
              'radial-gradient(ellipse at center, #8b5cf6 0%, #7c3aed 30%, #d946ef 60%, transparent 80%)',
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <div ref={contentRef} className="flex flex-col items-center gap-6">
          {/* Label */}
          <p className="font-mono text-sm text-violet-400 tracking-[0.2em] uppercase">
            // GET STARTED
          </p>

          {/* Heading */}
          <h2 className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            {"Let's build your next "}
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              digital growth system.
            </span>
          </h2>

          {/* Sub */}
          <p className="text-lg text-white/55 max-w-2xl leading-relaxed">
            From AI agents to full-stack apps — we design, build, and launch systems that make your business run better.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-200 hover:shadow-violet-600/40 hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #6d28d9 100%)',
              }}
            >
              Get a Quote
            </Link>

            <a
              href={SITE.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-10 py-4 text-base font-semibold text-white/80 border border-white/20 backdrop-blur-sm transition-all duration-200 hover:border-violet-500/50 hover:text-white hover:bg-white/5 hover:scale-[1.03] active:scale-[0.98]"
            >
              View Our Work
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Phone */}
          <div className="mt-2 flex items-center gap-3">
            <div className="h-px w-12 bg-white/15" />
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="font-mono text-sm text-white/40 hover:text-white/70 transition-colors tracking-wider"
            >
              {SITE.phone}
            </a>
            <div className="h-px w-12 bg-white/15" />
          </div>
        </div>
      </div>
    </section>
  )
}
