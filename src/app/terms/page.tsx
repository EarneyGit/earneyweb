import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SectionLabel } from '@/components/shared/SectionLabel'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for the Earney website and services.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Use | Earney',
    description: 'Terms of Use for the Earney website and services.',
    url: 'https://www.earney.in/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#07000E] via-[#0D0618] to-[#07000E]" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionLabel id="PG.LEGAL" color="blue" className="mb-5">Legal</SectionLabel>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Terms of Use
            </h1>
            <p className="text-muted-foreground text-sm font-mono">Last updated: 2026</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 divider-glow" />
        </section>

        <section className="py-16 bg-earney-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 text-sm text-muted-foreground leading-relaxed">
              {[
                { title: '1. Acceptance of Terms', body: 'By accessing or using the Earney website and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.' },
                { title: '2. Use of Website', body: 'You may use our website for lawful purposes only. You agree not to use our website in any way that could damage, disable, or impair the site or interfere with other users\' enjoyment of the site.' },
                { title: '3. Intellectual Property', body: 'All content on this website, including text, graphics, logos, and images, is the property of Earney or its content suppliers and is protected by applicable intellectual property laws.' },
                { title: '4. Services', body: 'Earney provides AI automation and development services as described on our website. The specific terms of any services engagement will be governed by separate agreements between Earney and the client.' },
                { title: '5. Limitation of Liability', body: 'To the fullest extent permitted by law, Earney shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the website.' },
                { title: '6. Changes to Terms', body: 'We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the revised terms.' },
                { title: '7. Contact', body: 'If you have any questions about these Terms of Use, please contact us at hello@earney.in or call +91 99418 75131.' },
              ].map(({ title, body }) => (
                <div key={title} className="flex flex-col gap-3 pb-6 border-b border-border last:border-0">
                  <h2 className="text-base font-semibold text-foreground" style={{ fontFamily: 'var(--font-space-grotesk)' }}>{title}</h2>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
