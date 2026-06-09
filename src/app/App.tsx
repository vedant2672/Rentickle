import { ChevronRight, Share2 } from "lucide-react";
import { Header } from "./components/Header";
import { ProductGallery } from "./components/ProductGallery";
import { ProductInfo } from "./components/ProductInfo";
import { ProductDetails } from "./components/ProductDetails";
import { WhyRent } from "./components/WhyRent";
import { OfferCards } from "./components/OfferCards";
import { Reviews } from "./components/Reviews";
import { RelatedProducts } from "./components/RelatedProducts";
import { Footer } from "./components/Footer";

function Breadcrumb() {
  const crumbs = ["Home", "Bedroom", "Beds", "Double Bed Neo 6x6 - Beige"];
  return (
    <nav className="max-w-[1440px] mx-auto px-6 lg:px-12 py-2">
      <ol className="flex items-center gap-1 flex-wrap">
        {crumbs.map((crumb, i) => (
          <li key={crumb} className="flex items-center gap-1">
            {i < crumbs.length - 1 ? (
              <>
                <a href="#" className="text-xs text-gray-400 hover:text-[#8b6f47] transition-colors">
                  {crumb}
                </a>
                <ChevronRight size={12} className="text-gray-300" />
              </>
            ) : (
              <span className="text-xs text-[#1a1a1a] truncate max-w-[160px] sm:max-w-none">
                {crumb}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function StickyAddToCart() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-100 px-4 py-3 flex gap-3 shadow-lg">
      <div className="flex-1">
        <p className="text-xs text-gray-400 leading-none mb-0.5">Double Bed Neo 6x6 - Beige</p>
        <p className="text-sm text-[#1a1a1a]" style={{ fontFamily: "Georgia, serif" }}>
          ₹514/month
        </p>
      </div>
      <button className="flex-1 bg-[#1a1a1a] text-white text-xs tracking-widest uppercase rounded-lg py-3">
        Add to Cart
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <Breadcrumb />

      {/* Product section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 xl:gap-20 items-start">
          {/* Gallery — sticky on desktop */}
          <div className="lg:sticky lg:top-24">
            <ProductGallery />
          </div>

          {/* Info */}
          <div>
            <div className="flex justify-end mb-1">
              <button className="p-2 text-gray-400 hover:text-[#8b6f47] transition-colors">
                <Share2 size={18} />
              </button>
            </div>
            <ProductInfo />

            <div className="mt-10">
              <ProductDetails />
            </div>
          </div>
        </div>
      </section>

      {/* Offer cards */}
      <OfferCards />

      {/* Why Rent */}
      <WhyRent />

      {/* Customer photos */}
      <section className="bg-[#faf7f3] py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="text-xs text-[#8b6f47] tracking-[0.3em] uppercase mb-3 text-center">
            Community Gallery
          </p>
          <h2
            className="text-2xl lg:text-3xl text-center text-[#1a1a1a] mb-8"
            style={{ fontFamily: "Georgia, serif", fontWeight: 400 }}
          >
            Photos Shared By Rentickle Customers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              "https://images.unsplash.com/photo-1667584523543-d1d9cc828a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
              "https://images.unsplash.com/photo-1679558879563-335ee6932106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
              "https://images.unsplash.com/photo-1648881806148-e5c51179c826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
              "https://images.unsplash.com/photo-1742541656775-5fc717774c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
            ].map((url, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl aspect-square bg-[#f0ece6] group cursor-pointer"
              >
                <img
                  src={url}
                  alt={`Rentickle customer photo ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 px-3 py-1.5 rounded-full">
                    View Full Photo
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />

      <RelatedProducts />

      {/* CTA banner */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] text-white px-8 lg:px-16 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1704040686428-7534b262d0d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative z-10 text-center lg:text-left">
              <p className="text-xs tracking-[0.3em] uppercase text-[#c9a97a] mb-3">
                Complimentary Service
              </p>
              <h2
                className="text-3xl lg:text-4xl text-white mb-3"
                style={{ fontFamily: "Georgia, serif", fontWeight: 400 }}
              >
                Free Interior Design Consultation
              </h2>
              <p className="text-white/60 max-w-lg">
                Not sure what furniture works for your space? Our in-house designers will help you
                pick the perfect combination — at no charge.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0 flex flex-col sm:flex-row gap-3">
              <button className="px-8 py-4 bg-[#c9a97a] text-[#1a1a1a] text-sm tracking-widest uppercase rounded-xl hover:bg-[#b8966a] transition-colors font-medium">
                Book a Session
              </button>
              <button className="px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase rounded-xl hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <StickyAddToCart />
    </div>
  );
}
