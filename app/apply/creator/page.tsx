import type { Metadata } from "next"
import CreatorForm from "@/components/forms/creator-form"

export const metadata: Metadata = {
  title: "Get Paid Gaming Sponsorships | Apply as a Creator",
  description:
    "Get paid promotions for your YouTube or Twitch channel. Apply for creator representation with MediaHouse to get high-paying Minecraft and Roblox sponsorships.",
  openGraph: {
    title: "Get Paid Gaming Sponsorships | MediaHouse Creators",
    description: "Get paid promotions for your channel. Apply for representation to get high-paying Minecraft and Roblox sponsorships.",
    url: "https://media-house.studio/apply/creator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Paid Gaming Sponsorships | MediaHouse Creators",
    description: "Get paid promotions for your channel. Apply for representation to get high-paying Minecraft and Roblox sponsorships.",
  },
  alternates: {
    canonical: "https://media-house.studio/apply/creator",
  },
  keywords: ["apply for gaming sponsorships", "creator sponsorship application", "get paid gaming promotions", "YouTuber sponsorship opportunities"],
}

export default function CreatorPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white pt-24 sm:pt-28 md:pt-30 pb-16 sm:pb-20 px-6 flex justify-center">
      <div className="w-full max-w-[640px]">
        <div className="mb-8 sm:mb-12">
          <h1 className="font-heading text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-white mb-4 leading-tight">
            Creator Representation Application
          </h1>
          <p className="text-base text-[#B0B0B0] leading-relaxed">
            Apply to join MediaHouse&apos;s creator roster. We handle sponsorship negotiation,
            rate protection, and campaign delivery so you can focus on what you do best - creating.
          </p>
        </div>
        <CreatorForm />
      </div>
    </main>
  )
}
