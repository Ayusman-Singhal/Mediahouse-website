"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Sheet from "@/components/ui/sheet"
import TOSContent from "@/components/legal/tos-content"
import PrivacyContent from "@/components/legal/privacy-content"

export default function Footer() {
  const [tosOpen, setTosOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)

  return (
    <>
      <footer className="w-full border-t border-white/[0.06] py-8 sm:py-10 px-6 mt-12 md:mt-0">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-center gap-3">
            <Image src="/assets/MediaHouseLogo.png" alt="MediaHouse" width={28} height={28} sizes="28px" className="w-7 h-7 object-contain" />
            <span className="font-heading text-base font-bold text-white">MediaHouse</span>
          </div>
          <nav className="flex items-center gap-5 sm:gap-6 flex-wrap justify-center">
            <Link href="/for-creators" className="text-sm text-text-muted hover:text-white transition-colors duration-200">For Creators</Link>
            <Link href="/for-server-owners" className="text-sm text-text-muted hover:text-white transition-colors duration-200">For Server Owners</Link>
            <button
              onClick={() => setTosOpen(true)}
              className="text-sm text-text-muted hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setPrivacyOpen(true)}
              className="text-sm text-text-muted hover:text-white transition-colors duration-200 cursor-pointer"
            >
              Privacy Policy
            </button>
            <a href="https://discord.gg/ybyURPe8FA" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-white transition-colors duration-200">Contact</a>
            <a href="https://discord.gg/RfQuKxgaR7" target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted hover:text-white transition-colors duration-200">Discord</a>
          </nav>
          { <div className="text-xs text-[#444]">
             <p style="font-size:12px; opacity:.6;">
              Website by <a href="https://www.arhenniuss.is-a.dev">Ayusman Singhal</a>
            </p>
          </div> }
        </div>
      </footer>

      {/* TOS Sheet */}
      <Sheet open={tosOpen} onClose={() => setTosOpen(false)} title="Terms of Service" description="Read MediaHouse's complete terms of service and user agreements">
        <TOSContent />
      </Sheet>

      {/* Privacy Policy Sheet */}
      <Sheet open={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Privacy Policy" description="Read MediaHouse's privacy policy and data protection practices">
        <PrivacyContent />
      </Sheet>
    </>
  )
}
