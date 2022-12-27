import React from "react";
import Faq from "../../../../asstes/Images/faq.png";
import Chairman from "../../../../asstes/Images/chairman.png";
import Ceo from "../../../../asstes/Images/ceo.png";
import Director from "../../../../asstes/Images/director.png";
import OM from "../../../../asstes/Images/om.png";

const FAQ = () => {
  return (
    <div className="w-full text-white mt-20 mb-5">
      <div className="text-3xl px-6">
        FAQ's
      </div>
      <img src={Faq} alt="" className="m-auto py-4" />
      <div className="text-2xl px-10 pb-8 leading-6 text-center">
        Most Popular Questions
      </div>
      <div className="flex flex-wrap justify-evenly text-xs text-center pb-4">
        <div className="py-4">
          <img src={Chairman} alt="" className="w-36 m-auto" />
          <div className="font-semibold leading-7">Mohammad AB Bijoy</div>
          <div className="font-thin">CHAIRMAN</div>
        </div>
        <div className="py-4">
          <img src={Ceo} alt="" className="w-36 m-auto" />
          <div className="font-semibold leading-7">Muhammad H.M. Alvi</div>
          <div className="font-thin">MANAGING DIRECTOR & CEO</div>
        </div>

        <div className="py-4">
          <img src={Director} alt="" className="w-36 m-auto" />
          <div className="font-semibold leading-7">Nahian Eram</div>
          <div className="font-thin">DIRECTOR</div>
        </div>
        <div className="py-4">
          <img src={OM} alt="" className="w-36 m-auto" />
          <div className="font-semibold leading-7">Mohammad Nishat</div>
          <div className="font-thin">MANAGER, OPERATIONS</div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
