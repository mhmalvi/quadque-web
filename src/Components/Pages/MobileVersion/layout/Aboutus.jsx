import React, { useEffect, useState } from "react";
import Interface from "../../../../asstes/Images/interface.png";
import { handleFetchCompanyGoals } from "../../../Shared/services";

const Aboutus = () => {
  const [goals, setGoals] = useState();

  useEffect(() => {
    (async () => {
      const fetchGoals = await handleFetchCompanyGoals('1');
      setGoals(fetchGoals);
      //console.log("goals data", goals);
    })();
  }, []);
  

  useEffect(() => {
    document.getElementById("bar").style.width="0%"
  }, [])
  

  const myFunction = () => {
    const element = document.getElementById("scroll");
    let y = element.scrollTop;
    
    document.getElementById("bar").style.width = (element.scrollTop) / (element.scrollHeight - element.clientHeight ) * 100 + "%";

  };

  return (
    <div id="About" className="w-full text-white my-5">
      <div className="text-3xl font-thin px-6 pb-4">About us</div>
      <div className="group pb-3">
        <div className="flex-wrap overflow-hidden">
          <img src={Interface} alt="" className="w-full duration-700" />
        </div>
        <div className="max-w-[500px] overflow-hidden">
          <div id="bar" className="h-2 bg-brand-color"></div>
          <div className="relative -top-2 w-[100%] h-2 bg-brand-color bg-opacity-25"></div>
        </div>
      </div>
      <div className="w-[80%] float-right h-[1px] bg-white mb-4"></div>

      <div
        id="scroll"
        onScroll={myFunction}
        className="w-[400px] h-[350px] overflow-y-scroll m-auto px-6"
      >
        <div className="py-5">
          <div className="text-2xl text-brand-color">
            Our Vision
          </div>
          <div>
            {goals?.our_goal}
          </div>
        </div>
        <div className="py-5">
          <div className="text-2xl text-brand-color">
            Our Mission
          </div>
          <div>
            {goals?.our_mission}
          </div>
        </div>
        <div className="py-5">
          <div className="text-2xl text-brand-color">
            Our Objective
          </div>
          <div>
            {goals?.our_objective}
          </div>
        </div>
        <div className="py-5">
          <div className="text-2xl text-brand-color">
            Our Vision
          </div>
          <div>
            {goals?.our_vision}
          </div>
        </div>
        <div className="py-5">
          <div className="text-2xl text-brand-color">
            Who We Are
          </div>
          <div>
            {goals?.who_we_are}
          </div>
        </div>
        <div className="py-5">
          <div className="text-2xl text-brand-color">
            Why Choose Us
          </div>
          <div>
            {goals?.why_choose_us}
          </div>
        </div>
      </div>
            <div className="w-[80%] h-[1px] bg-white mt-4"></div>
    </div>
  );
};

export default Aboutus;
