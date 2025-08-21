import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, MapPin, Clock } from "lucide-react"

export default function ConsultationWeeks() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-900 to-slate-900 text-white overflow-hidden">
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full -translate-y-16 translate-x-16"></div>
            
            <CardHeader className="text-center relative z-10 pb-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-full">
                  <Calendar className="h-8 w-8 text-cyan-300" />
                </div>
              </div>
              <CardTitle className="text-2xl md:text-3xl font-serif font-semibold">
                Land & Inheritance Legal Service Week
              </CardTitle>
              <CardDescription className="text-cyan-100 text-lg mt-3">
                Special walk-in consultations available — no appointment necessary
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8 relative z-10">
              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 text-cyan-300 flex items-center">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                    Land & Property Services
                  </h4>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-2">•</span>
                      <span>Land contracts and agreements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-2">•</span>
                      <span>Title transfers and subdivisions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-2">•</span>
                      <span>Leases and rights of access</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-2">•</span>
                      <span>Due diligence and searches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-2">•</span>
                      <span>Lost title deed recovery</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white/10 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 text-cyan-300 flex items-center">
                    <div className="w-2 h-2 bg-cyan-300 rounded-full mr-3"></div>
                    Succession Services
                  </h4>
                  <ul className="space-y-3 text-blue-100">
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-2">•</span>
                      <span>Letters of Administration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-2">•</span>
                      <span>Estate planning guidance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-2">•</span>
                      <span>Inheritance disputes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-2">•</span>
                      <span>Powers of attorney</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-300 mr-2">•</span>
                      <span>Trust establishment</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Location and Time Information */}
              <div className="bg-white/5 p-6 rounded-lg border border-cyan-500/20">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-cyan-300 mr-3 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-cyan-300 mb-1">Location</h5>
                      <p className="text-blue-100 text-sm">
                        ACK St. Peters Uthiru, Mustard Seed Complex,<br />
                        Ground Floor, Unit G.05
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-cyan-300 mr-3 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-cyan-300 mb-1">Consultation Hours</h5>
                      <p className="text-blue-100 text-sm">
                        Monday - Friday: 9:00 AM - 4:00 PM<br />
                        Special Saturday hours available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center pt-4">
                <Button 
                  className="bg-cyan-500 hover:bg-cyan-400 text-blue-900 font-semibold px-8 py-3 rounded-sm"
                  asChild
                >
                  <Link href="/contact">
                    Schedule Your Consultation
                  </Link>
                </Button>
                <p className="text-cyan-200 text-sm mt-4">
                  Limited slots available during special service week
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}