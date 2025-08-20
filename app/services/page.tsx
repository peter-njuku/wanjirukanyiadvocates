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
  Scale,
  FileText,
  Building,
  Calendar,
  ArrowRight,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Our Legal Services
            </Badge>
            <h1 className="font-serif font-black text-4xl md:text-5xl text-primary">Comprehensive Legal Solutions</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
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
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-2xl">Land & Property Law</CardTitle>
                <CardDescription className="text-base">
                  Comprehensive legal services for all your land and property needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Land contracts, agreements, and transfers</li>
                  <li>• Leases, licenses, and rights of access</li>
                  <li>• Subdivisions and change of user applications</li>
                  <li>• Title rectification and due diligence</li>
                  <li>• Obtaining consents and paying rates/rents</li>
                  <li>• Searches, caveats, cautions, and restrictions</li>
                  <li>• Lost title deed recovery</li>
                  <li>• Buyer/seller sourcing and negotiations</li>
                </ul>
              </CardContent>
            </Card>

            {/* Succession & Inheritance */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-2xl">Succession & Inheritance</CardTitle>
                <CardDescription className="text-base">
                  Expert guidance through Kenya's Law of Succession Act
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Grant of Letters of Administration applications</li>
                  <li>• Estate planning and asset distribution</li>
                  <li>• Inheritance dispute resolution</li>
                  <li>• Powers of attorney and trust establishment</li>
                  <li>• Limited grants for urgent needs</li>
                  <li>• Polygamous family property division</li>
                  <li>• Beneficiary documentation and asset inventory</li>
                  <li>• Reconstruction of green cards</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-2xl">Data Protection & Children's Rights</CardTitle>
                <CardDescription className="text-base">
                  Compliance with Kenya's Data Protection Act (2019)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Data protection compliance audits</li>
                  <li>• Children's data protection advocacy</li>
                  <li>• Parental consent frameworks</li>
                  <li>• Data breach reporting and response</li>
                  <li>• Privacy policy development</li>
                  <li>• Digital safety education programs</li>
                  <li>• Data Protection Commissioner liaison</li>
                </ul>
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm font-medium text-accent">
                    "The best interests of the child are paramount" - Our guiding principle in child protection cases
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cyberbullying */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquareWarning className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-2xl">Cyberbullying & Cyber Crimes</CardTitle>
                <CardDescription className="text-base">
                  Legal representation under the Computer Misuse and Cyber Crimes Act (2018)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Cyberbullying case representation</li>
                  <li>• Evidence preservation and documentation</li>
                  <li>• DCI complaint filing assistance</li>
                  <li>• Victim support and counseling referrals</li>
                  <li>• School and organization awareness programs</li>
                  <li>• Online harassment legal remedies</li>
                  <li>• Digital forensics coordination</li>
                </ul>
                <div className="bg-destructive/10 p-4 rounded-lg">
                  <p className="text-sm font-medium text-destructive">
                    Cyberbullying penalties: Up to KES 20 million fine or imprisonment
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Employment Cases */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Scale className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-2xl">Employment Law</CardTitle>
                <CardDescription className="text-base">
                  Workplace disputes and employment rights protection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Employment contract drafting and review</li>
                  <li>• Wrongful termination cases</li>
                  <li>• Workplace harassment and discrimination</li>
                  <li>• Labor dispute mediation</li>
                  <li>• Employment tribunal representation</li>
                  <li>• Severance and compensation negotiations</li>
                  <li>• Workplace policy development</li>
                </ul>
              </CardContent>
            </Card>

            {/* Corporate & Business */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Building className="h-10 w-10 text-accent mb-4" />
                <CardTitle className="text-2xl">Corporate & Business Law</CardTitle>
                <CardDescription className="text-base">
                  Business formation, contracts, and commercial negotiations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <li>• Corporate negotiations and mediation</li>
                  <li>• Business contract drafting and review</li>
                  <li>• Commercial dispute resolution</li>
                  <li>• Intellectual property (trademark registration)</li>
                  <li>• Small claims court matters</li>
                  <li>• Demand letters and debt collection</li>
                  <li>• Partnership agreements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-3xl text-primary text-center mb-12">Additional Legal Services</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Legal Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>• Drafting and witnessing contracts</li>
                    <li>• Document certification</li>
                    <li>• Affidavit preparation</li>
                    <li>• Legal opinions and advice</li>
                    <li>• Change of names applications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-accent mb-2" />
                  <CardTitle>Family & Children's Matters</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>• Child custody and support</li>
                    <li>• Divorce and separation</li>
                    <li>• Adoption procedures</li>
                    <li>• Domestic violence cases</li>
                    <li>• Marriage and family counseling referrals</li>
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
            <Card className="bg-accent text-accent-foreground">
              <CardHeader className="text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4" />
                <CardTitle className="text-2xl font-serif">Specialized Legal Consultation Weeks</CardTitle>
                <CardDescription className="text-accent-foreground/80">
                  Walk-in consultations focusing on Land & Property and Succession matters
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-sm">
                  <strong>Location:</strong> ACK St. Peters Uthiru, Mustard Seed Complex, Ground Floor, Unit G.05
                </p>
                <p className="text-sm">
                  <strong>Format:</strong> No prior appointments needed • Services offered at a fee
                </p>
                <Button variant="secondary" asChild>
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-serif font-bold text-3xl">Need Legal Assistance?</h2>
            <p className="text-xl opacity-90">
              Contact us today to discuss your legal needs. We're here to provide professional guidance and
              representation.
            </p>
            <Button size="lg" variant="secondary" asChild>
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
