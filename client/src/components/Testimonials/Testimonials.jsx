import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Alex John Martin",
      role: "SENIOR MANAGER",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "These services involve cleaning and washing textiles, such as clothing, linens, and towels. Laundering services can be provided by commercial laundry facilities hotels",
      rating: 5,
    },
    {
      id: 2,
      name: "Niku Harrison",
      role: "OWNER",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face",
      text: "These services involve cleaning and washing textiles, such as clothing, linens, and towels. Laundering services can be provided by commercial laundry facilities hotels",
      rating: 5,
    },
    {
      id: 3,
      name: "Leia Organa",
      role: "FASHION DESIGNER",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "These services involve cleaning and washing textiles, such as clothing, linens, and towels. Laundering services can be provided by commercial laundry facilities hotels",
      rating: 5,
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "BUSINESS OWNER",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "These services involve cleaning and washing textiles, such as clothing, linens, and towels. Laundering services can be provided by commercial laundry facilities hotels",
      rating: 5,
    },
    {
      id: 5,
      name: "Michael Chen",
      role: "HOTEL MANAGER",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "These services involve cleaning and washing textiles, such as clothing, linens, and towels. Laundering services can be provided by commercial laundry facilities hotels",
      rating: 5,
    },
    {
      id: 6,
      name: "Emily Davis",
      role: "RESTAURANT OWNER",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      text: "These services involve cleaning and washing textiles, such as clothing, linens, and towels. Laundering services can be provided by commercial laundry facilities hotels",
      rating: 5,
    },
  ];

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${
          i < rating ? "text-orange-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  const GoogleIcon = () => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 10 20 10C22.5492 10 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
        fill="#FFC107"
      />
      <path
        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
        fill="#FF3D00"
      />
      <path
        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
        fill="#4CAF50"
      />
      <path
        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.8058 26.0133 27.9758L26.0159 27.975L31.1742 32.34C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
        fill="#1976D2"
      />
    </svg>
  );

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="w-6 h-6 border-2 border-red-500 transform rotate-45 mr-3"></div>
            <span className="text-red-500 text-sm font-semibold uppercase tracking-wide">
              OUR TESTIMONIALS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            What Our Happy Clients Say About
            <br />
            Us
          </h2>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 transform ${
                  isAnimating
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                } hover:shadow-xl hover:-translate-y-1`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Profile Section */}
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-red-500 text-sm font-semibold uppercase tracking-wide">
                      {testimonial.role}
                    </p>
                  </div>
                  {/* <GoogleIcon /> */}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {testimonial.text}
                </p>

                {/* Quality Services & Rating */}
                <div>
                  <h4 className="text-gray-800 font-semibold text-lg mb-2">
                    Quality Services
                  </h4>
                  <div className="flex items-center">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-12 space-x-4">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              disabled={isAnimating}
              className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
            </button>

            {/* Page Indicators */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-red-500 w-8"
                      : "bg-gray-300 hover:bg-red-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              disabled={isAnimating}
              className="w-12 h-12 bg-red-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
