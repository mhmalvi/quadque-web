import { Tooltip } from "antd";
import Lottie from "lottie-react";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";
import favicon from "../../../../../asstes/Images/logo.png";
import speakLogo from "../../../../../asstes/Lotties/speak.json";
import Icons from "../../../../Shared/Icons";
import Footer from "../../Footer";

const ProductDetails = ({ setLoader }) => {
  const synth = window.speechSynthesis;
  const { speak } = useSpeechSynthesis();
  const navigate = useNavigate();

  const handleNavigate = (menu) => {
    if (!window.location.hash.includes("#")) {
      navigate(`../${menu}`, { replace: true });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, [setLoader]);

  return (
    <>
      {/* For SEO */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>QueleadsCRM</title>
        <meta
          name="description"
          content="An intuitive platform to effectively handle your leads and payment management, our CRM system has other useful features to take your business to the next level."
        />
        <meta
          name="keywords"
          content="crm, crmleads, leads, facebookleads, rto, rtocrm"
        />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>

      <div className="blog_details min-h-full bg-black text-white pt-20 px-36 h-[90vh] overflow-y-auto font_primary w-11/12 mx-auto">
        <div className="mb-10">
          <Icons.GoBackArrow
            className="w-6 font-semibold cursor-pointer"
            onClick={() => {
              navigate(`../products`, { replace: true });
            }}
          />
        </div>

        <h1 className="text-4xl font-bold leading-10 mb-10 font_title">
          Queleadscrm
        </h1>
        <div>
          <div className="relative">
            <h2 className="text-2xl leading-5 font-medium mb-6">
              The Best CRM Solutions to Accelerate Your Sales and Ensure
              High-Quality Performance
            </h2>

            <Tooltip
              placement="top"
              title={`Click to "Listen". Double Click to "Stop"`}
              color={"rgba(90, 90, 90, 0.7)"}
            >
              <button
                className="absolute -top-4 right-10"
                onClick={() => {
                  synth.cancel();
                  speak({
                    text: "A powerful CRM package can significantly impact the overall business performance. You can create a significant positive impact on your business processes by using our CRM solutions.",
                  });
                }}
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
          <p
            className="text-base font-light leading-6 text-[#D0D4EA] mb-5 text-justify"
            style={{
              letterSpacing: "0.07em",
            }}
            dangerouslySetInnerHTML={{
              __html:
                "A powerful CRM package can significantly impact the overall business performance. You can create a significant positive impact on your business processes by using our CRM solutions.",
            }}
          ></p>

          <button
            className="spirit-bomb w-[252px] uppercase h-[46px] bg-transparent text-[15px] mt-6 font-semibold leading-4 text-white font_title"
            onClick={() => handleNavigate("#start-project")}
            style={{
              letterSpacing: "0.04em",
              borderRadius: "30px",
            }}
          >
            START A PROJECT
          </button>
          {/* <button
            className="text-brand-color text-lg font-bold leading-5 capitalize"
            style={{
              letterSpacing: "0.04em",
            }}
            onClick={() => handleNavigate("#start-project")}
          >
            START PROJECT
          </button> */}
        </div>

        <div className="mt-16 w-9/12 mx-auto flex justify-center items-center">
          <img
            width={"70%"}
            src="https://queleadscrm.com/static/media/Dashboard2.4001e5e938d3739f55af.png"
            alt="Service img"
          />
        </div>

        <div className="mt-24">
          <div className="relative">
            {/* <h5 className="uppercase text-base font-normal leading-4 text-center">
              IDENTITY DESIGN SERVICES
            </h5> */}
            <h3 className="text-2xl leading-6 font-medium text-center mt-8 mb-6">
              <span>How it will help</span>
            </h3>

            <Tooltip
              placement="top"
              title={`Click to "Listen". Double Click to "Stop"`}
              color={"rgba(90, 90, 90, 0.7)"}
            >
              <button
                className="absolute top-0 right-10"
                onClick={() => {
                  synth.cancel();
                  speak({
                    text: "serviceDetails?.identity_design_des",
                  });
                }}
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

          <p className="text-base leading-6 text-white font-normal">
            serviceDetails?.identity_design_des
          </p>

          <div className="2xl:w-8/12 mx-auto mt-12 grid grid-cols-3 gap-8">
            {/* {serviceDetailsContent[`${slug}`]?.helpContent?.map( */}
            {/* (content, i) => ( */}
            <div className="flex items-center">
              {/* <img className="w-5" src={} alt="Content Icon" /> */}
              <span className="text-base leading-5 ml-2 text-white font-medium">
                Leads
              </span>
            </div>
            {/* ) */}
            {/* )} */}
          </div>

          <div className="mt-32">
            <div className="flex items-center justify-center pb-13">
              <div className="text-brand-color text-5xl font-semibold text-center">
                <span className="mr-2 text-brand-color"></span>
                {<CountUp start={0} end={100} duration={2} />}
                + <br />
                <span className="text-base leading-5 ml-2 text-white font-medium text-opacity-60">
                  Active Users 
                </span>{" "}
              </div>
            </div>
          </div>

          <div className="mt-20 mb-16">
            {Array(6).map((content, i) => (
              <div key={i}>
                <div className="text-2xl font-semibold text-center uppercase mb-5">
                  Leads
                </div>
                <div className="text-xl font-normal text-center pb-13">
                  Managing Leads
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 justify-center items-center">
            {Array(4)?.map((service, i) => (
              <div
                key={i}
                className="max-w-xs xl:max-w-sm 2xl:max-w-md mx-auto"
              >
                <div className="flex items-center">
                  {/* <img
                      className="w-19 mr-4"
                      src={service?.service_image}
                      alt="Service Img"
                    /> */}
                  <h3 className="text-lg font-semibold leading-6 text-white">
                    service?.service_name
                  </h3>
                </div>
                <p
                  className="text-base leading-6 font-light text-white text-justify mt-2.5"
                  style={{
                    letterSpacing: "0.07em",
                  }}
                >
                  service?.des
                </p>
              </div>
            ))}
          </div>

          <div className="relative">
            <div
              id="serviceDetails_content"
              className="serviceDetails_content flex-col my-16 text-white"
              style={{
                letterSpacing: "0.09em",
              }}
              dangerouslySetInnerHTML={{
                __html: "serviceDetails?.content",
              }}
            ></div>

            <Tooltip
              placement="top"
              title={`Click to "Listen". Double Click to "Stop"`}
              color={"rgba(90, 90, 90, 0.7)"}
            >
              <button
                className="absolute top-0 right-10"
                onClick={() => {
                  synth.cancel();
                  speak({
                    text: document.getElementById("serviceDetails_content")
                      .innerText,
                  });
                }}
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

          <div>
            <div className="flex flex-wrap gap-3">
              {Array(6)?.map((menu, i) => (
                <div
                  key={i}
                  className="py-2 px-4 bg-[#A855F7] bg-opacity-30 border border-gray-700 rounded-md"
                >
                  Capbility Menu
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 pb-16">
            <div className="relative">
              <h2 className="text-2xl leading-6 font-medium text-center mb-10 mt-2">
                serviceDetails?.service_deliver_title
              </h2>

              <Tooltip
                placement="top"
                title={`Click to "Listen". Double Click to "Stop"`}
                color={"rgba(90, 90, 90, 0.7)"}
              >
                <button
                  className="absolute top-0 right-10"
                  onClick={() => {
                    synth.cancel();
                    speak({
                      text: "serviceDetails?.service_deliver_des",
                    });
                  }}
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

            <p className="text-base leading-6 font-normal text-white">
              serviceDetails?.service_deliver_des
            </p>
          </div>

          <div className="mt-24 mb-10">
            <h2 className="text-2xl leading-6 font-medium text-center mb-10 mt-2">
              Our Latest Work
            </h2>

            {/* <div className="w-full bg-black">
              <Slider
                className="bg-black"
                ref={ClientsSlider}
                arrows={false}
                {...settings}
              >
                {caseStudies?.map((casestudy, i) => (
                  <div className="p-4">
                    <div
                      onClick={() => {
                        navigate(`../case-study/${casestudy?.slug}`, {
                          replace: true,
                        });
                      }}
                      key={i}
                      className="border cursor-pointer rounded-2xl p-4 bg-gray-100 bg-opacity-20 backdrop-filter shadow-md shadow-gray-300 backdrop-blur-md hover:bg-opacity-25 hover:delay-200"
                    >
                      <img
                        src={
                          process.env.REACT_APP_ASSETS_URL +
                          "/" +
                          casestudy?.com_image
                        }
                        alt="Company"
                        className="w-full px-4 rounded-xl"
                      />
                      <div className="ml-4 text-white py-2 text-center">
                        {casestudy?.com_name}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div> */}
          </div>

          <div className="mt-24 mb-10 bg-black">
            <h2 className="text-2xl leading-6 font-medium text-center mb-10 mt-2">
              What our clients say about us
            </h2>

            {/* <div className="w-full">
              <Slider
                ref={ClientsSlider}
                arrows={false}
                {...clientSpeakSettings}
              >
                {clientSpeak?.map((client, i) => (
                  <div className="p-6">
                    <div className="min-h-[18rem] border rounded-2xl p-4 bg-gray-100 bg-opacity-20 backdrop-filter shadow-md shadow-gray-300 backdrop-blur-md hover:bg-opacity-25 hover:delay-200">
                      <img
                        src={
                          process.env.REACT_APP_ASSETS_URL + "/" + client?.image
                        }
                        alt="Client"
                        className="relative w-14 h-14 -top-10 border border-gray-300 left-4 rounded-full"
                      />
                      <div className="text-white py-2">
                        {client?.description}
                      </div>
                      <div className="text-end text-white py-2">
                        {client?.name}, {client?.designation}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div> */}
          </div>
        </div>
        <div className="-mb-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
