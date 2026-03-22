import type { Metadata } from "next"
import Link from "next/link"
import Footer from "@/components/blocks/footer"

export const metadata: Metadata = {
  title: "How to Promote Your Minecraft Server or Roblox Game | MediaHouse",
  description:
    "Learn how to promote your Minecraft server or Roblox game by hiring YouTubers. MediaHouse is the premier influencer marketing agency for gaming.",
  openGraph: {
    title: "How to Promote Your Minecraft Server | MediaHouse For Game Owners",
    description: "Learn how to promote your Minecraft server or Roblox game by hiring YouTubers. Get high-ROI creator campaigns.",
    url: "https://media-house.studio/for-server-owners",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promote Your Minecraft Server or Roblox Game | MediaHouse",
    description: "Hire vetted gaming creators for structured, performance-driven promotion campaigns. High-ROI influencer marketing for game owners.",
  },
  alternates: {
    canonical: "https://media-house.studio/for-server-owners",
  },
  keywords: ["how to promote my Minecraft server", "hire YouTubers for game promotion", "gaming influencer marketing agency", "Roblox game advertising", "Minecraft server marketing", "Minecraft server promotion cost", "hire gaming influencers"]
}

const faqItems = [
  {
    question: "How much does a creator campaign cost?",
    answer: "Campaign costs depend on the creator's audience size, the scope of deliverables (dedicated video, integration, stream), and the campaign length. We work with a range of budgets and will recommend creators that match your investment level."
  },
  {
    question: "What types of creators does MediaHouse work with?",
    answer: "Our roster includes YouTube, Twitch, and TikTok creators who specialize in Minecraft and Roblox content. We vet every creator for engagement quality, audience demographics, and content professionalism before they join our roster."
  },
  {
    question: "How quickly can a campaign launch?",
    answer: "Most campaigns can be matched and briefed within a few days of submission. The total timeline depends on the creator's content schedule, but campaigns typically go live within 1-3 weeks of initial contact."
  },
  {
    question: "Do you guarantee deliverables?",
    answer: "Yes. Every campaign runs under a structured contract with clearly defined deliverables. We manage quality assurance and ensure creators deliver exactly what was agreed upon — on time."
  },
  {
    question: "What kind of ROI can I expect?",
    answer: "ROI varies by game type, creator match, and campaign goals. Our campaigns are structured around performance metrics — whether that's concurrent players, Discord joins, or store revenue. We provide full analytics after each campaign."
  },
  {
    question: "Can I choose which creators promote my game?",
    answer: "Absolutely. We present you with creator options that match your game's niche and budget. You approve every creator before a campaign begins. We handle the negotiation and logistics from there."
  }
]

export default function ForServerOwnersPage() {
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
    <main className="min-h-screen bg-[#0F0F0F] text-white selection:bg-[#00D1FF]/30 flex flex-col pt-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24 max-w-[1000px] mx-auto w-full text-center">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-balance">
          Stop Wasting Ad Spend on Low-Converting Traffic
        </h1>
        <p className="text-xl text-text-muted mb-10 max-w-2xl mx-auto">
          Partner with top-tier gaming creators for structured, performance-driven campaigns that drive engaged players directly to your game.
        </p>
        <Link 
          href="/apply/server-owner" 
          className="inline-block bg-[#00D1FF] hover:bg-[#33DAFF] text-black px-8 py-4 rounded-full font-bold transition-all"
        >
          Submit a Campaign
        </Link>
      </section>

      {/* Content Section */}
      <section className="px-6 py-16 bg-white/[0.02] border-y border-white/[0.05]">
        <div className="max-w-[800px] mx-auto w-full prose prose-invert lg:prose-lg font-body text-[#B0B0B0]">
          <h2 className="text-white font-heading font-bold text-3xl mb-6">How to promote your Minecraft server or Roblox game</h2>
          <p className="mb-6 leading-relaxed">
            In today&apos;s crowded gaming market, simply launching a server or experience isn&apos;t enough. Traditional server lists 
            and generic ad platforms deliver low-retention players. The most effective way to build an engaged community is 
            through <strong>gaming influencer marketing</strong>. By hiring YouTubers and TikTokers to play your game, you 
            leverage their pre-established trust and engaged audience. Explore our{" "}
            <Link href="/minecraft" className="text-[#00D1FF] hover:underline">Minecraft</Link> and{" "}
            <Link href="/roblox" className="text-[#00D1FF] hover:underline">Roblox</Link> campaign options.
          </p>
          
          <h3 className="text-white font-heading font-bold text-2xl mt-10 mb-4">Why traditional outreach fails</h3>
          <p className="mb-4 leading-relaxed">
            Many server owners attempt to cold-email creators directly. This often results in:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-3">
            <li>Being ignored in packed inboxes</li>
            <li>Overpaying for creators who don&apos;t convert</li>
            <li>Deals falling through due to poor communication or lack of contracts</li>
            <li>Creators failing to deliver on agreed-upon deliverables</li>
          </ul>

          <h3 className="text-white font-heading font-bold text-2xl mt-10 mb-4">The MediaHouse Advantage</h3>
          <p className="mb-6 leading-relaxed">
            As a specialized <strong>gaming sponsorship agency</strong>, we remove the friction from creator marketing. We maintain an 
            exclusive roster of high-performing Minecraft and Roblox creators whose audiences actively convert into players.
          </p>
          <p className="mb-6 leading-relaxed">
            When you launch a campaign with us, we handle the creator matching, rate negotiation, script approvals, and QA. 
            You only pay for guaranteed deliverables. We structure our deals around performance, ensuring your marketing budget 
            generates actual ROI, whether that&apos;s measured in concurrent players, discord joins, or store purchases.
          </p>

          <p className="mt-8">
            Ready to scale your playerbase with predictable results? 
            <Link href="/apply/server-owner" className="text-[#00D1FF] hover:underline ml-2">Submit your campaign details today.</Link>
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
                  <span className="ml-4 text-[#00D1FF] text-xl transition-transform group-open:rotate-45 shrink-0">+</span>
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
