import Link from "next/link"
import { Phone, Mail, MapPin, Award } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Firm Info */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-xl">Wanjiru Kanyi Law Advocates</h3>
            <p className="text-sm opacity-90">
              Professional legal services with a commitment to ensuring access to justice and legal information for
              communities across Kenya.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Award className="h-4 w-4" />
              <span>KEOnline Digitally Fit Awards 2024 Nominee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Practice Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>Land & Property Law</li>
              <li>Succession & Inheritance</li>
              <li>Data Protection</li>
              <li>Computer misuse and cyber crime Cases</li>
              <li>Employment Law</li>
              <li>Family Matters</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mustard Seed Complex</p>
                  <p>ACK St. Peters Church Uthiru</p>
                  <p>Unit G.05, Ground Floor</p>
                  <p>PO Box 73088-00100, Nairobi</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+254792932136</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>wanjirukanyilawa@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; 2024 Wanjiru Kanyi Law Advocates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
