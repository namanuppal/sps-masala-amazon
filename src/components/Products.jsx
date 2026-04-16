import { products } from "../data/content";
import { useState } from "react";

export default function Products() {
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    "Signature Blend",
    "Essential Blend",
    "Premium Blend",
    "Single Spice",
  ];

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <section
      id="products"
      className="px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 bg-[#f5f5f5]"
    >
      {/* TITLE */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Our Exquisite Collection
        </h2>
        <p className="text-xs sm:text-sm text-gray-500">
          Handcrafted masalas for the discerning palate
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 flex-wrap">
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 border text-xs sm:text-sm cursor-pointer transition
              ${
                active === item
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
        {filtered.map((p, i) => (
          <div
            key={i}
            className="bg-[#e9e6dc] p-4 sm:p-5 md:p-6 border group relative"
          >
            {/* IMAGE + HOVER */}
            <div className="relative overflow-hidden">
              <img
                src={p.image}
                className="h-56 sm:h-64 md:h-80 mx-auto object-contain transition duration-300 group-hover:scale-105"
              />

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <a
                  href={p.link}
                  target="_blank"
                  className="bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium hover:bg-black hover:text-white transition"
                >
                  Buy on Amazon →
                </a>
              </div>

              {/* TAG */}
              {p.tag && (
                <span className="absolute top-2 right-2 bg-black text-white text-[10px] sm:text-xs px-2 py-1">
                  {p.tag}
                </span>
              )}
            </div>

            {/* TEXT */}
            <p className="text-[10px] sm:text-xs text-gray-500 mt-3 sm:mt-4 uppercase">
              {p.category}
            </p>

            <h3 className="font-semibold mt-1 text-sm sm:text-base">
              {p.name}
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 mt-1 sm:mt-2">
              Premium quality spice blend crafted for authentic taste.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
