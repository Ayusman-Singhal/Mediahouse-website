"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import Sheet from "@/components/ui/sheet"
import TOSContent from "@/components/legal/tos-content"
import FormError from "@/components/forms/form-error"

export default function ServerOwnerForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"error" | null>(null)
  const [errorMessage, setErrorMessage] = useState("")

  const [tosOpen, setTosOpen] = useState(false)

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    server_name: "",
    server_type: "",
    campaign_budget: "",
    campaign_goal: "",
    timezone: "",
    server_ip: "",
    discord_link: "",
    agrees_tos: false,
    game_type: "",
  })

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (
      !formData.full_name ||
      !formData.email ||
      !formData.server_name ||
      !formData.server_type ||
      !formData.campaign_budget ||
      !formData.campaign_goal ||
      !formData.server_ip ||
      !formData.discord_link ||
      !formData.game_type
    ) {
      setSubmitStatus("error")
      setErrorMessage("Please fill all required fields.")
      return
    }

    if (!formData.agrees_tos) {
      setSubmitStatus("error")
      setErrorMessage("You must agree to the Terms of Service.")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    if (!supabase) {
      setSubmitStatus("error")
      setErrorMessage("Service not configured. Please contact support.")
      setIsSubmitting(false)
      return
    }

    const { error } = await supabase.from("server_owners").insert([
      {
        full_name: formData.full_name,
        email: formData.email,
        server_name: formData.server_name,
        server_type: formData.server_type,
        campaign_budget: Number(formData.campaign_budget),
        campaign_goal: formData.campaign_goal,
        timezone: formData.timezone || null,
        server_ip: formData.server_ip,
        discord_link: formData.discord_link,
        agrees_tos: formData.agrees_tos,
        game_type: formData.game_type,
      },
    ])

    if (error) {
      console.error(error)
      setSubmitStatus("error")
      setErrorMessage("Submission failed. Please try again.")
    } else {
      router.push("/apply/server-owner/success")
    }

    setIsSubmitting(false)
  }

  return (
    <form className="flex flex-col gap-5 sm:gap-6 md:gap-7" onSubmit={handleSubmit}>
      {submitStatus === "error" && <FormError message={errorMessage} />}

      <div className="flex flex-col gap-2">
        <Label htmlFor="so_game_type" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Game <span className="text-brand">*</span>
        </Label>
        <select
          id="so_game_type"
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
        <Label htmlFor="so_full_name" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Full Name <span className="text-brand">*</span>
        </Label>
        <Input
          id="so_full_name"
          type="text"
          value={formData.full_name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("full_name", e.target.value)}
          placeholder="Your full name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="so_email" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Email <span className="text-brand">*</span>
        </Label>
        <Input
          id="so_email"
          type="email"
          value={formData.email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)}
          placeholder="you@example.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="so_server_name" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Server Name <span className="text-brand">*</span>
        </Label>
        <Input
          id="so_server_name"
          type="text"
          value={formData.server_name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("server_name", e.target.value)}
          placeholder="Your Minecraft server name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="so_server_type" className="font-heading text-sm font-semibold text-white">
          Server Type <span className="text-brand">*</span>
        </Label>
        <Input
          id="so_server_type"
          type="text"
          value={formData.server_type}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("server_type", e.target.value)}
          placeholder="SMP, PvP, Modded, Network"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="so_campaign_budget" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Campaign Budget (USD) <span className="text-brand">*</span>
        </Label>
        <Input
          id="so_campaign_budget"
          type="number"
          value={formData.campaign_budget}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("campaign_budget", e.target.value)}
          placeholder="e.g. 500"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="so_campaign_goal" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Campaign Goal <span className="text-brand">*</span>
        </Label>
        <Input
          id="so_campaign_goal"
          type="text"
          value={formData.campaign_goal}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("campaign_goal", e.target.value)}
          placeholder="Increase players, brand awareness, new launch..."
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="so_timezone" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Timezone <span className="text-text-subdued text-[0.75rem] sm:text-xs font-normal">(optional)</span>
        </Label>
        <Input
          id="so_timezone"
          type="text"
          value={formData.timezone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("timezone", e.target.value)}
          placeholder="UTC+5:30, EST, PST"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="so_server_ip" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Server IP <span className="text-brand">*</span>
        </Label>
        <Input
          id="so_server_ip"
          type="text"
          value={formData.server_ip}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("server_ip", e.target.value)}
          placeholder="play.yourserver.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="so_discord_link" className="font-heading text-[0.8125rem] sm:text-sm font-semibold text-white">
          Discord Server Link <span className="text-brand">*</span>
        </Label>
        <Input
          id="so_discord_link"
          type="url"
          value={formData.discord_link}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange("discord_link", e.target.value)}
          placeholder="https://discord.gg/RfQuKxgaR7"
        />
      </div>

      <div className="flex items-center gap-3">
        <Checkbox
          id="so_agrees_tos"
          checked={formData.agrees_tos}
          onCheckedChange={(checked: boolean) => handleChange("agrees_tos", checked)}
          className="border-white/20 data-[state=checked]:bg-brand data-[state=checked]:border-brand"
        />
        <Label htmlFor="so_agrees_tos" className="text-[0.8125rem] sm:text-sm text-text-muted cursor-pointer">
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
        className="w-full mt-2 bg-gradient-to-br from-brand to-brand-secondary text-white font-heading font-semibold py-5 sm:py-6 rounded-lg text-[0.9375rem] sm:text-base hover:shadow-[0_6px_24px_rgba(255,107,53,0.3)] hover:-translate-y-px transition-all duration-250 disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Submit Campaign Request"}
      </Button>
    </form>
  )
}
