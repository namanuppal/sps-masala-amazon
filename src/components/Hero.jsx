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
    <section id="home" className="grid md:grid-cols-2 px-10 py-20 bg-[#e9e6dc]">
      <div>
        <h2 className="text-4xl font-bold mb-6">{heroData.title}</h2>
        <p className="text-gray-600 mb-6">{heroData.description}</p>

        <button
          onClick={() => scrollTo("products")}
          className="cursor-pointer border px-6 py-3 hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          Discover the range →
        </button>
      </div>

      <img src={heroData.image} className="w-[80%] mx-auto" />
    </section>
  );
}
