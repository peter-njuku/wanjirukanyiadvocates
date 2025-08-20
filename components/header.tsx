import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>+254792932136</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>wanjirukanyilawa@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              <span>Mustard Seed Complex, Uthiru, Nairobi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="font-serif font-black text-2xl text-primary">Wanjiru Kanyi Law Advocates</div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-foreground hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/services" className="text-foreground hover:text-accent transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
