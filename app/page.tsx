import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/sections/hero-section"
import ServicesOverview from "@/components/sections/services-overview"
import ConsultationWeeks from "@/components/sections/consultation-weeks"
import CommunityFocus from "@/components/sections/community-focus"
import CTASection from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <ConsultationWeeks />
      <CommunityFocus />
      <CTASection />
      <Footer />
    </div>
  )
}
