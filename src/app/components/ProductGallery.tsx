import { useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3ODEwMzI2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Alvar Sectional Sofa - Main View",
  },
  {
    url: "https://images.unsplash.com/photo-1724582586580-8b52c02e99dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3ODEwMzI2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Alvar Sectional Sofa - Room Setting",
  },
  {
    url: "https://images.unsplash.com/photo-1693578616322-c8abe6c7393d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3ODEwMzI2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Alvar Sectional Sofa - Side Angle",
  },
  {
    url: "https://images.unsplash.com/photo-1759722665629-29df6ee4f9a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3ODEwMzI2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Alvar Sectional Sofa - Detail View",
  },
];

export function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setActiveIndex((i) => (i + 1) % images.length);

  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      {/* Main image */}
      <div
        className="relative overflow-hidden rounded-xl bg-[#f5f3f0] aspect-[4/3] lg:aspect-[5/4] cursor-zoom-in group"
        onClick={() => setZoomed(true)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex}
            src={images[activeIndex].url}
            alt={images[activeIndex].alt}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          />
        </AnimatePresence>

        {/* Badge */}
        <div className="absolute top-4 left-4 bg-red-600 text-white text-xs tracking-widest px-3 py-1 rounded-full uppercase">
          Sale
        </div>

        {/* Zoom hint */}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
          <ZoomIn size={16} className="text-[#1a1a1a]" />
        </div>

        {/* Nav arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm hover:bg-white transition-colors opacity-0 group-hover:opacity-100"
        >
          <ChevronRight size={18} />
        </button>

        {/* Dot indicators (mobile) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 lg:hidden">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === activeIndex ? "bg-white w-4" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`relative overflow-hidden rounded-lg aspect-square bg-[#f5f3f0] transition-all ${
              i === activeIndex
                ? "ring-2 ring-[#8b6f47] ring-offset-2"
                : "ring-1 ring-transparent hover:ring-gray-300"
            }`}
          >
            <img
              src={img.url}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setZoomed(false)}
        >
          <img
            src={images[activeIndex].url}
            alt={images[activeIndex].alt}
            className="max-w-full max-h-full object-contain rounded-lg"
          />
          <button
            className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full"
            onClick={() => setZoomed(false)}
          >
            <ChevronLeft size={20} className="rotate-180" />
          </button>
        </div>
      )}
    </div>
  );
}
