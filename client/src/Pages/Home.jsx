import React from "react";
import Hero from "../components/Hero/Hero.jsx";
import AboutIntro from "../About/AboutIntro.jsx";
import ServicesSection from "../components/Sevices/Services.jsx";
import AboutSection from "../About/AboutSection.jsx";
import TestimonialsSection from "../components/Testimonials/Testimonials.jsx";
import WhyChooseUs from "../components/GstComponent/GstComponent.jsx";

function Home() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Hero />
      </div>
      <AboutIntro />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <TestimonialsSection />
    </>
  );
}

export default Home;
