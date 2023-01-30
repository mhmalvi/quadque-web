import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import { useLocation } from "react-router-dom";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import { handleFetchCompanyGoals } from "../../../Shared/services";

const About = () => {
  const location = useLocation();
  const [sideBanner, setSideBanner] = useState(
    "https://i.ibb.co/QK246nC/Image-Box.png"
  );
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
    setSideBanner(banners[section]);
  };

  // const handleScrollAbout = () => {
  //   // setTriggerTitleAnimation(!triggerTitleAnimation);
  //   setTriggerAnimation(!triggerAnimation);

  //   if (scrollingIndex > 1) {
  //     setScrollingIndex(0);
  //   } else {
  //     setScrollingIndex(scrollingIndex + 1);
  //   }
  // };

  const handleScrollAbout = (indexNum) => {
    setTriggerAnimation(!triggerAnimation);
    setScrollingIndex(indexNum);
  };

  console.log(sideBanner);

  return (
    <div id="about" className="section min-h-full font-poppins">
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

      <div className="w-full pr-[22px] text-white flex justify-center">
        <img className="w-[44%] mr-16" src={sideBanner} alt="" />

        <div className="w-[60%] min-h-full ml-1 mt-21 2xl:mt-32">
          <div className="mb-4 xl:mb-8">
            <div>
              <Fade right cascade spy={triggerTitleAnimation}>
                <h1 className="text-[32px] font-medium leading-[48px] font_title">
                  About us
                </h1>
              </Fade>
            </div>
          </div>
          <div>
            {/* <div className="about_details border-r-2 border-gray-700 pr-12 w-[90%] lg:max-h-[70vh] 2xl:max-h-[75vh] mb-auto overflow-y-scroll py-1"> */}
            <div className="about_details border-gray-700 pr-12 xl:h-[40vh] 2xl:h-[50vh] w-[90%] py-1">
              <Fade right cascade spy={triggerAnimation}>

                <div className="block xl:hidden">
                  {scrollingIndex === 0 ? (
                    <>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(0)}
                      >
                        <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                          Our Vision
                        </h1>
                        <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4">
                          {goals?.our_vision}
                        </p>
                        <hr className="text-white my-4 2xl:my-12 py-0.5" />
                      </div>

                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(2)}
                      >
                        <div className="text-2xl font-bold leading-[100%] pl-4">
                          Our Goal
                        </div>
                        <div className="mt-2.5 text-white pl-4">
                          {goals?.our_goal}
                        </div>
                        <hr className="text-white my-4 2xl:my-12 py-0.5" />
                      </div>
                    </>
                  ) : null}

                  {scrollingIndex === 1 ? (
                    <div>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(3)}
                      >
                        {/* <Fade right cascade spy={triggerTitleAnimation}> */}
                        <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                          Our Objective
                        </h1>
                        <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep">
                          {goals?.our_objective}
                        </p>
                        {/* </Fade> */}
                        <hr className="text-white my-4 2xl:my-12 py-0.5" />
                      </div>

                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(1)}
                      >
                        <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                          Our Mission
                        </h1>
                        <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep">
                          {goals?.our_mission}
                        </p>
                        <hr className="text-white my-4 2xl:my-12 py-0.5" />
                      </div>
                    </div>
                  ) : null}
                  {scrollingIndex === 2 ? (
                    <div
                      className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                      onMouseOver={() => handleChangeBanner(4)}
                    >
                      {/* <Fade right cascade spy={triggerTitleAnimation}> */}
                      <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                        Who We Are
                      </h1>
                      <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep">
                        {goals?.who_we_are}
                      </p>
                      {/* </Fade> */}
                      <hr className="text-white my-4 2xl:my-12 py-0.5" />
                    </div>
                  ) : null}
                  {scrollingIndex === 3 ? (
                    <div
                      className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                      onMouseOver={() => handleChangeBanner(5)}
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
                      <hr className="text-white my-4 2xl:my-12 py-0.5" />
                    </div>
                  ) : null}
                </div>
                <div className="hidden xl:block">
                  {scrollingIndex === 0 ? (
                    <>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(0)}
                      >
                        <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                          Our Vision
                        </h1>
                        <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep">
                          {goals?.our_vision}
                        </p>
                        <hr className="text-white my-4 2xl:my-12 py-0.5" />
                      </div>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(1)}
                      >
                        <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                          Our Mission
                        </h1>
                        <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep">
                          {goals?.our_mission}
                        </p>
                        <hr className="text-white my-4 2xl:my-12 py-0.5" />
                      </div>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(2)}
                      >
                        <div className="text-2xl font-bold leading-[100%] pl-4">
                          Our Goal
                        </div>
                        <div className="mt-2.5 text-white pl-4 text-justify break-keep">
                          {goals?.our_goal}
                        </div>
                        <hr className="text-white my-4 2xl:my-12 py-0.5" />
                      </div>
                    </>
                  ) : null}

                  {scrollingIndex === 1 ? (
                    <div>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(3)}
                      >
                        {/* <Fade right cascade spy={triggerTitleAnimation}> */}
                        <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                          Our Objective
                        </h1>
                        <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep">
                          {goals?.our_objective}
                        </p>
                        {/* </Fade> */}
                        <hr className="text-white my-4 2xl:my-12 py-0.5" />
                      </div>
                      <div
                        className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                        onMouseOver={() => handleChangeBanner(4)}
                      >
                        {/* <Fade right cascade spy={triggerTitleAnimation}> */}
                        <h1 className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                          Who We Are
                        </h1>
                        <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep">
                          {goals?.who_we_are}
                        </p>
                        {/* </Fade> */}
                        <hr className="text-white my-4 2xl:my-12 py-0.5" />
                      </div>
                    </div>
                  ) : null}
                  {scrollingIndex === 2 ? (
                    <div
                      className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                      onMouseOver={() => handleChangeBanner(5)}
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
                      <hr className="text-white my-4 2xl:my-12 py-0.5" />
                    </div>
                  ) : null}
                </div>
              </Fade>

              <div className="w-36 ml-auto flex items-center justify-between">
                <div
                  className={`cursor-pointer hover:delay-300 hover:transition-all ${
                    scrollingIndex === 0
                      ? "bg-brand-color w-7 h-1.5"
                      : "bg-white w-6 h-1"
                  }`}
                  onClick={() => handleScrollAbout(0)}
                ></div>
                <div
                  className={`cursor-pointer hover:delay-300 hover:transition-all ${
                    scrollingIndex === 1
                      ? "bg-brand-color w-7 h-1.5"
                      : "bg-white w-6 h-1"
                  }`}
                  onClick={() => handleScrollAbout(1)}
                ></div>
                <div
                  className={`cursor-pointer hover:delay-300 hover:transition-all ${
                    scrollingIndex === 2
                      ? "bg-brand-color w-7 h-1.5"
                      : "bg-white w-6 h-1"
                  }`}
                  onClick={() => handleScrollAbout(2)}
                ></div>
                <div
                  className={`xl:hidden cursor-pointer hover:delay-300 hover:transition-all ${
                    scrollingIndex === 3
                      ? "bg-brand-color w-7 h-1.5"
                      : "bg-white w-6 h-1"
                  }`}
                  onClick={() => handleScrollAbout(3)}
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
  "https://i.ibb.co/1L3g5pj/HD-wallpaper-dark-blue-wall-plain-color-colors-light-themes-solid-galaxy.jpg",
  "https://i.ibb.co/KbV9LrW/3.jpg",
  "https://i.ibb.co/gvfjbvH/HD-wallpaper-blueish-or-bluish-solid-blue-color-minimalism-colors.jpg",
  "https://i.ibb.co/1L3g5pj/HD-wallpaper-dark-blue-wall-plain-color-colors-light-themes-solid-galaxy.jpg",
  "https://i.ibb.co/pwNTPMS/photo-1557683304-673a23048d34.jpg",
  "https://i.ibb.co/vBfkmvw/Aurometalsaurus-Solid-Color-Background-Wallpaper-for-Mobile-Phone-600x1067.png",
  "https://i.ibb.co/1L3g5pj/HD-wallpaper-dark-blue-wall-plain-color-colors-light-themes-solid-galaxy.jpg",
];
