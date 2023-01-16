import { Tooltip } from "antd";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import Flip from "react-reveal/Flip";
import { Link, useLocation } from "react-router-dom";
import aIIot from "../../../../asstes/Lotties/ai_and_ito.json";
import AppDev from "../../../../asstes/Lotties/applicatiopn_development.json";
import softDev from "../../../../asstes/Lotties/softwware_development.json";
import UI_UX from "../../../../asstes/Lotties/ux.json";
import webDev from "../../../../asstes/Lotties/web_development.json";
import useServices from "../../../Shared/Hooks/useServices";

const Services = () => {
  const location = useLocation();
  const [activeService, setActiveService] = useState();
  const [activeServiceDetails, setActiveDetails] = useState({});
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [services] = useServices();

  useEffect(() => {
    if (location.hash === "#services") {
      setTimeout(() => {
        setTriggerAnimation(!triggerAnimation);
      }, 800);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  useEffect(() => {
    setActiveService(services[0]?.service_name);

    let i = 1;
    setInterval(() => {
      // console.log(services[i]);
      // console.log(document.getElementById("lottie_file"));
      // document.getElementById("lottie_file").src = services[i]?.file;

      setActiveService(services[i]?.service_name);
      setActiveDetails(services[i]);
      i++;
      if (i > 4) {
        i = 0;
      }
    }, 10000);
  }, [services]);

  console.log("services", services);

  useEffect(() => {
    setActiveDetails(
      services?.find((service) => service.service_name === activeService)
    );
  }, [activeService, services]);

  return (
    <div className="w-full lg:h-[80vh] 2xl:h-[90vh] relative text-white flex justify-between font-poppins lg:pt-[20px] 2xl:pb-[75px]">
      <div className="w-[255px] min-h-full flex flex-col justify-between">
        <div>
          <Flip left cascade spy={triggerAnimation}>
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
          </Flip>
        </div>

        <Flip left cascade>
          <div>
            <a href="#start-project">
              <button
                className="w-[252px] h-[46px] bg-brand-color text-[15px] font-semibold leading-4 capitalize text-white"
                style={{
                  letterSpacing: "0.04em",
                }}
              >
                START PROJECT
              </button>
            </a>
          </div>
        </Flip>
      </div>

      <Flip left cascade spy={triggerAnimation}>
        <div
          className="min-h-full flex justify-center items-center"
          style={{ maxWidth: "45%" }}
        >
          {/* <lottie-player
            id="lottie_file"
            src={
              activeServiceDetails?.file
                ? activeServiceDetails?.file
                : "https://lottie.host/4425546d-45a4-4fd9-ae87-19f0ddaae1c1/Vh6fazyi8d.json"
            }
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player> */}
          <Lottie
            animationData={littieFiles[activeServiceDetails?.service_name]}
            loop={true}
          />
        </div>
      </Flip>

      <div className="w-58 text-xl font-medium leading-8 capitalize">
        <Flip right cascade spy={triggerAnimation}>
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
        </Flip>
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
