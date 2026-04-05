"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const NAV_LINKS = [
  { label: "Minecraft", href: "/minecraft" },
  { label: "Roblox", href: "/roblox" },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] px-6 transition-all duration-350 border-b border-transparent",
          scrolled && "bg-[rgba(15,15,15,0.85)] backdrop-blur-[12px] border-b-[rgba(255,255,255,0.06)]"
        )}
      >
        <nav className="max-w-7xl mx-auto h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            }}
            className="flex items-center gap-2.5 no-underline shrink-0"
          >
            <Image
              src="/assets/MediaHouseLogo.png"
              alt="MediaHouse"
              width={32}
              height={32}
              priority
              sizes="32px"
              className="w-8 h-8 object-contain"
            />
            <span className="font-heading text-[1.1rem] font-bold text-white tracking-tight">MediaHouse</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-semibold transition-colors duration-200 tracking-tight",
                    "after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:transition-all after:duration-250",
                    isActive
                      ? "text-white after:w-full after:bg-brand"
                      : "text-text-muted hover:text-white after:w-0 after:bg-white hover:after:w-full"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="ctaPrimary" size="ctaSm" className="duration-250 hover:shadow-[0_4px_20px_rgba(255,107,53,0.25)]">
              <Link href="/apply/server-owner">Submit Campaign</Link>
            </Button>
            <Button asChild variant="ctaOutline" size="ctaSm" className="duration-250 hover:border-white/35 hover:bg-white/[0.04] hover:translate-y-0">
              <Link href="/apply/creator">Apply as Creator</Link>
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={cn(
              "flex md:hidden flex-col justify-center gap-[5px] w-7 h-7 bg-transparent border-none cursor-pointer p-0 z-[1001]"
            )}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={cn(
              "block w-full h-0.5 bg-white rounded-sm transition-all duration-300 origin-center",
              mobileOpen && "translate-y-[7px] rotate-45"
            )} />
            <span className={cn(
              "block w-full h-0.5 bg-white rounded-sm transition-all duration-300",
              mobileOpen && "opacity-0 scale-x-0"
            )} />
            <span className={cn(
              "block w-full h-0.5 bg-white rounded-sm transition-all duration-300 origin-center",
              mobileOpen && "-translate-y-[7px] -rotate-45"
            )} />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-[999] bg-[rgba(15,15,15,0.97)] backdrop-blur-[20px] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-350",
          mobileOpen && "opacity-100 pointer-events-auto"
        )}
      >
        <div className="flex flex-col items-center gap-12">
          <div className="flex flex-col items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-[1.4rem] font-semibold transition-colors duration-200 -tracking-tight",
                    isActive ? "text-white" : "text-text-muted hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          <div className="flex flex-col gap-3.5 w-full max-w-[280px]">
            <Button
              asChild
              variant="ctaOutline"
              size="cta"
              className="w-full rounded-md px-6 py-3 duration-250 hover:border-white/35 hover:translate-y-0"
            >
              <Link href="/apply/creator" onClick={() => setMobileOpen(false)}>
                Apply as Creator
              </Link>
            </Button>
            <Button
              asChild
              variant="ctaPrimary"
              size="cta"
              className="w-full rounded-md px-6 py-3 duration-250 hover:-translate-y-px hover:shadow-[0_4px_20px_rgba(255,107,53,0.25)]"
            >
              <Link href="/apply/server-owner" onClick={() => setMobileOpen(false)}>
                Submit Campaign
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
