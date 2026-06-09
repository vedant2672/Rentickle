import { useState } from "react";
import { Heart, Star, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const products = [
  {
    id: 1,
    name: "Single Bed Neo 6x3",
    category: "Bedroom · Beds",
    rent: 299,
    rating: 4.7,
    reviews: 312,
    badge: "New Arrival",
    badgeColor: "bg-[#1a1a1a] text-white",
    image: "https://images.unsplash.com/photo-1650476524564-f94dc9669067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: 2,
    name: "Queen Bed Luxe - Walnut",
    category: "Bedroom · Beds",
    rent: 689,
    rating: 4.9,
    reviews: 198,
    badge: "Bestseller",
    badgeColor: "bg-red-600 text-white",
    image: "https://images.unsplash.com/photo-1565307586367-2c27d915cc8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: 3,
    name: "3-Door Wardrobe - White",
    category: "Bedroom · Storage",
    rent: 449,
    rating: 4.6,
    reviews: 421,
    badge: null,
    badgeColor: "",
    image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: 4,
    name: "Study Desk + Chair Combo",
    category: "Bedroom · Furniture",
    rent: 349,
    rating: 4.8,
    reviews: 567,
    badge: "Editor's Pick",
    badgeColor: "bg-amber-700 text-white",
    image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl bg-[#f5f3f0] aspect-[4/3] mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className={`absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full tracking-wide ${product.badgeColor}`}>
            {product.badge}
          </span>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); setWishlisted(!wishlisted); }}
          className={`absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-all ${
            wishlisted ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <Heart size={14} className={wishlisted ? "fill-red-400 text-red-400" : "text-gray-600"} />
        </button>
        <div
          className={`absolute bottom-0 left-0 right-0 bg-[#1a1a1a]/90 backdrop-blur-sm text-white text-center py-3 text-xs tracking-widest uppercase transition-transform duration-300 ${
            hovered ? "translate-y-0" : "translate-y-full"
          }`}
        >
          View Product
        </div>
      </div>

      <div>
        <p className="text-xs text-[#8b6f47] tracking-wider uppercase mb-1">{product.category}</p>
        <h3 className="text-[#1a1a1a] mb-1" style={{ fontFamily: "Georgia, serif", fontWeight: 400 }}>
          {product.name}
        </h3>
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={11}
                className={
                  s <= Math.floor(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-gray-200 text-gray-200"
                }
              />
            ))}
          </div>
          <span className="text-xs text-gray-400">({product.reviews})</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-[#1a1a1a]" style={{ fontFamily: "Georgia, serif" }}>
            ₹{product.rent.toLocaleString("en-IN")}
          </span>
          <span className="text-xs text-gray-400">/month</span>
        </div>
      </div>
    </motion.div>
  );
}

export function RelatedProducts() {
  return (
    <section className="py-16 lg:py-24 bg-[#faf7f3]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs text-[#8b6f47] tracking-[0.3em] uppercase mb-2">Complete Your Space</p>
            <h2
              className="text-3xl text-[#1a1a1a]"
              style={{ fontFamily: "Georgia, serif", fontWeight: 400 }}
            >
              You May Also Like
            </h2>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-2 text-sm text-[#1a1a1a] hover:text-[#8b6f47] transition-colors">
            View All <ArrowRight size={16} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-10 sm:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-sm text-[#1a1a1a] border border-[#1a1a1a] px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            View All Products <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
