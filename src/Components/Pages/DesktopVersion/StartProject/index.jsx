import React, { useEffect, useState } from "react";
import useServices from "../../../Shared/Hooks/useServices";

const StartProject = () => {
  const [services] = useServices();
  const [activeServices, setActiveServices] = useState("UI/UX");
  const [activeSubServices, setActiveSubServices] = useState("");
  const [subServices, setSubServices] = useState([
    "UX Design",
    "User Research & Analysis",
    "Customer Journey Mapping",
    "User Experience Consulting",
    "Design Thinking",
  ]);

  useEffect(() => {
    setActiveSubServices("");
  }, [activeServices]);

  const handleActiveServices = (service_name) => {
    setActiveServices(service_name);

    if (service_name === "UI/UX") {
      setSubServices([
        "UX Design",
        "User Research & Analysis",
        "Customer Journey Mapping",
        "User Experience Consulting",
        "Design Thinking",
      ]);
    } else if (service_name === "Web Development") {
      setSubServices([
        "E-Commerce Web Development",
        "Java Web Development",
        "Magento Web Development",
        "Drupal Web Development",
      ]);
    } else if (service_name === "App Development") {
      setSubServices([
        "Native Mobile App Development",
        "Hybrid Mobile App Development",
        "Progressive Web App Development",
      ]);
    } else if (service_name === "Software Development") {
      setSubServices([
        "Custom Software Development",
        "CRM Software Development",
        "Marketplace Software Development",
      ]);
    } else if (service_name === "AI & IoT Solutions") {
      setSubServices([
        "Smart Voice Assistant",
        "AI Chatbot",
        "IoT Based Alarm System",
        "Smart Home Controlling System",
        "AI Office Assistant",
      ]);
    }
  };
  const handleActiveSubServices = (sub_service_name) => {
    if (!activeSubServices.includes(sub_service_name)) {
      setActiveSubServices([...activeSubServices, sub_service_name]);
    } else {
      const updatedSubServices = [...activeSubServices];
      updatedSubServices.pop(sub_service_name);
      setActiveSubServices(updatedSubServices);
    }
  };

  console.log(activeSubServices);

  return (
    <div
      id="start_project"
      className="section w-full lg:pt-6 2xl:py-8 font-poppins bg-black text-white"
    >
      <div className="ml-21 lg:mt-6 2xl:mt-16 mr-25 pb-8">
        <div className="flex items-center justify-between">
          <div className="text-5xl font-bold leading-10 capitalize">
            <div>START</div>
            <div className="ml-[26px]">PROJECT</div>
          </div>
          <div>
            <span>Call us +61405899496</span>
          </div>
        </div>

        <div className="mt-15.5 flex justify-between">
          <div>
            {services?.map((service) => (
              <div
                className={`mb-5 text-base font-medium leading-6 capitalize cursor-pointer transition-colors delay-200 ${
                  activeServices === service?.service_name
                    ? "text-brand-color border-b-2 border-brand-color pb-2"
                    : "text-white"
                }`}
                onClick={() => handleActiveServices(service?.service_name)}
              >
                <p
                  className={`${
                    activeServices === service?.service_name ? "pr-4" : null
                  }
                  }`}
                >
                  {service?.service_name}
                </p>
              </div>
            ))}
          </div>
          <div>
            {subServices?.map((subService) => (
              <div
                className={`mb-5 text-base font-medium leading-6 capitalize cursor-pointer 2xl:py-1.5
                ${
                  activeSubServices.includes(subService)
                    ? "text-brand-color"
                    : "text-white"
                }
                `}
                onClick={() => handleActiveSubServices(subService)}
              >
                <span
                  className={`max-w-[14px] max-h-[14px] border px-[7px] mr-2.5 ${
                    activeSubServices.includes(subService)
                      ? "border-brand-color"
                      : "border-white"
                  }`}
                >
                  &nbsp;
                </span>
                <span className="text-base font-normal leading-5 capitalize">
                  {subService}
                </span>
              </div>
            ))}
          </div>
          <div className="w-84">
            <div className="border-b border-white mb-5">
              <input
                className="outline-none border-none bg-transparent px-2 py-1"
                type="text"
                name="Name"
                placeholder="Name"
                id="Name"
              />
            </div>
            <div className="border-b border-white mb-5">
              <input
                className="outline-none border-none bg-transparent px-2 py-1"
                type="text"
                name="Phone"
                placeholder="Phone"
                id="Phone"
              />
            </div>
            <div className="border-b border-white mb-5">
              <input
                className="outline-none border-none bg-transparent px-2 py-1"
                type="text"
                name="E-mail"
                placeholder="E-mail"
                id="E-mail"
              />
            </div>
            <div className="border-b border-white mt-11">
              <input
                className="outline-none border-none bg-transparent px-2 py-1"
                type="text"
                name="help"
                placeholder="How can we help you"
                id="help"
              />
            </div>

            <div className="flex justify-center items-center">
              <button
                className="px-16 py-3.5 bg-brand-color mt-12 text-base font-semibold leading-4"
                style={{
                  letterSpacing: "0.04em",
                  boxShadow:
                    "rgba(255, 255, 255, 0.15) 0px 2px 4px 0px, rgba(255, 255, 255, 0.6) 0px 2px 16px 0px",
                }}
              >
                START PROJECT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartProject;
