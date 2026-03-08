import { motion } from 'framer-motion';
import { useCalendly } from '../hooks/useCalendly';

const Pricing = () => {
  const { openCalendly } = useCalendly();

  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-4">Transparent Pricing</h2>
          <p className="text-[#6B6B6B] font-sans text-lg max-w-2xl mx-auto">
            Packages to suit every project. Custom quotes always available.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {/* Starter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 border border-[#E8E8E4] shadow-sm flex flex-col h-full"
          >
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">Starter</h3>
            <div className="text-[#C8A96E] font-serif text-4xl mb-6 flex items-baseline gap-2">
              <span className="text-lg">From</span> $299
            </div>
            <ul className="space-y-4 font-sans text-[#6B6B6B] flex-grow mb-8 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] shrink-0" /> 1–3 high-res renders
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] shrink-0" /> 2 revision rounds
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] shrink-0" /> 5-day delivery
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] shrink-0" /> Standard lighting setup
              </li>
            </ul>
            <button
              onClick={scrollToQuote}
              className="w-full py-3 border border-[#1A1A1A] text-[#1A1A1A] font-sans uppercase tracking-wide text-xs font-semibold hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              Get a Quote
            </button>
          </motion.div>

          {/* Professional */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-10 border-2 border-[#C8A96E] shadow-xl md:scale-105 relative flex flex-col h-full z-10"
          >
            <div className="absolute top-0 right-0 bg-[#C8A96E] text-white text-xs font-sans uppercase tracking-widest px-4 py-1 rounded-bl-xl rounded-tr-xl">
              Most Popular
            </div>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">Professional</h3>
            <div className="text-[#C8A96E] font-serif text-5xl mb-6 flex items-baseline gap-2">
              <span className="text-lg">From</span> $799
            </div>
            <ul className="space-y-4 font-sans text-[#1A1A1A] flex-grow mb-8 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] shrink-0" /> 5–10 renders + 1 animation
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] shrink-0" /> Unlimited revisions
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] shrink-0" /> 3-day delivery
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96E] shrink-0" /> Premium lighting & staging
              </li>
            </ul>
            <button
              onClick={scrollToQuote}
              className="w-full py-4 bg-[#C8A96E] text-white font-sans uppercase tracking-wide text-xs font-bold hover:bg-[#A8894E] transition-colors"
            >
              Get a Quote
            </button>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-8 border border-[#E8E8E4] shadow-sm flex flex-col h-full"
          >
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">Enterprise</h3>
            <div className="text-[#C8A96E] font-serif text-3xl mb-6">
              Custom Pricing
            </div>
            <ul className="space-y-4 font-sans text-[#6B6B6B] flex-grow mb-8 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] shrink-0" /> Full project coverage
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] shrink-0" /> Dedicated project manager
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] shrink-0" /> Priority turnaround
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] shrink-0" /> White-label options
              </li>
            </ul>
            <button
              onClick={openCalendly}
              className="w-full py-3 bg-[#1A1A1A] text-white font-sans uppercase tracking-wide text-xs font-semibold hover:bg-black transition-colors"
            >
              Book a Call
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
