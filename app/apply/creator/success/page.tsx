import type { Metadata } from "next"
import SuccessLayout from "@/components/forms/success-layout"

export const metadata: Metadata = {
  title: "Application Submitted - MediaHouse",
  description: "Your creator application has been submitted. Join our Discord to get started.",
}

export default function CreatorSuccessPage() {
  return (
    <SuccessLayout
      title="Application Submitted"
      description="Thank you for applying. Our team will review your application and reach out shortly. In the meantime, join our Discord to connect with the community."
    />
  )
}
