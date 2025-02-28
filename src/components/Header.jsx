import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Minus, Plus } from "lucide-react";

const services = [
  {
    title: "Trading (Import Export)",
    path: "/services/trading",
  },
  {
    title: "After Sale Services",
    path: "/services/after-sale",
  },
  {
    title: "Warehousing",
    path: "/services/warehousing",
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for mobile services dropdown

  return (
    <header className="bg-white px-10 relative z-50">
      <div className="container flex h-28 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://eastwinners.com/wp-content/uploads/2024/03/eastwinner_logo.png"
            alt="East Winners Logo"
            className="w-full h-20"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            title="Home"
            to="/"
            className="text-md font-semibold hover:text-[#4CAF50] transition-colors"
          >
            Home
          </Link>
          <div className="relative group">
            <Link className="text-md font-semibold transition-colors inline-flex items-center gap-1 text-black group-hover:text-[#4CAF50]">
              <span className="group-hover:hidden flex items-center gap-1">
                Services <Plus className="group-hover:hidden h-4 w-4" />
              </span>

              <span className="hidden group-hover:inline  items-center gap-1">
                Services <Minus className="hidden group-hover:inline h-4 w-4" />
              </span>
            </Link>
            {/* Desktop Services Dropdown */}
            <div className="absolute top-full left-0 mt-4 w-64 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-t-4 border-t-[#4CAF50]">
              {services?.map((service) => (
                <Link
                  key={service?.path}
                  to={service?.path}
                  className="px-4 py-2 text-md font-semibold hover:text-[#4CAF50] flex items-center gap-2 first:rounded-t-md last:rounded-b-md group/item"
                >
                  <span className="w-2 h-2 rounded-full bg-transparent group-hover/item:bg-[#4CAF50]"></span>
                  {service?.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            title="Contact Us"
            to="/contact"
            className="text-md font-semibold hover:text-[#4CAF50] transition-colors"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-28 left-0 right-0 bg-white border-t shadow-lg z-50">
            <nav className="container py-4 flex flex-col space-y-4">
              <Link
                to="/"
                className="text-sm font-medium hover:text-[#4CAF50] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="flex flex-col space-y-2">
                <button
                  className="flex items-center justify-between text-sm font-medium hover:text-[#4CAF50] transition-colors"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  <span>Services</span>
                  {isServicesOpen ? (
                    <Minus className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </button>

                {/* Services List */}
                {isServicesOpen && (
                  <div className="pl-4 flex flex-col space-y-2">
                    {services?.map((service) => (
                      <Link
                        key={service?.path}
                        to={service?.path}
                        className="text-sm font-medium hover:text-[#4CAF50] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {service?.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="text-sm font-medium hover:text-[#4CAF50] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
