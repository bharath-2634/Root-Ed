import React from "react";

import img1 from "../../assets/Steam-1.png";
import img2 from "../../assets/Steam-2.jpeg";
import img3 from "../../assets/Steam-3.jpeg";

const QualityServiceSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 md:px-12 py-12">
      {/* Left side - Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 w-full md:w-1/2">
        {/* Top-left image (large rectangle) */}
        <div className="col-span-2">
          <img
            src={img1} // replace with your image
            alt="Person using laptop"
            className="w-full h-64 md:h-80 object-cover rounded-tl-3xl rounded-tr-3xl"
          />
        </div>

        {/* Bottom-left circular image */}
        <div className="rounded-full overflow-hidden w-36 h-36 md:w-44 md:h-44 mx-auto">
          <img
            src={img2} // replace with your image
            alt="Team working"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom-right rectangular image */}
        <div className="rounded-2xl overflow-hidden w-36 h-36 md:w-44 md:h-44 mx-auto">
          <img
            src={img3} // replace with your image
            alt="Two people with laptop"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Right side - Text / Badge */}
      <div className="flex flex-col items-center justify-center text-center md:text-left">
        <div className="flex items-center gap-3 bg-green-100 px-6 py-3 rounded-xl">
          <div className="bg-green-500 text-white p-2 rounded-full">
            {/* icon (graduation cap) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-9-5m9 5l9-5"
              />
            </svg>
          </div>
          <p className="text-gray-700 font-semibold text-lg">
            30 Years Of <br className="hidden md:block" /> Quality Service
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityServiceSection;
