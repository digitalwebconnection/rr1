import { Header } from "@/components/header"
import { Hero  } from "@/components/hero-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import AmenitiesSection  from "@/components/amenities-section"
import  LocationSection  from "@/components/location-section"
import PricingSection  from "@/components/pricing-section"
import { GallerySection } from "@/components/gallery-section"
import InvestmentSection  from "@/components/investment-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyChooseSection />
      <InvestmentSection />
      <AmenitiesSection/>
      <LocationSection />
      <PricingSection />
      <GallerySection />
      
      {/* <TestimonialsSection /> */}
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
