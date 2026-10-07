import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { WhyUs } from "./components/WhyUs";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { Cta } from "./components/Cta";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Process />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
