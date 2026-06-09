import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const sections = [
  {
    title: "Product Details",
    content: (
      <div className="text-sm text-gray-600 leading-relaxed space-y-3">
        <p>
          The Double Bed Neo 6x6 in Beige is crafted for modern Indian homes — combining a sturdy
          engineered wood frame with a premium upholstered headboard in a warm, neutral beige tone
          that complements a wide range of interiors.
        </p>
        <ul className="list-none space-y-1.5 mt-2">
          {[
            "High-density foam headboard with fabric upholstery",
            "Engineered wood frame with anti-sag slat support",
            "Compatible with 6x6 ft mattresses (not included)",
            "Scratch-resistant laminate finish on base",
            "Easy-to-clean beige fabric — spill-resistant coating",
            "Available in 4 colors: Beige, Walnut, White, Charcoal",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-[#8b6f47] mt-0.5">·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Specifications",
    content: (
      <div className="text-sm text-gray-600 space-y-4">
        <p className="text-xs text-gray-400 uppercase tracking-widest">6x6 Configuration</p>
        <div className="grid grid-cols-2 gap-x-10 gap-y-3">
          {[
            ["Bed Size", "6 ft × 6 ft (King)"],
            ["Overall Height", '48" / 122 cm'],
            ["Headboard Height", '50" / 127 cm'],
            ["Bed Height (incl. legs)", '14" / 36 cm'],
            ["Frame Material", "Engineered Wood (HDF)"],
            ["Upholstery", "Fabric (Beige)"],
            ["Weight Capacity", "250 kg"],
            ["Assembly", "Required (team provided)"],
          ].map(([label, value], i) => (
            <div key={i} className="flex justify-between border-b border-gray-100 pb-2">
              <span className="text-gray-400">{label}</span>
              <span className="text-[#1a1a1a] text-right">{value}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Dimensions",
    content: (
      <div className="text-sm text-gray-600 space-y-3">
        <div className="bg-[#faf7f3] rounded-xl p-5 grid grid-cols-3 gap-6 text-center">
          {[
            { label: "Length", value: '78" / 198 cm' },
            { label: "Width", value: '72" / 183 cm' },
            { label: "Height", value: '48" / 122 cm' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-2xl text-[#1a1a1a] mb-1" style={{ fontFamily: "Georgia, serif" }}>
                {value.split("/")[0]}
              </p>
              <p className="text-xs text-gray-400">{label}</p>
              <p className="text-xs text-gray-400">{value.split("/")[1]}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">
          * Dimensions may vary ±1 cm due to handcrafted components.
        </p>
      </div>
    ),
  },
  {
    title: "Materials",
    content: (
      <div className="text-sm text-gray-600 space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Frame", text: "High-Density Fibreboard (HDF) with engineered wood joinery." },
            { label: "Headboard", text: "Polyurethane foam core wrapped in spill-resistant fabric upholstery." },
            { label: "Legs", text: "Solid wood legs with floor-safe felt protectors. Height-adjustable." },
            { label: "Finish", text: "Scratch-resistant laminate base. Beige fabric OEKO-TEX® certified." },
          ].map(({ label, text }) => (
            <div key={label} className="bg-[#faf7f3] rounded-lg p-4">
              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">{label}</p>
              <p className="text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Delivery & Returns",
    content: (
      <div className="text-sm text-gray-600 space-y-3">
        {[
          { emoji: "🚚", title: "Free Delivery & Assembly", text: "2-person delivery team assembles the bed in your room of choice, usually within 1–2 business days." },
          { emoji: "📦", title: "Easy Returns", text: "Schedule a free pickup anytime after your minimum tenure. Our team collects and disassembles everything." },
          { emoji: "🔄", title: "Free Relocation", text: "Moving cities? We relocate your rented furniture to your new address at no additional charge." },
        ].map(({ emoji, title, text }) => (
          <div key={title} className="flex items-start gap-3 p-4 bg-[#faf7f3] rounded-xl">
            <span className="text-xl">{emoji}</span>
            <div>
              <p className="text-sm text-[#1a1a1a] mb-0.5">{title}</p>
              <p className="text-xs text-gray-500">{text}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Rental Terms",
    content: (
      <div className="text-sm text-gray-600 space-y-3">
        {[
          ["Minimum Tenure", "1 Month"],
          ["Maximum Tenure", "36 Months"],
          ["Deposit", "₹1,170 (fully refundable)"],
          ["Auto-Renewal", "Monthly, unless cancelled 7 days before end date"],
          ["Extension", "Extend tenure anytime from your dashboard"],
          ["Early Return", "Allowed after minimum tenure with 7-day notice"],
          ["Damage Policy", "Fair-wear excepted; accidental damage charged at actuals"],
          ["Ownership", "Furniture remains property of Rentickle at all times"],
        ].map(([label, value], i) => (
          <div key={i} className="flex justify-between border-b border-gray-100 pb-2 text-sm">
            <span className="text-gray-400">{label}</span>
            <span className="text-[#1a1a1a] text-right">{value}</span>
          </div>
        ))}
      </div>
    ),
  },
];

export function ProductDetails() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-gray-100">
      {sections.map((section, i) => (
        <div key={i} className="border-b border-gray-100">
          <button
            className="w-full flex items-center justify-between py-5 text-left group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="text-sm tracking-wide text-[#1a1a1a] group-hover:text-[#8b6f47] transition-colors">
              {section.title}
            </span>
            <motion.span
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={18} className="text-gray-400" />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-6">{section.content}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
