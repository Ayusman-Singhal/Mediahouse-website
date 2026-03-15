"use client"

import { motion } from "framer-motion"

const steps = [
  {
    num: "01",
    title: "Campaign Brief & Strategy",
    desc: "Define scope, budget, and creator profile requirements.",
    accent: "from-brand to-brand-secondary",
  },
  {
    num: "02",
    title: "Creator Shortlist & Pitch",
    desc: "Identify and pitch vetted creators aligned with your audience.",
    accent: "from-brand-secondary to-brand-purple",
  },
  {
    num: "03",
    title: "Negotiation & Launch",
    desc: "Close terms and brief creators on campaign deliverables.",
    accent: "from-brand-purple to-brand-purple-dark",
  },
  {
    num: "04",
    title: "Performance Reporting",
    desc: "Track results and deliver transparent performance insights.",
    accent: "from-brand to-brand-secondary",
  },
]

export default function CampaignProcess() {
  return (
    <section id="process" className="relative w-full overflow-hidden px-6 py-16 sm:py-24 md:py-30">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-brand-purple/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.02em]">
              Mission Control
            </h2>
            <p className="mt-6 max-w-2xl text-sm sm:text-base leading-relaxed text-text-muted">
              A streamlined four-step operational flow designed to keep Roblox campaigns predictable and performance-led.
            </p>
          </motion.div>
        </div>

        {/* Horizontal Timeline */}
        <div className="mt-16 flex flex-col items-center">
          <div className="relative w-full">
            {/* Connector Line - Desktop Only */}
            <div className="hidden items-center justify-between md:flex">
              {steps.map((step, i) => (
                <div key={step.num} className="flex flex-1 items-center justify-center">
                  {/* Step Circle */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand bg-[#0f0f15] font-heading font-bold text-brand"
                  >
                    {step.num}
                  </motion.div>

                  {/* Connector - Hidden on Last Step */}
                  {i < steps.length - 1 && (
                    <div className="-mx-2 flex-1 border-t border-dashed border-white/20" />
                  )}
                </div>
              ))}
            </div>

            {/* Step Cards - Below Timeline */}
            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-4">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-br ${step.accent} opacity-0 blur transition duration-500 group-hover:opacity-60`} />
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#1a1a22] to-[#14141a] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20">
                    {/* Mobile Step Number */}
                    <div className="mb-4 inline-flex md:hidden items-center justify-center h-10 w-10 rounded-full border border-brand text-sm font-bold text-brand">
                      {step.num}
                    </div>

                    <h3 className="font-heading text-base font-bold leading-tight text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">{step.desc}</p>

                    {/* Progress Indicator */}
                    <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-white/30 to-transparent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
