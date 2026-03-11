import type { Metadata } from "next"
import RobloxContent from "@/components/blocks/roblox/roblox-content"
import Footer from "@/components/blocks/footer"

export const metadata: Metadata = {
  title: "Roblox - MediaHouse",
  description:
    "Managed sponsorship brokerage for Roblox. We connect game owners with Roblox creators for structured, performance-driven campaigns.",
}

export default function RobloxPage() {
  return (
    <main>
      <RobloxContent />
      <Footer />
    </main>
  )
}
