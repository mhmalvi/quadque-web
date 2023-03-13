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
import sapErp from "../../../../asstes/Lotties/sap_erp.json";
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
              <Fade left cascade>
                <div className="mt-8 text-justify">
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
                            className="spirit-bomb px-6 py-2 bg-transparent text-xs font-semibold leading-4 capitalize text-white font_title"
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
          </Fade>
        </div>
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
            <Link to={`services/ai-&-iot-solutions`}>
              <Lottie
                animationData={aIIot}
                loop={true}
                alt="AI & IoT Solutions Layout"
              />
            </Link>
          ) : null}

          {/* {activeService === "UI/UX" ? (
            <Lottie animationData={UI_UX} loop={true} alt="Ui & Ux Layout" />
          ) : null} */}

          {/* {activeService?.includes("Software") ? ( */}
          {activeService?.includes("Mobile") ? (
            <Link to={`services/mobile-app-development`}>
              <Lottie
                animationData={AppDev}
                loop={true}
                alt="Application Development Layout"
              />
            </Link>
          ) : null}
          {/* {activeService === "Software Development" ? ( */}
          {activeService?.includes("Software") ? (
            <Link to={`services/software-development`}>
              <Lottie
                animationData={softDevs}
                loop={true}
                alt="Software Development Layout"
              />
            </Link>
          ) : null}
          {/* {activeService === "Web Development" ? ( */}
          {activeService?.includes("Web") ? (
            <Link to={`services/web-development`}>
              <Lottie
                animationData={webDev}
                loop={true}
                alt="Web Development Layout"
              />
            </Link>
          ) : null}
          {/* {activeService === "Cyber Security & Data Protection" ? ( */}
          {activeService?.includes("Cyber") ? (
            <Link to={`services/web-development`}>
              <Lottie
                animationData={CyberSecurity}
                loop={true}
                alt="Cyber Security & Data Protection Layout"
              />
            </Link>
          ) : null}
          {/* {activeService === "E-commerce development" ? ( */}
          {activeService?.includes("E-commerce") ? (
            <Link to={`services/e-commerce-development`}>
              <Lottie
                animationData={eCom}
                loop={true}
                alt="E-commerce development Layout"
              />
            </Link>
          ) : null}
          {/* {activeService === "Cloud Computing Solutions" ? ( */}
          {activeService?.includes("Cloud") ? (
            <Link to={`services/cloud-computing-solutions`}>
              <Lottie
                animationData={Cloud}
                loop={true}
                alt="Cloud Computing Solutions Layout"
              />
            </Link>
          ) : null}

          {/* {activeService === "Maintenance and Support" ? ( */}
          {activeService?.includes("Maintenance") ? (
            <Link to={`services/maintenance-and-support`}>
              <Lottie
                animationData={Maintenance}
                loop={true}
                alt="Maintenance and Support Layout"
              />
            </Link>
          ) : null}

          {activeService?.includes("ERP") ? (
            <Link to={`services/sap-and-erp-solutions`}>
              <Lottie
                animationData={sapErp}
                loop={true}
                alt="SAP & ERP Solutions"
              />
            </Link>
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
                className="spirit-bomb w-[252px] h-[46px] bg-transparent text-[15px] font-semibold leading-4 capitalize text-white font_title"
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
