import Link from 'next/link'
import Image from 'next/image'
import { SITE, SOCIAL, FOOTER_LINKS } from '@/lib/content'
import {
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
  XIcon,
} from '@/components/shared/SocialIcons'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { MapPin, Mail, Phone } from 'lucide-react'

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  facebook: FacebookIcon,
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  'twitter-x': XIcon,
}

// Separate quick nav links (first 6) from legal links (last 2)
const QUICK_LINKS = FOOTER_LINKS.slice(0, 6)
const LEGAL_LINKS = FOOTER_LINKS.slice(6)

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.4) 40%, rgba(6,182,212,0.3) 60%, transparent 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)',
        }}
      />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* ── Col 1: Brand + Social + Address ── */}
          <div className="flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <Image src="/logo-white.png" alt="Earney Logo" width={200} height={64} className="w-auto h-11 object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
            </Link>

            {/* Tagline */}
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              {SITE.tagline}. We build AI agents, automations, apps, and digital
              growth systems for ambitious businesses.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {SOCIAL.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon] ?? XIcon
                return (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/40 hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>

            {/* Address */}
            <div className="flex items-start gap-2.5 text-sm text-white/40">
              <MapPin className="w-4 h-4 text-violet-400/60 mt-0.5 shrink-0" />
              <span>{SITE.address}</span>
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-white/30">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => {
                if ('external' in link && link.external) {
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_self"
                        className="text-sm text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-violet-500/50 group-hover:bg-violet-400 transition-colors duration-200 shrink-0" />
                        {link.label}
                      </a>
                    </li>
                  )
                }
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-violet-500/50 group-hover:bg-violet-400 transition-colors duration-200 shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* ── Col 3: Contact Info + CTA ── */}
          <div className="flex flex-col gap-5">
            <h3 className="text-xs font-mono uppercase tracking-[0.15em] text-white/30">
              Get in Touch
            </h3>

            {/* Contact Details */}
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-200 group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-all duration-200">
                  <Phone className="w-3.5 h-3.5 text-violet-400/70" />
                </span>
                <span className="font-mono text-xs tracking-wide">{SITE.phone}</span>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors duration-200 group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-all duration-200">
                  <Mail className="w-3.5 h-3.5 text-violet-400/70" />
                </span>
                <span>{SITE.email}</span>
              </a>
            </div>

            {/* Glassmorphism CTA Card */}
            <div
              className="mt-2 p-5 rounded-2xl flex flex-col gap-4"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <p className="text-sm text-white/60 leading-relaxed">
                Ready to automate, build, and grow? Let&apos;s talk.
              </p>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'w-full justify-center bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0 rounded-full px-8 py-3 font-semibold text-sm shadow-lg shadow-violet-900/30 hover:shadow-violet-700/40 transition-all duration-300'
                )}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.05)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25 font-mono">{SITE.copyright}</p>
          <div className="flex items-center gap-5">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/30 hover:text-white/70 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
