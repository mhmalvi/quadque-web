import React from "react";
import Astro from "../../../../asstes/Videos/astro.mp4"

const Header = () => {
  return (
    <div className="w-full mt-30">
      <div className="w-2/3 text-white text-3xl font-semibold px-6">We <br /> Build <br /> Awesome <br /> Creation</div>
      <div className="text-white px-6 pt-3">Contact <span className="bg-white rounded-full text-black px-1 mx-1"> ^ </span></div>
      <div className="video-opacity-90 pt-10">
        <video /* autoPlay */ muted >
            <source src={Astro} type="video/mp4"/>
        </video>
      </div>
      <div className="flex justify-between bg-black text-white pt-10 pb-20 px-6">
        <div className="font-semibold">START PROJECT</div>
        <div className="flex gap-2">
            <span className="font-semibold">EN</span>
            <span className="font-thin">BN</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
