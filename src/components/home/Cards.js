import React from "react";
import earrings from "../../assets/images/ring11.webp";
import chain from "../../assets/images/prduct2.webp";
import wing from "../../assets/images/product3.webp";
import { RiShoppingBagLine } from "react-icons/ri";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";

const Cards = ({ product, isCenterCard }) => {
  return (
    <div
      className={`relative hover:border-4 hover:border-[#214344] rounded-2xl group w-[320px] ${isCenterCard ? "h-[540px ]" : "h-[460px] mt-3 mb-3"
        } bg-[#214344] rounded-lg shadow-lg overflow-hidden`}
    >
      {/* Image Section */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover "
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
                width: `${(product.sold / (product.sold + product.available)) * 100
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

const Product = () => {
  const products = [
    {
      name: "Hoop earrings",
      image: chain,
      rating: 4.5,
      reviews: 1,
      price: "2,500.00",
      sold: 0,
      available: 1,
    },
    {
      name: "Stackable chains",
      image: earrings,
      rating: 5,
      reviews: 3,
      price: "3,900.00",
      sold: 0,
      available: 1,
    },
    {
      name: "Wing Cuban chain",
      image: wing,
      rating: 4.8,
      reviews: 2,
      price: "6,200.00",
      sold: 0,
      available: 1,
    },
  ];

  return (
    <>
      <div>
        <div className="bg-[#fef6ec] text-center md:p-4">
          <h1 className="md:text-6xl text-3xl text-center font-semibold text-[#214344] mb-4">
            Top Sellers
          </h1>
          <p className="text-lg text-[#214344]">Our Most Loved Products</p>
        </div>
        <div className="flex flex-wrap md:gap-x-96 p-5 bg-[#fef6ec] md:justify-center">
          <div className="flex flex-col md:flex-row md:items-center md:mr-48 gap-2">
            <span
              className="font-bold text-black block "
              style={{
                fontSize: "20px", 
                lineHeight: "5px",
                // fontFamily: "initial",
              }}
            >
              All Products
            </span>
            <span className="text-sm md:ml-3 block md:inline " style={{ fontSize: "15px" }}>
              Don't miss out on this week's deals
            </span>
          </div>
          <p className="text-lg text-[#214344] sm:ml-16 ">
            View All
          </p>
        </div>

        <div className="flex flex-wrap gap-8 justify-center py-4 bg-[#fef6ec]">
          {products.map((product, index) => (
            <Cards
              key={index}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
