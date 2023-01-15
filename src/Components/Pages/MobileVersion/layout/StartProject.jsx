import React, { useState, useEffect } from "react";
import { message } from "antd";
import "../../MobileVersion/MobileView.css"
import useServices from "../../../Shared/Hooks/useServices";

const StartProject = () => {
  const [Services] = useServices();
  const [activeSubServices, setActiveSubServices] = useState("");
  const [toogleSubService, setToogleSubService] = useState([
    "UX Design",
    "User Research & Analysis",
    "Customer Journey Mapping",
    "User Experience Consulting",
    "Design Thinking",
  ]);
  const [toogleService, setToogleService] = useState();
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });
  
  console.log(Services);

  const userData = (e) => {
    const userdata = { ...data };
    userdata[e.target.id] = e.target.value;
    setData(userdata);
  };

  const handleLoginReq = async (e) => {
    e.preventDefault();
    console.log(data);
    alert("Your form is submitted.");
  };

/*   const handleToogleService = (index) => {
    setToogleService(index);
  }; */

/*     const handleToogleSubService = (index) => {
    setToogleSubService(index);
  }; */
/*   useEffect(() => {
    setActiveSubServices("");
  }, [Services]); */


  const handleActiveServices = (service_name) => {
    setToogleService(service_name);

    if (service_name === "UI/UX") {
      setToogleSubService([
        "UX Design",
        "User Research & Analysis",
        "Customer Journey Mapping",
        "User Experience Consulting",
        "Design Thinking",
      ]);
    } else if (service_name === "Web Development") {
      setToogleSubService([
        "E-Commerce Web Development",
        "Java Web Development",
        "Magento Web Development",
        "Drupal Web Development",
      ]);
    } else if (service_name === "App Development") {
      setToogleSubService([
        "Native Mobile App Development",
        "Hybrid Mobile App Development",
        "Progressive Web App Development",
      ]);
    } else if (service_name === "Software Development") {
      setToogleSubService([
        "Custom Software Development",
        "CRM Software Development",
        "Marketplace Software Development",
      ]);
    } else if (service_name === "AI & IoT Solutions") {
      setToogleSubService([
        "Smart Voice Assistant",
        "AI Chatbot",
        "IoT Based Alarm System",
        "Smart Home Controlling System",
        "AI Office Assistant",
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

  return (
    <div id="start-project" className="w-full text-white mt-20 mb-5">
      <div className="text-3xl px-6 font-bold uppercase pb-8">
        START <br /> &nbsp; PROJECT
      </div>
      <div className="flex flex-wrap justify-between capitalize pb-8 px-6">
        {Services?.map((service, i) => 
          <p
            key={i}
            onClick={() => {
              handleActiveServices(service?.service_name);
            }}
            className={`px-5 duration-300 ${toogleService === service?.service_name ? "text-brand-color": ""}`}
          >
            {service.service_name}
          </p>
        )}
      </div>
      {Services.length ? (
        <div className="flex flex-wrap justify-between capitalize pb-8 px-10 gap-3">
          {toogleSubService?.map((subService)=> 
            <div onClick={() => {
              handleActiveSubServices(subService);
            }} className={`border rounded-full px-5 py-1 text-semibold duration-300 ${toogleSubService === 1 ?  "bg-white text-black" : ""}`}>
              {subService}
            </div>
          )}
        </div>
      ): null }

      <form className="mx-6" onSubmit={handleLoginReq}>
        <div className="">
          <input
            size="large"
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={userData}
            placeholder="Name"
            className="w-full bg-transparent placeholder-white text-white px-3 py-2 my-2 border-t-0 border-x-0 border-b rounded-none focus:outline-none focus:border-brand-color"
            required
          />
          <input
            size="large"
            type="number"
            name="phone"
            id="phone"
            value={data.phone}
            onChange={userData}
            placeholder="Phone"
            className="w-full bg-transparent placeholder-white text-white px-3 py-2 my-2 border-t-0 border-x-0 border-b rounded-none focus:outline-none focus:border-brand-color"
            required
          />
          <input
            type="email"
            size="large"
            name="email"
            id="email"
            value={data.email}
            placeholder="E-mail"
            className="w-full bg-transparent placeholder-white text-white px-3 py-2 my-2 border-t-0 border-x-0 border-b rounded-none focus:outline-none focus:border-brand-color"
            onChange={userData}
            required
          />
          <input
            size="large"
            name="query"
            id="query"
            type="text"
            placeholder="How can we help you ?"
            value={data.query}
            className="w-full bg-transparent placeholder-white text-white px-3 py-2 my-2 border-t-0 border-x-0 border-b rounded-none border-gray-300 focus:outline-none focus:border-brand-color"
            onChange={userData}
            required
          />
        </div>

        <div className="my-6">
          <button
            type="submit"
            className="w-1/2 p-3 text-white font-medium bg-brand-color bg-opacity-80 hover:bg-opacity-100 rounded-full focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="flex justify-end text-sm mx-6">
        <p>
          01765-276560 <br />
          info@quadque.tech
        </p>
      </div>
    </div>
  );
};

export default StartProject;
