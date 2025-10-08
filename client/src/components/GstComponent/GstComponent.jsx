import React, { useState } from "react";
import { ShieldCheck, Star, Clock, Award, X } from "lucide-react";

const WhyChooseUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}

        {/* GST Certificate */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-red-800 mb-4">
            Our GST Registration
          </h3>
          <div className="flex justify-center">
            <img
              src="GstImage.png"
              alt="GST Registration Certificate - Chaturbhuj Laxmi"
              className="rounded-lg shadow-lg w-full max-w-md border-3 border-red-400"
              loading="lazy"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </div>
        {/* Fullscreen Image Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              className="absolute top-5 right-5 text-white text-3xl p-2 bg-black/50 rounded-full hover:bg-black"
              onClick={() => setIsOpen(false)}
            >
              <X size={30} />
            </button>
            <img
              src="GstImage.png"
              alt="GST Registration Certificate - Chaturbhuj Laxmi"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
