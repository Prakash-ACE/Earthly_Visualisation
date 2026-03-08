import { motion } from 'framer-motion';

const services = [
  { num: '01', title: 'Architectural Visualization', desc: 'Photorealistic CGI exterior renders' },
  { num: '02', title: 'Interior Visualization', desc: 'Detailed interior moods & materials' },
  { num: '03', title: 'Walkthrough Animation', desc: 'Cinematic fly-through videos' },
  { num: '04', title: '360° Panoramas', desc: 'Immersive interactive panoramas' },
  { num: '05', title: 'Product Visualization', desc: '3D product renders for marketing' },
  { num: '06', title: 'Site Plan Renders', desc: "Aerial and bird's-eye project views" },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#F5F5F3]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-4">
            All 3D Services in One Place
          </h2>
          <p className="text-[#6B6B6B] font-sans text-lg max-w-2xl">
            From photorealistic renders to immersive animations — everything your project needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 group">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-start border-l-2 border-transparent hover:border-[#C8A96E] transition-colors duration-300 pl-6 -ml-6"
            >
              <div className="text-[#C8A96E] font-mono text-xl mr-6 mt-1 font-medium">
                {svc.num}
              </div>
              <div>
                <h3 className="text-[#1A1A1A] font-sans font-medium text-xl md:text-2xl mb-2">
                  {svc.title}
                </h3>
                <p className="text-[#6B6B6B] font-sans">
                  {svc.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
