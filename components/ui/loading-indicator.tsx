"use client"

import { cn } from "@/lib/utils"

interface LoadingIndicatorProps {
  /**
   * Size of the loading indicator
   * @default "md"
   */
  size?: "sm" | "md" | "lg"
  /**
   * Color variant
   * @default "current"
   */
  color?: "current" | "white" | "brand"
  /**
   * Whether to show label text
   * @default false
   */
  showLabel?: boolean
  /**
   * Label text
   * @default "Loading..."
   */
  label?: string
  /**
   * Additional className
   */
  className?: string
}

/**
 * Accessible loading indicator
 * Uses aria-busy and aria-live for screen reader support
 */
function LoadingIndicator({
  size = "md",
  color = "current",
  showLabel = false,
  label = "Loading...",
  className,
}: LoadingIndicatorProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-8 w-8",
  }

  const colorClasses = {
    current: "text-current",
    white: "text-white",
    brand: "text-brand",
  }

  return (
    <span
      className={cn("inline-flex items-center gap-2", className)}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <svg
        className={cn("animate-spin", sizeClasses[size], colorClasses[color])}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      {showLabel && (
        <span className="text-sm">{label}</span>
      )}
      <span className="sr-only">{label}</span>
    </span>
  )
}

/**
 * Button loading state wrapper
 * Shows spinner inside button during loading
 */
function ButtonLoading({
  children,
  isLoading,
  loadingText = "Loading...",
}: {
  children: React.ReactNode
  isLoading: boolean
  loadingText?: string
}) {
  if (!isLoading) return <>{children}</>

  return (
    <>
      <LoadingIndicator size="sm" />
      <span className="ml-2">{loadingText}</span>
    </>
  )
}

/**
 * Full page loading overlay
 * Use sparingly, only for major transitions
 */
function FullPageLoader({
  message = "Loading...",
  className,
}: {
  message?: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm",
        className
      )}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center gap-4">
        <LoadingIndicator size="lg" color="brand" />
        <p className="text-text-muted">{message}</p>
      </div>
    </div>
  )
}

export { LoadingIndicator, ButtonLoading, FullPageLoader }
