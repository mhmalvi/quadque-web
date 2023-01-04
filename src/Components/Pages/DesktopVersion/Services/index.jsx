import React from "react";
import AllService from "./Services";

const Services = () => {
  return (
    <div id="services" className="section h-full">
      <div className="2xl:py-3 pl-14 pr-[22px] text-white">
        <AllService />

        <span class="absolute top-8 right-8">
          <span className="relative  flex justify-center items-center h-4 w-4 cursor-pointer">
            <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Services;
