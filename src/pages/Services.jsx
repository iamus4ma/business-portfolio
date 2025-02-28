import { Card } from "../components/ui/Card"
import { Warehouse, ShoppingCart, Headphones, TrendingUp, Shield, Globe } from "lucide-react"

export default function Services() {
  return (
    <main className="flex-1 pt-20">
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-gray-600">
              Comprehensive solutions for all your international trade and logistics needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<ShoppingCart className="h-12 w-12 text-primary" />}
              title="Trading Services"
              description="Global import and export solutions with competitive pricing and reliable delivery."
              features={["Market Analysis", "Supplier Verification", "Price Negotiation", "Quality Control"]}
            />
            <ServiceCard
              icon={<Headphones className="h-12 w-12 text-primary" />}
              title="After-Sale Services"
              description="Comprehensive support to ensure your complete satisfaction post-purchase."
              features={["Technical Support", "Warranty Service", "Product Training", "Maintenance Support"]}
            />
            <ServiceCard
              icon={<Warehouse className="h-12 w-12 text-primary" />}
              title="Warehouse Management"
              description="Modern facilities and advanced systems for efficient storage and distribution."
              features={["Inventory Management", "Order Fulfillment", "Stock Monitoring", "Distribution Services"]}
            />
            <ServiceCard
              icon={<TrendingUp className="h-12 w-12 text-primary" />}
              title="Business Development"
              description="Strategic support to help grow your business in international markets."
              features={["Market Entry Strategy", "Business Planning", "Growth Consulting", "Partner Matching"]}
            />
            <ServiceCard
              icon={<Shield className="h-12 w-12 text-primary" />}
              title="Risk Management"
              description="Comprehensive risk assessment and mitigation strategies."
              features={["Trade Insurance", "Quality Assurance", "Compliance Support", "Risk Assessment"]}
            />
            <ServiceCard
              icon={<Globe className="h-12 w-12 text-primary" />}
              title="Global Logistics"
              description="End-to-end logistics solutions for international shipments."
              features={["Freight Forwarding", "Customs Clearance", "Route Optimization", "Tracking Services"]}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function ServiceCard({ icon, title, description, features }) {
  return (
    <Card>
      <div className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

