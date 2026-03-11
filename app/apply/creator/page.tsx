import type { Metadata } from "next"
import CreatorForm from "@/components/forms/creator-form"

export const metadata: Metadata = {
  title: "Apply as Creator - MediaHouse",
  description:
    "Apply for creator representation with MediaHouse. We handle negotiation, campaign structuring, and business communication so you can focus on creating.",
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
