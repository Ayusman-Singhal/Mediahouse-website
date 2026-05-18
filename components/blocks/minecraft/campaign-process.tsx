const steps = [
  { num: "01", title: "You Submit a Campaign Request" },
  { num: "02", title: "We Review Your Budget and Goals" },
  { num: "03", title: "We Shortlist Creators Who Fit Your Audience" },
  { num: "04", title: "Negotiation and Deliverable Scoping" },
  { num: "05", title: "Both Sides Sign Off" },
  { num: "06", title: "Campaign Goes Live" },
  { num: "07", title: "We Send You a Performance Report" },
]

export default function CampaignProcess() {
  return (
    <section id="process" className="w-full py-16 sm:py-24 md:py-30 px-6 relative">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
        <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.15] -tracking-wide">
          Campaign Management, Start to Finish
        </h2>
        <div className="h-12" />
        <div className="flex flex-col gap-0 w-full max-w-xl">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className="font-heading text-sm font-bold text-brand w-8 shrink-0 pt-0.5">
                {step.num}
              </div>
              <div className="flex flex-col items-center shrink-0">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-brand to-brand-secondary" />
                {i < steps.length - 1 && <div className="w-px h-10 bg-white/10" />}
              </div>
              <div className="font-body text-text-muted text-base text-left pt-0.5">
                {step.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
