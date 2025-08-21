"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, AlertCircle, Users, BookOpen } from "lucide-react"
import { useContactForm } from "@/hooks/use-contact-form"

export default function ContactPage() {
  const { form, isSubmitting, submitStatus, onSubmit } = useContactForm()

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
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-slate-900">
              Get Professional Legal Help
            </h1>
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
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif font-bold text-3xl text-slate-900 mb-6">Contact Information</h2>
                <p className="text-slate-700 mb-8">
                  Reach out to us through any of the following channels. We're here to help with all your legal needs.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 rounded-full p-3">
                        <Phone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-slate-900">Phone & WhatsApp</h3>
                        <p className="text-slate-700">+254792932136</p>
                        <p className="text-sm text-slate-500 mt-1">Available for calls and WhatsApp messages</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-cyan-100 rounded-full p-3">
                        <Mail className="h-5 w-5 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-slate-900">Email</h3>
                        <p className="text-slate-700">wanjirukanyilawa@gmail.com</p>
                        <p className="text-sm text-slate-500 mt-1">Send us your legal inquiries via email</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 rounded-full p-3">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-slate-900">Office Location</h3>
                        <div className="text-slate-700 space-y-1 text-sm">
                          <p>Mustard Seed Complex</p>
                          <p>ACK St. Peters Church Uthiru</p>
                          <p>Next to Uthiru Girls</p>
                          <p>Unit G.05, Ground Floor</p>
                          <p>PO Box 73088-00100, Nairobi</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-cyan-100 rounded-full p-3">
                        <Clock className="h-5 w-5 text-cyan-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1 text-slate-900">Consultation Weeks</h3>
                        <p className="text-slate-700 text-sm">
                          Walk-in Legal Consultation Weeks for Land & Property and Succession matters - No appointments
                          needed
                        </p>
                        <p className="text-sm text-blue-600 mt-2 font-medium">Contact us for current schedule</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-slate-200 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-serif text-slate-900">Send Us a Message</CardTitle>
                  <CardDescription className="text-slate-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {submitStatus === "success" && (
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitStatus === "error" && (
                    <Alert className="border-rose-200 bg-rose-50">
                      <AlertCircle className="h-4 w-4 text-rose-600" />
                      <AlertDescription className="text-rose-800">
                        Failed to send message. Please try again or contact us directly.
                      </AlertDescription>
                    </Alert>
                  )}

                  <Form {...form}>
                    <form onSubmit={onSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700">First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your first name" {...field} className="border-slate-300" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700">Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your last name" {...field} className="border-slate-300" />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} className="border-slate-300" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+254..." {...field} className="border-slate-300" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="legalMatter"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Type of Legal Matter *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="border-slate-300">
                                  <SelectValue placeholder="Select a legal matter" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="land-property">Land & Property Law</SelectItem>
                                <SelectItem value="succession">Succession & Inheritance</SelectItem>
                                <SelectItem value="data-protection">Data Protection</SelectItem>
                                <SelectItem value="cyberbullying">Cyberbullying & Cyber Crimes</SelectItem>
                                <SelectItem value="employment">Employment Law</SelectItem>
                                <SelectItem value="family">Family & Children's Matters</SelectItem>
                                <SelectItem value="corporate">Corporate & Business Law</SelectItem>
                                <SelectItem value="other">Other Legal Matter</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700">Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please describe your legal matter and how we can help you..."
                                rows={5}
                                {...field}
                                className="border-slate-300"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {form.formState.errors.root && (
                        <Alert className="border-rose-200 bg-rose-50">
                          <AlertCircle className="h-4 w-4 text-rose-600" />
                          <AlertDescription className="text-rose-800">
                            {form.formState.errors.root.message}
                          </AlertDescription>
                        </Alert>
                      )}

                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-sm text-blue-800">
                          <strong>Confidentiality Notice:</strong> All communications are treated with strict
                          confidentiality in accordance with attorney-client privilege.
                        </p>
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <MessageSquare className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Student Mentorship */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-900 to-slate-900 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full -translate-y-16 translate-x-16"></div>
              
              <CardHeader className="text-center relative z-10 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-full">
                    <BookOpen className="h-8 w-8 text-cyan-300" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-serif font-semibold">
                  Student Mentorship Program
                </CardTitle>
                <CardDescription className="text-cyan-100 mt-3">
                  Empowering future legal professionals through practical experience
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-cyan-300">Program Benefits:</h4>
                    <ul className="space-y-2 text-blue-100">
                      {[
                        "Practical legal experience",
                        "Legal writing and drafting skills",
                        "Research methodology training",
                        "Judiciary e-filing portal usage",
                        "Kenya Law Online Database access",
                        "Virtual court session observation"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-cyan-300 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-cyan-300">Eligibility:</h4>
                    <ul className="space-y-2 text-blue-100">
                      {[
                        "Law students (universities & colleges)",
                        "Kenya School of Law students",
                        "Young people intending to pursue law",
                        "One-on-one or virtual engagements"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-cyan-300 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <p className="mb-4 text-sm text-blue-100">
                    <strong>Contact for Mentorship:</strong> +254792932136 | wanjirukanyilawa@gmail.com
                  </p>
                  <Button className="bg-cyan-500 hover:bg-cyan-400 text-blue-900 font-semibold">
                    Apply for Mentorship Program
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}