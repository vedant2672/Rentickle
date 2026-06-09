import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  Rent: ["Beds", "Sofas", "Dining Sets", "Appliances", "Electronics", "Sale"],
  Help: ["Track Order", "Easy Returns", "Delivery Info", "FAQ", "Contact Us"],
  Company: ["Our Story", "Sustainability", "Careers", "Press", "Affiliates"],
  Rental: ["How It Works", "Tenure Plans", "Free Relocation", "Rent Calculator", "Gift Cards"],
};

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#8b6f47] mb-2">
                Join the Community
              </p>
              <h3
                className="text-2xl text-white"
                style={{ fontFamily: "Georgia, serif", fontWeight: 400 }}
              >
                Get exclusive rental offers
              </h3>
              <p className="text-sm text-white/50 mt-1">
                New arrivals, tenure deals, and home styling inspiration.
              </p>
            </div>
            <div className="flex w-full lg:w-auto gap-0">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 lg:w-72 px-5 py-3.5 bg-white/10 border border-white/20 rounded-l-lg text-sm text-white placeholder:text-white/30 outline-none focus:border-[#8b6f47] transition-colors"
              />
              <button className="px-6 py-3.5 bg-[#8b6f47] text-white text-sm tracking-widest uppercase rounded-r-lg hover:bg-[#7a6040] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <span
              className="text-xl tracking-[0.3em] uppercase text-white block mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Rentickle
            </span>
            <p className="text-xs text-white/40 leading-relaxed mb-6">
              India's trusted furniture rental platform. Premium furniture, flexible tenures, zero hassle.
            </p>
            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#8b6f47] hover:text-[#8b6f47] transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-4">{category}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © 2026 Rentickle. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          {/* Payment icons */}
          <div className="flex items-center gap-2">
            {["VISA", "MC", "UPI", "NETBANKING", "EMI"].map((p) => (
              <span
                key={p}
                className="text-[9px] tracking-wider border border-white/20 px-1.5 py-0.5 rounded text-white/40"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
