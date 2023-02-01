import React, { useState, useRef, useEffect } from "react";
import Team from "../../../../asstes/Images/team.png";
import Chairman from "../../../../asstes/Images/chairman.png";
import Ceo from "../../../../asstes/Images/ceo.png";
import Director from "../../../../asstes/Images/director.png";
import OM from "../../../../asstes/Images/om.png";
import Shourav from "../../../../asstes/Images/shourav.png";
import Atika from "../../../../asstes/Images/atika.jpeg";
import Shova from "../../../../asstes/Images/Shova.jpeg";
import Imtiaz from "../../../../asstes/Images/imtiaz.jpeg";
import "../../MobileVersion/MobileView.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurTeam = () => {
  const TeamSlider = useRef(null);

  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    centerPadding: "0px",
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };

  return (
    <div id="Team" className="w-full text-white mt-18 mb-5">
      <div className="uppercase px-6 pb-2 text-center">EXPERIENCE</div>
      <h1 className="font_title text-3xl px-6 text-center">
        Skilled Team <br /> of Creators
      </h1>
      <img src={Team} alt="" className="m-auto py-4" />
      <div className="text-sm px-10 pb-8 leading-6 text-center">
        We are an experienced and diverse team of software engineers, mobile
        application, Web developers, UI/UX designers, quality engineers, digital
        marketing experts and business development/ analysts who work closely to
        achieve the business goals. We love to solve complex problems and always
        excited to turn ideas from whiteboard to reality.
      </div>
      {/* <div className="flex flex-wrap justify-center text-xs text-center px-6"> */}
      <Slider ref={TeamSlider} arrows={false} {...settings} className="">
        <div className="w-36 pb-4 text-center">
          <img src={Chairman} alt="" className="w-28 h-32 mx-auto rounded-xl" />
          <div className="text-sm font-semibold leading-7">
            Mohammad AB Bijoy
          </div>
          <div className="h-14 text-xs uppercase font-thin">CHAIRMAN</div>
        </div>
        <div className="w-36 pb-4 text-center">
          <img src={Ceo} alt="" className="w-28 h-32 mx-auto rounded-xl" />
          <div className="text-sm font-semibold leading-7">
            Muhammad H.M. Alvi
          </div>
          <div className="h-14 text-xs uppercase font-thin">MD & CEO</div>
        </div>
        <div className="w-36 pb-4 text-center">
          <img src={Director} alt="" className="w-28 h-32 mx-auto rounded-xl" />
          <div className="text-sm font-semibold leading-7">Nahian Eram</div>
          <div className="h-14 text-xs uppercase font-thin">DIRECTOR</div>
        </div>
        <div className="w-36 pb-4 text-center">
          <img src={OM} alt="" className="w-28 h-32 mx-auto rounded-xl" />
          <div className="text-sm font-semibold leading-7">Mohammad Nishat</div>
          <div className="h-14 text-xs uppercase font-thin">
            MANAGER, OPERATIONS
          </div>
        </div>
        <div className="w-36 pb-4 text-center">
          <img src={Atika} alt="" className="w-28 h-32 mx-auto rounded-xl" />
          <div className="text-sm font-semibold leading-7">Atika Younus</div>
          <div className="h-14 text-xs uppercase font-thin">
            WORDPRESS DEVELOPER
          </div>
        </div>
        <div className="w-36 pb-4 text-center">
          <img src={Shourav} alt="" className="w-28 h-32 mx-auto rounded-xl" />
          <div className="text-sm font-semibold leading-7">
            Shourav Sen Gupta
          </div>
          <div className="h-14 text-xs uppercase font-thin">
            SOFTWARE DEVELOPER
          </div>
        </div>
        <div className="w-36 pb-4 text-center">
          <img src={Shova} alt="" className="w-28 h-32 mx-auto rounded-xl" />
          <div className="text-sm font-semibold leading-7">Tasnim Islam</div>
          <div className="h-14 text-xs uppercase font-thin">
            MARKETING EXECUTIVE
          </div>
        </div>
        <div className="w-36 pb-4 text-center">
          <img src={Imtiaz} alt="" className="w-28 h-32 mx-auto rounded-xl" />
          <div className="text-sm font-semibold leading-7">
            A M Imtiaz Mahbub
          </div>
          <div className="h-14 text-xs uppercase font-thin">CONTENT WRITER</div>
        </div>
      </Slider>
      {/* </div> */}
    </div>
  );
};

export default OurTeam;
