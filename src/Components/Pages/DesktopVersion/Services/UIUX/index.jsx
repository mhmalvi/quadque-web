import React, { useEffect, useState } from "react";
import useServices from "../../../../Shared/Hooks/useServices";
// import Lottie from "lottie-react";
// import UI_UX from "../../../../../asstes/Lotties/ux.json";
import { Tooltip } from "antd";
import Flip from "react-reveal/Flip";

const UIUX = () => {
  const [activeService, setActiveService] = useState();
  const [activeServiceDetails, setActiveDetails] = useState({});
  // const [openServiceDetails, setOpenServiceDetails] = useState(false);

  const [services] = useServices();

  useEffect(() => {
    setActiveService("UI/UX");
  }, []);

  useEffect(() => {
    setActiveDetails(
      services?.find((service) => service.service_name === activeService)
    );
  }, [activeService, services]);

  return (
    <div className="w-full lg:h-[80vh] 2xl:h-[90vh] relative text-white flex justify-between font-poppins lg:pt-[20px] 2xl:pb-[75px]">
      <div className="w-[255px] min-h-full flex flex-col justify-between">
        {/* <Modal
          style={{
            backgroundColor: "black !important",
            borderRadius: "0",
          }}
          open={openServiceDetails}
          onOk={() => setOpenServiceDetails(false)}
          onCancel={() => setOpenServiceDetails(false)}
          footer={false}
          width={"100%"}
        >
          <ServiceDetails service={activeService} />
        </Modal> */}

        <div>
          <Flip left cascade spy={activeService}>
            <div>
              <h1
                id="service_name"
                className={`uppercase font-bold lg:text-[40px] 2xl:text-[64px]`}
              >
                {activeServiceDetails?.service_name}
              </h1>
            </div>
            <div className="pt-18 mt-0.5">
              <p>{activeServiceDetails?.description}</p>
              <p
                className="text-white font-semibold mt-4 text-lg hover:text-opacity-90 cursor-pointer"
                // onClick={() => setOpenServiceDetails(true)}
              >
                <Tooltip
                  placement="right"
                  // title={`Case Studies of ${activeService}`}
                  title={
                    <span className="text-brand-color font-semibold">
                      Case Studies of {activeService}
                    </span>
                  }
                  color={"rgba(255, 255, 255)"}
                >
                  Learn More
                </Tooltip>
              </p>
            </div>
          </Flip>
        </div>

        <Flip left cascade>
          <div>
            <button
              className="w-[252px] h-[46px] bg-brand-color text-[15px] font-semibold leading-4 capitalize text-white"
              style={{
                letterSpacing: "0.04em",
              }}
            >
              START PROJECT
            </button>
          </div>
        </Flip>
      </div>

      <Flip left cascade spy={activeService}>
        <div
          className="min-h-full flex justify-center items-center"
          style={{ maxWidth: "45%" }}
        >
          <lottie-player
            // src="https://lottie.host/4425546d-45a4-4fd9-ae87-19f0ddaae1c1/Vh6fazyi8d.json"
            src={activeServiceDetails?.file}
            background="transparent"
            speed="1"
            // style={{ maxWidth: "70%" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </Flip>

      <div className="w-58 text-xl font-medium leading-8 capitalize">
        <Flip right cascade spy={activeService}>
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

export default UIUX;
