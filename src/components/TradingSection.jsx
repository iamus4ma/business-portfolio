import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import warehouseForklift from "../assets/warehouse-forklift.png";
import boxCloseup from "../assets/box-closeup.png";

gsap.registerPlugin(ScrollTrigger);

export default function TradingSection() {
  const sectionRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);

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

      // Content animations
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

      // Stats counting animations
      const statNumbers = statsRef.current.querySelectorAll(".stat-number");
      statNumbers.forEach((number) => {
        const targetValue = parseInt(number.textContent, 10); // Get the target number
        gsap.fromTo(
          number,
          { textContent: 0 },
          {
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
              once: true,
              onEnter: () => {
                gsap.to(number, {
                  textContent: targetValue,
                  duration: 2,
                  ease: "power3.out",
                  snap: { textContent: 1 }, // Ensures whole numbers
                  stagger: 0.2,
                });
              },
              onLeaveBack: () => {
                gsap.set(number, { textContent: 0 }); // Reset when scrolling back up
              },
            },
          }
        );
      });

      // Stats container animations
      gsap.fromTo(
        statsRef.current.children,
        { autoAlpha: 0, y: 20 },
        {
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            onEnter: () => {
              gsap.to(statsRef.current.children, {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
              });
            },
            onLeaveBack: () => {
              gsap.set(statsRef.current.children, { autoAlpha: 0, y: 20 }); // Reset when scrolling back up
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
              className="absolute bottom-0 right-0 w-[85%] h-[85%] z-10 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={warehouseForklift}
                alt="Warehouse Forklift"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              ref={image2Ref}
              className="absolute top-0 left-0 w-[85%] h-[85%] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={boxCloseup}
                alt="Warehouse Boxes Close-up"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <span className="inline-block px-3 py-1 bg-black text-white text-sm font-medium rounded">
              Trading
            </span>

            <h2 className="text-4xl font-bold leading-tight">
              B2B Or B2C Commodity Provider Best For Ecommerce Business
            </h2>

            <p className="text-gray-600">
              Choosing between a B2B or B2C commodity provider for your
              ecommerce business depends on whether you aim to serve businesses
              or individual consumers.
            </p>

            <button className="relative inline-flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md text-sm font-medium overflow-hidden group transition-colors duration-500 ease-out">
              {/* White background (initially visible) */}
              <span className="absolute inset-0 bg-white translate-y-0 group-hover:translate-y-full transition-transform duration-500 ease-out"></span>
              {/* Green background (initially hidden) */}
              <span className="absolute inset-0 bg-[#4CAF50] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
              {/* Button text */}
              <span className="relative z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
                Download Brochure
              </span>
            </button>
            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold mb-2">
                  <span className="stat-number">245</span> +
                </div>
                <div className="text-gray-600">Complete Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">
                  <span className="stat-number">85</span> +
                </div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">
                  <span className="stat-number">63</span> +
                </div>
                <div className="text-gray-600">Effective Teams</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
