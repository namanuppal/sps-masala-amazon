import { heroData } from "../data/content";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    const offset = 80;

    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 bg-[#e9e6dc]"
    >
      <div className="mb-8 md:mb-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          {heroData.title}
        </h2>
        <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
          {heroData.description}
        </p>

        <button
          onClick={() => scrollTo("products")}
          className="cursor-pointer border px-5 sm:px-6 py-2 sm:py-3 text-sm sm:text-base hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          Discover the range →
        </button>
      </div>

      <img
        src={heroData.image}
        className="w-full sm:w-[90%] md:w-[80%] mx-auto"
      />
    </section>
  );
}
