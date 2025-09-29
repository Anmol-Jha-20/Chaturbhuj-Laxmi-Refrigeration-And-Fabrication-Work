import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, Star, Home, ChevronRight, Settings } from "lucide-react";
import HeroImage5 from "../../../assets/HeroImages/HeroImage5.jpeg";
import HeroImage3 from "../../../assets/HeroImages/HeroImage3.jpeg";
import SteelTableProducts from "./SteelTableProduct";

const StainleesSteelTablePage = () => {
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
              Stainless Steel Table
            </span>
          </nav>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            Stainless Steel Table
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
                Stainless Steel Tables Built to Last
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                <span className="block font-semibold text-red-400">
                  Strong. Versatile. Made for Commercial Kitchens.
                </span>
              </p>

              <p className="text-lg mb-8 leading-relaxed text-gray-600">
                We are a leading manufacturer of premium stainless steel tables,
                built for durability, hygiene, and functionality in demanding
                commercial environments. Our product range includes Stainless
                Steel Round Tables, Kitchen Working Tables, Dining Tables, and
                multi-purpose stainless steel tables, each crafted to meet the
                rigorous needs of restaurants, hotels, catering services, and
                food courts. Designed for both front- and back-of-house use,
                these tables offer a sturdy workspace with easy-to-clean
                surfaces — ideal for food prep, service, and dining. We also
                offer specialized options like the Chinese Fast Food Cart,
                combining mobility with reliable performance for street vendors
                and quick-service setups.
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
                  aria-label="Call us at +917989198151"
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
                  src="https://5.imimg.com/data5/SELLER/Default/2024/5/420684153/LX/KU/YT/73020702/stainless-steel-table-500x500.png"
                  alt="Stainless Steel Table"
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
              Our <span className="text-red-600">Stainless Steel Table</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading Manufacturer of Stainless Steel Round Table, Kitchen
              Working Table, Stainless Steel Dining Table, Stainless Steel Table
              and Chinese Fast Food Cart from Muzaffarpur.
            </p>
          </motion.div>
        </div>

        <SteelTableProducts />
      </section>
    </div>
  );
};

export default StainleesSteelTablePage;
