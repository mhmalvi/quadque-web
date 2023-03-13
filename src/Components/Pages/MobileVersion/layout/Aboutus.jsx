import React, { useEffect, useState } from "react";
// import Interface from "../../../../asstes/Images/interface.png";

import mobileAboutCover from "../../../../asstes/Images/about_mobile.jpg";
import { handleFetchCompanyGoals } from "../../../Shared/services";
// import AboutusGif from "../../../../asstes/Images/who_we_are.gif";

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
    document.getElementById("bartop").style.width = "0%";
  }, []);

  const myFunction = () => {
    const element = document.getElementById("scroll");
    // let y = element.scrollTop;

    document.getElementById("bar").style.width =
      (element.scrollTop / (element.scrollHeight - element.clientHeight)) *
        100 +
      "%";
    document.getElementById("bartop").style.width =
      (element.scrollTop / (element.scrollHeight - element.clientHeight)) *
        100 +
      "%";
  };

  return (
    <div id="About" className="w-full text-white pt-20 font_primary">
      <h1 className="font_title text-3xl px-6 pb-4">ABOUT US</h1>
      <div className="text-lg font-semibold px-6">
        We work with the technological challenges of the world's leading
        enterprises and SMEs.
      </div>
      <div className="px-6 py-3">
        Quadque Technology Pty. Limited is a leading IT solution provider
        company in Australia. Established in 2020, the Quadque team has built a
        longstanding reputation as being a highly rated Australian IT services
        company. Quadque is involved in designing, developing, implementing, and
        maintaining business application software and digital services for
        domestic and overseas areas. Over time, Quadque has also moved into more
        advanced technologies.{" "}
      </div>
      <div className="flex flex-wrap justify-evenly p-6">
        <div className="text-3xl pb-3 px-2">
          <span className="font-semibold">23+</span>
          <p className="text-lg">
            Active <br /> Clients
          </p>
        </div>
        <div className="text-3xl pb-3 px-2">
          <span className="font-semibold">150+</span>
          <p className="text-lg">
            Projects <br /> Done
          </p>
        </div>
        <div className="text-3xl pb-3 px-2">
          <span className="font-semibold">10+</span>
          <p className="text-lg">
            Team <br /> Advisors
          </p>
        </div>
      </div>
      <div className="group pb-3">
        <div className="max-w-[100%] overflow-hidden rotate-180">
          <div id="bartop" className="h-2 bg-brand-color"></div>
          <div className="relative -top-2 w-[100%] h-2 bg-brand-color bg-opacity-25"></div>
        </div>
        <div className="flex-wrap overflow-hidden">
          <img
            src={mobileAboutCover}
            alt="About Cover"
            className="w-11/12 mx-auto duration-700 relative z-50"
          />
        </div>
        <div className="max-w-[100%] overflow-hidden">
          <div id="bar" className="h-2 bg-brand-color"></div>
          <div className="relative -top-2 w-[100%] h-2 bg-brand-color bg-opacity-25"></div>
        </div>
      </div>
      <div className="w-[80%] float-right h-[1px] bg-white mb-4"></div>

      <div className="w-full relative overflow-hidden">
        <div
          id="scroll"
          onScroll={myFunction}
          className="w-full h-[350px] overflow-y-scroll text-justify m-auto px-6 "
        >
          {loader ? (
            <div className="absolute w-[90%] h-full z-40 flex justify-center items-center m-auto bg-black">
              <div className="flex lds-dual-ring animate-pulse"> </div>
              <div className="font_title text-white text-sm font-thin px-2">
                Loading...
              </div>
            </div>
          ) : null}
          <div className="py-5">
            <div className="text-2xl text-brand-color pb-2">Who We Are</div>
            <div>{goals?.who_we_are}</div>
          </div>
          <div className="py-5">
            <div className="text-2xl text-brand-color pb-2">Why Choose Us</div>
            <div
              className="case_editor"
              dangerouslySetInnerHTML={{ __html: goals?.why_choose_us }}
            ></div>
          </div>
          <div className="py-5">
            <div className="text-2xl text-brand-color pb-2">Our Mission</div>
            <div>{goals?.our_mission}</div>
          </div>
          <div className="py-5">
            <div className="text-2xl text-brand-color pb-2">Our Vision</div>
            <div>{goals?.our_vision}</div>
          </div>
          <div className="py-5">
            <div className="text-2xl text-brand-color pb-2">Our Objective</div>
            <div>{goals?.our_objective}</div>
          </div>
          <div className="py-5">
            <div className="text-2xl text-brand-color pb-2">Our Goal</div>
            <div>{goals?.our_goal}</div>
          </div>
        </div>
      </div>
      <div className="w-[80%] h-[1px] bg-white mt-4"></div>
    </div>
  );
};

export default Aboutus;
