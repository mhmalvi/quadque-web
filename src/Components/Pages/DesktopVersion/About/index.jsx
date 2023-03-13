import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import { useLocation } from "react-router-dom";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import { handleFetchCompanyGoals } from "../../../Shared/services";
import mainAbout from "../../../../asstes/Images/about_us_2.gif";
import ourGoal from "../../../../asstes/Images/Our_Goal.gif";
import ourMission from "../../../../asstes/Images/Our_Mission.gif";
import ourObjective from "../../../../asstes/Images/Our_objective.gif";
import ourVission from "../../../../asstes/Images/Our_Vission_1.gif";
import whoWerAre from "../../../../asstes/Images/who_we_are.gif";
import whyChooseUs from "../../../../asstes/Images/why_choose_us.gif";

const About = () => {
  const location = useLocation();
  const [sideBanner, setSideBanner] = useState(banners[0]);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [goals, setGoals] = useState();
  const [loader, setLoader] = useState(true);
  const [scrollingIndex, setScrollingIndex] = useState(0);
  const synth = window.speechSynthesis;

  useEffect(() => {
    (async () => {
      const fetchAbout = await handleFetchCompanyGoals("1");
      setGoals(fetchAbout);
    })();
  }, []);

  useEffect(() => {
    if (location.hash === "#about") {
      synth.cancel();
      setTimeout(() => {
        setLoader(false);
        setTriggerAnimation(true);
        setTriggerTitleAnimation(true);
      }, 800);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  const handleChangeBanner = (section) => {
    console.log(banners[section]);
    setSideBanner(banners[section]);
  };

  const handleScrollAbout = (indexNum) => {
    if (scrollingIndex === indexNum) {
      return;
    } else {
      setTriggerAnimation(!triggerAnimation);
      setScrollingIndex(indexNum);
    }
  };

  return (
    <div id="about" className="section min-h-full font_primary">
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

      <div className="w-full pr-[22px] text-white flex justify-center overflow-hidden">
        <div className="w-[40%] min-h-full flex justify-center items-center">
          <img className="w-[80%] mx-auto pr-16" src={sideBanner} alt="" />
        </div>

        <div className="w-[60%] min-h-full ml-1 mt-14 2xl:mt-32 overflow-hidden">
          <div className="mb-4 xl:mb-8">
            <div>
              <div
                className="text-5xl font-bold leading-10 capitalize font_title mb-8"
                style={{
                  letterSpacing: "0.06em",
                }}
              >
                <Fade right cascade spy={triggerTitleAnimation}>
                  <h1 className="text-4xl font-medium leading-[48px] font_title">
                    About us
                  </h1>
                </Fade>
              </div>
            </div>
          </div>
          <div>
            {/* <div className="about_details border-r-2 border-gray-700 pr-12 w-[90%] lg:max-h-[70vh] 2xl:max-h-[75vh] mb-auto overflow-y-scroll py-1"> */}
            <div className="about_details border-gray-700 pr-12 xl:h-[50vh] 2xl:h-[60vh] w-[90%] py-1 overflow-hidden">
              <Fade right cascade spy={triggerAnimation}>
                <div className="h-[53vh] xl:h-[46vh] 2xl:h-[48vh]">
                  {scrollingIndex === 0 ? (
                    <div
                      className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                      onMouseOver={() => handleChangeBanner(5)}
                    >
                      <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                        Who We Are
                      </h1>
                      <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep">
                        {goals?.who_we_are}
                      </p>
                      <div
                        className="w-full bg-gray-400 my-4 2xl:my-12"
                        style={{
                          height: "0.5px",
                        }}
                      ></div>
                    </div>
                  ) : null}

                  {scrollingIndex === 1 ? (
                    // <div>
                    //   <div
                    //     className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                    //     onMouseOver={() => handleChangeBanner(3)}
                    //     //onMouseOut={() => handleChangeBanner(0)}
                    //   >
                    //     <div className="text-2xl font-bold leading-[100%] pl-4">
                    //       Our Goal
                    //     </div>
                    //     <div className="mt-2.5 text-white pl-4">
                    //       {goals?.our_goal}
                    //     </div>
                    //     <div
                    //       className="w-full bg-gray-400 my-4 2xl:my-12"
                    //       style={{
                    //         height: "0.5px",
                    //       }}
                    //     ></div>
                    //   </div>

                    //   <div
                    //     className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                    //     onMouseOver={() => handleChangeBanner(4)}
                    //     //onMouseOut={() => handleChangeBanner(0)}
                    //   >
                    //     {/* <Fade right cascade spy={triggerTitleAnimation}> */}
                    //     <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                    //       Our Objective
                    //     </h1>
                    //     <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep">
                    //       {goals?.our_objective}
                    //     </p>
                    //     {/* </Fade> */}
                    //     <div
                    //       className="w-full bg-gray-400 my-4 2xl:my-12"
                    //       style={{
                    //         height: "0.5px",
                    //       }}
                    //     ></div>
                    //   </div>
                    // </div>
                    <div
                      className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                      onMouseOver={() => handleChangeBanner(6)}
                      //onMouseOut={() => handleChangeBanner(0)}
                    >
                      <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                        Why Choose Us
                      </h1>
                      <p
                        className="text-white text-sm 2xl:text-base pl-4 mt-2.5 text-justify break-keep"
                        dangerouslySetInnerHTML={{
                          __html: goals?.why_choose_us,
                        }}
                      ></p>
                      <div
                        className="w-full bg-gray-400 my-4 2xl:my-12"
                        style={{
                          height: "0.5px",
                        }}
                      ></div>
                    </div>
                  ) : null}
                  {scrollingIndex === 2 ? (
                    <div>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(2)}
                        //onMouseOut={() => handleChangeBanner(0)}
                      >
                        <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                          Our Mission
                        </h1>
                        <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep">
                          {goals?.our_mission}
                        </p>
                        <div
                          className="w-full bg-gray-400 my-4 2xl:my-12"
                          style={{
                            height: "0.5px",
                          }}
                        ></div>
                      </div>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(1)}
                      >
                        <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                          Our Vision
                        </h1>
                        <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4">
                          {goals?.our_vision}
                        </p>
                        <hr className=" text-white text-opacity-30 my-4 2xl:my-12 py-0.5" />
                      </div>
                    </div>
                  ) : null}
                  {scrollingIndex === 3 ? (
                    <div>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(4)}
                        //onMouseOut={() => handleChangeBanner(0)}
                      >
                        {/* <Fade right cascade spy={triggerTitleAnimation}> */}
                        <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                          Our Objective
                        </h1>
                        <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep">
                          {goals?.our_objective}
                        </p>
                        <div
                          className="w-full bg-gray-400 my-4 2xl:my-12"
                          style={{
                            height: "0.5px",
                          }}
                        ></div>
                      </div>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(3)}
                        //onMouseOut={() => handleChangeBanner(0)}
                      >
                        <div className="text-2xl font-bold leading-[100%] pl-4">
                          Our Goal
                        </div>
                        <div className="mt-2.5 text-white pl-4 text-justify break-keep">
                          {goals?.our_goal}
                        </div>
                        <div
                          className="w-full bg-gray-400 my-4 2xl:my-12"
                          style={{
                            height: "0.5px",
                          }}
                        ></div>
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* For Larger Screen */}
                {/* <div className="hidden xl:block h-[50vh]">
                  {scrollingIndex === 0 ? (
                    <>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(5)}
                      >
                        <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                          Who We Are
                        </h1>
                        <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep">
                          {goals?.who_we_are}
                        </p>
                        <div
                          className="w-full bg-gray-400 my-4 2xl:my-12"
                          style={{
                            height: "0.5px",
                          }}
                        ></div>
                      </div>
                    </>
                  ) : null}

                  {scrollingIndex === 1 ? (
                    <div
                      className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                      onMouseOver={() => handleChangeBanner(6)}
                    >
                      <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                        Why Choose Us
                      </h1>
                      <p
                        className="text-white text-sm 2xl:text-base pl-4 mt-2.5 text-justify break-keep"
                        dangerouslySetInnerHTML={{
                          __html: goals?.why_choose_us,
                        }}
                      ></p>
                      <div
                        className="w-full bg-gray-400 my-4 2xl:my-12"
                        style={{
                          height: "0.5px",
                        }}
                      ></div>
                    </div>
                  ) : null}

                  {scrollingIndex === 2 ? (
                    <div>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(2)}
                      >
                        <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                          Our Mission
                        </h1>
                        <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep">
                          {goals?.our_mission}
                        </p>
                        <div
                          className="w-full bg-gray-400 my-4 2xl:my-12"
                          style={{
                            height: "0.5px",
                          }}
                        ></div>
                      </div>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(1)}
                      >
                        <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                          Our Vision
                        </h1>
                        <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4">
                          {goals?.our_vision}
                        </p>
                        <hr className=" text-white text-opacity-30 my-4 2xl:my-12 py-0.5" />
                      </div>
                    </div>
                  ) : null}
                  {scrollingIndex === 3 ? (
                    <div>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(4)}
                      >
                        <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                          Our Objective
                        </h1>
                        <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep">
                          {goals?.our_objective}
                        </p>
                        <div
                          className="w-full bg-gray-400 my-4 2xl:my-12"
                          style={{
                            height: "0.5px",
                          }}
                        ></div>
                      </div>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(3)}
                      >
                        <div className="text-2xl font-bold leading-[100%] pl-4">
                          Our Goal
                        </div>
                        <div className="mt-2.5 text-white pl-4 text-justify break-keep">
                          {goals?.our_goal}
                        </div>
                        <div
                          className="w-full bg-gray-400 my-4 2xl:my-12"
                          style={{
                            height: "0.5px",
                          }}
                        ></div>
                      </div>
                    </div>
                  ) : null}
                </div> */}
              </Fade>

              <div className="w-48 ml-auto flex items-center justify-between">
                <div
                  className={`cursor-pointer hover:delay-300 hover:transition-all w-10 h-4 rounded-full ${
                    scrollingIndex === 0 ? "bg-brand-color" : "bg-white"
                  }`}
                  onMouseOver={() => {
                    handleScrollAbout(0);
                    handleChangeBanner(5);
                  }}
                ></div>
                <div
                  className={`cursor-pointer hover:delay-300 hover:transition-all w-10 h-4 rounded-full ${
                    scrollingIndex === 1 ? "bg-brand-color" : "bg-white"
                  }`}
                  onMouseOver={() => {
                    handleScrollAbout(1);
                    handleChangeBanner(6);
                  }}
                ></div>
                <div
                  className={`cursor-pointer hover:delay-300 hover:transition-all w-10 h-4 rounded-full ${
                    scrollingIndex === 2 ? "bg-brand-color" : "bg-white"
                  }`}
                  onMouseOver={() => {
                    handleScrollAbout(2);
                    handleChangeBanner(2);
                  }}
                ></div>
                <div
                  className={`cursor-pointer hover:delay-300 hover:transition-all w-10 h-4 rounded-full ${
                    scrollingIndex === 3 ? "bg-brand-color" : "bg-white"
                  }`}
                  onMouseOver={() => {
                    handleScrollAbout(3);
                    handleChangeBanner(4);
                  }}
                ></div>
              </div>
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
            <h1 className="font_title text-3xl font-semibold text-white">
              Loading...
            </h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default About;

const banners = [
  whoWerAre,
  ourVission,
  ourMission,
  ourGoal,
  ourObjective,
  whoWerAre,
  whyChooseUs,
];
