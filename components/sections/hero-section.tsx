import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Phone, Award, Shield, Scale } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/hero2.png')] bg-cover bg-center bg-no-repeat" />
        {/* Professional dark overlay - NO blue tint */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40"></div>
      </div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-2xl lg:max-w-3xl text-left space-y-6">
          
          {/* Badge with subtle blue - more professional shade */}
          <Badge variant="outline" className="mb-4 bg-blue-900/20 text-blue-200 border-blue-700/30 px-4 py-1.5 text-sm font-light">
            <Award className="mr-2 h-4 w-4" />
            KEOnline Digitally Fit Awards 2024 Nominee
          </Badge>
          
          <h1 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
            Expert Legal Advocacy <br className="hidden md:block" />
            {/* Keeping blue accent but darker, more sophisticated shade */}
            <span className="text-blue-300 font-light">That Secures Your Future</span>
          </h1>
          
          <p className="text-xl text-slate-200 leading-relaxed max-w-2xl font-light">
            Protecting your assets, resolving complex disputes, and providing strategic counsel in matters of land law, succession, and commercial litigation.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 pt-2">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-blue-300" />
              <span>Confidential Consultations</span>
            </div>
            <div className="flex items-center">
              <Scale className="h-4 w-4 mr-2 text-blue-300" />
              <span>Decades of Combined Experience</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            {/* Button with professional blue - darker shade */}
            <Button 
              size="lg" 
              className="bg-blue-800 hover:bg-blue-900 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 w-fit rounded-sm" 
              asChild
            >
              <Link href="/contact" className="flex items-center">
                Request a Confidential Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-blue-300 text-blue-100 hover:bg-blue-300 hover:text-slate-900 font-medium transition-all duration-200 w-fit rounded-sm"
              asChild
            >
              <Link href="tel:+254792932136" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call +254 792 932 136
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}