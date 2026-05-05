import { TopStrip } from "@/components/sections/TopStrip";
import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogosSection } from "@/components/sections/LogosSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <TopStrip />
      <Navbar />
      <main>
        <HeroSection />
        <LogosSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <WaitlistSection />
      </main>
      <FooterSection />
    </>
  );
}
