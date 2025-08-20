import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="mb-4">
            KEOnline Digitally Fit Awards 2024 Nominee
          </Badge>
          <h1 className="font-serif font-black text-4xl md:text-6xl leading-tight">
            Professional Legal Services for Kenya's Communities
          </h1>
          <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
            Expert legal advocacy in land law, succession, data protection, and cyberbullying cases. Committed to
            ensuring access to justice for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="tel:+254792932136">
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
