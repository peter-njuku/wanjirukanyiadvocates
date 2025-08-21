import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-24">
      {/* Background with Subtle Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('/hero2.png')] bg-cover bg-center bg-no-repeat"
        />
        {/* More subtle, professional overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/30"></div>
      </div>
      
      <div className="container relative mx-auto px-4 z-10">
        {/* Left-aligned content container */}
        <div className="max-w-2xl lg:max-w-3xl text-left space-y-6">
          <Badge variant="outline" className="mb-4 bg-amber-600/20 text-amber-300 border-amber-500/50 hover:bg-amber-600/30">
            KEOnline Digitally Fit Awards 2024 Nominee
          </Badge>
          
          <h1 className="font-serif font-bold text-3xl md:text-5xl lg:text-6xl leading-tight text-white">
            Strategic Legal Representation <br />
            <span className="text-amber-400">For Kenya's Communities</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-xl">
            Providing expert legal counsel in land law, succession planning, commercial disputes, and cybercrime litigation with integrity and dedication to client success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium shadow-lg shadow-amber-600/25 hover:shadow-amber-600/40 transition-all duration-200 w-fit" 
              asChild
            >
              <Link href="/contact" className="flex items-center">
                Request Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 bg-transparent font-medium transition-all duration-200 w-fit"
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