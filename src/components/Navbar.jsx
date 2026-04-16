export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    const offset = 80;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="flex flex-wrap items-center justify-between px-5 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 shadow sticky top-0 bg-white z-50">
      <img
        src="https://res.cloudinary.com/ddbfyrd1a/image/upload/v1776331713/8682e339-df27-40d3-91e1-21c2a1f5185d_1_qes0k0.png"
        onClick={() => scrollTo("home")}
        className="cursor-pointer h-10 sm:h-12 md:h-14 object-contain max-w-[140px]"
      />

      <nav className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm mt-2 sm:mt-0">
        <button className="cursor-pointer" onClick={() => scrollTo("home")}>
          Home
        </button>
        <button className="cursor-pointer" onClick={() => scrollTo("products")}>
          Products
        </button>
        <button className="cursor-pointer" onClick={() => scrollTo("story")}>
          Story
        </button>
        <button className="cursor-pointer" onClick={() => scrollTo("contact")}>
          Contact
        </button>
      </nav>
    </header>
  );
}
