import type { Metadata } from "next"
import dynamic from "next/dynamic"
import RobloxHero from "@/components/blocks/roblox/roblox-hero"
import Footer from "@/components/blocks/footer"

const AuthoritySection = dynamic(() => import("@/components/blocks/roblox/authority-section"), { ssr: true })
const ForServerOwners = dynamic(() => import("@/components/blocks/roblox/for-server-owners"), { ssr: true })
const ForCreators = dynamic(() => import("@/components/blocks/roblox/for-creators"), { ssr: true })
const CampaignProcess = dynamic(() => import("@/components/blocks/roblox/campaign-process"), { ssr: true })
const FinalCTA = dynamic(() => import("@/components/blocks/roblox/final-cta"), { ssr: true })

export const metadata: Metadata = {
  title: "Roblox - MediaHouse",
  description:
    "Managed sponsorship brokerage for Roblox. We connect game owners with gaming creators for structured, performance-driven campaigns.",
}

export default function RobloxPage() {
  return (
    <main>
      <RobloxHero />
      <AuthoritySection />
      <ForServerOwners />
      <ForCreators />
      <CampaignProcess />
      <FinalCTA />
      <Footer />
    </main>
  )
}
