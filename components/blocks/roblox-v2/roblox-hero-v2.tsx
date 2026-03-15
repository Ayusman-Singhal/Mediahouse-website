"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { useRef } from "react"
import Link from "next/link"
import { Particles } from "@/components/ui/particles"

export default function RobloxHeroV2() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Simplify transform for better performance
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[92vh] flex items-center justify-center overflow-hidden bg-background pt-24 pb-16"
      style={{ position: 'relative' }}
    >
      {/* Dynamic Particles Background */}
      <div className="absolute inset-0 bg-background" />
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Particles
          className="absolute inset-0 opacity-80"
          quantity={120}
          ease={70}
          size={1}
          staticity={40}
          color="#FF6B35"
          refresh
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      </motion.div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 max-w-5xl text-white leading-tight md:leading-tight lg:leading-tight"
        >
          Where Creators and <br className="hidden md:block" /> Game Owners <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-roblox-red">Connect</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl md:leading-relaxed text-text-muted max-w-2xl mb-12"
        >
          Managed campaigns designed for Roblox. MediaHouse handles creator sourcing, strategy, and performance so you focus on growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center"
        >
          <Button asChild variant="ctaPrimary" size="cta" className="h-14 px-8 group w-full sm:w-auto flex items-center justify-center">
            <Link href="/apply/server-owner">
              Submit Campaign
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="ctaOutline" size="cta" className="h-14 px-8 w-full sm:w-auto flex items-center justify-center">
            <Link href="/apply/creator">
              Apply as Creator
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
