"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone, Award, Shield, Scale, Globe, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Replace these with your actual image paths
  const slides = [
    "/background.jpg",
    "/gavel.jpeg",
    "/scale.jpeg"
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds
    
    return () => clearTimeout(timer)
  }, [currentSlide, slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
        
        {/* Professional overlay - darker on left, clear on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        
        {/* Slideshow navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-amber-400 w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Award Badge - More Professional Placement */}
      <div className="absolute top-8 left-8 z-20">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg shadow-xl flex items-center space-x-2">
          <Award className="h-5 w-5 text-white" />
          <span className="text-sm font-semibold tracking-wide">
            KEOnline Awards 2024 Nominee
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-2xl lg:max-w-3xl text-left space-y-6">
          
          {/* Main Heading - Kenyan Focused */}
          <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-white">
            Protecting Your Rights <br className="hidden md:block" />
            <span className="text-amber-400 font-light">Across Kenya & Beyond</span>
          </h1>
          
          {/* Supporting Line - More Kenyan Context */}
          <p className="text-xl text-slate-200 leading-relaxed max-w-2xl font-light">
            Expert legal representation in land law, succession matters, commercial disputes, and cybercrime — serving Kenyan clients with integrity and excellence.
          </p>

          {/* Trust Signals - Kenyan Focused */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 pt-2">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
              <Shield className="h-4 w-4 mr-2 text-amber-400" />
              <span>Kenyan Court Experience</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
              <Scale className="h-4 w-4 mr-2 text-amber-400" />
              <span>Proven Results in Kenya</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg">
              <Globe className="h-4 w-4 mr-2 text-amber-400" />
              <span>International Clients</span>
            </div>
          </div>
          
          {/* CTAs - More Action-Oriented */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 w-fit rounded-md" 
              asChild
            >
              <Link href="/consultation" className="flex items-center">
                Get Free Case Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 bg-white/10 backdrop-blur-sm font-semibold transition-all duration-200 w-fit rounded-md"
              asChild
            >
              <Link href="tel:+254792932136" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call +254 792 932 136
              </Link>
            </Button>
          </div>

          {/* Quick Stats - Like Kenyan firms use */}
          <div className="flex flex-wrap gap-6 pt-8 text-sm text-slate-300">
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-2 text-amber-400" />
              <span>10+ Years Kenyan Legal Experience</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-2 text-amber-400" />
              <span>500+ Kenyan Clients Served</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href="https://wa.me/254792932136"
          className="bg-green-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-700 transition-colors"
          aria-label="Chat on WhatsApp"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
          </svg>
        </a>
      </div>
    </section>
  )
}