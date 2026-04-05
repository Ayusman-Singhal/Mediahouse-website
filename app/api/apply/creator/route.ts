import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { z } from "zod"

// Rate limiting store (in-memory, resets on deploy)
// WARNING: For production with multiple instances or serverless functions,
// use Redis or a database-backed solution instead of in-memory storage
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW = 60000 // 60 seconds in milliseconds
const MAX_SUBMISSIONS = 3

function checkRateLimit(identifier: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now()
  const entry = rateLimitMap.get(identifier)

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return { allowed: true }
  }

  if (entry.count >= MAX_SUBMISSIONS) {
    const retryAfter = Math.ceil((entry.resetTime - now) / 1000)
    return { allowed: false, retryAfter }
  }

  entry.count += 1
  return { allowed: true }
}

// Lightweight input sanitizer — strips HTML tags without needing jsdom
function sanitizeInput(input: string): string {
  return input
    .replace(/<[^>]*>/g, "") // Strip HTML tags
    .replace(/[<>]/g, "")    // Remove any remaining angle brackets
    .trim()
    .slice(0, 1000) // Limit length
}

const creatorSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  youtube_url: z.string().url("Please enter a valid URL").max(500),
  avg_views: z.string().optional().or(z.literal("")),
  content_type: z.string().optional().or(z.literal("")),
  audience_location: z.string().optional().or(z.literal("")),
  discord_username: z.string().min(2, "Discord username is required").max(100),
  game_type: z.enum(["minecraft", "roblox"]).refine((val) => val !== undefined, {
    message: "Please select a valid game",
  }),
  agrees_tos: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Service",
  }),
})

type CreatorFormData = z.infer<typeof creatorSchema>

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for")
    const clientIp = forwardedFor?.split(",")[0]?.trim() || "unknown"
    const userAgent = request.headers.get("user-agent") || ""
    const rateLimitKey = `${clientIp}:${userAgent.slice(0, 50)}`

    // Check rate limit
    const rateLimitCheck = checkRateLimit(rateLimitKey)
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        {
          error: "Too many submissions",
          message: `Please wait before submitting again. Retry after ${rateLimitCheck.retryAfter} seconds.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimitCheck.retryAfter),
          },
        }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validationResult = creatorSchema.safeParse(body)

    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }))

      return NextResponse.json(
        {
          error: "Validation failed",
          message: "Please check your input and try again",
          errors,
        },
        { status: 400 }
      )
    }

    const data: CreatorFormData = validationResult.data

    // Sanitize inputs
    const sanitizedData = {
      full_name: sanitizeInput(data.full_name),
      email: sanitizeInput(data.email.toLowerCase()),
      youtube_url: sanitizeInput(data.youtube_url),
      avg_views: data.avg_views ? Number(data.avg_views.replace(/[^0-9]/g, "")) : null,
      content_type: data.content_type ? sanitizeInput(data.content_type) : null,
      audience_location: data.audience_location ? sanitizeInput(data.audience_location) : null,
      discord_username: sanitizeInput(data.discord_username),
      game_type: data.game_type,
      agrees_tos: data.agrees_tos,
    }

    // Validate Supabase environment variables
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: "Service unavailable", message: "Configuration error. Please try again later." },
        { status: 503 }
      )
    }

    // Insert into Supabase
    const supabase = createClient(supabaseUrl, supabaseKey)
    const { error: dbError } = await supabase.from("creators").insert([sanitizedData])

    if (dbError) {
      return NextResponse.json(
        { error: "Database error", message: "Failed to save application. Please try again later." },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
      },
      { status: 200 }
    )
  } catch (error) {
    // Log error only in development
    if (process.env.NODE_ENV === "development") {
      console.error("Creator form submission error:", error)
    }
    return NextResponse.json(
      { error: "Server error", message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    )
  }
}
