import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import contactPic from "../assets/contactUs.jpg";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${contactPic})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative h-full flex flex-col justify-center">
          <div className="text-white space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-[#4CAF50] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <span>/</span>
                  <span className="text-[#4CAF50]">Contact</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold mb-16">Get In Touch</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Address</h3>
                <p className="text-gray-600">
                  Kasteelstraat 223 d B-9255 Buggenhout, Belgium
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Phone</h3>
                <p className="text-gray-600">+32 000 000 000</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#4CAF50]"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#4CAF50]"
                    required
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#4CAF50]"
                  required
                />

                <textarea
                  placeholder="Leave message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:border-[#4CAF50] resize-none"
                  required
                />

                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-[#ff5722] text-white hover:bg-black transition-colors"
                >
                  Send Message
                  <Plus className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="h-[350px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d322183.95037470774!2d4.186956!3d51.017141!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c397e13c650001%3A0x9c6d11d5e0e2e4b0!2sKasteelstraat%20223%2C%209255%20Buggenhout%2C%20Belgium!5e0!3m2!1sen!2sus!4v1709561245443!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "hue-rotate(-10deg) saturate(1.2)",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="East Winners Location"
        />
      </section>
    </main>
  );
}
