import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import BenefitsSection from "../components/BenefitsSection";
import AgendeSessaoSection from "../components/AgendeSessaoSection";
import HowItWorksSection from "../components/HowItWorksSection";
import ForWhoSection from "../components/ForWhoSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <AgendeSessaoSection />
      <HowItWorksSection />
      <ForWhoSection />
      <Footer />
    </div>
  );
}
