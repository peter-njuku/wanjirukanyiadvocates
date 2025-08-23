import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, MapPin, Clock, Users, Home, Scale } from "lucide-react"

export default function ConsultationWeeks() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white overflow-hidden relative">
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400/10 rounded-full translate-y-16 -translate-x-16"></div>
            
            <CardHeader className="text-center relative z-10 pb-8 pt-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-cyan-500/20 rounded-full backdrop-blur-sm">
                  <Calendar className="h-10 w-10 text-cyan-300" />
                </div>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-serif font-bold">
                Land & Inheritance Legal Service Week
              </CardTitle>
              <CardDescription className="text-cyan-100 text-lg md:text-xl mt-4 max-w-2xl mx-auto leading-relaxed">
                Special walk-in consultations available — no appointment necessary during our community service initiative
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-10 relative z-10 pb-12">
              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="p-2 bg-cyan-500/20 rounded-lg mr-4">
                      <Home className="h-6 w-6 text-cyan-300" />
                    </div>
                    <h4 className="font-semibold text-xl text-cyan-300">
                      Land & Property Services
                    </h4>
                  </div>
                  <ul className="space-y-4 text-blue-100">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3 mt-1">•</span>
                      <span>Land contracts and agreements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3 mt-1">•</span>
                      <span>Title transfers and subdivisions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3 mt-1">•</span>
                      <span>Leases and rights of access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3 mt-1">•</span>
                      <span>Due diligence and searches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3 mt-1">•</span>
                      <span>Lost title deed recovery</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="flex items-center mb-6">
                    <div className="p-2 bg-cyan-500/20 rounded-lg mr-4">
                      <Users className="h-6 w-6 text-cyan-300" />
                    </div>
                    <h4 className="font-semibold text-xl text-cyan-300">
                      Succession Services
                    </h4>
                  </div>
                  <ul className="space-y-4 text-blue-100">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3 mt-1">•</span>
                      <span>Letters of Administration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3 mt-1">•</span>
                      <span>Estate planning guidance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3 mt-1">•</span>
                      <span>Inheritance disputes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3 mt-1">•</span>
                      <span>Powers of attorney</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-3 mt-1">•</span>
                      <span>Trust establishment</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Location and Time Information */}
              <div className="bg-white/5 p-8 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                <h3 className="text-center font-serif font-semibold text-2xl text-cyan-300 mb-8 flex items-center justify-center">
                  <Scale className="h-6 w-6 mr-3" />
                  Service Week Details
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex items-start">
                    <div className="p-2 bg-cyan-500/20 rounded-lg mr-4 mt-1">
                      <MapPin className="h-5 w-5 text-cyan-300" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-cyan-300 mb-2 text-lg">Location</h5>
                      <p className="text-blue-100">
                        ACK St. Peters Uthiru, Mustard Seed Complex,<br />
                        Ground Floor, Unit G.05
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-2 bg-cyan-500/20 rounded-lg mr-4 mt-1">
                      <Clock className="h-5 w-5 text-cyan-300" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-cyan-300 mb-2 text-lg">Consultation Hours</h5>
                      <p className="text-blue-100">
                        Monday - Friday: 9:00 AM - 4:00 PM<br />
                        Special Saturday hours: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center pt-6">
                <Button 
                  className="bg-cyan-500 hover:bg-cyan-400 text-blue-900 font-semibold px-10 py-4 text-lg rounded-md transition-all duration-300 hover:scale-105 shadow-lg"
                  asChild
                >
                  <Link href="/contact">
                    Schedule Your Consultation
                  </Link>
                </Button>
                <p className="text-cyan-200 text-sm mt-6">
                  Limited slots available during our special service week
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}