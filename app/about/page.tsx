import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Scale, Heart, Target, BookOpen, Shield, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-800 border-blue-300 px-4 py-1">
              About Our Practice
            </Badge>
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-slate-900">
              Wanjiru Kanyi Law Advocates
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
              A dedicated legal practice delivering professional services with unwavering commitment to excellence, 
              integrity, and meaningful client relationships across Kenya.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif font-bold text-3xl text-slate-900 mb-6">Our Founding Advocate</h2>
              <div className="h-1 w-16 bg-cyan-500 mx-auto"></div>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-lg border border-slate-100">
              <div className="space-y-8">
                <div className="text-center md:text-left">
                  <h3 className="font-serif font-bold text-2xl text-slate-900 mb-2">Wanjiru Kanyi</h3>
                  <p className="text-blue-700 font-medium mb-4">Advocate of the High Court of Kenya & Founder</p>
                  <div className="h-px bg-slate-200 my-6"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-slate-700 leading-relaxed mb-6">
                      Wanjiru Kanyi is an Advocate of the High Court of Kenya and the founder of Wanjiru Kanyi Law
                      Advocates. She is a Litigation Advocate who is also passionate about using the law to make justice
                      accessible, especially through simplified legal education and technology.
                    </p>
                    
                    <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                      <h4 className="font-semibold text-lg mb-3 text-blue-900">Areas of Expertise</h4>
                      <p className="text-blue-800 leading-relaxed">
                        Her work spans employment law, family law, contract law, land law, digital rights, brand-influencer
                        representation, and child protection.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h4 className="font-semibold text-lg mb-3 text-slate-900">Beyond the Courtroom</h4>
                      <p className="text-slate-700 leading-relaxed">
                        Outside the courtroom, she mentors young girls, promotes reproductive health rights, and supports
                        ethical innovation & responsible use of AI in the legal and tech space. Her commitment to community
                        service and legal education reflects her belief that justice should be accessible to all.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Philosophy - Where "Access to Justice" is emphasized */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div>
              <h2 className="font-serif font-bold text-3xl mb-6">Our Firm Philosophy</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                At the heart of our practice lies a fundamental belief: justice should be accessible, understandable, 
                and achievable for every Kenyan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <Target className="h-10 w-10 text-cyan-300 mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-cyan-100">Mission</h3>
                <p className="text-blue-100">
                  To provide exceptional legal representation while democratizing access to justice through 
                  education, technology, and community-focused service.
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <BookOpen className="h-10 w-10 text-cyan-300 mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-cyan-100">Vision</h3>
                <p className="text-blue-100">
                  A Kenya where every citizen understands their legal rights and has access to quality 
                  legal representation, regardless of their background or circumstances.
                </p>
              </div>
            </div>

            {/* Access to Justice Statement */}
            <div className="bg-cyan-500/20 p-8 rounded-xl border border-cyan-500/30 mt-8">
              <Scale className="h-12 w-12 text-cyan-300 mx-auto mb-4" />
              <h3 className="font-serif font-semibold text-2xl mb-4">Our Commitment to Access</h3>
              <p className="text-cyan-100 leading-relaxed">
                We believe that quality legal services should be accessible to all members of society, not just the
                privileged few. This commitment drives our community legal education programs, walk-in consultation 
                weeks, and pro bono initiatives that extend our practice beyond traditional client service to 
                serve ordinary citizens across Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="font-serif font-bold text-3xl text-slate-900 mb-6">Our Core Values</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                The principles that guide every aspect of our legal practice and client relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-50 rounded-lg p-3 w-fit mb-4">
                    <Scale className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-slate-900">Professional Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We maintain the highest standards of legal expertise, continuous learning, and 
                    meticulous preparation in every case we handle.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-cyan-50 rounded-lg p-3 w-fit mb-4">
                    <Users className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-slate-900">Client-Centered Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    Your goals and concerns are our priority. We provide personalized attention and 
                    clear communication throughout your legal journey.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-50 rounded-lg p-3 w-fit mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-slate-900">Integrity & Confidentiality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We uphold the strictest ethical standards, ensuring your trust is never compromised 
                    and your information remains secure.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-cyan-50 rounded-lg p-3 w-fit mb-4">
                    <Star className="h-6 w-6 text-cyan-600" />
                  </div>
                  <CardTitle className="text-slate-900">Innovation & Adaptation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">
                    We embrace technology and new approaches to improve legal service delivery while 
                    staying current with evolving laws and regulations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="h-12 w-12 text-amber-500 mx-auto mb-6" />
            <h2 className="font-serif font-bold text-3xl text-slate-900 mb-4">Professional Recognition</h2>
            <p className="text-lg text-slate-700 mb-8">
              Our commitment to legal excellence and innovation has been recognized through our nomination for the 
              KEOnline Digitally Fit Awards 2024 in the "Advocating & Law" category.
            </p>
            <Badge className="bg-amber-500/20 text-amber-700 border-amber-500/30 px-4 py-2 text-sm">
              KEOnline Digitally Fit Awards 2024 Nominee
            </Badge>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}