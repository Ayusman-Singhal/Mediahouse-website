export default function AuthoritySection() {
  return (
    <section id="authority" className="w-full py-16 sm:py-24 md:py-30 px-6 relative bg-surface-section">
      <div className="max-w-[1200px] mx-auto flex flex-col items-start">
        <h2 className="font-heading text-[clamp(1.75rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-[-0.01em] opacity-100">
          A Managed Sponsorship Brokerage
        </h2>
        <div className="h-6" />
        <p className="text-[clamp(0.95rem,2vw,1.125rem)] leading-[1.65] tracking-[0.01em] text-text-muted max-w-2xl opacity-87">
          Running a Minecraft server is already a full-time job. Sourcing creators, negotiating rates,
          and chasing deliverables should not be part of it.
        </p>
        <div className="h-4" />
        <p className="text-[clamp(0.95rem,2vw,1.125rem)] leading-[1.65] tracking-[0.01em] text-text-muted max-w-2xl opacity-87">
          MediaHouse sits between you and the creator. We find the right fit, agree on the terms, and
          stay on it until the video is live and the campaign is closed.
        </p>
      </div>
    </section>
  )
}
