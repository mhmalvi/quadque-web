import { Modal } from "antd";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { useLocation } from "react-router-dom";
import success from "../../../../asstes/Lotties/success.json";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import useServices from "../../../Shared/Hooks/useServices";
import { handleSendMail } from "../../../Shared/services";
import { handleThankYouAudio } from "../../../Shared/Sounds";

const StartProject = () => {
  const location = useLocation();
  const [services] = useServices();
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [activeServices, setActiveServices] = useState("Software Development");
  const [activeSubServices, setActiveSubServices] = useState("");
  const [subServices, setSubServices] = useState([
    "Custom Software Development",
    "CRM Software Development",
    "Marketplace Software Development",
  ]);

  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(true);
  const synth = window.speechSynthesis;

  useEffect(() => {
    if (location.hash === "#start-project") {
      synth.cancel();

      setTimeout(() => {
        setLoader(false);
        setTriggerAnimation(true);
        setTriggerTitleAnimation(true);
      }, 800);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

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
    } else if (service_name === "Mobile App Development") {
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

    setTriggerAnimation(!triggerAnimation);
  };

  const handleActiveSubServices = (sub_service_name) => {
    if (activeSubServices.includes(sub_service_name)) {
      setActiveSubServices(
        activeSubServices?.filter((sub) => sub !== sub_service_name)
      );
    } else {
      setActiveSubServices([...activeSubServices, sub_service_name]);
    }
  };

  const handleSendMailReq = async () => {
    setLoader(true);
    const data = {
      name: document.getElementById("Name").value,
      phone: document.getElementById("Phone").value,
      help: document.getElementById("help").value,
      email: document.getElementById("E-mail").value,
      category: activeServices,
      sub_category: activeSubServices.toString(),
    };

    const sendMail = await handleSendMail(data);

    console.log(sendMail);

    if (sendMail === "Mail sent") {
      handleThankYouAudio();
      setOpen(true);
      document.getElementById("Name").value = "";
      document.getElementById("Phone").value = "";
      document.getElementById("help").value = "";
      document.getElementById("E-mail").value = "";
      setActiveSubServices("");
      setLoader(false);
    }
  };

  return (
    <div
      id="start_project"
      className="section w-full lg:pt-6 2xl:py-8 font-poppins bg-black text-white"
    >
      <Modal
        style={{
          backgroundColor: "black !important",
          borderRadius: "0",
          scrollbarWidth: "none",
        }}
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
        width={"100%"}
      >
        <div
          className="absolute left-0 right-0 bottom-0 top-2 h-4/6 w-9/12 m-auto border border-white border-opacity-20 flex justify-center items-center bg-black"
          onClick={() => setOpen(false)}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl 2xl:text-5xl font_title lowercase">
              Thank You for Relying on Us
            </h1>
            <p className="text-xl font_title mt-4">
              We will get in touch soon.
            </p>
            <p className="text-base font_title mt-2 italic">Have a Good Day.</p>
            <button
              className="px-7 py-3.5 text-base cursor-pointer font-medium leading-4 rounded-full bg-white text-black text-center mt-10"
              style={{
                letterSpacing: "0.48px",
              }}
              onCancel={() => setOpen(false)}
            >
              Go Back
            </button>
          </div>

          <Lottie
            className="absolute bottom-0"
            animationData={success}
            loop={true}
          />
        </div>
      </Modal>

      <div className="ml-21 lg:mt-6 2xl:mt-16 mr-25 pb-8">
        <div className="flex items-center justify-between">
          <div
            className="text-5xl font-bold leading-10 capitalize font_title"
            style={{
              letterSpacing: "0.06em",
            }}
          >
            <Fade left spy={triggerTitleAnimation}>
              <div className="leading-10 uppercase mb-0.5">Let’s start</div>
              <div className="ml-8 leading-10 uppercase">a project</div>
            </Fade>
          </div>
          <div>
            <Fade left spy={triggerTitleAnimation}>
              <div>Call us +01765276560</div>
            </Fade>
          </div>
        </div>

        <div className="mt-15.5 flex justify-between">
          <div>
            {services?.map((service, i) => (
              <div
                key={i}
                className={`mb-5 text-sm 2xl:text-base font-medium leading-6 capitalize cursor-pointer transition-colors delay-200 ${
                  activeServices === service?.service_name
                    ? "text-brand-color border-b-2 border-brand-color pb-2"
                    : "text-white"
                }`}
                onClick={() => handleActiveServices(service?.service_name)}
              >
                <Fade left cascade spy={triggerAnimation}>
                  <div
                    className={`${
                      activeServices === service?.service_name ? "pr-4" : null
                    }
                  }`}
                  >
                    {service?.service_name}
                  </div>
                </Fade>
              </div>
            ))}
          </div>

          {services.length ? (
            <div className="mx-6">
              {subServices?.map((subService) => (
                <div
                  className={`mb-5 font-medium leading-6 capitalize cursor-pointer 2xl:py-1.5
                ${
                  activeSubServices.includes(subService)
                    ? "text-brand-color"
                    : "text-white"
                }
                `}
                  onClick={() => handleActiveSubServices(subService)}
                >
                  <Fade left cascade spy={triggerAnimation}>
                    <span
                      className={`max-w-[10px] px-1 py-[2.5px] max-h-[8px] border mr-2.5 ${
                        activeSubServices.includes(subService)
                          ? "border-brand-color"
                          : "border-white"
                      }`}
                    >
                      <span
                        className={`max-w-[6px] max-h-[5px] px-[7px] ${
                          activeSubServices.includes(subService)
                            ? "bg-brand-color border-gray-500"
                            : "border-white"
                        }`}
                      >
                        &nbsp;
                      </span>
                    </span>
                    <span className="text-sm 2xl:text-base font-normal leading-5 capitalize">
                      {subService}
                    </span>
                  </Fade>
                </div>
              ))}
            </div>
          ) : null}

          <Fade right cascade spy={triggerAnimation}>
            <div className="w-84">
              <div className="border-b border-white mb-5">
                <input
                  className="outline-none border-none bg-transparent px-2 py-1 w-79"
                  type="text"
                  name="Name"
                  placeholder="Name"
                  id="Name"
                />
              </div>
              <div className="border-b border-white mb-5">
                <input
                  className="outline-none border-none bg-transparent px-2 py-1 w-79"
                  type="text"
                  name="Phone"
                  placeholder="Phone"
                  id="Phone"
                />
              </div>
              <div className="border-b border-white mb-5">
                <input
                  className="outline-none border-none bg-transparent px-2 py-1 w-79"
                  type="text"
                  name="E-mail"
                  placeholder="E-mail"
                  id="E-mail"
                />
              </div>
              <div className="border-b border-white mt-11">
                <input
                  className="outline-none border-none bg-transparent px-2 py-1 w-79"
                  type="text"
                  name="help"
                  placeholder="How can we help you"
                  id="help"
                />
              </div>

              <div className="flex justify-center items-center">
                <button
                  className="spirit-bomb px-16 py-4 bg-transparent rounded-full border border-white mt-12 text-base font-semibold leading-4"
                  style={{
                    letterSpacing: "0.04em",
                    border: "2px solid rgb(255, 255, 255)",
                    borderRadius: "30px",
                  }}
                  onClick={handleSendMailReq}
                >
                  START PROJECT
                </button>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <div>
        {loader ? (
          <div className="min-w-full z-50 min-h-screen flex flex-col justify-center items-center absolute top-0 left-0 bg-black backdrop-blur-md bg-opacity-80">
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

export default StartProject;
