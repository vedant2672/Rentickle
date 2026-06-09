import { ArrowLeftRight, Wrench, CalendarClock, BadgeIndianRupee, Zap, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: ArrowLeftRight,
    title: "Free Relocation",
    desc: "Moving to a new city? We relocate your furniture at no extra cost — no strings attached.",
  },
  {
    icon: Wrench,
    title: "No Maintenance Cost",
    desc: "If anything breaks or needs a fix, our team handles it completely free of charge.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Tenure",
    desc: "Choose from 1 to 36 months. Extend, shorten, or cancel anytime with ease.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Refundable Deposit",
    desc: "Your deposit is 100% refundable — no deductions, processed within 3–5 business days.",
  },
  {
    icon: Zap,
    title: "Quick Delivery",
    desc: "Get your furniture delivered and assembled within 1–2 days of placing your order.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Build Quality",
    desc: "Rigorously quality-checked furniture from trusted brands — built to last your entire tenure.",
  },
];

export function WhyRent() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-xs text-[#8b6f47] tracking-[0.3em] uppercase mb-3">Rentickle Advantage</p>
          <h2
            className="text-3xl lg:text-4xl text-[#1a1a1a]"
            style={{ fontFamily: "Georgia, serif", fontWeight: 400 }}
          >
            Why Rent This Product?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex gap-5 p-6 rounded-2xl border border-gray-100 bg-white hover:border-[#8b6f47]/30 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#faf7f3] flex items-center justify-center group-hover:bg-[#8b6f47]/10 transition-colors">
                <Icon size={20} className="text-[#8b6f47]" />
              </div>
              <div>
                <p className="text-sm text-[#1a1a1a] mb-1" style={{ fontFamily: "Georgia, serif" }}>
                  {title}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
