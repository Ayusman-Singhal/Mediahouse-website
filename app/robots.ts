import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/apply/creator/success', '/apply/server-owner/success'],
      },
      {
        userAgent: 'bingbot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: 'https://media-house.studio/sitemap.xml',
  }
}
