import { useState } from 'react';

const clientLogos = Array.from({ length: 4 }, (_, i) => ({
  id: i + 1,
  name: `Client ${i + 1}`,
  src: `/clients/logo${i + 1}.png`,
}));

const LogoItem = ({ logo }: { logo: typeof clientLogos[0] }) => {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="inline-flex items-center justify-center w-48 h-20 mx-6 bg-[#F5F5F3] rounded-sm flex-shrink-0">
      {imgFailed ? (
        <span className="font-mono text-[#1A1A1A] text-xl font-medium tracking-wide">
          {logo.name}
        </span>
      ) : (
        <img
          src={logo.src}
          alt={logo.name}
          onError={() => setImgFailed(true)}
          className="max-w-[80%] max-h-[80%] object-contain"
        />
      )}
    </div>
  );
};

const Clients = () => {
  const logosList = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section className="py-20 bg-white overflow-hidden border-b border-[#E8E8E4]">
      <h3 className="text-center font-sans text-[#6B6B6B] text-sm uppercase tracking-widest font-medium mb-12">
        Trusted by Architects & Developers Worldwide
      </h3>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="py-4 animate-marquee whitespace-nowrap flex items-center">
          {logosList.map((logo, index) => (
            <LogoItem key={index} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
