export default function Contact() {
  return (
    <section
      id="contact"
      className="px-5 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 bg-[#f5f5f5]"
    >
      <h2 className="text-center text-2xl sm:text-3xl mb-8 sm:mb-10">
        Get in Touch
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        <div className="text-sm sm:text-base space-y-2">
          <p>Email: namanuppal5@gmail.com</p>
          <p>Phone: +91 7060831883</p>
          <p>Address: Uttarkashi</p>
        </div>

        <form className="space-y-3 sm:space-y-4">
          <input className="w-full border p-2 sm:p-3" placeholder="Name" />
          <input className="w-full border p-2 sm:p-3" placeholder="Email" />
          <textarea
            className="w-full border p-2 sm:p-3"
            placeholder="Message"
          />
          <button className="border px-5 sm:px-6 py-2 sm:py-3 w-full">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
