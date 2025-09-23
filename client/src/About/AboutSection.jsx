import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, HeadphonesIcon } from "lucide-react";
import HeroImage2 from "../assets/HeroImages/HeroImage2.jpeg";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Content Side */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* About Us Label */}
            <motion.div
              className="flex items-center space-x-2"
              variants={itemVariants}
            >
              <div className="w-8 h-px bg-gradient-to-r from-red-500 to-red-600"></div>
              <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
                ABOUT US
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
              variants={itemVariants}
            >
              The Legacy of
              <span className="block">Quality Fabrication</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-gray-600 text-lg leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              Since 2015, Chaturbhuj Laxmi Refrigeration & Fabrication Work has
              been a trusted name in manufacturing premium display counters,
              stainless steel counters, and cash desk units for commercial use.
            </motion.p>

            {/* Features List */}
            <motion.div className="space-y-6" variants={itemVariants}>
              {/* Feature 1 */}
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-4 h-4 text-red-500" />
                  </div>
                </div>
                <div>
                  <span className="text-red-500 font-bold text-lg">01.</span>
                  <h3 className="text-gray-900 font-bold text-xl ml-2 inline">
                    Customized Fabrication Solutions
                  </h3>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                className="flex items-start space-x-4"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <HeadphonesIcon className="w-4 h-4 text-red-500" />
                  </div>
                </div>
                <div>
                  <span className="text-red-500 font-bold text-lg">02.</span>
                  <h3 className="text-gray-900 font-bold text-xl ml-2 inline">
                    Reliable Client Support
                  </h3>
                </div>
              </motion.div>
            </motion.div>

            {/* Read More Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-none transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>READ MORE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>

            {/* Decorative Elements */}
            {/* <motion.div
              className="absolute -bottom-16 -left-16 opacity-5"
              variants={itemVariants}
            >
              <div className="w-64 h-64 border-2 border-gray-300 rounded-full"></div>
              <div className="w-32 h-32 border-2 border-gray-300 rounded-full absolute top-8 left-8"></div>
              <div className="w-16 h-16 bg-gray-300 rounded-full absolute top-16 left-16"></div>
            </motion.div> */}
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="relative order-first lg:order-last"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={HeroImage2}
                  alt="Woman working on textile manufacturing with sewing machine"
                  className="w-full h-96 lg:h-[500px] xl:h-[600px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>

              {/* Background Elements */}
              <motion.div
                className="absolute top-8 right-8 w-24 h-24 bg-orange-500 rounded-full opacity-10 -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              ></motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-300 rounded-full opacity-10 -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>

              {/* Up Arrow Button */}
              <motion.button
                className="absolute bottom-6 right-6 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-sm shadow-lg transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <ArrowRight className="w-5 h-5 -rotate-45 group-hover:scale-110 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              className="absolute top-8 left-8 bg-white rounded-xl p-4 shadow-lg border border-gray-100"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/4 w-2 h-2 bg-orange-200 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-orange-300 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
