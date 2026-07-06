'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { HERO, SITE } from '@/lib/content'
import { ArrowRight, Phone } from 'lucide-react'
import gsap from 'gsap'

const TECH_TAGS = ['AI Agents', 'Websites', 'Mobile Apps', 'Software', 'Reels', 'Digital Marketing', 'No-Code Automation', 'AI SEO']

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo('.hero-eyebrow', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.3)
        .fromTo('.hero-h1', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 0.5)
        .fromTo('.hero-sub', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.75)
        .fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 }, 0.95)
        .fromTo('.hero-tag', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06 }, 1.2)
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-32 pb-20"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Radial glows */}
      <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-violet-600/8 blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyan-500/6 blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-violet-500/4 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[300px] rounded-full bg-fuchsia-500/5 blur-[80px] pointer-events-none" />

      {/* Gradient beam lines */}
      {[15, 35, 55, 75].map((pct) => (
        <div
          key={pct}
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{
            top: `${pct}%`,
            background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.08), rgba(6,182,212,0.06), transparent)',
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Eyebrow */}
        <div className="hero-eyebrow inline-flex items-center gap-2 mb-8">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-violet-400" />
          <span className="text-sm md:text-base text-white/70 font-medium tracking-wide">
            {HERO.eyebrow}
          </span>
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-violet-400" />
        </div>

        {/* H1 */}
        <h1 className="hero-h1 text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-space-grotesk leading-[1.06] tracking-tight mb-8">
          <span className="block text-white">AI Automation,</span>
          <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Apps & Digital
          </span>
          <span className="block text-white">Growth Systems</span>
        </h1>

        {/* Sub */}
        <p className="hero-sub text-lg md:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed mb-10">
          {HERO.sub}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <Link
            href={HERO.cta1.href}
            className="hero-cta relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white overflow-hidden group transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
            style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #8b5cf6 50%, #6d28d9 100%)' }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">{HERO.cta1.label}</span>
          </Link>

          <Link
            href={HERO.cta2.href}
            className="hero-cta inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-white/80 border border-white/15 hover:border-violet-500/50 hover:text-white hover:bg-violet-500/8 transition-all"
          >
            {HERO.cta2.label}
          </Link>

          <a
            href={HERO.cta3.href}
            className="hero-cta inline-flex items-center gap-2 text-base text-white/60 hover:text-violet-300 transition-colors font-medium group"
          >
            {HERO.cta3.label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {TECH_TAGS.map((tag) => (
            <div
              key={tag}
              className="hero-tag relative px-4 py-1.5 rounded-full text-xs font-medium text-white/60 border border-white/8 bg-white/3 hover:border-violet-500/30 hover:text-white/80 transition-all cursor-default"
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Phone */}
        <div className="mt-10">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center gap-2 text-sm text-white/35 hover:text-white/60 transition-colors font-jetbrains"
          >
            <Phone className="w-3.5 h-3.5" />
            {SITE.phone}
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
    </section>
  )
}
