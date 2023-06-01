import { Collapse } from "antd";
import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import favicon from "../../../../../asstes/Images/logo.png";
import loaderFile from "../../../../../asstes/Lotties/loader.json";
import Icons from "../../../../Shared/Icons";
import products from "../../../DesktopVersion/Products/productData.json";

const { Panel } = Collapse;

const ProductDetails = () => {
  const navigate = useNavigate();
  const ClientsSlider = useRef();
  const { slug } = useParams();
  const [productDetails, setProductDetails] = useState();
  const [loader, setLoader] = useState(true);

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

      {loader ? (
        <div className="min-w-full h-full z-[500] flex flex-col justify-center items-center m-auto absolute bg-gradient-to-b from-black via-transparent to-black bg-opacity-10 backdrop-blur-sm">
          <div className="absolute top-24">
            <Lottie
              className="w-1/2 mx-auto"
              animationData={loaderFile}
              loop={true}
            />

            <div className="font_title text-white animate-pulse flex justify-center">
              Loading...
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`w-full mt-24 text-white px-6 font_primary`}
          // className="w-full h-auto mt-24 text-white px-6 font_primary"
        >
          <div className="mb-10">
            <Icons.GoBackArrow
              className="w-6 font-semibold cursor-pointer"
              onClick={() => {
                navigate(`../products`, { replace: true });
              }}
            />
          </div>

          <div className="font_title text-center text-3xl font-bold pb-8">
            {productDetails?.name}
          </div>
          <div>
            <div className="relative">
              <h2 className="font-semibold text-center pb-2 font_primary">
                {productDetails?.title}
              </h2>
            </div>
            <p
              className="text-sm text-center pb-2 font_primary"
              style={{
                letterSpacing: "0.07em",
              }}
              dangerouslySetInnerHTML={{
                __html: `${productDetails?.short_des}`,
              }}
            ></p>

            <div className="w-full flex items-center justify-center">
              <button
                className="spirit-bomb w-51 uppercase h-10 bg-transparent text-sm mt-6 font-semibold leading-4 text-white font_title"
                onClick={() => handleNavigate("#start-project")}
                style={{
                  letterSpacing: "0.04em",
                  borderRadius: "30px",
                }}
              >
                START A PROJECT
              </button>
            </div>
          </div>

          <div className="mt-16 w-11/12 mx-auto flex justify-center items-center">
            <img
              className="w-full"
              src={productDetails?.cover_img}
              alt="Service img"
            />
          </div>

          <div className="mt-24 font_primary">
            <div className="relative">
              <h3 className="text-2xl leading-6 font-medium text-center mt-8 mb-6">
                <span>Key Features</span>
              </h3>
            </div>

            <p className="text-sm leading-6 text-white text-center font-normal">
              {productDetails?.key_features_des}
            </p>

            <div className="2xl:w-8/12 mx-auto mt-12 grid grid-cols-2 gap-8 items-center justify-center">
              {productDetails?.key_features?.map((content, i) => (
                <div className="flex items-center" key={i}>
                  {/* <img className="w-5" src={} alt="Content Icon" /> */}
                  <ul>
                    <li className="list-disc text-sm leading-5 ml-2 text-white font-medium">
                      {content}
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="flex items-center justify-center">
                <div className="text-brand-color text-4xl font-semibold text-center">
                  <span className="mr-2 text-brand-color"></span>
                  {<CountUp start={0} end={236} duration={2} />}
                  + <br />
                  <span className="text-sm leading-5 ml-2 text-white font-medium text-opacity-60">
                    Active Users
                  </span>
                </div>
              </div>
            </div>

            {productDetails?.pricing ? (
              <div className="mt-12 mb-10">
                <div className="text-2xl font-semibold text-center mb-5">
                  Pricing
                </div>
                <div className="text-base text-center mb-7">
                  Choose the package that best suits your business:
                </div>
                <div className="grid grid-cols-1 items-center">
                  {productDetails?.pricing?.map((content, i) => (
                    <div key={i}>
                      <div className="text-lg font-semibold text-center uppercase mb-3">
                        {content.plan}
                      </div>
                      <div className="text-sm font-light text-center pb-7 italic">
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
              </div>
              <div className="text-sm text-center mb-5">
                {productDetails?.features_and_capabilities_des}
              </div>
              <img
                className="w-11/12 mx-auto"
                src={productDetails?.capabilities_avatar}
                alt="Service Img"
              />
              <div className="grid grid-cols-2 gap-8 justify-center mt-10">
                {productDetails?.features_and_capabilities?.map((feat, i) => (
                  <div
                    key={i}
                    className="max-w-xs xl:max-w-sm 2xl:max-w-md mx-auto"
                  >
                    <h3 className="text-lg font-semibold leading-6 text-center text-white">
                      {feat?.title}
                    </h3>
                    <p
                      className="text-sm leading-6 font-light text-white text-center mt-2.5"
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
                className="serviceDetails_content flex-col my-16 text-sm font-light text-center font_primary"
                style={{
                  letterSpacing: "0.09em",
                }}
                dangerouslySetInnerHTML={{
                  __html:
                    "<div>The CRM platform provides analytics and reporting features, providing insightful reports on sales performance and customer trends. This data enables businesses to make informed decisions and drive their strategies based on real-time information.</div><br/><div>Integration capabilities are available to connect Queleads CRM with other tools and applications, facilitating a seamless workflow and enhancing productivity.</div>",
                }}
              ></div>
            </div>

            <div className="mt-24 pb-16">
              <h2 className="text-2xl leading-6 font-medium text-center mb-10 mt-2">
                Benefits of Queleads CRM
              </h2>

              <p className="text-sm leading-6 font-light text-center mb-4">
                Queleads CRM offers a range of benefits to streamline customer
                interactions and improve overall business performance. The
                software consolidates all customer interactions in one place,
                making it easier to manage relationships, track customer
                history, and prevent any details from being overlooked.
              </p>
              <p className="text-sm leading-6 font-light text-center">
                The CRM system enables sales teams to effectively manage and
                nurture leads, forecast sales more accurately, and close deals
                faster. It identifies high-quality leads and prioritizes them
                for the sales team, enhancing sales performance.
              </p>

              <div>
                <div>
                  <div className="flex flex-wrap gap-4 mt-6">
                    {productDetails?.benefits?.map((benefit, i) => (
                      <div
                        key={i}
                        className="py-2 px-4 bg-[#A855F7] bg-opacity-20 border border-gray-700 rounded-md"
                      >
                        <div className="text-lg font-semibold mb-4">
                          {benefit?.title}
                        </div>
                        <div className="font_primary text-sm font-light">
                          {benefit?.des}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <img
                  src={productDetails?.benifits_avatar}
                  className="w-11/12 mx-auto mt-6"
                  alt=""
                />
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl leading-6 font-medium text-center mb-10 mt-2">
                Users Feedback
              </h2>

              <div className="w-full px-6 bg-black">
                <Slider
                  className="bg-black"
                  ref={ClientsSlider}
                  arrows={false}
                  {...settings}
                >
                  {productDetails?.customer_testimonials?.map(
                    (testimonial, i) => (
                      <div className="p-4" key={i}>
                        <div className="h-40 flex items-center justify-center border cursor-pointer rounded-2xl p-4 bg-gray-100 bg-opacity-20 backdrop-filter shadow-md shadow-gray-300 backdrop-blur-md hover:bg-opacity-25 hover:delay-200">
                          <div className="ml-4 font-light text-sm py-2 text-center">
                            <span className="font-medium">
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
                        className="text-lg mb-8 relative text-white"
                        header={faq?.title}
                        key={i}
                        style={{
                          color: "#ffffff",
                        }}
                      >
                        <div className="flex items-center text-white">
                          <p className="text-sm font-light text-white text-opacity-95 text-justify ml-4">
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
      )}
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
  slidesToShow: 1,
  dots: true,
  rows: 1,
  speed: 300,
};
