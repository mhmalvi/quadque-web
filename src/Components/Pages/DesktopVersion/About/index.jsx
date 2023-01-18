import React, { useEffect, useState } from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import { useLocation } from "react-router-dom";
import { handleFetchCompanyGoals } from "../../../Shared/services";
import { Helmet } from "react-helmet";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import Lottie from "lottie-react";

const About = () => {
  const location = useLocation();
  const [sideBanner, setSideBanner] = useState(
    "https://i.ibb.co/QK246nC/Image-Box.png"
  );
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [goals, setGoals] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      const fetchAbout = await handleFetchCompanyGoals("1");
      setGoals(fetchAbout);
    })();
  }, []);

  useEffect(() => {
    if (location.hash === "#about") {
      setTimeout(() => {
        setLoader(false);
        setTriggerAnimation(!triggerAnimation);
        setTriggerTitleAnimation(!triggerTitleAnimation);
      }, 800);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  const handleChangeBanner = (section) => {
    setSideBanner(banners[section]);
  };

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

      <div className="w-full pr-[22px] text-white flex justify-center items-end">
        <img className="w-[44%] mr-16" src={sideBanner} alt="" />

        <div className="w-[60%] min-h-full ml-1 ">
          <div className="mb-8">
            <div>
              <Flip left cascade spy={triggerTitleAnimation}>
                <h1 className="text-[32px] font-medium leading-[48px] font_title">
                  About us
                </h1>
              </Flip>
            </div>
          </div>
          <div className="h-full">
            <div className="about_details border-r-2 border-gray-700 pr-12 w-[90%] lg:max-h-[70vh] 2xl:max-h-[75vh] mt-auto overflow-y-scroll py-1">
              <div
                className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                onMouseOver={() => handleChangeBanner(0)}
              >
                <Fade right cascade spy={triggerTitleAnimation}>
                  <h2 className="text-2xl font-bold leading-[100%] pl-4">
                    Our Vision
                  </h2>
                  <p className="mt-2.5 text-white pl-4">{goals?.our_vision}</p>
                </Fade>
                <hr className="text-white my-12 py-0.5" />
              </div>
              <div
                className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                onMouseOver={() => handleChangeBanner(1)}
              >
                <Fade right cascade spy={triggerTitleAnimation}>
                  <h2 className="text-2xl font-bold leading-[100%] pl-4">
                    Our Mission
                  </h2>
                  <p className="mt-2.5 text-white pl-4">{goals?.our_mission}</p>
                </Fade>
                <hr className="text-white my-12 py-0.5" />
              </div>
              <div
                className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                onMouseOver={() => handleChangeBanner(2)}
              >
                <Fade right cascade spy={triggerTitleAnimation}>
                  <h2 className="text-2xl font-bold leading-[100%] pl-4">
                    Our Goal
                  </h2>
                  <p className="mt-2.5 text-white pl-4">{goals?.our_goal}</p>
                </Fade>
                <hr className="text-white my-12 py-0.5" />
              </div>

              <div
                className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                onMouseOver={() => handleChangeBanner(3)}
              >
                <Fade right cascade spy={triggerTitleAnimation}>
                  <h2 className="text-2xl font-bold leading-[100%] pl-4">
                    Our Objective
                  </h2>
                  <p className="mt-2.5 text-white pl-4">
                    {goals?.our_objective}
                  </p>
                </Fade>
                <hr className="text-white my-12 py-0.5" />
              </div>

              <div
                className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                onMouseOver={() => handleChangeBanner(4)}
              >
                <Fade right cascade spy={triggerTitleAnimation}>
                  <h2 className="text-2xl font-bold leading-[100%] pl-4">
                    Who We Are
                  </h2>
                  <p className="mt-2.5 text-white pl-4">{goals?.who_we_are}</p>
                </Fade>
                <hr className="text-white my-12 py-0.5" />
              </div>

              <div
                className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                onMouseOver={() => handleChangeBanner(5)}
              >
                <Fade right cascade spy={triggerTitleAnimation}>
                  <h2 className="text-2xl font-bold leading-[100%] pl-4">
                    Why Choose Us
                  </h2>
                  <p
                    className="text-white pl-4 mt-2.5"
                    dangerouslySetInnerHTML={{ __html: goals?.why_choose_us }}
                  ></p>
                </Fade>
                <hr className="text-white my-12 py-0.5" />
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
