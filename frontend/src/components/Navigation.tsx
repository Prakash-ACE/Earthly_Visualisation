import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useCalendly } from '../hooks/useCalendly';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCalendly } = useCalendly();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80; // Offset for sticky nav
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Work', id: 'portfolio' },
    { name: 'Services', id: 'services' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-md bg-white/90 shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          {/* Logo */}
          <div
            className="cursor-pointer text-2xl flex items-baseline"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className={`font-serif font-bold ${scrolled ? 'text-black' : 'text-white mix-blend-difference'}`}>Earthly</span>
            <span className={`font-serif font-light ml-2 ${scrolled ? 'text-black' : 'text-white mix-blend-difference'}`}>Visualisation</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm tracking-wide transition-colors hover:text-accent font-sans ${
                  scrolled ? 'text-black' : 'text-white mix-blend-difference'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('quote')}
              className={`px-5 py-2.5 border text-sm font-medium transition-colors font-sans ${
                scrolled
                  ? 'border-black text-black hover:bg-black hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-black mix-blend-difference'
              }`}
            >
              Get a Quote
            </button>
            <button
              onClick={openCalendly}
              className="px-5 py-2.5 bg-accent text-white text-sm font-medium hover:bg-accent-dk transition-colors border-none font-sans"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={scrolled ? 'text-black' : 'text-white mix-blend-difference'}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-white z-[60] flex flex-col justify-center items-center transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 p-2 text-black"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="flex flex-col space-y-8 items-center text-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-3xl font-serif text-black hover:text-accent transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="flex flex-col space-y-4 pt-8 w-full px-6">
            <button
              onClick={() => scrollToSection('quote')}
              className="w-full px-6 py-4 border border-black text-black text-lg font-medium hover:bg-black hover:text-white transition-colors"
            >
              Get a Quote
            </button>
            <button
              onClick={openCalendly}
              className="w-full px-6 py-4 bg-accent text-white text-lg font-medium hover:bg-accent-dk transition-colors"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
