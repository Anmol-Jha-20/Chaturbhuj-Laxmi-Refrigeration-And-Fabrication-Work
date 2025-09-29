import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import Gallery from "./Pages/Gallery.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import DisplayCounterProductPage from "./Pages/ProductPages/DisplayCounter.jsx";
import SteelBhattiProductPage from "./Pages/ProductPages/StainlessSteelBhatti/StainlessSteelBhatti.jsx";
import StainlessSteelCounter from "./Pages/ProductPages/StainlessSteelCounter/StainlessSteelCounter.jsx";
import FastFoodStallPage from "./Pages/ProductPages/FastFoodStall/FastFoodStall.jsx";
import StainleesSteelTablePage from "./Pages/ProductPages/StainlessSteelTable/StainlessSteelTable.jsx";
import CashDeskCounterPage from "./Pages/ProductPages/CashDeskCounter/CashDeskCounter.jsx";
import CommercialGasStovePage from "./Pages/ProductPages/CommercialGasStove/CommercialGasStovePage.jsx";
import JuiceCounterPage from "./Pages/ProductPages/JuiceCounter/JuiceCounter.jsx";
import TandooriCounter from "./Pages/ProductPages/TandooriCounter/TandooriCounter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/display-counter",
        element: <DisplayCounterProductPage />,
      },
      {
        path: "/stainless-steel-bhatti",
        element: <SteelBhattiProductPage />,
      },
      {
        path: "/stainless-steel-counter",
        element: <StainlessSteelCounter />,
      },
      {
        path: "/fast-food-stall",
        element: <FastFoodStallPage />,
      },
      {
        path: "/stainless-steel-table",
        element: <StainleesSteelTablePage />,
      },
      {
        path: "/cash-desk-counter",
        element: <CashDeskCounterPage />,
      },
      {
        path: "/commercial-gas-stove",
        element: <CommercialGasStovePage />,
      },
      {
        path: "/juice-counter",
        element: <JuiceCounterPage />,
      },
      {
        path: "/tandoori-counter",
        element: <TandooriCounter />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
