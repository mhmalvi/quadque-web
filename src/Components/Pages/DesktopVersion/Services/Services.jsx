import { Tooltip } from "antd";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Link, useLocation } from "react-router-dom";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import aIIot from "../../../../asstes/Lotties/ai_and_ito.json";
import AppDev from "../../../../asstes/Lotties/applicatiopn_development.json";
import softDevs from "../../../../asstes/Lotties/software developtment.json";
// import UI_UX from "../../../../asstes/Lotties/ux.json";
import webDev from "../../../../asstes/Lotties/web_development.json";
import eCom from "../../../../asstes/Lotties/ecommerce.json";
import CyberSecurity from "../../../../asstes/Lotties/cyber-security.json";
import Cloud from "../../../../asstes/Lotties/cloud-computing22.json";
import Maintenance from "../../../../asstes/Lotties/maintanance.json";
import useServices from "../../../Shared/Hooks/useServices";

const Services = () => {
  const [services] = useServices();
  const location = useLocation();
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

    setInterval(() => {
      i++;
      if (i > services?.length - 1) {
        i = 0;
      }
      setActiveService(services[i]?.service_name);
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
    <div className="w-full lg:h-[80vh] 2xl:h-[90vh] relative text-white flex justify-between font_primary lg:pt-5 lg:pb-6 2xl:pb-[75px]">
      <div className="w-[255px] min-h-full flex flex-col justify-between">
        <div>
          <Fade left cascade spy={triggerAnimation}>
            <div>
              <h1
                id="service_name"
                className={`font-bold lg:text-3xl 2xl:text-5xl font_title`}
              >
                {activeServiceDetails?.service_name}
              </h1>
              <p className="mt-8 text-sm 2xl:text-base">
                {activeServiceDetails?.short_description}
              </p>
            </div>
          </Fade>
        </div>

        <Fade left cascade>
          <div className="mt-auto text-justify">
            {activeServiceDetails?.description ? (
              <p className="text-white font-semibold mt-4 text-lg hover:text-opacity-90 cursor-pointer">
                <Tooltip
                  placement="right"
                  title={
                    <span className="text-white font-semibold">
                      Details On {activeService}
                    </span>
                  }
                  color={"rgba(90, 90, 90, 0.7)"}
                >
                  <Link to={`services/${activeServiceDetails?.slug}`}>
                    <button
                      className="spirit-bomb px-8 py-3 bg-transparent text-[15px] font-semibold leading-4 capitalize text-white"
                      style={{
                        letterSpacing: "0.04em",
                        borderRadius: "30px",
                      }}
                    >
                      Learn More
                    </button>
                  </Link>
                </Tooltip>
              </p>
            ) : null}
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

          {/* {activeService === "AI & IoT Solutions" ? ( */}
          {activeService?.includes("IoT") ? (
            <Lottie
              animationData={aIIot}
              loop={true}
              alt="AI & IoT Solutions Layout"
            />
          ) : null}

          {/* {activeService === "UI/UX" ? (
            <Lottie animationData={UI_UX} loop={true} alt="Ui & Ux Layout" />
          ) : null} */}

          {/* {activeService?.includes("Software") ? ( */}
          {activeService?.includes("Mobile") ? (
            <Lottie
              animationData={AppDev}
              loop={true}
              alt="Application Development Layout"
            />
          ) : null}
          {/* {activeService === "Software Development" ? ( */}
          {activeService?.includes("Software") ? (
            <Lottie
              animationData={softDevs}
              loop={true}
              alt="Software Development Layout"
            />
          ) : null}
          {/* {activeService === "Web Development" ? ( */}
          {activeService?.includes("Web") ? (
            <Lottie
              animationData={webDev}
              loop={true}
              alt="Web Development Layout"
            />
          ) : null}
          {/* {activeService === "Cyber Security & Data Protection" ? ( */}
          {activeService?.includes("Cyber") ? (
            <Lottie
              animationData={CyberSecurity}
              loop={true}
              alt="Cyber Security & Data Protection Layout"
            />
          ) : null}
          {/* {activeService === "E-commerce development" ? ( */}
          {activeService?.includes("E-commerce") ? (
            <Lottie
              animationData={eCom}
              loop={true}
              alt="E-commerce development Layout"
            />
          ) : null}
          {/* {activeService === "Cloud Computing Solutions" ? ( */}
          {activeService?.includes("Cloud") ? (
            <Lottie
              animationData={Cloud}
              loop={true}
              alt="Cloud Computing Solutions Layout"
            />
          ) : null}
          {/* {activeService === "Maintenance and Support" ? ( */}
          {activeService?.includes("Maintenance") ? (
            <Lottie
              animationData={Maintenance}
              loop={true}
              alt="Maintenance and Support Layout"
            />
          ) : null}
        </div>
      </Fade>

      <div class="w-64 min-h-full text-xl font-medium leading-8 capitalize flex flex-col justify-between">
        <Fade left cascade spy={triggerAnimation}>
          <div className="pt-18 mt-0.5">
            {services?.map((service, i) => (
              <p
                key={i}
                className={`whitespace-nowrap text-base 2xl:text-xl ${
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

          <div>
            <a href="#start-project">
              <button
                className="spirit-bomb w-[252px] h-[46px] bg-transparent text-[15px] font-semibold leading-4 capitalize text-white"
                style={{
                  letterSpacing: "0.04em",
                  borderRadius: "30px",
                }}
              >
                START A PROJECT
              </button>
            </a>
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
