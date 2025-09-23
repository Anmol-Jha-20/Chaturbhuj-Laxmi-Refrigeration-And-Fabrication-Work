import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Facebook,
  Plus,
  Linkedin,
  Youtube,
} from "lucide-react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-white">
      {/* Top Section with Contact Info */}
      {/* <div className="bg-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">

            <div className="flex items-center space-x-4">
              <div className="bg-orange-500 p-3 rounded">
                <div className="text-white font-bold text-xl">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-orange-500 rounded-full relative">
                        <div className="absolute inset-1 bg-white rounded-full opacity-20"></div>
                      </div>
                    </div>
                    <span>Textica</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-1">
                  Address
                </h3>
                <p className="text-gray-400">Themeforest, Envato HQ</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-orange-500">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-1">
                  Call Us On
                </h3>
                <p className="text-gray-400">+1800-001-6555</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-orange-500">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-1">
                  Email Us
                </h3>
                <p className="text-gray-400">info@peacefulgode.com</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Content */}
      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Textica */}
            <div>
              <h3 className="text-xl font-bold mb-6">About Us</h3>
              <p className="text-gray-400 leading-relaxed">
                Established In 2015, Chaturbhuj Laxmi Refrigeration Fabrication
                Work Is A Famous Manufacturer Of Display Counter, Stainless
                Steel Counter & Cash Desk Counter And Much More.
              </p>
            </div>

            {/* Textica Services */}
            <div>
              <h3 className="text-xl font-bold mb-6">Our Products</h3>
              <nav>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/services/fabric-printing"
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center group"
                    >
                      <span className="text-red-500 mr-3 group-hover:mr-4 transition-all duration-200">
                        —
                      </span>
                      Display Counter
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/design-fabric"
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center group"
                    >
                      <span className="text-red-500 mr-3 group-hover:mr-4 transition-all duration-200">
                        —
                      </span>
                      Stainless Steel Bhatti
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/stich-fabric"
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center group"
                    >
                      <span className="text-red-500 mr-3 group-hover:mr-4 transition-all duration-200">
                        —
                      </span>
                      Stainless Steel Counter
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/engineering"
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center group"
                    >
                      <span className="text-red-500 mr-3 group-hover:mr-4 transition-all duration-200">
                        —
                      </span>
                      Fast Food Stall
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services/engineering"
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center group"
                    >
                      <span className="text-red-500 mr-3 group-hover:mr-4 transition-all duration-200">
                        —
                      </span>
                      Stainless Steel Table
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Useful Links</h3>
              <nav>
                <ul className="space-y-4">
                  <li>
                    <a
                      href="/about"
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center group"
                    >
                      <span className="text-red-500 mr-3 group-hover:mr-4 transition-all duration-200">
                        —
                      </span>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center group"
                    >
                      <span className="text-red-500 mr-3 group-hover:mr-4 transition-all duration-200">
                        —
                      </span>
                      Our Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="/team"
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center group"
                    >
                      <span className="text-red-500 mr-3 group-hover:mr-4 transition-all duration-200">
                        —
                      </span>
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing"
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center group"
                    >
                      <span className="text-red-500 mr-3 group-hover:mr-4 transition-all duration-200">
                        —
                      </span>
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 flex items-center group"
                    >
                      <span className="text-red-500 mr-3 group-hover:mr-4 transition-all duration-200">
                        —
                      </span>
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6">Our Newsletter</h3>
              <p className="text-gray-400 mb-6">
                Sign up for the latest deals products news and more from us.
              </p>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-200 pr-12"
                    onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
                    aria-label="Email address for newsletter subscription"
                  />
                  <button
                    onClick={handleSubmit}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition-colors duration-200"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-red-500 text-gray-400 hover:text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://plus.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-red-500 text-gray-400 hover:text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="Follow us on Google Plus"
              >
                <Plus className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-red-500 text-gray-400 hover:text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-red-500 text-gray-400 hover:text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                aria-label="Follow us on YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p className="flex items-center">
                Designed By
                <span className="text-red-500 ml-1 font-semibold">
                  <a href="https://webvortexsolutions.com/" target="_blank">
                    {" "}
                    webvortexsolutions.com
                  </a>
                </span>
              </p>
            </div>

            {/* Back to Top Button */}
            {/* <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110 fixed bottom-6 right-6 z-50 shadow-lg"
              aria-label="Back to top"
            >
              <svg
                className="w-5 h-5 transform rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// import React, { useState } from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Send,
//   Facebook,
//   Plus,
//   Linkedin,
//   Youtube,
// } from "lucide-react";

// const Footer = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle newsletter subscription
//     console.log("Newsletter subscription:", email);
//     setEmail("");
//   };

//   return (
//     <footer className="bg-gray-800 text-white">
//       {/* Top Contact Bar */}
//       <div className="bg-gray-200 text-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row items-center justify-between py-4 space-y-4 lg:space-y-0">
//             {/* Logo */}
//             <div className="bg-orange-500 px-6 py-3 flex items-center space-x-3">
//               <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
//                 <div className="w-6 h-6 bg-orange-500 rounded-full relative">
//                   <div className="absolute inset-1 bg-white rounded-full opacity-20"></div>
//                 </div>
//               </div>
//               <span className="text-white font-bold text-xl">Textica</span>
//             </div>

//             {/* Contact Information */}
//             <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-16">
//               {/* Address */}
//               <div className="flex items-center space-x-3">
//                 <div className="text-orange-500">
//                   <MapPin className="w-6 h-6" />
//                 </div>
//                 <div className="text-center sm:text-left">
//                   <h3 className="font-bold text-gray-800">Address</h3>
//                   <p className="text-gray-600 text-sm">
//                     Themeforest, Envato HQ
//                   </p>
//                 </div>
//               </div>

//               {/* Call Us */}
//               <div className="flex items-center space-x-3">
//                 <div className="text-orange-500">
//                   <Phone className="w-6 h-6" />
//                 </div>
//                 <div className="text-center sm:text-left">
//                   <h3 className="font-bold text-gray-800">Call Us On</h3>
//                   <p className="text-gray-600 text-sm">+1800-001-6555</p>
//                 </div>
//               </div>

//               {/* Email Us */}
//               <div className="flex items-center space-x-3">
//                 <div className="text-orange-500">
//                   <Mail className="w-6 h-6" />
//                 </div>
//                 <div className="text-center sm:text-left">
//                   <h3 className="font-bold text-gray-800">Email Us</h3>
//                   <p className="text-gray-600 text-sm">info@peacefulgode.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Footer Content */}
//       <div className="bg-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* About Textica */}
//             <div>
//               <h3 className="text-xl font-bold mb-6">About Textica</h3>
//               <p className="text-gray-400 leading-relaxed">
//                 It helps designers plan out where the content will sit, the
//                 content to be written and approved.
//               </p>
//             </div>

//             {/* Textica Services */}
//             <div>
//               <h3 className="text-xl font-bold mb-6">Textica Services</h3>
//               <nav>
//                 <ul className="space-y-4">
//                   <li>
//                     <a
//                       href="/services/fabric-printing"
//                       className="text-gray-400 hover:text-orange-500 transition-colors duration-200 flex items-center group"
//                     >
//                       <span className="text-orange-500 mr-3 group-hover:mr-4 transition-all duration-200">
//                         —
//                       </span>
//                       Fabric Printing
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/services/design-fabric"
//                       className="text-gray-400 hover:text-orange-500 transition-colors duration-200 flex items-center group"
//                     >
//                       <span className="text-orange-500 mr-3 group-hover:mr-4 transition-all duration-200">
//                         —
//                       </span>
//                       We Design Fabric
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/services/stich-fabric"
//                       className="text-gray-400 hover:text-orange-500 transition-colors duration-200 flex items-center group"
//                     >
//                       <span className="text-orange-500 mr-3 group-hover:mr-4 transition-all duration-200">
//                         —
//                       </span>
//                       Stich Fabric
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/services/engineering"
//                       className="text-gray-400 hover:text-orange-500 transition-colors duration-200 flex items-center group"
//                     >
//                       <span className="text-orange-500 mr-3 group-hover:mr-4 transition-all duration-200">
//                         —
//                       </span>
//                       Engineering
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>

//             {/* Useful Links */}
//             <div>
//               <h3 className="text-xl font-bold mb-6">Useful Links</h3>
//               <nav>
//                 <ul className="space-y-4">
//                   <li>
//                     <a
//                       href="/about"
//                       className="text-gray-400 hover:text-orange-500 transition-colors duration-200 flex items-center group"
//                     >
//                       <span className="text-orange-500 mr-3 group-hover:mr-4 transition-all duration-200">
//                         —
//                       </span>
//                       About Us
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/services"
//                       className="text-gray-400 hover:text-orange-500 transition-colors duration-200 flex items-center group"
//                     >
//                       <span className="text-orange-500 mr-3 group-hover:mr-4 transition-all duration-200">
//                         —
//                       </span>
//                       Our Services
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/team"
//                       className="text-gray-400 hover:text-orange-500 transition-colors duration-200 flex items-center group"
//                     >
//                       <span className="text-orange-500 mr-3 group-hover:mr-4 transition-all duration-200">
//                         —
//                       </span>
//                       Our Team
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="/pricing"
//                       className="text-gray-400 hover:text-orange-500 transition-colors duration-200 flex items-center group"
//                     >
//                       <span className="text-orange-500 mr-3 group-hover:mr-4 transition-all duration-200">
//                         —
//                       </span>
//                       Our Pricing
//                     </a>
//                   </li>
//                 </ul>
//               </nav>
//             </div>

//             {/* Newsletter */}
//             <div>
//               <h3 className="text-xl font-bold mb-6">Our Newsletter</h3>
//               <p className="text-gray-400 mb-6">
//                 Sign up for the latest deals products news and more from us.
//               </p>
//               <div className="space-y-4">
//                 <div className="relative">
//                   <input
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Your email address"
//                     className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-200 pr-12"
//                     onKeyPress={(e) => e.key === "Enter" && handleSubmit(e)}
//                     aria-label="Email address for newsletter subscription"
//                   />
//                   <button
//                     onClick={handleSubmit}
//                     className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-md transition-colors duration-200"
//                     aria-label="Subscribe to newsletter"
//                   >
//                     <Send className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="bg-gray-900 border-t border-gray-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
//             {/* Social Media Icons */}
//             <div className="flex space-x-4">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gray-700 hover:bg-orange-500 text-gray-400 hover:text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
//                 aria-label="Follow us on Facebook"
//               >
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://plus.google.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gray-700 hover:bg-orange-500 text-gray-400 hover:text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
//                 aria-label="Follow us on Google Plus"
//               >
//                 <Plus className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gray-700 hover:bg-orange-500 text-gray-400 hover:text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
//                 aria-label="Follow us on LinkedIn"
//               >
//                 <Linkedin className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://youtube.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-gray-700 hover:bg-orange-500 text-gray-400 hover:text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110"
//                 aria-label="Follow us on YouTube"
//               >
//                 <Youtube className="w-5 h-5" />
//               </a>
//             </div>

//             {/* Copyright */}
//             <div className="text-gray-400 text-sm">
//               <p className="flex items-center">
//                 Proudly Powered By
//                 <span className="text-orange-500 ml-1 font-semibold">
//                   Textica
//                 </span>
//               </p>
//             </div>

//             {/* Back to Top Button */}
//             <button
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-200 transform hover:scale-110 fixed bottom-6 right-6 z-50 shadow-lg"
//               aria-label="Back to top"
//             >
//               <svg
//                 className="w-5 h-5 transform rotate-90"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
