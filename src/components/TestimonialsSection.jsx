import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    text: "Our experience with EastWinners was excellent. Their professionalism and efficiency ensured smooth transactions and optimized returns. Highly recommend their top-notch services.",
    author: "Dylan Meringue",
    position: "Manager",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    text: "Outstanding service and support from the EastWinners team. Their warehousing solutions have significantly improved our operations and reduced costs.",
    author: "Sarah Johnson",
    position: "Operations Director",
    rating: 5,
    image: "/placeholder.svg",
  },
];

const profileImages = [
  { src: client1, style: { top: "5%", left: "15%" } },
  { src: client2, style: { top: "5%", right: "15%" } },
  { src: client3, style: { top: "40%", left: "5%" } },
  { src: client4, style: { top: "40%", right: "5%" } },
  { src: client5, style: { bottom: "10%", left: "20%" } },
  { src: client6, style: { bottom: "10%", right: "20%" } },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const profilesRef = useRef([]);

  useEffect(() => {
    // Animate section title
    gsap.fromTo(
      headingRef.current,
      { y: -100, opacity: 0 }, // Start 100px above and invisible
      {
        y: 0, // Move to original position
        opacity: 1, // Fade in
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%", // Start animation when heading is 80% in view
          end: "bottom 20%",
          toggleActions: "play none none reverse", // Play on enter, reverse on leave
        },
      }
    );

    // Animate profile images
    profilesRef.current.forEach((profile, index) => {
      gsap.fromTo(
        profile,
        { y: 100, opacity: 0 }, // Start 100px below and invisible
        {
          y: 0, // Move to original position
          opacity: 1, // Fade in
          duration: 0.8,
          delay: index * 0.2, // Staggered delay for each profile
          ease: "power3.out",
          scrollTrigger: {
            trigger: profile,
            start: "top 80%", // Start animation when profile is 80% in view
            end: "bottom 20%",
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <div ref={headingRef} className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl font-bold">Testimonials And Feedback</h2>
        </div>

        {/* Profile Images */}
        {profileImages.map((profile, index) => (
          <div
            key={index}
            ref={(el) => (profilesRef.current[index] = el)}
           className="absolute w-16 h-16 rounded-full overflow-hidden hidden sm:block"
            style={profile.style}
          >
            <img
              src={profile.src || "/placeholder.svg"}
              alt="Client"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Testimonials Slider */}
        <div className="max-w-3xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              type: "fraction",
              formatFractionCurrent: (number) =>
                String(number).padStart(2, "0"),
              formatFractionTotal: (number) => String(number).padStart(2, "0"),
              renderFraction: (
                currentClass,
                totalClass
              ) => `<span class="${currentClass}"></span>
                        <span class="separator"> / </span>
                        <span class="${totalClass}"></span>`,
            }}
            loop={true}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="text-center px-4 py-8">
                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-[#FFB800] text-[#FFB800]"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-lg mb-8">
                    {testimonial.text}
                  </p>

                  {/* Author */}
                  <div>
                    <h4 className="font-bold text-xl mb-1">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <button className="swiper-button-prev text-gray-500 hover:text-black !static !w-auto !h-auto !mt-0"></button>
            <div className="swiper-pagination !static !w-auto text-lg font-medium"></div>
            <button className="swiper-button-next text-gray-500 hover:text-black !static !w-auto !h-auto !mt-0"></button>
          </div>
        </div>
      </div>
    </section>
  );
}