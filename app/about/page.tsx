import CurvedBottom from "@/components/ui/curved-bottom";
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Scale as ScaleIcon, Target, BookOpen, Shield, Star, Heart, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section - Combined Why Choose Us & About */}
      <section className="relative py-16 bg-[#081a33] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300 px-4 py-1 mb-4">
              Why Choose Us
            </Badge>
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-white">
              Wanjiru Kanyi Law Advocates
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed">
              Choose us for our unwavering commitment to exceptional legal solutions rooted in deep Kenyan expertise.
              With vast amount of experience, we combine traditional excellence with
              innovative approaches in land law, succession, commercial disputes, and cybercrime.
            </p>
          </div>
        </div>
        <CurvedBottom nextSectionBgColor="bg-white" />
      </section>
      {/* Founder Section - Compact & Impactful */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-slate-900 mb-4">Our Founding Advocate</h2>
              <div className="h-1 w-16 bg-cyan-500 mx-auto"></div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <div className="text-center mb-6">
                <h3 className="font-serif font-bold text-xl text-slate-900">Wanjiru Kanyi</h3>
                <p className="text-blue-700 font-medium">Advocate of the High Court of Kenya & Founder</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 text-base">
                <div className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    Wanjiru Kanyi is a Litigation Advocate passionate about making justice accessible through 
                    simplified legal education and technology.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Areas of Expertise</h4>
                    <p className="text-blue-800 text-base">
                      Land Law, Succession, Employment Law, Digital Rights, Child Protection, and Family Law.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-2">Community Commitment</h4>
<p className="text-slate-700 text-base">
                    Mentors young girls, promotes reproductive health rights, and supports ethical AI innovation 
                    in legal tech, believing justice should be accessible to all Kenyans.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Values Combined */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif font-bold text-2xl md:text-3xl mb-4">Our Philosophy & Values</h2>
              <p className="text-blue-100">
                Justice should be accessible, understandable, and achievable for every Kenyan
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 p-5 rounded-lg">
                <Target className="h-8 w-8 text-cyan-300 mb-3" />
                <h3 className="font-semibold text-cyan-100 mb-2">Mission</h3>
                <p className="text-blue-100 text-base">
                  Provide exceptional legal representation while democratizing access to justice through 
                  education and technology.
                </p>
              </div>

              <div className="bg-white/10 p-5 rounded-lg">
                <BookOpen className="h-8 w-8 text-cyan-300 mb-3" />
                <h3 className="font-semibold text-cyan-100 mb-2">Vision</h3>
                <p className="text-blue-100 text-base">
                  A Kenya where every citizen understands their rights and has access to quality legal representation.
                </p>
              </div>
            </div>

            {/* Core Values Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <ScaleIcon className="h-5 w-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-cyan-100 mb-1">Excellence</h4>
                  <p className="text-blue-100 text-base">Highest standards in legal expertise and preparation</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Users className="h-5 w-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-cyan-100 mb-1">Client-First</h4>
                  <p className="text-blue-100 text-base">Personalized attention and clear communication</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-cyan-100 mb-1">Integrity</h4>
                  <p className="text-blue-100 text-base">Strict ethical standards and confidentiality</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Star className="h-5 w-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-cyan-100 mb-1">Innovation</h4>
                  <p className="text-blue-100 text-base">Embracing technology for better legal service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Commitment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-cyan-50 p-6 rounded-xl border border-cyan-200">
              <ScaleIcon className="h-10 w-10 text-cyan-600 mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-xl text-slate-900 mb-3">Our Access Commitment</h3>
              <p className="text-slate-700 text-base">
                We believe quality legal services should be accessible to all Kenyans. This drives our 
                community programs, walk-in consultations, and pro bono initiatives that serve ordinary 
                citizens across Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}