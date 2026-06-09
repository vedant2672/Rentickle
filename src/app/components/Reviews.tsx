import { useState } from "react";
import { Star, ThumbsUp, ChevronDown, Search } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Priya S.",
    location: "Bengaluru",
    rating: 5,
    date: "May 18, 2026",
    title: "Exactly what I needed for my new apartment",
    body: "I rented this bed for 6 months and it was an amazing experience. The quality is premium — solid frame, comfortable mattress, and the beige colour matches my room perfectly. Delivery was done within 2 days and the team assembled everything neatly. Highly recommend Rentickle!",
    verified: true,
    helpful: 87,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 2,
    author: "Rahul M.",
    location: "Hyderabad",
    rating: 5,
    date: "April 30, 2026",
    title: "Best rental experience — zero hassle",
    body: "This is my third order from Rentickle. The Neo 6x6 is their best bed yet — sturdy build, clean finish, and the free relocation service saved me so much trouble when I moved. Deposit refund was also processed within 3 days. Will rent again.",
    verified: true,
    helpful: 64,
  },
  {
    id: 3,
    author: "Ananya K.",
    location: "Pune",
    rating: 4,
    date: "March 22, 2026",
    title: "Great value for the monthly rent",
    body: "Chose the 12-month tenure and the savings are real — paying under ₹460 per month for a bed of this quality is unbeatable. The only small issue was a slight delay in assembly, but the team resolved it promptly. Free maintenance is a huge plus.",
    verified: true,
    helpful: 41,
  },
  {
    id: 4,
    author: "Karthik R.",
    location: "Chennai",
    rating: 5,
    date: "February 10, 2026",
    title: "Top-tier quality, smooth return process",
    body: "I rented for 3 months initially and extended twice because I loved it so much. When I finally returned it, the entire process was handled in under 30 minutes by the team. Deposit was fully refunded. This is how furniture rental should work.",
    verified: false,
    helpful: 33,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

const breakdown = [
  { label: "5 stars", count: 712, pct: 76 },
  { label: "4 stars", count: 149, pct: 16 },
  { label: "3 stars", count: 56, pct: 6 },
  { label: "2 stars", count: 12, pct: 1 },
  { label: "1 star", count: 6, pct: 1 },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          size={12}
          className={s <= count ? "fill-amber-400 text-amber-400" : "fill-gray-200 text-gray-200"}
        />
      ))}
    </div>
  );
}

type SortKey = "helpful" | "newest" | "highest" | "lowest";

export function Reviews() {
  const [helpfulClicked, setHelpfulClicked] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);
  const [sort, setSort] = useState<SortKey>("helpful");
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const toggleHelpful = (id: number) => {
    setHelpfulClicked((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const sorted = [...reviews]
    .filter((r) => (filterRating ? r.rating === filterRating : true))
    .filter((r) =>
      search.trim()
        ? r.title.toLowerCase().includes(search.toLowerCase()) ||
          r.body.toLowerCase().includes(search.toLowerCase())
        : true
    )
    .sort((a, b) => {
      if (sort === "helpful") return b.helpful - a.helpful;
      if (sort === "newest") return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sort === "highest") return b.rating - a.rating;
      if (sort === "lowest") return a.rating - b.rating;
      return 0;
    });

  const displayed = showAll ? sorted : sorted.slice(0, 3);

  return (
    <section id="reviews" className="py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Summary */}
          <div className="lg:col-span-1">
            <h2
              className="text-3xl text-[#1a1a1a] mb-6"
              style={{ fontFamily: "Georgia, serif", fontWeight: 400 }}
            >
              Customer Reviews
            </h2>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-6xl text-[#1a1a1a]" style={{ fontFamily: "Georgia, serif" }}>
                4.8
              </span>
              <div>
                <StarRow count={5} />
                <p className="text-xs text-gray-400 mt-1">Based on 935 reviews</p>
                <p className="text-xs text-green-600 mt-1">92% of renters recommend</p>
              </div>
            </div>

            {/* Breakdown */}
            <div className="space-y-2">
              {breakdown.map((row) => (
                <button
                  key={row.label}
                  onClick={() =>
                    setFilterRating(
                      filterRating === parseInt(row.label)
                        ? null
                        : parseInt(row.label)
                    )
                  }
                  className={`w-full flex items-center gap-3 rounded-lg px-2 py-1 transition-colors ${
                    filterRating === parseInt(row.label)
                      ? "bg-amber-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <span className="text-xs text-gray-500 w-12 text-right">{row.label}</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-amber-400 rounded-full"
                      style={{ width: `${row.pct}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-400 w-8">{row.count}</span>
                </button>
              ))}
            </div>
            {filterRating && (
              <button
                onClick={() => setFilterRating(null)}
                className="mt-2 text-xs text-[#8b6f47] underline"
              >
                Clear filter
              </button>
            )}

            {/* Write review */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-600 mb-3">Rented this? Share your experience.</p>
              <button className="w-full py-3 border border-[#1a1a1a] rounded-lg text-sm tracking-wide hover:bg-gray-50 transition-colors">
                Write a Review
              </button>
            </div>

            {/* Category sub-ratings */}
            <div className="mt-6 space-y-2">
              {[
                { label: "Comfort", value: 4.9 },
                { label: "Build Quality", value: 4.8 },
                { label: "Value for Money", value: 4.7 },
                { label: "Delivery", value: 4.6 },
                { label: "Customer Service", value: 4.8 },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{label}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#8b6f47] rounded-full"
                        style={{ width: `${(value / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 w-6">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews list */}
          <div className="lg:col-span-2">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
              <div className="relative flex-1 w-full">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search reviews..."
                  className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-[#8b6f47] transition-colors"
                />
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="text-sm border border-gray-200 rounded-lg px-3 py-2 outline-none text-gray-600 focus:border-[#8b6f47] bg-white"
              >
                <option value="helpful">Most Helpful</option>
                <option value="newest">Newest</option>
                <option value="highest">Highest Rated</option>
                <option value="lowest">Lowest Rated</option>
              </select>
            </div>

            <div className="space-y-8">
              {displayed.length === 0 && (
                <p className="text-sm text-gray-400 text-center py-8">No reviews match your filters.</p>
              )}
              {displayed.map((review) => (
                <div key={review.id} className="pb-8 border-b border-gray-100 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <StarRow count={review.rating} />
                        {review.verified && (
                          <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                            ✓ Verified Renter
                          </span>
                        )}
                      </div>
                      <p
                        className="text-base text-[#1a1a1a]"
                        style={{ fontFamily: "Georgia, serif" }}
                      >
                        {review.title}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{review.body}</p>

                  {review.image && (
                    <div className="mb-4">
                      <img
                        src={review.image}
                        alt="Customer photo"
                        className="w-24 h-24 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="font-medium text-gray-600">{review.author}</span>
                      <span>·</span>
                      <span>{review.location}</span>
                      <span>·</span>
                      <span>{review.date}</span>
                    </div>
                    <button
                      onClick={() => toggleHelpful(review.id)}
                      className={`flex items-center gap-1.5 text-xs transition-colors ${
                        helpfulClicked.has(review.id) ? "text-[#8b6f47]" : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      <ThumbsUp size={12} />
                      Helpful ({helpfulClicked.has(review.id) ? review.helpful + 1 : review.helpful})
                    </button>
                  </div>
                </div>
              ))}

              {!showAll && sorted.length > 3 && (
                <button
                  onClick={() => setShowAll(true)}
                  className="flex items-center gap-2 text-sm text-[#8b6f47] hover:text-[#6d5636] transition-colors"
                >
                  Show all {sorted.length} reviews <ChevronDown size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
