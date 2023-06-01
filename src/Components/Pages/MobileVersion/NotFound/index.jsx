import React from "react";
import Astro404 from "../../../../assets/Images/404.png";

const NotFound = () => {
  return (
    <div className="text-white pt-30">
      <div className="text-5xl text-center font_title">404</div>
      <div className="text-xl text-center font_title">Page not found</div>
      <img src={Astro404} alt="Astro404" className="w-7/12 m-auto py-10" />
      <div className="flex items-center justify-center">
        <a
          href="/"
          className="bg-black text-sm text-center whitespace-nowrap font-semibold spirit-bomb py-3 px-4 mt-8 mb-6 rounded-full relative z-[100] uppercase mx-auto font_title"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
