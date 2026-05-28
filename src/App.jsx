import ContactCta from "./components/ContactCta";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OpsHelmInteractiveDemo from "./components/OpsHelmInteractiveDemo";
import OpsHelmProof from "./components/OpsHelmProof";
import OpsHelmRequest from "./components/OpsHelmRequest";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import VanessaVision from "./components/VanessaVision";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Header />
      <main>
        <Hero />
        <OpsHelmProof />
        <OpsHelmInteractiveDemo />
        <OpsHelmRequest />
        <Services />
        <Ecosystem />
        <Roadmap />
        <VanessaVision />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
