import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Mobile from "../../../../asstes/Images/mobile.png";
import Icons from "../../../Shared/Icons";
import CountUp from "react-countup";
import Work2 from "../../../../asstes/Images/case-study-2.png";
import Work1 from "../../../../asstes/Images/case-study.png";
import help1 from "../../../../asstes/Images/help1.png";
import help2 from "../../../../asstes/Images/help2.png";
import help3 from "../../../../asstes/Images/help3.png";
import help4 from "../../../../asstes/Images/help4.png";
import Interaction from "../../../../asstes/Images/Interaction.png";
import product from "../../../../asstes/Images/product.png";
import research from "../../../../asstes/Images/Research.png";
import usability from "../../../../asstes/Images/useability.png";
import visual from "../../../../asstes/Images/visual.png";
import WebApp from "../../../../asstes/Images/WebApp.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { handleFetchServiceBySlug } from "../../../Shared/services";
import useClientSpeak from "../../../Shared/Hooks/useClientSpeak";
import useCaseStudy from "../../../Shared/Hooks/useCaseStudy";

import point from "../../../../asstes/Icons/service-icon.svg";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const CaseSlider = useRef(null);
  const ReviewsSlider = useRef(null);
  const [ClientSpeak] = useClientSpeak();
  const [CaseStudy] = useCaseStudy();
  const [Service, setService] = useState();
  const [capabilities, setCapabilities] = useState();
  //console.log(Service);

  useEffect(() => {
    (async () => {
      const fetchServicedata = await handleFetchServiceBySlug(slug);
      setService(fetchServicedata);
      console.log("service data", Service);
    })();
  }, [slug]);

  useEffect(() => {
    const cap_array = Service?.services_capabilities_menu.split(",");
    setCapabilities(cap_array);
  }, [Service]);

  const settings = {
    centerMode: false,
    infinite: true,
    slidesToShow: 1,
    speed: 300,
  };

  //console.log(capabilities);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Services`}</title>
        {/* <meta name="keywords" content={blogDetails?.meta_keyword} /> */}
      </Helmet>
      <div className="w-full mt-30 text-white px-6">
        <div className="text-3xl font-bold pb-5">{Service?.service_name}</div>
        <div className="font-semibold pb-2">{Service?.service_title}</div>
        {/* <div className="text-sm text-justify pb-2">{Service?.description}</div> */}
        <div
          className="text-justify font-thin pb-4"
          dangerouslySetInnerHTML={{ __html: Service?.description }}
        ></div>
        <div
          onClick={() => navigate(`../#start-project`, { replace: true })}
          className="text-brand-color font-bold"
        >
          START PROJECT
        </div>

        <div className="py-13">
          <div>
            <img src={Mobile} alt="" className="w-[70%] m-auto" />
          </div>
        </div>

        {/* IDENTITY DESIGN SERVICES SECTION */}
        <div className="text-sm text-center uppercase pb-1">
          IDENTITY DESIGN SERVICES
        </div>
        <div className="text-2xl text-center pb-3">How We Can Help?</div>
        <div
          className="Service_Identity text-white text-center pb-4"
          dangerouslySetInnerHTML={{ __html: Service?.identity_design_des }}
        ></div>

        <div className="flex flex-wrap justify-between gap-5">
          {(serviceDetailsContent[`${slug}`]?.helpContent).map((content, i) => (
            <div className="flex items-center" key={i}>
              <img className="w-5" src={content?.icon} alt="" />
              <span className="text-base font-normal leading-5 ml-2">
                {content?.title}
              </span>
            </div>
          ))}
        </div>

        {/*       <div className="flex justify-between  pb-13">
        <div className="text-sm font-semibold">
        <span className="flex gap-1">
        <Icons.ServiceMatter className="m-auto" /> Usability Analyst
        </span>
        </div>
        <div className="text-sm font-semibold">
          <span className="flex gap-1">
          {" "}
          User Research
          <Icons.ServiceMatter className="m-auto" />
          </span>
          </div>
          <div className="text-sm font-semibold">
          <span className="flex gap-1">
          <Icons.ServiceMatter className="m-auto" /> Product Design
          </span>
          </div>
          <div className="text-sm font-semibold">
          <span className="flex gap-1">
          {" "}
          Web/App Design
          <Icons.ServiceMatter className="m-auto" />
          </span>
          </div>
          <div className="text-sm font-semibold">
          <span className="flex gap-1">
          <Icons.ServiceMatter className="m-auto" /> Visual Design
          </span>
          </div>
          <div className="text-sm font-semibold">
          <span className="flex gap-1">
            {" "}
            Interaction Design
            <Icons.ServiceMatter className="m-auto" />
            </span>
            </div>
          </div> */}

        <div className="flex py-13">
          <div className="w-1/2 text-brand-color text-5xl font-semibold text-center">
            {<CountUp start={0} end={Service?.project_count} duration={2} />}+
            <br />
            <span className="text-white text-base font-thin">
              Projects Completed
            </span>{" "}
          </div>
          <div className="bg-white w-[1px] h-14"></div>
          <div className="w-1/2 text-brand-color text-5xl font-semibold text-center">
            {<CountUp start={0} end={Service?.happy_clients} duration={3} />}+
            <br />
            <span className="text-white text-base font-thin">
              Happy Clients
            </span>{" "}
          </div>
        </div>

        {/* BEST FOR YOU SECTION */}

        <div>
          <div className="text-sm text-center uppercase pb-1">BEST FOR YOU</div>
          <div className="text-2xl text-center pb-13">
            We serve the best service
          </div>
          {serviceDetailsContent[`${slug}`].bestService?.map((service, i) => (
            <div className="pb-10">
              <div className="flex-col pb-8">
                <div className="flex gap-4">
                  <img src={service?.service_image} alt="" className="w-20" />
                  <div className="w-2/3 text-2xl flex items-end">
                    {service?.service_name}
                  </div>
                </div>
                <div className="text-sm text-justify text-[#D0D4EA] pt-5">
                  {service?.des}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="bestforyou text-white pt-10"
          dangerouslySetInnerHTML={{ __html: Service?.content }}
        ></div>
        {/* WHY YOU CHOOSE US SECTION */}

        {/* <div>
        <div className="text-sm text-center uppercase pb-1">
        WHY YOU CHOOSE US
        </div>
        <div className="text-2xl text-center pb-8">
        Our Designers Paint Your Identity
        </div>
        <img src={Designer} alt="" className="w-1/2 m-auto pb-8" />
        <div className="text-sm text-center pb-13">
        We develop some of the most visually beautiful and eye-catching designs,
        and our optimized designs significantly improve the quality of the user
        experience. <br />
        <br /> We do great deal in design under a budgeted price to give best
        experience for the users on the web and mobile platforms
        </div>
      </div> */}

        {/* SERVICE CAPABILITY SECTION */}
        <div id="Service" className="service-capbility py-13 px-2">
          {capabilities?.map((list) => (
            <div className="box rounded-lg mb-4">
              <div className="z-[-1] relative text-center text-xl text-white font-thin py-3">
                {list}
              </div>
            </div>
          ))}
          {/* <div className="text-2xl text-center pb-2">
          OUR UI AND UX DESIGN SERVICES AND CAPABILITIES
        </div>
        <div className="text-sm text-center pb-13">
          When you choose our services, you get everything to realise your
          product idea properly, from the experience of working.
          </div>
          <div className="box rounded-lg mb-4">
          <div className="z-[-1] relative text-center text-xl font-thin py-5">
          AR Experience Design
          </div>
          </div>
          <div className="box rounded-lg mb-4">
          <div className="z-[-1] relative text-center text-xl font-thin py-5">
          Mobile app UX and UI Design Service
          </div>
          </div>
          <div className="box rounded-lg mb-4">
          <div className="z-[-1] relative text-center text-xl font-thin py-5">
            Cross-Platform Experience Design
          </div>
          </div>
          <div className="box rounded-lg mb-4">
          <div className="z-[-1] relative text-center text-xl font-thin py-5">
            UI and UX Consulting
          </div>
        </div>
        <div className="box rounded-lg mb-4">
          <div className="z-[-1] relative text-center text-xl font-thin py-5">
            Design Workshops
            </div>
        </div>
        <div className="box rounded-lg mb-4">
        <div className="z-[-1] relative text-center text-xl font-thin py-5">
            Web Design Service
          </div>
        </div> */}
        </div>

        {/* DELIVER SECTION */}
        <div className="text-2xl text-center pb-2">
          {Service?.service_deliver_title}
        </div>
        <div className="text-sm text-center pb-13">
          {Service?.service_deliver_des}
        </div>

        {/* OUR LATEST WORK SLIDER SECTION */}
        <div className="text-2xl pb-5">Our Latest Work</div>
        <div className="max-w-[350px] m-auto text-white pb-13">
          <Slider ref={CaseSlider} arrows={false} {...settings}>
            {CaseStudy?.map((details) => (
              <div
                onClick={() =>
                  navigate(`../case-study/${details.slug}`, { replace: true })
                }
              >
                <img
                  src={details?.com_image}
                  alt=""
                  className="w-full rounded-2xl"
                />
                <div className="text-center text-white py-2">
                  {details?.com_name}
                </div>
              </div>
            ))}
            {/* <div>
            <img src={Work2} alt="" className="w-full px-4" />
            <div className="text-center text-white py-2">
            OTOBI Bd lagest furniture Shop
            </div>
          </div> */}
          </Slider>
        </div>

        {/* People Talk About Us SLIDER SECTION */}
        <div className="text-2xl pb-5">People Talk About Us</div>
        <div className="max-w-[350px] max-h-[350px] m-auto text-white pb-4">
          <Slider ref={ReviewsSlider} arrows={false} {...settings}>
            {ClientSpeak.map((details) => (
              <div>
                <div className="h-[350px] border rounded-2xl p-4 my-6 mx-2">
                  <img
                    src={details?.image}
                    alt=""
                    className="bg-white w-14 h-14 relative -top-10 left-4 rounded-full"
                  />
                  <div
                    className="text-justify font-thin"
                    dangerouslySetInnerHTML={{ __html: details?.description }}
                  ></div>
                  <div className="text-end text-white py-2">
                    -{details?.name}
                  </div>
                </div>
              </div>
            ))}
            {/*           <div>
            <div className="border rounded-2xl p-4 m-4">
            <img
                src={Avatar}
                alt=""
                width={30}
                className="relative -top-8 left-4"
                />
              <div className="text-center text-white py-2">
              A software development company in Dhaka. They also work related
              to AI, IOT, Digital Marketing services.
              </div>
              <div className="text-end text-white py-2">Md Antor Ahmed</div>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;

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

  "mobile-app-development": {
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

  "software-development": {
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

  "ai-&-iot-solutions": {
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
