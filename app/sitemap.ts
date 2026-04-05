import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://media-house.studio"
  // Using a static date to avoid changing dates on every build, which is bad for SEO
  // Update this date when content changes significantly
  const lastModDate = new Date("2026-04-01")

  return [
    {
      url: `${baseUrl}/`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/minecraft`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/roblox`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/apply/creator`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/apply/server-owner`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/for-creators`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/for-server-owners`,
      lastModified: lastModDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    }
  ]
}
