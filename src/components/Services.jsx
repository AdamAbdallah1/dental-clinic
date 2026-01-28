import { Sparkles, Smile, Wrench, Pill } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';

export const Services = () => {
  const services = [
    {
      icon: Sparkles,
      title: 'Teeth Whitening',
      description: 'Professional whitening treatments that brighten your smile safely and effectively. Get visible results in just one session.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Smile,
      title: 'Orthodontics',
      description: 'Modern braces and clear aligners to straighten teeth and improve your bite. Customized treatment plans for all ages.',
      color: 'bg-teal-100 text-teal-600'
    },
    {
      icon: Wrench,
      title: 'Dental Implants',
      description: 'Permanent solution for missing teeth that look and feel natural. Advanced implant technology for lasting results.',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Pill,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, bonding, and contouring. Achieve the perfect smile you\'ve always wanted.',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Dental Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive dental care tailored to your unique needs. From routine checkups to advanced procedures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-0 bg-white"
              >
                <CardHeader className="space-y-4">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Don't see what you're looking for?</p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors underline decoration-2 underline-offset-4">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};