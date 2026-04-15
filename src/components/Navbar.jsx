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
    <header className="flex justify-between px-10 py-5 shadow sticky top-0 bg-white z-50">
      <h1
        onClick={() => scrollTo("home")}
        className="cursor-pointer font-semibold"
      >
        SPS
      </h1>

      <nav className="flex gap-6 text-sm">
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
