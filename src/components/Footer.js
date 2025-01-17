import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa";
import logo from "../assets/images/logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#214344] text-white py-10 w-full">
      <div className="container grid grid-cols-1 sm:grid-cols-2 md:text-center px-4 md:px-36 md:grid-cols-4 md:w-full">
        {/* Let Us Help You Section */}

        <div className="md:w-[300px] h-full md:py-36 py-24 mx-2">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-[300px] h-[90px] md:max-w-[100px] md:w-[150px] md:h-[50px]"
            />
          </Link>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-left text-[#f0d5a0]">
            Let Us Help You
          </h3>
          <ul className="space-y-2 text-left text-sm font-semibold leading-normal">
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="/shop">
              <li>Shop</li>
            </Link>

            <li>Cart</li>
            <li>Orders</li>
            <li>About Us</li>
            <li>Wishlist</li>
            <li>Order Tracking</li>
            <li>Blog</li>
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* The Collection Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-left text-[#f0d5a0]">
            The Collection
          </h3>
          <ul className="space-y-2 text-left text-sm font-semibold leading-normal">
            <li>Signature Collection</li>
            <li>Personalized Pieces</li>
            <li>Regular Upkeep</li>
            <li>Necklaces</li>
            <li>Earrings</li>
            <li>Pendants</li>
            <li>Bracelets</li>
            <li>Rings</li>
          </ul>
        </div>

        <div className="text-left sm:text-center">
          {/* Contact Details Section */}
          <div className="sm:w-48 flex flex-col justify-between leading-loose">
            <h3 className="text-lg font-semibold mb-4 text-left text-[#f0d5a0]">
              Contact Details
            </h3>
            <p className="text-left text-sm font-semibold py-3">
              +91 9616773377
            </p>
            <p className="text-left text-sm font-semibold py-3">
              hello@zoci.in
            </p>
            <p className="text-left text-sm font-semibold py-3">
              Monday – Friday: 9:00 AM - 8:00 PM
            </p>
            <p className="text-left text-sm font-semibold py-3">
              Santacruz East, Mumbai, Maharashtra 400055
            </p>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-left text-[#f0d5a0]">
              Help
            </h3>
            <ul className="space-y-2 text-left text-sm font-semibold leading-normal">
              <li>Jewelry Care Guide</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Terms & Conditions</li>
              <li>Refund & Exchange Policy</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 pt-6 text-center text-[#f0d5a0]">
        <div className="flex justify-center space-x-4 mb-4 py-4   border-t border-b border-orange-100 border-[0.5px] ">
          <span className="font-bold relative bottom-1 uppercase">
            Follow Us
          </span>
          <a href="#" className="hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-white">
            <FaWhatsapp />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-white">
            <FaPinterestP />
          </a>
        </div>

        <div className="md:flex md:justify-around uppercase text-left px-2 w-full">
          <p className="text-sm text-white md:mx-4 ">
            Copyright © 2024 ZOCI All Rights Reserved.
          </p>
          <p className="text-sm text-white md:mx-4 ">
            Design & Developed by Tap for Tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
