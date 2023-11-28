import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import ourGoal from "../../../../assets/Images/Our_Goal.gif";
import ourMission from "../../../../assets/Images/Our_Mission.gif";
import ourVission from "../../../../assets/Images/Our_Vission_1.gif";
import ourObjective from "../../../../assets/Images/Our_objective.gif";
import loaderFile from "../../../../assets/Lotties/loader.json";
import { useLocation } from "react-router-dom";
import { handleFetchCompanyGoals } from "../../../Shared/services";

const FirstSection = ({
  triggerAnimation,
  triggerTitleAnimation,
  loader,
  setLoader,
}) => {
  const location = useLocation();
  const [goals, setGoals] = useState();

  useEffect(() => {
    console.log('location',location);
    if (location.hash === "#about") {
      (async () => {
        const fetchAbout = await handleFetchCompanyGoals("1");

        console.log("fetchAbout", fetchAbout);

        if (fetchAbout?.id) {
          setLoader(false);
          setGoals(fetchAbout);
        }
      })();
    }
  }, [location.hash, setLoader]);

  return (
    <div id="about" name="about" className="section min-h-full font_primary">
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={
            "We are a leading IT company in Australia providing various digital solutions. Our services range from website and app development to software development."
          }
        />
        <meta name="keywords" content={goals?.meta_keyword} />
      </Helmet>

      <div className="w-full px-[22px] text-white flex justify-center overflow-hidden">
        <div className="min-w-full min-h-full ml-8 mr-4 mt-14 2xl:mt-20 overflow-hidden">
          <div className="mb-4 xl:mb-8">
            <div>
              <div
                className="text-5xl font-bold leading-10 capitalize font_title mb-8"
                style={{
                  letterSpacing: "0.06em",
                }}
              >
                <Fade right cascade spy={triggerTitleAnimation}>
                  <div className="text-4xl font-medium leading-[48px] font_title">
                    About us
                  </div>
                </Fade>
              </div>
            </div>
          </div>
          <div>
            {/* <div className="about_details border-gray-700 pr-12 xl:h-[50vh] 2xl:h-[60vh] w-[90%] py-1 overflow-hidden"> */}
            <div className="about_details border-gray-700 pr-12 xl:h-[50vh] 2xl:h-[60vh] min-w-full py-1 overflow-hidden">
              <Fade right cascade spy={triggerAnimation}>
                <div className="h-[53vh] xl:h-[46vh] 2xl:h-[48vh]">
                  <div className="grid grid-cols-4 gap-14 items-center justify-center">
                    <Fade right cascade spy={triggerAnimation}>
                      <div>
                        <div>
                          <img
                            className="w-[90%] mx-auto mb-6"
                            src={ourMission}
                            alt=""
                          />
                        </div>
                        <div className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer">
                          <div className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4 text-center pb-2">
                            Mission
                          </div>
                          <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-center break-keep">
                            {goals?.our_mission}
                          </p>
                        </div>
                      </div>

                      <div>
                        <div>
                          <img
                            className="w-[90%] mx-auto mb-6"
                            src={ourVission}
                            alt=""
                          />
                        </div>
                        <div className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer">
                          <div className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4 text-center pb-2">
                            Vision
                          </div>
                          <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-center">
                            {goals?.our_vision}
                          </p>
                        </div>
                      </div>

                      <div>
                        <div>
                          <img
                            className="w-[90%] mx-auto mb-6"
                            src={ourObjective}
                            alt=""
                          />
                        </div>
                        <div className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer">
                          <div className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4 text-center pb-2">
                            Objective
                          </div>
                          <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-center break-keep">
                            {goals?.our_objective}
                          </p>
                        </div>
                      </div>

                      <div>
                        <div>
                          <img
                            className="w-[90%] mx-auto mb-6"
                            src={ourGoal}
                            alt=""
                          />
                        </div>
                        <div className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer">
                          <div className="text-2xl font-bold leading-[100%] pl-4 text-center pb-2">
                            Goal
                          </div>
                          <div className="mt-2.5 text-white pl-4 text-center break-keep">
                            {goals?.our_goal}
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
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
            <div className="font_title text-3xl font-semibold text-white">
              Loading...
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FirstSection;
