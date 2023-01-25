import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
// import Icons from "../../../Shared/Icons";
import CountUp from "react-countup";
// import Work2 from "../../../../asstes/Images/case-study-2.png";
// import Work1 from "../../../../asstes/Images/case-study.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
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

import Lottie from "lottie-react";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import useCaseStudy from "../../../Shared/Hooks/useCaseStudy";
import useClientSpeak from "../../../Shared/Hooks/useClientSpeak";
import { handleFetchServiceBySlug } from "../../../Shared/services";

const ServiceDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const CaseSlider = useRef(null);
  const ReviewsSlider = useRef(null);
  const [ClientSpeak] = useClientSpeak();
  const [CaseStudy] = useCaseStudy();
  const [Service, setService] = useState();
  const [capabilities, setCapabilities] = useState();
  const [loader, setLoader] = useState(true);
  console.log(Service);

  useEffect(() => {
    (async () => {
      const fetchServicedata = await handleFetchServiceBySlug(slug);
      console.log("local", fetchServicedata);
      if (fetchServicedata.status === 200) {
        setTimeout(() => {
          setLoader(false);
          setService(fetchServicedata.data);
        }, 5000);
      } else {
        setLoader(true);
      }
      console.log("service data", Service);
    })();
  }, [slug]);

  useEffect(() => {
    const cap_array = Service?.services_capabilities_menu.split(",");
    setCapabilities(cap_array);
  }, [Service]);

  /*     useEffect(() => {
    if (Service !== "") {
      setTimeout(() => {
        setLoader(false);
      }, 5000);
    }
  }, []); */

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
      {loader ? (
        <div className="w-full h-full z-40 flex flex-col justify-center items-center m-auto absolute bg-black backdrop-blur-md">
          <Lottie
            className="w-1/2 mx-auto"
            animationData={loaderFile}
            loop={true}
          />

          <div className="font_title text-white animate-pulse">Loading...</div>
        </div>
      ) : null}
      <div
        className={`w-full h-auto mt-30 text-white px-6 ${
          !Service ? "scale-0" : ""
        }`}
      >
        <h1 className="font_title text-3xl font-bold pb-5">
          {Service?.service_name}
        </h1>
        <div className="font-semibold pb-2">{Service?.service_title}</div>
        <div className="text-sm text-justify pb-2">{Service?.description}</div>

        <div
          onClick={() => navigate(`../#start-project`, { replace: true })}
          className="text-brand-color font-bold"
        >
          START PROJECT
        </div>

        <div className="py-13">
          <div>
            <img
              src={process.env.REACT_APP_ASSETS_URL + "/" + Service?.file}
              alt=""
              className="w-[80%] m-auto"
            />
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
          {(serviceDetailsContent[`${slug}`]?.bestServiceTitle).map(
            (content, i) => (
              <>
                <div className="text-sm text-center uppercase pb-1">
                  {content?.title}
                </div>
                <div className="text-2xl text-center pb-13">
                  {content?.tagline}
                </div>
              </>
            )
          )}
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
                  src={
                    process.env.REACT_APP_ASSETS_URL + "/" + details?.com_image
                  }
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
        <div className="pb-10">
          <div className="max-w-[350px] max-h-[350px] m-auto text-white pb-4">
            <Slider ref={ReviewsSlider} arrows={false} {...settings}>
              {ClientSpeak.map((details) => (
                <div>
                  <div className="min-h-[400px] border rounded-2xl p-4 my-6 mx-2">
                    <img
                      src={
                        process.env.REACT_APP_ASSETS_URL + "/" + details?.image
                      }
                      alt=""
                      className="bg-white w-14 h-14 relative -top-10 left-4 rounded-full"
                    />
                    <div
                      className="text-justify font-thin"
                      dangerouslySetInnerHTML={{ __html: details?.description }}
                    ></div>
                    <div className="text-end text-white py-2">
                      -{details?.name}
                      <br />
                      {details?.designation}
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
        title: "mHealth and Educational Apps",
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
