# [MediaHouse](https://media-house.studio)  Managed Sponsorship Brokerage for Gaming

**[media-house.studio](https://media-house.studio)**  MediaHouse connects growth-focused game server operators with performance-driven gaming content creators across Minecraft and Roblox.

We handle creator discovery, rate negotiation, campaign structuring, and delivery  so server owners get results, and creators get paid fairly.

## What We Do

- 🎮 **[Minecraft Server Promotion](https://media-house.studio/minecraft)**  Structured sponsorship campaigns with vetted Minecraft creators
- 🟣 **[Roblox Game Advertising](https://media-house.studio/roblox)**  Awareness-driven campaigns with Roblox content creators
- 🎬 **[For Creators](https://media-house.studio/for-creators)**  Rate protection, zero outreach, multi-video deals
- 🏗️ **[For Server Owners](https://media-house.studio/for-server-owners)**  Vetted creator rosters, predictable campaign costs

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4, shadcn/ui, Radix UI
- **Animations:** Framer Motion, GSAP with ScrollTrigger
- **Backend:** Supabase
- **Deployment:** Vercel
- **SEO:** JSON-LD structured data, FAQPage schema, sitemap, IndexNow

## Project Structure

```
app/                    # Next.js App Router
├── page.tsx           # Home page
├── layout.tsx         # Root layout with SEO metadata
├── minecraft/         # Minecraft landing page
├── roblox/            # Roblox landing page
├── for-creators/      # Creator info + FAQ
├── for-server-owners/ # Server owner info + FAQ
├── apply/             # Application forms
├── api/               # API routes (form submissions)
├── sitemap.ts         # Dynamic sitemap
└── robots.ts          # Crawler config

components/
├── ui/                # Primitives (Button, Input, Card, etc.)
├── blocks/            # Page sections (Hero, Header, Footer, JSON-LD)
├── forms/             # Form components
└── legal/             # Legal content

lib/                   # Utilities (Supabase client, helpers)
```

## Getting Started

```bash
# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY

# Run dev server
npm run dev
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint check |
| `node scripts/ping-search-engines.mjs` | Notify Bing/Yandex of content updates |

## Deployment

Deployed on **[Vercel](https://vercel.com)** with automatic CI/CD from the `main` branch.

## License

All rights reserved. © MediaHouse
