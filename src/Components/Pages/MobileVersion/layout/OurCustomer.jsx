import React from "react";
import Atr from "../../../../asstes/Images/atr.png";
import Otobi from "../../../../asstes/Images/otobi.png";
import "../../MobileVersion/MobileView.css"

const OurCustomer = () => {
  return (
    <div className="w-full text-white mt-18 mb-5">
      <div className="text-3xl px-6 pb-5">
        More than <span className="font-bold text-brand-color">100</span> valuable
        coustomers
      </div>
      <div className="text-sm px-6 pb-3 leading-6">
        We create premium web design, though and user-friendly that solve
        business problems We create premium web design.
      </div>
      <div className="flex justify-evenly pb-4">
        <img src={Atr} alt="" />
        <img src={Otobi} alt="" />
      </div>
      <div className="flex justify-evenly pb-4">
        <img src={Otobi} alt="" />
        <img src={Atr} alt="" />
      </div>
      <div className="flex justify-evenly pb-4">
        <img src={Atr} alt="" />
        <img src={Otobi} alt="" />
      </div>
      <div className="flex justify-evenly pb-4">
        <img src={Otobi} alt="" />
        <img src={Atr} alt="" />
      </div>
    </div>
  );
};

export default OurCustomer;
