import { Collapse, Tooltip } from "antd";
import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";
import favicon from "../../../../../assets/Images/logo.png";
import speakLogo from "../../../../../assets/Lotties/speak.json";
import Icons from "../../../../Shared/Icons";
import Footer from "../../Footer";
import Slider from "react-slick";
import products from "../productData.json";

const { Panel } = Collapse;

const ProductDetails = ({ setLoader }) => {
  const synth = window.speechSynthesis;
  const { speak } = useSpeechSynthesis();
  const navigate = useNavigate();
  const ClientsSlider = useRef();
  const { slug } = useParams();
  const [productDetails, setProductDetails] = useState();

  const handleNavigate = (menu) => {
    if (!window.location.hash.includes("#")) {
      navigate(`../${menu}`, { replace: true });
    }
  };

  useEffect(() => {
    setProductDetails(products?.find((prod) => prod.slug === slug));

    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, [setLoader, slug]);

  return (
    <>
      {/* For SEO */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{productDetails?.name}</title>
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

      <div className="blog_details min-h-full bg-black text-white pt-20 h-[90vh] overflow-y-auto font_primary w-11/12 mx-auto">
        <div className="px-36">
          <div className="mb-10">
            <Icons.GoBackArrow
              className="w-6 font-semibold cursor-pointer"
              onClick={() => {
                navigate(`../products`, { replace: true });
              }}
            />
          </div>

          <h1 className="text-4xl font-bold leading-10 mb-10 font_title">
            {productDetails?.name}
          </h1>
          <div>
            <div className="relative">
              <h2 className="text-2xl leading-5 font-medium mb-6">
                {productDetails?.title}
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
                      text: `${productDetails?.short_des}`,
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
                __html: `${productDetails?.short_des}`,
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
              src={productDetails?.cover_img}
              alt="Service img"
            />
          </div>

          <div className="mt-24">
            <div className="relative">
              {/* <h5 className="uppercase text-base font-normal leading-4 text-center">
              IDENTITY DESIGN SERVICES
            </h5> */}
              <h3 className="text-2xl leading-6 font-medium text-center mt-8 mb-6">
                <span>Key Features</span>
              </h3>

              {/* <Tooltip
                placement="top"
                title={`Click to "Listen". Double Click to "Stop"`}
                color={"rgba(90, 90, 90, 0.7)"}
              >
                <button
                  className="absolute top-0 right-10"
                  onClick={() => {
                    synth.cancel();
                    speak({
                      text: "Contact Management",
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
              </Tooltip> */}
            </div>

            <p className="text-base leading-6 text-white font-normal">
              Queleads CRM is designed to streamline your customer management
              process, bringing together your sales, marketing, and customer
              service teams on a unified platform. With our intelligent
              analytics and intuitive interface, you're equipped to make
              data-driven decisions and provide a personalized customer
              experience like never before.
            </p>

            <div className="2xl:w-8/12 mx-auto mt-12 grid grid-cols-3 gap-8">
              {productDetails?.key_features?.map((content, i) => (
                <div className="flex items-center">
                  {/* <img className="w-5" src={} alt="Content Icon" /> */}
                  <ul>
                    <li className="list-disc text-base leading-5 ml-2 text-white font-medium">
                      {content}
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-32">
              <div className="flex items-center justify-center pb-13">
                <div className="text-brand-color text-5xl font-semibold text-center">
                  <span className="mr-2 text-brand-color"></span>
                  {
                    <CountUp
                      start={0}
                      end={productDetails?.active_users}
                      duration={2}
                    />
                  }
                  + <br />
                  <span className="text-base leading-5 ml-2 text-white font-medium text-opacity-60">
                    Active Users
                  </span>{" "}
                </div>
              </div>
            </div>

            {productDetails?.pricing ? (
              <div className="mt-20 mb-16">
                <div className="text-2xl font-semibold text-center mb-5">
                  Pricing
                </div>
                <div className="text-base text-center mb-5">
                  Choose the package that best suits your business:
                </div>
                <div className="grid grid-cols-3 items-center">
                  {productDetails?.pricing?.map((content, i) => (
                    <div key={i}>
                      <div className="text-2xl font-semibold text-center uppercase mb-5">
                        {content.plan}
                      </div>
                      <div className="text-xl font-light text-center pb-13 italic">
                        {content.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div>
              <div className="text-2xl font-semibold text-center mb-5 relative">
                <div>Features & Capabilities</div>
                <Tooltip
                  placement="top"
                  title={`Click to "Listen". Double Click to "Stop"`}
                  color={"rgba(90, 90, 90, 0.7)"}
                >
                  <button
                    className="absolute -top-3 right-10"
                    onClick={() => {
                      synth.cancel();
                      speak({
                        text: `${productDetails?.features_and_capabilities_des}`,
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
              <div className="text-base text-justify mb-5">
                {productDetails?.features_and_capabilities_des}
              </div>
              <img
                className="w-5/12 mx-auto"
                src={productDetails?.capabilities_avatar}
                alt="Service Img"
              />
              <div className="grid grid-cols-3 gap-8 justify-center items-center mt-10">
                {productDetails?.features_and_capabilities?.map((feat, i) => (
                  <div
                    key={i}
                    className="max-w-xs xl:max-w-sm 2xl:max-w-md mx-auto"
                  >
                    <div className="flex items-center justify-center">
                      <h3 className="text-lg font-semibold leading-6 text-white">
                        {feat?.title}
                      </h3>
                    </div>
                    <p
                      className="text-base leading-6 font-light text-white text-justify mt-2.5"
                      style={{
                        letterSpacing: "0.07em",
                      }}
                    >
                      {feat?.des}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                id="serviceDetails_content"
                className="serviceDetails_content flex-col my-16 text-white"
                style={{
                  letterSpacing: "0.09em",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<div>The CRM platform provides analytics and reporting features, providing insightful reports on sales performance and customer trends. This data enables businesses to make informed decisions and drive their strategies based on real-time information.</div><br/><div>Integration capabilities are available to connect Queleads CRM with other tools and applications, facilitating a seamless workflow and enhancing productivity.</div>",
                }}
              ></div>

              <Tooltip
                placement="top"
                title={`Click to "Listen". Double Click to "Stop"`}
                color={"rgba(90, 90, 90, 0.7)"}
              >
                <button
                  className="absolute -top-14 right-10"
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

            <div className="mt-24 pb-16">
              <div className="relative">
                <h2 className="text-2xl leading-6 font-medium text-center mb-10 mt-2">
                  Benefits of Queleads CRM
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
                        text: "Queleads CRM offers a range of benefits to streamline customer interactions and improve overall business performance. The software consolidates all customer interactions in one place, making it easier to manage relationships, track customer history, and prevent any details from being overlooked. The CRM system enables sales teams to effectively manage and nurture leads, forecast sales more accurately, and close deals faster. It identifies high-quality leads and prioritizes them for the sales team, enhancing sales performance.",
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
                className="text-base leading-6 font-normal text-white"
                dangerouslySetInnerHTML={{
                  __html: `${productDetails?.benifits_des}`,
                }}
              ></p>

              <div>
                <div>
                  <div className="flex flex-wrap gap-4 mt-6">
                    {productDetails?.benefits?.map((benefit, i) => (
                      <div
                        key={i}
                        className="py-2 px-4 bg-[#A855F7] bg-opacity-20 border border-gray-700 rounded-md"
                      >
                        <div className="font-semibold mb-4">
                          {benefit?.title}
                        </div>
                        <div>{benefit?.des}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={productDetails?.benifits_avatar}
                  className="w-5/12 mx-auto mt-6"
                  alt=""
                />
              </div>
            </div>

            <div className="mt-24 mb-10">
              <h2 className="text-2xl leading-6 font-medium text-center mb-10 mt-2">
                Users Feedback
              </h2>

              <div className="w-full bg-black">
                <Slider
                  className="bg-black"
                  ref={ClientsSlider}
                  arrows={false}
                  {...settings}
                >
                  {productDetails?.customer_testimonials?.map(
                    (testimonial, i) => (
                      <div className="p-4" key={i}>
                        <div className="h-32 flex items-center justify-center border cursor-pointer rounded-2xl p-4 bg-gray-100 bg-opacity-20 backdrop-filter shadow-md shadow-gray-300 backdrop-blur-md hover:bg-opacity-25 hover:delay-200">
                          <div className="ml-4 text-white py-2 text-center">
                            <span className="font-semibold">
                              {testimonial?.content}
                            </span>
                            <span className="ml-4 italic text-purple-400">
                              - {testimonial?.customer_details}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </Slider>
              </div>
            </div>

            {productDetails?.faqs?.length ? (
              <div className="mt-24 mb-10 ">
                <h2 className="text-2xl leading-6 font-medium text-center mb-10 mt-2">
                  FAQ's
                </h2>

                <div className="product_faq">
                  {productDetails?.faqs?.map((faq, i) => (
                    <Collapse accordion ghost>
                      <Panel
                        className="text-xl mb-8 relative text-white"
                        header={faq?.title}
                        key={i}
                        style={{
                          color: "#ffffff",
                        }}
                      >
                        <div className="flex items-center text-white">
                          <Tooltip
                            placement="top"
                            title={`Click to "Listen". Double Click to "Stop"`}
                            color={"rgba(90, 90, 90, 0.7)"}
                          >
                            <button
                              onClick={() => {
                                synth.cancel();
                                speak({
                                  text: faq?.des,
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
                          <p className="text-base font-light text-white text-opacity-95 text-justify ml-4">
                            {faq?.des}
                          </p>
                        </div>
                      </Panel>
                    </Collapse>
                  ))}
                </div>
              </div>
            ) : null}
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

// Product Data

// Carousal Config
const settings = {
  centerMode: false,
  arrows: true,
  infinite: true,
  slidesToShow: 2,
  dots: true,
  rows: 1,
  speed: 300,
};
