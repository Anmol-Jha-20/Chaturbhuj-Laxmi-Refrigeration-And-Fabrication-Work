import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, Star, Home, ChevronRight, Settings } from "lucide-react";
import HeroImage5 from "../../assets/HeroImages/HeroImage5.jpeg";
import SliderImage9 from "../../assets/SliderImages/SliderImage9.jpeg";
import Gallery11 from "../../assets/Gallery/Gallery11.jpeg";
import DisplayCounterProducts from "./DisplayCounterProducts/DisplayCounterProducts";

const DisplayCounterProductPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags would go in document head */}

      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 overflow-hidden"
      >
        {/* Background Image Placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${HeroImage5})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex justify-center items-center space-x-2 mb-8 animate-on-scroll">
            <div className="flex items-center bg-red-500 px-3 py-1 rounded-full">
              <Home className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">Home</span>
            </div>
            <ChevronRight className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium">
              Display Counter
            </span>
          </nav>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            Display Counter
          </h1>
        </div>
      </section>

      {/* Hero Section */}

      <section className="relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-black/20"></div> */}
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-black"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                <Star className="w-4 h-4 mr-2" />
                Premium Quality Products
              </motion.div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Display Counters Built to Perform
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                <span className="block font-semibold text-red-400">
                  Stylish. Durable. Made for Business.
                </span>
              </p>

              <p className="text-lg mb-8 leading-relaxed text-gray-600">
                We offer a premium range of display counters, expertly designed
                for maximum functionality, durability, and visual appeal. From
                hot samosa counters to curved sweet display counters, bakery
                units, stainless steel tea displays, and fast food serving
                counters — each unit is crafted with high-quality materials to
                suit commercial needs. Ideal for restaurants, sweet shops,
                bakeries, and food courts, our counters ensure efficient service
                and lasting performance. Trusted since 2015, we deliver quality
                products with timely service — built to elevate your business
                space.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => (window.location.href = "tel:918075612353")}
                  className="bg-red-600 hover:bg-red-700 text-white cursor-pointer px-16 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact Us
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={Gallery11}
                  alt="Display Counter Image"
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Showcase Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-red-600">Display Counter</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing you the best range of Hot Samosa Counter, Long Curved
              Sweet Display Counter, Bakery Display Counter, Center Round Glass
              Sweet Display Counter, Stainless Steel Tea Display Counter and
              Fast Food Serving Counter with effective & timely delivery.
            </p>
          </motion.div>
        </div>

        <DisplayCounterProducts />
      </section>
    </div>
  );
};

export default DisplayCounterProductPage;
