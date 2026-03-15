"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function RobloxHero() {
  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
  }

  return (
    <section className="relative w-full overflow-hidden border-b border-white/8 px-6 py-16 sm:py-24 md:py-40">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,107,53,0.2),transparent_48%),radial-gradient(circle_at_84%_82%,rgba(155,89,182,0.16),transparent_50%)]" />
        <motion.div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(45deg, transparent 30%, rgba(255,107,53,0.1) 50%, transparent 70%)",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="mb-20 flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-brand"
          >
            <motion.span
              className="inline-block h-1.5 w-1.5 rounded-full bg-brand"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Roblox Partnership Network
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-[clamp(2.5rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-white"
          >
            Where Creators and Game Owners Connect
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 max-w-2xl text-[clamp(1rem,2.2vw,1.25rem)] leading-[1.7] tracking-[0.01em] text-text-muted"
          >
            Managed campaigns designed for Roblox. MediaHouse handles creator sourcing, strategy, and performance—so you focus on growth.
          </motion.p>
        </div>

        {/* Dual Gateway Composition */}
        <div className="relative mb-16 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">

          {/* Left Island - Game Owner */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-brand/40 to-brand-secondary/20 opacity-0 blur transition duration-500 group-hover:opacity-100" />
            <div className="relative flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a22] to-[#14141a] p-6 backdrop-blur-sm sm:p-8">
              <div className="mb-6 flex h-32 items-center justify-center overflow-hidden rounded-2xl border border-white/8 bg-[#0f0f15]">
                <Image
                  src="/assets/robolox-game-owner-island.png"
                  alt="Game owner setup"
                  width={280}
                  height={280}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-bold tracking-[-0.01em] text-white">For Game Owners</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  Launch creator sponsorships without the sourcing headache. We find the right voices for your audience.
                </p>
              </div>
              <motion.div
                whileHover={{ x: 4 }}
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand"
              >
                Explore Path <span>→</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Island - Creator */}
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-brand-purple/40 to-brand/20 opacity-0 blur transition duration-500 group-hover:opacity-100" />
            <div className="relative flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a22] to-[#14141a] p-6 backdrop-blur-sm sm:p-8">
              <div className="mb-6 flex h-32 items-center justify-center overflow-hidden rounded-2xl border border-white/8 bg-[#0f0f15]">
                <Image
                  src="/assets/robolox-creator-island.png"
                  alt="Creator setup"
                  width={280}
                  height={280}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-lg font-bold tracking-[-0.01em] text-white">For Creators</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  Get paid for what you love. Partner with brands that match your audience and style.
                </p>
              </div>
              <motion.div
                whileHover={{ x: 4 }}
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-brand-purple"
              >
                Explore Path <span>→</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Button asChild variant="ctaPrimary" size="cta" className="duration-300">
            <Link href="/apply/server-owner">Submit Campaign</Link>
          </Button>
          <Button asChild variant="ctaOutline" size="cta" className="duration-300">
            <Link href="/apply/creator">Apply as Creator</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
