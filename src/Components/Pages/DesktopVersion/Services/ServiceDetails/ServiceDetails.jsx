import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import help1 from "../../../../../asstes/Images/help1.png";
import help2 from "../../../../../asstes/Images/help2.png";
import help3 from "../../../../../asstes/Images/help3.png";
import help4 from "../../../../../asstes/Images/help4.png";
import Interaction from "../../../../../asstes/Images/Interaction.png";
import product from "../../../../../asstes/Images/product.png";
import research from "../../../../../asstes/Images/Research.png";
import usability from "../../../../../asstes/Images/useability.png";
import visual from "../../../../../asstes/Images/visual.png";
import WebApp from "../../../../../asstes/Images/WebApp.png";
// import useCaseStudiesDesktop from "../../../../Shared/Hooks/useCaseStudiesDesktop";
import Lottie from "lottie-react";
import { useSpeechSynthesis } from "react-speech-kit";
import loaderFile from "../../../../../asstes/Lotties/loader.json";
import useCaseStudy from "../../../../Shared/Hooks/useCaseStudy";
import { handleFetchServiceById } from "../../../../Shared/services";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { speak } = useSpeechSynthesis();

  const ClientsSlider = useRef(null);
  const [serviceDetails, setServiceDetails] = useState();
  const [capabilityMenus, setCapabilityMenus] = useState([]);
  const [caseStudies] = useCaseStudy();
  const [loader, setLoader] = useState(true);

  console.log("caseStudies", caseStudies);

  useEffect(() => {
    (async () => {
      const fetchServicedata = await handleFetchServiceById(slug);
      if (fetchServicedata) {
        setTimeout(() => {
          setLoader(false);
        }, 1500);
      }
      setServiceDetails(fetchServicedata);
    })();
  }, [slug]);

  const handleNavigate = (menu) => {
    if (!window.location.hash.includes("#")) {
      navigate(`../${menu}`, { replace: true });
    }
  };

  console.log(slug);

  useEffect(() => {
    setCapabilityMenus(serviceDetails?.services_capabilities_menu?.split(","));
  }, [serviceDetails]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Services`}</title>
        {/* <meta name="keywords" content={blogDetails?.meta_keyword} /> */}
      </Helmet>
      <div className="blog_details min-h-full bg-black text-white py-20 px-36 font_anurati h-[90vh] overflow-y-auto font-poppins w-11/12 mx-auto">
        <h1 className="text-4xl font-bold leading-10 mb-10 font_title">
          {serviceDetails?.service_name}
        </h1>
        <div>
          <h2 className="text-2xl leading-5 font-medium mb-6">
            {serviceDetails?.service_title}
          </h2>
          <p
            className="text-base font-light leading-6 text-[#D0D4EA] mb-5"
            style={{
              letterSpacing: "0.07em",
            }}
          >
            {serviceDetails?.description}
          </p>

          <button
            className="text-brand-color text-lg font-bold leading-5 capitalize"
            style={{
              letterSpacing: "0.04em",
            }}
            onClick={() => handleNavigate("#start-project")}
          >
            START PROJECT
          </button>
        </div>

        <div className="mt-16 w-9/12 mx-auto flex justify-center items-center">
          <img width={"70%"} src={serviceDetails?.file} alt="" />
        </div>

        <div className="mt-24">
          <h5 className="uppercase text-base font-normal leading-4 text-center">
            IDENTITY DESIGN SERVICES
          </h5>
          <h3 className="text-2xl leading-6 font-medium text-center mt-8 mb-6">
            How We Can Help?
          </h3>
          <button
            onClick={() =>
              speak({
                text: serviceDetails?.identity_design_des,
              })
            }
          >
            Speak
          </button>
          <p
            className="text-base leading-6 text-white font-medium text-opacity-60"
            style={{
              letterSpacing: "0.07em",
            }}
          >
            {serviceDetails?.identity_design_des}
          </p>

          <div className="2xl:w-8/12 mx-auto mt-12 grid grid-cols-3 gap-8">
            {(serviceDetailsContent[`${slug}`]?.helpContent).map(
              (content, i) => (
                <div className="flex items-center" key={i}>
                  <img className="w-5" src={content?.icon} alt="" />
                  <span className="text-base leading-5 ml-2 text-white font-medium text-opacity-90">
                    {content?.title}
                  </span>
                </div>
              )
            )}
          </div>

          <div className="mt-32">
            <div className="flex pb-13">
              <div className="w-1/2 text-brand-color text-5xl font-semibold text-center">
                <span className="mr-2 text-brand-color"></span>
                {
                  <CountUp
                    start={0}
                    end={serviceDetails?.project_count}
                    duration={2}
                  />
                }
                + <br />
                <span className="text-base leading-5 ml-2 text-white font-medium text-opacity-60">
                  Projects Completed
                </span>{" "}
              </div>
              <div className="bg-white w-[1px] h-14"></div>
              <div className="w-1/2 text-brand-color text-5xl font-semibold text-center">
                {
                  <CountUp
                    start={0}
                    end={serviceDetails?.happy_clients}
                    duration={3}
                  />
                }
                + <br />
                <span className="text-base leading-5 ml-2 text-white font-medium text-opacity-60">
                  Happy Clients
                </span>{" "}
              </div>
            </div>
          </div>

          <div className="my-16">
            <h5 className="uppercase text-base font-normal leading-4 text-center">
              BEST FOR YOU
            </h5>
            <h2 className="text-2xl leading-6 font-medium text-center mb-10 mt-2">
              We serve the best service
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 justify-center items-center">
            {serviceDetailsContent[`${slug}`].bestService?.map((service, i) => (
              <div
                key={i}
                className="max-w-xs xl:max-w-sm 2xl:max-w-md mx-auto"
              >
                <div className="flex items-center">
                  <img
                    className="w-19 mr-4"
                    src={service?.service_image}
                    alt=""
                  />
                  <h3 className="text-lg font-semibold leading-6 text-white text-opacity-80">
                    {service?.service_name}
                  </h3>
                </div>
                <p
                  className="text-base leading-6 font-normal text-white text-opacity-60 text-justify mt-2.5"
                  style={{
                    letterSpacing: "0.07em",
                  }}
                >
                  {service?.des}
                </p>
              </div>
            ))}

            {/* <div className="max-w-xs xl:max-w-sm 2xl:max-w-md mx-auto">
              <div className="flex items-center">
                <img className="w-19 mr-4" src={help2} alt="" />
                <h3 className="text-lg font-semibold leading-6">
                  Create A Strong Impression
                </h3>
              </div>
              <p
                className="text-base leading-6 font-normal text-white text-opacity-75 text-justify mt-2.5"
                style={{
                  letterSpacing: "0.07em",
                }}
              >
                A logo serves as a company's first touchpoint with consumers. If
                created well, it may spark the public's attention and encourage
                them to discover more about the company.
              </p>
            </div>

            <div className="max-w-xs xl:max-w-sm 2xl:max-w-md mx-auto">
              <div className="flex items-center">
                <img className="w-19 mr-4" src={help3} alt="" />
                <h3 className="text-lg font-semibold leading-6">
                  Create A Strong Impression
                </h3>
              </div>
              <p
                className="text-base leading-6 font-normal text-white text-opacity-75 text-justify mt-2.5"
                style={{
                  letterSpacing: "0.07em",
                }}
              >
                A logo serves as a company's first touchpoint with consumers. If
                created well, it may spark the public's attention and encourage
                them to discover more about the company.
              </p>
            </div>

            <div className="max-w-xs xl:max-w-sm 2xl:max-w-md mx-auto">
              <div className="flex items-center">
                <img className="w-19 mr-4" src={help4} alt="" />
                <h3 className="text-lg font-semibold leading-6">
                  Create A Strong Impression
                </h3>
              </div>
              <p
                className="text-base leading-6 font-normal text-white text-opacity-75 text-justify mt-2.5"
                style={{
                  letterSpacing: "0.07em",
                }}
              >
                A logo serves as a company's first touchpoint with consumers. If
                created well, it may spark the public's attention and encourage
                them to discover more about the company.
              </p>
            </div> */}
          </div>

          <div
            className="serviceDetails_content flex justify-center items-center flex-col my-16 text-white"
            style={{
              letterSpacing: "0.09em",
            }}
            dangerouslySetInnerHTML={{
              __html: serviceDetails?.content,
            }}
          ></div>

          <div>
            <div className="flex flex-wrap gap-3">
              {capabilityMenus?.map((menu, i) => (
                <div
                  key={i}
                  className="py-2 px-4 bg-[#A855F7] bg-opacity-30 border border-gray-700 rounded-md"
                >
                  {menu}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 pb-16">
            <h2 className="text-2xl leading-6 font-medium text-center mb-10 mt-2">
              {serviceDetails?.service_deliver_title}
            </h2>

            <p
              className="text-base leading-6 font-normal text-white text-opacity-60"
              style={{
                letterSpacing: "0.07em",
              }}
            >
              {serviceDetails?.service_deliver_des}
            </p>
          </div>

          <div className="mt-24 mb-10">
            <h2 className="text-2xl leading-6 font-medium text-center mb-10 mt-2">
              Our Latest Work
            </h2>

            <div className="w-full bg-black">
              <Slider
                className="bg-black"
                ref={ClientsSlider}
                arrows={false}
                {...settings}
              >
                {caseStudies?.map((casestudy, i) => (
                  <div
                    onClick={() => {
                      navigate(`../case-studies/${casestudy?.slug}`, {
                        replace: true,
                      });
                    }}
                    key={i}
                    className="rounded-xl"
                  >
                    <img
                      src={casestudy?.com_image}
                      alt=""
                      className="w-68 h-72 px-4 rounded-xl"
                    />
                    <div className="ml-4 text-white py-2">
                      {casestudy?.com_name}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="mt-24 mb-10 bg-black">
            <h2 className="text-2xl leading-6 font-medium text-center mb-10 mt-2">
              People Talk About Us
            </h2>

            <div className="w-full">
              <Slider
                ref={ClientsSlider}
                arrows={false}
                {...clientSpeakSettings}
              >
                {caseStudies?.map((casestudy, i) => (
                  <div className="p-6">
                    <div className="border rounded-2xl p-4 hover:bg-white hover:bg-opacity-10 hover:delay-200">
                      <img
                        src={casestudy?.com_image}
                        alt=""
                        className="relative w-10 h-10 -top-8 left-4 rounded-full"
                      />
                      <div className="text-center text-white py-2">
                        A software development company in Dhaka. They also work
                        related to AI, IOT, Digital Marketing services.
                      </div>
                      <div className="text-end text-white py-2">
                        Md Antor Ahmed
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

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
      </div>
    </>
  );
};

export default ServiceDetails;

const settings = {
  centerMode: false,
  arrows: true,
  infinite: true,
  slidesToShow: 3,
  rows: 1,
  speed: 300,
};

const clientSpeakSettings = {
  centerMode: false,
  arrows: true,
  infinite: true,
  slidesToShow: 3,

  rows: 1,
  speed: 300,
};

const serviceDetailsContent = {
  "ui-ux": {
    helpContent: [
      {
        title: "Usability Analyst",
        icon: usability,
      },
      {
        title: "User Research",
        icon: research,
      },
      {
        title: "Product Design",
        icon: product,
      },
      {
        title: "Web/App Design",
        icon: WebApp,
      },
      {
        title: "Visual Design",
        icon: visual,
      },
      {
        title: "Interaction Design",
        icon: Interaction,
      },
    ],

    bestService: [
      {
        service_image: help1,
        service_name: "Create A Strong Impression",
        des: "A logo serves as a company's first touchpoint with consumers. If created well, it may spark the public's attention and encourage them to discover more about the company.",
      },
      {
        service_image: help2,
        service_name: "Builds the Foundation",
        des: "Branding is about influencing customers' emotions. It's all about the story you're attempting to tell, and your identity design sets the setting for it.",
      },
      {
        service_image: help3,
        service_name: "It Fosters Brand Loyalty",
        des: "As your brand expands, people will get more familiar with your identity, creating the notion that you are trustworthy and approachable.",
      },
      {
        service_image: help4,
        service_name: "Rememberable",
        des: "People remember your company by your attractive identity design. So, this is very important to keep your company memorable.",
      },
    ],
  },

  "web-development": {
    helpContent: [
      {
        title: "E-commerce Websites",
        icon: usability,
      },
      {
        title: "Magento Web Development",
        icon: research,
      },
      {
        title: "Custom Website Services for Enterprises",
        icon: product,
      },
      {
        title: "Webpage Design",
        icon: WebApp,
      },
      {
        title: "Drupal Web Development",
        icon: visual,
      },
      {
        title: "Java Web Development",
        icon: Interaction,
      },
    ],

    bestService: [
      {
        service_image: help1,
        service_name: "Create A Strong Impression",
        des: "A logo serves as a company's first touchpoint with consumers. If created well, it may spark the public's attention and encourage them to discover more about the company.",
      },
      {
        service_image: help2,
        service_name: "Builds the Foundation",
        des: "Branding is about influencing customers' emotions. It's all about the story you're attempting to tell, and your identity design sets the setting for it.",
      },
      {
        service_image: help3,
        service_name: "It Fosters Brand Loyalty",
        des: "As your brand expands, people will get more familiar with your identity, creating the notion that you are trustworthy and approachable.",
      },
      {
        service_image: help4,
        service_name: "Rememberable",
        des: "People remember your company by your attractive identity design. So, this is very important to keep your company memorable.",
      },
    ],
  },

  "mobile-app-development": {
    helpContent: [
      {
        title: "Construction",
        icon: usability,
      },
      {
        title: "Mhealth",
        icon: research,
      },
      {
        title: "Retail & Ecommerce",
        icon: product,
      },
      {
        title: "Fintech",
        icon: WebApp,
      },
      {
        title: "Travel & Hospitality",
        icon: visual,
      },
      {
        title: "Insurance",
        icon: Interaction,
      },
    ],

    bestService: [
      {
        service_image: help1,
        service_name: "Boost Customer Engagement",
        des: "Mobile applications help companies in establishing a direct marketing channel with their customers, allowing for more direct and effective connection.",
      },
      {
        service_image: help2,
        service_name: "Improves Efficiency",
        des: "Mobile apps are custom-built with your business requirements, it works capable of performing a variety of duties, obviating the need for several applications.",
      },
      {
        service_image: help3,
        service_name: "Integrates With Existing Software",
        des: "Mobile applications can easily integrate with your existing software. It converts your valuable information very smoothly.",
      },
      {
        service_image: help4,
        service_name: "Ease in Project Management",
        des: "Custom applications can be added to keep track of the progress of your project and the deadlines that you have set.",
      },
    ],
  },

  "software-development": {
    helpContent: [
      {
        title: "Healthcare",
        icon: usability,
      },
      {
        title: "Insurance",
        icon: research,
      },
      {
        title: "Hospitality",
        icon: product,
      },
      {
        title: "Construction Engineering",
        icon: WebApp,
      },
      {
        title: "Legal Tech",
        icon: visual,
      },
      {
        title: "Sports",
        icon: Interaction,
      },
    ],

    bestService: [
      {
        service_image: help1,
        service_name: "Optimized Business Process",
        des: "Custom software development contributes to the optimization of your business operations.",
      },
      {
        service_image: help2,
        service_name: "Invention",
        des: "With a customized software you can choose the own development and technological process you want to utilize.",
      },
      {
        service_image: help3,
        service_name: "Reliability",
        des: "Success is defined by reliability. Proper software testing guarantees you have a trustworthy IT tool to expand your organization.",
      },
      {
        service_image: help4,
        service_name: "Adaptability",
        des: "Custom software can keep up with changing marketing trends by integrating new procedures and technology into your existing software.",
      },
    ],
  },

  "ai-iot-solutions": {
    helpContent: [
      {
        title: "Usability Analyst",
        icon: usability,
      },
      {
        title: "User Research",
        icon: research,
      },
      {
        title: "Product Design",
        icon: product,
      },
      {
        title: "Web/App Design",
        icon: WebApp,
      },
      {
        title: "Visual Design",
        icon: visual,
      },
      {
        title: "Interaction Design",
        icon: Interaction,
      },
    ],

    bestService: [
      {
        service_image: help1,
        service_name: "Create A Strong Impression",
        des: "A logo serves as a company's first touchpoint with consumers. If created well, it may spark the public's attention and encourage them to discover more about the company.",
      },
      {
        service_image: help2,
        service_name: "Builds the Foundation",
        des: "Branding is about influencing customers' emotions. It's all about the story you're attempting to tell, and your identity design sets the setting for it.",
      },
      {
        service_image: help3,
        service_name: "It Fosters Brand Loyalty",
        des: "As your brand expands, people will get more familiar with your identity, creating the notion that you are trustworthy and approachable.",
      },
      {
        service_image: help4,
        service_name: "Rememberable",
        des: "People remember your company by your attractive identity design. So, this is very important to keep your company memorable.",
      },
    ],
  },
};
