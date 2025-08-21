import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Phone, Award, Shield, Scale } from "lucide-react" // New icons for trust signals

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32"> {/* Slightly more padding for grandeur */}
      {/* Background with Subtle, Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/hero2.png')] bg-cover bg-center bg-no-repeat"
        />
        {/* Changed: More elegant, less saturated overlay. Darker for better text contrast. */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40"></div>
      </div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-2xl lg:max-w-3xl text-left space-y-6">
          
          {/* Badge - Made more subtle and elegant */}
          <Badge variant="outline" className="mb-4 bg-amber-500/10 text-amber-200 border-amber-500/30 px-4 py-1.5 text-sm font-light">
            <Award className="mr-2 h-4 w-4" /> {/* Added icon */}
            KEOnline Digitally Fit Awards 2024 Nominee
          </Badge>
          
          {/* Headline - More authoritative and benefit-focused */}
          <h1 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
            Expert Legal Advocacy <br className="hidden md:block" />
            <span className="text-amber-400 font-light">That Secures Your Future</span>
          </h1>
          
          {/* Subtitle - More specific and client-focused */}
          <p className="text-xl text-slate-200 leading-relaxed max-w-2xl font-light">
            Protecting your assets, resolving complex disputes, and providing strategic counsel in matters of land law, succession, and commercial litigation.
          </p>

          {/* Optional: Mini Trust Bar - A common professional practice */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 pt-2">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2 text-amber-400" />
              <span>Confidential Consultations</span>
            </div>
            <div className="flex items-center">
              <Scale className="h-4 w-4 mr-2 text-amber-400" />
              <span>Decades of Combined Experience</span>
            </div>
          </div>
          
          {/* CTA Buttons - More professional phrasing */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 w-fit rounded-sm" // Slightly squared edges can feel more formal
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
              className="border-slate-300 text-slate-100 hover:bg-slate-100 hover:text-slate-900 bg-transparent font-medium transition-all duration-200 w-fit rounded-sm"
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