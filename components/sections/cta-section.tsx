import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone, Shield, Scale } from "lucide-react"

export default function CTASection() {
  return (
    <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Icon decoration */}
          <div className="flex justify-center space-x-6">
            <Shield className="h-10 w-10 opacity-80" />
            <Scale className="h-10 w-10 opacity-80" />
          </div>
          
          <h2 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            Ready to Get Legal Help?
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            Contact us today for professional legal consultation and representation. 
            We're here to protect your rights and interests.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg py-6 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              asChild
            >
              <Link href="/contact" className="flex items-center">
                Schedule Consultation
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-lg py-6 px-8 rounded-lg border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link href="tel:+254792932136" className="flex items-center">
                <Phone className="mr-3 h-5 w-5" />
                Call Now
              </Link>
            </Button>
          </div>
          
          {/* Trust indicator */}
          <div className="pt-8 text-sm opacity-80 italic">
            Trusted by hundreds of clients across Kenya & beyond
          </div>
        </div>
      </div>
    </section>
  )
}