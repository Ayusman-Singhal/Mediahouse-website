import type { Metadata, Viewport } from "next"
import { Lexend_Deca, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import Header from "@/components/blocks/header"
import JsonLd from "@/components/blocks/jsonld"

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend-deca",
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL("https://media-house.studio"),
  title: {
    default: "MediaHouse - Managed Sponsorship Brokerage for Gaming",
    template: "%s | MediaHouse",
  },
  description:
    "MediaHouse connects growth-focused server operators with performance-driven gaming creators. The premier gaming sponsorship agency for Minecraft and Roblox.",
  keywords: ["gaming sponsorship agency", "paid promotions for gaming creators", "Minecraft server promotion", "Roblox game advertising", "influencer marketing for games", "hire YouTubers for gaming"],
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "30ef55376bca769c",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MediaHouse - Gaming Sponsorships, Managed Professionally",
    description:
      "Connect with vetted gaming creators. We handle negotiation, campaign structuring, and delivery for Minecraft and Roblox game owners.",
    type: "website",
    url: "https://media-house.studio",
    siteName: "MediaHouse",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "MediaHouse - Gaming Sponsorships, Managed Professionally" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MediaHouse - Gaming Sponsorships",
    description:
      "Connect with vetted gaming creators. We handle negotiation, campaign structuring, and delivery for Minecraft and Roblox game owners.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${lexendDeca.variable} ${outfit.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Vend+Sans:ital,wght@0,300..700;1,300..700&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body>
        <Header />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
