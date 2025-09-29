import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, Star, Home, ChevronRight, Settings } from "lucide-react";
import HeroImage5 from "../../../assets/HeroImages/HeroImage5.jpeg";
import Gallery18 from "../../../assets/Gallery/Gallery18.jpeg";
import JuiceCounterProducts from "./JuiceCounterProducts.jsx";
import JuiceCounterImageThree from "../../../assets/JuiceCounter/JuiceCounterImageThree.jpeg";

const JuiceCounterPage = () => {
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
              Juice Counter
            </span>
          </nav>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            Juice Counter
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
                Juice Counters Built for Fresh Service
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                <span className="block font-semibold text-red-400">
                  Clean. Durable. Perfect for Commercial Use.
                </span>
              </p>

              <p className="text-lg mb-8 leading-relaxed text-gray-600">
                Our Juice Counter is a reliable and hygienic solution, specially
                designed for serving fresh juices in busy commercial
                environments. With a spacious work area, sturdy stainless steel
                construction, and a sleek, professional finish, it’s ideal for
                juice shops, cafes, food courts, and street food setups. Built
                to ensure smooth operation and easy maintenance, the counter
                supports efficient preparation and service while maintaining
                high standards of cleanliness. Its modern design not only
                enhances your service area but also leaves a lasting impression
                on customers.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => (window.location.href = "tel:+917989198151")}
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
                  src={JuiceCounterImageThree}
                  alt="Cash Desk Counter"
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
          <motion.div {...fadeInUp} className="text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-red-600">Juice Counter</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serve freshness with style using our high-quality Juice Counter,
              specially designed for juice shops, cafes, street vendors, and
              commercial kitchens. Built with durable stainless steel, this
              counter offers hygiene, functionality, and visual appeal – all in
              one compact setup.
            </p>
          </motion.div>
        </div>

        <JuiceCounterProducts />
      </section>
    </div>
  );
};

export default JuiceCounterPage;
