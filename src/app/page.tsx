import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import SocialProofSection from "@/components/SocialProofSection";
import ReviewSection from "@/components/ReviewSection";
import CurriculumSection from "@/components/CurriculumSection";
import DeliverablesSection from "@/components/DeliverablesSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import FloatingCta from "@/components/FloatingCta";

export default function Home() {
  return (
    <>
      <Navigation />
      <FloatingCta />
      <main>
        <HeroSection />
        <ProblemSection />
        <SocialProofSection />
        <SolutionSection />
        <ReviewSection />
        <CurriculumSection />
        <DeliverablesSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}
