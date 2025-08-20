import { z } from "zod"

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name contains invalid characters"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name contains invalid characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),

  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^\+?[1-9]\d{1,14}$/.test(val), {
      message: "Please enter a valid phone number",
    }),

  legalMatter: z
    .string()
    .min(1, "Please select a type of legal matter")
    .refine(
      (val) =>
        [
          "land-property",
          "succession",
          "data-protection",
          "cyberbullying",
          "employment",
          "family",
          "corporate",
          "other",
        ].includes(val),
      "Invalid legal matter selection",
    ),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be less than 2000 characters")
    .refine((val) => !/[<>{}]/.test(val), {
      message: "Message contains invalid characters",
    }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Remove potential HTML tags
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, "") // Remove event handlers
    .trim()
}
