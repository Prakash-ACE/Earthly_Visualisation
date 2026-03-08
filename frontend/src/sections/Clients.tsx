const Clients = () => {
  const logos = Array.from({ length: 12 }, (_, i) => `LOGO ${i % 4 + 1}`);

  return (
    <section className="py-20 bg-white overflow-hidden border-b border-[#E8E8E4]">
      <h3 className="text-center font-sans text-[#6B6B6B] text-sm uppercase tracking-widest font-medium mb-12">
        Trusted by Architects & Developers Worldwide
      </h3>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="py-4 animate-marquee whitespace-nowrap flex items-center">
          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center w-48 h-20 mx-6 bg-[#F5F5F3] rounded-sm flex-shrink-0"
            >
              <span className="font-mono text-[#1A1A1A] text-xl font-medium tracking-wide">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
