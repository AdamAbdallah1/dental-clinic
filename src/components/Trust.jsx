import { Award, Users, Sparkles } from 'lucide-react';
import { Card } from './ui/card';

export const Trust = () => {
  const trustPoints = [
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Serving our community with excellence and dedication for over a decade and a half.'
    },
    {
      icon: Users,
      title: 'Certified Staff',
      description: 'Our team of dental professionals holds advanced certifications and continues ongoing education.'
    },
    {
      icon: Sparkles,
      title: 'Modern Technology',
      description: 'State-of-the-art equipment and latest dental techniques for optimal results.'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose SmileCare?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing exceptional dental care that you can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <Card 
                key={index} 
                className="p-8 text-center hover:shadow-xl transition-shadow duration-300 border-0 bg-gradient-to-b from-blue-50 to-white"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};