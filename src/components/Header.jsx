import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md transition-all duration-300 ${
        scrollY > 50 ? 'shadow-xl' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
          >
            SmileCare
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+96170123456"
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(961) 701-23456</span>
            </a>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
            >
              Book Now
            </Button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href="tel:+96170123456"
                  className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors py-2"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">(961) 701-23456</span>
                </a>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
                >
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
