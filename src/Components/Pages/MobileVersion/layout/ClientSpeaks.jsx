import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
// import Client from "../../../../asstes/Images/client.png";
// import Case2 from "../../../../asstes/Images/case-study-2.png";
import Lottie from "lottie-react";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import "../../MobileVersion/MobileView.css";

import useClientSpeak from "../../../Shared/Hooks/useClientSpeak";

const ClientSpeaks = () => {
  const [ClientSpeak] = useClientSpeak();
  const ClientSpeakSlider = useRef(null);
  const [loader, setLoader] = useState(true);

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
  };

  useEffect(() => {
    if (ClientSpeak !== "") {
      setTimeout(() => {
        setLoader(false);
      }, 5000);
    } else {
      setTimeout(() => {
        setLoader(false);
      }, 5000);
    }
  }, []);

  return (
    <div className="w-full text-white mt-18">
      <div className="font_title text-3xl font-thin px-6 pb-10">
        CLIENTS
        <br /> &nbsp; SPEAK
      </div>
      <div className="w-[calc(100%_-_30px)] h-auto m-auto text-white pb-4 relative">
        {loader ? (
          <div className="w-[calc(100%_-_0px)] h-[100%] z-40 flex flex-col justify-center items-center m-auto absolute bg-black backdrop-blur-md">
            <Lottie
              className="w-1/2 mx-auto"
              animationData={loaderFile}
              loop={true}
            />

            <div className="font_title text-white animate-pulse">
              Loading...
            </div>
          </div>
        ) : null}
        <Slider ref={ClientSpeakSlider} arrows={false} {...settings}>
          {ClientSpeak?.map((details) => (
            <div key={details?.id}>
              <div className="px-3">
                <div className="flex justify-between">
                  <div className="font-semibold">{details?.name}</div>
                  <div className="text-slate-400">{details?.designation}</div>
                </div>
                <img
                  src={process.env.REACT_APP_ASSETS_URL + "/" + details?.image}
                  alt=""
                  className="w-full py-4"
                />
                <div className="text-justify">{details?.description}</div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="relative w-9/12 mx-auto">
          {ClientSpeak && (
            <>
              {/* <div className="m-auto flex justify-between pb-5"> */}
              <div
                onClick={() => ClientSpeakSlider.current.slickPrev()}
                className="arrowLeft font-semibold"
              >
                {/* <Icons.RightArrow className="w-12 scale-x-[-1]" /> */}
              </div>
              <div
                onClick={() => ClientSpeakSlider.current.slickNext()}
                className="arrowRight font-semibold"
              >
                {/* <Icons.RightArrow className="w-12" /> */}
              </div>
              {/* </div> */}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientSpeaks;
