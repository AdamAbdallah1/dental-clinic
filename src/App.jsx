import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Trust } from "./components/Trust";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      <Hero />
      <Trust />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
