import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section id="cta" className="w-full py-16 sm:py-24 md:py-30 px-6 relative">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
        <h2 className="font-heading text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.01em]">
          Let&apos;s Build Your Next Campaign.
        </h2>
        <div className="h-12" />
        <div className="flex gap-4 justify-center flex-wrap">
          <Button asChild variant="ctaPrimary" size="cta" className="duration-300">
            <Link href="/apply/creator">Apply as Creator</Link>
          </Button>
          <Button asChild variant="ctaOutline" size="cta" className="duration-300">
            <Link href="/apply/server-owner">Submit Promotion Request</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
