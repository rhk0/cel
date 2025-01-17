import React from "react";
import hoopearning from "../assets/images/product1.webp";
import stackablechain from "../assets/images/prduct2.webp";
import wingcubanchain from "../assets/images/product3.webp";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";

const ProductCard = ({ product, isCenterCard }) => {
  return (
    <div
      className={`relative hover:border-4 hover:border-[#214344] rounded-2xl group w-[320px] ${
        isCenterCard ? "h-[540px ]" : "h-[460px] mt-3 mb-3"
      } bg-[#214344] rounded-lg shadow-lg overflow-hidden`}
    >
      {/* Image Section */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <button className="absolute top-3 right-3 bg-[#214344] text-[#f0d5a0] p-2 rounded-full shadow-md hover:bg-[#214344]">
        <FaRegHeart />
      </button>

      {/* Content Section */}
      <div className="absolute bottom-0 left-0 w-full  bg-[#214344] text-white p-4 backdrop-blur-md">
        <h3 className="text-lg font-semibold capitalize">{product.name}</h3>

        <p className="mt-2 text-[#f0d5a0]">₹{product.price}</p>

        {/* Stock Progress */}
        <div className="mt-2">
          <div className="w-full bg-white h-2 rounded-full mt-1">
            <div
              className="h-2 rounded-full bg-white"
              style={{
                width: `${
                  (product.sold / (product.sold + product.available)) * 100
                }%`,
              }}
            ></div>
          </div>
          <div className="text-sm mt-2 flex justify-between">
            <span className="text-[#f0d5a0]">
              Sold: <span className="text-white">{product.sold}</span>
            </span>
            <span className="text-[#f0d5a0]">
              Available: <span className="text-white">{product.available}</span>
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-[#214344] p-2 rounded-full text-[#f0d5a0] shadow-md hover:bg-[#214344]">
          <FaRegHeart />
        </button>
        <button className="bg-[#214344] p-2 rounded-full text-[#f0d5a0] shadow-md hover:bg-[#214344]">
          <HiRefresh />
        </button>
        <button className="bg-[#214344] p-2 rounded-full text-[#f0d5a0] shadow-md hover:bg-[#214344]">
          <FaEye />
        </button>

        <button className="bg-[#214344] p-2 rounded-full text-[#f0d5a0] shadow-md hover:bg-[#214344]">
          <RiShoppingBagLine />
        </button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const products = [
    {
      name: "Hoop earrings",
      image: hoopearning,
      rating: 4.5,
      reviews: 1,
      price: 2000,
      sold: 0,
      available: 1,
    },
    {
      name: "Stackable chains",
      image: stackablechain,
      rating: 5,
      reviews: 3,
      price: 5500,
      sold: 0,
      available: 1,
    },
    {
      name: "Wing Cuban chain",
      image: wingcubanchain,
      rating: 4.8,
      reviews: 2,
      price: 9500,
      sold: 0,
      available: 1,
    },
  ];

  return (
    <>
      <div>
        <div className="bg-[#fef6ec] text-center md:p-5">
          <h1 className="md:text-6xl text-3xl text-center font-semibold text-[#214344] mb-2">
            Top Sellers
          </h1>
          <p className="text-lg text-[#214344]">Our Most Loved Products</p>
        </div>
        <div className="flex flex-wrap md:gap-x-96  p-5 bg-[#fef6ec] md:justify-center ">
          <p className="md:mr-64 gap-5">
            <span
              className="text-bold text-black block md:inline"
              style={{
                fontSize: "30px",
                lineHeight: "10px",
                fontFamily: "initial",
              }}
            >
              All Products
            </span>
            <span className="md:ml-3 block md:inline" style={{ fontSize: "15px" }}>
              Don't miss out on this week's deals
            </span>
          </p>

          <p className="text-lg text-[#214344]">View All</p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center py-8 bg-[#fef6ec]">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              // Highlight the center card
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
