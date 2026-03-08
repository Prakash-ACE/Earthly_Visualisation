import { useCalendly } from '../hooks/useCalendly';

const Footer = () => {
  const { openCalendly } = useCalendly();

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#1A1A1A] pt-24 pb-12 overflow-hidden flex flex-col">
      {/* Contact CTA Band */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 w-full text-white flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#333333] pb-24 gap-12">
        <div className="max-w-xl">
          <h2 className="font-serif text-5xl md:text-6xl mb-6">Let's create visuals that sell</h2>
          <p className="font-sans text-[#E8E8E4] text-lg font-light tracking-wide">
            Book a discovery call to discuss your upcoming project.
          </p>
        </div>
        <div className="flex flex-col gap-6 w-full md:w-auto">
          <button
            onClick={openCalendly}
            className="w-full md:w-auto px-10 py-5 bg-[#C8A96E] hover:bg-[#A8894E] text-white font-sans uppercase tracking-widest text-sm font-semibold transition-colors"
          >
            Book a Call
          </button>
          <div className="font-sans text-[#E8E8E4] text-sm md:text-right space-y-2 mt-2 font-light">
            <p className="flex items-center md:justify-end gap-3"><span className="text-[#C8A96E]">📧</span> hello@earthlyvisualisation.com</p>
            <p className="flex items-center md:justify-end gap-3"><span className="text-[#C8A96E]">📱</span> +44 XXXX XXXXXX</p>
            <p className="flex items-center md:justify-end gap-3"><span className="text-[#C8A96E]">📍</span> London, United Kingdom</p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-white w-full flex-grow mt-auto">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 w-full pt-20 pb-12 border-t border-[#E8E8E4]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">
            {/* Col 1 */}
            <div className="flex flex-col gap-6">
              <div className="text-2xl flex items-baseline select-none">
                <span className="font-serif font-bold text-[#1A1A1A]">Earthly</span>
                <span className="font-serif font-light ml-2 text-[#1A1A1A]">Visualisation</span>
              </div>
              <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-sm">
                Bringing spaces to life through world-class 3D visualization.
              </p>
              <div className="flex gap-4 mt-2">
                {['Instagram', 'LinkedIn', 'Behance'].map((social) => (
                  <a key={social} href="#" className="text-xs uppercase tracking-widest text-[#1A1A1A] hover:text-[#C8A96E] font-medium transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm uppercase tracking-widest text-[#1A1A1A] font-semibold mb-2">Quick Links</h4>
              {['Work', 'Services', 'Pricing', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => scrollToSection(link.toLowerCase() === 'work' ? 'portfolio' : link.toLowerCase(), e)}
                  className="text-sm text-[#6B6B6B] hover:text-[#C8A96E] transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Col 3 */}
            <div className="flex flex-col gap-4">
              <h4 className="text-sm uppercase tracking-widest text-[#1A1A1A] font-semibold mb-2">Services</h4>
              {[
                'Architectural Visualization',
                'Interior Visualization',
                'Walkthrough Animation',
                '360° Panoramas',
                'Product Visualization',
                'Site Plan Renders',
              ].map((service) => (
                <a
                  key={service}
                  href="#services"
                  onClick={(e) => scrollToSection('services', e)}
                  className="text-sm text-[#6B6B6B] hover:text-[#C8A96E] transition-colors"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-[#E8E8E4] flex flex-col md:flex-row justify-between items-center text-xs text-[#6B6B6B] tracking-wide gap-4">
            <p>© 2025 Earthly Visualisation. All rights reserved.</p>
            <a href="#" className="hover:text-[#1A1A1A] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
