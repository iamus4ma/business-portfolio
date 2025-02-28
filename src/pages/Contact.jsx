import ContactForm from "../components/ContactForm"
import { Card } from "../components/ui/Card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <main className="flex-1 pt-20">
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600">Get in touch with our team for any inquiries or support</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <div className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">contact@eastwinners.com</p>
              </div>
            </Card>
            <Card>
              <div className="p-6 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Address</h3>
                <p className="text-gray-600">123 Business Street, City, Country</p>
              </div>
            </Card>
          </div>

          <Card className="max-w-2xl mx-auto">
            <div className="p-6">
              <ContactForm />
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}

