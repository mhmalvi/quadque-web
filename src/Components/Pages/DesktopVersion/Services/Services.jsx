import { Tooltip } from "antd";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Link, useLocation } from "react-router-dom";
import aIIot from "../../../../asstes/Lotties/ai_and_ito.json";
import AppDev from "../../../../asstes/Lotties/applicatiopn_development.json";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import softDev from "../../../../asstes/Lotties/softwware_development.json";
import UI_UX from "../../../../asstes/Lotties/ux.json";
import webDev from "../../../../asstes/Lotties/web_development.json";
import useServices from "../../../Shared/Hooks/useServices";

const Services = () => {
  const [services] = useServices();
  const location = useLocation();
  console.log(services);
  const [activeService, setActiveService] = useState();
  const [activeServiceDetails, setActiveDetails] = useState({});
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [loader, setLoader] = useState(true);
  const synth = window.speechSynthesis;

  useEffect(() => {
    setActiveService(services[0]?.service_name);
    if (location.hash === "#services") {
      synth.cancel();

      setTimeout(() => {
        if (services?.length) {
          setLoader(false);
        }
        setTriggerAnimation(true);
      }, 800);
    }

    if (services?.length) {
      setLoader(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash, services]);

  useEffect(() => {
    let i = 1;

    // setActiveService(services[0]?.service_name);

    setInterval(() => {
      // setActiveDetails(services[i]);
      i++;
      if (i > 4) {
        i = 0;
      }
      setActiveService(services[i]?.service_name);
      // setLoader(true);
    }, 15000);
  }, [services]);

  // console.log("services", services);

  useEffect(() => {
    setActiveDetails(
      services?.find((service) => service.service_name === activeService)
    );

    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, [activeService, services]);

  return (
    <div className="w-full lg:h-[80vh] 2xl:h-[90vh] relative text-white flex justify-between font-poppins lg:pt-[20px] 2xl:pb-[75px]">
      <div className="w-[255px] min-h-full flex flex-col justify-between">
        <div>
          <Fade left cascade spy={triggerAnimation}>
            <div>
              <h1
                id="service_name"
                className={`uppercase font-bold lg:text-[40px] 2xl:text-[64px] font_title`}
              >
                {activeServiceDetails?.service_name}
              </h1>
            </div>

            <div className="pt-18 mt-0.5 text-justify">
              <p>{activeServiceDetails?.short_description}</p>
              {activeServiceDetails?.description ? (
                <p className="text-white font-semibold mt-4 text-lg hover:text-opacity-90 cursor-pointer">
                  <Tooltip
                    placement="right"
                    title={
                      <span className="text-brand-color font-semibold">
                        Details On {activeService}
                      </span>
                    }
                    color={"rgba(255, 255, 255)"}
                  >
                    <Link to={`services/${activeServiceDetails?.slug}`}>
                      Learn More
                    </Link>
                  </Tooltip>
                </p>
              ) : null}
            </div>
          </Fade>
        </div>

        <Fade left cascade>
          <div>
            <a href="#start-project">
              <button
                className="w-[252px] h-[46px] bg-brand-color text-[15px] font-semibold leading-4 capitalize text-white"
                style={{
                  letterSpacing: "0.04em",
                  boxShadow:
                    "rgba(255, 255, 255, 0.15) 0px 2px 4px 0px, rgba(255, 255, 255, 0.6) 0px 2px 16px 0px",
                }}
              >
                START PROJECT
              </button>
            </a>
          </div>
        </Fade>
      </div>

      <Fade left cascade spy={triggerAnimation}>
        <div
          className="min-h-full w-8/12 flex justify-center items-center"
          style={{ maxWidth: "45%" }}
        >
          {/* "UI/UX": UI_UX, "AI & IoT Solutions": aIIot, "Application
          Development": AppDev, "Software Development": softDev, "Web
          Development": webDev, */}
          {activeService === "AI & IoT Solutions" ? (
            <Lottie
              animationData={aIIot}
              loop={true}
              alt="AI & IoT Solutions Layout"
            />
          ) : null}

          {activeService === "UI/UX" ? (
            <Lottie animationData={UI_UX} loop={true} alt="Ui & Ux Layout" />
          ) : null}
          {activeService === "Application Development" ? (
            <Lottie
              animationData={AppDev}
              loop={true}
              alt="Application Development Layout"
            />
          ) : null}
          {activeService === "Software Development" ? (
            <Lottie
              animationData={softDev}
              loop={true}
              alt="Software Development Layout"
            />
          ) : null}
          {activeService === "Web Development" ? (
            <Lottie
              animationData={webDev}
              loop={true}
              alt="Web Development Layout"
            />
          ) : null}
        </div>
      </Fade>

      <div className="w-58 text-xl font-medium leading-8 capitalize">
        <Fade left cascade spy={triggerAnimation}>
          <div className="pt-18 mt-0.5">
            {services?.map((service, i) => (
              <p
                key={i}
                className={`${
                  activeService === service?.service_name
                    ? "text-brand-color transition-colors delay-200"
                    : "text-white transition-colors delay-200"
                } cursor-pointer mb-2.5`}
                onClick={() => setActiveService(service?.service_name)}
              >
                {service?.service_name}
              </p>
            ))}
          </div>
        </Fade>
      </div>

      <div>
        {loader ? (
          <div className="min-w-full z-50 min-h-screen flex flex-col justify-center items-center absolute top-0 -left-8 bg-black backdrop-blur-md bg-opacity-80">
            <Lottie
              className="w-1/6 mx-auto"
              animationData={loaderFile}
              loop={true}
            />
            <h1 className="font_title text-3xl font-semibold text-white">
              Loading...
            </h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Services;

// const littieFiles = {
//   "UI/UX": UI_UX,
//   "AI & IoT Solutions": aIIot,
//   "Application Development": AppDev,
//   "Software Development": softDev,
//   "Web Development": webDev,
// };

// const littieFilesAltTags = {
//   "UI/UX": "Ui & Ux Layout",
//   "AI & IoT Solutions": "AI & IoT Solutions Layout",
//   "Application Development": "Application Development Layout",
//   "Software Development": "Software Development Layout",
//   "Web Development": "Web Development Layout",
// };
