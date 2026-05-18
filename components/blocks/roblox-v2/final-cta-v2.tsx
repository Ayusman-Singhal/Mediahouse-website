"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, MessageSquareText } from "lucide-react"
import Link from "next/link"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { cn } from "@/lib/utils"
import { useMounted } from "@/lib/use-mounted"

export default function FinalCTAV2() {
  const m = useMounted()
  return (
    <section className="w-full py-24 bg-background relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-background z-0" />
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-20%] h-[140%] skew-y-6",
          "fill-brand stroke-brand/20 pointer-events-none"
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-0 pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
           initial={m ? { opacity: 0, scale: 0.98 } : false}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="bg-surface-card/80 border border-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-16 shadow-xl relative overflow-hidden"
        >
          {/* Subtle Shine effect */}
          <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-30deg] animate-[shine_8s_infinite] pointer-events-none" />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Ready for Liftoff
          </h2>
          <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            Start your Roblox campaign today. Choose your path and we'll handle the rest.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Button asChild variant="ctaPrimary" size="cta" className="h-14 px-8 w-full sm:w-auto flex items-center justify-center">
              <Link href="/apply/server-owner">Submit Campaign</Link>
            </Button>
            <Link href="/apply/creator" className="text-sm font-medium text-white/60 underline underline-offset-4 hover:text-white transition-colors duration-200">or apply as a creator</Link>
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-2 text-sm text-text-muted">
             <MessageSquareText className="w-4 h-4" />
             <span>Have questions? <a href="https://discord.gg/ybyURPe8FA" target="_blank" rel="noopener noreferrer" className="text-white hover:underline underline-offset-4 font-heading font-medium tracking-wide">Join our Discord server</a></span>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes shine {
          0% { left: -100%; opacity: 0; }
          10% { opacity: 1; }
          20% { left: 200%; opacity: 0; }
          100% { left: 200%; opacity: 0; }
        }
      `}</style>
    </section>
  )
}
