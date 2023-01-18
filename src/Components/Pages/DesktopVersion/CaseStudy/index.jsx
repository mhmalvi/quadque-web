import { Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import Flip from "react-reveal/Flip";
import { Link, useLocation } from "react-router-dom";
import useCaseStudy from "../../../Shared/Hooks/useCaseStudy";
import Icons from "../../../Shared/Icons";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import Lottie from "lottie-react";

const CaseStudy = () => {
  const location = useLocation();
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [caseStudy] = useCaseStudy();
  const [loader, setLoader] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    if (location.hash === "#case-study") {
      setTimeout(() => {
        setTriggerAnimation(!triggerAnimation);
        setTriggerTitleAnimation(!triggerTitleAnimation);
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
    <div
      id="case_study"
      className="section relative w-full min-h-full lg:pb-10 2xl:pb-12 font-poppins"
    >
      <div className="absolute top-0 lg:pt-7 2xl:py-[100px] pl-[68px] pr-[22px] text-white">
        <Flip left cascade spy={triggerTitleAnimation}>
          <h1
            className="lg:text-3xl 2xl:text-[32px] font-extrabold leading-10 text-white mb-5 font_title"
            style={{
              letterSpacing: "0.2em",
            }}
          >
            Case Study
          </h1>
        </Flip>
        <div
          className="lg:text-sm 2xl:text-base leading-5 text-white ml-4 font-light"
          style={{
            letterSpacing: "0.04em",
          }}
        >
          <Flip left cascade spy={triggerTitleAnimation}>
            <div>We create premium web</div>
            <div>design, though and user</div>
          </Flip>
        </div>
      </div>

      <div className="w-full min-h-[80vh] flex justify-end items-end pr-16">
        <div className="lg:w-[650px] xl:w-9/12 grid lg:gap-4 2xl:gap-6 ml-auto mt-auto lg:grid-cols-4 2xl:grid-cols-4">
          <div className="relative lg:h-44 lg:w-38 xl:h-50 xl:w-44 2xl:h-74 2xl:w-64 rounded-[20px]">
            &nbsp;
          </div>
          {currentPosts?.map((post, i) => (
            <Flip left spy={triggerAnimation}>
              <Tooltip
                key={post?.id}
                title={`Learn More ${post?.com_name}`}
                placement="top"
                color={"#8F00FF"}
              >
                <Link
                  to={`case-studies/${post?.slug}`}
                  key={i}
                  className="relative lg:h-44 lg:w-38 xl:h-50 xl:w-44 2xl:h-74 2xl:w-64 rounded-[20px] cursor-pointer"
                >
                  <img
                    className="w-full h-full rounded-[20px]"
                    src={post?.com_image}
                    alt=""
                  />
                  <p className="absolute h-10 w-full bottom-0 text-center font-normal rounded-br-[20px] rounded-bl-[20px] text-sm leading-5 pt-2 text-white bg-gray-700 bg-opacity-60 backdrop-blur-sm">
                    {post?.com_name}
                  </p>
                </Link>
              </Tooltip>
            </Flip>
          ))}

          <div
            className="relative lg:h-44 lg:w-40 xl:h-50 xl:w-44 2xl:h-74
            2xl:w-64 rounded-[20px] flex justify-center items-center"
          >
            {currentPage > 1 ? (
              <Icons.RightArrow
                className="w-16 rotate-180 cursor-pointer text-gray-600 hover:text-gray-500"
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
              />
            ) : null}
            {currentPage < Math.ceil(caseStudy?.length / 6) ? (
              <Icons.RightArrow
                className="w-16 cursor-pointer mt-4 ml-4 text-gray-600 hover:text-gray-500"
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                  setTriggerAnimation(!triggerAnimation);
                }}
              />
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
          <div className="min-w-full z-50 min-h-screen flex justify-center items-center absolute top-0 left-0 bg-black backdrop-blur-md bg-opacity-80">
            <Lottie
              className="w-1/6 mx-auto"
              animationData={loaderFile}
              loop={true}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CaseStudy;
