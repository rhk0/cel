import React from "react";
import breslet from "../assets/images/breslet.webp";
import ring from "../assets/images/ring.webp"
import earning from "../assets/images/earning.webp"
const ProductCategories = () => {
  return (
    <div className="bg-[#fef6ec] text-center md:p-5">
      <h1 className="md:text-6xl text-3xl font-semibold text-[#214344] mb-2">
        Shop By Category
      </h1>
      <p className="text-lg text-[#214344]">
        Browse through your favorite categories. We’ve got them all!
      </p>
      {/* Buttons */}
      <div className="flex justify-center md:gap-60 space-x-2 md:space-x-4 my-6 overflow-hidden max-w-full md:justify-center gap-3 mt-5 mb-8 transition-all duration-300">
        <button
          className="border-4 border-[#214344] rounded-full px-4 py-2 bg-[#214344] text-[#f0d5a0] transition-all duration-300 text-center font-semibold text-sm sm:text-base md:text-lg"
          style={{ width: "100%", maxWidth: "200px", height: "45px" }}
        >
          Women's
        </button>
        <button
          className="border-4 border-[#214344] rounded-full px-4 py-2 text-[#214344] transition-all duration-300 text-center font-semibold text-sm sm:text-base md:text-lg"
          style={{ width: "100%", maxWidth: "200px", height: "45px" }}
        >
          Men's
        </button>
      </div>

      <div className="flex justify-center overflow-x-auto snap-x snap-mandatory scrollbar-hide space-x-6 bg-[#214344] py-10 md:p-5 mt-8 rounded">
        <div className="flex flex-nowrap space-x-6">
          {/* Circle 1 (Empty) */}
          <div className="relative w-28 h-28 md:hidden"></div>
          <div className="relative w-28 h-28 md:hidden"></div>
          <div className="relative w-28 h-28 md:hidden"></div>

          {/* Circle 4 with Image (Pendants) */}
          <div
            className="relative w-28 h-28 sm:w-16 sm:h-8 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center bg-transparent border-2 border-white hover:border-black rounded-full overflow-hidden group snap-center"
            style={{
              backgroundImage: `url(${earning})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute w-20 h-10 sm:w-16 sm:h-8 md:w-28 md:h-16 bg-darkGreen bg-opacity-40 rounded-md backdrop-blur-md flex items-center justify-center border-2 border-white shadow-[inset_0_0_10px_rgba(255,255,0,0.5)]">
              <span className="text-white sm:text-sm sm:font-medium md:text-2xl md:text-base font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                Pendants
              </span>
            </div>
          </div>
          <div
            className="relative w-28 h-28 sm:w-16 sm:h-8 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center bg-transparent border-2 border-white hover:border-black rounded-full overflow-hidden group snap-center"
            style={{
              backgroundImage: `url(${earning})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute w-20 h-10 sm:w-16 sm:h-8 md:w-28 md:h-16 bg-darkGreen bg-opacity-40 rounded-md backdrop-blur-md flex items-center justify-center border-2 border-white shadow-[inset_0_0_10px_rgba(255,255,0,0.5)]">
              <span className="text-white sm:text-sm sm:font-medium md:text-2xl md:text-base font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                Pendants
              </span>
            </div>
          </div>

          {/* Circle 5 with Image (Necklaces) */}
          <div
            className="relative w-28 h-28 sm:w-16 sm:h-8 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center bg-white border-2 border-gray-200 hover:border-black rounded-full overflow-hidden group snap-center"
            style={{
              backgroundImage: `url(${ring})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute w-20 h-10 sm:w-16 sm:h-8 md:w-28 md:h-16 bg-darkGreen bg-opacity-40 rounded-md backdrop-blur-md flex items-center justify-center border-2 border-white shadow-[inset_0_0_10px_rgba(255,255,0,0.5)]">
              <span className="text-[#214344] sm:text-sm sm:font-medium md:text-2xl md:text-base font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                Necklaces
              </span>
            </div>
          </div>

          {/* Circle 2 with Image (Bracelets) */}
          <div
            className="relative w-28 h-28 sm:w-16 sm:h-8 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center bg-transparent border-2 border-white hover:border-black rounded-full overflow-hidden group snap-center"
            style={{
              backgroundImage: `url(${breslet})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute w-20 h-10 sm:w-16 sm:h-8 md:w-28 md:h-16 bg-darkGreen bg-opacity-40 rounded-md backdrop-blur-md flex items-center justify-center border-2 border-white shadow-[inset_0_0_10px_rgba(255,255,0,0.5)]">
              <span className="text-white sm:text-sm sm:font-medium md:text-2xl md:text-base font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                Bracelets
              </span>
            </div>
          </div>

          {/* Circle 3 with Image (Rings) */}
          <div
            className="relative w-28 h-28 sm:w-16 sm:h-8 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center bg-white border-2 border-white hover:border-black rounded-full overflow-hidden group snap-center"
            style={{
              backgroundImage: `url(${ring})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute w-20 h-10 sm:w-16 sm:h-8 md:w-28 md:h-16 bg-darkGreen bg-opacity-40 rounded-md backdrop-blur-md flex items-center justify-center border-2 border-gray-200 shadow-[inset_0_0_10px_rgba(255,255,0,0.5)]">
              <span className="text-[#214344] sm:text-sm sm:font-medium md:text-2xl md:text-base font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
                Rings
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
