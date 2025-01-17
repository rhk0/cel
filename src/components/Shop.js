import React from "react";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { RiShoppingBagLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Rose-Clover Pendant",
    price: "₹2,600.00",
    sold: 0,
    available: 1,
    image:
      "https://zoci.in/wp-content/uploads/2024/08/P02047-scaled-980x980.webp", // Replace with actual image path
  },
  {
    id: 2,
    name: "A starry affair",
    price: "₹2,700.00",
    sold: 0,
    available: 1,
    image:
      "https://zoci.in/wp-content/uploads/2024/08/B03070-scaled-980x980.webp", // Replace with actual image path
  },
  {
    id: 3,
    name: "Rose quartz cocktail ring",
    price: "₹3,800.00",
    sold: 0,
    available: 1,
    image:
      "https://zoci.in/wp-content/uploads/2024/08/R02416-scaled-980x980.webp", // Replace with actual image path
  },
  {
    id: 4,
    name: "Rose-Clover Pendant",
    price: "₹2,600.00",
    sold: 0,
    available: 5,
    image:
      "https://zoci.in/wp-content/uploads/2024/08/P02047-scaled-980x980.webp", // Replace with actual image path
  },
  {
    id: 1,
    name: "Rose-Clover Pendant",
    price: "₹2,600.00",
    sold: 0,
    available: 6,
    image:
      "https://zoci.in/wp-content/uploads/2024/08/P02047-scaled-980x980.webp", // Replace with actual image path
  },
  {
    id: 7,
    name: "Rose-Clover Pendant",
    price: "₹2,600.00",
    sold: 0,
    available: 1,
    image:
      "https://zoci.in/wp-content/uploads/2024/08/P02047-scaled-980x980.webp", // Replace with actual image path
  },
  {
    id: 8,
    name: "Rose-Clover Pendant",
    price: "₹2,600.00",
    sold: 0,
    available: 1,
    image:
      "https://zoci.in/wp-content/uploads/2024/08/P02047-scaled-980x980.webp", // Replace with actual image path
  },
  {
    id: 9,
    name: "Rose-Clover Pendant",
    price: "₹2,600.00",
    sold: 0,
    available: 1,
    image:
      "https://zoci.in/wp-content/uploads/2024/08/P02047-scaled-980x980.webp", // Replace with actual image path
  },
];

const ProductCard = ({ product }) => (
  <div className="bg-[#214344] text-white shadow-md rounded-xl overflow-hidden border-4 border-[#223D38] relative group">
    <div className="relative">
      {/* Image with zoom-in effect on hover */}
      <img
        src={product.image}
        alt={product.name}
        className="h-[380px] w-full object-cover group-hover:scale-110 transition-transform duration-300"
      />

      {/* Heart Icon - Always Visible */}
      <button className="absolute top-3 right-3 bg-[#214344] text-[#f0d5a0] p-1 rounded-full">
        <FaRegHeart />
      </button>

      {/* Other Icons - Visible on Hover */}
      <div className="absolute top-12 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
        {/* Eye Icon */}

        {/* Reload Icon */}
        <button className="bg-[#214344] p-2 rounded-full text-[#f0d5a0] shadow-md hover:bg-[#214344]">
          <HiRefresh />
        </button>
        <button className="bg-[#214344] p-2 rounded-full text-[#f0d5a0] shadow-md hover:bg-[#214344]">
          <FaEye />
        </button>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-sm font-semibold mb-2">{product.name}</h3>
      <p className="text-sm mt-1 text-orange-200 mb-3">{product.price}</p>
      <div className="my-2">
        <div className="w-full bg-white h-1.5 mb-1 rounded mt-1">
          <div
            className="bg-green-400 h-1 rounded"
            style={{ width: `${(product.sold / product.available) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-orange-200">
            Sold: <span className="text-white">{product.sold}</span>
          </span>
          <span className="text-orange-200">
            Available: <span className="text-white">{product.available}</span>
          </span>
        </div>
      </div>
      <button className="w-full bg-[#FFFFFF] text-[#223D38] py-1 rounded-full mt-2">
        Keep in Bag
      </button>
    </div>
  </div>
);

const App = () => (
  <div className="bg-[rgb(239 231 223)]  ">
    <div className="flex flex-col items-start mb-10 px-6 mt-10 ml-5" >
      <h1 className="text-sm font-semibold flex items-center">
        Home <span className="inline-block mx-2 text-gray-200">•</span> shop
      </h1>
      <h1 className="text-xl font-semibold flex items-center">
        <span className="inline-block mx-2 ">shop</span>
      </h1>
    </div>
    <div className="bg-[#EFE7DF] min-h-screen p-8">
      <div className="mb-6">
        <span className="text-[#223D38]  text-sm">Fast Filters:</span>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center px-6 justify-center mb-10">
          <button className="bg-[#223D38] text-orange-200 py-1 px-1 rounded-full text-sm hover:bg-orange-200 hover:text-white transition duration-500 text-center">
            NEW ARRIVAL
          </button>
          <button className="bg-[#223D38] text-orange-200 py-1 px-1 rounded-full text-sm hover:bg-orange-200 hover:text-white transition duration-500 text-center">
            BEST SELLERS
          </button>
          <button className="bg-[#223D38] text-orange-200 py-1 px-1 rounded-full text-sm hover:bg-orange-200 hover:text-white transition duration-500 text-center">
            TRENDING
          </button>
          <button className="bg-[#223D38] text-orange-200 py-1 px-1 rounded-full text-sm hover:bg-orange-200 hover:text-white transition duration-500 text-center">
            MEN'S
          </button>
          <button className="bg-[#223D38] text-orange-200 py-1 px-1 rounded-full text-sm hover:bg-orange-200 hover:text-white transition duration-500 text-center">
            GIFTS
          </button>
        </div>

        <div className="flex md:justify-between justify-center items-center mb-10  ">
          <p className="text-sm  md:block hidden">
            Showing 1–20 of 157 results
          </p>
          <div className="flex items-center gap-2">
            <button className="text-sm text-[#223D38]">
              <span className="text-[#223D38] font-semibold text-sm flex items-center">
                {/* Inline SVG filter icon */}
                <svg
                  className="svgFilter goldsmith-svg-icon h-5 w-5 mr-2 text-orange-200"
                  height="32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  data-name="Layer 1"
                >
                  <g fill="rgb(0,0,0)">
                    <path d="m1.917 24.75h17.333v2h-17.333z"></path>
                    <path d="m23.5 22.5h-2v6.5h2v-2.25h6.583v-2h-6.583z"></path>
                    <path d="m12.75 15h17.333v2h-17.333z"></path>
                    <path d="m8.5 19.25h2v-6.5h-2v2.25h-6.583v2h6.583z"></path>
                    <path d="m1.917 5.25h17.333v2h-17.333z"></path>
                    <path d="m23.5 5.25v-2.25h-2v6.5h2v-2.25h6.583v-2z"></path>
                  </g>
                </svg>
              </span>{" "}
            </button>
            <select className="bg-[#EFE7DF]  text-sm ">
              <option>Default sorting</option>
              <option>Sort by latest</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </select>
            <button className=" py-1 px-4 rounded-full text-sm md:block hidden">
              Show
            </button>
          </div>
        </div>
      </div>
      <Link to="/CheckOutPage">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-16 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div></Link>
     
      <div className="bg-[#EFE7DF] flex justify-center  mt-5 mb-5">
      <button className="bg-[#214344] p-1 px-7 rounded rounded-full text-white">Load More</button>
    </div>
    </div>
   
  </div>
);

export default App;
