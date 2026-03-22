import type { Metadata } from "next"
import Link from "next/link"
import Footer from "@/components/blocks/footer"

export const metadata: Metadata = {
  title: "How to Get Paid Gaming Sponsorships | MediaHouse For Creators",
  description:
    "Learn how to get paid promotions for your YouTube or Twitch gaming channel. MediaHouse helps Minecraft and Roblox creators land high-paying sponsorships.",
  openGraph: {
    title: "How to Get Paid Gaming Sponsorships | MediaHouse For Creators",
    description: "Learn how to get paid promotions for your YouTube or Twitch gaming channel. Full-service representation for Minecraft and Roblox creators.",
    url: "https://media-house.studio/for-creators",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get Paid Gaming Sponsorships | MediaHouse",
    description: "Learn how to get paid promotions for your YouTube or Twitch gaming channel. Full-service representation for Minecraft and Roblox creators.",
  },
  alternates: {
    canonical: "https://media-house.studio/for-creators",
  },
  keywords: ["how to get paid promotions as a YouTuber", "gaming creator sponsorship opportunities", "get sponsored for gaming content", "how to make money as a Minecraft YouTuber", "Roblox sponsorships for creators", "gaming sponsorship agency for creators", "YouTuber sponsorship rates"]
}

const faqItems = [
  {
    question: "How much do gaming sponsorships pay?",
    answer: "Sponsorship rates vary based on your channel size, engagement rate, and content niche. Minecraft and Roblox creators on the MediaHouse roster typically earn competitive market rates for dedicated videos, integrations, and streams. We ensure rate protection so you never undercharge."
  },
  {
    question: "What platforms does MediaHouse support?",
    answer: "We work with creators who produce content on YouTube, Twitch, and TikTok. Our campaigns primarily focus on Minecraft and Roblox games, connecting creators with server owners and game developers."
  },
  {
    question: "Do I need a minimum subscriber count to apply?",
    answer: "We evaluate creators based on multiple factors including engagement rate, content quality, and audience demographics — not just subscriber count. Creators of various sizes are welcome to apply."
  },
  {
    question: "How long does it take to get matched with a sponsor?",
    answer: "Once accepted to the roster, matching depends on active campaign availability and your channel's fit. Some creators receive their first brief within days, while others may wait for the right campaign match."
  },
  {
    question: "How does MediaHouse protect my rates?",
    answer: "We track market rates across the Minecraft and Roblox creator space. When we negotiate on your behalf, we ensure the rate reflects your channel's true value based on views, engagement, and conversion potential."
  },
  {
    question: "Do I have to accept every sponsorship offer?",
    answer: "No. You have full control over which campaigns you accept. We send you a brief with the game details and rate — if it's not a fit, you simply decline. No obligations."
  }
]

export default function ForCreatorsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  }

  return (
    <main className="min-h-screen bg-[#0F0F0F] text-white selection:bg-[#FF6B35]/30 flex flex-col pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-[1000px] mx-auto w-full text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-balance">
          Stop Stressing Over Sponsorship Negotiations
        </h1>
        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          We handle the emails, the contracts, and the rate negotiation, so you can focus on what you do best: creating content for your audience.
        </p>
        <Link 
          href="/apply/creator" 
          className="inline-block bg-[#FF6B35] hover:bg-[#FF8559] text-white px-8 py-4 rounded-full font-bold transition-all"
        >
          Apply for Representation
        </Link>
      </section>

      {/* Content Section */}
      <section className="px-6 py-16 bg-white/[0.02] border-y border-white/[0.05]">
        <div className="max-w-[800px] mx-auto w-full prose prose-invert lg:prose-lg font-body text-[#B0B0B0]">
          <h2 className="text-white font-heading font-bold text-3xl mb-6">How to get paid promotions as a YouTuber</h2>
          <p className="mb-6 leading-relaxed">
            Finding high-quality gaming sponsorship opportunities can be time-consuming. From filtering out scam emails to figuring out what your 
            channel is actually worth, the process is exhausting. At MediaHouse, we specialize in <strong>Minecraft sponsorships</strong> and 
            <strong> Roblox game advertising</strong>, matching top creators with premium game owners across our{" "}
            <Link href="/minecraft" className="text-[#FF6B35] hover:underline">Minecraft</Link> and{" "}
            <Link href="/roblox" className="text-[#FF6B35] hover:underline">Roblox</Link> campaigns.
          </p>
          
          <h3 className="text-white font-heading font-bold text-2xl mt-10 mb-4">Why work with a gaming sponsorship agency?</h3>
          <ul className="list-disc pl-6 mb-8 space-y-3">
            <li><strong>Rate Protection:</strong> We know the market rates. We ensure you never undercharge for a dedicated video, integration, or stream.</li>
            <li><strong>Vetted Partners:</strong> Every server owner and Roblox dev we work with is fully vetted. No more worrying about delayed payments or abandoned projects.</li>
            <li><strong>Long-term Deals:</strong> We prioritize structured, multi-video campaigns that provide you with stable, predictable revenue.</li>
            <li><strong>Zero Outreach:</strong> You don&apos;t have to pitch yourself. We bring the deals directly to your inbox.</li>
          </ul>

          <h3 className="text-white font-heading font-bold text-2xl mt-10 mb-4">How our process works</h3>
          <p className="mb-6 leading-relaxed">
            Getting sponsored for gaming content shouldn&apos;t be complicated. Once you&apos;re accepted into the MediaHouse roster, we immediately begin matching 
            your channel demographics with our active campaigns. When there&apos;s a fit, we send you a simple brief. If you like the game and the rate, you accept. 
            We handle the contract, you make the video, and we guarantee the payment.
          </p>

          <p className="mt-8">
            Ready to turn your channel into a predictable business? 
            <Link href="/apply/creator" className="text-[#FF6B35] hover:underline ml-2">Apply to join the MediaHouse roster today.</Link>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-16 md:py-20">
        <div className="max-w-[800px] mx-auto w-full">
          <h2 className="text-white font-heading font-bold text-3xl mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group border border-white/[0.08] rounded-xl bg-white/[0.02] overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-heading font-semibold text-white text-lg hover:bg-white/[0.03] transition-colors">
                  {item.question}
                  <span className="ml-4 text-[#FF6B35] text-xl transition-transform group-open:rotate-45 shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5 text-[#B0B0B0] leading-relaxed font-body">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      
      <div className="flex-grow"></div>
      <Footer />
    </main>
  )
}
