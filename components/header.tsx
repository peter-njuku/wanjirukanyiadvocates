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
  SheetDescription,
} from "@/components/ui/sheet";
import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {name:"Our Team", href:"/team"},
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-colors duration-300",
          isScrolled
            ? "bg-white/70 backdrop-blur-md shadow-sm"
            : "bg-white/95 backdrop-blur-sm"
        )}
      >
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
            "container mx-auto px-4 flex items-center justify-between transition-all duration-300",
            isScrolled ? "py-2" : "py-4"
          )}
        >
          {/* Logo + Heading */}
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/logo.jpg"
              alt="Wanjiru Kanyi Law Advocates Logo"
              width={isScrolled ? 180 : 280}
              height={isScrolled ? 64 : 110}
              className={cn(isScrolled ? "h-16 w-auto" : "h-24 w-auto")}
              priority
            />
            <div className="flex flex-col">
              <div
                className={cn(
                  "tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-green-500 bg-clip-text text-transparent transition-all duration-300",
                  isScrolled ? "text-xl font-bold" : "text-3xl font-extrabold"
                )}
              >
                WANJIRU KANYI LAW ADVOCATES
              </div>
              <div
                className={cn(
                  "italic bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent transition-all duration-300",
                  isScrolled ? "text-xs font-normal mt-0" : "text-sm font-medium mt-1"
                )}
              >
                Lead Where You Are
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors",
                    isActive
                      ? "text-green-400 font-semibold"
                      : "text-black hover:text-green-400"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <Button
            asChild
            className="bg-cyan-600 hover:bg-cyan-700 text-white hidden md:flex"
          >
            <Link href="/contact">Schedule Consultation</Link>
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
              <SheetTitle asChild>
                <VisuallyHidden>Main Navigation Menu</VisuallyHidden>
              </SheetTitle>
              <SheetDescription asChild>
                <VisuallyHidden>Navigate to different sections of the website</VisuallyHidden>
              </SheetDescription>

              {/* Mobile Navigation Menu */}
              <nav className="flex flex-col gap-8 mt-12">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors",
                        isActive
                          ? "text-green-400 font-semibold"
                          : "text-black hover:text-green-400"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <Button asChild className="bg-cyan-600 hover:bg-cyan-700 text-white mt-4">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Schedule Your Consultation
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Spacer to prevent content hiding behind the fixed header */}
      <div className={cn(isScrolled ? "h-[88px] md:h-[72px]" : "h-[160px] md:h-[144px]")} />
    </>
  );
}
