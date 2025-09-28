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
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
