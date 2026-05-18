const cases = [
  {
    type: "Dedicated Video Promotion",
    name: "Fakepixel",
    creatorSize: "50K–100K Subscribers",
    performance: "Hit every milestone. Engagement came in above what the creator's channel average suggested.",
    status: "Completed",
  },
  {
    type: "Dedicated Video Promotion",
    name: "Clubcraft",
    creatorSize: "450k Subscribers",
    performance: "Wrapped clean. Server saw a measurable lift in both active players and store revenue.",
    status: "Completed",
  },
  {
    type: "Monthly Youtube Reward Pool",
    name: "Fakepixel",
    creatorSize: "45k Combined",
    performance: "Still running. Early numbers are tracking ahead of the projected conversion rate.",
    status: "Ongoing",
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="w-full py-16 sm:py-24 md:py-30 relative">
      {/* Full-bleed background (Fix 5c: one section breaks container constraints) */}
      <div className="absolute inset-0 bg-surface-section" />
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <h2 className="font-heading text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.01em] text-center">
          Case Studies
        </h2>
        <div className="h-12" />
        {/* Editorial cards — intentionally NOT equal height (Fix 6) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-5 md:gap-6 w-full items-start">
          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-surface-raised border border-white/[0.06] rounded-xl p-8 text-left transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1"
            >
              {/* Campaign type as small label */}
              <div className="text-xs font-medium text-text-subdued uppercase tracking-widest mb-1">{c.type}</div>
              {/* Server name as headline */}
              <div className="text-white font-heading text-lg font-bold mb-4">{c.name}</div>
              {/* Creator size */}
              <div className="text-xs font-medium text-text-subdued uppercase tracking-widest mb-1">Creator Size</div>
              <div className="text-white font-medium text-sm mb-5">{c.creatorSize}</div>
              {/* Performance as editorial sentence (not a label-value pair) */}
              <p className="text-text-muted text-sm leading-[1.65] mb-5">{c.performance}</p>
              {/* Status pill */}
              <div className={`inline-block text-xs font-semibold rounded-full px-3 py-1 ${
                c.status === "Ongoing"
                  ? "text-brand bg-[rgba(255,107,53,0.08)] border border-[rgba(255,107,53,0.2)]"
                  : "text-success bg-[rgba(46,204,113,0.08)] border border-[rgba(46,204,113,0.2)]"
              }`}>
                {c.status}
              </div>
            </div>
          ))}
        </div>
        <div className="h-12" />
        <div className="text-center">
          <a
            href="https://discord.gg/RfQuKxgaR7" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-transparent px-8 py-3.5 font-heading text-[0.95rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
          >
            Request Full Case Study
          </a>
        </div>
      </div>
    </section>
  )
}
