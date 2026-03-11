import type { Metadata } from "next"
import SuccessLayout from "@/components/forms/success-layout"

export const metadata: Metadata = {
  title: "Campaign Submitted - MediaHouse",
  description: "Your campaign request has been submitted. Join our Discord to get started.",
}

export default function ServerOwnerSuccessPage() {
  return (
    <SuccessLayout
      title="Campaign Request Submitted"
      description="Thank you for submitting your campaign request. Our team will review your details, evaluate the budget, and reach out with a tailored creator shortlist. Join our Discord for faster communication."
    />
  )
}
