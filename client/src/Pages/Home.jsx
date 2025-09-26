import React from "react";
// import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
// import Footer from "../components/Footer/Footer.jsx";
import AboutIntro from "../About/AboutIntro.jsx";
import ServicesSection from "../components/Sevices/Services.jsx";
import AboutSection from "../About/AboutSection.jsx";
import TestimonialsSection from "../components/Testimonials/Testimonials.jsx";

function Home() {
  return (
    <>
      {/* <Header /> */}
      <div className="overflow-x-hidden">
        <Hero />
      </div>
      <AboutIntro />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      {/* <Footer /> */}
    </>
  );
}

export default Home;
