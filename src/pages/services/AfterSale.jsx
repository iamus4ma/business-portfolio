import { Link } from "react-router-dom";
import CommentSection from "../../components/CommentSection";
import aftersalePic from "../../assets/afterSale.png";

export default function AfterSale() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${aftersalePic})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative h-full flex flex-col justify-center">
          <div className="text-white space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              After-Sale Services
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
                  <span className="text-[#F94D1C]">After-Sale Services</span>
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
                {/* <h1 className="text-4xl font-bold mb-6">After-Sale Services</h1> */}
                <img
                  src={aftersalePic}
                  alt="Technical support and maintenance"
                  className="w-52 rounded-lg mb-8"
                />

                <p className="text-gray-500 leading-relaxed">
                  In the realm of business, the journey doesn’t end with a
                  sale—it’s just the beginning of a relationship that can be
                  nurtured and strengthened through exceptional after-sales
                  services. Today, we delve into the significance of after-sales
                  services and how they contribute to customer satisfaction and
                  loyalty.
                </p>

                <div>
                  <h2 className="text-lg text-gray-500 font-semibold mb-2">
                    What Are After-Sales Services?
                  </h2>
                  <p className="text-gray-500 mb-4 leading-relaxed">
                    After-sales services encompass the support and assistance
                    provided to customers after they have purchased a product or
                    service. These services are designed to ensure that
                    customers have a seamless and satisfactory experience
                    throughout their ownership journey.
                  </p>

                  <h2 className="text-lg text-gray-500 font-semibold mb-2">
                    The Importance of After-Sales Services
                  </h2>
                  <p className="text-gray-500 mb-4 leading-relaxed">
                    Customer Satisfaction: Providing prompt and effective
                    after-sales support enhances customer satisfaction by
                    addressing any issues or concerns that may arise
                    post-purchase. This demonstrates a commitment to customer
                    care and builds trust and confidence in your brand.
                  </p>

                  <p className="text-gray-500 mb-4 leading-relaxed">
                    Brand Loyalty: Exceptional after-sales services foster
                    strong customer loyalty. When customers feel valued and
                    supported even after the sale, they are more likely to
                    become repeat buyers and advocates for your brand, driving
                    long-term success.
                  </p>
                  <p className="text-gray-500 mb-4 leading-relaxed">
                    Differentiation: In today’s competitive marketplace,
                    offering superior after-sales services sets your brand apart
                    from the competition. It becomes a distinguishing factor
                    that influences purchasing decisions and strengthens your
                    brand’s reputation.
                  </p>

                  <h2 className="text-lg text-gray-500 font-semibold mb-2">
                    Key Components of After-Sales Services
                  </h2>
                  <p className="text-gray-500 mb-4 leading-relaxed">
                    Technical Support: Providing timely assistance for product
                    installation, troubleshooting, and maintenance ensures that
                    customers can maximize the value of their purchase.
                  </p>

                  <p className="text-gray-500 mb-4 leading-relaxed">
                    Warranty and Repair Services: Offering comprehensive
                    warranty coverage and efficient repair services instills
                    confidence in customers and provides peace of mind knowing
                    that their investment is protected.
                  </p>

                  <p className="text-gray-500 mb-4 leading-relaxed">
                    Customer Education: Educating customers on product usage,
                    features, and best practices enhances their overall
                    experience and helps them derive maximum benefit from their
                    purchase.
                  </p>

                  <p className="text-gray-500 mb-4 leading-relaxed">
                    Feedback and Continuous Improvement: Soliciting feedback
                    from customers about their experience and using this insight
                    to continuously improve products and services demonstrates a
                    commitment to excellence.
                  </p>
                </div>

                <CommentSection />
              </div>
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
                    className="block text-gray-600 hover:text-[#F94D1C] transition-colors"
                  >
                    Trading (Import Export)
                  </Link>
                  <Link
                    to="/services/after-sale"
                    className="block text-[#F94D1C] hover:underline font-medium"
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
