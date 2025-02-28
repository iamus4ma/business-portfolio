import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email subscription
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">
              EASTWINNERS IMPORT EXPORT
            </h3>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 bg-transparent border border-[#333] px-4 py-2 text-sm focus:outline-none focus:border-[#4CAF50]"
                required
              />
              <button
                type="submit"
                className="bg-[#4CAF50] px-4 py-2 text-white hover:bg-[#45a049] transition-colors"
              >
                →
              </button>
            </form>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">COMPANY</h3>
            <Link
              to="/contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Find Us Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">FIND US</h3>
            <p className="text-gray-400">
              Kasteelstraat 223 d B-9255
              <br />
              Buggenhout, Belgium
            </p>
          </div>

          {/* Questions Section */}
          <div>
            <h3 className="text-lg font-bold mb-6">HAVE A QUESTIONS?</h3>
            <div className="space-y-4">
              <Link
                to="/contact"
                className="text-[#4CAF50] hover:text-[#45a049] transition-colors block"
              >
                Get In Touch
              </Link>
              <p className="text-gray-400">+32 484 163 106</p>
              <Link
                to="#"
                className="text-[#4CAF50] hover:text-[#45a049] transition-colors block"
              >
                Ask Anytime
              </Link>
              <a
                href="mailto:info@eastwinners.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                info@eastwinners.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#333] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            Copyright © {currentYear} Eastwinners. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
