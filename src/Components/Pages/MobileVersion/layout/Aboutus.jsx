import React, { useEffect, useState } from "react";
import Interface from "../../../../asstes/Images/interface.png";
import { handleFetchCompanyGoals } from "../../../Shared/services";

const Aboutus = () => {
  const [goals, setGoals] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      const fetchGoals = await handleFetchCompanyGoals("1");
      if (fetchGoals) {
        setTimeout(() => {
          setLoader(false);
          setGoals(fetchGoals);
        }, 5000);
      }
      //console.log("goals data", goals);
    })();
  }, []);

  useEffect(() => {
    document.getElementById("bar").style.width = "0%";
  }, []);

  const myFunction = () => {
    const element = document.getElementById("scroll");
    // let y = element.scrollTop;

    document.getElementById("bar").style.width =
      (element.scrollTop / (element.scrollHeight - element.clientHeight)) *
        100 +
      "%";
  };

  return (
    <div id="About" className="w-full text-white my-5">
      <div className="font_title text-3xl font-thin px-6 pb-4">About us</div>
      <div className="text-lg font-semibold text-justify px-6">
        We work with the technological challenges of the world's leading
        enterprises and SMEs.
      </div>
      <div className="px-6 py-3 text-justify font-thin">
        Quadque Technology Pty. Limited is a leading IT solution provider
        company in Australia. Established in 2020, the Quadque team has built a
        longstanding reputation as being a highly rated Australian IT services
        company. Quadque is involved in designing, developing, implementing, and
        maintaining business application software and digital services for
        domestic and overseas areas. Over time, Quadque has also moved into more
        advanced technologies.{" "}
      </div>
      <div className="flex flex-wrap justify-between px-6 py-10">
        <div className="text-3xl">
          23+
          <p className="text-lg font-thin">Active Clients</p>
        </div>
        <div className="text-3xl">
          150+
          <p className="text-lg font-thin">Projects Done</p>
        </div>
        <div className="text-3xl">
          10+
          <p className="text-lg font-thin">Team Advisors</p>
        </div>
      </div>
      <div className="group pb-3">
        <div className="flex-wrap overflow-hidden">
          <img src={Interface} alt="" className="w-full duration-700" />
        </div>
        <div className="max-w-[100%] overflow-hidden">
          <div id="bar" className="h-2 bg-brand-color"></div>
          <div className="relative -top-2 w-[100%] h-2 bg-brand-color bg-opacity-25"></div>
        </div>
      </div>
      <div className="w-[80%] float-right h-[1px] bg-white mb-4"></div>

      <div
        id="scroll"
        onScroll={myFunction}
        className="w-full h-[350px] overflow-y-scroll text-justify m-auto px-6"
      >
        {loader ? (
          <div className="absolute w-[90%] h-[350px] z-40 flex justify-center items-center m-auto bg-black backdrop-blur-md">
            <div className="flex lds-dual-ring animate-pulse"> </div>
            <div className="font_title text-white text-sm font-thin px-2">
              Loading...
            </div>
          </div>
        ) : null}
        <div className="py-5">
          <div className="text-2xl text-brand-color">Our Vision</div>
          <div className="font-thin">{goals?.our_goal}</div>
        </div>
        <div className="py-5">
          <div className="text-2xl text-brand-color">Our Mission</div>
          <div className="font-thin">{goals?.our_mission}</div>
        </div>
        <div className="py-5">
          <div className="text-2xl text-brand-color">Our Objective</div>
          <div className="font-thin">{goals?.our_objective}</div>
        </div>
        <div className="py-5">
          <div className="text-2xl text-brand-color">Our Vision</div>
          <div className="font-thin">{goals?.our_vision}</div>
        </div>
        <div className="py-5">
          <div className="text-2xl text-brand-color">Who We Are</div>
          <div className="font-thin">{goals?.who_we_are}</div>
        </div>
        <div className="py-5">
          <div className="text-2xl text-brand-color">Why Choose Us</div>
          {/* <div>{goals?.why_choose_us}</div> */}
          <div
            className="case_editor font-thin"
            dangerouslySetInnerHTML={{ __html: goals?.why_choose_us }}
          ></div>
        </div>
      </div>
      <div className="w-[80%] h-[1px] bg-white mt-4"></div>
    </div>
  );
};

export default Aboutus;
