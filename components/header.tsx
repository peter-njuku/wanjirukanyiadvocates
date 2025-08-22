"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-transparent" : "bg-white/70 backdrop-blur-sm border-b border-slate-200"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo + Heading + Tagline */}
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src="/logo.jpg"
            alt="Wanjiru Kanyi Law Advocates Logo"
            width={250}
            height={100}
            className="h-20 w-auto"
            priority
          />
          <div className="flex flex-col">
            {/* Gradient Heading */}
            <div className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-600 via-blue-600 to-green-500 bg-clip-text text-transparent">
              Wanjiru Kanyi Law Advocates
            </div>

            {/* Tagline */}
            <div className="text-sm font-medium mt-1 italic bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
              Lead Where You Are
            </div>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="flex space-x-6 text-slate-700 font-medium">
          <Link href="/about" className="hover:text-cyan-600 transition-colors">About</Link>
          <Link href="/services" className="hover:text-cyan-600 transition-colors">Services</Link>
          <Link href="/contact" className="hover:text-cyan-600 transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
