import { Link } from "react-router-dom";
import CommentSection from "../../components/CommentSection";
import tradingPic from "../../assets/trading.png";
import warehousingPic from "../../assets/warehousing.png";

export default function Trading() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${tradingPic})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative h-full flex flex-col justify-center">
          <div className="text-white space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Trading (Import Export)
            </h1>
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-[#F94D1C] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <span>/</span>
                  <span className="text-[#F94D1C]">
                    Trading (Import Export)
                  </span>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <img
                  src={tradingPic}
                  alt="Container ship at port"
                  className="w-52 object-cover rounded-lg mb-8"
                />

                <div className="prose max-w-none">
                  <p className="text-gray-500 leading-relaxed mb-8">
                    In the bustling landscape of international commerce, import
                    and export trading stand as the gateways to global
                    opportunity. These twin pillars of trade enable businesses
                    to transcend borders, connect with diverse markets, and
                    drive economic growth on a global scale. Let’s embark on a
                    journey to explore the dynamic world of import and export
                    trading, guided by the wisdom encapsulated in a timeless
                    quote:
                    <br />
                    Yet the pair approached this project with a spirit of
                    curiosity, allowing the building itself to dictate what
                    direction to take.
                  </p>
                  {/* Quote Section */}
                  <div className="relative bg-white rounded-lg shadow-lg p-6 my-12 border-l-4 border-[#F94D1C]">
                    <div className="text-3xl font-bold text-[#F94D1C] pl-4">
                      99
                    </div>
                    <blockquote className="pl-4">
                      <p className="text-lg text-gray-500 italic">
                        "The World Is Your Marketplace; Seize The Opportunity To
                        Trade Across Borders, And Unlock The Doors To Boundless
                        Possibilities."
                      </p>
                    </blockquote>
                  </div>

                  <img
                    src={warehousingPic}
                    alt="Warehouse operations"
                    className="w-52 rounded-lg mb-8 m-auto"
                  />
                  <div>
                    <h2 className="text-lg text-gray-500 font-semibold mb-2">
                      The Art of Importing: Embracing Global Diversity
                    </h2>
                    <p className="text-gray-500 mb-4 leading-relaxed">
                      For importers, venturing into the global marketplace is a
                      journey marked by discovery and diversity. From navigating
                      complex customs regulations to forging strong
                      relationships with overseas suppliers, every step requires
                      meticulous planning and adaptability.
                    </p>

                    <h2 className="text-lg text-gray-500 font-semibold mb-2">
                      The Thrill of Exporting: Conquering New Frontiers
                    </h2>
                    <p className="text-gray-500 mb-4 leading-relaxed">
                      Export trading offers a gateway to expanding business
                      horizons and tapping into untapped markets abroad.
                      Tailoring products or services to meet international
                      demand, devising effective marketing strategies, and
                      cultivating strategic partnerships are essential elements
                      of export success. Despite the challenges of regulatory
                      compliance and logistical complexities, exporters can
                      chart a course towards global success by harnessing
                      innovation and resilience.
                    </p>

                    <p className="text-gray-500 mb-4 leading-relaxed">
                      As we journey through the dynamic landscape of import and
                      export trading, let us heed the wisdom of the quote and
                      seize the opportunity to trade across borders. By
                      embracing diversity, innovation, and collaboration, we can
                      unlock the doors to boundless possibilities and chart a
                      course towards a future filled with prosperity and growth.
                    </p>
                  </div>
                </div>
              </div>
              {/* Add Comment Section */}
              <CommentSection />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold mb-6 relative">
                  Recent Posts
                  <span className="absolute bottom-0 left-0 w-16 h-0.5 bg-[#F94D1C]"></span>
                </h3>
                <div className="space-y-4">
                  <Link
                    to="/services/trading"
                    className="block text-[#F94D1C] hover:underline font-medium"
                  >
                    Trading (Import Export)
                  </Link>
                  <Link
                    to="/services/after-sale"
                    className="block text-gray-600 hover:text-[#F94D1C] transition-colors"
                  >
                    After-Sale Services
                  </Link>
                  <Link
                    to="/services/warehousing"
                    className="block text-gray-600 hover:text-[#F94D1C] transition-colors"
                  >
                    Warehousing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
