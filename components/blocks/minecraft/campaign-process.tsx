const steps = [
  { num: "01", title: "You Submit a Campaign Request", milestone: true },
  { num: "02", title: "We Review Your Budget and Goals", milestone: false },
  { num: "03", title: "We Shortlist Creators Who Fit Your Audience", milestone: false },
  { num: "04", title: "Negotiation and Deliverable Scoping", milestone: true },
  { num: "05", title: "Both Sides Sign Off", milestone: false },
  { num: "06", title: "Campaign Goes Live", milestone: false },
  { num: "07", title: "We Send You a Performance Report", milestone: true },
]

export default function CampaignProcess() {
  return (
    <section id="process" className="w-full py-16 sm:py-24 md:py-30 px-6 relative bg-surface-section">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
        <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[1.15] -tracking-wide">
          Campaign Management, Start to Finish
        </h2>
        <div className="h-12" />
        <div className="flex flex-col gap-0 w-full max-w-xl">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-6">
              <div className={`font-heading shrink-0 pt-0.5 w-8 ${step.milestone ? 'text-base font-extrabold text-brand' : 'text-sm font-bold text-brand/50'}`}>
                {step.num}
              </div>
              <div className="flex flex-col items-center shrink-0">
                <div className={`rounded-full bg-gradient-to-br from-brand to-brand-secondary ${step.milestone ? 'w-4 h-4' : 'w-3 h-3 opacity-50'}`} />
                {i < steps.length - 1 && <div className={`w-px bg-white/10 ${step.milestone ? 'h-12' : 'h-10'}`} />}
              </div>
              <div className={`font-body text-left pt-0.5 ${step.milestone ? 'text-white text-base font-medium' : 'text-text-muted text-base'}`}>
                {step.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
