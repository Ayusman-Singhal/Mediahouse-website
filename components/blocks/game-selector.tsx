"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { useMounted } from "@/lib/use-mounted"

export default function GameSelector() {
  const isMounted = useMounted()

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="w-full py-20 sm:py-28 md:py-36 px-6 relative overflow-hidden bg-background">
      {/* Subtle radial bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 40%, theme(colors.brand/4%), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1100px] mx-auto relative z-[1]">
        <motion.div
          initial={isMounted ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-18"
        >
          <p className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-brand mb-4">
            Select Your Platform
          </p>
          <h2 className="font-heading text-[clamp(2rem,5vw,3.8rem)] font-extrabold leading-[1.08] tracking-tight text-white">
            Choose Your Game
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={isMounted ? "hidden" : false}
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
        >
          {/* ── Minecraft Card ── */}
          <motion.div variants={cardVariants} className="h-full">
            <Link href="/minecraft" className="block h-full outline-none">
              <Card className="group relative h-full min-h-[400px] sm:min-h-[480px] overflow-hidden border-white/10 p-8 sm:p-10 md:p-12 transition-all duration-500 hover:border-[#10B981]/40 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(16,185,129,0.15)] flex flex-col justify-end text-left">

                {/* Background Image - SEO-safe: lazy loaded since below fold */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/assets/minecraft-card.jpg"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 scale-105 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>

                {/* Minecraft accent gradient */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#059669] via-[#10B981] to-[#34D399] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <div className="relative z-10 mt-auto">
                  <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                    Minecraft
                  </h3>
                  <p className="text-text-muted text-base leading-relaxed max-w-[340px] mb-8">
                    Server promotions, creator sponsorships, and campaign management specifically engineered for Minecraft communities.
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#10B981] group-hover:text-[#34D399] transition-colors duration-300">
                    Explore Minecraft
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>

          {/* ── Roblox Card ── */}
          <motion.div variants={cardVariants} className="h-full">
            <Link href="/roblox" className="block h-full outline-none">
              <Card className="group relative h-full min-h-[400px] sm:min-h-[480px] overflow-hidden border-white/10 p-8 sm:p-10 md:p-12 transition-all duration-500 hover:border-roblox-red/40 hover:-translate-y-2 hover:shadow-[0_24px_80px_rgba(226,35,26,0.15)] flex flex-col justify-end text-left">

                {/* Background Image - SEO-safe: lazy loaded since below fold */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/assets/roblox-card.png"
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover opacity-50 group-hover:opacity-70 transition-all duration-700 scale-105 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                </div>

                {/* Roblox accent gradient */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-roblox-red-dark via-roblox-red to-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                <div className="relative z-10 mt-auto">
                  <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
                    Roblox
                  </h3>
                  <p className="text-text-muted text-base leading-relaxed max-w-[340px] mb-8">
                    Experience promotions, creator partnerships, and campaign management natively built for the Roblox ecosystem.
                  </p>

                  <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-roblox-red group-hover:text-brand transition-colors duration-300">
                    Explore Roblox
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
