import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  return (
    <section id="cta" className="w-full py-16 sm:py-24 md:py-30 px-6 relative">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
        <h2 className="font-heading text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.01em]">
          Ready to Run a Campaign That Actually Delivers?
        </h2>
        <div className="h-12" />
        <div className="flex items-center gap-6 justify-center flex-wrap">
          <Button asChild variant="ctaPrimary" size="cta" className="duration-300">
            <Link href="/apply/server-owner">Submit Campaign Request</Link>
          </Button>
          <Link href="/apply/creator" className="text-sm font-medium text-white/60 underline underline-offset-4 hover:text-white transition-colors duration-200">or apply as a creator</Link>
        </div>
      </div>
    </section>
  )
}
