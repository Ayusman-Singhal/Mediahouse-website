import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const points = [
  "Access vetted Roblox creators with the right audience fit",
  "Structured campaign execution with clear milestones",
  "Defined deliverables, posting windows, and quality controls",
  "Centralized negotiation and communication management",
]

export default function ForServerOwners() {
  return (
    <section id="server-owners" className="relative w-full px-6 py-16 sm:py-24 md:py-30">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-12 sm:gap-16 md:grid-cols-2 md:gap-20">
          <div className="order-2 md:order-1">
            <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-text-subdued">Owner Track</p>
            <h2 className="font-heading text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.01em]">
              For Game Owners
            </h2>
            <div className="h-6" />
            <ul className="list-none space-y-4">
              {points.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-[1.65] tracking-[0.01em] text-text-muted opacity-87">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-brand to-brand-secondary" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="h-12" />
            <Button asChild variant="ctaPrimary" size="cta" className="duration-300">
              <Link href="/apply/server-owner">Submit Campaign Request</Link>
            </Button>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#161616] p-4 sm:p-5">
              <Image
                src="/assets/robolox-game-owner-island.png"
                alt="Roblox game owner island"
                width={420}
                height={420}
                sizes="(max-width: 768px) min(90vw, 420px), 420px"
                loading="lazy"
                className="h-auto w-[clamp(220px,100%,420px)] drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
