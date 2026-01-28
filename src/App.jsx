import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Trust } from "./components/Trust";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Trust />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;