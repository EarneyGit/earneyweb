import type { Metadata } from 'next'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SectionLabel } from '@/components/shared/SectionLabel'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Earney — how we collect, use, and protect your information.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Earney',
    description: 'Privacy Policy for Earney — how we collect, use, and protect your information.',
    url: 'https://www.earney.in/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#07000E] via-[#0D0618] to-[#07000E]" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionLabel id="PG.LEGAL" color="purple" className="mb-5">Legal</SectionLabel>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-sm font-mono">Last updated: 2026</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 divider-glow" />
        </section>

        <section className="py-16 bg-earney-surface">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 text-sm text-muted-foreground leading-relaxed">
              {[
                { title: '1. Information We Collect', body: 'We collect information you provide directly to us, such as when you fill out our contact form, subscribe to our newsletter, or communicate with us via email or phone. This may include your name, email address, phone number, and company details.' },
                { title: '2. How We Use Your Information', body: 'We use the information we collect to respond to your enquiries, provide our services, send communications you have requested, and improve our website and offerings. We do not sell your personal information to third parties.' },
                { title: '3. Data Security', body: 'We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.' },
                { title: '4. Cookies', body: 'Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences.' },
                { title: '5. Third-Party Services', body: 'We may use third-party services such as analytics providers. These providers have their own privacy policies governing the use of your information.' },
                { title: '6. Your Rights', body: 'You have the right to access, correct, or request deletion of your personal data, subject to applicable law. To exercise these rights, please contact us at hello@earney.in.' },
                { title: '7. Contact Us', body: 'For any privacy-related questions or concerns, please contact us at hello@earney.in or call +91 63814 93324.' },
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
