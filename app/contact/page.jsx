"use client";
import { FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  // Form submission handler (Aap yahan apni Formspree ID daal sakte hain)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Note: 'YOUR_FORMSPREE_ID' ki jagah formspree.io se apni ID lekar daalein
   const response = await fetch("https://formspree.io/f/xjgelrny", {
  method: "POST",
  body: formData,
  headers: { 'Accept': 'application/json' }
});

    if (response.ok) {
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="animate-in fade-in duration-500">
      {/* Header */}
      <header>
        <h2 className="text-3xl font-bold text-white mb-2">Contact</h2>
        <div className="w-10 h-1.5 bg-[#ffdb70] rounded-full mb-8"></div>
      </header>

      {/* Google Map Section - Image jaisa dark mode map */}
      <div className="w-full h-[350px] rounded-[25px] overflow-hidden border border-[#383838] mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111984.76793739764!2d78.68778642398453!3d28.841005085387434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afbe7f673397f%3A0xc665193952f9b2!2sMoradabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1708945000000!5m2!1sen!2sin"
          className="w-full h-full border-0 grayscale invert contrast-[0.9] brightness-[0.7]"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <section>
        <h3 className="text-2xl font-bold text-white mb-8">Contact Form</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              required
              className="w-full bg-transparent border border-[#383838] rounded-xl px-5 py-3 text-white focus:border-[#ffdb70] outline-none transition-all placeholder:text-[#a6a6a6]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full bg-transparent border border-[#383838] rounded-xl px-5 py-3 text-white focus:border-[#ffdb70] outline-none transition-all placeholder:text-[#a6a6a6]"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full bg-transparent border border-[#383838] rounded-xl px-5 py-3 text-white focus:border-[#ffdb70] outline-none transition-all placeholder:text-[#a6a6a6] resize-none"
          ></textarea>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#1e1e1f] border border-[#383838] text-[#ffdb70] px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#2b2b2c] transition-all shadow-lg text-[14px] font-medium"
            >
              <FaPaperPlane className="text-xs" />
              <span>Send Message</span>
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}