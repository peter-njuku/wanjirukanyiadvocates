import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Phone, Award, Shield, Scale } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 lg:py-32">
      {/* Background with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/hero2.png')] bg-cover bg-center bg-no-repeat"
        />
        {/* Sophisticated dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40"></div>
      </div>
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-3xl lg:max-w-4xl text-left space-y-6">
          
          {/* Subtle Award Badge */}
          <Badge variant="outline" className="mb-4 bg-amber-500/10 text-amber-200 border-amber-500/30 px-4 py-1.5 text-sm font-light">
            <Award className="mr-2 h-4 w-4" />
            KEOnline Digitally Fit Awards 2024 Nominee
          </Badge>
          
          {/* Client-Provided Heading */}
          <h1 className="font-serif font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
            Expert Legal Representation <br className="hidden md:block" />
            <span className="text-amber-400 font-light">Across Kenya</span>
          </h1>
          
          {/* Client-Provided Supporting Line - Adjusted for your firm's specialties */}
          <p className="text-xl text-slate-200 leading-relaxed max-w-3xl font-light">
            [Your Firm Name] delivers strategic legal solutions in land law, succession planning, commercial litigation, and cybercrime matters — with integrity, professionalism, and excellence.
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