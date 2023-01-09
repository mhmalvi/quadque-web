import React from "react";
import AllService from "./Services";

const Services = () => {
  return (
    <div id="services" className="section h-full">
      <div className="2xl:py-3 pl-14 pr-[22px] text-white">
        <AllService />

        <a href="#start-project" class="absolute top-12 right-10">
          <span className="relative  flex justify-center items-center h-4 w-4 cursor-pointer">
            <span class="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-white opacity-75"></span>
            <span class="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Services;
