# Mediahouse Website

A modern web app built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**, with **Supabase** for backend services.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI / Styling:** Tailwind CSS, shadcn/ui, Radix UI, lucide-react
- **Animations:** Framer Motion, GSAP
- **Backend:** Supabase (`@supabase/supabase-js`)

## Project Structure

- `app/` – Next.js App Router routes, layouts, and pages
  - `app/page.tsx` – Home page
  - `app/layout.tsx` – Root layout
  - `app/error.tsx`, `app/loading.tsx`, `app/not-found.tsx` – App Router special files
  - `app/sitemap.ts` – Sitemap generation
  - `app/apply/`, `app/minecraft/`, `app/roblox/` – Route segments
- `components/` – Reusable UI and page components
  - `components/ui/` – UI primitives (shadcn/ui style)
  - `components/blocks/`, `components/forms/`, `components/legal/` – Feature/grouped components
- `lib/` – Shared utilities
  - `lib/supabase.ts` – Supabase client setup
  - `lib/utils.ts` – Helper utilities
- `public/` – Static assets served from the site root
- `assets/` – Project assets

## Getting Started

### Prerequisites

- Node.js installed (recommend: latest LTS)
- npm (or yarn/pnpm/bun)

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

Required variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3) Run the dev server

```bash
npm run dev
```

Then open http://localhost:3000.

## Scripts

- `npm run dev` – Start dev server (uses Turbopack)
- `npm run build` – Build for production
- `npm run start` – Run production server
- `npm run lint` – Lint the project

## Deployment

This project is ready to deploy on **Vercel**:

1. Push your repo to GitHub
2. Import it in Vercel
3. Add the same environment variables from `.env.local`
4. Deploy

## License

No license file is currently included in this repository.