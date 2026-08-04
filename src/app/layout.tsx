import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { SITE } from '@/lib/content'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Earney — AI Automation, Apps & Digital Growth Systems',
    template: '%s | Earney',
  },
  description:
    'Earney builds AI agents, automations, modern websites, apps, software, reels, and digital growth systems for ambitious businesses in Chennai and beyond.',
  keywords: [
    'AI automation',
    'AI agents',
    'website development',
    'app development',
    'digital marketing',
    'Chennai',
    'India',
  ],
  authors: [{ name: 'Earney', url: SITE.url }],
  creator: 'Earney',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.url,
    siteName: 'Earney',
    title: 'Earney — AI Automation, Apps & Digital Growth Systems',
    description:
      'Earney builds AI agents, automations, modern websites, apps, software, reels, and digital growth systems for ambitious businesses in Chennai and beyond.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earney — AI Automation, Apps & Digital Growth Systems',
    description:
      'Earney builds AI agents, automations, modern websites, apps, software, reels, and digital growth systems for ambitious businesses in Chennai and beyond.',
    creator: '@DigitalEar37032',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-[#0A0A0A] text-white`}
      >
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  )
}
