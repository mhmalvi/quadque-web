import React from "react";
import Team from "../../../../asstes/Images/team.png";
import Chairman from "../../../../asstes/Images/chairman.png";
import Ceo from "../../../../asstes/Images/ceo.png";
import Director from "../../../../asstes/Images/director.png";
import OM from "../../../../asstes/Images/om.png";
import "../../MobileVersion/MobileView.css"

const OurTeam = () => {
  return (
    <div className="w-full text-white mt-18 mb-5">
      <div className="uppercase px-6 pb-2 text-center">EXPERIENCE</div>
      <div className="text-3xl px-6 text-center">
        Skilled Team <br /> of Creators
      </div>
      <img src={Team} alt="" className="m-auto py-4" />
      <div className="text-sm px-10 pb-8 leading-6 text-center">
        We are an experienced and diverse team of software engineers, mobile
        application, Web developers, UI/UX designers, quality engineers, digital
        marketing experts and business development/ analysts who work closely to
        achieve the business goals. We love to solve complex problems and always
        excited to turn ideas from whiteboard to reality.
      </div>
      <div className="flex flex-wrap justify-center text-xs text-center pb-13 px-6">
        <div className="w-36 pb-4">
          <img src={Chairman} alt="" className="m-auto" />
          <div className="font-semibold leading-7">Mohammad AB Bijoy</div>
          <div className="uppercase font-thin">CHAIRMAN</div>
        </div>
        <div className="w-36 pb-4">
          <img src={Ceo} alt="" className="m-auto" />
          <div className="font-semibold leading-7">Muhammad H.M. Alvi</div>
          <div className="uppercase font-thin">MANAGING DIRECTOR & CEO</div>
        </div>

        <div className="w-36 pb-4">
          <img src={Director} alt="" className="m-auto" />
          <div className="font-semibold leading-7">Nahian Eram</div>
          <div className="uppercase font-thin">DIRECTOR</div>
        </div>
        <div className="w-36 pb-4">
          <img src={OM} alt="" className="m-auto" />
          <div className="font-semibold leading-7">Mohammad Nishat</div>
          <div className="uppercase font-thin">MANAGER, OPERATIONS</div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
