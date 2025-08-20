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
import { Phone, Mail, MapPin, Clock, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"
import { useContactForm } from "@/hooks/use-contact-form"

export default function ContactPage() {
  const { form, isSubmitting, submitStatus, onSubmit } = useContactForm()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Contact Us
            </Badge>
            <h1 className="font-serif font-black text-4xl md:text-5xl text-primary">Get Professional Legal Help</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
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
                <h2 className="font-serif font-bold text-3xl text-primary mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of the following channels. We're here to help with all your legal needs.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Phone className="h-6 w-6 text-accent mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Phone & WhatsApp</h3>
                        <p className="text-muted-foreground">+254792932136</p>
                        <p className="text-sm text-muted-foreground mt-1">Available for calls and WhatsApp messages</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-accent mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-muted-foreground">wanjirukanyilawa@gmail.com</p>
                        <p className="text-sm text-muted-foreground mt-1">Send us your legal inquiries via email</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-accent mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Office Location</h3>
                        <div className="text-muted-foreground space-y-1">
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

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-accent mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">Consultation Weeks</h3>
                        <p className="text-muted-foreground">
                          Walk-in Legal Consultation Weeks for Land & Property and Succession matters - No appointments
                          needed
                        </p>
                        <p className="text-sm text-accent mt-2 font-medium">Contact us for current schedule</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Send Us a Message</CardTitle>
                  <CardDescription>
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
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
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
                              <FormLabel>First Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your first name" {...field} />
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
                              <FormLabel>Last Name *</FormLabel>
                              <FormControl>
                                <Input placeholder="Your last name" {...field} />
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
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} />
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
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+254..." {...field} />
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
                            <FormLabel>Type of Legal Matter *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
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
                            <FormLabel>Message *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please describe your legal matter and how we can help you..."
                                rows={5}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {form.formState.errors.root && (
                        <Alert variant="destructive">
                          <AlertCircle className="h-4 w-4" />
                          <AlertDescription>{form.formState.errors.root.message}</AlertDescription>
                        </Alert>
                      )}

                      <div className="bg-muted/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          <strong>Confidentiality Notice:</strong> All communications are treated with strict
                          confidentiality in accordance with attorney-client privilege.
                        </p>
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-accent text-accent-foreground">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-serif">Student Mentorship Program</CardTitle>
                <CardDescription className="text-accent-foreground/80">
                  Empowering future legal professionals through practical experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Program Benefits:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Practical legal experience</li>
                      <li>• Legal writing and drafting skills</li>
                      <li>• Research methodology training</li>
                      <li>• Judiciary e-filing portal usage</li>
                      <li>• Kenya Law Online Database access</li>
                      <li>• Virtual court session observation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Eligibility:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Law students (universities & colleges)</li>
                      <li>• Kenya School of Law students</li>
                      <li>• Young people intending to pursue law</li>
                      <li>• One-on-one or virtual engagements</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center pt-4">
                  <p className="mb-4 text-sm">
                    <strong>Contact for Mentorship:</strong> +254792932136 | wanjirukanyilawa@gmail.com
                  </p>
                  <Button variant="secondary">Apply for Mentorship Program</Button>
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
