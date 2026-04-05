import { FormSkeleton } from "@/components/ui/skeleton"

/**
 * Server owner application form loading state
 * Search crawlers see the actual content, not this loading state
 */
export default function ServerOwnerLoading() {
  return (
    <main className="min-h-screen bg-[#0F0F0F] px-6 pt-24 sm:pt-28 md:pt-30">
      <div className="mx-auto max-w-[640px] pb-16 sm:pb-20">
        {/* Title */}
        <div className="mb-8 sm:mb-12">
          <div className="mb-4 h-10 w-4/5 animate-pulse rounded bg-white/10" />
          <div className="h-5 w-full animate-pulse rounded bg-white/10" />
        </div>

        {/* Form skeleton - server owner form has more fields */}
        <FormSkeleton fields={10} />
      </div>
    </main>
  )
}
