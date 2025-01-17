import React from "react";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md md:p-10 md:px-16">
        <h2 className="text-center text-2xl font-bold mb-6">Need our help</h2>
        <form className="space-y-4  w-full  ">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-200 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition"
          >
            Get Personalised Recommendation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
