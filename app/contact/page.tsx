"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Get in Touch with Us
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-slate-200">
            We’re here to answer your questions and provide expert guidance.  
            Reach out to us today.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <Card className="border-slate-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-slate-900">Our Office</CardTitle>
              <CardDescription className="text-slate-600">
                Visit us or contact us through the following details.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-slate-700" />
                <p className="text-slate-700">
                  Wanjiru Kanyi Law Advocates<br />
                  Nairobi, Kenya
                </p>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-slate-700" />
                <p className="text-slate-700">+254 712 345 678</p>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-slate-700" />
                <p className="text-slate-700">wanjirukanyilawa@gmail.com</p>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-slate-700" />
                <p className="text-slate-700">Mon - Fri: 9:00 AM - 5:00 PM</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form (Google Form Embed) */}
        <div>
          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-serif text-slate-900">Send Us a Message</CardTitle>
              <CardDescription className="text-slate-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative w-full h-[700px]">
                <iframe
                  src="https://docs.google.com/forms/d/e/18_RT9eXT_Nv_sPv6bQE8u6TFmdO14vZWh_fvHhLO08U/viewform?embedded=true"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg border border-slate-200"
                >
                  Loading…
                </iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
