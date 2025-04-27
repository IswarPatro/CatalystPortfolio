import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const VideoPlayer = ({ products, heading }: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || products.length === 0) return;

    const gap = 24; // Tailwind gap-6 = 1.5rem
    const cardWidth = container.children[0]?.clientWidth || 350;
    let index = 0;

    const scrollNext = () => {
      if (!container) return;

      index++;
      if (index >= products.length) index = 0;

      const scrollTo = index * (cardWidth + gap);
      container.scrollTo({
        left: scrollTo,
        behavior: 'smooth',
      });
    };

    const interval = setInterval(scrollNext, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  const handleVideoClick = (index: number) => {
    const videoRef = videoRefs.current[index];
    if (!videoRef) return;

    if (videoRef.requestFullscreen) {
      videoRef.requestFullscreen();
    } else if ((videoRef as any).webkitRequestFullscreen) {
      (videoRef as any).webkitRequestFullscreen(); // Safari
    } else if ((videoRef as any).msRequestFullscreen) {
      (videoRef as any).msRequestFullscreen(); // IE11
    }
  };

  return (
    <section className="py-20 sm:min-h-screen overflow-hidden">
      <div className="w-full mx-auto">
        <h2 className="text-white text-4xl font-bold text-center mb-12 drop-shadow-lg">
          {heading}
        </h2>

        <motion.div
          ref={containerRef}
          className="flex gap-6 overflow-x-scroll scroll-smooth snap-x snap-mandatory pb-6 scrollbar-hide"
        >
          {products.map((product: any, index: number) => (
            <motion.a
            href={product.link}
            target="_blank"
              key={index}
              
              // onClick={() => handleVideoClick(index)}
              className="min-w-[400px] max-w-[90vw] snap-center cursor-pointer transform hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden bg-gray-800 bg-opacity-60 backdrop-blur-lg border border-gray-700 shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <video
                ref={(el) => {
                  if (el) videoRefs.current[index] = el;
                }}
                src={product.video}
                className="w-full h-[400px] object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoPlayer;
