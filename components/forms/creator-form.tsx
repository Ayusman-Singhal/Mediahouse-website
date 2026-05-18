"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Sheet from "@/components/ui/sheet"
import TOSContent from "@/components/legal/tos-content"
import FormError from "@/components/forms/form-error"
import { ButtonLoading } from "@/components/ui/loading-indicator"

function isValidProfileUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return parsed.protocol === "http:" || parsed.protocol === "https:"
  } catch {
    return false
  }
}

export default function CreatorForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"error" | null>(null)
  const [errorMessage, setErrorMessage] = useState("")
  const [tosOpen, setTosOpen] = useState(false)

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    youtube_url: "",
    avg_views: "",
    content_type: "",
    audience_location: "",
    agrees_tos: false,
    discord_username: "",
    game_type: "",
  })

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    // Client-side validation
    if (!formData.full_name || !formData.email || !formData.youtube_url || !formData.discord_username || !formData.game_type) {
      toast.error("Please fill all required fields.")
      setSubmitStatus("error")
      setErrorMessage("Please fill all required fields.")
      return
    }

    if (!isValidProfileUrl(formData.youtube_url)) {
      toast.error("Please enter a valid profile or channel URL.")
      setSubmitStatus("error")
      setErrorMessage("Please enter a valid profile or channel URL.")
      return
    }

    if (!formData.agrees_tos) {
      toast.error("You must agree to the Terms of Service.")
      setSubmitStatus("error")
      setErrorMessage("You must agree to the Terms of Service.")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/apply/creator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.full_name,
          email: formData.email,
          youtube_url: formData.youtube_url,
          avg_views: formData.avg_views,
          content_type: formData.content_type,
          audience_location: formData.audience_location,
          agrees_tos: formData.agrees_tos,
          discord_username: formData.discord_username,
          game_type: formData.game_type,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Show each validation error as a separate toast
        if (data.errors && Array.isArray(data.errors)) {
          data.errors.forEach((err: { field: string; message: string }) => {
            toast.error(err.message)
          })
          setErrorMessage(data.message || "Please check your input and try again.")
        } else {
          toast.error(data.message || "Submission failed. Please try again.")
          setErrorMessage(data.message || "Submission failed. Please try again.")
        }
        setSubmitStatus("error")
      } else {
        toast.success("Application submitted successfully! Redirecting...")
        router.push("/apply/creator/success")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("An unexpected error occurred. Please try again later.")
      setSubmitStatus("error")
      setErrorMessage("An unexpected error occurred. Please try again later.")
    }

    setIsSubmitting(false)
  }

  return (
    <form className="flex flex-col gap-5 sm:gap-6 md:gap-7" onSubmit={handleSubmit}>
      {submitStatus === "error" && <FormError message={errorMessage} />}

      <div className="flex flex-col gap-2">
        <Label htmlFor="game_type" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Game <span className="text-brand">*</span>
        </Label>
        <select
          id="game_type"
          value={formData.game_type}
          onChange={(e) => handleChange("game_type", e.target.value)}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none cursor-pointer"
        >
          <option value="" disabled>Select a game</option>
          <option value="minecraft">Minecraft</option>
          <option value="roblox">Roblox</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="full_name" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Full Name <span className="text-brand">*</span>
        </Label>
        <Input
          id="full_name"
          type="text"
          value={formData.full_name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("full_name", e.target.value)}
          placeholder="Your full name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Email <span className="text-brand">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)}
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="youtube_url" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Channel or Profile URL <span className="text-brand">*</span>
        </Label>
        <Input
          id="youtube_url"
          type="url"
          value={formData.youtube_url}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("youtube_url", e.target.value)}
          placeholder="https://tiktok.com/@yourhandle"
        />
        <p className="text-[0.75rem] sm:text-xs text-text-subdued">TikTok, Twitch, Instagram, YouTube, and other platforms are accepted</p>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="avg_views" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Average Views <span className="text-text-subdued text-[0.75rem] sm:text-xs font-normal">(long-form preferred)</span>
        </Label>
        <Input
          id="avg_views"
          type="number"
          value={formData.avg_views}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("avg_views", e.target.value)}
          placeholder="e.g. 50000"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="content_type" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Content Type <span className="text-text-subdued text-[0.75rem] sm:text-xs font-normal">(optional)</span>
        </Label>
        <Input
          id="content_type"
          type="text"
          value={formData.content_type}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("content_type", e.target.value)}
          placeholder="SMP, PvP, Modded, Variety"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="audience_location" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Audience Location <span className="text-text-subdued text-[0.75rem] sm:text-xs font-normal">(optional)</span>
        </Label>
        <Input
          id="audience_location"
          type="text"
          value={formData.audience_location}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("audience_location", e.target.value)}
          placeholder="US, EU, India, Global"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="discord_username" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Discord Username <span className="text-brand">*</span>
        </Label>
        <Input
          id="discord_username"
          type="text"
          value={formData.discord_username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("discord_username", e.target.value)}
          placeholder="username or username#1234"
        />
      </div>

      <div className="flex items-center gap-3">
        <Checkbox
          id="agrees_tos"
          checked={formData.agrees_tos}
          onCheckedChange={(checked: boolean) => handleChange("agrees_tos", checked)}
          className="border-white/20 data-[state=checked]:bg-brand data-[state=checked]:border-brand"
        />
        <Label htmlFor="agrees_tos" className="text-[0.8125rem] sm:text-sm text-text-muted cursor-pointer">
          I agree to the{" "}
          <button
            type="button"
            onClick={() => setTosOpen(true)}
            className="text-brand underline underline-offset-2 hover:text-brand-secondary transition-colors cursor-pointer"
          >
            Terms of Service
          </button>
          {" "}<span className="text-brand">*</span>
        </Label>
      </div>

      <Sheet open={tosOpen} onClose={() => setTosOpen(false)} title="Terms of Service" description="Read MediaHouse's complete terms of service and user agreements">
        <TOSContent />
      </Sheet>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-2 bg-gradient-to-br from-brand to-brand-secondary text-white font-heading font-semibold py-5 sm:py-6 rounded-lg text-[0.9375rem] sm:text-base hover:-translate-y-px transition-all duration-250 disabled:opacity-60"
        aria-busy={isSubmitting}
      >
        <ButtonLoading isLoading={isSubmitting} loadingText="Submitting...">
          Submit Application
        </ButtonLoading>
      </Button>
    </form>
  )
}
