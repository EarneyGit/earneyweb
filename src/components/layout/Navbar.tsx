'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, SITE } from '@/lib/content'
import { buttonVariants } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import gsap from 'gsap'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const pillRef = useRef<HTMLDivElement>(null)

  // GSAP entrance: slide down from -100px on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        pillRef.current,
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.15,
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* Fixed header wrapper */}
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8">
        {/* Pill container */}
        <div
          ref={pillRef}
          className="max-w-6xl mx-auto bg-black/40 backdrop-blur-xl border border-white/5 rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-between opacity-0"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 group">
            <Image src="/logo-white.png" alt="Earney Logo" width={180} height={60} className="w-auto h-9 object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]" priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = !('external' in link && link.external) && pathname === link.href
              if ('external' in link && link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-violet-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </a>
                )
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium transition-colors duration-200 group',
                    isActive ? 'text-white' : 'text-white/70 hover:text-white'
                  )}
                >
                  {link.label}
                  {/* Active indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full" />
                  )}
                  {/* Hover underline */}
                  {!isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-violet-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0 rounded-full px-6 py-2.5 text-sm font-semibold shadow-lg shadow-violet-900/30 hover:shadow-violet-700/40 transition-all duration-300'
              )}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-full text-white/70 hover:text-white hover:bg-white/5 transition-colors duration-200"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Sheet — fully controlled, no asChild */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-80 bg-[#0d0d14] border-l border-white/5 p-0"
          showCloseButton={false}
        >
          <div className="flex flex-col h-full">
            {/* Sheet Header */}
            <div className="flex items-center justify-end px-6 py-5 border-b border-white/5">
              {/* Close button — direct setOpen, no asChild */}
              <button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-8 h-8 rounded-full text-white/50 hover:text-white hover:bg-white/5 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile Links */}
            <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
              {NAV_LINKS.map((link) => {
                const isActive = !('external' in link && link.external) && pathname === link.href
                if ('external' in link && link.external) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center px-4 py-3 rounded-xl text-sm font-medium text-white/60 hover:text-white hover:bg-white/5 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200',
                      isActive
                        ? 'bg-violet-500/10 text-violet-300 border border-violet-500/20'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Mobile Sheet Footer */}
            <div className="px-6 py-6 border-t border-white/5 flex flex-col gap-4">
              {/* Phone */}
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="text-sm text-white/40 hover:text-white/70 transition-colors font-mono tracking-wide"
              >
                {SITE.phone}
              </a>
              {/* CTA */}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants({ variant: 'default' }),
                  'w-full justify-center bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white border-0 rounded-full font-semibold py-2.5'
                )}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
