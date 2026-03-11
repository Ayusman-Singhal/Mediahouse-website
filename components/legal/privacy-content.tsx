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

export default function PrivacyContent() {
  return (
    <div className="space-y-6">
      <p className="text-neutral-400 text-xs">Effective Date: March 2026</p>
      <p>
        MediaHouse (&quot;MediaHouse,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy
        and is committed to protecting your personal information.
      </p>
      <p>
        This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you use MediaHouse services.
      </p>

      <Section title="1. Information We Collect">
        <h4 className="font-semibold text-white mt-2">Personal Information</h4>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>Full name</li>
          <li>Email address</li>
          <li>Business contact details</li>
          <li>Payment information</li>
          <li>Government-issued identification (if verification is required)</li>
        </ul>

        <h4 className="font-semibold text-white mt-3">Creator Information</h4>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>Channel metrics</li>
          <li>Audience analytics</li>
          <li>Engagement statistics</li>
        </ul>

        <h4 className="font-semibold text-white mt-3">Server Owner Information</h4>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>Server details</li>
          <li>Business information</li>
          <li>Payment records</li>
        </ul>

        <h4 className="font-semibold text-white mt-3">Technical Data</h4>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Usage data</li>
        </ul>
      </Section>

      <Section title="2. How We Use Information">
        <p>We use collected data to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Manage sponsorship campaigns</li>
          <li>Process payments</li>
          <li>Prevent fraud</li>
          <li>Communicate with users</li>
          <li>Improve platform services</li>
          <li>Comply with legal obligations</li>
        </ul>
      </Section>

      <Section title="3. Payment Processing">
        <p>
          Payments may be processed through third-party payment providers. We do
          not store full payment card details unless required for compliance.
        </p>
      </Section>

      <Section title="4. Data Sharing">
        <p>We do not sell personal data.</p>
        <p className="mt-2">We may share information:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Between Creators and Server Owners as necessary for campaigns</li>
          <li>With payment processors</li>
          <li>With legal authorities if required by law</li>
          <li>To protect MediaHouse&apos;s legal rights</li>
        </ul>
      </Section>

      <Section title="5. Data Security">
        <p>
          We implement reasonable technical and organizational measures to
          protect your data. However, no system can guarantee absolute security.
        </p>
      </Section>

      <Section title="6. Data Retention">
        <p>We retain data as long as necessary to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Fulfill contractual obligations</li>
          <li>Resolve disputes</li>
          <li>Comply with legal requirements</li>
        </ul>
      </Section>

      <Section title="7. Your Rights">
        <p>Subject to applicable law, you may:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Request access to your data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Withdraw consent where applicable</li>
        </ul>
        <p className="mt-2">
          Requests may be submitted through official MediaHouse contact
          channels.
        </p>
      </Section>

      <Section title="8. Changes to This Policy">
        <p>
          We may update this Privacy Policy at any time. Continued use of
          MediaHouse constitutes acceptance of updates.
        </p>
      </Section>

      <Section title="9. Governing Law">
        <p>This Privacy Policy is governed by the laws of India.</p>
      </Section>
    </div>
  )
}
