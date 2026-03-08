import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCalendly } from '../hooks/useCalendly';

const slides = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openCalendly } = useCalendly();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background Slides */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide]})` }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <span className="uppercase tracking-widest text-[#C8A96E] font-medium text-xs font-sans mb-4 block">
            Industry-Leading
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-8">
            3D Architectural
            <br />
            Visualization Studio
          </h1>
          <ul className="space-y-3 mb-12 text-gray-200 font-sans text-lg">
            {[
              'Photorealistic exterior & interior renders',
              'Immersive walkthrough animations',
              'Fast turnaround, global clients',
              'Tailored to architects & developers',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-[#C8A96E] mr-4 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToQuote}
              className="px-8 py-4 bg-[#C8A96E] text-white text-sm uppercase tracking-wider font-medium hover:bg-[#A8894E] transition-colors"
            >
              Get a Quote
            </button>
            <button
              onClick={openCalendly}
              className="px-8 py-4 border border-white text-white text-sm uppercase tracking-wider font-medium hover:bg-white hover:text-black transition-colors"
            >
              Book a Call
            </button>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-12 h-1 rounded-full overflow-hidden bg-white/30 transition-all ${
              currentSlide === idx ? 'bg-white' : ''
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
