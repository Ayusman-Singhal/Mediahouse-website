const pillars = [
  { title: "Controlled Negotiation", body: "All sponsorship terms handled centrally." },
  { title: "Structured Execution", body: "Clear deliverables before launch." },
  { title: "Isolated Campaigns", body: "Each deal privately managed." },
]

export default function WhyMediaHouse() {
  return (
    <section id="why" className="w-full py-16 sm:py-24 md:py-30 px-6 relative">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
        <h2 className="font-heading text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.01em]">
          Why MediaHouse
        </h2>
        <div className="h-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-5 md:gap-6 w-full">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="bg-[#161616] border border-white/[0.06] rounded-xl p-10 text-center transition-all duration-300 hover:border-white/[0.12] hover:-translate-y-1"
            >
              <h3 className="font-heading text-lg font-semibold text-white mb-3 tracking-[-0.01em]">{p.title}</h3>
              <p className="text-text-muted text-sm leading-[1.65] tracking-[0.01em] opacity-87">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
