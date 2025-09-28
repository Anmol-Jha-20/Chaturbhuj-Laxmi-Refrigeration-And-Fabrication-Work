import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  Search,
  ShoppingCart,
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  Facebook,
  Plus,
} from "lucide-react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState(null);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const menuItems = {
    // Pages: {
    //   items: ["About Us", "Team", "FAQ", "Pricing", "Gallery", "Coming Soon"],
    // },
    // Portfolio: {
    //   items: [
    //     "Portfolio Grid",
    //     "Portfolio Masonry",
    //     "Portfolio Details",
    //     "Case Studies",
    //   ],
    // },
    // Blog: {
    //   items: ["Blog Grid", "Blog List", "Blog Details", "Blog Sidebar"],
    // },
    Services: {
      items: [
        {
          name: "Display Counter",
          subitems: [],
          link: "/display-counter",
        },
        {
          name: "Stainless Steel Bhatti",
          subitems: [],
          link: "/stainless-steel-bhatti",
        },
        {
          name: "Stainless Steel Counter",
          subitems: [],
          link: "/stainless-steel-counter",
        },
        {
          name: "Fast Food Stall",
          subitems: [],
          link: "/fast-food-stall",
        },
        {
          name: "Stainless Steel Table",
          subitems: [],
          link: "/stainless-steel-table",
        },
        {
          name: "Cash Desk Counter",
          subitems: [],
          link: "/cash-desk-counter",
        },
        {
          name: "Commercial Gas Stove",
          subitems: [],
          link: "/commercial-gas-stove",
        },
      ],
    },
  };

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(menu);
    setActiveSubmenu(null);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveSubmenu(null);
    }, 300);
  };

  const handleSubmenuEnter = (submenu) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveSubmenu(submenu);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileActiveMenu(null);
    setMobileActiveSubmenu(null);
  };

  const handleMobileMenuClick = (menu) => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);
    setMobileActiveSubmenu(null);
  };

  const handleMobileSubmenuClick = (submenu) => {
    setMobileActiveSubmenu(mobileActiveSubmenu === submenu ? null : submenu);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-4 px-4 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-red-500" />
              <span>+91&nbsp; 7989 1981 51</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-red-500" />
              <span>jitendradad43@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-red-500" />
              <span>Mon-Sun : 9:00AM - 6PM</span>
            </div>
            <div className="flex space-x-2">
              <Facebook className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
              <FaInstagram className="w-4 h-4 hover:text-red-600 cursor-pointer" />
              <FaLinkedin className="w-4 h-4 hover:text-blue-700 cursor-pointer" />
              <FaTwitter className="w-4 h-4 hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                {/* <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full"></div>
                  </div>
                </div>
                <span className="text-xl md:text-2xl font-bold text-gray-800">
                  Textica
                </span> */}
                <img
                  src="Logo.png"
                  className="h-20 py-1 md:py-0 lg:py-0 xl:py-0 rounded object-contain"
                  alt="Logo"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-red-500 font-medium py-2 transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/about-us"
                className="text-gray-700 hover:text-red-500 font-medium py-2 transition-colors duration-200"
              >
                About Us
              </a>
              {Object.keys(menuItems).map((menu) => (
                <div
                  key={menu}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(menu)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-red-500 py-2 transition-colors duration-200">
                    <span className="font-medium">{menu}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === menu && (
                    <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-lg min-w-48 z-50">
                      {menu === "Services" ? (
                        <div className="py-2">
                          {menuItems[menu].items.map((item, index) => (
                            <div
                              key={index}
                              className="relative"
                              onMouseEnter={() => handleSubmenuEnter(item.name)}
                            >
                              <button
                                onClick={() => navigate(item.link)}
                                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-red-600 transition-colors duration-200 flex items-center justify-between"
                              >
                                <span>{item.name}</span>
                                {/* <ChevronDown className="w-4 h-4 rotate-270" /> */}
                              </button>

                              {/* Submenu */}
                              {/* {activeSubmenu === item.name && (
                                <div className="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg  min-w-48 z-60">
                                  <div className="py-2">
                                    {item.subitems.map((subitem, subIndex) => (
                                      <a
                                        key={subIndex}
                                        href="#"
                                        className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-red-600 transition-colors duration-200"
                                      >
                                        {subitem}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              )} */}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="py-2">
                          {menuItems[menu].items.map((item, index) => (
                            <a
                              key={index}
                              href="#"
                              className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-red-600 transition-colors duration-200"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 font-medium py-2 transition-colors duration-200"
              >
                Blog
              </a>
              <a
                href="/gallery"
                className="text-gray-700 hover:text-red-500 font-medium py-2 transition-colors duration-200"
              >
                Gallery
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-red-500 font-medium py-2 transition-colors duration-200"
              >
                Contact
              </a>
            </nav>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              {/* <button className="p-2 text-gray-700 hover:text-orange-500 transition-colors duration-200">
                <Search className="w-5 h-5" />
              </button>
              <button className="relative p-2 text-gray-700 hover:text-orange-500 transition-colors duration-200">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </button> */}

              <button
                onClick={() => (window.location.href = "tel:7989198151")}
                className="bg-red-500 hover:bg-red-600 text-white cursor-pointer px-6 py-2 rounded-md font-medium transition-colors hidden sm:block"
              >
                Get Consultation
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white ">
            <div className="px-4 py-2 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600 rounded-md font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="/about-us"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-red-600 rounded-md font-medium transition-colors duration-200"
              >
                About Us
              </a>

              {Object.keys(menuItems).map((menu) => (
                <div key={menu}>
                  <button
                    onClick={() => handleMobileMenuClick(menu)}
                    className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  >
                    <span className="font-medium">{menu}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileActiveMenu === menu ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileActiveMenu === menu && (
                    <div className="ml-4 mt-1 space-y-1">
                      {menu === "Services"
                        ? menuItems[menu].items.map((item, index) => (
                            <div key={index}>
                              <button
                                onClick={() => {
                                  handleMobileSubmenuClick(item.name);
                                  setIsMobileMenuOpen(false);
                                  navigate(item.link);
                                }}
                                className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-600 hover:bg-gray-50 rounded-md text-sm transition-colors duration-200"
                              >
                                <span>{item.name}</span>
                                {/* <Plus
                                  className={`w-4 h-4 transition-transform duration-200 ${
                                    mobileActiveSubmenu === item.name
                                      ? "rotate-45"
                                      : ""
                                  }`}
                                /> */}
                              </button>
                              {mobileActiveSubmenu === item.name && (
                                <div className="ml-4 mt-1 space-y-1">
                                  {item.subitems.map((subitem, subIndex) => (
                                    <a
                                      key={subIndex}
                                      href="#"
                                      className="block px-3 py-2 text-gray-500 hover:bg-gray-50 hover:text-orange-600 rounded-md text-sm transition-colors duration-200"
                                    >
                                      {subitem}
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))
                        : menuItems[menu].items.map((item, index) => (
                            <a
                              key={index}
                              href="#"
                              className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-red-600 rounded-md text-sm transition-colors duration-200"
                            >
                              {item}
                            </a>
                          ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600 rounded-md font-medium transition-colors duration-200"
              >
                Blog
              </a>
              <a
                href="/gallery"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600 rounded-md font-medium transition-colors duration-200"
              >
                Gallery
              </a>
              <a
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-orange-600 rounded-md font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
