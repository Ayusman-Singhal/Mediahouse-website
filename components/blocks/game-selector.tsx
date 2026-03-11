"use client"

import Link from "next/link"
import Image from "next/image"

export default function GameSelector() {
  return (
    <section className="w-full py-20 sm:py-28 md:py-36 px-6 relative overflow-hidden">
      {/* Subtle radial bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(255,107,53,0.04), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1100px] mx-auto relative z-[1]">
        <div className="text-center mb-14 sm:mb-18">
          <p className="font-heading text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-brand mb-4">
            Select Your Platform
          </p>
          <h2 className="font-heading text-[clamp(2rem,5vw,3.8rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
            Choose Your Game
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* ── Minecraft Card ── */}
          <Link
            href="/minecraft"
            className="group relative rounded-2xl overflow-hidden border border-white/[0.06] transition-all duration-400 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(34,197,94,0.12)]"
          >
            {/* Background layers */}
            <div className="absolute inset-0 bg-[#111a12] transition-colors duration-400 group-hover:bg-[#13201a]" />
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 15px, rgba(34,197,94,0.15) 15px, rgba(34,197,94,0.15) 16px),
                  repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(34,197,94,0.15) 15px, rgba(34,197,94,0.15) 16px)`,
              }}
              aria-hidden="true"
            />
            {/* Top gradient accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              aria-hidden="true"
            />

            <div className="relative z-[1] p-8 sm:p-10 md:p-12 flex flex-col items-center text-center min-h-[340px] justify-center">
              <div className="mb-6 relative">
                <Image
                  src="/assets/server-owner-island.png"
                  alt="Minecraft"
                  width={180}
                  height={180}
                  sizes="180px"
                  className="w-[clamp(120px,28vw,180px)] h-auto drop-shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold text-white mb-3 tracking-[-0.01em]">
                Minecraft
              </h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-[320px] opacity-80 mb-6">
                Server promotions, creator sponsorships, and campaign management for Minecraft communities.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300">
                Explore Minecraft
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </span>
            </div>
          </Link>

          {/* ── Roblox Card ── */}
          <Link
            href="/roblox"
            className="group relative rounded-2xl overflow-hidden border border-white/[0.06] transition-all duration-400 hover:border-red-500/30 hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(226,35,26,0.12)]"
          >
            {/* Background layers */}
            <div className="absolute inset-0 bg-[#1a1118] transition-colors duration-400 group-hover:bg-[#201420]" />
            {/* Geometric pattern overlay for Roblox identity */}
            <div
              className="absolute inset-0 opacity-[0.03] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(226,35,26,0.3) 1px, transparent 1px),
                  radial-gradient(circle at 75% 75%, rgba(59,130,246,0.3) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
              aria-hidden="true"
            />
            {/* Top gradient accent */}
            <div
              className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              aria-hidden="true"
            />

            <div className="relative z-[1] p-8 sm:p-10 md:p-12 flex flex-col items-center text-center min-h-[340px] justify-center">
              <div className="mb-6 relative">
                {/* Roblox icon — stylized geometric block */}
                <div className="w-[clamp(100px,24vw,150px)] h-[clamp(100px,24vw,150px)] relative flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                 <img src="/assets/game-owner-island.png" alt="Roblox" className="w-full h-full object-contain drop-shadow-[0_16px_40px_rgba(0,0,0,0.5)]" />
                </div>
              </div>
              <h3 className="font-heading text-[clamp(1.6rem,3.5vw,2.4rem)] font-extrabold text-white mb-3 tracking-[-0.01em]">
                Roblox
              </h3>
              <p className="text-text-muted text-sm sm:text-base leading-relaxed max-w-[320px] opacity-80 mb-6">
                Experience promotions, creator partnerships, and campaign management for Roblox games.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 group-hover:text-red-300 transition-colors duration-300">
                Explore Roblox
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
