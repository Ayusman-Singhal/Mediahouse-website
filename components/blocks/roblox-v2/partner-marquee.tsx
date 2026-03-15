"use client"

import { motion } from "framer-motion"

// Placeholder partner names/stats
const partners = [
  "Adopt Me!", "Brookhaven", "Tower of Hell", "Blox Fruits", "MeepCity",
  "Murder Mystery 2", "Piggy", "Jailbreak", "Welcome to Bloxburg", "Royale High"
]

export default function PartnerMarquee() {
  // Duplicating the array for seamless infinite scrolling
  const scrollItems = [...partners, ...partners]

  return (
    <section className="w-full py-16 bg-[#0F0F0F] relative overflow-hidden flex flex-col items-center border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-transparent to-[#0F0F0F] z-10 pointer-events-none w-full" />
      
      <p className="text-[#A0A0A0] text-sm uppercase tracking-widest font-semibold mb-8 z-20">
        Trusted by top experiences
      </p>

      <div className="flex overflow-hidden w-full max-w-[100vw]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
          className="flex whitespace-nowrap gap-12 sm:gap-24 items-center pl-12 sm:pl-24"
        >
          {scrollItems.map((partner, idx) => (
            <div 
              key={`${partner}-${idx}`}
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-white/80 font-bold text-xl md:text-2xl tracking-tight hover:bg-white/10 transition-colors"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
