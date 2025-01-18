import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/pages/Footer.js";
import { FaAngleUp } from "react-icons/fa";
import LandingPage from "./components/LandingPage.js"
import CheckOutPage from "./components/shop/CheckOutPage.js";
import ScrollToTop from "./Scrollmount.js";
import Navbar from "./components/pages/Navbar.js";
import ShopPage from "./components/shop/ShopPage.js";

function App() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <Router>
      <div>
        {/* Fixed Header */}
        <Navbar />

        {/* ScrollToTop Component */}
        <ScrollToTop />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/CheckOutPage" element={<CheckOutPage />} />
        </Routes>

        {/* Footer Component */}
        <Footer />

        {/* Scroll to Top Button */}
        <div className="fixed bottom-5 right-5 z-50">
          <button
            onClick={scrollToTop}
            className="bg-black text-white tex-2xl p-4 rounded shadow-lg hover:bg-yellow-500 transition duration-300"
          >
            <FaAngleUp />
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;
