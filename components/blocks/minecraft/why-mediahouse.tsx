const pillars = [
  { title: "We Negotiate Everything", body: "Rates, timelines, and deliverables. You review the final terms. We handle everything before that." },
  { title: "You Know What You\u2019re Getting", body: "No vague promises. Every campaign has a written brief before a single creator is contacted." },
  { title: "Your Campaigns Stay Separate", body: "Each deal is managed privately. One campaign\u2019s issues never spill into another." },
]

export default function WhyMediaHouse() {
  return (
    <section id="why" className="w-full py-16 sm:py-24 md:py-30 px-6 relative bg-surface-section">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        <h2 className="font-heading text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.01em] text-center">
          Why MediaHouse
        </h2>
        <div className="h-12" />
        {/* Horizontal divider layout — no cards, no shadows, no borders */}
        <div className="flex flex-col md:flex-row md:items-start w-full gap-0">
          {pillars.map((p, i) => (
            <div key={i} className="flex-1 flex flex-col">
              {/* Divider between items (vertical on desktop, horizontal on mobile) */}
              {i > 0 && (
                <>
                  <div className="hidden md:block w-px bg-white/10 self-stretch absolute" style={{ display: 'none' }} />
                  <div className="md:hidden w-full h-px bg-white/10 my-6" />
                </>
              )}
              <div className={`py-2 md:py-0 ${i > 0 ? 'md:pl-8 md:border-l md:border-white/10' : ''} ${i < pillars.length - 1 ? 'md:pr-8' : ''}`}>
                <h3 className="font-heading text-lg font-semibold text-white mb-2 tracking-[-0.01em]">{p.title}</h3>
                <p className="text-text-muted text-sm leading-[1.65] tracking-[0.01em] opacity-87">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
