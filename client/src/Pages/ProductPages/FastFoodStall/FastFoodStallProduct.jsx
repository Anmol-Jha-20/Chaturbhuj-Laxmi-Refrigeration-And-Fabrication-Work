import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FastFoodStallProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      id: 1,
      name: "Stainless Steel Gas Bhatti Counter",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420706642/ZQ/KZ/EJ/73020702/chinese-fast-food-stall-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420706642/ZQ/KZ/EJ/73020702/chinese-fast-food-stall-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420706642/ZQ/KZ/EJ/73020702/chinese-fast-food-stall-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420706642/ZQ/KZ/EJ/73020702/chinese-fast-food-stall-500x500.jpg",
      ],
      description:
        "This premium Chinese Fast Food Stall is specially designed for high-efficiency food preparation and professional street vending. Ideal for restaurants, food courts, and mobile setups, it combines durability with sleek aesthetics to enhance your food service experience.",
      features: [
        "2-Color Printing",
        "High Speed Operation",
        "Precision Registration",
        "Auto Plate Loading",
      ],
      price: "Get Latest Price",
      originalPrice: "₹55,00,000",
    },
  ];

  const nextImage = (productId, imagesLength) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) + 1) % imagesLength,
    }));
  };

  const prevImage = (productId, imagesLength) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productId]: ((prev[productId] || 0) - 1 + imagesLength) % imagesLength,
    }));
  };

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const updatedIndexes = { ...prev };
        products.forEach((product) => {
          const currentIndex = prev[product.id] || 0;
          updatedIndexes[product.id] =
            (currentIndex + 1) % product.images.length;
        });
        return updatedIndexes;
      });
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, [products]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* SEO Meta Tags */}

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 500}ms` }}
                onMouseEnter={() => setActiveProduct(product.id)}
                onMouseLeave={() => setActiveProduct(null)}
              >
                <div className="relative overflow-hidden group">
                  <AnimatePresence mode="sync">
                    <motion.img
                      src={product.images[currentImageIndex[product.id] || 0]}
                      alt={`${product.name} - Image ${
                        (currentImageIndex[product.id] || 0) + 1
                      }`}
                      className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </AnimatePresence>

                  <div className="absolute top-4 right-4 flex flex-col gap-2"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  <div className="border-t pt-4 flex justify-between items-center">
                    <div className="flex flex-col">
                      <div className="text-xl md:text-2xl lg:text-2xl font-bold text-red-600">
                        {product.price}
                      </div>
                      {/* {product.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </div>
                      )} */}
                    </div>
                    <button
                      onClick={() =>
                        (window.location.href = "tel:+917989198151")
                      }
                      className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-700 hover:to-red-800 cursor-pointer text-white px-2 md:px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 group"
                    >
                      Contact Us
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastFoodStallProducts;
