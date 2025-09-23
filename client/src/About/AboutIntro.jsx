import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import SliderImage8 from "../assets/SliderImages/SliderImage8.jpeg";
import SliderImage6 from "../assets/SliderImages/SliderImage6.jpeg";
import SliderImage3 from "../assets/SliderImages/SliderImage3.jpeg";

const AboutIntro = () => {
  const [activeCard, setActiveCard] = useState(null);

  const products = [
    {
      id: 1,
      image: SliderImage8,
      title: "Display Counter",
      description:
        "Premium quality fabrics with custom patterns and designs for all your creative needs.",
      details:
        "Fabric designing services can be provided by our commercial team. Alteration provide",
    },
    {
      id: 2,
      image: SliderImage6,
      title: "Stainless Steel Counter",
      description:
        "Rigorous testing and quality assurance for every fabric we produce.",
      details:
        "Quality control services can be provided by our commercial team. Testing provide",
    },
    {
      id: 3,
      image: SliderImage3,
      title: "Bakery Display Counter",
      description:
        "State-of-the-art manufacturing process ensuring premium quality output.",
      details:
        "Manufacturing services can be provided by our commercial team. Production provide",
    },
  ];

  const handleCardClick = (productId) => {
    setActiveCard(activeCard === productId ? null : productId);
  };

  const closeDetails = () => {
    setActiveCard(null);
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-red-500 font-semibold text-lg mb-4"
          >
            Since 2015
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 leading-tight"
          >
            Expertly Engineered Counters
            {/* <br className="hidden md:block" /> */}&nbsp; & Fabrication
            Solutions Since 2015
            {/* <br className="hidden md:block" /> */}
          </motion.h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer"
              onClick={() => handleCardClick(product.id)}
            >
              {/* Product Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Desktop Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/80 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="text-center text-white p-6">
                    <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.details}</p>
                    <div className="flex items-center justify-center text-red-500 font-semibold">
                      <span className="mr-2">READ MORE</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>

                {/* Mobile Detail Overlay */}
                <AnimatePresence>
                  {activeCard === product.id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/90 flex items-center justify-center md:hidden z-10"
                    >
                      <div className="text-center text-white p-6 relative">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            closeDetails();
                          }}
                          className="absolute top-3 right-0 text-white hover:text-orange-500 transition-colors"
                        >
                          <X className="w-6 h-6" />
                        </button>

                        <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">
                          {product.title}
                        </h3>
                        <p className="text-gray-300 mb-4">{product.details}</p>
                        <div className="flex items-center justify-center text-orange-500 font-semibold">
                          <span className="mr-2">READ MORE</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Product Info (Always Visible) */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-8 bottom-8 opacity-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16"
          >
            <svg viewBox="0 0 64 64" className="w-full h-full">
              <path
                d="M32 8L36 20L48 16L44 28L56 32L44 36L48 48L36 44L32 56L28 44L16 48L20 36L8 32L20 28L16 16L28 20Z"
                fill="currentColor"
                className="text-orange-200"
              />
            </svg>
          </motion.div>
        </div>

        <div className="absolute right-8 top-8 opacity-10">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12"
          >
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-orange-200"
              />
              <circle
                cx="12"
                cy="12"
                r="6"
                fill="currentColor"
                className="text-orange-200"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
