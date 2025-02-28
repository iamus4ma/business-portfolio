import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUsSection() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
    // Image animations
    gsap.fromTo(
      image1Ref.current,
      { x: 100, opacity: 0 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.to(image1Ref.current, {
              x: 0,
              opacity: 1,
              duration: 1,
              delay: 0.3,
              ease: "power3.out",
            });
          },
          onLeaveBack: () => {
            gsap.set(image1Ref.current, { x: 100, opacity: 0 }); // Reset when scrolling back up
          },
        },
      }
    );

    gsap.fromTo(
      image2Ref.current,
      { x: -100, opacity: 0 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.to(image2Ref.current, {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
            });
          },
          onLeaveBack: () => {
            gsap.set(image2Ref.current, { x: -100, opacity: 0 }); // Reset when scrolling back up
          },
        },
      }
    );

    // Content animation with stagger
    gsap.fromTo(
      contentRef.current.children,
      { y: -100, opacity: 0 },
      {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.to(contentRef.current.children, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: "power3.out",
            });
          },
          onLeaveBack: () => {
            gsap.set(contentRef.current.children, { y: -100, opacity: 0 }); // Reset when scrolling back up
          },
        },
      }
    );
}, sectionRef);

ScrollTrigger.refresh();

return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Stack */}
          <div className="relative h-[600px] w-full">
            <div
              ref={image1Ref}
              className="absolute bottom-0 right-0 w-[60%] h-[70%] z-10 rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src="https://eastwinners.com/wp-content/uploads/2024/04/47.jpg"
                alt="Warehouse Boxes Close-up"
                className="w-full h-full object-cover rounded-3xl border-4 border-white"
              />
            </div>
            <div
              ref={image2Ref}
              className="absolute top-0 left-0 w-[85%] h-[85%] rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                alt="Warehouse Forklift"
                src="https://eastwinners.com/wp-content/uploads/2024/03/lq6.jpeg"
                className="w-full h-full object-cover rounded-3xl "
              />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded">
              WHY CHOOSE US
            </span>

            <h2 className="text-4xl font-bold leading-tight">
              Out Of The Market Buying Facility
              <span className="block">(Buying At Market Challenged Price)</span>
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Choose us for import-export trading, tailored A to B solutions,
              and wide-ranging sourcing capabilities. We excel in after-sale
              services, including efficient returns handling and out-of-market
              buying, while offering flexible warehousing solutions and 3PL
              services for seamless ecommerce operations.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#4CAF50] text-white rounded-md hover:bg-[#3d8c40] transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:+32484163106"
                className="inline-flex items-center text-gray-600 hover:text-[#4CAF50] transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                +32 484 163 106
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
