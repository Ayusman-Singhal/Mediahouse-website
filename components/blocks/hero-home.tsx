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
  const [isMobileLayout, setIsMobileLayout] = useState(false)

  const handleTestimonialRefs = useCallback((refs: HTMLDivElement[]) => {
    testimonialRefs.current = refs
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setPrefersReducedMotion(mediaQuery.matches)
    update()
    
    mediaQuery.addEventListener("change", update)
    return () => mediaQuery.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    let frameId = 0

    const updateLayout = () => {
      setIsMobileLayout(window.innerWidth < 768)
    }

    const handleResize = () => {
      cancelAnimationFrame(frameId)
      frameId = window.requestAnimationFrame(updateLayout)
    }

    updateLayout()
    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const logoLift = isMobileLayout ? -46 : -68
      const headlineFromY = isMobileLayout ? 26 : 40
      const headlineToY = isMobileLayout ? -14 : -40

      // Hide headline via JS (was previously CSS opacity-0, removed for SSR crawlability)
      // Must include xPercent: -50 to preserve the CSS left-1/2 centering
      if (headlineRef.current) gsap.set(headlineRef.current, { opacity: 0, xPercent: -50 })

      if (prefersReducedMotion) {
        const elements = [
          ...testimonialRefs.current,
          introGlowRef.current,
        ].filter((el): el is HTMLDivElement => el !== null)
        if (elements.length) gsap.set(elements, { autoAlpha: 0 })
        if (headlineRef.current) gsap.set(headlineRef.current, { autoAlpha: 1, y: 0, xPercent: -50 })
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
      tl.to(logoRef.current, { y: logoLift, duration: 0.6, ease: "power2.out" }, 1.2)

      // Scene 3: Headline fades in below logo
      tl.fromTo(headlineRef.current, { opacity: 0, y: headlineFromY, xPercent: -50 }, { opacity: 1, y: headlineToY, xPercent: -50, duration: 0.8, ease: "power2.out" }, 2.0)

    }, containerRef)

    return () => ctx.revert()
  }, [isMobileLayout, prefersReducedMotion])

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
        <HeroTestimonials onRefsReady={handleTestimonialRefs} isCompact={isMobileLayout} />

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
            fetchPriority="high"
            sizes="(max-width: 768px) 120px, 150px"
            className="w-[clamp(150px,20vw,280px)] h-auto"
            style={{ filter: "drop-shadow(0 0 48px rgba(255,107,53,0.22))" }}
          />
        </div>

        {/* Headline that fades in after testimonials scatter */}
        <div
          ref={headlineRef}
          className="absolute z-[20] left-1/2 bottom-[8%] sm:bottom-[10%] md:bottom-[12%] text-center px-4 sm:px-6 w-[92vw] max-w-[720px]"
        >
          <h1 className="font-heading text-[clamp(1.65rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.02em] mb-3 text-balance">
            Server Promotion That
            <br className="hidden sm:block" />
            <span className="sm:ml-0"> Actually&nbsp;Gets&nbsp;Done.</span>
          </h1>
          <p className="mx-auto text-[clamp(0.9rem,1.8vw,1.1rem)] leading-[1.65] tracking-[0.01em] text-text-muted opacity-87 max-w-[62ch]">
            We connect Minecraft and Roblox server owners with the right creators, then manage the whole campaign so you don&apos;t have to.
          </p>
        </div>
      </div>
    </section>
  )
}
