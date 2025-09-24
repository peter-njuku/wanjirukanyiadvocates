import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Home,
  Users,
  Shield,
  MessageSquareWarning,
  FileText,
  Building,
  Calendar,
  ArrowRight,
  Crown,
  BookOpen,
  Briefcase,
  Laptop
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-800 border-blue-300 px-4 py-1">
              Our Legal Services
            </Badge>
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-white">
              Comprehensive Legal Solutions
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed max-w-3xl mx-auto">
              We specialize in a wide range of legal matters, providing expert guidance and representation across
              multiple practice areas to serve Kenya's diverse legal needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Land & Property Law */}
            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-blue-50 rounded-lg p-3 w-fit mb-4 group-hover:bg-cyan-50 transition-colors">
                  <Home className="h-8 w-8 text-blue-600 group-hover:text-cyan-600 transition-colors" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Land & Property Law</CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Comprehensive legal services for all your land and property needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-slate-700">
                  {[
                    "Land contracts, agreements, and transfers",
                    "Leases, licenses, and rights of access",
                    "Subdivisions and change of user applications",
                    "Title rectification and due diligence",
                    "Obtaining consents and paying rates/rents",
                    "Searches, caveats, cautions, and restrictions",
                    "Lost title deed recovery",
                    "Buyer/seller sourcing and negotiations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Succession & Inheritance */}
            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-cyan-50 rounded-lg p-3 w-fit mb-4 group-hover:bg-blue-50 transition-colors">
                  <Crown className="h-8 w-8 text-cyan-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Succession & Inheritance</CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Expert guidance through Kenya's Law of Succession Act
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-slate-700">
                  {[
                    "Grant of Letters of Administration applications",
                    "Estate planning and asset distribution",
                    "Inheritance dispute resolution",
                    "Powers of attorney and trust establishment",
                    "Limited grants for urgent needs",
                    "Polygamous family property division",
                    "Beneficiary documentation and asset inventory",
                    "Reconstruction of green cards"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-blue-50 rounded-lg p-3 w-fit mb-4 group-hover:bg-cyan-50 transition-colors">
                  <Shield className="h-8 w-8 text-blue-600 group-hover:text-cyan-600 transition-colors" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Data Protection & Children's Rights</CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Compliance with Kenya's Data Protection Act (2019)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-slate-700 mb-4">
                  {[
                    "Data protection compliance audits",
                    "Children's data protection advocacy",
                    "Parental consent frameworks",
                    "Data breach reporting and response",
                    "Privacy policy development",
                    "Digital safety education programs",
                    "Data Protection Commissioner liaison"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="text-sm font-medium text-blue-800">
                    "The best interests of the child are paramount" - Our guiding principle in child protection cases
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-cyan-50 rounded-lg p-3 w-fit mb-4 group-hover:bg-blue-50 transition-colors">
                  <Laptop className="h-8 w-8 text-cyan-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Online Harassment & Cyber Offenses</CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Legal representation under the Computer Misuse and Cyber Crimes Act (2018)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-slate-700 mb-4">
                  {[
                    "Cyber crime case representation",
                    "Evidence preservation and documentation",
                    "DCI complaint filing assistance",
                    "Victim support and counseling referrals",
                    "School and organization awareness programs",
                    "Online harassment legal remedies",
                    "Digital forensics coordination"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-rose-50 p-4 rounded-lg border border-rose-200">
                  <p className="text-sm font-medium text-rose-800">
                    Cyber crime penalties: Up to KES 20 million fine or imprisonment
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Employment Cases */}
            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-blue-50 rounded-lg p-3 w-fit mb-4 group-hover:bg-cyan-50 transition-colors">
                  <Briefcase className="h-8 w-8 text-blue-600 group-hover:text-cyan-600 transition-colors" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Employment Law</CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Workplace disputes and employment rights protection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-slate-700">
                  {[
                    "Employment contract drafting and review",
                    "Wrongful termination cases",
                    "Workplace harassment and discrimination",
                    "Labor dispute mediation",
                    "Employment tribunal representation",
                    "Severance and compensation negotiations",
                    "Workplace policy development"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Corporate & Business */}
            <Card className="border-slate-200 hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="bg-cyan-50 rounded-lg p-3 w-fit mb-4 group-hover:bg-blue-50 transition-colors">
                  <Building className="h-8 w-8 text-cyan-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <CardTitle className="text-2xl text-slate-900">Corporate & Business Law</CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Business formation, contracts, and commercial negotiations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-slate-700">
                  {[
                    "Corporate negotiations and mediation",
                    "Business contract drafting and review",
                    "Commercial dispute resolution",
                    "Intellectual property (trademark registration)",
                    "Small claims court matters",
                    "Demand letters and debt collection",
                    "Partnership agreements"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-cyan-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif font-bold text-3xl text-slate-900 mb-6">Additional Legal Services</h2>
              <div className="h-1 w-16 bg-cyan-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-50 rounded-lg p-3 w-fit mb-4">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-slate-900">Legal Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700">
                    {[
                      "Drafting and witnessing contracts",
                      "Document certification",
                      "Affidavit preparation",
                      "Legal opinions and advice",
                      "Change of names applications"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-cyan-50 rounded-lg p-3 w-fit mb-4">
                    <Users className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-slate-900">Family & Children's Matters</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-slate-700">
                    {[
                      "Child custody and support",
                      "Divorce and separation",
                      "Adoption procedures",
                      "Domestic violence cases",
                      "Marriage and family counseling referrals"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-cyan-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Weeks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-900 to-slate-900 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full -translate-y-16 translate-x-16"></div>
              
              <CardHeader className="text-center relative z-10 pb-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-full">
                    <Calendar className="h-8 w-8 text-cyan-300" />
                  </div>
                </div>
                <CardTitle className="text-2xl font-serif font-semibold">
                  Specialized Legal Consultation Weeks
                </CardTitle>
                <CardDescription className="text-cyan-100 mt-3">
                  Walk-in consultations focusing on Land & Property and Succession matters
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center space-y-4 relative z-10">
                <p className="text-sm text-blue-100">
                  <strong>Location:</strong> ACK St. Peters Uthiru, Mustard Seed Complex, Ground Floor, Unit G.05
                </p>
                <p className="text-sm text-blue-100">
                  <strong>Format:</strong> No prior appointments needed • Services offered at a fee
                </p>
                <Button 
                  className="bg-cyan-500 hover:bg-cyan-400 text-blue-900 font-semibold mt-4"
                  asChild
                >
                  <Link href="/contact">
                    Get Consultation Schedule
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-serif font-bold text-3xl">Need Legal Assistance?</h2>
            <p className="text-xl text-blue-100">
              Contact us today to discuss your legal needs. We're here to provide professional guidance and
              representation.
            </p>
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-400 text-blue-900 font-semibold" asChild>
              <Link href="/contact">
                Schedule Your Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}