import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { z } from "zod"
import DOMPurify from "isomorphic-dompurify"

// Rate limiting store (in-memory, resets on deploy)
// WARNING: For production with multiple instances or serverless functions,
// use Redis or a database-backed solution instead of in-memory storage
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_WINDOW = 3600000 // 1 hour in milliseconds
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

// Input sanitization helper using DOMPurify
function sanitizeInput(input: string): string {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  })
    .trim()
    .slice(0, 1000) // Limit length
}

const serverOwnerSchema = z.object({
  full_name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  server_name: z.string().min(2, "Server name is required").max(200),
  server_type: z.string().min(2, "Server type is required").max(100),
  campaign_budget: z.string().min(1, "Campaign budget is required"),
  campaign_goal: z.string().min(10, "Please describe your campaign goals").max(1000),
  timezone: z.string().max(50).optional().or(z.literal("")),
  server_ip: z.string().min(3, "Server IP/address is required").max(200),
  discord_link: z.string().url("Please enter a valid Discord link").max(500),
  game_type: z.enum(["minecraft", "roblox"]).refine((val) => val !== undefined, {
    message: "Please select a valid game",
  }),
  agrees_tos: z.boolean().refine((val) => val === true, {
    message: "You must agree to the Terms of Service",
  }),
})

type ServerOwnerFormData = z.infer<typeof serverOwnerSchema>

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
    const validationResult = serverOwnerSchema.safeParse(body)

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

    const data: ServerOwnerFormData = validationResult.data

    // Sanitize inputs
    const sanitizedData = {
      full_name: sanitizeInput(data.full_name),
      email: sanitizeInput(data.email.toLowerCase()),
      server_name: sanitizeInput(data.server_name),
      server_type: sanitizeInput(data.server_type),
      campaign_budget: Number(data.campaign_budget.replace(/[^0-9.]/g, "")),
      campaign_goal: sanitizeInput(data.campaign_goal),
      timezone: data.timezone ? sanitizeInput(data.timezone) : null,
      server_ip: sanitizeInput(data.server_ip),
      discord_link: sanitizeInput(data.discord_link),
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
    const { error: dbError } = await supabase.from("server_owners").insert([sanitizedData])

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
      console.error("Server owner form submission error:", error)
    }
    return NextResponse.json(
      { error: "Server error", message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    )
  }
}
