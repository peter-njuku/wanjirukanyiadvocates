"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetTitle
} from "@/components/ui/sheet"; // Removed SheetDescription import
import { Phone, Mail, MapPin, Menu, Award } from "lucide-react";
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
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
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
                href="mailto:contact@wanjirukanyilaw.com"
                className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
                aria-label="Email us at contact@wanjirukanyilaw.com"
              >
                <Mail className="h-3 w-3" />
                <span>contact@wanjirukanyilaw.com</span>
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
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="Wanjiru Kanyi Law Advocates Logo"
                  width={180}
                  height={70}
                  className="h-14 w-auto transition-transform group-hover:scale-105"
                  priority
                />
                {/* Award badge on logo */}
                <div className="absolute -top-2 -right-2">
                  <div className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Award className="h-3 w-3" />
                    <span>2024</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="font-serif font-bold text-xl text-slate-900 ml-3 hidden sm:block"> 
              Wanjiru Kanyi Law Advocates
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors font-medium",
                  pathname === item.href
                    ? "text-cyan-600 font-semibold border-b-2 border-cyan-600"
                    : "text-slate-700 hover:text-cyan-600 hover:border-b-2 hover:border-cyan-600/50"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white hidden md:flex font-semibold">
            <Link href="/consultation">Book Consultation</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                aria-label="Open main menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] sm:w-[400px] bg-white">
              {/* Removed SheetDescription usage - it was causing the error */}
              <VisuallyHidden>
                <SheetTitle>Main Navigation Menu</SheetTitle>
              </VisuallyHidden>
              
              {/* Mobile Navigation Menu */}
              <nav className="flex flex-col gap-6 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-lg font-medium transition-colors py-2 px-4 rounded-lg",
                      pathname === item.href
                        ? "text-cyan-600 font-semibold bg-cyan-50"
                        : "text-slate-700 hover:text-cyan-600 hover:bg-slate-100"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white mt-4 font-semibold">
                  <Link href="/consultation" onClick={() => setIsOpen(false)}>
                    Book Consultation
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}