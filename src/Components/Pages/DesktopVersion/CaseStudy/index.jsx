import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Fade, Flip } from "react-reveal";
import { Link, useLocation } from "react-router-dom";
import Typical from "react-typical";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import useCaseStudy from "../../../Shared/Hooks/useCaseStudy";
import Icons from "../../../Shared/Icons";

const CaseStudy = () => {
  const location = useLocation();
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [caseStudyName, setCaseStudyName] = useState("");
  const [caseStudy] = useCaseStudy();
  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const synth = window.speechSynthesis;

  useEffect(() => {
    if (location.hash === "#case-study") {
      synth.cancel();

      setTimeout(() => {
        setTriggerAnimation(true);
        setTriggerTitleAnimation(true);
      }, 800);

      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  // useEffect(() => {
  //   (async () => {
  //     const response = await handleFetchCaseStudiesDesktop();
  //     if (response?.status === 200) {
  //       setCaseStudies(response?.data);
  //     }
  //   })();
  // }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = caseStudy?.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      {/* For SEO */}
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Check out our case studies to see how we help businesses with our digital services. These case studies can help you to understand our approach."
        />
        <meta
          name="keywords"
          content="web development services, Software Development services , web and mobile app development services , digital marketing services, ui ux design and development services, online it support services, it services online, it services online"
        />
      </Helmet>

      <div
        id="case_study"
        className="section relative w-full min-h-full lg:pb-10 2xl:pb-12 font_primary"
      >
        <div className="absolute top-0 lg:pt-7 2xl:py-[100px] pl-[68px] pr-[22px] text-white">
          <div
            className="text-5xl font-bold leading-10 capitalize font_title mb-8"
            style={{
              letterSpacing: "0.06em",
            }}
          >
            <Fade left spy={triggerTitleAnimation}>
              <div className="leading-10">Case</div>
              <div className="ml-8 leading-10">Studies</div>
            </Fade>
          </div>

          {/* <Fade left cascade spy={triggerTitleAnimation}>
            <h1
              className="lg:text-3xl 2xl:text-4xl font-extrabold leading-10 text-white mb-5 font_title"
              style={{
                letterSpacing: "0.2em",
              }}
            >
              Case
            </h1>
            <h1
              style={{
                letterSpacing: "0.2em",
              }}
              className="ml-8 lg:text-3xl 2xl:text-4xl font-extrabold leading-10 text-white mb-5 font_title"
            >
              STUDY
            </h1>
          </Fade> */}
          <div
            className="max-w-[280px] xl:max-w-[400px] text-justify lg:text-sm 2xl:text-base leading-5 text-white ml-4 font-light"
            style={{
              letterSpacing: "0.04em",
              wordBreak: "keep-all",
            }}
          >
            <Fade left cascade spy={triggerTitleAnimation}>
              <div className="break-keep">
                Let’s have a look at some of our interesting case study
                examples.
              </div>
              <div className="break-keep">
                These case studies will let you better understand how we tackle
                critical challenges to help companies grow.
              </div>
            </Fade>
          </div>
        </div>

        <div className="w-64 absolute bottom-40 2xl:bottom-80 left-20">
          <Fade left spy={caseStudyName}>
            {caseStudyName !== "" && (
              <Typical
                className="text-lg text-center text-white font_title p-3 rounded-md backdrop-filter backdrop-blur-xl bg-gradient-to-tr bg-opacity-20 from-brand-color/20 ..."
                steps={[...caseStudyName?.split(" "), caseStudyName]}
                // steps={[]}
                // loop={1}
                wrapper="h1"
              />

              // <h1 className="text-lg text-center text-white font_title p-3 rounded-md backdrop-filter backdrop-blur-xl bg-gradient-to-tr bg-opacity-20 from-brand-color/20 ...">
              //   {caseStudyName}
              // </h1>
            )}
          </Fade>
        </div>

        <div className="w-full min-h-[80vh] flex justify-end items-end pr-16">
          <div className="lg:w-[650px] xl:w-9/12 grid lg:gap-4 2xl:gap-6 ml-auto mt-auto lg:grid-cols-4 2xl:grid-cols-4 overflow-hidden">
            <div className="relative lg:h-44 lg:w-38 xl:h-50 xl:w-44 2xl:h-74 2xl:w-64 rounded-md">
              &nbsp;
            </div>
            {currentPosts?.map((post, i) => (
              <Flip spy={triggerAnimation}>
                {/* <Tooltip
                   key={post?.id}
                   title={`Learn More ${post?.com_name}`}
                   placement="top"
                   color={"rgba(90, 90, 90, 0.7)"}
                 > */}
                <Link
                  to={`case-study/${post?.slug}`}
                  key={i}
                  onMouseOver={() => setCaseStudyName(post?.com_name)}
                  onMouseOut={() => setCaseStudyName("")}
                  className="relative lg:h-44 lg:w-38 xl:h-50 xl:w-44 2xl:h-72 2xl:w-64 rounded-md cursor-pointer "
                >
                  <div className="min-h-full min-w-full backdrop-filter backdrop-blur-xl bg-gradient-to-tr bg-opacity-20 from-brand-color/20 ... rounded-md"></div>
                  {/* <div className="min-h-full min-w-full backdrop-filter backdrop-blur-xl rounded-md"></div> */}
                  <div className="w-full h-full absolute top-0 flex justify-center items-center border border-brand-color/30">
                    <img
                      className="w-9/12 m-auto rounded-md "
                      src={
                        process.env.REACT_APP_ASSETS_URL + "/" + post?.com_image
                      }
                      // src={"https://i.ibb.co/MBM0f55/ibm-1.png"}
                      alt=""
                    />
                    {/* <p className="absolute h-10 w-full bottom-0 border text-center font-normal rounded-br-[20px] rounded-bl-[20px] lg:text-xs 2xl:text-sm leading-5 pt-2 text-white bg-gray-700 bg-opacity-60 backdrop-blur-sm">
                        {post?.com_name}
                      </p> */}
                  </div>
                </Link>
                {/* </Tooltip> */}
              </Flip>
            ))}

            <div
              className="relative lg:h-44 lg:w-40 xl:h-50 xl:w-44 2xl:h-74
            2xl:w-64 rounded-md flex justify-center items-center"
            >
              {currentPage > 1 ? (
                <div className="bg-gradient-to-r from-[#6359A5] to-zinc-700 rounded-full p-0.5">
                  <Icons.AppleRightArrow
                    className="w-10 2xl:w-14 rotate-180 cursor-pointer text-gray-400 bg-black rounded-full hover:text-gray-500"
                    onClick={() => {
                      setCurrentPage(currentPage - 1);
                    }}
                  />
                </div>
              ) : null}
              {currentPage < Math.ceil(caseStudy?.length / 6) ? (
                <div className="bg-gradient-to-r from-[#6359A5] to-zinc-700 rounded-full p-0.5 ml-6">
                  <Icons.AppleRightArrow
                    className="w-10 2xl:w-14 cursor-pointer text-gray-400 bg-black rounded-full hover:text-gray-500"
                    onClick={() => {
                      setCurrentPage(currentPage + 1);
                      setTriggerAnimation(!triggerAnimation);
                    }}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <a href="#start-project" className="absolute top-8 right-8">
          <span className="relative  flex justify-center items-center h-4 w-4 cursor-pointer">
            <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
          </span>
        </a>

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
    </>
  );
};

export default CaseStudy;
