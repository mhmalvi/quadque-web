import React, { useState } from "react";
import { Input, message } from "antd";

const StartProject = () => {
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

  return (
    <div className="w-full text-white mt-20 mb-5">
      <div className="text-3xl px-6 font-bold uppercase pb-8">
        START <br /> &nbsp; PROJECT
      </div>
      <div className="flex flex-wrap justify-between capitalize pb-8 px-6">
        <p className="px-5">UI & UX</p>
        <p className="px-5">AI & IoT Solutions</p>
        <p className="px-5">Digital Marketing</p>
        <p className="px-5">App Development</p>
        <p className="px-5">Web Development</p>
      </div>

      <div className="flex flex-wrap justify-between capitalize pb-8 px-6 gap-3">
        <div className="border rounded-full px-5 py-1">
          <p>Digital Marketing</p>
        </div>
        <div className="border rounded-full px-5 py-1">Google ADs</div>
        <div className="border rounded-full px-5 py-1">
          social media Marketing
        </div>
        <div className="border rounded-full px-5 py-1">
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
        <p>+61405899496 <br />info@quadque.tech</p>
      </div>
    </div>
  );
};

export default StartProject;
