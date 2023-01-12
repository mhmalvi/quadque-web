import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import rightImage from "../../../../../asstes/Images/caseStudyrightImg.jpg";
// import help1 from "../../../../../asstes/Images/help1.png";
// import help2 from "../../../../../asstes/Images/help2.png";
// import help3 from "../../../../../asstes/Images/help3.png";
// import help4 from "../../../../../asstes/Images/help4.png";
// import Interaction from "../../../../../asstes/Images/Interaction.png";
// import product from "../../../../../asstes/Images/product.png";
// import research from "../../../../../asstes/Images/Research.png";
// import usability from "../../../../../asstes/Images/useability.png";
// import visual from "../../../../../asstes/Images/visual.png";
// import WebApp from "../../../../../asstes/Images/WebApp.png";
import { handleFetchCaseStudyById } from "../../../../Shared/services";

const CaseStudyDetails = () => {
  //   const navigate = useNavigate();
  const { slug } = useParams();
  const [caseStudyDetails, setCaseStudyDetails] = useState();
  

  useEffect(() => {
    (async () => {
      const fetchServicedata = await handleFetchCaseStudyById(slug);
      console.log(fetchServicedata);
      setCaseStudyDetails(fetchServicedata);
    })();
  }, [slug]);

  //   const handleNavigate = (menu) => {
  //     if (!window.location.hash.includes("#")) {
  //       navigate(`../${menu}`, { replace: true });
  //     }
  //   };

  //   useEffect(() => {
  //     setCapabilityMenus(caseStudyDetails?.services_capabilities_menu.split(","));
  //   }, [caseStudyDetails]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Services`}</title>
        {/* <meta name="keywords" content={blogDetails?.meta_keyword} /> */}
      </Helmet>
      <div className="blog_details min-h-full bg-black text-white py-20 px-36 font_anurati h-[90vh] overflow-y-auto font-poppins w-11/12 mx-auto">
        <h1 className="max-w-4xl mx-auto text-4xl font-bold leading-10 my-10 text-center">
          Creative Digital Marketing Creative Digital Marketing Agency
        </h1>
        <div>
          <p
            className="w-[468px] mx-auto text-base font-light leading-6 text-[#D0D4EA] mb-5 text-center"
            style={{
              letterSpacing: "0.07em",
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </p>
        </div>

        <div className="mt-16 w-9/12 mx-auto flex justify-center items-center">
          <img width={"70%"} src={caseStudyDetails?.file} alt="" />
        </div>

        <div className="my-12">
          <p
            className="w-[468px] mx-auto text-base font-light leading-6 text-[#D0D4EA] mb-5 text-center"
            style={{
              letterSpacing: "0.07em",
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </p>

          <div className="flex justify-center items-center pt-6">
            <button
              className="px-7 py-3.5 text-base  font-medium leading-4 rounded-full bg-[#0793FF] text-black text-center"
              style={{
                letterSpacing: "0.48px",
              }}
            >
              Contact us
            </button>
          </div>
        </div>

        <div className="flex justify-between items-stretch mt-52">
          <div className="w-1/2 mt-24 pb-16">
            <h2 className="text-2xl leading-6 font-medium mb-10 mt-2">
              {caseStudyDetails?.service_deliver_title}
              Creative Digital Marketing Creative Digital Marketing Agency
            </h2>

            <p
              className="text-base leading-6 font-normal text-white text-opacity-75"
              style={{
                letterSpacing: "0.07em",
              }}
            >
              {caseStudyDetails?.service_deliver_des}
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
              sadipscing elitr Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet
              consetetur sadipscing elitr
            </p>
          </div>

          <div className="w-1/2">
            <img className="ml-auto" src={rightImage} alt="" />
          </div>
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
