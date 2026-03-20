import { Button } from "@/components/ui/button"
import Link from "next/link"
export default function AuthoritySection() {
  return (
    <section id="authority" className="w-full py-16 sm:py-24 md:py-30 px-6 relative">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
        <h2 className="font-heading text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.01em] opacity-100">
          A Managed Sponsorship Brokerage
        </h2>
        <div className="h-6" />
        <p className="text-[clamp(0.95rem,2vw,1.125rem)] leading-[1.65] tracking-[0.01em] text-text-muted max-w-2xl opacity-87">
          MediaHouse connects growth-focused server operators with
          performance-driven gaming creators. We negotiate deals, structure
          campaigns, and oversee deliverables with professional control.
        </p>
      </div>
      <div className="h-12 py-12">
        <div className="flex gap-8 justify-center flex-wrap">
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
