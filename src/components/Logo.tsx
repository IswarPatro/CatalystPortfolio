import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Logos = ({ products, heading }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let index = 0;
    const cardWidth = container.children[0]?.clientWidth || 350;
    const gap = 24; // Tailwind gap-6 (1.5rem = 24px)

    const scrollNext = () => {
      if (!container) return;

      index++;

      if (index >= products.length) {
        index = 0;
      }

      const scrollTo = index * (cardWidth + gap);
      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    };

    const interval = setInterval(scrollNext, 2000); // every 2 seconds, slower than before

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <section className="py-8 overflow-hidden">
      <div className="w-full mx-auto">
        <h2 className="text-white text-4xl font-bold text-center mb-12 drop-shadow-lg">
          {heading}
        </h2>

        <motion.div
          ref={containerRef}
          className="flex gap-12 overflow-x-scroll scroll-smooth pb-6 snap-x snap-mandatory scrollbar-hide"
        >
          {products.map((product: any, index: number) => (
            <motion.div
              key={index}
              className="min-w-[300px] max-w-[300px] snap-center cursor-pointer transform hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden bg-gray-800 bg-opacity-60 backdrop-blur-lg border border-gray-700 shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[200px] object-fit"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Logos;
