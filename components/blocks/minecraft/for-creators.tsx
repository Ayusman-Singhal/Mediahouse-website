"use client"

import { motion } from "framer-motion"
import { FileSignature, ShieldCheck, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useMounted } from "@/lib/use-mounted"

const points = [
  {
    title: "Rate Protection",
    desc: "We negotiate directly with the brand so you don't have to anchor your own rate. Contracts are clear on scope, timeline, and what happens if either side doesn't deliver.",
    icon: FileSignature
  },
  {
    title: "Campaign Structuring",
    desc: "Campaigns are built around how you actually make content, not a generic template. Your format, your audience, your posting schedule.",
    icon: Target
  },
  {
    title: "Managed Comms",
    desc: "We handle all back-and-forth with the brand. The revision requests, the follow-ups, the \"when is this going live\" emails. You don't see any of it unless there's a decision to make.",
    icon: ShieldCheck
  }
]

export default function ForCreators() {
  const m = useMounted()
  return (
    <section id="creators" className="w-full py-24 bg-background relative overflow-hidden text-white">
      <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-[1200px]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={m ? { opacity: 0, scale: 0.95 } : false}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 flex justify-center lg:justify-start"
          >
            <div className="relative flex justify-center overflow-hidden">
              <Image
                src="/assets/creator-island.png"
                alt="Creator Island"
                width={400}
                height={400}
                className="h-auto w-full max-w-[400px] drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={m ? { opacity: 0, y: 20 } : false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6 order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              For <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-purple-dark">Creators</span>
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Most creators don&apos;t lose money because their content is bad. They lose it because they accepted the first number a brand offered, or agreed to a scope that wasn&apos;t written down anywhere.
            </p>
            <p className="text-base text-text-muted leading-relaxed mt-2">
              We negotiate your rate, scope every deliverable in writing, and handle all brand communication on your behalf. You keep making videos. We handle the rest.
            </p>

            <div className="flex flex-col gap-6 mt-4">
              {points.map((point, i) => {
                const Icon = point.icon
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center border border-brand-purple/20">
                      <Icon className="w-4 h-4 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{point.title}</h3>
                      <p className="text-text-muted leading-relaxed opacity-90">{point.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-6">
              <Button asChild variant="ctanotPrimary" size="cta" className="h-14 px-8 duration-300">
                <Link href="/apply/creator">Apply for Representation</Link>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

