"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    await fetch("https://docs.google.com/forms/d/18_RT9eXT_Nv_sPv6bQE8u6TFmdO14vZWh_fvHhLO08U/formResponse", {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams({
        "entry.1111111111": formData.get("firstName") as string,
        "entry.2222222222": formData.get("lastName") as string,
        "entry.3333333333": formData.get("email") as string,
        "entry.4444444444": formData.get("message") as string,
      }).toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })

    setLoading(false)
    setSubmitted(true)
    e.currentTarget.reset()
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <Card className="border-slate-200 shadow-lg">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-serif text-slate-900">Send Us a Message</CardTitle>
          <CardDescription className="text-slate-600">
            Fill out the form below and we'll get back to you as soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {submitted ? (
            <p className="text-green-600 font-medium">✅ Thank you! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="mt-1 block w-full rounded-md border border-slate-300 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="mt-1 block w-full rounded-md border border-slate-300 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border border-slate-300 p-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-slate-300 p-2"
                ></textarea>
              </div>
              <Button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
