import type { Metadata } from "next"
import dynamic from "next/dynamic"
import RobloxHeroV2 from "@/components/blocks/roblox-v2/roblox-hero-v2"
import Footer from "@/components/blocks/footer"


const ServerOwnersSection = dynamic(() => import("@/components/blocks/roblox-v2/server-owners-section"), { ssr: true })
const CreatorsSection = dynamic(() => import("@/components/blocks/roblox-v2/creators-section"), { ssr: true })
const ProcessTimeline = dynamic(() => import("@/components/blocks/roblox-v2/process-timeline"), { ssr: true })
const FinalCTAV2 = dynamic(() => import("@/components/blocks/roblox-v2/final-cta-v2"), { ssr: true })

export const metadata: Metadata = {
  title: "Roblox - MediaHouse",
  description:
    "Managed sponsorship brokerage for Roblox. We connect game owners with gaming creators for structured, performance-driven campaigns.",
}

export default function RobloxPage() {
  return (
    <main className="bg-[#0F0F0F] text-white overflow-hidden selection:bg-[#FF6B35]/30">
      <RobloxHeroV2 />

      <ServerOwnersSection />
      <CreatorsSection />
      <ProcessTimeline />
      <FinalCTAV2 />
      <Footer />
    </main>
  )
}
