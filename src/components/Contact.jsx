export default function Contact() {
  return (
    <section id="contact" className="px-10 py-20 bg-[#f5f5f5]">
      <h2 className="text-center text-3xl mb-10">Get in Touch</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p>Email: namanuppal5@gmail.com</p>
          <p>Phone: +91 7060831883</p>
          <p>Address: Uttarkashi</p>
        </div>

        <form className="space-y-4">
          <input className="w-full border p-3" placeholder="Name" />
          <input className="w-full border p-3" placeholder="Email" />
          <textarea className="w-full border p-3" placeholder="Message" />
          <button className="border px-6 py-3 w-full">Send</button>
        </form>
      </div>
    </section>
  );
}
