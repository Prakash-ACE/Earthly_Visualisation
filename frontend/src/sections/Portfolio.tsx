import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Exterior', 'Interior', 'Animation', 'Aerial'];

const projectsData = Array.from({ length: 12 }, (_, i) => {
  const cats = ['Exterior', 'Interior', 'Animation', 'Aerial'];
  const cat = cats[i % 4];
  return {
    id: i + 1,
    title: `Project ${String(i + 1).padStart(2, '0')}`,
    category: cat,
    image: `https://picsum.photos/800/500?random=${i + 1}`,
  };
});

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredProjects = projectsData.filter((p) => filter === 'All' || p.category === filter);
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(6);
  }, [filter]);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-4">Portfolio</h2>
          <p className="text-[#6B6B6B] font-sans text-lg">
            Photorealistic work across architecture, interiors, and animation.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-8 mb-12 border-b border-[#E8E8E4]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`pb-4 text-sm font-sans tracking-wide uppercase transition-colors relative ${
                filter === cat ? 'text-[#C8A96E]' : 'text-[#6B6B6B] hover:text-[#1A1A1A]'
              }`}
            >
              {cat}
              {filter === cat && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8A96E]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {visibleProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden aspect-video cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 text-white">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[#C8A96E] text-xs font-sans uppercase tracking-widest mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-2xl">{project.title}</h3>
                    </div>
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Show More */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-8 py-3 border border-[#E8E8E4] text-[#1A1A1A] font-sans hover:border-[#1A1A1A] transition-colors"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
