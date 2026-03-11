type FormErrorProps = {
  message: string
}

export default function FormError({ message }: FormErrorProps) {
  if (!message) return null

  return (
    <div
      role="alert"
      aria-live="polite"
      className="rounded-lg border border-[rgba(231,76,60,0.2)] bg-[rgba(231,76,60,0.08)] px-5 py-3.5 text-sm text-error"
    >
      {message}
    </div>
  )
}
