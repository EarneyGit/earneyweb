import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/content'

const PUBLIC_ROUTES = [
  '',
  '/about',
  '/blogs',
  '/contact',
  '/services',
  '/privacy-policy',
  '/terms',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}