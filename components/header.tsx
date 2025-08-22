"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Phone, Mail, MapPin, Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20) // after 20px scroll
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-transparent shadow-none backdrop-blur-sm"
          : "bg-white border-b border-slate-200"
      )}
    >
      {/* Top contact bar (hidden on scroll) */}
      <div
        className={cn(
          "py-2 transition-all duration-300",
          isScrolled ? "hidden" : "bg-slate-900 text-white"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
            <div className="flex items-center gap-4">
              <a
                href="tel:+254792932136"
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                aria-label="Call us at +254792932136"
              >
                <Phone className="h-3 w-3" />
                <span>+254792932136</span>
              </a>
              <a
                href="mailto:wanjirukanyilawa@gmail.com"
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                aria-label="Email us at wanjirukanyilawa@gmail.com"
              >
                <Mail className="h-3 w-3" />
                <span>wanjirukanyilawa@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center gap-1 text-slate-300">
              <MapPin className="h-3 w-3" />
              <span>Mustard Seed Complex, Uthiru, Nairobi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-16 w-16 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Wanjiru Kanyi Law Advocates Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                Wanjiru Kanyi Law Advocates
              </h1>
              <p className="text-xs md:text-sm text-slate-500 italic">
                Lead Where You Are
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink href="/" active={pathname === "/"} isScrolled={isScrolled}>
              Home
            </NavLink>
            <NavLink
              href="/about"
              active={pathname === "/about"}
              isScrolled={isScrolled}
            >
              About
            </NavLink>
            <NavLink
              href="/services"
              active={pathname === "/services"}
              isScrolled={isScrolled}
            >
              Services
            </NavLink>
            <NavLink
              href="/contact"
              active={pathname === "/contact"}
              isScrolled={isScrolled}
            >
              Contact
            </NavLink>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            <MobileLink href="/" active={pathname === "/"} onClick={() => setIsOpen(false)}>
              Home
            </MobileLink>
            <MobileLink href="/about" active={pathname === "/about"} onClick={() => setIsOpen(false)}>
              About
            </MobileLink>
            <MobileLink href="/services" active={pathname === "/services"} onClick={() => setIsOpen(false)}>
              Services
            </MobileLink>
            <MobileLink href="/contact" active={pathname === "/contact"} onClick={() => setIsOpen(false)}>
              Contact
            </MobileLink>
            <Link
              href="/contact"
              className="w-full text-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              Get Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

/* Desktop link */
function NavLink({ href, children, active, isScrolled }: { href: string; children: React.ReactNode; active?: boolean; isScrolled: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "transition-colors font-medium",
        active
          ? "text-cyan-600"
          : isScrolled
          ? "text-white hover:text-cyan-400"
          : "text-slate-700 hover:text-cyan-600"
      )}
    >
      {children}
    </Link>
  )
}

/* Mobile link */
function MobileLink({ href, children, active, onClick }: { href: string; children: React.ReactNode; active?: boolean; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "transition-colors",
        active ? "text-cyan-600 font-medium" : "text-slate-700 hover:text-cyan-600"
      )}
    >
      {children}
    </Link>
  )
}
