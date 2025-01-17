import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
import { RiFacebookCircleFill, RiShoppingBagLine } from "react-icons/ri";
import {
  FaInstagram,
  FaPinterest,
  FaRegHeart,
  FaRegUser,
} from "react-icons/fa";
import { CiHeart, CiSearch, CiYoutube } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineBars4 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-[#214344] text-gold-500 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center w-full">
          {/* Center Logo */}
          <div className="flex md:gap-8">
            <button className="text-[#F0D5A0] w-6 h-6 hover:text-gray-300">
              <CiHeart className="w-6 h-6 text-bold md:block hidden" />
            </button>
            <div className="relative">
              <button className="text-[#F0D5A0] w-6 h-6 hover:text-gray-300">
                <RiShoppingBagLine className="w-6 h-6" />
              </button>
              <span className="absolute -top-1 -left-3 bg-[#F0D5A0] text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                1
              </span>
            </div>
          </div>

          <div className="flex-grow flex justify-center">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="md:max-w-[200px] md:w-[300px] md:h-[80px] h-[40px]"
              />
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4 mr-5">
            <button
              onClick={toggleSearchBar}
              className="text-[#F0D5A0] focus:outline-none hidden md:block" // Hides on mobile, shows on 768px and above
            >
              <CiSearch className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="text-[#F0D5A0] focus:outline-none"
            >
              <HiOutlineBars4 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="fixed inset-x-0 top-0 bg-[#faf1e8] z-40 p-12 transition-all duration-300 transform translate-y-0 justify-center">
          <div className="flex justify-center">
            <button onClick={toggleSearchBar} className="text-black p-1">
              <IoCloseSharp className="w-8 h-8 bg-white rounded rounded-full  m-3" />
            </button>
          </div>
          <div className="flex justify-center items-center gap-2 pb-2 ">
            <input
              type="text"
              placeholder="Search products....."
              className="bg-transparent text-black text-2xl w-full placeholder-gray-300 placeholder:text-4xl placeholder:text-bold text-center focus:outline-none"
            />
          </div>
        </div>
      )}

      {/* Sidebar Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed top-0 left-0 h-full flex  md:w-[450px] w-[380px]">
            {/* Left Icon Bar */}
            <div className="bg-[#214344] w-16 flex flex-col items-center pt-6 space-y-6 relative h-screen md:block hidden">
              {/* Close Button */}
              <button
                onClick={closeMenu}
                className="text-gray-500 hover:text-gray-300 mb-4 ml-5 bg-[#f0d5a0] p-1 rounded-full"
              >
                <IoCloseSharp className="w-6 h-6" />
              </button>

              {/* Main Icons (Vertically Aligned) */}
              <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <button className="text-[#F0D5A0] w-6 h-6 hover:text-gray-300">
                    <RiShoppingBagLine className="w-6 h-6" />
                  </button>
                  <span className="absolute -top-1 -left-3 bg-[#F0D5A0] text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    1
                  </span>
                </div>
                <button className="text-[#f0d5a0] hover:text-gray-300">
                  <FaRegHeart className="w-5 h-5" />
                </button>
                <button className="text-[#f0d5a0] hover:text-gray-300">
                  <LuRefreshCcw className="w-5 h-5" />
                </button>
                <button className="text-[#f0d5a0] hover:text-gray-300">
                  <svg
                    className="svgPaperSearch goldsmith-svg-icon w-5 h-5"
                    fill="currentColor"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m17 22c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"></path>
                    <path d="m23.25 24c-.192 0-.384-.073-.53-.22l-3.25-3.25c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l3.25 3.25c.293.293.293.768 0 1.061-.147.147-.339.22-.531.22z"></path>
                    <path d="m10.53 21h-7.78c-1.517 0-2.75-1.233-2.75-2.75v-15.5c0-1.517 1.233-2.75 2.75-2.75h11.5c1.517 0 2.75 1.233 2.75 2.75v7.04c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-7.04c0-.689-.561-1.25-1.25-1.25h-11.5c-.689 0-1.25.561-1.25 1.25v15.5c0 .689.561 1.25 1.25 1.25h7.78c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
                    <path d="m13.25 9.5h-9.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
                    <path d="m9.25 13.5h-5.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5.5c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
                    <path d="m8.25 5.5h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
                  </svg>
                </button>
                <button className="text-[#f0d5a0] hover:text-gray-300">
                  <FaRegUser className="w-5 h-5" />
                </button>
              </div>

              {/* Social Icons (Fixed at Bottom) */}
              <div className="absolute bottom-16 ml-5 flex flex-col items-center space-y-6">
                <button className="text-[#f0d5a0] hover:text-gray-300">
                  <FaInstagram className="w-5 h-5" />
                </button>
                <button className="text-[#f0d5a0] hover:text-gray-300">
                  <RiFacebookCircleFill className="w-5 h-5" />
                </button>
                <button className="text-[#f0d5a0] hover:text-gray-300">
                  <FaPinterest className="w-5 h-5" />
                </button>
                <button className="text-[#f0d5a0] hover:text-gray-300">
                  <CiYoutube className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Navigation Menu */}
            <div className="bg-[#faf1e8] flex-grow md:p-5 ">
              {/* Search Bar */}

              {/* Navigation Links */}
              <div className="bg-[#214344] w-full flex flex-row items-center justify-between px-6 py-4  top-0 z-50 md:hidden">
                {/* Close Button */}
                <button
                  onClick={closeMenu}
                  className="text-gray-500 hover:text-gray-300 bg-[#f0d5a0] p-2 rounded-full"
                >
                  <IoCloseSharp className="w-6 h-6" />
                </button>
                <div className="flex flex-row items-center space-x-6 md:hidden">
                  <div className="relative">
                    <button className="text-[#F0D5A0] w-6 h-6 hover:text-gray-300">
                      <RiShoppingBagLine className="w-6 h-6" />
                    </button>
                    <span className="absolute -top-1 -left-3 bg-[#F0D5A0] text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                      1
                    </span>
                  </div>
                  <button className="text-[#f0d5a0] hover:text-gray-300">
                    <FaRegHeart className="w-5 h-5" />
                  </button>
                  <button className="text-[#f0d5a0] hover:text-gray-300">
                    <LuRefreshCcw className="w-5 h-5" />
                  </button>
                  <button className="text-[#f0d5a0] hover:text-gray-300">
                    <svg
                      className="svgPaperSearch goldsmith-svg-icon w-5 h-5"
                      fill="currentColor"
                      enableBackground="new 0 0 24 24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m17 22c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z"></path>
                      <path d="m23.25 24c-.192 0-.384-.073-.53-.22l-3.25-3.25c-.293-.293-.293-.768 0-1.061s.768-.293 1.061 0l3.25 3.25c.293.293.293.768 0 1.061-.147.147-.339.22-.531.22z"></path>
                      <path d="m10.53 21h-7.78c-1.517 0-2.75-1.233-2.75-2.75v-15.5c0-1.517 1.233-2.75 2.75-2.75h11.5c1.517 0 2.75 1.233 2.75 2.75v7.04c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-7.04c0-.689-.561-1.25-1.25-1.25h-11.5c-.689 0-1.25.561-1.25 1.25v15.5c0 .689.561 1.25 1.25 1.25h7.78c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
                      <path d="m13.25 9.5h-9.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
                      <path d="m9.25 13.5h-5.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h5.5c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
                      <path d="m8.25 5.5h-4.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h4.5c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
                    </svg>
                  </button>
                  <button className="text-[#f0d5a0] hover:text-gray-300">
                    <FaRegUser className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="mb-6 flex items-center gap-2 border-b border-gray-400 pb-2 mt-8 ">
                <FaSearch className="text-gray-600 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="bg-transparent text-black text-sm w-full placeholder-gray-600 outline-none"
                />
              </div>
              <ul className="space-y-4 p-5">
                {/* Navigation Items */}
                <li>
                  <a href="/home" className="block hover:text-gray-700">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="block hover:text-gray-700">
                    About Us
                  </a>
                </li>
                <Link to="shop">
                  <li className="flex justify-between items-center">
                    <a href="/shop" className="block hover:text-gray-700">
                      Shop
                    </a>
                    <MdKeyboardArrowRight className="text-black" />
                  </li>
                </Link>
                <li>
                  <a href="/contact" className="block hover:text-gray-700">
                    Contact
                  </a>
                </li>

                <div className="text-gray-500 absolute bottom-16">
                  Earrings Copyright © 2024,{" "}
                  <span className="text-black text-bold">Zoci</span> Website.
                  <br />
                  Made with passion by{" "}
                  <span className="text-black text-bold">TapForTech</span>.
                </div>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
