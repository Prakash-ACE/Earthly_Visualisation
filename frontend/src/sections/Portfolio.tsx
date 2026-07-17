import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['All', 'Exterior', 'Interior', 'Product', 'Animation', 'Aerial'];

const projectsData = [
  // Exterior
  {
    id: 1,
    title: 'Modern Villa Exterior',
    category: 'Exterior',
    images: [
      '/portfolio/exterior/Exterior_P01/1.jpeg',
      '/portfolio/exterior/Exterior_P01/2.jpeg',
      '/portfolio/exterior/Exterior_P01/3.jpeg',
      '/portfolio/exterior/Exterior_P01/4.jpeg',
      '/portfolio/exterior/Exterior_P01/5.jpeg',
    ],
  },
  {
    id: 2,
    title: 'Glass Facade Residence',
    category: 'Exterior',
    images: [
      '/portfolio/exterior/Exterior_P02/1.jpeg',
      '/portfolio/exterior/Exterior_P02/2.jpeg',
    ],
  },
  {
    id: 3,
    title: 'Lakeside Cabin',
    category: 'Exterior',
    images: [
      '/portfolio/exterior/Exterior_P03/1.jpg',
      '/portfolio/exterior/Exterior_P03/2.jpg',
    ],
  },
  // Interior
  {
    id: 4,
    title: 'Penthouse Living Room',
    category: 'Interior',
    images: [
      '/portfolio/interior/Interior_P01/1.jpg',
      '/portfolio/interior/Interior_P01/2.jpg',
      '/portfolio/interior/Interior_P01/3.jpg',
      '/portfolio/interior/Interior_P01/4.jpg',
      '/portfolio/interior/Interior_P01/5.jpg',
      '/portfolio/interior/Interior_P01/6.jpg',
    ],
  },
  {
    id: 5,
    title: 'Minimalist Kitchen',
    category: 'Interior',
    images: [
      '/portfolio/interior/Interior_P02/1.jpg',
      '/portfolio/interior/Interior_P02/2.jpg',
      '/portfolio/interior/Interior_P02/3.jpg',
      '/portfolio/interior/Interior_P02/4.jpg',
      '/portfolio/interior/Interior_P02/5.jpg',
      '/portfolio/interior/Interior_P02/6.jpg',
    ],
  },
  {
    id: 6,
    title: 'Luxurious Master Bedroom',
    category: 'Interior',
    images: [
      '/portfolio/interior/Interior_P03/1.jpeg',
      '/portfolio/interior/Interior_P03/2.jpeg',
      '/portfolio/interior/Interior_P03/3.jpeg',
      '/portfolio/interior/Interior_P03/4.jpeg',
      '/portfolio/interior/Interior_P03/5.jpeg',
    ],
  },
  {
    id: 7,
    title: 'Contemporary Bathroom',
    category: 'Interior',
    images: [
      '/portfolio/interior/Interior_P04/1.jpg',
      '/portfolio/interior/Interior_P04/2.jpg',
      '/portfolio/interior/Interior_P04/3.jpg',
      '/portfolio/interior/Interior_P04/4.jpg',
      '/portfolio/interior/Interior_P04/5.jpg',
      '/portfolio/interior/Interior_P04/6.jpg',
      '/portfolio/interior/Interior_P04/7.jpg',
      '/portfolio/interior/Interior_P04/8.jpg',
    ],
  },
  // Product
  {
    id: 8,
    title: 'Premium Watch Render',
    category: 'Product',
    images: [
      '/portfolio/product/Product01/1.jpeg',
      '/portfolio/product/Product01/2.jpeg',
      '/portfolio/product/Product01/3.jpeg',
      '/portfolio/product/Product01/4.jpeg',
    ],
  },
  {
    id: 9,
    title: 'Designer Chair',
    category: 'Product',
    images: [
      '/portfolio/product/Product02/1.jpeg',
      '/portfolio/product/Product02/2.jpeg',
      '/portfolio/product/Product02/3.jpeg',
    ],
  },
  {
    id: 10,
    title: 'High-End Headphones',
    category: 'Product',
    images: [
      '/portfolio/product/Product03/1.jpeg',
      '/portfolio/product/Product03/2.jpeg',
      '/portfolio/product/Product03/3.jpeg',
      '/portfolio/product/Product03/4.jpeg',
    ],
  },
  // Animation
  {
    id: 11,
    title: 'Luxury Estate Walkthrough',
    category: 'Animation',
    images: [
      '/portfolio/animation/Animation01/1.mp4',
    ],
  },
  {
    id: 12,
    title: 'Urban Apartment Fly-by',
    category: 'Animation',
    images: [
      '/portfolio/animation/Animation02/1.mp4',
    ],
  },
  // Aerial
  {
    id: 13,
    title: 'Suburban Development Aerial',
    category: 'Aerial',
    images: [
      '/portfolio/aerial/Aerial01/1.jpg',
      '/portfolio/aerial/Aerial01/2.jpg',
      '/portfolio/aerial/Aerial01/3.jpg',
    ],
  },
];

const isVideo = (src: string) => src.toLowerCase().endsWith('.mp4');

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const filteredProjects = projectsData.filter((p) => filter === 'All' || p.category === filter);
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(6);
  }, [filter]);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      } else if (e.key === 'ArrowLeft') {
        setCurrentImgIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentImgIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImgIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!selectedProject) return;
    setCurrentImgIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
  };

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
            Photorealistic work across architecture, interiors, and animation. Click to explore projects.
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
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImgIndex(0);
                }}
                className="group relative overflow-hidden aspect-video cursor-pointer"
              >
                {isVideo(project.images[0]) ? (
                  <video
                    src={project.images[0]}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
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

      {/* Lightbox Slideshow Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-6 md:p-12 select-none"
          >
            {/* Header */}
            <div className="flex justify-between items-center w-full z-10 text-white">
              <div>
                <span className="text-[#C8A96E] text-xs font-sans uppercase tracking-widest block mb-1">
                  {selectedProject.category}
                </span>
                <h3 className="font-serif text-xl md:text-2xl">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Carousel Main View */}
            <div className="flex-grow flex items-center justify-center relative w-full my-6">
              {/* Left Arrow */}
              {selectedProject.images.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-0 md:left-4 z-10 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Main Image */}
              <div className="relative max-w-5xl max-h-[70vh] aspect-video flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  {isVideo(selectedProject.images[currentImgIndex]) ? (
                    <motion.video
                      key={currentImgIndex}
                      src={selectedProject.images[currentImgIndex]}
                      controls
                      autoPlay
                      loop
                      muted
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
                    />
                  ) : (
                    <motion.img
                      key={currentImgIndex}
                      src={selectedProject.images[currentImgIndex]}
                      alt={`${selectedProject.title} - Render ${currentImgIndex + 1}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="max-w-full max-h-full object-contain shadow-2xl rounded-sm"
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              {selectedProject.images.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-0 md:right-4 z-10 p-3 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Image Counter Indicator */}
            <div className="text-center text-white/50 text-sm font-sans z-10">
              {currentImgIndex + 1} / {selectedProject.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
