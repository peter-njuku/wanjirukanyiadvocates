"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema, type ContactFormData, sanitizeInput } from "@/lib/form-validation"

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [lastSubmission, setLastSubmission] = useState<number>(0)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      legalMatter: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    const now = Date.now()
    const timeSinceLastSubmission = now - lastSubmission
    const rateLimitMs = 5 * 60 * 1000 // 5 minutes

    if (timeSinceLastSubmission < rateLimitMs) {
      const remainingTime = Math.ceil((rateLimitMs - timeSinceLastSubmission) / 1000 / 60)
      form.setError("root", {
        message: `Please wait ${remainingTime} minutes before submitting another message.`,
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const sanitizedData = {
        ...data,
        firstName: sanitizeInput(data.firstName),
        lastName: sanitizeInput(data.lastName),
        email: sanitizeInput(data.email),
        phone: data.phone ? sanitizeInput(data.phone) : "",
        message: sanitizeInput(data.message),
      }

      // Simulate form submission (in real implementation, this would be an API call)
      console.log("[v0] Secure form submission:", sanitizedData)

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // For demo purposes, we'll show success
      setSubmitStatus("success")
      setLastSubmission(now)
      form.reset()
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitStatus("error")
      form.setError("root", {
        message: "Failed to send message. Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    form,
    isSubmitting,
    submitStatus,
    onSubmit: form.handleSubmit(onSubmit),
  }
}
