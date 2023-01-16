import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Client from "../../../../asstes/Images/client.png";
// import Case2 from "../../../../asstes/Images/case-study-2.png";
import "../../MobileVersion/MobileView.css";

import useClientSpeak from "../../../Shared/Hooks/useClientSpeak";

const ClientSpeaks = () => {
  const [ClientSpeak] = useClientSpeak();
  const ClientSpeakSlider = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
  };
  return (
    <div className="w-full text-white mb-30">
      <div className="font_title text-3xl font-thin px-6 pb-5">
        Our clients <br /> speak
      </div>
      <div className="max-w-[370px] m-auto text-white pb-4">
        <Slider ref={ClientSpeakSlider} arrows={false} {...settings}>
          {ClientSpeak?.map((details)=> 
          <div key={details?.id}>
            <div className="px-3">
              <div className="flex justify-between">
                <div className="font-semibold">{details?.name}</div>
                <div className="text-slate-400">{details?.designation}</div>
              </div>
              <img src={details?.image} alt="" className="w-full py-4" />
              <div className="text-justify">{details?.description}</div>
            </div>
          </div>
          )}
        </Slider>
      </div>
      <div className="flex justify-start gap-4 font-semibold px-6">
        <div onClick={() => ClientSpeakSlider.current.slickPrev()}>Prev</div>
        <div onClick={() => ClientSpeakSlider.current.slickNext()}>Next</div>
      </div>
    </div>
  );
};

export default ClientSpeaks;
