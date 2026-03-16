"use client"

import { useEffect, useRef, useMemo } from "react"

// ─── Data ──────────────────────────────────────────────
type Testimonial = { name: string; msg: string }

const TESTIMONIAL_POOL: Testimonial[] = [
  { name: "Apex SMP", msg: "We doubled player joins in 14 days." },
  { name: "NovaCraft", msg: "Best ROI we've ever seen." },
  { name: "SkyBlock Central", msg: "Professional from start to finish." },
  { name: "PixelRaid", msg: "Campaign execution was flawless." },
  { name: "Vortex PvP", msg: "Our Discord exploded overnight." },
  { name: "LunarRealms", msg: "Zero stress. Full results." },
  { name: "CraftNation", msg: "MediaHouse handles everything." },
  { name: "BlockWorld", msg: "Our biggest growth spike yet." },
  { name: "Titan SMP", msg: "Creators were perfectly matched." },
  { name: "MythicMC", msg: "Worth every rupee spent." },
  { name: "Nebula Network", msg: "Extremely smooth process." },
  { name: "QuantumMC", msg: "Professional and reliable." },
]

// ─── Helpers ───────────────────────────────────────────
function createSeededRandom(seed: number) {
  let state = seed >>> 0
  return () => {
    // Mulberry32 PRNG for deterministic client/server output
    state += 0x6d2b79f5
    let t = Math.imul(state ^ (state >>> 15), 1 | state)
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

function getRandomTestimonials(pool: Testimonial[], count: number, random: () => number) {
  const shuffled = [...pool]
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, count)
}

type CardLayout = {
  x: string
  y: string
  rotate: number
  scale: number
  exitX: string
  exitY: string
  delay: number
}

function generateLayout(index: number, total: number, random: () => number): CardLayout {
  // Distribute cards around edges of the viewport
  const angle = (index / total) * Math.PI * 2
  const radiusX = 30 + random() * 12 // 30-42% from center
  const radiusY = 25 + random() * 15 // 25-40% from center

  const x = `${Math.cos(angle) * radiusX}vw`
  const y = `${Math.sin(angle) * radiusY}vh`
  const rotate = -8 + random() * 16
  const scale = 0.85 + random() * 0.15

  // Exit in the same direction but much further out
  const exitMultiplier = 3 + random() * 2
  const exitX = `${Math.cos(angle) * radiusX * exitMultiplier}vw`
  const exitY = `${Math.sin(angle) * radiusY * exitMultiplier}vh`

  const delay = random() * 0.3

  return { x, y, rotate, scale, exitX, exitY, delay }
}

// ─── Component ─────────────────────────────────────────
export default function HeroTestimonials({
  onRefsReady,
  isCompact,
}: {
  onRefsReady: (refs: HTMLDivElement[]) => void
  isCompact: boolean
}) {
  const cardRefs = useRef<HTMLDivElement[]>([])

  const data = useMemo(() => {
    const random = createSeededRandom(20260309)
    const count = isCompact ? 5 : 6 + Math.floor(random() * 3) // mobile: 5, desktop: 6-8
    const testimonials = getRandomTestimonials(TESTIMONIAL_POOL, count, random)
    return testimonials.map((t, i) => ({
      ...t,
      layout: generateLayout(i, count, random),
    }))
  }, [isCompact])

  useEffect(() => {
    if (cardRefs.current.length > 0) {
      onRefsReady(cardRefs.current.filter(Boolean))
    }
  }, [onRefsReady])

  return (
    <>
      {data.map((t, i) => (
        <div
          key={`testimonial-${i}`}
          ref={(el) => {
            if (el) cardRefs.current[i] = el
          }}
          className="absolute z-[9] pointer-events-none"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) translate(${t.layout.x}, ${t.layout.y}) rotate(${t.layout.rotate}deg) scale(${t.layout.scale})`,
            opacity: 1,
          }}
          data-exit-x={t.layout.exitX}
          data-exit-y={t.layout.exitY}
          data-delay={t.layout.delay}
        >
          <div
            className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/[0.08] backdrop-blur-xl shadow-2xl"
            style={{
              background: "rgba(20, 20, 20, 0.85)",
              maxWidth: isCompact ? "230px" : "280px",
              minWidth: isCompact ? "180px" : "220px",
            }}
          >
            {/* Avatar circle */}
            <div
              className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{
                background: `linear-gradient(135deg, hsl(${(i * 47) % 360}, 70%, 55%), hsl(${(i * 47 + 60) % 360}, 70%, 45%))`,
              }}
            >
              {t.name[0]}
            </div>
            {/* Text */}
            <p className="text-sm leading-snug">
              <span className="font-semibold text-white">{t.name}</span>
              <span className="text-neutral-400"> - {t.msg}</span>
            </p>
          </div>
        </div>
      ))}
    </>
  )
}
