import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/home/Hero'
import { ExpertiseBento } from '@/components/home/ExpertiseBento'
import { AIAgentsSection } from '@/components/home/AIAgentsSection'
import { StoryTimeline } from '@/components/home/StoryTimeline'
import { TechStack } from '@/components/home/TechStack'
import { Testimonials } from '@/components/home/Testimonials'
import { ContactCTA } from '@/components/home/ContactCTA'

export const metadata: Metadata = {
  title: 'Earney — AI Automation, Apps & Digital Growth Systems',
  description:
    "We're not watching the future. We're building it. Earney builds AI agents, automations, modern websites, apps, software, reels, and digital growth systems for ambitious businesses.",
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ExpertiseBento />
        <AIAgentsSection />
        <StoryTimeline />
        <TechStack />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
