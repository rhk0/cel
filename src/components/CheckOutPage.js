import React, { useState } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaWhatsapp,
  FaRegHeart,
  FaEye,
} from "react-icons/fa"; // Font Awesome Icons
import { LuRefreshCcw } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowDownSLine, RiShoppingBagLine } from "react-icons/ri";
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

      {/*Heart Icon - Always Visible */}
      <button className="absolute top-3 right-3 text-[#f0d5a0] p-1 rounded-full">
        <FaRegHeart className="w-5 h-5 ml-3" />
      </button>

      {/* Other Icons - Visible on Hover */}
      <div className="absolute top-12 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
        {/* Eye Icon */}

        {/* Reload Icon */}
        <button className="text-[#f0d5a0] hover:text-gray-300">
          <LuRefreshCcw className="w-5 h-5" />
        </button>
        <button className="text-[#f0d5a0] hover:text-gray-300">
          <FaEye className="w-5 h-5" />
        </button>
      </div>
    </div>
    <div className="relative bg-[#214344] p-4 rounded-b-xl overflow-visible transition-all duration-300 group-hover:-translate-y-2">
      {/* Keep in Bag Button - Half Inside & Half Outside */}
      <button className="w-full bg-[#FFFFFF] text-[#223D38] py-1 rounded-full absolute bottom-[-33px] left-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        Keep in Bag
      </button>
      {/* Content */}
      <div className="transition-all duration-300">
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
      </div>
    </div>
        
  </div>
);

const CheckOutPage = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://zoci.in/wp-content/uploads/2024/08/P02546-1-scaled-980x980.webp"
  ); // Default selected image
  const [selected, setSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Array of thumbnail images
  const thumbnails = [
    "https://zoci.in/wp-content/uploads/2024/08/P02546-1-scaled-980x980.webp",

    "https://zoci.in/wp-content/uploads/2024/10/mPR3rPVB_out0008-980x980.jpg",
    "https://zoci.in/wp-content/uploads/2024/08/1724670473526-cdd60a9dd099b4880a5a-01918e5eb0db76648dcd2ef71a02f86foriginalmedium-980x980.png",
  ];

  const options = [
    {
      value: "Story",
      label: `Discover the embodiment of affection with this En vogue Heart\nPendant. Crafted in luminous gold, it gently cradles a radiant\nopal heart, symbolizing love that’s as pure and enduring as\nits design. Perfect for adding a touch of romance to any\nensemble.`,
    },
  ];
  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false); // Close the dropdown when an option is selected
  };
  return (
    <div className="bg-[#f5ebe4] min-h-screen py-5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Side: Image Gallery */}
          <div className="flex flex-col items-center space-y-4 w-24 md:block hidden">
            {/* Thumbnails */}
            {thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 rounded-lg object-cover cursor-pointer hover:opacity-75"
                onClick={() => setSelectedImage(thumbnail)} // Change image on click
              />
            ))}
          </div>

          {/* Right Side: Main Image */}
          <div className="flex-1">
            <div className="relative">
              {/* Main Image */}
              <div className="w-full h-full">
                <img
                  src={selectedImage}
                  alt="Main Product"
                  className="w-[480px] h-[450px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row   ml-2 w-24 md:hidden ">
            {/* Thumbnails */}
            {thumbnails.map((thumbnail, index) => (
              <img
                key={index}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 rounded-lg ml-2 object-cover cursor-pointer hover:opacity-75"
                onClick={() => setSelectedImage(thumbnail)} // Change image on click
              />
            ))}
          </div>

          {/* Right Side: Product Details */}
          <div className="flex-1 p-5">
            {/* Breadcrumb */}
            <p className="text-xs mb-2">
              HOME <span className="mx-2"> </span> PENDENTS{" "}
              <span className="mx-2"> </span> Evil Eye Necklace
            </p>

            {/* Title and Price */}
            <h1 className="text-3xl font-semibold mb-2">Evil Eye Necklace</h1>
            <div className="flex gap-2 mb-4 justify-between">
              <p className="text-xl font-semibold text-gray-800 mb-2">
                ₹4,000.00
              </p>
              <span
                className="bg-white px-3 py-2 rounded-full text-center block "
                style={{ fontSize: "0.625rem" }}
              >
                1 IN STOCK
              </span>
            </div>

            <div className="flex gap-2 mb-2 justify-between">
              <p className="text-sm text-gray-500 mb-4">Ordered: 0</p>

              <span className="text-gray-600 text-sm">Items available: 1</span>
            </div>
            <div className=" px-1 py-1 bg-white rounded-full"></div>
            {/* Button Section */}
            <div className="mt-6 flex flex-col space-y-4">
              <div className="flex space-x-4 ">
                <button className="bg-white text-black py-1 px-20 border border-black rounded-full">
                  Buy Now
                </button>
                <button className=" md:block hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="text-black"
                  >
                    <path
                      fill="#F5EBE4" // Orange inside the heart
                      stroke="black" // Black outline of the heart
                      strokeWidth="2"
                      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    />
                  </svg>
                </button>

                <button className=" md:block hidden">
                  <svg
                    className=" text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4"
                    />
                  </svg>
                </button>
              </div>

              <button className="border border-black bg-white py-1 px-10 rounded-full">
                Keep in Bag
              </button>
            </div>

            {/* Stock Info */}
            <p className="mt-6 text-black text-sm bg-[#FFFCF2]  px-2 py-2 rounded-full">
              <button className="text-[#F0D5A0] w-6 h-6 hover:text-gray-300">
                <RiShoppingBagLine className="w-6 h-6" />
              </button>{" "}
              6 people have this in their carts right now. It's running out!
            </p>

            {/* Additional Information */}
            <div className="mt-8">
              <select
                name="metalColor"
                id="metalColor"
                className="mt-2 p-2 border rounded-full w-full sm:w-80 md:w-96 lg:w-full transition-all duration-300 ease-in-out"
                style={{ transitionDuration: "0.5s" }}
              >
                <option value="">Additional Information</option>
                <option value="baseMetalType">
                  Base Metal Type - Silver 925
                </option>
                <option value="metalColor">Metal Color - Yellow</option>
              </select>

              <div className="relative inline-block w-full sm:w-80 md:w-96 lg:w-full">
                {/* Custom Dropdown Button */}
                <button
                  className="p-2 border rounded-full w-full text-left bg-white flex items-center justify-between"
                  onClick={() => setIsOpen(!isOpen)} // Toggle dropdown visibility on click
                >
                  <span>{selected || "Story"}</span>
                  <RiArrowDownSLine size={20} /> {/* Dropdown Arrow Icon */}
                </button>

                {/* Dropdown Content */}
                {isOpen && (
                  <div className="absolute left-0 bottom-full mb-2 md:top-full md:mt-2 w-full border border-gray-300 rounded rounded-3xl shadow-lg bg-white md:bg-white relative">
                  {/* Mobile View Arrow */}
                  
              
                  {options.map((option) => (
                      <div
                          key={option.value}
                          onClick={() => handleSelect(option.value)}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded rounded-3xl"
                          style={{ whiteSpace: "pre-wrap" }}
                      >
                          {option.label}
                      </div>
                  ))}
              </div>
              
                )}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-6 flex space-x-2">
              <p>share :</p>
              <button className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={24} />
              </button>
              <button className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={24} />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FaPinterest size={24} />
              </button>
              <button className="text-green-500 hover:text-green-700">
                <FaWhatsapp size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="font-bold">
          <h2 className="text-bold text-2xl md:ml-10">Viewers Also Liked</h2>
        </div>
      </div>

      <div className="px-10 mt-8">
    <div className="flex sm:grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 overflow-x-auto sm:overflow-visible">
        {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-full sm:w-auto">
                <ProductCard product={product} />
            </div>
        ))}
    </div>
</div>

      <div className="bg-[rgb(245 235 228)] p-6 md:p-12 rounded-lg max-w-4xl mx-auto mt-10">
        <h2 className="text-xl font-bold text-black mb-4">Reviews</h2>

        {/* No Reviews Button */}
        <div className="bg-gray-500 text-white px-4 py-2 rounded-md inline-block text-sm">
          There are no reviews yet
        </div>

        {/* Add a Review Section */}
        <div className="mt-4 flex items-center gap-2 text-gray-600 text-sm cursor-pointer">
          <span className="text-lg">
            <IoIosArrowBack />
          </span>{" "}
          {/* Left Arrow Icon */}
          <span>Add a review</span>
        </div>

        {/* Login Required Message */}
        <div className="mt-6 text-gray-500 text-sm text-center">
          You must be logged in to post a review
        </div>

        {/* Login Button */}
        <div className="flex justify-center mt-4">
          <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
