import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import whoWerAre from "../../../../asstes/Images/who_we_are.gif";
import whyChooseUs from "../../../../asstes/Images/why_choose_us.gif";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import { useLocation } from "react-router-dom";
import { handleFetchCompanyGoals } from "../../../Shared/services";

const SecondSection = ({
  triggerAnimation,
  triggerTitleAnimation,
  loader,
  setLoader,
}) => {
  const location = useLocation();
  const [aboutDetails, setAboutDetails] = useState();

  useEffect(() => {
    if (location.hash === "#who-we-are") {
      (async () => {
        const fetchAbout = await handleFetchCompanyGoals("1");

        if (fetchAbout?.id) {
          setLoader(false);
          setAboutDetails(fetchAbout);
        }
      })();
    }
  }, [location.hash, setLoader]);

  return (
    <div
      id="who-we-are"
      name="who-we-are"
      className="section min-h-full font_primary"
    >
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={
            "We are a leading IT company in Australia providing various digital solutions. Our services range from website and app development to software development."
          }
        />
        <meta name="keywords" content={aboutDetails?.meta_keyword} />
      </Helmet>

      <div className="w-full px-[22px] text-white flex justify-center overflow-hidden">
        <div className="min-w-full min-h-full ml-8 mr-4 mt-14 2xl:mt-20 overflow-hidden">
          {/* <div className="mb-4 xl:mb-8">
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
          </div> */}
          <div>
            <div className="about_details border-gray-700 pr-12 xl:h-[50vh] 2xl:h-[82vh] min-w-full py-1 overflow-hidden">
              <Fade right cascade spy={triggerAnimation}>
                <div>
                  <div className="grid grid-cols-2 gap-14 justify-center">
                    <Fade right cascade spy={triggerAnimation}>
                      <div>
                        <div>
                          <img
                            className="w-[55%] mx-auto"
                            src={whoWerAre}
                            alt=""
                          />
                        </div>
                        <div className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer -mt-14">
                          <div className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                            Who We Are
                          </div>
                          <p className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep">
                            {aboutDetails?.who_we_are}
                          </p>
                        </div>
                      </div>

                      <div>
                        <div>
                          <img
                            className="w-[80%]  mx-auto "
                            src={whyChooseUs}
                            alt=""
                          />
                        </div>
                        <div className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer">
                          <div className="text-xl 2xl:text-2xl font-bold leading-[100%] pl-4">
                            Why Choose Use
                          </div>
                          <p
                            className="mt-2.5 text-white text-sm 2xl:text-base pl-4 text-justify break-keep"
                            dangerouslySetInnerHTML={{
                              __html: aboutDetails?.why_choose_us,
                            }}
                          ></p>
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

export default SecondSection;
