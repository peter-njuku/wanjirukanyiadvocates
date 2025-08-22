"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetTitle, 
  SheetDescription
} from "@/components/ui/sheet";
import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top contact bar */}
      <div className="bg-slate-900 text-white py-2">
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

      {/* Main navigation */}
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "bg-transparent backdrop-blur-md shadow-sm"
            : "bg-white border-b border-slate-200"
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo + Heading + Tagline */}
            <Link href="/" className="flex items-center space-x-4">
              <Image
                src="/logo.jpg"
                alt="Wanjiru Kanyi Law Advocates Logo"
                width={240} // Larger size for stronger visual identity
                height={90}
                className="h-20 w-auto"
                priority
              />
              <div className="flex flex-col">
                <div className="font-sans font-extrabold tracking-tight text-3xl text-slate-900">
                  Wanjiru Kanyi Law Advocates
                </div>
                <div className="text-sm font-medium text-cyan-700 mt-1 italic">
                  Lead Where You Are
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    pathname === item.href
                      ? "text-black font-semibold"
                      : "text-black hover:text-cyan-600"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white hidden md:flex">
              <Link href="/contact">Schedule Consultation</Link>
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-black hover:bg-slate-100 hover:text-slate-900"
                  aria-label="Open main menu"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] sm:w-[400px] bg-white">
                <SheetTitle asChild>
                  <VisuallyHidden>Main Navigation Menu</VisuallyHidden>
                </SheetTitle>
                <SheetDescription asChild>
                  <VisuallyHidden>
                    Navigate to different sections of the website
                  </VisuallyHidden>
                </SheetDescription>
                
                {/* Mobile Navigation Menu */}
                <nav className="flex flex-col gap-8 mt-12">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors",
                        pathname === item.href
                          ? "text-black font-semibold"
                          : "text-black hover:text-cyan-600"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white mt-4">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Schedule Your Consultation
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
