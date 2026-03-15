export default function AuthoritySection() {
  return (
    <section id="authority" className="relative w-full overflow-hidden px-6 py-16 sm:py-24 md:py-30">
      <div className="pointer-events-none absolute left-[-12%] top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-brand/12 blur-[100px]" />
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
            MediaHouse Authority Layer
          </p>
          <h2 className="font-heading text-[clamp(1.9rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.01em]">
            A Managed Sponsorship Brokerage Built for Roblox Growth Teams
          </h2>
          <p className="mt-6 max-w-2xl text-[clamp(0.95rem,2vw,1.125rem)] leading-[1.72] tracking-[0.01em] text-text-muted opacity-90">
            We are a managed sponsorship broker—not an open marketplace. Every Roblox campaign is scoped, negotiated, and executed with clear accountability.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <div className="rounded-2xl border border-white/8 bg-[#17171d] p-6">
            <div className="text-[0.7rem] uppercase tracking-[0.12em] text-text-subdued">Engagement Focus</div>
            <div className="mt-2 font-heading text-2xl font-extrabold text-white">Quality First</div>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">Campaigns optimized for high-LTV players and sustained engagement, not vanity metrics.</p>
          </div>
          <div className="rounded-2xl border border-white/8 bg-[#17171d] p-6">
            <div className="text-[0.7rem] uppercase tracking-[0.12em] text-text-subdued">Operations Model</div>
            <div className="mt-2 font-heading text-2xl font-extrabold text-white">Fully Managed</div>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">From strategy through reporting, we handle creator partnerships end-to-end.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
