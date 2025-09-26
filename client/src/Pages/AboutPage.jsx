import React, { useEffect, useRef } from "react";
import {
  CheckCircle,
  ArrowRight,
  Home,
  ChevronRight,
  Factory,
  Zap,
  Recycle,
  Sparkles,
  ShoppingBag,
  HeadphonesIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import HeroImage5 from "../assets/HeroImages/HeroImage5.jpeg";
import HeroImage2 from "../assets/HeroImages/HeroImage2.jpeg";
import ImageSlider from "../components/ImageSlider/ImageSlider";
import TestimonialsSection from "../components/Testimonials/Testimonials";

const AboutPage = () => {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(50px)";
      el.style.transition = "all 0.8s ease-out";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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

  const benefits = [
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Precision Fabrication Services",
      description:
        "We manufacture high-quality display counters, stainless steel counters, and cash desk counters with great attention to detail and craftsmanship.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovative Product Designs",
      description:
        "Our products combine modern design with practical functionality to meet diverse business needs.",
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Industry Trends & Market Insights",
      description:
        "We keep you updated with the latest trends and market forecasts in the fabrication industry, helping you make informed decisions.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Professional Maintenance & Cleaning Services",
      description:
        "We provide maintenance and cleaning services for stainless steel and fabricated counters to preserve their quality and appearance.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Information */}

      {/* Hero Section */}
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
            <span className="text-red-400 text-sm font-medium">About Us</span>
          </nav>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            About Us
          </h1>
        </div>
      </section>

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
                Since 2015, Chaturbhuj Laxmi Refrigeration & Fabrication Work
                has been a trusted name in manufacturing premium display
                counters, stainless steel counters, and cash desk units for
                commercial use.
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
                  className="group bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>CONTACT US</span>
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

      <div className="my-10">
        <ImageSlider />
      </div>

      {/* Benefits Section */}
      <section
        ref={benefitsRef}
        className="py-20 bg-gray-900 text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url('data:image/svg+xml,${encodeURIComponent(`
                <svg width="60" height="60" xmlns="http://www.w3.org/2000/svg">
                  <g fill="white" opacity="0.1">
                    <circle cx="30" cy="30" r="2"/>
                    <circle cx="10" cy="10" r="1"/>
                    <circle cx="50" cy="10" r="1"/>
                    <circle cx="10" cy="50" r="1"/>
                    <circle cx="50" cy="50" r="1"/>
                  </g>
                </svg>
              `)})`,
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Content */}
            <div className="lg:col-span-1 animate-on-scroll">
              <div className="flex items-center mb-6">
                <div className="w-8 h-1 bg-red-600 mr-3"></div>
                <span className="text-red-500 font-semibold text-sm tracking-wider uppercase">
                  OUR BENEFITS
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                From Custom Designs
                <br />
                <span className="text-white">to Large-Scale Fabrication</span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                We specialize in manufacturing a wide range of high-quality
                counters—from uniquely crafted display counters to mass-produced
                stainless steel and cash desk counters. Our fabrication services
                are tailored to meet the specific needs of businesses across
                various industries.
              </p>

              <button className="group bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center transform hover:scale-105">
                CONTACT US
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Content - Benefits Grid */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {/* Fabric Treatment Column */}
              <div
                className="space-y-6 animate-on-scroll"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Factory className="w-6 h-6 mr-3 text-red-500" />
                  Manufacturing & Product
                </h3>

                {benefits.slice(0, 2).map((benefit, index) => (
                  <div
                    key={index}
                    className="group hover:bg-gray-800 p-4 rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start">
                      <div className="text-red-500 mr-3 mt-1 group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rapid Productions Column */}
              <div
                className="space-y-6 animate-on-scroll"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-red-500" />
                  Insights & Support
                </h3>

                {benefits.slice(2, 4).map((benefit, index) => (
                  <div
                    key={index}
                    className="group hover:bg-gray-800 p-4 rounded-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start">
                      <div className="text-red-500 mr-3 mt-1 group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-400 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        {/* <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ChevronRight className="w-6 h-6 rotate-[-90deg]" />
        </button> */}
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default AboutPage;
