import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CashDeskCounterProducts = () => {
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
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420703327/JT/RP/ZU/73020702/stainless-steel-gas-bhatti-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420703327/JT/RP/ZU/73020702/stainless-steel-gas-bhatti-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420703327/JT/RP/ZU/73020702/stainless-steel-gas-bhatti-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420703327/JT/RP/ZU/73020702/stainless-steel-gas-bhatti-counter-500x500.jpg",
      ],
      description:
        "Built for high-performance commercial use, our Stainless Steel Gas Bhatti Counter is designed to deliver reliable heat output and long-lasting durability. Constructed from premium stainless steel, this unit is ideal for busy kitchens, food stalls, catering setups, and restaurants.",
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
      name: "Stainless Steel Tandoor Bhatti",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420683216/KG/IU/ZT/73020702/stainless-steel-tandoor-bhatti-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420683216/KG/IU/ZT/73020702/stainless-steel-tandoor-bhatti-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420683216/KG/IU/ZT/73020702/stainless-steel-tandoor-bhatti-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420683216/KG/IU/ZT/73020702/stainless-steel-tandoor-bhatti-500x500.jpg",
      ],
      description:
        "Designed for professional kitchens, restaurants, and catering setups, our Stainless Steel Tandoor Bhatti delivers authentic tandoori cooking with the efficiency of gas operation. It features a standard clay inner tandoor, allowing for traditional flavor while offering modern convenience and durability.",
      features: [
        "2-Color Configuration",
        "Advanced Automation",
        "Quick Job Changes",
        "Superior Print Quality",
      ],
      price: "Get Latest Price",
      originalPrice: "₹45,00,000",
    },
    {
      id: 3,
      name: "Stainless Steel Dosa Gas Bhatti",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2020/11/UQ/JI/DU/58286588/dosa-gas-bhatti-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2020/11/UQ/JI/DU/58286588/dosa-gas-bhatti-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2020/11/UQ/JI/DU/58286588/dosa-gas-bhatti-1000x1000.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2020/11/UQ/JI/DU/58286588/dosa-gas-bhatti-1000x1000.jpg",
      ],
      description:
        "Engineered for high-performance in commercial kitchens, our Stainless Steel Dosa Gas Bhatti is designed to deliver consistent heat across a wide surface — perfect for making crisp, evenly cooked dosas, uttapams, and other South Indian delicacies. Its heavy-duty stainless steel body ensures long-lasting use and easy cleaning, ideal for restaurants, hotels, and street food vendors.",
      features: [
        "2-Color Configuration",
        "Advanced Automation",
        "Quick Job Changes",
        "Superior Print Quality",
      ],
      price: "Get Latest Price",
      originalPrice: "₹45,00,000",
    },
    {
      id: 4,
      name: "Stainless Steel Tandoor",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420683216/KG/IU/ZT/73020702/stainless-steel-tandoor-bhatti-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420683216/KG/IU/ZT/73020702/stainless-steel-tandoor-bhatti-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420683216/KG/IU/ZT/73020702/stainless-steel-tandoor-bhatti-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420683216/KG/IU/ZT/73020702/stainless-steel-tandoor-bhatti-500x500.jpg",
      ],
      description:
        "Crafted for authentic tandoori cooking in a modern commercial kitchen, our Stainless Steel Tandoor combines the rich cooking tradition of clay with the durability and hygiene of stainless steel. Built to handle high temperatures and heavy daily use, this gas-powered tandoor is perfect for preparing naan, roti, kebabs, and tandoori dishes with consistent results.",
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
                      className="w-full h-96 object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </AnimatePresence>

                  {/* Image Navigation */}
                  {/* <div className="absolute inset-0 flex items-center justify-between px-2 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage(product.id, product.images.length);
                      }}
                      className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage(product.id, product.images.length);
                      }}
                      className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div> */}

                  {/* Image Indicators */}
                  {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {product.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex((prev) => ({
                            ...prev,
                            [product.id]: idx,
                          }));
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          (currentImageIndex[product.id] || 0) === idx
                            ? "bg-white scale-125"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div> */}

                  {/* <div className="absolute inset-0 bg-gradient-to-t z-10 pointer-events-none from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}

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
                      onClick={() => (window.location.href = "tel:8051448069")}
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

export default CashDeskCounterProducts;
