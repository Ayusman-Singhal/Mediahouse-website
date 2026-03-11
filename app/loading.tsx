export default function Loading() {
  return (
    <main className="min-h-screen bg-background px-6 pt-24 text-foreground">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 py-12">
        <div className="h-10 w-64 animate-pulse rounded-md bg-white/8" />
        <div className="h-5 w-full max-w-[720px] animate-pulse rounded-md bg-white/6" />
        <div className="h-5 w-full max-w-[680px] animate-pulse rounded-md bg-white/6" />
        <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="h-40 animate-pulse rounded-xl border border-white/8 bg-white/4" />
          <div className="h-40 animate-pulse rounded-xl border border-white/8 bg-white/4" />
        </div>
      </div>
    </main>
  )
}
