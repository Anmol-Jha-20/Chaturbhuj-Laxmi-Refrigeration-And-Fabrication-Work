// import { useState } from "react";
// import HeroImage1 from "../../assets/HeroImages/HeroImage1.jpeg";
// import HeroImage2 from "../../assets/HeroImages/HeroImage2.jpeg";
// import HeroImage3 from "../../assets/HeroImages/HeroImage3.jpeg";
// import HeroImage4 from "../../assets/HeroImages/HeroImage4.jpeg";
// import HeroImage5 from "../../assets/HeroImages/HeroImage5.jpeg";
// import HeroImage6 from "../../assets/HeroImages/HeroImage6.jpeg";
// import HeroImage7 from "../../assets/HeroImages/HeroImage7.jpeg";

// function Hero() {
//   const [expandedIndex, setExpandedIndex] = useState(0);

//   const panels = [
//     {
//       image: HeroImage1,
//     },
//     {
//       image: HeroImage2,
//     },
//     {
//       image: HeroImage3,
//     },
//     {
//       image: HeroImage4,
//     },
//     {
//       image: HeroImage5,
//     },
//     {
//       image: HeroImage6,
//     },
//     {
//       image: HeroImage7,
//     },
//     // {
//     //   image:
//     //     "https://i.pinimg.com/736x/bd/99/76/bd9976c21f52db379fc4d35955c48712.jpg",
//     // },
//   ];

//   const handleClick = (index) => {
//     setExpandedIndex(index);
//   };

//   return (
//     <main className="w-screen h-screen bg-black overflow-hidden">
//       <div
//         className="h-full w-full overflow-hidden flex items-center justify-center p-4 relative"
//         style={{
//           backgroundImage: `url(${panels[expandedIndex].image})`,
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}
//       >
//         <div className="inset-0 absolute bg-[rgba(0,0,0,0.7)] backdrop-blur-md z-0"></div>

//         {/* Desktop = row | Mobile = column */}
//         <div className="flex flex-col md:flex-row w-full max-w-7xl h-[80vh] md:h-[80vh] gap-2 items-center justify-center z-10">
//           {panels.map((panel, index) => (
//             <div
//               key={index}
//               onClick={() => handleClick(index)}
//               className={`
//                 rounded-2xl bg-white cursor-pointer
//                 transition-all duration-500 ease-in-out overflow-hidden
//                 flex-shrink-0
//                 ${
//                   expandedIndex === index
//                     ? "md:w-[60%] w-full md:h-full h-[40%]"
//                     : "md:w-[10%] w-full md:h-full h-[10%] hover:bg-gray-200"
//                 }
//                 min-w-[40px] block
//               `}
//             >
//               <img
//                 src={panel.image}
//                 alt=""
//                 className="w-full h-full object-cover object-top"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Hero;

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react";
import HeroImage4 from "../../assets/HeroImages/HeroImage4.jpeg";
import HeroImage5 from "../../assets/HeroImages/HeroImage5.jpeg";
import HeroImage6 from "../../assets/HeroImages/HeroImage6.jpeg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Home to Quality Fabrication Solutions",
      subtitle:
        "Transform your business space with our expert fabrication services and premium quality products.",
      description:
        "Since 2015, Chaturbhuj Laxmi Refrigeration Fabrication Work has been a trusted manufacturer of display counters, stainless steel counters, and more.",
      image: HeroImage4,
      ctaText: "BOOK FREE CONSULTATION",
    },
    {
      id: 2,
      title: "Premium Fabrication Solutions",
      subtitle:
        "Modern counters and fabrication work designed for style and durability.",
      description:
        "Since 2015, Chaturbhuj Laxmi Refrigeration Fabrication Work has been a trusted manufacturer of display counters, stainless steel counters, and more.",
      image: HeroImage5,
      ctaText: "BOOK FREE CONSULTATION",
    },
    {
      id: 3,
      title: "Premium Commercial Counters",
      subtitle: "Durable and stylish solutions for modern business spaces.",
      description:
        "Since 2015, Chaturbhuj Laxmi Refrigeration Fabrication Work has been a trusted manufacturer of display counters, stainless steel counters, and more.",
      image: HeroImage6,
      ctaText: "BOOK FREE CONSULTATION",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-110"
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${slide.image})`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } ${index !== currentSlide ? "absolute" : ""}`}
            >
              <h2 className="text-sm md:text-base font-medium mb-4 text-gray-200 tracking-wide">
                {slide.subtitle}
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200 leading-relaxed">
                {slide.description}
              </p>
              <button
                onClick={() => (window.location.href = "tel:7989198151")}
                className="bg-red-500 hover:bg-red-600 text-white cursor-pointer font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {slide.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-0 md:left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 md:right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
