"use client"

import { useEffect, useState } from "react"

/**
 * Returns true once the component has mounted on the client.
 *
 * Use with Framer Motion to prevent `initial={{ opacity: 0 }}` from
 * baking `opacity:0` into the SSR HTML  which hides content from
 * search-engine crawlers (both Bing and Google).
 *
 * @example
 * const mounted = useMounted()
 * <motion.div initial={mounted ? { opacity: 0, y: 20 } : false} ... />
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  return mounted
}
