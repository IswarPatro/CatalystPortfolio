import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IoClose } from "react-icons/io5"; // for the cross icon (npm install react-icons)

const Products = ({ products, heading }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

    const interval = setInterval(scrollNext, 2000); // every 2 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-5 sm:min-h-screen overflow-hidden">
      <div className="w-full mx-auto mb-20">
        <h2 className="text-white text-4xl font-bold text-center mb-12 drop-shadow-lg">
          {heading}
        </h2>

        <motion.div
          ref={containerRef}
          className="flex gap-6 overflow-x-scroll scroll-smooth pb-6 snap-x snap-mandatory scrollbar-hide mt-10"
        >
          {products.map((product: any, index: number) => (
            <motion.div
              key={index}
              className="min-w-[400px] max-w-[90vw] snap-center cursor-pointer transform hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden bg-gray-800 bg-opacity-60 backdrop-blur-lg border border-gray-700 shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              onClick={() => handleImageClick(product.image)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[450px] object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50 p-4 h-[70vh] w-[50vw] my-auto mx-auto rounded-2xl">
        <div className="relative w-full h-[70vh] ">
          <button
            onClick={handleClosePopup}
            className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition"
          >
            <IoClose className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Popup"
            className="w-full h-[70vh] object-contain rounded-lg"
          />
        </div>
        </div>
      )}
    </section>
  );
};

export default Products;
