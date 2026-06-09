import { useState } from "react";
import { Heart, Star, Truck, Wrench, PackageOpen, ArrowLeftRight, BadgeIndianRupee } from "lucide-react";
import { motion } from "motion/react";

const bedSizes = ["6x3", "6x4", "6x5", "6x6"];

const tenureOptions = [
  { months: 1, label: "1 Month" },
  { months: 2, label: "2 Months" },
  { months: 3, label: "3 Months" },
  { months: 4, label: "4 Months" },
  { months: 5, label: "5 Months" },
  { months: 6, label: "6 Months" },
  { months: 9, label: "9 Months" },
  { months: 12, label: "12 Months" },
  { months: 18, label: "18 Months" },
  { months: 24, label: "24 Months" },
  { months: 36, label: "36 Months" },
];

const rentByTenure: Record<number, number> = {
  1: 750, 2: 680, 3: 620, 4: 580, 5: 545,
  6: 514, 9: 490, 12: 460, 18: 430, 24: 400, 36: 370,
};

const deposit = 1170;

const packageVariants = [
  {
    id: "only-cot",
    label: "Only Cot",
    badge: "Bed Only",
    baseRentMultiplier: 1,
  },
  {
    id: "with-4-mattress",
    label: "With 4\" Mattress",
    badge: "Best Value",
    baseRentMultiplier: 1.36,
  },
  {
    id: "with-6-mattress",
    label: "With 6\" Premium Mattress",
    badge: "Most Popular",
    baseRentMultiplier: 1.65,
  },
];

const benefits = [
  { icon: Truck, label: "Free Delivery" },
  { icon: Wrench, label: "Free Maintenance" },
  { icon: PackageOpen, label: "Easy Returns" },
  { icon: ArrowLeftRight, label: "Free Relocation" },
  { icon: BadgeIndianRupee, label: "Refundable Deposit" },
];

const colors = [
  { name: "Beige", hex: "#e8dcc8" },
  { name: "Walnut", hex: "#7c5c3b" },
  { name: "White", hex: "#f4f4f2" },
  { name: "Charcoal", hex: "#3d3d3d" },
];

export function ProductInfo() {
  const [selectedSize, setSelectedSize] = useState(3); // 6x6 default
  const [selectedTenure, setSelectedTenure] = useState(6);
  const [selectedColor, setSelectedColor] = useState(0);
  const [paymentMode, setPaymentMode] = useState<"advance" | "monthly">("monthly");
  const [wishlisted, setWishlisted] = useState(false);
  const [added, setAdded] = useState(false);
  const [tenureDropdownOpen, setTenureDropdownOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState("with-6-mattress");

  const baseRent = rentByTenure[selectedTenure];
  const variantMultiplier = packageVariants.find((v) => v.id === selectedVariant)?.baseRentMultiplier || 1;
  const monthlyRent = Math.round(baseRent * variantMultiplier);
  const totalRent = monthlyRent * selectedTenure;
  const advanceTotal = totalRent + deposit;
  const dailyRate = Math.round(monthlyRent / 30);
  
  // Calculate advance payment discount (10% off monthly rent when paying in advance)
  const advanceDiscountPercentage = 10;
  const discountedMonthlyRent = Math.round(monthlyRent * (1 - advanceDiscountPercentage / 100));
  const monthlyRentDisplay = paymentMode === "advance" ? discountedMonthlyRent : monthlyRent;
  
  // Total advance discount
  const advanceDiscount = Math.round(advanceTotal * 0.05);
  const advanceDiscountedTotal = advanceTotal - advanceDiscount;

  const getTenureTag = (months: number) => {
    if (months === 12) return "Best Value";
    if (months === 6) return "Most Popular";
    if (months === 36) return "Longest Savings";
    return null;
  };

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="flex flex-col gap-3">
      {/* 1. Category Badge */}
      <div className="flex items-center gap-2">
        <span className="text-xs tracking-[0.2em] uppercase text-[#8b6f47]">
          Bedroom · Beds
        </span>
      </div>

      {/* 2. Product Name */}
      <div>
        <h1
          className="text-3xl lg:text-4xl text-[#1a1a1a] leading-tight"
          style={{ fontFamily: "Georgia, serif", fontWeight: 400 }}
        >
          Double Bed Neo 6x6 - Beige
        </h1>
      </div>

      {/* 3. Rating & Reviews */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              size={14}
              className={s <= 4 ? "fill-amber-400 text-amber-400" : s === 5 ? "fill-gray-200 text-gray-200" : "fill-amber-400 text-amber-400"}
            />
          ))}
        </div>
        <span className="text-sm font-medium text-[#1a1a1a]">4.8</span>
        <a href="#reviews" className="text-sm text-gray-400 hover:text-[#8b6f47] underline underline-offset-2 transition-colors">
          935 Reviews
        </a>
        <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
          92% recommend
        </span>
        <span className="flex items-center gap-1 text-xs bg-amber-50 text-amber-700 px-2.5 py-1 rounded-full border border-amber-200">
          ⭐ Top Rated
        </span>
        <span className="flex items-center gap-1 text-xs bg-red-50 text-red-600 px-2.5 py-1 rounded-full border border-red-200">
          🔥 Most Rented
        </span>
      </div>

      {/* 4-12. RENTAL DECISION CARD - Clean design matching the photo */}
      <motion.div
        className="bg-[#faf7f3] rounded-xl p-6 space-y-4 mt-2"
        layout
      >
        {/* Pricing Summary at top */}
        <motion.div
          className="space-y-3"
          key={`${selectedTenure}-${paymentMode}`}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Monthly Rent */}
          <div>
            <p className="text-xs text-[#8b6f47] uppercase tracking-widest font-medium mb-1">
              Monthly Rent
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-baseline gap-1">
                <motion.span
                  key={monthlyRentDisplay}
                  className="text-5xl text-[#1a1a1a] font-light"
                  style={{ fontFamily: "Georgia, serif" }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
                >
                  ₹{monthlyRentDisplay}
                </motion.span>
                <span className="text-sm text-gray-500">/month</span>
              </div>
              {paymentMode === "advance" && (
                <motion.span
                  className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {advanceDiscountPercentage}% off
                </motion.span>
              )}
            </div>
          </div>

          {/* Refundable Deposit - inline */}
          <div className="flex items-center gap-2 text-sm pt-1">
            <BadgeIndianRupee size={16} className="text-[#8b6f47]" />
            <span className="text-gray-600">Refundable Deposit:</span>
            <span className="text-[#1a1a1a] font-medium">
              ₹{deposit.toLocaleString("en-IN")}
            </span>
          </div>
        </motion.div>

        {/* Payment Plan Toggle */}
        <div className="flex rounded-lg bg-white overflow-hidden w-fit border border-gray-300">
          {(["monthly", "advance"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setPaymentMode(mode)}
              className={`px-5 py-2.5 text-xs tracking-wide font-semibold transition-colors ${
                paymentMode === mode
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-white text-[#1a1a1a] hover:bg-gray-50"
              }`}
            >
              {mode === "monthly" ? "Pay Monthly" : "Pay In Advance"}
            </button>
          ))}
        </div>

        {/* Payment mode info */}
        {paymentMode === "advance" && (
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-xs text-green-700 font-medium mb-2">✓ Save ₹{advanceDiscount.toLocaleString("en-IN")} with Advance Payment</p>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs text-green-700">
                  <span>Total (5% Discount):</span>
                  <span className="font-bold">₹{advanceDiscountedTotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span className="line-through">Original:</span>
                  <span className="line-through">₹{advanceTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-600">
              💰 Pay ₹{advanceDiscountedTotal.toLocaleString("en-IN")} upfront for {selectedTenure} month{selectedTenure > 1 ? "s" : ""} (incl. deposit)
            </p>
          </motion.div>
        )}

        {/* Tenure Selector - Dropdown */}
        <div className="relative">
          <label className="text-xs tracking-widest uppercase text-[#1a1a1a] font-medium mb-2 block">
            Rental Period
          </label>
          <button
            onClick={() => setTenureDropdownOpen(!tenureDropdownOpen)}
            className="w-full px-4 py-3.5 text-sm text-[#1a1a1a] font-medium bg-white border-2 border-[#d4c4b0] rounded-xl hover:border-[#8b6f47] transition-colors flex items-center justify-between"
          >
            <div className="text-left">
              <div className="text-sm font-semibold text-[#1a1a1a]">
                {selectedTenure} Month{selectedTenure > 1 ? "s" : ""}
              </div>
              {getTenureTag(selectedTenure) && (
                <div className="text-xs text-[#8b6f47] font-medium">
                  {getTenureTag(selectedTenure)}
                </div>
              )}
            </div>
            <span className={`text-[#8b6f47] transform ${tenureDropdownOpen ? "rotate-180" : ""} transition-transform`}>
              ▼
            </span>
          </button>
          
          {tenureDropdownOpen && (
            <div
              className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#8b6f47] rounded-xl shadow-xl z-50 max-h-72 overflow-y-auto"
            >
              {tenureOptions.map(({ months, label }, index) => {
                const tag = getTenureTag(months);
                const rent = rentByTenure[months];
                const isSelected = selectedTenure === months;
                return (
                  <button
                    key={months}
                    onClick={() => {
                      setSelectedTenure(months);
                      setTenureDropdownOpen(false);
                    }}
                    className={`w-full text-left px-5 py-4 transition-colors ${
                      index !== tenureOptions.length - 1 ? "border-b border-gray-100" : ""
                    } ${
                      isSelected
                        ? "bg-gradient-to-r from-[#faf7f3] to-[#f5f0e8] border-l-4 border-[#8b6f47]"
                        : "hover:bg-[#faf7f3]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className={`text-sm font-semibold ${isSelected ? "text-[#8b6f47]" : "text-[#1a1a1a]"}`}>
                          {label}
                        </div>
                        <div className={`text-xs mt-0.5 ${isSelected ? "text-[#8b6f47]" : "text-gray-500"}`}>
                          ₹{rent}/month
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {tag && (
                          <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-bold whitespace-nowrap">
                            {tag}
                          </span>
                        )}
                        {isSelected && (
                          <span className="text-[#8b6f47] text-lg">
                            ✓
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Add to Cart CTA */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <motion.button
            onClick={handleAddToCart}
            whileTap={{ scale: 0.96 }}
            className={`flex-1 py-3.5 rounded-lg text-sm tracking-wider uppercase font-semibold transition-all ${
              added
                ? "bg-green-600 text-white"
                : "bg-[#1a1a1a] text-white hover:bg-[#2d2d2d]"
            }`}
          >
            {added ? "✓ Added to Cart" : "Add to Cart"}
          </motion.button>
          <motion.button
            onClick={() => setWishlisted(!wishlisted)}
            whileTap={{ scale: 0.96 }}
            className={`sm:w-14 py-3.5 sm:py-0 rounded-lg border-2 transition-all flex items-center justify-center gap-2 font-semibold ${
              wishlisted
                ? "border-red-300 bg-red-50 text-red-500"
                : "border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#faf7f3]"
            }`}
          >
            <Heart size={18} className={wishlisted ? "fill-red-400 text-red-400" : ""} />
            <span className="sm:hidden text-sm">Save</span>
          </motion.button>
        </div>
      </motion.div>

      {/* Available Packages Section */}
      <div className="space-y-3">
        <p className="text-xs tracking-widest uppercase text-[#1a1a1a] font-medium">
          Available Packages
        </p>

        <div className="flex gap-2 flex-wrap">
          {packageVariants.map((variant) => {
            const isSelected = selectedVariant === variant.id;
            
            return (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant.id)}
                className={`px-5 py-2.5 rounded-lg border-2 font-medium text-sm transition-all ${
                  isSelected
                    ? "border-[#8b6f47] bg-[#faf7f3] text-[#8b6f47]"
                    : "border-gray-300 bg-white text-gray-600 hover:border-[#8b6f47]"
                }`}
              >
                {variant.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Benefits strip */}
      <div className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1">
        {benefits.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1.5 flex-shrink-0 bg-white border border-gray-100 rounded-xl px-3 py-2.5 text-center min-w-[80px] shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-7 h-7 rounded-full bg-[#faf7f3] flex items-center justify-center">
              <Icon size={13} className="text-[#8b6f47]" />
            </div>
            <span className="text-[10px] text-gray-600 leading-tight">{label}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100" />

      {/* 13-14. Product Customization Section */}
      <div className="space-y-5">
        {/* Size Selection */}
        <div>
          <p className="text-sm tracking-wide text-[#1a1a1a] font-semibold mb-3">
            Size: <span className="text-[#8b6f47]">{bedSizes[selectedSize]}</span>
          </p>
          <div className="grid grid-cols-4 gap-2">
            {bedSizes.map((size, i) => (
              <motion.button
                key={size}
                onClick={() => setSelectedSize(i)}
                whileTap={{ scale: 0.95 }}
                className={`py-3 text-sm font-medium rounded-lg border-2 transition-all ${
                  i === selectedSize
                    ? "border-[#8b6f47] bg-[#8b6f47] text-white shadow-md"
                    : "border-gray-200 text-gray-600 hover:border-[#8b6f47] bg-white"
                }`}
              >
                {size}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div>
          <p className="text-sm tracking-wide text-[#1a1a1a] font-semibold mb-3">
            Color: <span className="text-[#8b6f47]">{colors[selectedColor].name}</span>
          </p>
          <div className="flex gap-4">
            {colors.map((color, i) => (
              <motion.button
                key={i}
                onClick={() => setSelectedColor(i)}
                title={color.name}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 rounded-full border-3 transition-all shadow-md ${
                  i === selectedColor
                    ? "border-[#8b6f47] scale-110 shadow-lg"
                    : "border-transparent hover:border-gray-300"
                }`}
                style={{ backgroundColor: color.hex, boxShadow: i === selectedColor ? undefined : "inset 0 0 0 1px rgba(0,0,0,0.1)" }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Order Summary Card */}
      <div className="bg-gray-50 rounded-xl p-4 space-y-2 border border-gray-100">
        <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-3">
          📋 Order Summary
        </p>
        {[
          ["Product", "Double Bed Neo 6x6 - Beige"],
          ["Size", bedSizes[selectedSize]],
          ["Color", colors[selectedColor].name],
          ["Tenure", `${selectedTenure} Month${selectedTenure > 1 ? "s" : ""}`],
          ["Payment", paymentMode === "monthly" ? "Monthly" : "Advance"],
          ["Monthly Rent", `₹${monthlyRent.toLocaleString("en-IN")}`],
          ["Refundable Deposit", `₹${deposit.toLocaleString("en-IN")}`],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between text-sm">
            <span className="text-gray-500">{label}</span>
            <span className="text-[#1a1a1a] font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
