export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://media-house.studio/#organization",
    name: "MediaHouse",
    alternateName: "Media House Studio",
    url: "https://media-house.studio",
    logo: {
      "@type": "ImageObject",
      url: "https://media-house.studio/assets/MediaHouseLogo.png",
      width: 512,
      height: 512,
      caption: "MediaHouse Logo",
    },
    image: "https://media-house.studio/og-image.jpg",
    description:
      "MediaHouse is a managed sponsorship brokerage connecting gaming creators with game owners across Minecraft and Roblox. We handle negotiation, campaign structuring, and professional delivery.",
    knowsAbout: [
      "Gaming sponsorships",
      "Influencer marketing",
      "Minecraft server promotion",
      "Roblox game advertising",
      "Creator management",
      "Campaign management",
    ],
    sameAs: [
      "https://discord.gg/ybyURPe8FA",
      "https://discord.gg/RfQuKxgaR7",
    ],
    serviceType: "Gaming Sponsorship Brokerage",
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://media-house.studio/#website",
    name: "MediaHouse",
    url: "https://media-house.studio",
    description:
      "Managed sponsorship brokerage for Minecraft, Roblox, and gaming creators.",
    publisher: {
      "@id": "https://media-house.studio/#organization",
    },
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://media-house.studio/#service",
    name: "Gaming Creator Sponsorship Management",
    description:
      "End-to-end sponsorship management for gaming creators and game owners. We match Minecraft and Roblox creators with server/game owners, negotiate rates, structure campaigns, and guarantee deliverables.",
    provider: {
      "@id": "https://media-house.studio/#organization",
    },
    serviceType: "Sponsorship Brokerage",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Gaming Sponsorship Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Creator Representation",
            description:
              "Rate protection, sponsorship negotiation, and campaign delivery for Minecraft and Roblox content creators.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Campaign Management for Game Owners",
            description:
              "Hire vetted gaming creators for structured, performance-driven promotion campaigns for Minecraft servers and Roblox games.",
          },
        },
      ],
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://media-house.studio",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Minecraft",
        item: "https://media-house.studio/minecraft",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Roblox",
        item: "https://media-house.studio/roblox",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "For Creators",
        item: "https://media-house.studio/for-creators",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "For Server Owners",
        item: "https://media-house.studio/for-server-owners",
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}
