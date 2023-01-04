import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Client from "../../../../asstes/Images/client.png";
import Case2 from "../../../../asstes/Images/case-study-2.png";
import "../../MobileVersion/MobileView.css";

import { handleFetchClientSpeak } from "../../../Shared/services";

const ClientSpeaks = () => {
  const ClientSpeakSlider = useRef(null);
  const [clientSpeak, setClientSpeak] = useState();

  useEffect(() => {
    (async () => {
      const fetchClientSpeak = await handleFetchClientSpeak();
      setClientSpeak(fetchClientSpeak);
      console.log("Client Speaks", clientSpeak);
    })();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    infinite: true,
  };
  return (
    <div className="w-full text-white mb-30">
      <div className="text-3xl font-thin px-6 pb-5">
        Our clients <br /> speak
      </div>
      <div className="w-[400px] m-auto text-white pb-4">
        <Slider ref={ClientSpeakSlider} arrows={false} {...settings}>
          {clientSpeak?.map((details)=> 
          <div key={details?.id}>
            <div className="px-6">
              <div className="flex justify-between">
                <div className="font-semibold">{details?.name}</div>
                <div className="text-slate-400">{details?.designation}</div>
              </div>
              <img src={details?.image} alt="" className="w-full py-4" />
              <div className="font-thin text-sm text-justify leading-8" dangerouslySetInnerHTML={{ __html: details?.description }}>
              </div>
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
