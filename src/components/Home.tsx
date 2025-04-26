import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Home = ({ products }: any) => {
  const [showAll, setShowAll] = useState(false);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [popupImage, setPopupImage] = useState<string | null>(null);

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

  const handleImageClick = (imageUrl: string) => {
    setPopupImage(imageUrl);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <section className="py-20 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-white text-4xl font-bold text-center mb-12 drop-shadow-lg">
          See Popular Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 auto-rows-[200px]">
          {products.map((product: any, index: number) => {
            if (!showAll && index >= 4) return null; 
            const isTall = index % 4 === 1 || index % 4 === 2;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className={`relative group rounded-2xl overflow-hidden bg-gray-800 bg-opacity-60 backdrop-blur-lg border border-gray-700 shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 ${
                  isTall ? 'row-span-2' : 'row-span-1'
                }`}
                onClick={() => {
                  if (index === 1 || index === 2) {
                    handleVideoClick(index);
                  } else {
                    handleImageClick(product.image);
                  }
                }}
              >
                {(index === 1 || index === 2) ? (
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[index] = el;
                    }}
                    src={product.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Expand Button */}
        {products.length > 4 && !showAll && (
          <div className="w-full flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="text-white hover:text-gray-400 transition"
            >
              <ChevronDownIcon className="w-8 h-8 animate-bounce" />
            </button>
          </div>
        )}
        {showAll && (
          <div className="w-full flex justify-center mt-8">
            <button
              onClick={() => setShowAll(false)}
              className="text-white hover:text-gray-400 transition"
            >
              <ChevronUpIcon className="w-8 h-8 animate-bounce" />
            </button>
          </div>
        )}
      </div>

      {/* Popup */}
      {popupImage && (
        <div className="fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50 p-4 h-[70vh] w-[50vw] my-auto mx-auto rounded-2xl">
          <div className="relative w-full h-[70vh] ">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 transition"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>
            <img
              src={popupImage}
              alt="Popup"
              className="w-full h-[70vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
