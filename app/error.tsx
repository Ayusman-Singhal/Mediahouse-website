"use client"

import Link from "next/link"

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="min-h-screen bg-background px-6 text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-[760px] flex-col items-center justify-center text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-error">Error</p>
        <h1 className="mb-4 font-heading text-[clamp(2rem,6vw,3rem)] font-bold leading-tight text-white">
          Something Went Wrong
        </h1>
        <p className="mb-3 text-base leading-relaxed text-text-muted">
          An unexpected error occurred while loading this page.
        </p>
        <p className="mb-8 max-w-[640px] break-words text-sm text-text-subdued">
          {error.message}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand-secondary px-8 py-3.5 font-heading text-[0.95rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(255,107,53,0.3)]"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 px-8 py-3.5 font-heading text-[0.95rem] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  )
}
