import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Loader2 } from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    try {
      await axios.post('http://localhost:8000/api/quote', formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', project_type: '', description: '' });
    } catch (err) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="py-24 bg-[#F5F5F3]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A1A] mb-8 leading-tight">
            Ready to bring your project to life?
          </h2>
          <p className="font-sans text-[#6B6B6B] text-lg mb-10 max-w-sm leading-relaxed">
            Fill in the form and we'll send you a personalised quote within 24 hours.
          </p>
          <ul className="space-y-4 font-sans text-[#1A1A1A] font-medium">
            <li className="flex items-center gap-3">
              <span className="text-[#C8A96E]">✓</span> Fast 24-hour response
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#C8A96E]">✓</span> No commitment required
            </li>
            <li className="flex items-center gap-3">
              <span className="text-[#C8A96E]">✓</span> Free initial consultation
            </li>
          </ul>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#E8E8E4] py-3 text-[#1A1A1A] font-sans placeholder:text-[#6B6B6B] focus:outline-none focus:border-[#C8A96E] transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#E8E8E4] py-3 text-[#1A1A1A] font-sans placeholder:text-[#6B6B6B] focus:outline-none focus:border-[#C8A96E] transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#E8E8E4] py-3 text-[#1A1A1A] font-sans placeholder:text-[#6B6B6B] focus:outline-none focus:border-[#C8A96E] transition-colors"
            />
            <select
              name="project_type"
              required
              value={formData.project_type}
              onChange={handleChange}
              className={`w-full bg-transparent border-b border-[#E8E8E4] py-3 font-sans focus:outline-none focus:border-[#C8A96E] transition-colors appearance-none ${
                formData.project_type ? 'text-[#1A1A1A]' : 'text-[#6B6B6B]'
              }`}
            >
              <option value="" disabled className="text-[#6B6B6B]">Project Type</option>
              <option value="Exterior Rendering" className="text-black">Exterior Rendering</option>
              <option value="Interior Rendering" className="text-black">Interior Rendering</option>
              <option value="Walkthrough Animation" className="text-black">Walkthrough Animation</option>
              <option value="360° Panorama" className="text-black">360° Panorama</option>
              <option value="Site Plan Render" className="text-black">Site Plan Render</option>
              <option value="Multiple / Not Sure" className="text-black">Multiple / Not Sure</option>
            </select>
            <textarea
              name="description"
              placeholder="Project Description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-[#E8E8E4] py-3 text-[#1A1A1A] font-sans placeholder:text-[#6B6B6B] focus:outline-none focus:border-[#C8A96E] transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 mt-4 bg-[#C8A96E] text-white font-sans uppercase tracking-widest text-sm font-semibold hover:bg-[#A8894E] transition-colors flex justify-center items-center disabled:opacity-70"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send My Request'}
            </button>

            {status === 'success' && (
              <div className="p-4 bg-green-50 text-green-700 font-sans text-sm mt-4 text-center">
                Thank you! We'll be in touch within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div className="p-4 bg-red-50 text-red-700 font-sans text-sm mt-4 text-center">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteForm;
