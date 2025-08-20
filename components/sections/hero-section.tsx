import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-24">
      {/* Background with Gradient Fade to Clear */}
      <div className="absolute inset-0 z-0">
        {/* Replace '/hero-bg.jpg' with your actual image path */}
        <div 
          className="absolute inset-0 bg-[url('/hero2.png')] bg-cover bg-center bg-no-repeat"
        />
        {/* Gradient Overlay - Fades from blue/cyan to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/70 to-transparent"></div>
      </div>
      
      <div className="container relative mx-auto px-4 z-10">
        {/* Left-aligned content container */}
        <div className="max-w-2xl lg:max-w-3xl text-left space-y-6">
          <Badge variant="outline" className="mb-4 bg-cyan-600/20 text-cyan-300 border-cyan-500/50 hover:bg-cyan-600/30">
            KEOnline Digitally Fit Awards 2024 Nominee
          </Badge>
          
          <h1 className="font-serif font-black text-3xl md:text-5xl lg:text-6xl leading-tight text-white">
            Professional Legal Services <br />
            <span className="text-cyan-400">for Kenya's Communities</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-100 leading-relaxed max-w-xl">
            Expert legal advocacy in land law, succession, data protection, and cyberbullying cases. Committed to
            ensuring access to justice for all.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              size="lg" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/40 transition-all duration-200 w-fit" 
              asChild
            >
              <Link href="/contact" className="flex items-center">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 bg-transparent font-semibold transition-all duration-200 w-fit"
              asChild
            >
              <Link href="tel:+254792932136" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call +254792932136
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}