"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    matterType: "",
    description: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">("")

  const matterTypes = [
    "Land & Property Law",
    "Succession & Inheritance",
    "Data Protection",
    "Computer Misuse & Cyber Crime Cases",
    "Employment Law",
    "Family Matters",
    "Student Mentorship",
    "Other",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.matterType) newErrors.matterType = "Please select a matter type"
    if (!formData.description.trim()) newErrors.description = "Description is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setSubmitStatus("")
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ firstName: "", lastName: "", email: "", matterType: "", description: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-800 border-blue-300 px-4 py-1">
              Contact Us
            </Badge>
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-slate-900">Get Professional Legal Help</h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
              Ready to discuss your legal needs? Contact Wanjiru Kanyi Law Advocates today for expert legal consultation
              and representation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* LEFT SIDE INFO OMITTED FOR BREVITY */}

            {/* Contact Form */}
            <div>
              <Card className="border-slate-200 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-serif text-slate-900">Send Us a Message</CardTitle>
                  <CardDescription className="text-slate-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {submitStatus === "success" && (
                      <div className="p-3 bg-green-100 text-green-700 rounded-md text-sm">
                        Thank you for your submission! We'll be in touch soon.
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                        There was an error submitting your form. Please try again.
                      </div>
                    )}

                    {/* First/Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.firstName ? "border-red-500" : "border-slate-300"
                          }`}
                        />
                        {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.lastName ? "border-red-500" : "border-slate-300"
                          }`}
                        />
                        {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.email ? "border-red-500" : "border-slate-300"
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>

                    {/* Matter Type */}
                    <div>
                      <label htmlFor="matterType" className="block text-sm font-medium text-slate-700 mb-1">
                        Type of Legal Matter *
                      </label>
                      <select
                        id="matterType"
                        name="matterType"
                        value={formData.matterType}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.matterType ? "border-red-500" : "border-slate-300"
                        }`}
                      >
                        <option value="">Select a matter type</option>
                        {matterTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.matterType && <p className="mt-1 text-sm text-red-600">{errors.matterType}</p>}
                    </div>

                    {/* Description */}
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                        Description of Your Legal Matter *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.description ? "border-red-500" : "border-slate-300"
                        }`}
                      />
                      {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-700 hover:bg-blue-800">
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* MENTORSHIP SECTION OMITTED FOR BREVITY */}

      <Footer />
    </div>
  )
}
