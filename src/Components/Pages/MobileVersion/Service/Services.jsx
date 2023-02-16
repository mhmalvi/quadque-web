import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useServices from "../../../Shared/Hooks/useServices";
import "../../MobileVersion/MobileView.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import Icons from "../../../Shared/Icons";

import aIIot from "../../../../asstes/Lotties/ai_and_ito.json";
import AppDev from "../../../../asstes/Lotties/applicatiopn_development.json";
import softDevs from "../../../../asstes/Lotties/software developtment.json";
import UI_UX from "../../../../asstes/Lotties/ux.json";
import webDev from "../../../../asstes/Lotties/web_development.json";
import eCom from "../../../../asstes/Lotties/ecommerce.json";
import CyberSecurity from "../../../../asstes/Lotties/cyber-security.json";
import Cloud from "../../../../asstes/Lotties/cloud-computing22.json";
import Maintenance from "../../../../asstes/Lotties/maintanance.json";

const Services = () => {
  const [Services] = useServices();
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  useEffect(() => {
    if (Services.length > 0) {
      setTimeout(() => {
        setLoader(false);
      }, 100);
    } else {
      setTimeout(() => {
        setLoader(false);
      }, 5000);
    }
  }, [Services]);

  const PrimarySettings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
  };

  const SecondarySettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    arrow: false,
    className: "",
    centerMode: false,
  };

  console.log(Services);

  return (
    <div
      id="Service"
      className="w-full min-h-[650px] text-white relative overflow-hidden mt-3 pb-13 font_primary"
    >
      {loader ? (
        <div className=" absolute w-full h-full z-40 flex flex-col justify-center items-center bg-black bg-opacity-10 backdrop-blur-sm">
          <Lottie
            className="w-1/2 mx-auto"
            animationData={loaderFile}
            loop={true}
          />

          <div className="text-white font_title flex animate-pulse">
            Loading...
          </div>
        </div>
      ) : null}
      <div style={{ maxWidth: "90%", margin: "auto" }} {...PrimarySettings}>
        <div className="relative">
          <Slider asNavFor={nav2} ref={slider1} arrows={false}>
            {Services?.map((details, index) => (
              <Link to={`services/${details.slug}`}>
                <div key={index}>
                  <div className="w-10/12 h-72 m-auto my-10">
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
                    {details?.service_name === "AI & IoT Solutions" ? (
                      <Lottie
                        animationData={aIIot}
                        loop={true}
                        alt="AI & IoT Solutions Layout"
                      />
                    ) : null}

                    {/* {details?.service_name === "UI/UX" ? (
                      <Lottie
                        animationData={UI_UX}
                        loop={true}
                        alt="Ui & Ux Layout"
                      />
                    ) : null} */}
                    {details?.service_name === "Mobile App Development" ? (
                      <Lottie
                        className="h-72"
                        animationData={AppDev}
                        loop={true}
                        alt="Application Development Layout"
                      />
                    ) : null}
                    {details?.service_name === "Software Development" ? (
                      <Lottie
                        animationData={softDevs}
                        loop={true}
                        alt="Software Development Layout"
                      />
                    ) : null}
                    {details?.service_name === "Web Development" ? (
                      <Lottie
                        animationData={webDev}
                        loop={true}
                        alt="Web Development Layout"
                      />
                    ) : null}
                    {details?.service_name === "Cyber Security" ? (
                      <Lottie
                        animationData={CyberSecurity}
                        loop={true}
                        alt="Cyber Security Layout"
                      />
                    ) : null}
                    {details?.service_name === "E-commerce development" ? (
                      <Lottie
                        animationData={eCom}
                        loop={true}
                        alt="E-commerce development Layout"
                      />
                    ) : null}
                    {details?.service_name === "Cloud Computing Solutions" ? (
                      <Lottie
                        animationData={Cloud}
                        loop={true}
                        alt="Cloud Computing Solutions Layout"
                      />
                    ) : null}
                    {details?.service_name === "Maintenance and Support" ? (
                      <Lottie
                        animationData={Maintenance}
                        loop={true}
                        alt="Maintenance and Support Layout"
                      />
                    ) : null}
                  </div>
                  <div className="h-36 text-center overflow-hidden mb-5 pt-13">
                    {details?.short_description}
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
          {Services !=="" && (
            <>
              {/* <div className="m-auto flex justify-between pb-5"> */}
              <div
                onClick={() => slider1.current.slickPrev()}
                className="arrowLeft absolute bottom-[200px] font-semibold"
              >
                {/* <Icons.RightArrow className="w-12 scale-x-[-1]" /> */}
              </div>
              <div
                onClick={() => slider1.current.slickNext()}
                className="arrowRight absolute bottom-[200px] font-semibold"
              >
                {/* <Icons.RightArrow className="w-12" /> */}
              </div>
              {/* </div> */}
            </>
          )}

          <Slider
            asNavFor={nav1}
            ref={slider2}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
            {...SecondarySettings}
            className="font_title services-shadow text-base text-white text-opacity-25 text-center"
          >
            {Services?.map((details) => (
              <div className="text-2xl">
                <span>{details.service_name}</span>
              </div>
            ))}
          </Slider>
        </div>
        {/*           <div className="text-center font-semibold text-brand-color animate-pulse pt-10">
            <a href="#start-project">START PROJECT</a>
          </div> */}
      </div>
    </div>
  );
};

export default Services;