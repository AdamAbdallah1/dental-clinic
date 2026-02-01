import { motion, useAnimation, useViewportScroll, useTransform } from "framer-motion";
import { Phone, Star, ShieldCheck, Users } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect } from "react";

export const Hero = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -30]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white py-10 px-4">
      {/* Background blobs */}
      <motion.div style={{ y: y1 }} className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60" />
      <motion.div style={{ y: y2 }} className="absolute top-1/3 -right-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" />
            Trusted Dental Clinic in Beirut
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Get More Dental Appointments <br className="hidden sm:block" />
            Without the Waiting
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Modern dental care with instant WhatsApp booking, experienced doctors, and same-day availability.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-2"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9 Google Rating</div>
            <div className="flex items-center gap-2"><Users className="w-4 h-4 text-blue-600" /> 1,000+ Patients</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-blue-600" /> 10+ Years Experience</div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Button onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 rounded-xl shadow-lg">
              Book on WhatsApp
            </Button>
            <a href="tel:+96170123456" className="flex items-center justify-center gap-2 border border-blue-600 text-blue-600 px-10 py-6 rounded-xl font-semibold hover:bg-blue-50 transition">
              <Phone className="w-5 h-5" /> Call Clinic
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative">
          <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80" alt="Dental clinic" className="rounded-3xl shadow-2xl" />
          <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center"><Phone className="w-5 h-5 text-blue-600" /></div>
            <div>
              <p className="font-semibold text-sm">Same-Day Appointments</p>
              <p className="text-xs text-gray-500">Fast WhatsApp response</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
