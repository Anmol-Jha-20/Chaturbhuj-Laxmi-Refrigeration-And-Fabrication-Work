import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, MessageCircle, Phone } from "lucide-react";
import SliderImage9 from "../../assets/SliderImages/SliderImage9.jpeg";
import HeroImage3 from "../../assets/HeroImages/HeroImage3.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Display Counter",
      description:
        "Providing you the best range of Hot Samosa Counter, Long Curved Sweet Display Counter, Bakery Display Counter, Center Round Glass Sweet Display Counter, Stainless Steel Tea Display Counter and Fast Food Serving Counter with effective & timely delivery.",
      image: SliderImage9,
      link: "/display-counter",
    },
    {
      id: 2,
      title: "Stainless Steel Bhatti",
      description:
        "Offering you a complete choice of products which include Stainless Steel Gas Bhatti Counter, Stainless Steel Tandoor Bhatti, Stainless Steel Dosa Gas Bhatti and Stainless Steel Tandoor.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420703327/JT/RP/ZU/73020702/stainless-steel-gas-bhatti-counter-500x500.jpg",
      link: "/stainless-steel-bhatti",
    },
    {
      id: 3,
      title: "Stainless Steel Counter",
      description:
        "Offering you a complete choice of products which include Fast Food Cart and Tea Stall Counter.",
      image: HeroImage3,
      link: "/stainless-steel-counter",
    },
    {
      id: 4,
      title: "Fast Food Stall",
      description:
        "Manufacturer of a wide range of products which include Chinese Fast Food Stall.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420706642/ZQ/KZ/EJ/73020702/chinese-fast-food-stall-500x500.jpg",
      link: "/fast-food-stall",
    },
    {
      id: 5,
      title: "Stainless Steel Table",
      description:
        "Leading Manufacturer of Stainless Steel Round Table, Kitchen Working Table, Stainless Steel Dining Table, Stainless Steel Table and Chinese Fast Food Cart from Muzaffarpur.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420684153/LX/KU/YT/73020702/stainless-steel-table-500x500.png",
      link: "/stainless-steel-table",
    },
    {
      id: 6,
      title: "Cash Desk Counter",
      description:
        "Providing you the best range of Restaurant Cash Counter and Korean Cash Counter Desk with effective & timely delivery.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420622910/QQ/OV/YP/73020702/korean-cash-counter-desk-500x500.jpg",
      link: "/cash-desk-counter",
    },
    {
      id: 7,
      title: "Commercial Gas Stove",
      description:
        "Leading Manufacturer of 3 Burner Commercial Gas Stove and Stainless Steel Three Burner Bhatti from Muzaffarpur.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420701254/MY/UW/ZU/73020702/3-burner-commercial-gas-stove-500x500.png",
      link: "/commercial-gas-stove",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Whatsapp Button */}
      <div className="fixed bottom-6 left-0 z-50">
        <button
          onClick={() =>
            window.open(
              "https://wa.me/917989198151?text=Hey!%20I%20am%20interested%20in%20your%20services.",
              "_blank"
            )
          }
          className="bg-green-600 hover:bg-green-700 cursor-pointer text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label="Need Help?"
        >
          <FaWhatsapp size={24} />
        </button>
      </div>

      {/* Phone Button */}
      <div className="fixed bottom-6 right-0 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-red-500 hover:bg-red-600 text-white p-4 cursor-pointer rounded-full shadow-lg transition-colors duration-200"
          onClick={() => (window.location.href = "tel:7989198151")}
        >
          <Phone size={24} />
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Your One-Stop Solution for Premium Commercial Fabrication
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Since 2015, we’ve specialized in custom display counters, stainless
            steel counters, cash desk counters, and more — crafted to elevate
            your business space with quality and precision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-52 xl:h-96 md:h-96 lg:h-96 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base lg:text-lg mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow Button */}
                <div className="flex justify-start">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      x: 5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold cursor-pointer rounded-full shadow-md hover:shadow-lg transition-all duration-300 group-hover:shadow-xl"
                    onClick={() => {
                      navigate(service.link);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    <span className="mr-2">Read More</span>
                    <ChevronRight
                      size={18}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
