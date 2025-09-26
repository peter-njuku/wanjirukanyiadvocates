import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone, Award, Shield, Scale as ScaleIcon, Globe, Star } from "lucide-react"

interface HeroSectionProps {
  hasCurvedBottom?: boolean;
}

export default function HeroSection({ hasCurvedBottom = false }: HeroSectionProps) {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48 min-h-[500px] sm:min-h-[600px] md:min-h-[700px]">
      {hasCurvedBottom && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-background rounded-t-[50%] transform translate-y-1/2 z-10"></div>
      )}
      {/* Background with Professional SVG */}
      <div className="absolute inset-0 z-0">
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0A2342" />
              <stop offset="100%" stop-color="#1E3A5F" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#2C5D8F" />
              <stop offset="100%" stop-color="#4A7BAF" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#6B8EAE" />
              <stop offset="100%" stop-color="#8DAAC9" />
            </linearGradient>
            <pattern id="checkered" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="#FF8C00" />
              <rect x="10" y="10" width="10" height="10" fill="#FF8C00" />
            </pattern>
            <mask id="fade-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="url(#fade-gradient)" />
            </mask>
            <linearGradient id="fade-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="white" stop-opacity="0" />
              <stop offset="100%" stop-color="white" stop-opacity="1" />
            </linearGradient>
            <linearGradient id="dark-orange-gradient-bottom" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="20%" stop-color="#FF8C00" stop-opacity="0" />
              <stop offset="100%" stop-color="#FF8C00" stop-opacity="1" />
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient1)" />
          <g opacity="0.15">
            <rect x="-200" y="100" width="800" height="1200" transform="rotate(20 -200 100)" fill="url(#gradient2)" />
            <rect x="1200" y="-300" width="800" height="1200" transform="rotate(-30 1200 -300)" fill="url(#gradient3)" />
            <rect x="500" y="700" width="1000" height="600" transform="rotate(10 500 700)" fill="url(#gradient2)" />
          </g>
          <g opacity="0.2">
            <rect x="0" y="0" width="100%" height="100%" fill="url(#checkered)" mask="url(#fade-mask)" />
          </g>
          <g opacity="1">
            <polygon points="1920,1080 1920,0 1200,1080" fill="url(#dark-orange-gradient-bottom)" />
            <polygon points="0,1080 0,800 800,1080" fill="url(#dark-orange-gradient-bottom)" />
          </g>
          <g opacity="0.1">
            <polygon points="0,0 400,0 200,400 0,200" fill="#FFFFFF" transform="translate(100, 50) rotate(15)" />
            <polygon points="1920,0 1520,0 1720,400 1920,200" fill="#FFFFFF" transform="translate(-100, 50) rotate(-15)" />
            <rect x="800" y="800" width="300" height="300" fill="#FFFFFF" transform="rotate(45 800 800)" />
          </g>
          <g opacity="0.05">
            <rect x="10%" y="0" width="2px" height="100%" fill="#FFFFFF" />
            <rect x="30%" y="0" width="2px" height="100%" fill="#FFFFFF" />
            <rect x="50%" y="0" width="2px" height="100%" fill="#FFFFFF" />
            <rect x="70%" y="0" width="2px" height="100%" fill="#FFFFFF" />
            <rect x="90%" y="0" width="2px" height="100%" fill="#FFFFFF" />
          </g>
        </svg>
      </div>

      {/* Award Badge - Hidden on mobile to save space */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 z-20 hidden sm:block">
        <div className="bg-amber-500/10 rounded-lg">
          <div className="bg-transparent text-white px-4 py-2 md:px-6 md:py-3 rounded-lg flex items-center space-x-2">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-2 py-1 md:px-3 md:py-2 rounded-lg">
              <Award className="h-4 w-4 md:h-5 md:w-5 text-amber-400" />
              <span className="text-amber-400 text-sm md:text-base">Advocates You Can Trust</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container relative mx-auto px-4 z-10">
        <div className="text-left space-y-4 sm:space-y-6">
          
          {/* Main Heading - Better mobile sizing */}
          <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white">
            Protecting Your Rights <br className="hidden sm:block" />
            <span className="text-amber-400 font-light">Across Kenya & Beyond</span>
          </h1>
          
          {/* Supporting Line - Better mobile sizing */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-light max-w-4xl">
            Expert legal representation in land law, succession matters, commercial disputes, and cybercrime — serving Kenyan clients with integrity and excellence.
          </p>

          {/* Trust Signals - Stack on mobile */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm text-slate-300 pt-2 sm:pt-4">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-lg">
              <Shield className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-amber-400" />
              <span>Kenyan Court Experience</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-lg">
              <ScaleIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-amber-400" />
              <span>Proven Results in Kenya</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-lg">
              <Globe className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-amber-400" />
              <span>International Clients</span>
            </div>
          </div>
          
          {/* CTAs - Stack on mobile, better spacing */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8 md:pt-12">
            <Button 
              size="lg" 
              className="bg-amber-400 hover:bg-amber-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-fit rounded-md animate-pulse text-sm sm:text-base" 
              asChild
            >
              <Link href="/contact" className="flex items-center justify-center">
                Get Free Case Assessment
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 bg-white/10 backdrop-blur-sm font-semibold transition-all duration-200 w-full sm:w-fit rounded-md text-sm sm:text-base"
              asChild
            >
              <Link href="tel:+254792932136" className="flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Call +254 792 932 136
              </Link>
            </Button>
          </div>

          {/* Quick Stats - Stack on mobile, smaller text */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-amber-400" />
              <span>Extensive experience in Kenyan legal services</span>
            </div>
            <div className="flex items-center">
              <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-amber-400" />
              <span>500+ Kenyan Clients Served</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href="https://wa.me/254792932136"
          className="bg-green-600 text-white p-3 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-700 transition-colors"
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