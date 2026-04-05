import { FormSkeleton } from "@/components/ui/skeleton"

/**
 * Loading state for apply routes
 * This is SEO-safe because:
 * 1. Server renders the real content
 * 2. Loading.tsx only shows during client-side navigation
 * 3. Search crawlers see the actual page, not this loading state
 */
export default function ApplyLoading() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] px-6 pt-24 sm:pt-28 md:pt-30">
      <div className="mx-auto max-w-[640px] pb-16 sm:pb-20">
        {/* Title placeholder */}
        <div className="mb-8 sm:mb-12">
          <div className="mb-4 h-8 w-3/4 animate-pulse rounded bg-white/10" />
          <div className="h-4 w-full animate-pulse rounded bg-white/10" />
        </div>

        {/* Form skeleton */}
        <FormSkeleton fields={6} />
      </div>
    </main>
  )
}
