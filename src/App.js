import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Shop from "./components/Shop.js";
import { FaAngleUp } from "react-icons/fa";
import Landing from "./components/Landing.js";
import Header from "./components/Header.js";
import CheckOutPage from "./components/CheckOutPage.js";
import ScrollToTop from "./Scrollmount.js"; // Import ScrollToTop component

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
        <Header />

        {/* ScrollToTop Component */}
        <ScrollToTop/>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/CheckOutPage" element={<CheckOutPage />} />
        </Routes>

        {/* Footer Component */}
        <Footer />

        {/* Scroll to Top Button */}
        <div className="fixed bottom-5 right-5 z-50">
          <button
            onClick={scrollToTop}
            className="bg-black text-white tex-2xl p-4 rounded shadow-lg hover:bg-[#1a2d31] transition duration-300"
          >
            <FaAngleUp />
          </button>
        </div>
      </div>
    </Router>
  );
}

export default App;
