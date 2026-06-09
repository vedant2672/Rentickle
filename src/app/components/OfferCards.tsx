import { Tag, Truck, TrendingDown, Gift } from "lucide-react";

const offers = [
  {
    icon: Tag,
    code: "VIBE20",
    headline: "Flat 20% Off",
    sub: "On your first Rentickle order. Use at checkout.",
    color: "bg-amber-50 border-amber-200",
    iconColor: "text-amber-600",
    badgeColor: "bg-amber-600",
  },
  {
    icon: Gift,
    code: "UPBEAT",
    headline: "Extra 10% Off",
    sub: "Stackable with VIBE20 for returning customers.",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600",
    badgeColor: "bg-green-600",
  },
  {
    icon: Truck,
    code: null,
    headline: "Delivery in 1–2 Days",
    sub: "Available in Delhi, Gurugram, Bengaluru, Hyderabad, Pune & more.",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
    badgeColor: "bg-blue-600",
  },
  {
    icon: TrendingDown,
    code: null,
    headline: "Longer Tenure = More Savings",
    sub: "Rent for 12+ months and pay as low as ₹370/month.",
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
    badgeColor: "bg-purple-600",
  },
];

export function OfferCards() {
  return (
    <section className="py-12 lg:py-16 bg-[#faf7f3]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <p className="text-xs text-[#8b6f47] tracking-[0.3em] uppercase mb-6 text-center">
          Current Offers
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {offers.map(({ icon: Icon, code, headline, sub, color, iconColor, badgeColor }) => (
            <div
              key={headline}
              className={`relative rounded-2xl border p-5 flex flex-col gap-3 ${color}`}
            >
              <div className={`w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm`}>
                <Icon size={17} className={iconColor} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-[#1a1a1a] mb-1" style={{ fontFamily: "Georgia, serif" }}>
                  {headline}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">{sub}</p>
              </div>
              {code && (
                <div className="flex items-center gap-2">
                  <span className={`text-xs text-white px-2.5 py-1 rounded-full tracking-widest font-mono ${badgeColor}`}>
                    {code}
                  </span>
                  <button className="text-xs text-gray-500 hover:text-[#8b6f47] underline transition-colors">
                    Copy
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
