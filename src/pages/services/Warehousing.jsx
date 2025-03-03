import { Link } from "react-router-dom";
import CommentSection from "../../components/CommentSection";

export default function Warehousing() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://sjc.microlink.io/gnXlDSJIyYLPmY01wLyMwOj047Dpd3aJYSDcKZ3D3OVRHNQp8kxPnzyOLH3tRwBbFRBtVv1zV7cOOSD2mpSGrw.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative h-full flex flex-col justify-center">
          <div className="text-white space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">Warehousing</h1>
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
                  <span className="text-[#F94D1C]">Warehousing</span>
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
              <img
                src="https://eastwinners.com/wp-content/uploads/2023/12/44643.jpg"
                alt="Modern warehouse facility"
                className="w-full rounded-lg mb-8"
              />

              <div className="space-y-8">
                {/* <h1 className="text-4xl font-bold mb-6">Warehousing</h1> */}

                <p className="text-gray-500 leading-relaxed">
                  Warehousing serves as the backbone of modern logistics,
                  playing a crucial role in the seamless flow of goods from
                  production to consumption. In today’s dynamic business
                  landscape, efficient warehousing practices are essential for
                  meeting customer demands, optimizing inventory management, and
                  driving operational excellence.
                </p>

                <h2 className="text-lg text-gray-500 font-semibold mb-2">
                  Optimizing Inventory Management
                </h2>

                <p className="text-gray-500 leading-relaxed mb-8">
                  One of the primary functions of warehousing is inventory
                  management. By providing a centralized location for storing
                  goods, warehouses enable businesses to maintain optimal stock
                  levels and minimize stockouts. Advanced inventory tracking
                  systems and real-time visibility tools allow for accurate
                  monitoring of inventory levels, ensuring that goods are
                  readily available when needed.
                </p>

                <h2 className="text-lg text-gray-500 font-semibold mb-2">
                  Streamlining Order Fulfillment
                </h2>

                <p className="text-gray-500 leading-relaxed mb-8">
                  Timely and accurate order fulfillment is paramount in meeting
                  customer expectations. Warehouses employ streamlined picking,
                  packing, and shipping processes to ensure orders are processed
                  efficiently. With the help of technology such as warehouse
                  management systems (WMS) and automated equipment, warehouses
                  can fulfill orders quickly and accurately, resulting in
                  improved customer satisfaction.
                </p>

                <img
                  src="https://eastwinners.com/wp-content/uploads/2024/03/lg8-500x333.jpeg"
                  alt="Warehouse operations"
                  className="w-72 rounded-lg mb-8 m-auto"
                />
                <h2 className="text-lg text-gray-500 font-semibold mb-2">
                  Reducing Transportation Costs
                </h2>

                <p className="text-gray-500 leading-relaxed mb-8">
                  Strategically located warehouses serve as distribution hubs,
                  allowing businesses to minimize transportation costs and
                  optimize delivery routes. By consolidating shipments and
                  leveraging efficient transportation networks, warehouses help
                  reduce lead times and improve supply chain efficiency. This
                  not only saves costs but also enhances overall operational
                  performance.
                </p>

                <h2 className="text-lg text-gray-500 font-semibold mb-2">
                  Adapting to Emerging Trends
                </h2>

                <p className="text-gray-500 leading-relaxed mb-8">
                  In the face of evolving consumer preferences and market
                  dynamics, warehouses must adapt to emerging trends to stay
                  competitive. This includes embracing technologies such as
                  robotics, IoT sensors, and artificial intelligence to automate
                  processes and improve efficiency. Additionally, warehouses are
                  increasingly focusing on sustainability initiatives to reduce
                  their environmental footprint and meet growing consumer
                  demands for eco-friendly practices.
                </p>

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
                    className="block text-gray-500 hover:text-[#F94D1C] transition-colors"
                  >
                    Trading (Import Export)
                  </Link>
                  <Link
                    to="/services/after-sale"
                    className="block text-gray-500 hover:text-[#F94D1C] transition-colors"
                  >
                    After-Sale Services
                  </Link>
                  <Link
                    to="/services/warehousing"
                    className="block text-[#F94D1C] hover:underline font-medium"
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
