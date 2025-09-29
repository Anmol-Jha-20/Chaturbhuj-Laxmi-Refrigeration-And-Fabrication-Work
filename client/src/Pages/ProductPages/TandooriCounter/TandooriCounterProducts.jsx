import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TandooriCounterProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      id: 1,
      name: "Tandoori Display Counter",
      images: [
        "https://www.cookmanequipments.com/uploaded_files/other-display-counter.png",
        "https://www.cookmanequipments.com/uploaded_files/other-display-counter.png",
        "https://www.cookmanequipments.com/uploaded_files/other-display-counter.png",
        "https://www.cookmanequipments.com/uploaded_files/other-display-counter.png",
      ],
      description:
        "Our Tandoori Display Counter is designed to showcase and serve freshly prepared tandoori items in a clean and attractive setup. Made from high-quality stainless steel, it features a heat-resistant surface and optional display glass to keep food visible and hygienic. Ideal for live kitchens, restaurants, food courts, and catering setups, this counter combines functionality with presentation to enhance your customer experience.",
      features: [
        "2-Color Printing",
        "High Speed Operation",
        "Precision Registration",
        "Auto Plate Loading",
      ],
      price: "Get Latest Price",
      originalPrice: "₹55,00,000",
    },
    {
      id: 2,
      name: "Tandoori Bhatti",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2020/12/CS/IB/UU/119525795/ss-tandoori-bhatti-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2020/12/CS/IB/UU/119525795/ss-tandoori-bhatti-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2020/12/CS/IB/UU/119525795/ss-tandoori-bhatti-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2020/12/CS/IB/UU/119525795/ss-tandoori-bhatti-1000x1000.jpg",
      ],
      description:
        "The Tandoori Bhatti is a heavy-duty cooking unit designed for preparing authentic tandoori dishes like naan, roti, kebabs, and tikka. Built with durable stainless steel and high-heat insulation, it is ideal for restaurants, dhabas, food stalls, and catering services. Available in both charcoal and gas variants, it delivers consistent heat and traditional flavor in every serving.",
      features: [
        "2-Color Configuration",
        "Advanced Automation",
        "Quick Job Changes",
        "Superior Print Quality",
      ],
      price: "Get Latest Price",
      originalPrice: "₹45,00,000",
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
      <section className="py-5 px-4">
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
                      className="w-full h-96 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </AnimatePresence>

                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {/* <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Premium
                    </div>
                    {product.originalPrice && (
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Save ₹
                        {(
                          parseInt(product.originalPrice.replace(/[₹,]/g, "")) -
                          parseInt(product.price.replace(/[₹,]/g, ""))
                        ).toLocaleString()}
                      </div>
                    )} */}
                  </div>
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
                      onClick={() => (window.location.href = "tel:7989198151")}
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

export default TandooriCounterProducts;
