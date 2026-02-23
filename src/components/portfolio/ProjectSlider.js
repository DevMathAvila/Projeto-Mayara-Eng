'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStep = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-xl bg-gray-200">

      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full h-full object-cover"
          alt={`Slide ${currentIndex}`}
        />
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button 
          onClick={prevStep}
          className="p-2 rounded-full bg-white/80 hover:bg-white text-arq-blue transition-all shadow-lg"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextStep}
          className="p-2 rounded-full bg-white/80 hover:bg-white text-arq-blue transition-all shadow-lg"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}