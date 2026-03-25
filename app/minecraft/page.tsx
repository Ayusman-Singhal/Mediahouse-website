import type { Metadata } from "next"
import dynamic from "next/dynamic"
import HeroBridge from "@/components/blocks/minecraft/hero-bridge"
import Footer from "@/components/blocks/footer"

const AuthoritySection = dynamic(() => import("@/components/blocks/minecraft/authority-section"), { ssr: true })
const ForServerOwners = dynamic(() => import("@/components/blocks/minecraft/for-server-owners"), { ssr: true })
const ForCreators = dynamic(() => import("@/components/blocks/minecraft/for-creators"), { ssr: true })
const CampaignProcess = dynamic(() => import("@/components/blocks/minecraft/campaign-process"), { ssr: true })
const CaseStudies = dynamic(() => import("@/components/blocks/minecraft/case-studies"), { ssr: true })
const WhyMediaHouse = dynamic(() => import("@/components/blocks/minecraft/why-mediahouse"), { ssr: true })
const FinalCTA = dynamic(() => import("@/components/blocks/minecraft/final-cta"), { ssr: true })

export const metadata: Metadata = {
  title: "Minecraft Server Promotion & Sponsorship Agency",
  description:
    "Promote your Minecraft server with top gaming creators. MediaHouse creates awareness-driven campaigns and structured sponsorships to grow your community.",
  openGraph: {
    title: "Minecraft Server Promotion Agency | MediaHouse",
    description: "Promote your Minecraft server with top gaming creators. Awareness-driven campaigns to grow your community.",
    url: "https://media-house.studio/minecraft",
  },
  twitter: {
    card: "summary_large_image",
    title: "Minecraft Server Promotion Agency | MediaHouse",
    description: "Promote your Minecraft server with top gaming creators. Performance-driven campaigns to grow your community.",
  },
  alternates: {
    canonical: "https://media-house.studio/minecraft",
  },
  keywords: ["Minecraft server promotion", "Minecraft YouTuber sponsorship", "how to promote Minecraft server", "paid Minecraft creator campaigns", "Minecraft influencer marketing", "hire YouTubers for Minecraft"],
}

export default function MinecraftPage() {
  return (
    <main>
      <HeroBridge />
      <AuthoritySection />
      <ForServerOwners />
      <ForCreators />
      <CampaignProcess />
      <CaseStudies />
      <WhyMediaHouse />
      <FinalCTA />
      <Footer />
    </main>
  )
}
