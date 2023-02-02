import { Collapse, Tooltip } from "antd";
import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { Helmet } from "react-helmet";
import Fade from "react-reveal/Fade";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import { useSpeechSynthesis } from "react-speech-kit";
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
import speakLogo from "../../../../../asstes/Lotties/speak.json";
import useCaseStudy from "../../../../Shared/Hooks/useCaseStudy";
import useClientSpeak from "../../../../Shared/Hooks/useClientSpeak";
import Icons from "../../../../Shared/Icons";
import { handleFetchServiceById } from "../../../../Shared/services";
import Footer from "../../Footer";
import Faq from "../../../../../asstes/Images/faq.png";

const { Panel } = Collapse;

const ServiceDetails = ({ setLoader }) => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { speak } = useSpeechSynthesis();
  const synth = window.speechSynthesis;

  const ClientsSlider = useRef(null);
  const [serviceDetails, setServiceDetails] = useState();
  const [capabilityMenus, setCapabilityMenus] = useState([]);
  // const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  // const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [caseStudies] = useCaseStudy();
  const [clientSpeak] = useClientSpeak();

  useEffect(() => {
    synth.cancel();
    (async () => {
      const fetchServicedata = await handleFetchServiceById(slug);
      if (fetchServicedata) {
        setTimeout(() => {
          setLoader(false);
        }, 1500);
      }
      setServiceDetails(fetchServicedata);
    })();
  }, [setLoader, slug, synth]);

  const handleNavigate = (menu) => {
    if (!window.location.hash.includes("#")) {
      navigate(`../${menu}`, { replace: true });
    }
  };

  console.log(clientSpeak);

  useEffect(() => {
    setCapabilityMenus(serviceDetails?.services_capabilities_menu?.split(","));
  }, [serviceDetails]);

  return (
    <>
      {/* For SEO */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{serviceDetailsContent[`${slug}`]?.metaTitle}</title>
        <meta
          name="description"
          content={serviceDetailsContent[`${slug}`]?.metaDescription}
        />
        <meta
          name="keywords"
          content={serviceDetailsContent[`${slug}`]?.metaKeywords}
        />
      </Helmet>

      <div className="blog_details min-h-full bg-black text-white py-20 px-36 h-[90vh] overflow-y-auto font-poppins w-11/12 mx-auto">
        <div className="mb-10">
          <Icons.GoBackArrow
            className="w-6 font-semibold cursor-pointer"
            onClick={() => {
              navigate(`../#services`, { replace: true });
            }}
          />
        </div>

        <h1 className="text-4xl font-bold leading-10 mb-10 font_title">
          {serviceDetails?.service_name}
        </h1>
        <div>
          <div className="relative">
            <h2 className="text-2xl leading-5 font-medium mb-6">
              {serviceDetails?.service_title}
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
                    text: serviceDetails?.description,
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
          <img
            width={"70%"}
            src={process.env.REACT_APP_ASSETS_URL + "/" + serviceDetails?.file}
            alt=""
          />
        </div>

        <div className="mt-24">
          <div className="relative">
            <h5 className="uppercase text-base font-normal leading-4 text-center">
              IDENTITY DESIGN SERVICES
            </h5>
            <h3 className="text-2xl leading-6 font-medium text-center mt-8 mb-6">
              <span>How We Can Help?</span>
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
                    text: serviceDetails?.identity_design_des,
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
            className="text-base leading-6 text-white font-medium text-opacity-60 text-center"
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

          <div className="mt-20 mb-16">
            {(serviceDetailsContent[`${slug}`]?.bestServiceTitle).map(
              (content, i) => (
                <>
                  <div className="text-2xl font-semibold text-center uppercase mb-5">
                    {content?.title}
                  </div>
                  <div className="text-xl font-normal text-center pb-13">
                    {content?.tagline}
                  </div>
                </>
              )
            )}
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
                  className="text-base leading-6 font-normal text-white text-opacity-60 text-center mt-2.5"
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

          <div className="relative">
            <div
              id="serviceDetails_content"
              className="serviceDetails_content flex justify-center items-center flex-col my-16 text-white"
              style={{
                letterSpacing: "0.09em",
              }}
              dangerouslySetInnerHTML={{
                __html: serviceDetails?.content,
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
            <div className="relative">
              <h2 className="text-2xl leading-6 font-medium text-center mb-10 mt-2">
                {serviceDetails?.service_deliver_title}
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
                      text: serviceDetails?.service_deliver_des,
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
                  <div className="p-4">
                    <div
                      onClick={() => {
                        navigate(`../case-studies/${casestudy?.slug}`, {
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
                        alt=""
                        className="w-full px-4 rounded-xl"
                      />
                      <div className="ml-4 text-white py-2 text-center">
                        {casestudy?.com_name}
                      </div>
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
                {clientSpeak?.map((client, i) => (
                  <div className="p-6">
                    <div className="border rounded-2xl p-4 bg-gray-100 bg-opacity-20 backdrop-filter shadow-md shadow-gray-300 backdrop-blur-md hover:bg-opacity-25 hover:delay-200">
                      <img
                        src={
                          process.env.REACT_APP_ASSETS_URL + "/" + client?.image
                        }
                        alt=""
                        className="relative w-10 h-10 -top-8 left-4 rounded-full"
                      />
                      <div className="text-center text-white py-2">
                        {client?.description}
                      </div>
                      <div className="text-end text-white py-2">
                        {client?.name}, {client?.designation}
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        {/* FAQ's */}
        <div className="case_study_details min-h-full bg-black text-white py-20 font-poppins">
          <div
            className="text-5xl font-bold leading-10 capitalize font_title mb-8"
            style={{
              letterSpacing: "0.06em",
            }}
          >
            <Fade left>
              <div className="leading-10">FAQ'S</div>
            </Fade>
          </div>

          <div>
            <Fade left cascade>
              <img src={Faq} alt="faq" className="m-auto py-4" />
              <div className="text-3xl font-semibold px-10 pb-8 leading-6 text-center">
                Most Popular Questions
              </div>
            </Fade>
          </div>

          <div className="faq text-xs pb-4 mt-10">
            <Fade left cascade>
              <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4">
                {FaqContents.map((content, i) => (
                  <Collapse accordion ghost>
                    <Panel
                      className="text-xl mb-8 relative"
                      header={content?.Q}
                      key={i}
                    >
                      <div className="flex items-start">
                        <Tooltip
                          placement="top"
                          title={`Click to "Listen". Double Click to "Stop"`}
                          color={"rgba(90, 90, 90, 0.7)"}
                        >
                          <button
                            onClick={() => {
                              synth.cancel();
                              speak({
                                text: content?.A,
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
                          {content?.A}
                        </p>
                      </div>
                    </Panel>
                  </Collapse>
                ))}
              </div>
            </Fade>
          </div>
        </div>
        <Footer />
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
  dots: true,
  rows: 1,
  speed: 300,
};

const clientSpeakSettings = {
  centerMode: false,
  arrows: true,
  infinite: true,
  dots: true,
  slidesToShow: 3,
  rows: 1,
  speed: 300,
};

const serviceDetailsContent = {
  "ui-ux": {
    metaTitle:
      "UI & UX Services- Online IT Services for Business – Quadque Tech",
    metaDescription:
      "We understand that the best UI/UX solutions have the right blend of creativity and user-friendly features. Take a look at how we can help you with our UI/UX services.",
    metaKeywords:
      "ux ui design, ui ux, ui&ux designer, ux ui, ui ux designer, ui vs ux, difference between ui and ux, ui ux design services, ui ux design and development services",

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
    bestServiceTitle: [
      {
        title: "THE BEST SOLUTIONS SUITED TO YOUR NEEDS ",
        tagline: "Our services are client-centered",
      },
    ],
    bestService: [
      {
        service_image: help1,
        service_name: "Create A Strong Impression",
        des: "Let us help you build a strong impression by designing your logo, which is the brand’s first touchpoint with customers. The right strategy will grab the attention of more customers and increase engagement with the brand.",
      },
      {
        service_image: help2,
        service_name: "Build the Foundation of Your Brand",
        des: "Tell the story of your brand and influence your customers’ emotions proper identity design. We build a foundation of your overall brand strategy that will impact your customers and encourage them to take action.",
      },
      {
        service_image: help3,
        service_name: "Foster Brand Loyalty",
        des: "Build a loyal base of customers by reaching a larger audience with your identity. Our goal is to make your brand trustworthy and approachable to your target audience. These factors are crucial for developing brand loyalty.",
      },
      {
        service_image: help4,
        service_name: "Be Rememberable",
        des: "Win the hearts of your customers with an attractive identity design that will be rememberable in the long term. We understand that the right designs can help with your brand positioning and increase your brand’s popularity.",
      },
    ],
  },

  "web-development": {
    metaTitle:
      "Web Development Services- Online IT Services for Business – Quadque Tech",
    metaDescription:
      "Website development does not have to be too complicated. We can develop awesome website services with unique and intuitive features using various platforms.",
    metaKeywords:
      "web development, web development company, web development Sydney, web site development, web development agency, web design agency Australia, web design agency Bangladesh, web application development, web development services",

    helpContent: [
      {
        title: "Usability Analyst",
        icon: usability,
      },
      {
        title: "Services for Enterprise",
        icon: research,
      },
      {
        title: "E-commerce App",
        icon: product,
      },
      {
        title: "Website Development",
        icon: WebApp,
      },
      {
        title: "Web Portals",
        icon: visual,
      },
      {
        title: "App Development",
        icon: Interaction,
      },
    ],
    bestServiceTitle: [
      {
        title: "USER-FRIENDLY SOLUTIONS TO DEVELOP SUPERB WEBSITES",
        tagline: "Our web development features are intuitive and reliable",
      },
    ],
    bestService: [
      {
        service_image: help1,
        service_name: "Increase Your Online Exposure",
        des: "A good website is essential for increasing your online exposure. Whether you are a start-up or a non-profit organisation, having a well-maintained website can have a very positive impact on your identity. We can help you to achieve this goal.",
      },
      {
        service_image: help2,
        service_name: "Make Your Brand Discoverable",
        des: "We will develop a highly navigable and user-friendly website that will make your brand more discoverable to your audience. This is a crucial step in any branding strategy that you should not overlook.",
      },
      {
        service_image: help3,
        service_name: "Increase Your Trustworthiness",
        des: "A website is a reliable source of information related to your business or organisation. It’s also a representation of your services and activities. So we specialise in developing very professional websites for our clients.",
      },
      {
        service_image: help4,
        service_name: "Acquire New Customers",
        des: "You can acquire new customers from all over the globe using a well-built website. We can provide you with excellent web development services that can play a huge role in your marketing strategy.",
      },
    ],
  },

  "mobile-app-development": {
    metaTitle:
      "Mobile App Development Services- Online IT Services for Business – Quadque Tech",
    metaDescription:
      "Let's take a look at our innovative and powerful mobile application development services. We can develop the perfect mobile app for your business without any issues.",
    metaKeywords:
      "mobile app development company, mobile app developers, develop mobile apps, iphone mobile apps development company, mobile app developer, mobile app developer guide, web and mobile app development",

    helpContent: [
      {
        title: "Native and Hybrid Mobile App Development",
        icon: usability,
      },
      {
        title: "Progressive Web App Development",
        icon: research,
      },
      {
        title: "HR Apps",
        icon: product,
      },
      {
        title: "Retail and E-commerce Apps",
        icon: WebApp,
      },
      {
        title: "Fintech Apps",
        icon: visual,
      },
      {
        title: "Health and Educational Apps",
        icon: Interaction,
      },
    ],
    bestServiceTitle: [
      {
        title: "RELIABLE AND USER-FRIENDLY MOBILE APPLICATIONS",
        tagline: "Combining Innovative and Intuitive Features",
      },
    ],
    bestService: [
      {
        service_image: help1,
        service_name: "Get the Best UI Features",
        des: "Having a well-designed UI with user-friendly features is one of the prerequisites for developing any mobile application. Our expert team of developers collaborate with our experienced UI and UX designers to deliver a stable with amazing UI features.",
      },
      {
        service_image: help2,
        service_name: "Say Goodbye to App Issues",
        des: "We all know how frustrating it is to have an app that suffers from issues like slow loading times and crashes. These issues can be a big problem for the users. Therefore, our team focuses on mitigating these issues during and after development.",
      },
      {
        service_image: help3,
        service_name: "Protect Your Data",
        des: "Protecting personal information and important data is a crucial step in developing a safe and trustworthy app for your users. We use the latest technologies and security measures to ensure the overall safety of the data in your app.",
      },
      {
        service_image: help4,
        service_name: "Incorporate Amazing User Support",
        des: "A mobile application should be a source of convenience for the users. We prioritise this step by implementing chatbots and other user support features that can help you interact with your users and get their feedbacks.",
      },
    ],
  },

  "software-development": {
    metaTitle:
      "Software development Services- Online IT Services for Business – Quadque Tech",
    metaDescription:
      "Developing problem-free software can be a challenging task. Get the best software for your organization with our software development services.",
    metaKeywords:
      "software developer, software development, software developer salary, software development life cycle, software developers, agile software development, custom software development, software development company, software developer jobs, software developers perth, app development software,",

    helpContent: [
      {
        title: "ERP Packages",
        icon: usability,
      },
      {
        title: "CRM Software",
        icon: research,
      },
      {
        title: "SAP",
        icon: product,
      },
      {
        title: "HR Solutions",
        icon: WebApp,
      },
      {
        title: "Legal Tech",
        icon: visual,
      },
      {
        title: "Software for Healthcare and Education",
        icon: Interaction,
      },
    ],
    bestServiceTitle: [
      {
        title: "CUSTOMISED AND INNOVATIVE SOFTWARE SOLUTIONS",
        tagline: "Advanced Software Development Technologies and Services",
      },
    ],
    bestService: [
      {
        service_image: help1,
        service_name: "Highly Operational Performance",
        des: "Core operational features like usability, functionality and security form the foundation of a good software. Our experienced team of developers focus on these features throughout the development process.",
      },
      {
        service_image: help2,
        service_name: "Adaptable Features",
        des: "We develop user-friendly software packages that have high levels of interoperability and portability. We have an in-dept knowledge of several platforms. So we know how to make a stable and cross-functional software.",
      },
      {
        service_image: help3,
        service_name: "Post-development Maintenance",
        des: "Our services do not end upon the completion of the development of the software. We make sure that the software does not suffer from bugs or crashes in the post-development stage.",
      },
      {
        service_image: help4,
        service_name: "Your Security is Our First Priority",
        des: "We understand that one of the biggest issues today is the threat to data security. We take strict measures to ensure that our software has every capability and feature to protect the data from all threats.",
      },
    ],
  },

  "ai-&-iot-solutions": {
    metaTitle:
      "AI & IoT Services- Online IT Services for Business – Quadque Tech",

    metaDescription:
      "The future of technology will be paved by Artificial Intelligence (AI) and the Internet of Things (IoT). Let us assist you with the most innovative AI and IoT solutions.",
    metaKeywords:
      "AI technologies artificial intelligence AI and IoT Solutions",

    helpContent: [
      {
        title: "AI Chatbot",
        icon: usability,
      },
      {
        title: "AI Office Assistant",
        icon: research,
      },
      {
        title: "Smart Voice Assistant",
        icon: product,
      },
      {
        title: "IoT Based Alarm System",
        icon: WebApp,
      },
      {
        title: "Social Media Monitoring App",
        icon: visual,
      },
      {
        title: "Smart Home Controlling System",
        icon: Interaction,
      },
    ],
    bestServiceTitle: [
      {
        title: "SMART AI AND IOT SOLUTIONS DESIGNED FOR YOUR NEEDS ",
        tagline: "Powerful AI Technologies and Innovative IoT Services",
      },
    ],
    bestService: [
      {
        service_image: help1,
        service_name: "Advanced Technology",
        des: "AI has come a long way thanks to the hard work of scientists and researchers in the field. We incorporate the latest technological features to deliver smart and innovative AI solutions to our clients.",
      },
      {
        service_image: help2,
        service_name: "Reliable Security Measures",
        des: "One of the most important aspects of any IoT service is data security. We rely on the most advanced and updated security measures to make sure that our clients are free from all kinds of cyber security threats.",
      },
      {
        service_image: help3,
        service_name: "From Planning to Implementation",
        des: "Every organisation has different needs. We identify the specific requirements of every client and plan the best strategy for implementing the perfect AI and IoT solutions for that organisation.",
      },
      {
        service_image: help4,
        service_name: "Improve Your Organisational Performance",
        des: "One of the biggest advantages of AI and IoT solutions is that they improve the overall performance of an organisation and allow a better service. You can rely on our solutions to improve your organisational performance.",
      },
    ],
  },
};

const FaqContents = [
  {
    Q: "What services does Quadque Technologies offer?",
    A: "We offer a wide range of technology solutions, including custom software development, website design and development, cloud computing solutions, cybersecurity and data protection, and network infrastructure and IT support. We are dedicated to helping our clients achieve their goals through the use of cutting-edge technology and innovative thinking.",
  },
  {
    Q: "Can you provide customized solutions for my business?",
    A: "Absolutely! We pride ourselves on our ability to understand the unique needs of each of our clients and provide customized solutions to help them succeed. Whether you're looking to streamline your operations, improve your online presence, or protect your data, we have the expertise to help you achieve your goals.",
  },
  {
    Q: "What industries does Quadque Technologies serve?",
    A: "We serve a diverse range of industries, including healthcare, finance, retail, manufacturing, and more. We have experience working with businesses of all sizes, from small startups to large enterprises.",
  },
  {
    Q: "Does Quadque Technologies offer IT support services?",
    A: "Yes, we offer IT support services to help keep your business running smoothly. Our team of experienced professionals is available to assist with network infrastructure, software troubleshooting, and other IT-related issues.",
  },
  {
    Q: "How can I contact Quadque Technologies for more information?",
    A: "You can contact us by phone, email, or through our website contact form. Our team isavailable to answer any questions you may have and schedule a consultation to discussyour technology needs.",
  },
  {
    Q: "Does Quadque Technologies have any certifications or accreditations?",
    A: "Yes, we hold various industry-standard certifications and accreditations. These includecertifications in software development methodologies such as Agile and Scrum, as well ascertifications in specific technologies such as AWS and Microsoft Azure.",
  },
  {
    Q: "Does Quadque Technologies have experience working with remote teams?",
    A: "Yes, we have experience working with remote teams and have implemented robust systems and processes to ensure effective communication and collaboration.",
  },
  {
    Q: "Does Quadque Technologies offer training and development for its employees?",
    A: "Yes, we believe in investing in the growth and development of our employees. We offer various training and development opportunities, both internal and external, to help our team members stay up-to-date with the latest technologies and best practices.",
  },
  {
    Q: "How does Quadque Technologies handle project management?",
    A: "We use a combination of industry-standard project management methodologies such as Agile and Waterfall to ensure that all projects are delivered on time, within budget, and to the satisfaction of our clients. We also have a dedicated project management team to oversee the progress of each project and ensure smooth communication with our clients.",
  },
  {
    Q: "Is Quadque Technologies involved in any community or social responsibility initiatives?",
    A: "Yes, we believe in giving back to the community and are involved in various community and social responsibility initiatives. These include mentoring local students, participating in charity events, and supporting local non-profit organizations.",
  },
  {
    Q: "How does Quadque Technologies approach software development?",
    A: "We use a variety of software development methodologies such as Agile, Scrum and Waterfall. Our team of experienced developers follows best practices and industry standards to ensure that all software is developed to the highest quality and meets the specific needs of our clients.",
  },
  {
    Q: "Does Quadque Technologies offer website maintenance and support services?",
    A: "Yes, we offer website maintenance and support services to ensure that your website is always up-to-date and running smoothly. Our team can help with updates, backups, security, and troubleshooting.",
  },
  {
    Q: "How does Quadque Technologies approach cloud computing solutions?",
    A: "We have experience with a variety of cloud computing platforms such as AWS, Azure, and Google Cloud. Our team can help you with cloud migration, deployment, and ongoing management and support. We also provide advice on the best cloud solution for your business based on your specific requirements.",
  },
  {
    Q: "Does Quadque Technologies offer cybersecurity and data protection services?",
    A: "Yes, we offer a range of cybersecurity and data protection services to help keep your business and data safe. Our team can assist with threat management, penetration testing, incident response, and compliance with industry regulations.",
  },
  {
    Q: "How can Quadque Technologies help with network infrastructure and IT support?",
    A: "Our team of experienced professionals can assist with the design, implementation, and ongoing management of your network infrastructure. We can also provide IT support services to help with software troubleshooting, network issues, and other IT-related needs.",
  },
];
