import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { useParams } from "react-router-dom";
import Mobile from "../../../../asstes/Images/mobile.png";
// import Best1 from "../../../../asstes/Images/best-1.png";
// import Best2 from "../../../../asstes/Images/best-2.png";
// import Best3 from "../../../../asstes/Images/best-3.png";
// import Best4 from "../../../../asstes/Images/best-4.png";
// import Work1 from "../../../../asstes/Images/case-study.png";
// import Work2 from "../../../../asstes/Images/case-study-2.png";
// import Designer from "../../../../asstes/Images/designer.png";
// import Avatar from "../../../../asstes/Images/avatar.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import useCaseStudy from "../../../Shared/Hooks/useCaseStudy";
import useClientSpeak from "../../../Shared/Hooks/useClientSpeak";
import { handleFetchServiceById } from "../../../Shared/services";

import point from "../../../../asstes/Icons/service-icon.svg";

const ServiceDetails = () => {
  const { id } = useParams();
  // const PhoneSlider = useRef(null);
  const ClientsSlider = useRef(null);
  const ReviewsSlider = useRef(null);
  const [ClientSpeak] = useClientSpeak();
  const [CaseStudy] = useCaseStudy();
  const [Service, setService] = useState();
  const [capabilities, setCapabilities] = useState();
  //console.log(Service);

  useEffect(() => {
    (async () => {
      const fetchServicedata = await handleFetchServiceById(id);
      setService(fetchServicedata);
      //console.log("service data", Service);
    })();
  }, [id]);

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
    <div className="w-full mt-30 text-white px-6">
      <div className="text-3xl font-bold pb-5">{Service?.service_name}</div>
      <div className="font-semibold pb-2">
        Create Your Business with Digital Design
      </div>
      <div className="text-sm text-justify pb-2">{Service?.description}</div>
      <div className="text-brand-color font-bold">START PROJECT</div>

      <div className="py-13">
        <div>
          <img src={Mobile} alt="" className="w-[70%] m-auto" />
        </div>
      </div>

      <div
        className="Service_Identity text-white text-center"
        dangerouslySetInnerHTML={{ __html: Service?.identity_design_des }}
      ></div>

      {/* IDENTITY DESIGN SERVICES SECTION */}
      {/*       <div className="text-sm text-center uppercase pb-1">
        IDENTITY DESIGN SERVICES
      </div>
      <div className="text-2xl text-center pb-3">How We Can Help?</div>
      <div className="text-center text-sm pb-6">
        We’ll help you finding a solution and solve your problems. We use
        process design to create digital products. Besides that also helps their
        business.
      </div>
    <div className="flex flex-wrap justify-between gap-5">
      {Objects.map((obj, index) =>   
        <div className="text-sm font-semibold">
          <span className="flex gap-1">
            <img src={ ServiceIcons[obj.data]} alt="" />
            {obj.data}
          </span>
        </div>
      )}
    </div> */}

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
          {<CountUp start={0} end={Service?.project_count} duration={2} />}+{" "}
          <br />
          <span className="text-white text-base font-thin">
            Projects Completed
          </span>{" "}
        </div>
        <div className="bg-white w-[1px] h-14"></div>
        <div className="w-1/2 text-brand-color text-5xl font-semibold text-center">
          {<CountUp start={0} end={Service?.happy_clients} duration={3} />}+{" "}
          <br />
          <span className="text-white text-base font-thin">
            Happy Clients
          </span>{" "}
        </div>
      </div>

      {/* BEST FOR YOU SECTION */}
      <div
        className="bestforyou text-white py-13"
        dangerouslySetInnerHTML={{ __html: Service?.content }}
      ></div>
      {/* <div>
        <div className="text-sm text-center uppercase pb-1">BEST FOR YOU</div>
        <div className="text-2xl text-center pb-13">
          We serve the best service
        </div>
        <div className="pb-13">
          <div className="flex-col pb-8">
            <div className="flex gap-4">
              <img src={Best1} alt="" className="w-20" />
              <div className="w-2/3 text-2xl flex items-end">
                Create A Strong Impression
              </div>
            </div>
            <div className="text-sm text-justify text-[#D0D4EA] pt-5">
              A logo serves as a company's first touchpoint with consumers. If
              created well, it may spark the public's attention and encourage
              them to discover more about the company.
            </div>
          </div>
          <div className="flex-col pb-8">
            <div className="flex gap-4">
              <img src={Best2} alt="" className="w-20" />
              <div className="w-2/3 text-2xl flex items-end">
                Builds the Foundation
              </div>
            </div>
            <div className="text-sm text-justify text-[#D0D4EA] pt-5">
              Branding is about influencing customers' emotions. It's all about
              the story you're attempting to tell, and your identity design sets
              the setting for it.
            </div>
          </div>
          <div className="flex-col pb-8">
            <div className="flex gap-4">
              <img src={Best3} alt="" className="w-20" />
              <div className="w-2/3 text-2xl flex items-end">
                It Fosters Brand Loyalty
              </div>
            </div>
            <div className="text-sm text-justify text-[#D0D4EA] pt-5">
              As your brand expands, people will get more familiar with your
              identity, creating the notion that you are trustworthy and
              approachable.
            </div>
          </div>
          <div className="flex-col pb-8">
            <div className="flex gap-4">
              <img src={Best4} alt="" className="w-20" />
              <div className="w-2/3 text-2xl flex items-end">Rememberable</div>
            </div>
            <div className="text-sm text-justify text-[#D0D4EA] pt-5">
              People remember your company by your attractive identity design.
              So, this is very important to keep your company memorable.
            </div>
          </div>
        </div>
      </div> */}

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
      <div id="Service" className="service-capbility pb-13 px-2">
        {capabilities?.map((list) => (
          <div className="box rounded-lg mb-4">
            <div className="z-[-1] relative text-center text-xl text-white font-thin py-2">
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
        <Slider ref={ClientsSlider} arrows={false} {...settings}>
          {CaseStudy?.map((details) => (
            <div>
              <img src={details?.com_image} alt="" className="w-full px-4" />
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
      <div className="max-w-[350px] m-auto text-white pb-4">
        <Slider ref={ReviewsSlider} arrows={false} {...settings}>
          {ClientSpeak.map((details) => (
            <div>
              <div className="border rounded-2xl p-4 m-4">
                <img
                  src={details?.image}
                  alt=""
                  className="w-10 h-10 relative -top-8 left-4 rounded-full"
                />
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: details?.description }}
                ></div>
                <div className="text-end text-white py-2">-{details?.name}</div>
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
  );
};

export default ServiceDetails;

// const Objects = [
//   { data: "Usability Analyst" },
//   { data: "User Research" },
//   { data: "Product Design" },
//   { data: "Web/App Design" },
//   { data: "Visual Design" },
//   { data: "Interaction Design" },
// ];

// const ServiceIcons = {
//   "Usability Analyst": point,
//   "User Research": point,
//   "Product Design": point,
//   "Web/App Design": point,
//   "Visual Design": point,
//   "Interaction Design": point,
// };
