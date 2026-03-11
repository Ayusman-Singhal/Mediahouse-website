import type { Metadata } from "next"
import ServerOwnerForm from "@/components/forms/server-owner-form"

export const metadata: Metadata = {
  title: "Submit Campaign - MediaHouse",
  description:
    "Submit a campaign request to MediaHouse. We match your server with vetted gaming creators for structured, performance-driven sponsorships.",
}

export default function ServerOwnerPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white pt-24 sm:pt-28 md:pt-30 pb-16 sm:pb-20 px-6 flex justify-center">
      <div className="w-full max-w-[640px]">
        <div className="mb-8 sm:mb-12">
          <h1 className="font-heading text-[clamp(1.8rem,4vw,2.5rem)] font-bold text-white mb-4 leading-tight">
            Server Owner Campaign Request
          </h1>
          <p className="text-base text-[#B0B0B0] leading-relaxed">
            Submit your campaign details. We&apos;ll evaluate your goals, match you with
            vetted creators, and manage the entire process end to end.
          </p>
        </div>
        <ServerOwnerForm />
      </div>
    </main>
  )
}
