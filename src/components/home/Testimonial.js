import React from "react";

export default function Testimonial() {
  return (
    <div className="w-full flex flex-col font-serif items-center bg-[#fef6ec] py-8">
      <h1 className="text-[33px] py-8 md:text-[35px] lg:py-4 md:text-[55px] text-[#BFA785] text-center">
        Client Reviews <br /> & Testimonials
      </h1>

      {/* Main Container */}
      <div className="w-full lg:w-11/12 flex flex-col md:flex-row md:justify-center gap-4 px-4 md:px-12">

        {/* Review Box 1 */}
        <div className="w-full md:w-[320px] text-left text-[18px] md:text-base flex flex-col items-center md:items-start">
          <h2 className="text-[#BFA785] text-[30px] md:text-xl py-4 px-6 sm:px-12 md:px-4 lg:px-0 text-left w-full justify-left">Amit Singh</h2>
          <p className="text-[#214344] text-[18px] sm:text-[20px] px-6 sm:px-12 md:px-4 lg:px-0 text-left w-full justify-left">
            Testimonials are short quotes from people who love your brand. It’s a great way to convince customers to try your services.
          </p>
        </div>

        {/* Review Box 2 */}
        <div className="w-full md:w-[320px] text-left text-[18px] md:text-base flex flex-col items-center md:items-start">
          <h2 className="text-[#BFA785] text-[30px] md:text-xl px-6 sm:px-12 md:px-4 lg:px-0 text-left w-full justify-left py-4">Aman Maurya</h2>
          <p className="text-[#214344] text-[18px] sm:text-[20px] px-6 sm:px-12 md:px-4 lg:px-0 text-left w-full ">
            Testimonials are short quotes from people who love your brand. It’s a great way to convince customers to try your services.
          </p>
        </div>

        {/* Review Box 3 */}
        <div className="w-full md:w-[320px] text-left text-[18px] md:text-base flex flex-col items-center md:items-start">
          <h2 className="text-[#BFA785] text-[30px] md:text-xl py-4 px-6 sm:px-12 md:px-4 lg:px-0 text-left w-full justify-left">Shivam Sharma</h2>
          <p className="text-[#214344] text-[18px] sm:text-[20px] px-6 sm:px-12 md:px-4 lg:px-0 text-left w-full">
            Testimonials are short quotes from people who love your brand. It’s a great way to convince customers to try your services.
          </p>
        </div>

      </div>
    </div>
  );
}