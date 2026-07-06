'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SITE, SOCIAL } from '@/lib/content'
import { FacebookIcon, LinkedInIcon, InstagramIcon, XIcon } from '@/components/shared/SocialIcons'
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react'

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  'twitter-x': XIcon,
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />

      <section className="relative pt-40 pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-violet-400/80 uppercase mb-4">
              <span className="w-4 h-px bg-violet-400/50" />
              // CONTACT
              <span className="w-4 h-px bg-violet-400/50" />
            </span>
            <h1 className="font-space-grotesk text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Let&apos;s Build Something{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Together
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Tell us about your project. We read every message and typically reply within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Contact Form */}
            <div className="bg-white/2 border border-white/6 rounded-2xl p-8 backdrop-blur-2xl">
              {submitted ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-space-grotesk font-bold">Message Sent!</h3>
                  <p className="text-white/60">We&apos;ll be in touch within 24 hours.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full border border-white/10 text-sm hover:bg-white/5 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs text-white/50 uppercase tracking-wider font-mono">Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full bg-white/4 border border-white/8 text-white placeholder-white/30 focus:border-violet-500/50 rounded-xl px-4 py-3 outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-white/50 uppercase tracking-wider font-mono">Email</label>
                      <input required type="email" placeholder="john@company.com" className="w-full bg-white/4 border border-white/8 text-white placeholder-white/30 focus:border-violet-500/50 rounded-xl px-4 py-3 outline-none transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-white/50 uppercase tracking-wider font-mono">Phone (Optional)</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-white/4 border border-white/8 text-white placeholder-white/30 focus:border-violet-500/50 rounded-xl px-4 py-3 outline-none transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-white/50 uppercase tracking-wider font-mono">Service Interest</label>
                    <select className="w-full bg-white/4 border border-white/8 text-white focus:border-violet-500/50 rounded-xl px-4 py-3 outline-none transition-colors appearance-none cursor-pointer">
                      <option value="ai-agents" className="bg-[#0A0A0A]">AI Agents & Automation</option>
                      <option value="web" className="bg-[#0A0A0A]">Website Development</option>
                      <option value="app" className="bg-[#0A0A0A]">App Development</option>
                      <option value="software" className="bg-[#0A0A0A]">Software Development</option>
                      <option value="marketing" className="bg-[#0A0A0A]">Digital Marketing</option>
                      <option value="reels" className="bg-[#0A0A0A]">Reels & Content</option>
                      <option value="seo" className="bg-[#0A0A0A]">AI SEO</option>
                      <option value="nocode" className="bg-[#0A0A0A]">No-Code Automation</option>
                      <option value="other" className="bg-[#0A0A0A]">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs text-white/50 uppercase tracking-wider font-mono">Message</label>
                    <textarea required rows={5} placeholder="Tell us about your goals..." className="w-full bg-white/4 border border-white/8 text-white placeholder-white/30 focus:border-violet-500/50 rounded-xl px-4 py-3 outline-none transition-colors resize-none" />
                  </div>

                  <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-full px-8 py-4 font-semibold shadow-lg shadow-violet-900/40 hover:shadow-violet-700/50 transition-all">
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Right: Info */}
            <div className="flex flex-col justify-center space-y-10">
              <div className="space-y-6">
                <a href={`tel:${SITE.phoneRaw}`} className="group flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-violet-500/20 group-hover:border-violet-500/30 transition-all">
                    <Phone className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-wider font-mono mb-1">Phone</p>
                    <p className="text-xl font-medium text-white group-hover:text-violet-300 transition-colors font-jetbrains">{SITE.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${SITE.email}`} className="group flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-all">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-wider font-mono mb-1">Email</p>
                    <p className="text-xl font-medium text-white group-hover:text-cyan-300 transition-colors">{SITE.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-fuchsia-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-wider font-mono mb-1">Office</p>
                    <p className="text-xl font-medium text-white">{SITE.address}</p>
                    <p className="text-sm text-white/50 mt-1">Monday - Saturday, 9 AM - 7 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <h3 className="text-sm font-space-grotesk font-semibold mb-4">Connect with us</h3>
                <div className="flex items-center gap-3">
                  {SOCIAL.map((s) => {
                    const Icon = SOCIAL_ICONS[s.icon] ?? XIcon
                    return (
                      <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-violet-500/20 hover:border-violet-500/30 transition-all">
                        <Icon className="w-4 h-4" />
                      </a>
                    )
                  })}
                </div>
              </div>

              <div className="pt-4">
                <a href={SITE.portfolioUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 font-medium group">
                  View Our Work Portfolio
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
