import type { Metadata, Viewport } from "next"
import { Lexend_Deca, Outfit } from "next/font/google"
import "./globals.css"
import Header from "@/components/blocks/header"

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
  metadataBase: new URL("https://mediahouse.gg"),
  title: "MediaHouse - Managed Sponsorship Brokerage",
  description:
    "MediaHouse connects growth-focused server operators with performance-driven gaming creators. Structured sponsorships, managed negotiation, and professional campaign delivery.",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "MediaHouse - Managed Sponsorship Brokerage",
    description:
      "MediaHouse connects growth-focused server operators with performance-driven gaming creators. Structured sponsorships, managed negotiation, and professional campaign delivery.",
    type: "website",
    url: "https://mediahouse.gg",
    siteName: "MediaHouse",
  },
  twitter: {
    card: "summary_large_image",
    title: "MediaHouse - Managed Sponsorship Brokerage",
    description:
      "MediaHouse connects growth-focused server operators with performance-driven gaming creators. Structured sponsorships, managed negotiation, and professional campaign delivery.",
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
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
