"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  const pathVariants = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
  }

  return (
    <section id="cta" className="relative w-full px-6 py-16 sm:py-24 md:py-30">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-brand/8 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
            Ready for Liftoff
          </h2>
          <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-text-muted">
            Start your Roblox campaign today. Choose your path and we&apos;ll handle the rest.
          </p>
        </motion.div>

        {/* Dual Deployment Board */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Creator Path */}
          <motion.div
            variants={pathVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-brand-purple/50 to-brand/20 opacity-0 blur transition duration-500 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a22] to-[#14141a] p-8 backdrop-blur-sm">
              <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-brand-purple/20 to-transparent blur-3xl" />

              <div className="relative">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand-purple">
                  <motion.span
                    className="inline-block h-1 w-1 rounded-full bg-brand-purple"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Creator Track
                </div>

                <h3 className="mt-4 font-heading text-2xl font-bold text-white">For Creators</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  Get partnered with Roblox brands. Unlock sponsorship deals tailored to your audience.
                </p>

                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2 text-xs text-text-muted">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-purple" />
                    Verified partner network
                  </li>
                  <li className="flex items-center gap-2 text-xs text-text-muted">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-purple" />
                    Fixed rates + bonuses
                  </li>
                  <li className="flex items-center gap-2 text-xs text-text-muted">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-purple" />
                    Campaign management
                  </li>
                </ul>

                <motion.div whileHover={{ scale: 1.02 }} className="mt-8">
                  <Button asChild variant="ctaPrimary" size="cta" className="w-full justify-center duration-300">
                    <Link href="/apply/creator">Start Application</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Owner Path */}
          <motion.div
            variants={pathVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative"
          >
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-brand/50 to-brand-secondary/20 opacity-0 blur transition duration-500 group-hover:opacity-100" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1a1a22] to-[#14141a] p-8 backdrop-blur-sm">
              <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-brand/20 to-transparent blur-3xl" />

              <div className="relative">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-brand">
                  <motion.span
                    className="inline-block h-1 w-1 rounded-full bg-brand"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Owner Track
                </div>

                <h3 className="mt-4 font-heading text-2xl font-bold text-white">For Game Owners</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  Scale your Roblox experience. Connect with verified creators who reach your players.
                </p>

                <ul className="mt-6 space-y-2">
                  <li className="flex items-center gap-2 text-xs text-text-muted">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                    Pre-vetted creator pool
                  </li>
                  <li className="flex items-center gap-2 text-xs text-text-muted">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                    Strategy + execution
                  </li>
                  <li className="flex items-center gap-2 text-xs text-text-muted">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand" />
                    Performance tracking
                  </li>
                </ul>

                <motion.div whileHover={{ scale: 1.02 }} className="mt-8">
                  <Button asChild variant="ctaOutline" size="cta" className="w-full justify-center duration-300">
                    <Link href="/apply/server-owner">Submit Campaign</Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
