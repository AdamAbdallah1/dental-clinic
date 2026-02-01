import { motion } from "framer-motion";
import { Star, ShieldCheck, Users } from "lucide-react";

const stats = [
  {
    icon: Star,
    title: "4.9 Google Rating",
    subtitle: "Trusted by patients",
    color: "text-yellow-400",
    fill: true,
  },
  {
    icon: ShieldCheck,
    title: "10+ Years Experience",
    subtitle: "Certified professionals",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "1,000+ Patients",
    subtitle: "Successfully treated",
    color: "text-blue-600",
  },
];

export const Trust = () => {
  return (
    <section className="py-24 bg-white border-y">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow">
                  <Icon
                    className={`w-6 h-6 ${stat.color}`}
                    {...(stat.fill && { fill: "currentColor" })}
                  />
                </div>

                <p className="font-bold text-lg text-gray-900">
                  {stat.title}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {stat.subtitle}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
