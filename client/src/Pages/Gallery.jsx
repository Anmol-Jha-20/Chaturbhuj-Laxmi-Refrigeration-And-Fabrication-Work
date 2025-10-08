import React, { useRef } from "react";
import HeroImage5 from "../assets/HeroImages/HeroImage5.jpeg";
import { Home, ChevronRight } from "lucide-react";
import GalleryImage1 from "../assets/Gallery/Gallery1.jpeg";
import GalleryImage2 from "../assets/Gallery/Gallery2.jpeg";
import GalleryImage3 from "../assets/Gallery/Gallery3.jpeg";
import GalleryImage4 from "../assets/Gallery/Gallery4.jpeg";
import GalleryImage5 from "../assets/Gallery/Gallery5.jpeg";
import GalleryImage6 from "../assets/Gallery/Gallery6.jpeg";
import GalleryImage7 from "../assets/Gallery/Gallery7.jpeg";
import GalleryImage8 from "../assets/Gallery/Gallery8.jpeg";
import GalleryImage9 from "../assets/Gallery/Gallery9.jpeg";
import GalleryImage10 from "../assets/Gallery/Gallery10.jpeg";
import GalleryImage11 from "../assets/Gallery/Gallery11.jpeg";
import GalleryImage12 from "../assets/Gallery/Gallery12.jpeg";
import GalleryImage13 from "../assets/Gallery/Gallery13.jpeg";
import GalleryImage14 from "../assets/Gallery/Gallery14.jpeg";
import GalleryImage15 from "../assets/Gallery/Gallery15.jpeg";
import GalleryImage16 from "../assets/Gallery/Gallery16.jpeg";
import GalleryImage17 from "../assets/Gallery/Gallery17.jpeg";
import GalleryImage18 from "../assets/Gallery/Gallery18.jpeg";
import GalleryImage19 from "../assets/Gallery/Gallery19.jpeg";
import GalleryImage20 from "../assets/Gallery/Gallery20.jpeg";
import HeroImage4 from "../assets//HeroImages/HeroImage4.jpeg";
import HeroImage6 from "../assets/HeroImages/HeroImage6.jpeg";
import SliderImage1 from "../assets/SliderImages/SliderImage1.jpeg";
import SliderImage6 from "../assets/SliderImages/SliderImage6.jpeg";
import GalleryImage28 from "../assets/Gallery2/GalleryImage28.jpeg";
import GalleryImage29 from "../assets/Gallery2/GalleryImage29.jpeg";
import GalleryImage30 from "../assets/Gallery2/GalleryImage30.jpeg";
import GalleryImage31 from "../assets/Gallery2/GalleryImage31.jpeg";
import GalleryImage33 from "../assets/Gallery2/GalleryImage33.jpeg";
import GalleryImage34 from "../assets/Gallery2/GalleryImage34.jpeg";
import GalleryImage35 from "../assets/Gallery2/GalleryImage35.jpeg";
import GalleryImage36 from "../assets/Gallery2/GalleryImage36.jpeg";
import GalleryImage37 from "../assets/Gallery2/GalleryImage37.jpeg";
import GalleryImage38 from "../assets/Gallery2/GalleryImage38.jpeg";

function Gallery() {
  const heroRef = useRef(null);
  return (
    <div className="min-h-screen bg-gray-50">
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
            <span className="text-red-400 text-sm font-medium">Gallery</span>
          </nav>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-on-scroll"
            style={{ animationDelay: "0.2s" }}
          >
            Gallery
          </h1>
        </div>
      </section>
      <div className="p-5 md:p-10">
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
          <img src={GalleryImage1} alt="gallery Image" />
          <img src={GalleryImage2} alt="gallery Image" />
          <img src={GalleryImage3} alt="gallery Image" />
          <img src={GalleryImage4} alt="gallery Image" />
          <img src={GalleryImage5} alt="gallery Image" />
          <img src={GalleryImage6} alt="gallery Image" />
          <img src={GalleryImage7} alt="gallery Image" />
          <img src={GalleryImage8} alt="gallery Image" />
          <img src={GalleryImage9} alt="gallery Image" />
          <img src={GalleryImage10} alt="gallery Image" />
          <img src={GalleryImage11} alt="gallery Image" />
          <img src={GalleryImage12} alt="gallery Image" />
          <img src={GalleryImage13} alt="gallery Image" />
          <img src={GalleryImage14} alt="gallery Image" />
          <img src={GalleryImage15} alt="gallery Image" />
          <img src={GalleryImage16} alt="gallery Image" />
          <img src={GalleryImage17} alt="gallery Image" />
          <img src={GalleryImage18} alt="gallery Image" />
          <img src={GalleryImage19} alt="gallery Image" />
          <img src={GalleryImage20} alt="gallery Image" />
          <img src={HeroImage4} alt="gallery Image" />
          <img src={HeroImage6} alt="gallery Image" />
          <img src={SliderImage1} alt="gallery Image" />
          <img src={SliderImage6} alt="gallery Image" />
          <img src={GalleryImage28} alt="gallery Image" />
          <img src={GalleryImage29} alt="gallery Image" />
          <img src={GalleryImage30} alt="gallery Image" />
          <img src={GalleryImage31} alt="gallery Image" />
          <img src={GalleryImage33} alt="gallery Image" />
          <img src={GalleryImage34} alt="gallery Image" />
          <img src={GalleryImage35} alt="gallery Image" />
          <img src={GalleryImage36} alt="gallery Image" />
          <img src={GalleryImage37} alt="gallery Image" />
          <img src={GalleryImage38} alt="gallery Image" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
