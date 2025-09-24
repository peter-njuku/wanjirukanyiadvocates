import Header from "@/components/header";
import Footer from "@/components/footer";
import HeroSection from "@/components/sections/hero-section";
import ServicesOverview from "@/components/sections/services-overview";
import ConsultationWeeks from "@/components/sections/consultation-weeks";
import CommunityFocus from "@/components/sections/community-focus";
import CTASection from "@/components/sections/cta-section";
import { Metadata } from "next"; // Import Metadata type

// Define metadata for this page
export const metadata: Metadata = {
  title: "Wanjiru & Associates | Expert Legal Services in Kenya",
  icons:{
     icon: "/favicon.ico",
  },
  description: "A trusted law firm based in Kenya, specializing in [list 2-3 key practice areas]. We are dedicated to serving our community with integrity and expertise.",
  keywords: "kenya law firm, legal services, lawyer nairobi, [add more keywords]",
  // Open Graph metadata for social sharing (highly recommended)
  openGraph: {
    title: "Wanjiru & Associates | Expert Legal Services",
    description: "A trusted law firm based in Kenya, dedicated to serving our community.",
    type: "website",
    // You would add an image here once you have one: images: ['/some-specific-page-image.jpg'],
  },
};

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
  );
}