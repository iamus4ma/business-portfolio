
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TradingSection from "../components/TradingSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import warehouseImage from "../assets/warehouse1.png";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${warehouseImage})`,
          }}
        >
          {/* <div className="absolute inset-0 bg-black/50" /> */}
        </div>
        {/* Swiper Slide */}
        <div className="container relative flex h-full flex-col items-start justify-center pt-16 text-white">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            speed={2000}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper w-full"
          >
            <SwiperSlide>
              <p className="mb-4 text-lg font-medium">
                Trade Smarter, Serve Better
              </p>
              <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Our One-Stop Solution For Trading, After-Sale Services, And
                Warehouse Management!
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <p className="mb-4 text-lg font-medium">
                Trade Smarter, Serve Better
              </p>
              <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Our One-Stop Solution For Trading, After-Sale Services, And
                Warehouse Management!
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              <p className="mb-4 text-lg font-medium">
                Trade Smarter, Serve Better
              </p>
              <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Our One-Stop Solution For Trading, After-Sale Services, And
                Warehouse Management!
              </h1>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Swiper Slide */}
      </section>

      {/* Trading Section */}
      <TradingSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />
    </main>
  );
}

