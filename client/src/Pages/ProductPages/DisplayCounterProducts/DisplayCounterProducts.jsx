import React, { useState, useEffect } from "react";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Zap,
  Award,
  Shield,
  Truck,
  ChevronLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import HeroImage3 from "../../../assets/HeroImages/HeroImage3.jpeg";
import GalleryImage15 from "../../../assets/Gallery/Gallery15.jpeg";
import GalleryImage6 from "../../../assets/Gallery/Gallery6.jpeg";
import GalleryImage5 from "../../../assets/Gallery/Gallery5.jpeg";
import SliderImage1 from "../../../assets/SliderImages/SliderImage1.jpeg";
import SliderImage5 from "../../../assets/SliderImages/SliderImage5.jpeg";
import ChatCounterImage from "../../../assets/TandooriCounters/ChatCounterImage.jpeg";

const DisplayCounterProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const products = [
    {
      id: 1,
      name: "Hot Samosa Counter",
      images: [SliderImage1, SliderImage1, SliderImage1, SliderImage1],
      description:
        "Serve up crispy, golden samosas straight from the fryer at our Hot Samosa Counter – a crowd favorite at any event! Freshly prepared and served piping hot, these savory snacks are stuffed with a delicious spiced filling and paired with tangy chutneys for the perfect bite. Whether for weddings, corporate functions, fairs, or street food festivals, our samosa counter adds a touch of traditional flavor with modern convenience.",
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
      name: "Long Curved Sweet Display Counter",
      images: [SliderImage5, SliderImage5, SliderImage5, SliderImage5],
      description:
        "Showcase your sweets in style with this elegant long curved display counter, designed for maximum visibility and freshness. Made with durable stainless steel and 12mm toughened glass, it features 3 spacious shelves and a sleek 4-foot-high curved design, perfect for sweet shops and bakeries.",
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
      name: "Bakery Display Counter",
      images: [
        "https://5.imimg.com/data5/NSDMERP/Default/2024/5/419521656/TQ/ER/JT/73020702/73020702-product-1715865909886-500x500.jpg",
        "https://5.imimg.com/data5/NSDMERP/Default/2024/5/419521656/TQ/ER/JT/73020702/73020702-product-1715865909886-500x500.jpg",
        "https://5.imimg.com/data5/NSDMERP/Default/2024/5/419521656/TQ/ER/JT/73020702/73020702-product-1715865909886-500x500.jpg",
        "https://5.imimg.com/data5/NSDMERP/Default/2024/5/419521656/TQ/ER/JT/73020702/73020702-product-1715865909886-500x500.jpg",
      ],
      description:
        "Perfect for showcasing cakes, pastries, and baked goods, this Bakery Display Counter combines functionality with a sleek design. Built for durability and visibility, it features 3 spacious shelves, a 4.5-foot height, and is ideal for bakeries, cafes, and sweet shops.",
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
      name: "Center Round Glass Sweet Display Counter",
      images: [
        "https://5.imimg.com/data5/ANDROID/Default/2022/1/BL/LY/TX/73020702/product-500x500.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2022/1/BL/LY/TX/73020702/product-500x500.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2022/1/BL/LY/TX/73020702/product-500x500.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2022/1/BL/LY/TX/73020702/product-500x500.jpg",
      ],
      description:
        "Designed to impress and built to last, this Center Round Glass Sweet Display Counter offers a 360° view of your sweets and snacks, making it ideal for central placement in shops and showrooms. Featuring 4 shelves, LED lighting, and a durable stainless steel body with 6 mm glass, it ensures both visibility and hygiene.",
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
      id: 5,
      name: "Stainless Steel Tea Display Counter",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420623347/WB/VP/NK/73020702/stainless-steel-tea-counter-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420623347/WB/VP/NK/73020702/stainless-steel-tea-counter-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420623347/WB/VP/NK/73020702/stainless-steel-tea-counter-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420623347/WB/VP/NK/73020702/stainless-steel-tea-counter-500x500.jpeg",
      ],
      description:
        "Built for efficiency and durability, this Stainless Steel Tea Display Counter is ideal for tea stalls, cafes, and food outlets. It features a square design, 2 shelves for storage, and comes equipped with a built-in burner for convenient tea preparation and service. The 4-foot height provides comfortable access for both staff and customers.",
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
      id: 6,
      name: "Fast Food Serving Counter",
      images: [HeroImage3, HeroImage3, HeroImage3, HeroImage3],
      description:
        "Ideal for street food stalls and quick-service setups, this Fast Food Serving Counter is built with durable stainless steel and designed for mobility and efficiency. It features 2 spacious shelves, a load capacity of 150 kg, and 4 sturdy wheels for easy movement. Perfect for serving a variety of snacks and fast food items on the go.",
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
      id: 7,
      name: "Chat Display Counter",
      images: [GalleryImage15, GalleryImage15, GalleryImage15, GalleryImage15],
      description:
        "Designed specifically for street food vendors, this Chat Display Counter is perfect for showcasing and serving a variety of Indian chaat items. With a sturdy metal build, LED lighting, and a user-friendly 4-foot height, it combines functionality with visual appeal to attract customers and enhance the serving experience.",
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
      id: 8,
      name: "5mm Curved Glass Display Counter",
      images: [
        "https://5.imimg.com/data5/NSDMERP/Default/2024/2/382518385/TE/BZ/CS/73020702/73020702-product-1706792996315-500x500.jpg",
        "https://5.imimg.com/data5/NSDMERP/Default/2024/2/382518385/TE/BZ/CS/73020702/73020702-product-1706792996315-500x500.jpg",
        "https://5.imimg.com/data5/NSDMERP/Default/2024/2/382518385/TE/BZ/CS/73020702/73020702-product-1706792996315-500x500.jpg",
        "https://5.imimg.com/data5/NSDMERP/Default/2024/2/382518385/TE/BZ/CS/73020702/73020702-product-1706792996315-500x500.jpg",
      ],
      description:
        "Curved glass display counters are a boon to the food business and offer multiple functions. Moreover, using a bend glass display counter keeps food fresh and organized avoiding wastage. In addition, it displays food items that attract customers and promote impulse buying.",
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
      id: 9,
      name: "5mm Curved Bakery Sweet Display Counter",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420701358/NM/PO/HP/73020702/5mm-curved-bakery-sweet-display-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420701358/NM/PO/HP/73020702/5mm-curved-bakery-sweet-display-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420701358/NM/PO/HP/73020702/5mm-curved-bakery-sweet-display-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420701358/NM/PO/HP/73020702/5mm-curved-bakery-sweet-display-counter-500x500.jpg",
      ],
      description:
        "Showcase your bakery and sweet items with elegance and efficiency using this 5mm Curved Bakery Sweet Display Counter. Crafted from high-quality stainless steel with a glass top workbench, this counter features 3 spacious shelves, built-in LED lighting, and refrigeration to keep your items fresh and visually appealing.",
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
      id: 10,
      name: "Stainless Steel Food Display Counter",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420685538/IU/AY/YB/73020702/stainless-steel-food-display-counter-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420685538/IU/AY/YB/73020702/stainless-steel-food-display-counter-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420685538/IU/AY/YB/73020702/stainless-steel-food-display-counter-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420685538/IU/AY/YB/73020702/stainless-steel-food-display-counter-500x500.png",
      ],
      description:
        "These are used for keeping the cooked dishes in food warmers and also to store stuffs under the provided shelves. Pick up counters are usually kept close to the cooking ranges. We also custom design these counters as per the requirements of our esteemed clients.",
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
      id: 11,
      name: "Vertical Cake Display Cool Counter",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420683615/VL/XL/OY/73020702/vertical-cake-display-cool-counter-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420683615/VL/XL/OY/73020702/vertical-cake-display-cool-counter-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420683615/VL/XL/OY/73020702/vertical-cake-display-cool-counter-500x500.png",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420683615/VL/XL/OY/73020702/vertical-cake-display-cool-counter-500x500.png",
      ],
      description:
        "This counter helps to display all the cookies, cakes, etc. clearly so that it will be visible to the viewers who tend to consume the item.",
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
      id: 12,
      name: "Corner Round Cake Display Counter",
      images: [
        "https://5.imimg.com/data5/NSDMERP/Default/2024/5/419521868/NU/JU/XH/73020702/73020702-product-1715865949808-500x500.jpeg",
        "https://5.imimg.com/data5/NSDMERP/Default/2024/5/419521868/NU/JU/XH/73020702/73020702-product-1715865949808-500x500.jpeg",
        "https://5.imimg.com/data5/NSDMERP/Default/2024/5/419521868/NU/JU/XH/73020702/73020702-product-1715865949808-500x500.jpeg",
        "https://5.imimg.com/data5/NSDMERP/Default/2024/5/419521868/NU/JU/XH/73020702/73020702-product-1715865949808-500x500.jpeg",
      ],
      description:
        "The primary purpose & benefit of display counters is to attract customers' attention and motivate them to purchase more or come into your restaurant. The lights, trays, and color of the display counters play a vital role in attracting customers and making them more appealing.",
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
      id: 13,
      name: "Sweet Shop Display Counter",
      images: [GalleryImage6, GalleryImage6, GalleryImage6, GalleryImage6],
      description:
        "This elegant Sweet Shop Display Counter is designed to enhance the presentation of traditional Indian sweets and desserts. Featuring a rectangular shape with 4 spacious glass shelves, it offers maximum visibility and easy access for customers. Ideal for sweet shops and dessert outlets looking to combine functionality with a sleek, modern look.",
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
      id: 14,
      name: "Vertical Cake Display Counter",
      images: [
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342657/VE/HQ/SJ/73020702/prod-20241014-1842373376932332127696897-jpg-500x500.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342657/VE/HQ/SJ/73020702/prod-20241014-1842373376932332127696897-jpg-500x500.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342657/VE/HQ/SJ/73020702/prod-20241014-1842373376932332127696897-jpg-500x500.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342657/VE/HQ/SJ/73020702/prod-20241014-1842373376932332127696897-jpg-500x500.jpg",
      ],
      description:
        "Showcase your cakes and desserts in style with this Vertical Cake Display Counter, designed to maximize visibility while keeping your items fresh. With a tall 6-foot structure, 5 spacious shelves, and air-cooled functionality, it ensures optimal temperature control for delicate bakery items. Made with 12 mm thick glass and a sleek glass top workbench, it's perfect for bakeries, cafés, and dessert shops looking to combine aesthetics with performance.",
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
      id: 15,
      name: "L Shape Bend Glass Display Counter",
      images: [
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342663/XC/FN/SJ/73020702/prod-20241014-1842371966591836662847868-jpg-500x500.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342663/XC/FN/SJ/73020702/prod-20241014-1842371966591836662847868-jpg-500x500.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342663/XC/FN/SJ/73020702/prod-20241014-1842371966591836662847868-jpg-500x500.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342663/XC/FN/SJ/73020702/prod-20241014-1842371966591836662847868-jpg-500x500.jpg",
      ],
      description:
        "Enhance your shop’s display with this sleek L Shape Bend Glass Display Counter, designed for maximum visibility and efficient space utilization. With 4 spacious shelves, a sturdy stainless steel top workbench, and 12 mm thick curved glass, this counter offers both durability and a premium look. Ideal for sweet shops, bakeries, and food outlets.",
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
      id: 16,
      name: "Pani Puri Display Counter",
      images: [GalleryImage5, GalleryImage5, GalleryImage5, GalleryImage5],
      description:
        "Ideal for street food vendors, this Pani Puri Display Counter combines classic design with durable construction. Made from high-quality stainless steel, it features 1 convenient shelf and stands at 3 feet tall, providing the perfect setup for serving fresh and delicious pani puri. Lightweight yet sturdy at 90 kg, it ensures easy handling and long-lasting use.",
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
      id: 17,
      name: "Chaat Counter",
      images: [
        ChatCounterImage,
        ChatCounterImage,
        ChatCounterImage,
        ChatCounterImage,
      ],
      description:
        "Our Chaat Counter is specially designed for street food vendors and stalls, offering a clean, durable, and efficient setup for serving popular chaat items. Made from high-quality stainless steel, it features 2 spacious shelves for organized storage and easy access during peak hours.",
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
      id: 18,
      name: "Sweet Display Counter",
      images: [
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342761/NS/IL/PZ/73020702/prod-20241014-1842377147929739193613931-jpg-500x500.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342761/NS/IL/PZ/73020702/prod-20241014-1842377147929739193613931-jpg-500x500.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342761/NS/IL/PZ/73020702/prod-20241014-1842377147929739193613931-jpg-500x500.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342761/NS/IL/PZ/73020702/prod-20241014-1842377147929739193613931-jpg-500x500.jpg",
      ],
      description:
        "Our Sweet Display Counter is elegantly designed to showcase a variety of sweets and desserts in bakeries, sweet shops, and cafes. Crafted with premium glass and a stylish bend-type front, it enhances visibility while maintaining hygiene and presentation standards.",
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
      id: 19,
      name: "Tikki Chaat Display Counter",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420706107/FW/QH/BU/73020702/tikki-chat-display-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420706107/FW/QH/BU/73020702/tikki-chat-display-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420706107/FW/QH/BU/73020702/tikki-chat-display-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420706107/FW/QH/BU/73020702/tikki-chat-display-counter-500x500.jpg",
      ],
      description:
        "Our Tikki Chaat Display Counter is designed for efficient preparation and eye-catching display of popular street foods like aloo tikki, chaat, and snacks. Made from high-grade stainless steel, it offers durability, hygiene, and a functional layout for busy food stalls and vendors.",
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
      id: 20,
      name: "5 Feet Fast Food Display Counter",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420705380/WG/SY/QC/73020702/5-feet-fast-food-display-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420705380/WG/SY/QC/73020702/5-feet-fast-food-display-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420705380/WG/SY/QC/73020702/5-feet-fast-food-display-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420705380/WG/SY/QC/73020702/5-feet-fast-food-display-counter-500x500.jpg",
      ],
      description:
        "Our 5 Feet Fast Food Display Counter is built for functionality, durability, and attractive food presentation. Made with stainless steel and 12 mm thick glass, this counter is ideal for street food stalls, offering ample space with 3 shelves to display a variety of snacks and fast food items in an organized and hygienic manner.",
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
      id: 21,
      name: "3.5 Feet Stainless Steel Display Counter",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420704780/YK/QV/VO/73020702/3-5-feet-stainless-steel-display-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420704780/YK/QV/VO/73020702/3-5-feet-stainless-steel-display-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420704780/YK/QV/VO/73020702/3-5-feet-stainless-steel-display-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420704780/YK/QV/VO/73020702/3-5-feet-stainless-steel-display-counter-500x500.jpg",
      ],
      description:
        "Our 3.5 Feet Stainless Steel Display Counter is a compact and efficient solution for showcasing snacks, sweets, or bakery items in shops and retail outlets. Designed with a rectangular shape, it features 3 spacious shelves, a durable glass top workbench, and 5 mm thick glass panels for clear visibility and hygiene.",
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
      id: 22,
      name: "Korean Curved Glass Sweet Display Counter",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420702926/MK/BV/HX/73020702/korean-curved-glass-sweet-display-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420702926/MK/BV/HX/73020702/korean-curved-glass-sweet-display-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420702926/MK/BV/HX/73020702/korean-curved-glass-sweet-display-counter-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420702926/MK/BV/HX/73020702/korean-curved-glass-sweet-display-counter-500x500.jpg",
      ],
      description:
        "The Korean Curved Glass Sweet Display Counter is a sleek, modern solution designed specifically for sweet shops and bakeries aiming to showcase their delicacies in a hygienic and visually appealing manner. With its elegant curved glass front and durable stainless steel body, this display counter adds a premium touch to any retail environment.",
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
      id: 23,
      name: "Mixture Display Counter",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420447233/LH/LF/XM/73020702/117-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420447233/LH/LF/XM/73020702/117-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420447233/LH/LF/XM/73020702/117-500x500.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420447233/LH/LF/XM/73020702/117-500x500.jpg",
      ],
      description:
        "The Mixture Display Counter is a practical and durable solution designed for shops and snack outlets to display various dry snacks such as mixtures, namkeens, farsan, and other savory items. Built with a straightforward design and sturdy materials, it combines functionality with ease of use.",
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
      id: 24,
      name: "Sweet Display Counter",
      images: [
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342735/AX/GY/KR/73020702/prod-20241014-184237466088951096388888-jpg-500x500.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342735/AX/GY/KR/73020702/prod-20241014-184237466088951096388888-jpg-500x500.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342735/AX/GY/KR/73020702/prod-20241014-184237466088951096388888-jpg-500x500.jpg",
        "https://5.imimg.com/data5/ANDROID/Default/2024/10/458342735/AX/GY/KR/73020702/prod-20241014-184237466088951096388888-jpg-500x500.jpg",
      ],
      description:
        "The Sweet Display Counter is a reliable and functional unit designed to effectively showcase a variety of sweets in retail environments. With a rectangular shape and durable metal construction, this counter is ideal for sweet shops, mithai stores, and confectioneries looking for a simple yet efficient display solution.",
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
      id: 25,
      name: "Samosa Kachori Glass Display Counter",
      images: [
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420705933/DL/CK/BN/73020702/111-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420705933/DL/CK/BN/73020702/111-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420705933/DL/CK/BN/73020702/111-500x500.jpeg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420705933/DL/CK/BN/73020702/111-500x500.jpeg",
      ],
      description:
        "The Samosa Kachori Glass Display Counter is specifically designed to showcase popular Indian snacks like samosas, kachoris, patties, and other hot items in a hygienic and visually appealing manner. With a curved front design, this counter enhances product visibility while maintaining freshness and cleanliness.",
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
                      onClick={() =>
                        (window.location.href = "tel:+917989198151")
                      }
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

export default DisplayCounterProducts;
