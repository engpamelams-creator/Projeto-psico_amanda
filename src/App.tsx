import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BenefitsSection from "./components/BenefitsSection";
import AgendeSessaoSection from "./components/AgendeSessaoSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ForWhoSection from "./components/ForWhoSection";
// @ts-ignore: ContactSection is a .jsx module without type declarations
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";

export default function App(): React.ReactElement {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <AgendeSessaoSection />
        <HowItWorksSection />
        <ForWhoSection />
      </main>

      <ContactSection />
      <Footer />

      <FloatingWhatsAppButton />
    </>
  );
}
