import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BenefitsSection from "./components/BenefitsSection";
import AgendeSessaoSection from "./components/AgendeSessaoSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ForWhoSection from "./components/ForWhoSection";
// @ts-ignore: module './components/ContactSection' has no declaration file (JSX module)
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
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
        </>
    );
}
