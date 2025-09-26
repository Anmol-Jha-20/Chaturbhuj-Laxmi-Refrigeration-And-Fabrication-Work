import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, Star, Home, ChevronRight, Settings } from "lucide-react";
import HeroImage5 from "../../assets/HeroImages/HeroImage5.jpeg";

const ProductCard = ({ product, index }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="lg:flex">
        {/* Product Images */}
        <div className="lg:w-1/2 p-6">
          <div className="relative">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-80 lg:h-96 object-contain rounded-xl"
            />
            {/* <button className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300">
              <Eye className="w-5 h-5 text-gray-700" />
            </button> */}
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-2 mt-4 justify-center">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  selectedImage === idx
                    ? "border-blue-500 scale-105"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 p-6 lg:p-8">
          <div className="h-full flex flex-col">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {product.name}
              </h3>

              {/* <div className="flex items-center gap-4 mb-6">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600">
                  ₹{product.price}
                </div>
                <div className="text-gray-500">/ Piece</div>
                <button
                  onClick={() => (window.location.href = "tel:918075612353")}
                  className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors duration-300"
                >
                  Get Latest Price
                </button>
              </div> */}
            </div>

            {/* Product Specifications */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-gray-600" />
                Product Details:
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-2 border-b border-gray-100 last:border-b-0"
                  >
                    <span className="text-gray-600 font-medium">{key}</span>
                    <span className="text-gray-900 font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Description */}
            <div className="mb-6 flex-grow">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/917907720632?text=Hey!%20I%20am%20interested%20in%20your%20services.",
                    "_blank"
                  )
                }
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-800 cursor-pointer px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                {/* <Contact className="w-5 h-5 mr-2" /> */}
                Contact Us
              </button>
              <button
                onClick={() => (window.location.href = "tel:918075612353")}
                className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 cursor-pointer hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  const products = [
    {
      name: "Tree Guard",
      price: "1,050",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420422242/SF/KY/JR/73020702/110-500x500.jpg",
      ],
      specs: {
        Shape: "Cylindrical / Round",
        "Usage/Application": "Tree Protection / Outdoor Landscaping",
        Material: "Cement / Concrete",
        Height: "4 to 5 Feet",
        "Country of Origin": "Made in India",
      },
      description:
        "This Grey Cement Tree Guard is a strong and durable protective structure designed to safeguard young trees in outdoor environments. Crafted from high-quality cement, it provides robust protection against animals, mechanical damage, and harsh weather conditions, ensuring healthy tree growth. Its sturdy design and long-lasting build make it ideal for use in gardens, parks, roadside plantations, and other landscaped areas.",
    },
  ];

  return (
    <div className="space-y-12">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} index={index} />
      ))}
    </div>
  );
};

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

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
                className="inline-flex items-center bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                <Star className="w-4 h-4 mr-2" />
                Premium Quality Products
              </motion.div>

              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                The Tree Guard Built to Last
              </h1>

              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                <span className="block font-semibold text-yellow-400">
                  Strong. Durable. Maintenance-Free.
                </span>
              </p>

              <p className="text-lg mb-8 leading-relaxed text-gray-600">
                We offer a premium range of long-lasting tree guards, engineered
                for maximum protection and durability. Designed to shield young
                trees from animals, weather, and accidental damage, our tree
                guards are built using high-quality, weather-resistant
                materials. Ideal for parks, gardens, roadsides, and agricultural
                areas, they ensure long-term performance with minimal
                maintenance. A dependable solution for healthy tree growth —
                built to last in every environment.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => (window.location.href = "tel:918075612353")}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 cursor-pointer px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Quote Now
                </button>
                {/* <button className="border-2 border-white text-black hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
                   View Specifications
                 </button> */}
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
                  src={
                    "https://5.imimg.com/data5/SELLER/Default/2024/5/420422242/SF/KY/JR/73020702/110-500x500.jpg"
                  }
                  alt="Tree Guard Construction"
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
              Our <span className="text-blue-600">Tree Guard</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Offering a premium range of durable and reliable tree guards,
              designed to protect young trees from damage while enhancing
              landscape aesthetics. Engineered for strength and longevity, our
              tree guards ensure effective protection with timely delivery.
            </p>
          </motion.div>

          <ProductShowcase />
        </div>
      </section>
    </div>
  );
};

export default DisplayCounterProductPage;
