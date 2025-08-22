import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Phone, Award, Shield, Scale, Globe } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-32 md:py-40 lg:py-48">
      {/* Background with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/hero2.png')] bg-contain bg-right bg-no-repeat bg-slate-900"
        />
        {/* Overlay - darker left, clear right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/50 to-transparent"></div>
      </div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-3xl lg:max-w-4xl text-left space-y-6">
          
          {/* Award Badge */}
          <Badge 
            variant="outline" 
            className="mb-4 bg-amber-500/10 text-amber-200 border-amber-500/30 px-4 py-1.5 text-sm font-light"
          >
            <Award className="mr-2 h-4 w-4" />
            KEOnline Digitally Fit Awards 2024 Nominee
          </Badge>
          
          {/* Main Heading - Unique & Global */}
          <h1 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
            Strategic Legal Solutions <br className="hidden md:block" />
            <span className="text-amber-400 font-light">With Global Reach</span>
          </h1>
          
          {/* Supporting Line */}
          <p className="text-xl text-slate-200 leading-relaxed max-w-3xl font-light">
          Trusted legal solutions in land law, succession, commercial disputes, and cybercrime — with integrity and excellence.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 pt-2">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-amber-400" />
              <span>Client-Focused Advocacy</span>
            </div>
            <div className="flex items-center">
              <Scale className="h-4 w-4 mr-2 text-amber-400" />
              <span>Proven Results</span>
            </div>
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-2 text-amber-400" />
              <span>International Representation</span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 w-fit rounded-sm" 
              asChild
            >
              <Link href="/contact" className="flex items-center">
                Schedule Your Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-100 hover:bg-slate-100 hover:text-slate-900 bg-transparent font-medium transition-all duration-200 w-fit rounded-sm"
              asChild
            >
              <Link href="tel:+254792932136" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                +254 792 932 136
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
