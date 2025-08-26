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
    firstName: '',
    lastName: '',
    email: '',
    matterType: '',
    description: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const matterTypes = [
    'Land & Property Law',
    'Succession & Inheritance',
    'Data Protection',
    'Computer Misuse & Cyber Crime Cases',
    'Employment Law',
    'Family Matters',
    'Student Mentorship',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.matterType) newErrors.matterType = 'Please select a matter type';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          matterType: '',
          description: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    {submitStatus === 'success' && (
                      <div className="p-3 bg-green-100 text-green-700 rounded-md text-sm">
                        Thank you for your submission! We'll be in touch soon.
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                        There was an error submitting your form. Please try again.
                      </div>
                    )}
                    
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
                            errors.firstName ? 'border-red-500' : 'border-slate-300'
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
                            errors.lastName ? 'border-red-500' : 'border-slate-300'
                          }`}
                        />
                        {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                      </div>
                    </div>
                    
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
                          errors.email ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                    </div>
                    
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
                          errors.matterType ? 'border-red-500' : 'border-slate-300'
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
                          errors.description ? 'border-red-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-700 hover:bg-blue-800"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Request'}
                    </Button>
                  </form>
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