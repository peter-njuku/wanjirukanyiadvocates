"use client";

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone, Award, Shield, Scale, Globe, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Replace these with your actual image paths
  const slides = [
    {
      src: "/background.jpg",
      alt: "Professional legal team at Wanjiru Kanyi Law Advocates"
    },
    {
      src: "/gavel.jpeg",
      alt: "Kenyan courthouse and legal environment"
    },
    {
      src: "/scale.jpeg", 
      alt: "Client success stories and community service"
    }
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => clearTimeout(timer)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden h-[85vh] min-h-[600px] max-h-[800px]">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Using next/image for optimized loading */}
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              quality={90}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}
        
        {/* Professional overlay - darker on left, clear on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40 z-20"></div>
        
        {/* Slideshow navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-40 -translate-y-1/2 p-3 bg-black/40 rounded-full text-white hover:bg-black/60 transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-40 -translate-y-1/2 p-3 bg-black/40 rounded-full text-white hover:bg-black/60 transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 z-40 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-amber-400 w-8' : 'bg-white/60 w-3 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Award Badge */}
      <div className="absolute top-6 left-6 z-30">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2 rounded-lg shadow-xl flex items-center space-x-2 backdrop-blur-sm">
          <Award className="h-4 w-4 text-white" />
          <span className="text-xs font-semibold tracking-wide">
            KEOnline Awards 2024
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="container relative mx-auto px-4 z-30 h-full flex items-center">
        <div className="max-w-2xl text-left space-y-5">
          
          {/* Main Heading */}
          <h1 className="font-serif font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
            Protecting Your Rights <br className="hidden md:block" />
            <span className="text-amber-400 font-light">Across Kenya & Beyond</span>
          </h1>
          
          {/* Supporting Line */}
          <p className="text-lg text-slate-200 leading-relaxed max-w-2xl font-light">
            Expert legal representation in land law, succession matters, commercial disputes, and cybercrime.
          </p>

          {/* Trust Signals */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300 pt-2">
            <div className="flex items-center bg-white/15 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
              <Shield className="h-4 w-4 mr-2 text-amber-400" />
              <span className="text-xs">Kenyan Court Experience</span>
            </div>
            <div className="flex items-center bg-white/15 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/10">
              <Scale className="h-4 w-4 mr-2 text-amber-400" />
              <span className="text-xs">Proven Results</span>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-fit rounded-md py-4 px-6 text-sm" 
              asChild
            >
              <Link href="/consultation" className="flex items-center">
                Free Case Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 bg-white/15 backdrop-blur-sm font-semibold transition-all duration-300 w-fit rounded-md py-4 px-6 text-sm border-2"
              asChild
            >
              <Link href="tel:+254792932136" className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 pt-6 text-xs text-slate-300">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
              <Star className="h-3 w-3 mr-1.5 text-amber-400" />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg">
              <Star className="h-3 w-3 mr-1.5 text-amber-400" />
              <span>500+ Clients Served</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href="https://wa.me/254792932136"
          className="bg-green-600 text-white p-3 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-700 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488"/>
          </svg>
        </a>
      </div>
    </section>
  )
}