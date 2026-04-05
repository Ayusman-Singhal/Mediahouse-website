"use client"

import { cn } from "@/lib/utils"

/**
 * SEO-Safe Skeleton Component
 *
 * Best practices for SEO:
 * 1. Don't use skeletons for above-the-fold critical content
 * 2. Content should always be server-rendered in the HTML
 * 3. Skeletons should only show during hydration/interaction
 * 4. Use loading.tsx for route-level loading states
 * 5. Add aria-busy="true" during loading states
 */

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Width of the skeleton element
   * Can be any valid CSS width value
   * @default "100%"
   */
  width?: string | number
  /**
   * Height of the skeleton element
   * Can be any valid CSS height value
   * @default "1rem"
   */
  height?: string | number
  /**
   * Whether to show a shimmer animation
   * @default true
   */
  shimmer?: boolean
  /**
   * Border radius of the skeleton
   * @default "0.5rem"
   */
  borderRadius?: string
  /**
   * Custom className for additional styling
   */
  className?: string
}

/**
 * Basic skeleton element with shimmer animation
 * Use for inline loading states where content will replace it
 */
function Skeleton({
  width = "100%",
  height = "1rem",
  shimmer = true,
  borderRadius = "0.5rem",
  className,
  style,
  ...props
}: SkeletonProps) {
  return (
    <div
      className={cn(
        "bg-white/10",
        shimmer && "animate-pulse",
        className
      )}
      style={{
        width,
        height,
        borderRadius,
        ...style,
      }}
      aria-hidden="true"
      {...props}
    />
  )
}

/**
 * Skeleton for text content
 * Creates a multi-line text skeleton with varying widths
 */
function TextSkeleton({
  lines = 3,
  lineHeight = "1rem",
  gap = "0.5rem",
  lastLineWidth = "60%",
  className,
}: {
  lines?: number
  lineHeight?: string
  gap?: string
  lastLineWidth?: string
  className?: string
}) {
  return (
    <div
      className={cn("flex flex-col", className)}
      style={{ gap }}
      aria-hidden="true"
    >
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          height={lineHeight}
          width={i === lines - 1 ? lastLineWidth : "100%"}
          borderRadius="0.25rem"
        />
      ))}
    </div>
  )
}

/**
 * Skeleton for cards
 * Includes header, content, and optional footer areas
 */
function CardSkeleton({
  hasHeader = true,
  hasFooter = false,
  lines = 3,
  className,
}: {
  hasHeader?: boolean
  hasFooter?: boolean
  lines?: number
  className?: string
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-card p-6",
        className
      )}
      aria-hidden="true"
    >
      {hasHeader && (
        <div className="mb-4 flex items-center gap-4">
          <Skeleton width="2.5rem" height="2.5rem" borderRadius="9999px" />
          <div className="flex-1">
            <Skeleton width="60%" height="1rem" className="mb-2" />
            <Skeleton width="40%" height="0.75rem" />
          </div>
        </div>
      )}

      <TextSkeleton lines={lines} lineHeight="0.875rem" gap="0.5rem" />

      {hasFooter && (
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
          <Skeleton width="30%" height="1rem" />
          <Skeleton width="20%" height="1rem" />
        </div>
      )}
    </div>
  )
}

/**
 * Skeleton for form inputs
 * Use in form loading states
 */
function FormSkeleton({
  fields = 4,
  className,
}: {
  fields?: number
  className?: string
}) {
  return (
    <div className={cn("space-y-5", className)} aria-hidden="true">
      {Array.from({ length: fields }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton width="30%" height="0.875rem" />
          <Skeleton width="100%" height="2.5rem" borderRadius="0.5rem" />
        </div>
      ))}
      <Skeleton width="100%" height="3rem" borderRadius="0.5rem" className="mt-4" />
    </div>
  )
}

/**
 * Skeleton for image placeholders
 * Maintains aspect ratio to prevent layout shift
 */
function ImageSkeleton({
  aspectRatio = "16 / 9",
  className,
}: {
  aspectRatio?: string
  className?: string
}) {
  return (
    <div
      className={cn("relative overflow-hidden bg-white/5", className)}
      style={{ aspectRatio }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 animate-pulse bg-white/10" />
      {/* Placeholder icon area */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          className="h-12 w-12 text-white/20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </div>
    </div>
  )
}

/**
 * Wrapper to show skeleton during loading states
 * Content should always be server-rendered
 */
function SkeletonContainer({
  children,
  isLoading,
  skeleton,
  className,
}: {
  children: React.ReactNode
  isLoading: boolean
  skeleton: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("relative", className)} aria-busy={isLoading}>
      {/* Always render content for SEO, hide visually when loading */}
      <div className={cn(isLoading && "invisible")}>{children}</div>
      {/* Show skeleton overlay when loading */}
      {isLoading && (
        <div className="absolute inset-0 bg-background">{skeleton}</div>
      )}
    </div>
  )
}

export {
  Skeleton,
  TextSkeleton,
  CardSkeleton,
  FormSkeleton,
  ImageSkeleton,
  SkeletonContainer,
}
