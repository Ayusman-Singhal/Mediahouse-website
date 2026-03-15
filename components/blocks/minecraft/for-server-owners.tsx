"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const points = [
  "Access vetted gaming creators with the right audience fit",
  "Structured campaign execution with clear milestones",
  "Defined deliverables, posting windows, and quality controls",
  "Centralized negotiation and communication management",
]

export default function ForServerOwners() {
  return (
    <section id="server-owners" className="w-full py-24 bg-background relative overflow-hidden text-white">
      <div className="container px-4 md:px-6 relative z-10 mx-auto max-w-[1200px]">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              For Server Owners
            </h2>
            <p className="text-lg text-text-muted leading-relaxed">
              Launch creator sponsorships without the sourcing headache. We find the right voices for your audience. Campaigns optimized for high-LTV players and sustained engagement, not vanity metrics.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              {points.map((text, i) => (
                <div key={i} className="flex items-start gap-3 text-base text-[#E0E0E0] opacity-90 leading-relaxed">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Button asChild variant="ctaPrimary" size="cta" className="h-14 px-8">
                <Link href="/apply/server-owner">Submit Campaign Request</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative flex justify-center overflow-hidden">
              <Image
                src="/assets/server-owner-island.png"
                alt="Server Owner Island"
                width={400}
                height={400}
                className="h-auto w-full max-w-[400px] drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

