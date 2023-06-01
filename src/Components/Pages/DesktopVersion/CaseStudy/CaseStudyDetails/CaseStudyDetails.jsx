import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import rightImage from "../../../../../assets/Images/background.jpg";
import favicon from "../../../../../assets/Images/logo.png";
import Icons from "../../../../Shared/Icons";
// import help1 from "../../../../../assets/Images/help1.png";
// import help2 from "../../../../../assets/Images/help2.png";
// import help3 from "../../../../../assets/Images/help3.png";
// import help4 from "../../../../../assets/Images/help4.png";
// import Interaction from "../../../../../assets/Images/Interaction.png";
// import product from "../../../../../assets/Images/product.png";
// import research from "../../../../../assets/Images/Research.png";
// import usability from "../../../../../assets/Images/useability.png";
// import visual from "../../../../../assets/Images/visual.png";
// import WebApp from "../../../../../assets/Images/WebApp.png";
import { handleFetchCaseStudyById } from "../../../../Shared/services";
import Lottie from "lottie-react";
import speakLogo from "../../../../../assets/Lotties/speak.json";
import testimonial from "../../../../../assets/Lotties/testimonial.json";
import whoWeAre from "../../../../../assets/Lotties/who_we_are.json";
import keyTakeaways from "../../../../../assets/Lotties/key_takeaways.json";
import weLearnt from "../../../../../assets/Lotties/we_learnt.json";
import { useSpeechSynthesis } from "react-speech-kit";
import { Tooltip } from "antd";
import Footer from "../../Footer";

const CaseStudyDetails = ({ setLoader }) => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { speak } = useSpeechSynthesis();
  const [caseStudyDetails, setCaseStudyDetails] = useState();
  const synth = window.speechSynthesis;

  useEffect(() => {
    (async () => {
      const fetchCaseStudyData = await handleFetchCaseStudyById(slug);
      if (fetchCaseStudyData?.status === 424) {
        setLoader(false);
        navigate("404");
      }
      if (fetchCaseStudyData) {
        setLoader(false);
      }
      setCaseStudyDetails(fetchCaseStudyData);
    })();
  }, [navigate, setLoader, slug]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {caseStudyDetails?.our_content_header + ` – Quadque Tech`}
        </title>
        <meta name="keywords" content={caseStudyDetails?.meta_keyword} />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>

      <div className="case_study_details min-h-full bg-black text-white pt-20 h-[90vh] overflow-y-auto font_primary w-11/12 mx-auto">
        <div className="px-36">
          <div className="mb-10">
            <Icons.GoBackArrow
              className="w-6 font-semibold cursor-pointer"
              onClick={() => {
                navigate(`../#case-study`, { replace: true });
              }}
            />
          </div>

          <h1 className="max-w-4xl mx-auto text-4xl font-bold leading-10 my-10 text-center font_title">
            {caseStudyDetails?.our_content_header}
          </h1>
          <div>
            <p
              className="w-[468px] mx-auto text-base font-light leading-6 text-[#D0D4EA] mb-5 text-center"
              style={{
                letterSpacing: "0.07em",
              }}
            >
              {caseStudyDetails?.summary1}
            </p>
          </div>

          <div className="mt-16 w-9/12 mx-auto flex justify-center items-center">
            <img
              width={"70%"}
              src={
                process.env.REACT_APP_ASSETS_URL +
                "/" +
                caseStudyDetails?.group_images
              }
              alt="Group Images"
            />
          </div>

          <div className="my-12">
            <p
              className="w-[468px] mx-auto text-base font-light leading-6 text-[#D0D4EA] mb-5 text-center"
              style={{
                letterSpacing: "0.07em",
              }}
            >
              {caseStudyDetails?.summary2}
            </p>

            <div className="flex justify-center items-center pt-6">
              <button
                className="spirit-bomb font_title px-7 py-3.5 text-base font-medium leading-4 rounded-full bg-transparent text-white text-center"
                style={{
                  letterSpacing: "0.04em",
                  borderRadius: "30px",
                }}
                onClick={() => {
                  navigate(`../#contacts`, { replace: true });
                }}
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="flex justify-between items-stretch mt-52">
            <div className="w-1/2 mt-24 pb-16">
              <div className="relative">
                <div
                  className="mr-10"
                  dangerouslySetInnerHTML={{
                    __html: caseStudyDetails?.content,
                  }}
                ></div>

                <Tooltip
                  placement="top"
                  title={`Click to "Listen". Double Click to "Stop"`}
                  color={"rgba(90, 90, 90, 0.7)"}
                >
                  <button
                    className="absolute top-0 right-0"
                    onClick={() =>
                      speak({
                        text: caseStudyDetails?.content,
                      })
                    }
                    onDoubleClick={() => synth.cancel()}
                  >
                    <Lottie
                      className="w-14"
                      animationData={speakLogo}
                      loop={true}
                    />
                  </button>
                </Tooltip>
              </div>
            </div>

            <div
              className="w-1/2 ml-10"
              style={{
                backgroundImage: `url(${rightImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* <img className="ml-auto" src={rightImage} alt="" /> */}
            </div>
          </div>

          <div className="mt-72">
            <div className="max-w-xl mx-auto">
              {/* <h1 className="text-center text-[40px] leading-12 font-normal">
              Our Contents:
            </h1> */}
              <div className="text-center text-[40px] leading-12 font-normal">
                {caseStudyDetails?.our_content_header}
              </div>
            </div>

            <div className="mt-40 flex items-center justify-between">
              <div className="w-1/2 mr-24">
                {/* <img
                className="w-full"
                src={
                  process.env.REACT_APP_ASSETS_URL +
                  "/" +
                  caseStudyDetails?.image_1
                }
                alt=""
              /> */}
                <Lottie
                  className="w-6/12 mx-auto"
                  animationData={testimonial}
                  loop={true}
                />
              </div>

              <div className="w-1/2">
                <div className="text-3xl leading-12 font-semibold">
                  {caseStudyDetails?.title_1}
                </div>
                <h4 className="mt-8 ml-10 text-justify">
                  {caseStudyDetails?.description_1}
                </h4>
              </div>
            </div>

            <div className="mt-40 flex items-center justify-between">
              <div className="w-1/2 mr-24">
                <div className="text-3xl leading-12 font-semibold">
                  {caseStudyDetails?.title_2}
                </div>
                <h4 className="mt-8 ml-10 text-justify">
                  {caseStudyDetails?.description_2}
                </h4>
              </div>
              <div className="w-1/2">
                {/* <img
                className="w-full"
                src={
                  process.env.REACT_APP_ASSETS_URL +
                  "/" +
                  caseStudyDetails?.image_2
                }
                alt=""
              /> */}
                <Lottie
                  className="w-9/12 mx-auto"
                  animationData={keyTakeaways}
                  loop={true}
                />
              </div>
            </div>

            <div className="w-full mt-40 flex items-center justify-between">
              <div className="w-1/2 mr-24">
                {/* <img
                className="w-full"
                src={
                  process.env.REACT_APP_ASSETS_URL +
                  "/" +
                  caseStudyDetails?.image_3
                }
                alt=""
              /> */}
                <Lottie
                  className="w-9/12 mx-auto"
                  animationData={weLearnt}
                  loop={true}
                />
              </div>
              <div className="w-1/2">
                <div className="text-3xl leading-12 font-semibold">
                  {caseStudyDetails?.title_3}
                </div>
                <h4 className="mt-8 ml-10 text-justify">
                  {caseStudyDetails?.description_3}
                </h4>
              </div>
            </div>
          </div>

          <div className="mt-44 pb-20">
            <div className="text-3xl font-normal my-18">
              Creative Digital Marketing Agencies
            </div>
            <div className="">
              <img
                className="w-10/12 mx-auto"
                src={
                  process.env.REACT_APP_ASSETS_URL +
                  "/" +
                  caseStudyDetails?.agency
                }
                alt=""
              />
            </div>

            <div className="mt-40 flex items-center justify-between">
              <div className="w-1/2 mr-24">
                {/* <img
                className="w-full"
                src={
                  process.env.REACT_APP_ASSETS_URL +
                  "/" +
                  caseStudyDetails?.image_1
                }
                alt=""
              /> */}
                <Lottie
                  className="w-9/12"
                  animationData={whoWeAre}
                  loop={true}
                />
              </div>

              <div className="w-1/2">
                <div className="text-3xl leading-12 font-semibold">
                  {/* {caseStudyDetails?.title_3} */}
                  WHO WE ARE
                </div>
                <h4 className="mt-8 text-justify">
                  {/* {caseStudyDetails?.description_3} */}
                  Quadque is the best digital partner for every kind of web
                  service, software development, and digital marketing solution.
                  We are working with the world’s leading enterprises, SMEs, and
                  technology challenges. We help many businesses to increase
                  their valuations through custom software development, identity
                  design, digital marketing services, and AI & IOT implications.
                </h4>
                <div className="flex items-center pt-8">
                  <button
                    className="spirit-bomb px-7 font_title py-3.5 text-sm 2xl:text-lg font-medium leading-4 rounded-full bg-transparent text-white text-center"
                    style={{
                      letterSpacing: "0.04em",
                      borderRadius: "30px",
                    }}
                    onClick={() => {
                      navigate(`../#contacts`, { replace: true });
                    }}
                  >
                    Contact Us
                  </button>

                  {/* <div className="flex items-center">
                  <span className="mx-11">or </span>
                  <span>
                    <Icons.BluePhone className="mr-3.5 text-brand-color" />
                  </span>
                  <a
                    href="tel:+8801765276560"
                    className="text-base 2xl:text-lg font-medium leading-6"
                  >
                    +8801765276560
                  </a>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full -mb-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CaseStudyDetails;

// const serviceDetailsContent = {
//   "ui-ux": {
//     helpContent: [
//       {
//         title: "Usability Analyst",
//         icon: usability,
//       },
//       {
//         title: "User Research",
//         icon: research,
//       },
//       {
//         title: "Product Design",
//         icon: product,
//       },
//       {
//         title: "Web/App Design",
//         icon: WebApp,
//       },
//       {
//         title: "Visual Design",
//         icon: visual,
//       },
//       {
//         title: "Interaction Design",
//         icon: Interaction,
//       },
//     ],

//     bestService: [
//       {
//         service_image: help1,
//         service_name: "Create A Strong Impression",
//         des: "A logo serves as a company's first touchpoint with consumers. If created well, it may spark the public's attention and encourage them to discover more about the company.",
//       },
//       {
//         service_image: help2,
//         service_name: "Builds the Foundation",
//         des: "Branding is about influencing customers' emotions. It's all about the story you're attempting to tell, and your identity design sets the setting for it.",
//       },
//       {
//         service_image: help3,
//         service_name: "It Fosters Brand Loyalty",
//         des: "As your brand expands, people will get more familiar with your identity, creating the notion that you are trustworthy and approachable.",
//       },
//       {
//         service_image: help4,
//         service_name: "Rememberable",
//         des: "People remember your company by your attractive identity design. So, this is very important to keep your company memorable.",
//       },
//     ],
//   },

//   "web-development": {
//     helpContent: [
//       {
//         title: "Usability Analyst",
//         icon: usability,
//       },
//       {
//         title: "User Research",
//         icon: research,
//       },
//       {
//         title: "Product Design",
//         icon: product,
//       },
//       {
//         title: "Web/App Design",
//         icon: WebApp,
//       },
//       {
//         title: "Visual Design",
//         icon: visual,
//       },
//       {
//         title: "Interaction Design",
//         icon: Interaction,
//       },
//     ],

//     bestService: [
//       {
//         service_image: help1,
//         service_name: "Create A Strong Impression",
//         des: "A logo serves as a company's first touchpoint with consumers. If created well, it may spark the public's attention and encourage them to discover more about the company.",
//       },
//       {
//         service_image: help2,
//         service_name: "Builds the Foundation",
//         des: "Branding is about influencing customers' emotions. It's all about the story you're attempting to tell, and your identity design sets the setting for it.",
//       },
//       {
//         service_image: help3,
//         service_name: "It Fosters Brand Loyalty",
//         des: "As your brand expands, people will get more familiar with your identity, creating the notion that you are trustworthy and approachable.",
//       },
//       {
//         service_image: help4,
//         service_name: "Rememberable",
//         des: "People remember your company by your attractive identity design. So, this is very important to keep your company memorable.",
//       },
//     ],
//   },

//   "mobile-app-development": {
//     helpContent: [
//       {
//         title: "Usability Analyst",
//         icon: usability,
//       },
//       {
//         title: "User Research",
//         icon: research,
//       },
//       {
//         title: "Product Design",
//         icon: product,
//       },
//       {
//         title: "Web/App Design",
//         icon: WebApp,
//       },
//       {
//         title: "Visual Design",
//         icon: visual,
//       },
//       {
//         title: "Interaction Design",
//         icon: Interaction,
//       },
//     ],

//     bestService: [
//       {
//         service_image: help1,
//         service_name: "Create A Strong Impression",
//         des: "A logo serves as a company's first touchpoint with consumers. If created well, it may spark the public's attention and encourage them to discover more about the company.",
//       },
//       {
//         service_image: help2,
//         service_name: "Builds the Foundation",
//         des: "Branding is about influencing customers' emotions. It's all about the story you're attempting to tell, and your identity design sets the setting for it.",
//       },
//       {
//         service_image: help3,
//         service_name: "It Fosters Brand Loyalty",
//         des: "As your brand expands, people will get more familiar with your identity, creating the notion that you are trustworthy and approachable.",
//       },
//       {
//         service_image: help4,
//         service_name: "Rememberable",
//         des: "People remember your company by your attractive identity design. So, this is very important to keep your company memorable.",
//       },
//     ],
//   },

//   "software-development": {
//     helpContent: [
//       {
//         title: "Usability Analyst",
//         icon: usability,
//       },
//       {
//         title: "User Research",
//         icon: research,
//       },
//       {
//         title: "Product Design",
//         icon: product,
//       },
//       {
//         title: "Web/App Design",
//         icon: WebApp,
//       },
//       {
//         title: "Visual Design",
//         icon: visual,
//       },
//       {
//         title: "Interaction Design",
//         icon: Interaction,
//       },
//     ],

//     bestService: [
//       {
//         service_image: help1,
//         service_name: "Create A Strong Impression",
//         des: "A logo serves as a company's first touchpoint with consumers. If created well, it may spark the public's attention and encourage them to discover more about the company.",
//       },
//       {
//         service_image: help2,
//         service_name: "Builds the Foundation",
//         des: "Branding is about influencing customers' emotions. It's all about the story you're attempting to tell, and your identity design sets the setting for it.",
//       },
//       {
//         service_image: help3,
//         service_name: "It Fosters Brand Loyalty",
//         des: "As your brand expands, people will get more familiar with your identity, creating the notion that you are trustworthy and approachable.",
//       },
//       {
//         service_image: help4,
//         service_name: "Rememberable",
//         des: "People remember your company by your attractive identity design. So, this is very important to keep your company memorable.",
//       },
//     ],
//   },

//   "ai-iot-solutions": {
//     helpContent: [
//       {
//         title: "Usability Analyst",
//         icon: usability,
//       },
//       {
//         title: "User Research",
//         icon: research,
//       },
//       {
//         title: "Product Design",
//         icon: product,
//       },
//       {
//         title: "Web/App Design",
//         icon: WebApp,
//       },
//       {
//         title: "Visual Design",
//         icon: visual,
//       },
//       {
//         title: "Interaction Design",
//         icon: Interaction,
//       },
//     ],

//     bestService: [
//       {
//         service_image: help1,
//         service_name: "Create A Strong Impression",
//         des: "A logo serves as a company's first touchpoint with consumers. If created well, it may spark the public's attention and encourage them to discover more about the company.",
//       },
//       {
//         service_image: help2,
//         service_name: "Builds the Foundation",
//         des: "Branding is about influencing customers' emotions. It's all about the story you're attempting to tell, and your identity design sets the setting for it.",
//       },
//       {
//         service_image: help3,
//         service_name: "It Fosters Brand Loyalty",
//         des: "As your brand expands, people will get more familiar with your identity, creating the notion that you are trustworthy and approachable.",
//       },
//       {
//         service_image: help4,
//         service_name: "Rememberable",
//         des: "People remember your company by your attractive identity design. So, this is very important to keep your company memorable.",
//       },
//     ],
//   },
// };
