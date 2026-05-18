import type { Metadata, Viewport } from "next"
import { Suspense } from "react"
import { Lexend_Deca, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Toaster } from "sonner"
import "./globals.css"
import Header from "@/components/blocks/header"
import JsonLd from "@/components/blocks/jsonld"
import SmoothScroll from "@/components/smooth-scroll"

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
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0F0F0F" },
    { media: "(prefers-color-scheme: light)", color: "#0F0F0F" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://media-house.studio"),
  applicationName: "MediaHouse",
  title: {
    default: "MediaHouse - Managed Sponsorship Brokerage for Gaming",
    template: "%s | MediaHouse",
  },
  description:
    "MediaHouse runs creator sponsorship campaigns for Minecraft and Roblox server owners. We handle sourcing, negotiation, and delivery from start to finish.",
  keywords: ["gaming sponsorship agency", "paid promotions for gaming creators", "Minecraft server promotion", "Roblox game advertising", "influencer marketing for games", "hire YouTubers for gaming"],
  robots: "index, follow",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "30ef55376bca769c",
    other: {
      "msvalidate.01": ["B44E14B70CE86E498D56B7E3E6260A34"],
    },
  },
  other: {
    "msvalidate.01": "B44E14B70CE86E498D56B7E3E6260A34",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/assets/MediaHouseLogo.png" },
    ],
  },
  openGraph: {
    title: "MediaHouse - Server Promotion That Actually Gets Done",
    description:
      "Connect with screened gaming creators. We handle negotiation, campaign structuring, and delivery for Minecraft and Roblox game owners.",
    type: "website",
    url: "https://media-house.studio",
    siteName: "MediaHouse",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "MediaHouse - Server Promotion That Actually Gets Done" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MediaHouse - Gaming Sponsorships",
    description:
      "Connect with screened gaming creators. We handle negotiation, campaign structuring, and delivery for Minecraft and Roblox game owners.",
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
        <SmoothScroll>
          <Suspense>
            <Header />
          </Suspense>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#1A1A1A",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
              },
            }}
          />
        </SmoothScroll>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
