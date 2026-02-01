import { motion } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-28 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Appointment Today</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">Fast and convenient booking via WhatsApp or phone. Our team will respond promptly to schedule your appointment.</p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://wa.me/96170123456" className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-10 py-6 rounded-2xl font-semibold shadow-lg transition-all duration-300">
            <MessageSquare className="w-5 h-5" /> WhatsApp Now
          </motion.a>

          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="tel:+96170123456" className="flex items-center justify-center gap-3 border border-blue-600 text-blue-600 px-10 py-6 rounded-2xl font-semibold shadow-sm hover:shadow-lg hover:bg-blue-50 transition-all duration-300">
            <Phone className="w-5 h-5" /> Call Clinic
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
