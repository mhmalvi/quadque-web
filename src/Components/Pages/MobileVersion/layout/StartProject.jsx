import React, { useState } from "react";
import { Input, message } from "antd";

const StartProject = () => {
  const [toogleSubService, setToogleSubService] = useState();
  const [toogleService, setToogleService] = useState();
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    query: "",
  });

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

  const handleToogleService = (index) => {
    setToogleService(index);
  };

    const handleToogleSubService = (index) => {
    setToogleSubService(index);
  };

  return (
    <div className="w-full text-white mt-20 mb-5">
      <div className="text-3xl px-6 font-bold uppercase pb-8">
        START <br /> &nbsp; PROJECT
      </div>
      <div className="flex flex-wrap justify-between capitalize pb-8 px-6">
        <p
          onClick={() => {
            handleToogleService(1);
          }}
          className={`px-5 duration-300 ${toogleService === 1 ? "text-brand-color": ""}`}
        >
          UI & UX
        </p>
        <p
          onClick={() => {
            handleToogleService(2);
          }}
          className={`px-5 duration-300 ${toogleService === 2 ? "text-brand-color": ""}`}
        >
          AI & IoT Solutions
        </p>
        <p
          onClick={() => {
            handleToogleService(3);
          }}
          className={`px-5 duration-300 ${toogleService === 3 ? "text-brand-color": ""}`}
        >
          Digital Marketing
        </p>
        <p
          onClick={() => {
            handleToogleService(4);
          }}
          className={`px-5 duration-300 ${toogleService === 4 ? "text-brand-color": ""}`}
        >
          App Development
        </p>
        <p
          onClick={() => {
            handleToogleService(5);
          }}
          className={`px-5 duration-300 ${toogleService === 5 ? "text-brand-color": ""}`}
        >
          Web Development
        </p>
      </div>

      <div className="flex flex-wrap justify-between capitalize pb-8 px-6 gap-3">
        <div onClick={() => {
            handleToogleSubService(1);
          }} className={`border rounded-full px-5 py-1 text-semibold duration-300 ${toogleSubService === 1 ?  "bg-white text-black" : ""}`}>
          <p>Digital Marketing</p>
        </div>
        <div onClick={() => {
            handleToogleSubService(2);
          }} className={`border rounded-full px-5 py-1 text-semibold duration-300 ${toogleSubService === 2 ?  "bg-white text-black" : ""}`}>Google ADs</div>
        <div onClick={() => {
            handleToogleSubService(3);
          }} className={`border rounded-full px-5 py-1 text-semibold duration-300 ${toogleSubService === 3 ?  "bg-white text-black" : ""}`}>
          social media Marketing
        </div>
        <div onClick={() => {
            handleToogleSubService(4);
          }} className={`border rounded-full px-5 py-1 text-semibold duration-300 ${toogleSubService === 4 ?  "bg-white text-black" : ""}`}>
          Specific Apps marketing
        </div>
      </div>

      <form className="mx-6" onSubmit={handleLoginReq}>
        <div className="">
          <Input
            size="large"
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={userData}
            placeholder="Name"
            className="w-full bg-transparent placeholder-white text-white px-3 py-2 my-2 border-t-0 border-x-0 rounded-none focus:outline-none focus:border-brand-color"
            required
          />
          <Input
            size="large"
            type="number"
            name="phone"
            id="phone"
            value={data.phone}
            onChange={userData}
            placeholder="Phone"
            className="w-full bg-transparent placeholder-white text-white px-3 py-2 my-2 border-t-0 border-x-0 rounded-none focus:outline-none focus:border-brand-color"
            required
          />
          <Input
            type="email"
            size="large"
            name="email"
            id="email"
            value={data.email}
            placeholder="E-mail"
            className="w-full bg-transparent placeholder-white text-whitepy-2 my-2 border-t-0 border-x-0 rounded-none border-gray-300 focus:outline-none focus:border-brand-color"
            onChange={userData}
            required
          />
          <Input
            size="large"
            name="query"
            id="query"
            type="text"
            placeholder="How can we help you ?"
            value={data.query}
            className="w-full bg-transparent placeholder-white text-white py-2 my-2 border-t-0 border-x-0 rounded-none border-gray-300 focus:outline-none focus:border-brand-color"
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
          +61405899496 <br />
          info@quadque.tech
        </p>
      </div>
    </div>
  );
};

export default StartProject;
