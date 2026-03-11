import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background px-6 text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-[760px] flex-col items-center justify-center text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">404</p>
        <h1 className="mb-4 font-heading text-[clamp(2rem,6vw,3rem)] font-bold leading-tight text-white">
          Page Not Found
        </h1>
        <p className="mb-8 text-base leading-relaxed text-text-muted">
          The page you requested does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-secondary px-8 py-3.5 font-heading text-[0.95rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.3)]"
        >
          Return Home
        </Link>
      </div>
    </main>
  )
}
