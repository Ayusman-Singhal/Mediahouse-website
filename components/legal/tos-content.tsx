import React from "react"

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="border-t border-white/[0.06] pt-4">
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      {children}
    </div>
  )
}

export default function TOSContent() {
  return (
    <div className="space-y-6">
      <p className="text-neutral-400 text-xs">Effective Date: March 2026</p>
      <p>
        These Terms of Service (&quot;Terms&quot;) govern the use of MediaHouse
        (&quot;MediaHouse,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a managed sponsorship intermediary
        platform connecting gaming server owners and content creators.
      </p>
      <p>
        By accessing, applying to, or participating in MediaHouse services, you
        agree to be bound by these Terms. If you do not agree, you must not use
        MediaHouse.
      </p>

      <Section title="1. Nature of Services">
        <p>
          MediaHouse operates exclusively as a sponsorship intermediary and
          campaign management service between Gaming Server Owners (&quot;Server
          Owners&quot;) and Content Creators (&quot;Creators&quot;).
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Manages business communications related to campaigns</li>
          <li>Controls official sponsorship email routing</li>
          <li>Negotiates and structures campaign terms</li>
          <li>Collects campaign payments from Server Owners</li>
          <li>Deducts commission</li>
          <li>Distributes payments to Creators</li>
        </ul>
        <p className="mt-2">
          MediaHouse acts as an independent intermediary and is not an employer,
          joint venture partner, or legal representative of either party.
        </p>
      </Section>

      <Section title="2. Eligibility">
        <p>You must:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Be at least 18 years old</li>
          <li>Have legal capacity to enter binding agreements</li>
          <li>Provide accurate and truthful information</li>
          <li>Not be suspended or banned from MediaHouse</li>
        </ul>
        <p className="mt-2">
          MediaHouse reserves the right to verify identity and business
          legitimacy at any time.
        </p>
      </Section>

      <Section title="3. Payment Structure">
        <p>Payment flow unless otherwise agreed:</p>
        <p className="font-semibold text-white mt-2">
          Server Owner → MediaHouse → Creator
        </p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Collects full payment upfront</li>
          <li>Deducts commission</li>
          <li>Releases remaining funds after fulfillment</li>
        </ul>
        <p className="mt-2">
          Refund decisions are made at MediaHouse&apos;s sole discretion.
        </p>
      </Section>

      <Section title="4. Non-Circumvention">
        <p>
          Any collaboration introduced by MediaHouse is protected. Both parties
          agree not to bypass MediaHouse to avoid commission during active
          campaigns and for 12 months following introduction.
        </p>
        <p className="mt-2">
          Violation may result in termination, recovery of lost commission, and
          legal action.
        </p>
      </Section>

      <Section title="5. Limitation of Liability">
        <p>MediaHouse is not liable for:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Loss of revenue</li>
          <li>Algorithm changes</li>
          <li>Third-party platform actions</li>
          <li>Indirect or consequential damages</li>
        </ul>
        <p className="mt-2">
          Maximum liability is limited to the commission earned from the
          disputed campaign.
        </p>
      </Section>

      <Section title="6. Governing Law">
        <p>
          These Terms are governed by the laws of India. Disputes fall under the
          jurisdiction where MediaHouse operates.
        </p>
      </Section>

      <Section title="7. Acceptance">
        <p>
          By using MediaHouse, you acknowledge that you have read, understood,
          and agree to these Terms.
        </p>
      </Section>
    </div>
  )
}
