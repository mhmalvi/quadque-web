import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useServices from "../../../Shared/Hooks/useServices";
import "../../MobileVersion/MobileView.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import UI_UX from "../../../../asstes/Lotties/ux.json";
import aIIot from "../../../../asstes/Lotties/ai_and_ito.json";
import AppDev from "../../../../asstes/Lotties/applicatiopn_development.json";
import softDev from "../../../../asstes/Lotties/softwware_development.json";
import webDev from "../../../../asstes/Lotties/web_development.json";

const Services = () => {
  const [Services] = useServices();
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const PrimarySettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
  };

  const SecondarySettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToScroll: 1,
    arrow: false,
    className: "center",
    centerMode: true,
  };

  return (
    <div id="Service" className="Service w-full text-white">
      <div style={{ maxWidth: "90%", margin: "auto" }} {...PrimarySettings}>
        <div>
          <Slider asNavFor={nav2} ref={slider1} arrows={false}>
            {Services?.map((details, index) => (
              <Link to={`services/${details.slug}`}>
                <div key={index}>
                  <div className="w-full h-100">
                    {/* <lottie-player
                      
                      src={
                        details?.file
                          ? details?.file
                          : "https://lottie.host/4425546d-45a4-4fd9-ae87-19f0ddaae1c1/Vh6fazyi8d.json"
                      }
                      background="transparent"
                      speed="1"
                      style={{ maxWidth: "70%" }}
                      loop
                      autoplay
                    ></lottie-player> */}
                    <Lottie
                      animationData={littieFiles[details?.service_name]}
                      loop={true}
                    />
                  </div>
                  <div className="font_title m-auto text-center text-2xl font-bold pb-4 services-shadow">
                    {details.service_name}
                  </div>
                  {/* <div className="m-auto text-center text-sm font-light pb-5 leading-6">
                    {details.description}
                  </div> */}
                  <div
                    dangerouslySetInnerHTML={{ __html: details.description }}
                    className="h-36 text-center overflow-hidden mb-5"
                  ></div>
                </div>
              </Link>
            ))}
          </Slider>

          <div className="w-3/4 m-auto flex justify-between pb-5">
            <div className="font-semibold text-brand-color">START PROJECT</div>
            <div
              onClick={() => slider1.current.slickPrev()}
              className="font-semibold"
            >
              Prev
            </div>
            <div
              onClick={() => slider1.current.slickNext()}
              className="font-semibold"
            >
              Next
            </div>
          </div>

          <Slider
            asNavFor={nav1}
            ref={slider2}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
            {...SecondarySettings}
            className="font_title text-base text-white text-opacity-25 text-center"
          >
            {Services?.map((details) => (
              <div>
                <span>{details.service_name}</span>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Services;

const littieFiles = {
  "UI/UX": UI_UX,
  "AI & IoT Solutions": aIIot,
  "Application Development": AppDev,
  "Software Development": softDev,
  "Web Development": webDev,
};
