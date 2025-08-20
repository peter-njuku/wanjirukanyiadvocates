import Link from "next/link"
import { Phone, Mail, MapPin, Award } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0e4c8c] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Firm Info */}
          <div className="space-y-4">
            <h3 className="font-playfair font-bold text-xl">Wanjiru Kanyi Law Advocates</h3>
            <p className="text-sm opacity-90 font-sans">
              Professional legal services with a commitment to ensuring access to justice and legal information for
              communities across Kenya.
            </p>
            <div className="flex items-center gap-2 text-sm bg-[#1a6db6] p-2 rounded-md">
              <Award className="h-4 w-4 text-[#0decc3]" />
              <span>KEOnline Digitally Fit Awards 2024 Nominee</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#0decc3] font-sans">Quick Links</h4>
            <ul className="space-y-2 text-sm font-sans">
              <li>
                <Link 
                  href="/about" 
                  className="relative hover:text-[#0decc3] transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#0decc3] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="relative hover:text-[#0decc3] transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#0decc3] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="relative hover:text-[#0decc3] transition-colors after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#0decc3] after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#0decc3] font-sans">Practice Areas</h4>
            <ul className="space-y-2 text-sm font-sans">
              <li className="relative pl-4 before:content-['•'] before:text-[#0decc3] before:absolute before:left-0">Land & Property Law</li>
              <li className="relative pl-4 before:content-['•'] before:text-[#0decc3] before:absolute before:left-0">Succession & Inheritance</li>
              <li className="relative pl-4 before:content-['•'] before:text-[#0decc3] before:absolute before:left-0">Data Protection</li>
              <li className="relative pl-4 before:content-['•'] before:text-[#0decc3] before:absolute before:left-0">Cyberbullying Cases</li>
              <li className="relative pl-4 before:content-['•'] before:text-[#0decc3] before:absolute before:left-0">Employment Law</li>
              <li className="relative pl-4 before:content-['•'] before:text-[#0decc3] before:absolute before:left-0">Family Matters</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-[#0decc3] font-sans">Contact Information</h4>
            <div className="space-y-3 text-sm font-sans">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#0decc3]" />
                <div>
                  <p>Mustard Seed Complex</p>
                  <p>ACK St. Peters Church Uthiru</p>
                  <p>Unit G.05, Ground Floor</p>
                  <p>PO Box 73088-00100, Nairobi</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#0decc3]" />
                <span>+254792932136</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#0decc3]" />
                <span>wanjirukanyilawa@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#0decc3]/20 mt-8 pt-8 text-center text-sm opacity-90 font-sans">
          <p>&copy; 2024 Wanjiru Kanyi Law Advocates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
