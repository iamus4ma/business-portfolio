import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "./ui/Card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import tradingPic from "../assets/trading.png";
import warehousingPic from "../assets/warehousing.png";
import afterSalePic from "../assets/afterSale.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Trading (Import Export)",
    description: "Sourcing and import services",
    image: tradingPic,
    link: "/services/trading",
  },
  {
    title: "After Sale Services",
    description: "Testing and Resell Services",
    image: afterSalePic,
    link: "/services/after-sale",
  },
  {
    title: "Warehousing",
    description: "Orders processing and 3pl services",
    image: warehousingPic,
    link: "/services/warehousing",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 ref={headingRef} className="text-4xl font-bold text-center mb-16">
          Our Company Services.
        </h2>
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <Card
              key={service.title}
              className="group flex flex-col justify-between overflow-hidden rounded-xl bg-white hover:shadow-xl transition-shadow duration-300 relative h-[450px]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-700" />
              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col justify-around space-y-4 transition-all duration-700 group-hover:text-white h-full">
                {/* <img
                  src={
                    "https://eastwinners.com/wp-content/uploads/2023/12/home-9-testimonial-sh-1.png"
                  }
                  alt={service.title}
                  className="w-16 h-12 object-contain"
                /> */}
                <div className="flex flex-col space-y-2">
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-white">
                    {service.description}
                  </p>
                </div>
                <Link
                  to={service.link}
                  className="flex items-center text-black group-hover:text-white transition-colors  group/link underline"
                >
                  <span className="text-lg font-bold mr-2">Read More</span>
                  <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
