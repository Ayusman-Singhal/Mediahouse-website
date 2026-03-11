"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

/* ═══════════════════════════════════════════════════════
   ROBLOX PAGE  —  MediaHouse
   
   Aesthetic: Bold geometric, Roblox red (#E2231A) dominant,
   deep navy/charcoal backgrounds, electric blue accents,
   Outfit font family, floating block shapes, clean and modern
   with a slightly playful professional tone.
   ═══════════════════════════════════════════════════════ */

const processSteps = [
  { num: "01", title: "Campaign Request Submission" },
  { num: "02", title: "Strategy & Budget Evaluation" },
  { num: "03", title: "Creator Shortlisting" },
  { num: "04", title: "Negotiation & Deliverable Planning" },
  { num: "05", title: "Agreement Finalization" },
  { num: "06", title: "Campaign Execution" },
  { num: "07", title: "Performance Analysis & Reporting" },
]

const ownerBenefits = [
  "Access vetted Roblox content creators",
  "Structured campaign execution with clear timelines",
  "Defined deliverables and performance tracking",
  "Centralized negotiation and budget management",
]

const creatorBenefits = [
  "Creator Management & Talent Sourcing",
  "Direct sponsorship negotiation",
  "Rate protection & fair compensation",
  "Campaign structuring & scheduling",
  "Business communication management",
  "Multi-platform content coordination",
]

const pillars = [
  {
    title: "Controlled Negotiation",
    body: "All sponsorship terms handled centrally — transparent, fair, and efficient.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    title: "Structured Execution",
    body: "Clear deliverables, timelines, and milestones defined before any campaign launches.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: "Isolated Campaigns",
    body: "Each deal privately managed — no conflicts, no overlap, full confidentiality.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

export default function RobloxContent() {
  return (
    <div className="font-roblox">
      {/* ═══ HERO ═══ */}
      <section className="relative w-full pt-28 sm:pt-32 md:pt-40 pb-20 sm:pb-28 md:pb-36 px-6 overflow-hidden">
        {/* Background with geometric shapes */}
        <div className="absolute inset-0 bg-[#0c0c18]" />
        {/* Floating blocks — decorative */}
        <div className="absolute top-[15%] left-[8%] w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-roblox-red/20 to-roblox-red/5 rotate-12 border border-roblox-red/10" aria-hidden="true" />
        <div className="absolute top-[25%] right-[12%] w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-roblox-accent/15 to-roblox-accent/5 -rotate-6 border border-roblox-accent/10" aria-hidden="true" />
        <div className="absolute bottom-[20%] left-[15%] w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-roblox-red/10 to-transparent rotate-45 border border-white/[0.04]" aria-hidden="true" />
        <div className="absolute bottom-[30%] right-[6%] w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-roblox-accent/8 to-transparent -rotate-12 border border-roblox-accent/8" aria-hidden="true" />
        <div className="absolute top-[60%] left-[50%] w-8 h-8 rounded-md bg-roblox-red/10 rotate-12 border border-roblox-red/8" aria-hidden="true" />

        {/* Radial glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,900px)] h-[min(70vw,600px)] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(226,35,26,0.08), rgba(59,130,246,0.03) 50%, transparent 75%)" }}
          aria-hidden="true"
        />

        <div className="relative z-[1] max-w-[1100px] mx-auto text-center">
          {/* Roblox badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-roblox-red/10 border border-roblox-red/20 mb-8">
            <div className="w-5 h-5 rounded-[5px] bg-gradient-to-br from-roblox-red to-roblox-red-dark flex items-center justify-center">
              <span className="text-white text-[10px] font-black leading-none">R</span>
            </div>
            <span className="text-sm font-bold text-roblox-red tracking-wide uppercase">Roblox</span>
          </div>

          <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[1.05] tracking-[-0.03em] mb-6">
            <span className="text-white">Grow Your Roblox</span>
            <br />
            <span className="bg-gradient-to-r from-roblox-red via-red-400 to-roblox-accent bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-[clamp(1rem,2vw,1.2rem)] leading-[1.65] text-[#8888aa] max-w-2xl mx-auto mb-10">
            MediaHouse connects Roblox game owners with top-tier content creators for structured, high-impact sponsorship campaigns. Professional management from pitch to performance report.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild className="bg-gradient-to-r from-roblox-red to-roblox-red-dark text-white font-bold px-8 py-5 rounded-xl text-base hover:shadow-[0_8px_32px_rgba(226,35,26,0.35)] hover:-translate-y-0.5 transition-all duration-300 border-0">
              <Link href="/apply/server-owner">Submit Campaign</Link>
            </Button>
            <Button asChild className="bg-transparent border border-white/15 text-white font-bold px-8 py-5 rounded-xl text-base hover:border-roblox-accent/40 hover:bg-roblox-accent/5 hover:-translate-y-0.5 transition-all duration-300">
              <Link href="/apply/creator">Apply as Creator</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ AUTHORITY / INTRO ═══ */}
      <section className="w-full py-16 sm:py-24 md:py-30 px-6 relative bg-[#0a0a16]">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-[clamp(1.8rem,4.5vw,3.2rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-5">
            A Managed Sponsorship Brokerage — For Roblox
          </h2>
          <p className="text-[clamp(0.95rem,2vw,1.125rem)] leading-[1.65] text-[#8888aa] max-w-2xl mx-auto">
            MediaHouse connects growth-focused Roblox game owners with vetted content creators.
            We negotiate deals, structure campaigns, and oversee every deliverable with professional control.
          </p>
        </div>
      </section>

      {/* ═══ FOR GAME OWNERS ═══ */}
      <section className="w-full py-16 sm:py-24 md:py-30 px-6 relative bg-[#0c0c18]">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-roblox-red/8 border border-roblox-red/15 mb-5">
                <div className="w-2 h-2 rounded-full bg-roblox-red" />
                <span className="text-xs font-bold text-roblox-red uppercase tracking-wider">For Game Owners</span>
              </div>
              <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.01em] text-white mb-6">
                For Game Owners
              </h2>
              <ul className="space-y-4 list-none">
                {ownerBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-[#9999bb] text-base leading-[1.65]">
                    <span className="mt-2 w-2.5 h-2.5 rounded-[4px] bg-gradient-to-br from-roblox-red to-roblox-red-dark shrink-0 rotate-45" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="h-10" />
              <Button asChild className="bg-gradient-to-r from-roblox-red to-roblox-red-dark text-white font-bold px-7 py-4 rounded-xl text-[0.95rem] hover:shadow-[0_6px_24px_rgba(226,35,26,0.3)] hover:-translate-y-0.5 transition-all duration-300 border-0">
                <Link href="/apply/server-owner">Submit Campaign Request</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              {/* Roblox-styled decorative block composition */}
              <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px]">
                {/* Background block */}
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-roblox-surface to-[#12122a] border border-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.4)]" />
                {/* Accent blocks */}
                <div className="absolute top-2 right-2 w-16 h-16 rounded-xl bg-gradient-to-br from-roblox-red/30 to-roblox-red/10 rotate-12 border border-roblox-red/15" />
                <div className="absolute bottom-6 left-2 w-12 h-12 rounded-lg bg-gradient-to-br from-roblox-accent/25 to-roblox-accent/8 -rotate-6 border border-roblox-accent/15" />
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <img src="/assets/game-owner-island.png" alt="Game Owner Island" className="w-20 h-20 object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.5)] mb-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOR CREATORS ═══ */}
      <section className="w-full py-16 sm:py-24 md:py-30 px-6 relative bg-[#0a0a16]">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-roblox-accent/8 border border-roblox-accent/15 mb-5">
                <div className="w-2 h-2 rounded-full bg-roblox-accent" />
                <span className="text-xs font-bold text-roblox-accent uppercase tracking-wider">For Creators</span>
              </div>
              <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.01em] text-white mb-6">
                For Creators
              </h2>
              <ul className="space-y-4 list-none">
                {creatorBenefits.map((item) => (
                  <li key={item} className="flex items-start gap-3.5 text-[#9999bb] text-base leading-[1.65]">
                    <span className="mt-2 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-roblox-accent to-roblox-accent-light shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="h-10" />
              <Button asChild className="bg-gradient-to-r from-roblox-accent to-roblox-accent-light text-white font-bold px-7 py-4 rounded-xl text-[0.95rem] hover:shadow-[0_6px_24px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all duration-300 border-0">
                <Link href="/apply/creator">Apply for Representation</Link>
              </Button>
            </div>
            <div className="order-2 md:order-1 flex justify-center">
              {/* Creator decorative block composition */}
              <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px]">
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-roblox-surface to-[#12122a] border border-white/[0.06] shadow-[0_20px_60px_rgba(0,0,0,0.4)]" />
                <div className="absolute top-3 left-3 w-14 h-14 rounded-xl bg-gradient-to-br from-roblox-accent/25 to-roblox-accent/8 rotate-6 border border-roblox-accent/15" />
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-lg bg-gradient-to-br from-roblox-red/20 to-roblox-red/5 -rotate-12 border border-roblox-red/10" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-roblox-accent to-roblox-accent-light flex items-center justify-center shadow-[0_8px_32px_rgba(59,130,246,0.3)] mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="text-white/60 text-sm font-semibold tracking-wide">Creators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAMPAIGN PROCESS ═══ */}
      <section className="w-full py-16 sm:py-24 md:py-30 px-6 relative bg-[#0c0c18]">
        {/* Accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-roblox-red/20 to-transparent" aria-hidden="true" />

        <div className="max-w-[1100px] mx-auto text-center flex flex-col items-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.02em] text-white mb-4">
            End-to-End Campaign Management
          </h2>
          <p className="text-[#7777aa] text-base mb-12 max-w-lg">
            From initial pitch to performance report — every step is handled.
          </p>
          <div className="flex flex-col gap-0 w-full max-w-xl">
            {processSteps.map((step, i) => (
              <div key={i} className="flex items-start gap-5 sm:gap-6">
                <div className="text-sm font-black text-roblox-red w-8 shrink-0 pt-0.5 tracking-wide">{step.num}</div>
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-3.5 h-3.5 rounded-[5px] bg-gradient-to-br from-roblox-red to-roblox-red-dark rotate-45 shadow-[0_0_12px_rgba(226,35,26,0.25)]" />
                  {i < processSteps.length - 1 && <div className="w-px h-10 bg-white/[0.06]" />}
                </div>
                <div className="text-[#aaaacc] text-base text-left pt-0.5 font-medium">{step.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY MEDIAHOUSE ═══ */}
      <section className="w-full py-16 sm:py-24 md:py-30 px-6 relative bg-[#0a0a16]">
        <div className="max-w-[1100px] mx-auto text-center flex flex-col items-center">
          <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-extrabold leading-[1.1] tracking-[-0.01em] text-white mb-4">
            Why MediaHouse
          </h2>
          <p className="text-[#7777aa] text-base mb-12 max-w-md">
            Professional infrastructure for creator-game owner partnerships.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 w-full">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="bg-[#12122a] border border-white/[0.05] rounded-2xl p-8 sm:p-10 text-center transition-all duration-350 hover:border-roblox-red/15 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(226,35,26,0.06)] group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-roblox-red/15 to-roblox-red/5 border border-roblox-red/10 flex items-center justify-center mx-auto mb-5 text-roblox-red group-hover:from-roblox-red/25 group-hover:to-roblox-red/10 transition-all duration-350">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-[-0.01em]">{p.title}</h3>
                <p className="text-[#8888aa] text-sm leading-[1.65]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="w-full py-20 sm:py-28 md:py-36 px-6 relative bg-[#0c0c18] overflow-hidden">
        {/* Decorative blocks */}
        <div className="absolute top-[20%] left-[5%] w-24 h-24 rounded-2xl bg-gradient-to-br from-roblox-red/8 to-transparent rotate-12 border border-roblox-red/5" aria-hidden="true" />
        <div className="absolute bottom-[15%] right-[8%] w-16 h-16 rounded-xl bg-gradient-to-br from-roblox-accent/10 to-transparent -rotate-6 border border-roblox-accent/8" aria-hidden="true" />

        <div className="max-w-[800px] mx-auto text-center relative z-[1]">
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black leading-[1.08] tracking-[-0.02em] text-white mb-5">
            Ready to Grow Your<br />
            <span className="bg-gradient-to-r from-roblox-red to-roblox-accent bg-clip-text text-transparent">
              Roblox Experience?
            </span>
          </h2>
          <p className="text-[#8888aa] text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Whether you own a Roblox game or create content, MediaHouse manages the entire sponsorship lifecycle professionally.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild className="bg-gradient-to-r from-roblox-red to-roblox-red-dark text-white font-bold px-8 py-5 rounded-xl text-base hover:shadow-[0_8px_32px_rgba(226,35,26,0.35)] hover:-translate-y-0.5 transition-all duration-300 border-0">
              <Link href="/apply/creator">Apply as Creator</Link>
            </Button>
            <Button asChild className="bg-transparent border border-white/15 text-white font-bold px-8 py-5 rounded-xl text-base hover:border-roblox-accent/40 hover:bg-roblox-accent/5 hover:-translate-y-0.5 transition-all duration-300">
              <Link href="/apply/server-owner">Submit Campaign</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
