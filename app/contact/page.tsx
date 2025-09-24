"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FormEvent, useState } from "react"

export default function ContactPage() {
  
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [matterType, setMatterType] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const matterTypes = [
    "Family Matters",
    "Succession & Inheritance",
    "Computer Misuse & Cyber Crimes",
    "Child Rights",
    "Employment Law",
    "Corporate & Business Law",
    "Student Mentorship",
    "Other Legal Matters"
  ]

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setIsSubmitting(true);

    if (!firstName || !lastName || !email || !matterType || !description) {
      setError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }

    const formData = { firstName, lastName, email, matterType, description };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const content = await response.json();

      if (response.ok) {
        setSuccessMessage('Your message has been submitted successfully!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setMatterType('');
        setDescription('');
      } else {
        setError(content.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-white">
              Contact Us
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
              We are here to help. Reach out to us for any legal inquiries or to schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Contact Info Card */}
        <div className="flex flex-col justify-center">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                We’re here to help with your legal needs. Reach out today and schedule a consultation.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span>+254 792 932 136</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span>wanjirukanyilawa@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>Mustard Seed Complex, ACK St. Peters Church Uthiru, Unit G.05, Ground Floor, Nairobi</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>Mon – Fri: 9:00 AM – 5:00 PM</span>
              </div>
              
            </CardContent>
          </Card>
        </div>

        {/* Contact Form Card */}
        <div>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Complete the form below and our team will respond promptly.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    {error}
                  </div>
                )}
                {successMessage && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                    {successMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="matterType" className="block text-sm font-medium text-gray-700 mb-1">
                    Matter Type *
                  </label>
                  <select
                    id="matterType"
                    value={matterType}
                    onChange={e => setMatterType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a matter type</option>
                    {matterTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Please describe your legal matter in detail..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
