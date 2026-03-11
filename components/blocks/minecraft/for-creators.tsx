import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ForCreators() {
  return (
    <section id="creators" className="w-full py-16 sm:py-24 md:py-30 px-6 relative">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
          <div className="order-1 md:order-1 flex justify-center">
            <Image
              src="/assets/creator-island.png"
              alt="Creator Island"
              width={400}
              height={400}
              sizes="(max-width: 768px) min(90vw, 400px), 400px"
              loading="lazy"
              className="w-[clamp(200px,100%,400px)] h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            />
          </div>
          <div className="order-2 md:order-2">
            <h2 className="font-heading text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.01em]">
              For Creators
            </h2>
            <div className="h-6" />
            <ul className="space-y-4 list-none">
              {["Creator Management","Creative Talent Sourcing" , "Direct sponsorship negotiation", "Rate protection", "Campaign structuring", "Business communication management"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-text-muted text-base leading-[1.65] tracking-[0.01em] opacity-87">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-br from-brand-purple to-brand-purple-dark shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="h-12" />
            <Button asChild variant="ctaPrimary" size="cta" className="duration-300">
              <Link href="/apply/creator">Apply for Representation</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
