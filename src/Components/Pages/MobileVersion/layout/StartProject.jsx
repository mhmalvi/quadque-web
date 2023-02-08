import { Modal } from "antd";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import sucess from "../../../../asstes/Lotties/success.json";
import useServices from "../../../Shared/Hooks/useServices";
import { handleSendMail } from "../../../Shared/services";
import "../../MobileVersion/MobileView.css";

const StartProject = () => {
  const [Services] = useServices();
  const [activeServices, setActiveServices] = useState();
  const [activeSubServices, setActiveSubServices] = useState("");
  const [toogleSubService, setToogleSubService] = useState([
    "Custom Software Development",
    "CRM Software Development",
    "Marketplace Software Development",
  ]);
  const [msgBox, setMsgBox] = useState(false);
  const [open, setOpen] = useState(false);
  
  /* console.log(Services); */

   useEffect(() => {
    setActiveServices(Services[0]?.service_name);
  }, [Services]);

  const handleLoginReq = async (e) => {
    e.preventDefault();
    /* console.log("handle data", data); */
    //alert("Your form is submitted.");
  };


  const handleActiveServices = (service_name) => {
    setActiveServices(service_name);

    if (service_name.includes("UI")) {
      setToogleSubService([
        "UX Design",
        "User Research & Analysis",
        "Customer Journey Mapping",
        "User Experience Consulting",
        "Design Thinking",
      ]);
    } else if (service_name.includes("Web")) {
      setToogleSubService([
        "E-Commerce Web Development",
        "Java Web Development",
        "Magento Web Development",
        "Drupal Web Development",
      ]);
    } else if (service_name.includes("Mobile")) {
      setToogleSubService([
        "Native Mobile App Development",
        "Hybrid Mobile App Development",
        "Progressive Web App Development",
      ]);
    } else if (service_name.includes("Software")) {
      setToogleSubService([
        "Custom Software Development",
        "CRM Software Development",
        "Marketplace Software Development",
      ]);
    } else if (service_name.includes("IoT")) {
      setToogleSubService([
        "Smart Voice Assistant",
        "AI Chatbot",
        "IoT Based Alarm System",
        "Smart Home Controlling System",
        "AI Office Assistant",
      ]);
    } else if (service_name.includes("Cyber")) {
      setToogleSubService([
        "Critical infrastructure security",
        "Application security",
        "Network security",
        "Cloud security",
        "Internet of Things (IoT) security",
      ]);
    } else if (service_name.includes("Maintenance")) {
      setToogleSubService([
        "Corrective Software Maintenance",
        "Adaptive Software Maintenance",
        "Perfective Software Maintenance",
        "Preventive Software Maintenance",
      ]);
    } else if (service_name.includes("Cloud")) {
      setToogleSubService([
        "Infrastructure-as-a-Service (IaaS)",
        "Platforms-as-a-Service (PaaS)",
        "Software-as-a-Service (SaaS)",
      ]);
    } else if (service_name.includes("commerce")) {
      setToogleSubService([
        "Software-as-a-Service (SaaS)",
        "Platform-as-a-Service (PaaS)",
        "On-Premise platforms",
      ]);
    }

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

  //console.log("selected sub", activeSubServices);
  
  const handleSendMailReq = async () => {
    const data = {
      name: document.getElementById("Name").value,
      phone: document.getElementById("Phone").value,
      help: document.getElementById("Help").value,
      email: document.getElementById("E-mail").value,
      category: activeServices,
      sub_category: activeSubServices.toString(),
    };
    if( activeSubServices !== "" ){
      console.log("filled data", data);
      setMsgBox(false);
      const sendMail = await handleSendMail(data);

      console.log("send mail", sendMail);

      if (sendMail === "Mail sent") {
        setOpen(true);
        document.getElementById("Name").value = "";
        document.getElementById("Phone").value = "";
        document.getElementById("Help").value = "";
        document.getElementById("E-mail").value = "";
        setActiveSubServices("");
      }
    }else{
      setMsgBox(true);
      setTimeout(() => {
        setMsgBox(false);
      }, 6000);
    }  
  };


  return (
    <div
      id="start-project"
      className="w-full text-white pt-20 mb-5 font_primary"
    >
      <Modal
        style={{
          backgroundColor: "black !important",
          borderRadius: "0",
          scrollbarWidth: "none",
        }}
        open={open}
        // onCancel={() => setOpen(false)}
        closable={false}
        footer={false}
        width={"100%"}
      >
        <div
          className="absolute left-0 right-0 bottom-0 top-2 h-3/6 w-11/12 p-6 m-auto border border-white border-opacity-20 flex justify-center items-center bg-black"
          onClick={() => setOpen(false)}
        >
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-4xl 2xl:text-5xl font_title lowercase">
              Thank You for Relying on Us
            </h1>
            <p className="text-center text-xl font_title mt-4">
              We will get in touch soon.
            </p>
            <p className="text center text-base font_title mt-2 italic">
              Have a Good Day.
            </p>
            <button
              className="px-7 py-3.5 text-base  font-medium leading-4 rounded-full bg-white text-black text-center mt-10"
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
            animationData={sucess}
            loop={true}
          />
        </div>
      </Modal>

      <div className="font_title text-3xl px-6 font-bold uppercase pb-8">
        LET'S START <br /> &nbsp;&nbsp;A PROJECT !
      </div>
      <div className="flex flex-wrap justify-between capitalize pb-8 px-6">
        {Services?.map((service, i) => (
          <p
            key={i}
            onClick={() => {
              handleActiveServices(service?.service_name);
            }}
            className={`px-5 my-3 duration-300 ${
              activeServices === service?.service_name
                ? "text-brand-color scale-105"
                : ""
            }`}
          >
            {service.service_name}
          </p>
        ))}
      </div>
      {Services.length ? (
        <div className="flex flex-wrap justify-between capitalize pb-6 px-6 gap-3">
          {toogleSubService?.map((subService, i) => (
            <div key={i}
              onClick={() => {
                handleActiveSubServices(subService);
              }}
              className={`text-sm border rounded-full px-5 py-2 my-1 duration-300 whitespace-nowrap ${
                activeSubServices.includes(subService)
                  ? "bg-white text-black shadow scale-105"
                  : ""
              }`}
            >
              {subService}
            </div>
          ))}
        </div>
      ) : null}

      <form className="mx-6" onSubmit={handleLoginReq}>
        <div
          className={`${
            msgBox ? "text-red-500" : "text-transparent"
          } animate-pulse`}
        >
          Must choose atleast one subcategory!
        </div>

        <div className="">
          <input
            type="text"
            name="Name"
            placeholder="Name"
            id="Name"
            className="w-full bg-transparent placeholder-white text-white px-3 py-2 my-2 border-t-0 border-x-0 border-b rounded-none focus:outline-none focus:border-brand-color"
            required
          />
          <input
            type="text"
            name="Phone"
            placeholder="Phone"
            id="Phone"
            className="w-full bg-transparent placeholder-white text-white px-3 py-2 my-2 border-t-0 border-x-0 border-b rounded-none focus:outline-none focus:border-brand-color"
            required
          />
          <input
            type="text"
            name="E-mail"
            placeholder="E-mail"
            id="E-mail"
            className="w-full bg-transparent placeholder-white text-white px-3 py-2 my-2 border-t-0 border-x-0 border-b rounded-none focus:outline-none focus:border-brand-color"
            required
          />
          <input
            type="text"
            name="Help"
            placeholder="How can we help you"
            id="Help"
            className="w-full bg-transparent placeholder-white text-white px-3 py-2 my-2 border-t-0 border-x-0 border-b rounded-none border-gray-300 focus:outline-none focus:border-brand-color"
          />
        </div>

        <div className="my-6">
          <button
            onClick={handleSendMailReq}
            type="submit"
            className="w-1/2 p-3 text-white font-medium bg-black rounded-full border spirit-bomb my-5"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StartProject;
