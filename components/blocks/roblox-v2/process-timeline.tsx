"use client"

import { motion } from "framer-motion"
import { Search, Users, Rocket, LineChart } from "lucide-react"

const steps = [
  {
    icon: <Search className="w-6 h-6 text-brand" />,
    title: "Campaign Brief & Strategy",
    description: "Define scope, budget, and creator profile requirements.",
    accent: "from-brand to-brand-secondary"
  },
  {
    icon: <Users className="w-6 h-6 text-brand-purple" />,
    title: "Creator Shortlist & Pitch",
    description: "Identify and pitch vetted creators aligned with your audience.",
    accent: "from-brand-secondary to-brand-purple"
  },
  {
    icon: <Rocket className="w-6 h-6 text-brand-purple-dark" />,
    title: "Negotiation & Launch",
    description: "Close terms and brief creators on campaign deliverables.",
    accent: "from-brand-purple to-brand-purple-dark"
  },
  {
    icon: <LineChart className="w-6 h-6 text-brand" />,
    title: "Performance Reporting",
    description: "Track results and deliver transparent performance insights.",
    accent: "from-brand to-brand-secondary"
  }
]

export default function ProcessTimeline() {
  return (
    <section className="w-full py-24 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Mission Control
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            A streamlined four-step operational flow designed to keep Roblox campaigns predictable and performance-led.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line for Desktop */}
          <div className="hidden md:block absolute top-[44px] left-[12%] right-[12%] h-[2px] bg-white/10" />
          
          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex flex-col items-center md:items-start text-center md:text-left group"
              >
                {/* Connecting lines logic for mobile */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-[88px] bottom-[-32px] left-1/2 w-[2px] -translate-x-1/2 bg-white/10" />
                )}

                <div className="flex w-full justify-center md:justify-start md:pl-8 lg:pl-12 mb-6">
                  {/* Node */}
                  <div className="w-[88px] h-[88px] rounded-full bg-surface-card border border-white/10 shadow-lg flex items-center justify-center relative z-10 group-hover:border-white/20 transition-all">
                    {/* Minimal hover glow */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.accent} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    {step.icon}
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-0 right-1/2 md:right-auto md:left-[108px] lg:left-[124px] translate-x-1/2 md:translate-x-0 w-6 h-6 rounded-full bg-[#1A1A2E] border border-white/20 text-xs font-bold flex items-center justify-center text-white/70 z-20 shadow-md">
                    {index + 1}
                  </div>
                </div>

                <div className="px-2 md:px-0">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
