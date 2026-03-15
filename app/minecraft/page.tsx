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
  title: "Minecraft - MediaHouse",
  description:
    "Managed sponsorship brokerage for Minecraft. We connect server operators with gaming creators for structured, performance-driven campaigns.",
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
