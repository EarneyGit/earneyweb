import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Earney',
  description: "Get in touch with Earney — we'd love to hear about your project and discuss how AI automation can transform your business.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
