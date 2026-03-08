import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const stats = [
  { value: 200, suffix: '+', label: 'Projects' },
  { value: 15, suffix: '+', label: 'Countries' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
  { value: 48, suffix: 'hr', label: 'Avg. Turnaround' },
];

const useCounter = (end: number, inView: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    let startTimestamp: number;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, inView]);

  return count;
};

const StatItem = ({ item }: { item: typeof stats[0] }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useCounter(item.value, inView);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-5xl md:text-6xl text-[#C8A96E] mb-2">
        {count}
        {item.suffix}
      </div>
      <div className="font-sans text-[#6B6B6B] uppercase tracking-wide text-sm font-medium">
        {item.label}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-[#F5F5F3]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <StatItem key={idx} item={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
