"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import HeroTestimonials from "./hero-testimonials"

gsap.registerPlugin(ScrollTrigger)

export default function HeroHome() {
  const containerRef = useRef<HTMLElement>(null)
  const introGlowRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const testimonialRefs = useRef<HTMLDivElement[]>([])
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const handleTestimonialRefs = useCallback((refs: HTMLDivElement[]) => {
    testimonialRefs.current = refs
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setPrefersReducedMotion(mediaQuery.matches)
    update()
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", update)
      return () => mediaQuery.removeEventListener("change", update)
    }
    mediaQuery.addListener(update)
    return () => mediaQuery.removeListener(update)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        const elements = [
          ...testimonialRefs.current,
          introGlowRef.current,
        ].filter((el): el is HTMLDivElement => el !== null)
        if (elements.length) gsap.set(elements, { autoAlpha: 0 })
        if (headlineRef.current) gsap.set(headlineRef.current, { autoAlpha: 1, y: 0 })
        return
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2200",
          pin: true,
          scrub: 0.85,
          anticipatePin: 1,
        },
      })

      // Scene 1: Testimonials are visible, then scatter outward
      const cards = testimonialRefs.current
      if (cards.length) {
        cards.forEach((card) => {
          tl.to(card, { opacity: 1, duration: 0.6, ease: "power2.out" }, 0)
        })

        cards.forEach((card) => {
          const exitX = card.dataset.exitX || "100vw"
          const exitY = card.dataset.exitY || "-100vh"
          const delay = parseFloat(card.dataset.delay || "0")
          tl.to(card, {
            x: exitX,
            y: exitY,
            opacity: 0,
            duration: 0.8,
            ease: "power2.in",
          }, 0.5 + delay)
        })
      }

      // Scene 2: Glow fades, logo pulses
      tl.to(introGlowRef.current, { opacity: 0, scale: 1.14, duration: 0.8, ease: "power2.inOut" }, 1.15)
      tl.to(logoRef.current, { y: -24, duration: 0.6, ease: "power2.out" }, 1.2)

      // Scene 3: Headline fades in below logo
      tl.fromTo(headlineRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 2.0)

    }, containerRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#0F0F0F] relative"
    >
      <div className="w-full h-screen relative overflow-hidden flex items-center justify-center isolate">
        {/* Ambient glow */}
        <div
          ref={introGlowRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[1] will-change-[transform,opacity]"
          style={{
            width: "min(42vw, 520px)",
            height: "min(42vw, 520px)",
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.12), rgba(255,255,255,0.02) 34%, rgba(255,255,255,0) 66%), radial-gradient(circle at center, rgba(255,107,53,0.24), rgba(255,107,53,0.08) 38%, rgba(255,107,53,0) 72%)",
            filter: "blur(24px)",
            opacity: 0.92,
          }}
          aria-hidden="true"
        />

        {/* Testimonials */}
        <HeroTestimonials onRefsReady={handleTestimonialRefs} />

        {/* Logo */}
        <div
          ref={logoRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[12] flex flex-col items-center gap-4 will-change-[transform,opacity]"
        >
          <Image
            src="/assets/MediaHouseLogo.png"
            alt="MediaHouse Logo"
            width={200}
            height={200}
            priority
            sizes="(max-width: 768px) 120px, 150px"
            className="w-[clamp(150px,20vw,280px)] h-auto"
            style={{ filter: "drop-shadow(0 0 48px rgba(255,107,53,0.22))" }}
          />
        </div>

        {/* Headline that fades in after testimonials scatter */}
        <div
          ref={headlineRef}
          className="absolute z-[20] text-center px-6 opacity-0"
          style={{ bottom: "12%", left: "50%", transform: "translateX(-50%)", maxWidth: "720px", width: "90%" }}
        >
          <h1 className="font-heading text-[clamp(1.8rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.02em] mb-3">
            Gaming Sponsorships,<br />Managed&nbsp;Professionally.
          </h1>
          <p className="text-[clamp(0.9rem,1.8vw,1.1rem)] leading-[1.65] tracking-[0.01em] text-text-muted opacity-87">
            Connecting gaming creators with game owners across Minecraft, Roblox, and more.
          </p>
        </div>
      </div>
    </section>
  )
}
