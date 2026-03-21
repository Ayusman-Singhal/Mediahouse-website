"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import Image from "next/image"
import DataConnector from "./data-connector"
import styles from "./hero-bridge.module.css"
import { Button } from "@/components/ui/button"
import { Particles } from "@/components/ui/particles"

gsap.registerPlugin(ScrollTrigger)

type LayoutMode = "desktop" | "stacked" | "mobile"

function getLayoutMode(viewportWidth: number): LayoutMode {
  if (viewportWidth <= 768) return "mobile"
  if (viewportWidth <= 860) return "stacked"
  return "desktop"
}

export default function HeroBridge() {
  const containerRef = useRef<HTMLElement>(null)
  const introGlowRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const introHintRef = useRef<HTMLDivElement>(null)
  const gridPatternRef = useRef<HTMLDivElement>(null)
  const serverIslandRef = useRef<HTMLDivElement>(null)
  const creatorIslandRef = useRef<HTMLDivElement>(null)
  const bridgeRef = useRef<HTMLDivElement>(null)
  const serverTextRef = useRef<HTMLDivElement>(null)
  const creatorTextRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const scrollTargetTimeoutRef = useRef<number | null>(null)
  const [layoutMode, setLayoutMode] = useState<LayoutMode | null>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  const isStackedLayout = layoutMode === "stacked" || layoutMode === "mobile"
  const isMobileLayout = layoutMode === "mobile"

  useEffect(() => {
    let frameId = 0

    const updateLayout = () => {
      const nextLayoutMode = getLayoutMode(window.innerWidth)
      setLayoutMode((currentLayoutMode) => currentLayoutMode === nextLayoutMode ? currentLayoutMode : nextLayoutMode)
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
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateReducedMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches)

    updateReducedMotionPreference()

    mediaQuery.addEventListener("change", updateReducedMotionPreference)
    return () => mediaQuery.removeEventListener("change", updateReducedMotionPreference)
  }, [])

  useEffect(() => {
    if (layoutMode === null) return

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        const decorativeElements = [
          introGlowRef.current,
          logoRef.current,
          introHintRef.current,
          gridPatternRef.current,
          serverIslandRef.current,
          creatorIslandRef.current,
          serverTextRef.current,
          creatorTextRef.current,
          bridgeRef.current,
        ].filter((element): element is HTMLDivElement => element !== null)

        if (decorativeElements.length) {
          gsap.set(decorativeElements, { autoAlpha: 0 })
        }

        if (overlayRef.current) {
          gsap.set(overlayRef.current, { 
            autoAlpha: 1, 
            y: 0,
            top: "50%",
            bottom: "auto",
            yPercent: -50
          })
        }

        return
      }

      const scrollDistance = isMobileLayout ? 5400 : isStackedLayout ? 5000 : 4600
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: isStackedLayout ? 1 : 0.85,
          anticipatePin: 1,
        },
      })

      // Scene 2: Logo scene fades out
      tl.to(introGlowRef.current, { opacity: 0, scale: 1.18, duration: 0.8, ease: "power2.inOut" }, 0)
      tl.to(logoRef.current, { opacity: 0, y: -24, scale: 0.9, filter: "blur(9px)", duration: 0.85, ease: "power2.inOut" }, 0.1)
      tl.to(introHintRef.current, { opacity: 0, y: 18, duration: 0.6, ease: "power2.in" }, 0.25)
      tl.to(gridPatternRef.current, { opacity: 0.05, duration: 0.95, ease: "power2.inOut" }, 0.2)

      // Scene 3: Server Owner island slides in + text appears
      tl.fromTo(
        serverIslandRef.current,
        isMobileLayout ? { x: "-100vw", opacity: 0 } : { x: -220, y: 24, scale: 0.92, opacity: 0 },
        { x: 0, y: 0, scale: isMobileLayout ? 1 : 1.06, opacity: 1, duration: 1.35, ease: "power3.out" },
        1.15
      )
      tl.fromTo(
        serverTextRef.current,
        { x: 56, opacity: 0, filter: "blur(10px)" },
        { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.95, ease: "power2.out" },
        1.5
      )

      // Scene 4: Server island + text fade away
      tl.to(serverTextRef.current, { opacity: 0, x: 44, filter: "blur(10px)", duration: 0.7, ease: "power2.in" }, 3.8)
      tl.to(serverIslandRef.current, { opacity: 0, x: isMobileLayout ? "-100vw" : -140, y: 16, scale: 0.98, duration: 0.85, ease: "power2.in" }, 3.95)

      // Scene 5: Creator island slides in + text appears
      tl.fromTo(
        creatorIslandRef.current,
        isMobileLayout ? { x: "100vw", opacity: 0 } : { x: 220, y: 24, scale: 0.92, opacity: 0 },
        { x: 0, y: 0, scale: isMobileLayout ? 1 : 1.06, opacity: 1, duration: 1.35, ease: "power3.out" },
        4.9
      )
      tl.fromTo(
        creatorTextRef.current,
        { x: -56, opacity: 0, filter: "blur(10px)" },
        { x: 0, opacity: 1, filter: "blur(0px)", duration: 0.95, ease: "power2.out" },
        5.25
      )

      // Scene 6: Creator text & island fade out
      tl.to(creatorTextRef.current, { opacity: 0, x: -44, filter: "blur(10px)", duration: 0.7, ease: "power2.in" }, 7.4)
      tl.to(creatorIslandRef.current, { opacity: 0, x: isMobileLayout ? "100vw" : 140, y: 16, scale: 0.98, duration: 0.85, ease: "power2.in" }, 7.55)

      // Scene 7: Data connector reveal (with built-in islands now perfectly scaled)
      if (!isStackedLayout) {
        const getConnectorTargets = (selector: string) => Array.from(bridgeRef.current?.querySelectorAll(selector) ?? [])
        const connectorNodes = getConnectorTargets(".connector-node")
        const connectorLanes = getConnectorTargets(".connector-lane")
        const connectorCore = bridgeRef.current?.querySelector(".connector-core")
        const connectorPackets = getConnectorTargets(".connector-packet")

        if (connectorNodes.length || connectorLanes.length || connectorCore) {
          tl.set(bridgeRef.current, { opacity: 1 }, 8.4)
          if (connectorNodes.length) {
            tl.set(connectorNodes, { transformOrigin: "50% 50%" })
            tl.fromTo(connectorNodes, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.85, stagger: 0.15, ease: "back.out(1.5)" }, 8.6)
          }
          if (connectorLanes.length) {
            tl.fromTo(connectorLanes, { opacity: 0, y: 14, scaleY: 0.92 }, { opacity: 1, y: 0, scaleY: 1, duration: 0.42, stagger: 0.07, ease: "power2.out" }, 9.2)
          }
          if (connectorCore) {
            tl.fromTo(connectorCore, { opacity: 0, scale: 0.74, filter: "blur(10px)" }, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 0.5, ease: "power2.out" }, 8.97)
          }
          if (connectorPackets.length) {
            tl.fromTo(connectorPackets, { opacity: 0 }, { opacity: 1, duration: 0.25, stagger: 0.05, ease: "power1.out" }, 9.33)
          }
        }
      } else {
        tl.fromTo(bridgeRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }, 8.6)
      }

      // Fade out connector before overlay
      tl.to(bridgeRef.current, { opacity: 0, y: 18, duration: 0.45, ease: "power2.in" }, 11.4)

      // Final overlay
      tl.set(overlayRef.current, { top: "50%", bottom: "auto", yPercent: -50 }, 0)
      tl.fromTo(overlayRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, 11.75)

      // After GSAP pin spacer is set up, handle cross-page scroll target
      ScrollTrigger.refresh()
      const scrollTarget = sessionStorage.getItem("scrollTarget")
      if (scrollTarget) {
        sessionStorage.removeItem("scrollTarget")
        // Wait a tick for layout to finalize after refresh
        scrollTargetTimeoutRef.current = window.setTimeout(() => {
          const target = document.querySelector(scrollTarget)
          if (target) {
            const top = target.getBoundingClientRect().top + window.scrollY - 80
            window.scrollTo({ top, behavior: "smooth" })
          }
        }, 150)
      }
    }, containerRef)

    return () => {
      if (scrollTargetTimeoutRef.current !== null) {
        window.clearTimeout(scrollTargetTimeoutRef.current)
        scrollTargetTimeoutRef.current = null
      }
      ctx.revert()
    }
  }, [isMobileLayout, isStackedLayout, layoutMode, prefersReducedMotion])

  return (
    <section ref={containerRef} className={styles.heroContainer}>
      <div className={styles.heroViewport}>
        <div ref={gridPatternRef} className={styles.gridPattern} aria-hidden="true" />
        <div ref={introGlowRef} className={styles.introGlow} aria-hidden="true" />
        <Particles
          className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none z-[1]"
          quantity={80}
          ease={70}
          size={1}
          staticity={40}
          color="#10B981"
          refresh
        />

        {/* Intro panel */}
        <div ref={logoRef} className={styles.logoWrapper}>
          <h1 className={styles.heroTitle}>Structured Sponsorships for the Minecraft Ecosystem</h1>
          <p className={styles.heroBody}>
            Professional campaign brokerage for creators and server owners. We manage negotiation,
            campaign structuring, and delivery oversight end to end.
          </p>
          <div className={styles.heroActions}>
            <Button asChild variant="ctaPrimary" size="cta" className="duration-300">
              <Link href="/apply/creator">Apply as Creator</Link>
            </Button>
            <Button asChild variant="ctaOutline" size="cta" className="duration-300">
              <Link href="/apply/server-owner">Submit Campaign</Link>
            </Button>
          </div>
          <div className={styles.logoSeal}>
            <Image src="/assets/MediaHouseLogo.png" alt="MediaHouse Logo" width={92} height={92} priority sizes="92px" className={styles.heroLogo} />
          </div>
        </div>

        <div ref={introHintRef} className={styles.scrollHint} aria-hidden="true">
          Scroll to follow the sponsorship pipeline
        </div>

        {/* Server Owner Island + Text */}
        <div ref={serverIslandRef} className={styles.islandLeft}>
          <Image src="/assets/server-owner-island.png" alt="Server Owner Island" width={400} height={400} sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 400px" className={styles.islandImage} />
          <div className={styles.islandLabel}>Server Owners</div>
        </div>
        <div ref={serverTextRef} className={styles.textRight}>
          <p className={styles.sectionEyebrow}>For server operators</p>
          <h2 className={styles.sectionTitle}>Server Owners</h2>
          <p className={styles.sectionBody}>Access vetted gaming creators, structured campaign execution, defined deliverables, and centralized negotiation management.</p>
          <p className={styles.sectionBody}>Grow your server with professional sponsorship campaigns managed from start to finish.</p>
        </div>

        {/* Creator Island + Text */}
        <div ref={creatorIslandRef} className={styles.islandRight}>
          <Image src="/assets/creator-island.png" alt="Creator Island" width={400} height={400} sizes="(max-width: 768px) 280px, (max-width: 1024px) 360px, 400px" className={styles.islandImage} />
          <div className={styles.islandLabel}>Creators</div>
        </div>
        <div ref={creatorTextRef} className={styles.textLeft}>
          <p className={styles.sectionEyebrow}>For gaming creators</p>
          <h2 className={styles.sectionTitle}>Creators</h2>
          <p className={styles.sectionBody}>Creator Management and Talent Sourcing, Direct sponsorship negotiation, rate protection, campaign structuring, and business communication management.</p>
          <p className={styles.sectionBody}>Focus on creating - we handle the business side.</p>
        </div>

        {/* Data Connector (replaces old bridge) */}
        <div ref={bridgeRef} className="absolute inset-0 z-[4]" style={{ opacity: 0 }}>
          <DataConnector isVertical={Boolean(isStackedLayout)} />
        </div>

        {/* Final Overlay */}
        <div ref={overlayRef} className={styles.overlay}>
          <h1 className="font-heading text-[clamp(2rem,6vw,4.5rem)] font-extrabold leading-[1.1] tracking-[-0.02em] mb-4 opacity-100">
            Structured Sponsorships for Gaming Creators &amp; Server Owners
          </h1>
          <p className="text-[clamp(0.95rem,2vw,1.125rem)] leading-[1.65] tracking-[0.01em] text-text-muted mb-7 opacity-87">
            MediaHouse manages negotiation, execution, and campaign delivery from start to finish.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button asChild variant="ctaPrimary" size="cta" className="duration-300">
              <Link href="/apply/creator">Apply as Creator</Link>
            </Button>
            <Button asChild variant="ctaOutline" size="cta" className="duration-300">
              <Link href="/apply/server-owner">Submit Campaign</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
