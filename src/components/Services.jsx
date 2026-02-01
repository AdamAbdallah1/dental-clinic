import { motion } from "framer-motion";
import {
  Sparkles,
  Smile,
  ShieldPlus,
  AlertCircle,
} from "lucide-react";

const services = [
  {
    title: "Teeth Cleaning",
    desc: "Professional cleaning for healthy gums and fresh breath.",
    icon: Sparkles,
  },
  {
    title: "Teeth Whitening",
    desc: "Safe whitening treatments for a brighter smile.",
    icon: Smile,
  },
  {
    title: "Dental Implants",
    desc: "Permanent solutions to restore missing teeth.",
    icon: ShieldPlus,
  },
  {
    title: "Emergency Dental Care",
    desc: "Immediate care for pain, infections, or accidents.",
    icon: AlertCircle,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care using modern techniques and trusted
            medical standards.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 mb-6 rounded-full bg-blue-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>

                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
