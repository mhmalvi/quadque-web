import React from "react";
import AllService from "./Services";

const Services = () => {
  return (
    <div id="services" className="section h-full">
      <div className="2xl:py-3 pl-14 pr-[22px] text-white">
        <AllService />

        <span class="absolute top-[26px] right-[26px]  flex justify-center items-center h-4 w-4">
          <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-white opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </div>
    </div>
  );
};

export default Services;
