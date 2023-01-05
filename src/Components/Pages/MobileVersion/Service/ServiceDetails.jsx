import React, { useState, useRef, useEffect } from "react";
import Mobile from "../../../../asstes/Images/mobile.png";
import Icons from "../../../Shared/Icons";
import CountUp from "react-countup";
import Best1 from "../../../../asstes/Images/best-1.png";
import Best2 from "../../../../asstes/Images/best-2.png";
import Best3 from "../../../../asstes/Images/best-3.png";
import Best4 from "../../../../asstes/Images/best-4.png";
import Work1 from "../../../../asstes/Images/case-study.png";
import Work2 from "../../../../asstes/Images/case-study-2.png";
import Designer from "../../../../asstes/Images/designer.png";
import Avatar from "../../../../asstes/Images/avatar.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceDetails = () => {
  const ClientsSlider = useRef(null);
    const ReviewsSlider = useRef(null);

  const settings = {
    centerMode: false,
    infinite: true,

    slidesToShow: 1,
    speed: 300,
  };
  return (
    <div className="w-full mt-30 text-white px-6">
      <div className="text-3xl font-bold pb-5">UI/UX</div>
      <div className="font-semibold pb-2">
        Create Your Business with Digital Design
      </div>
      <div className="text-sm text-justify pb-2">
        We are a team of professionals who are passionate about UI & UX design
        with any visual solutions. We focus on creating the right UI & UX design
        for your brand, designing for all taste palettes from Concept to Final
        Product. We have a team of designers and online art developers who are
        skilled in delivering high-quality, custom-made designs and more
        identical graphics that get results.
      </div>
      <div className="text-brand-color font-bold">START PROJECT</div>

      <img src={Mobile} alt="" className="w-2/3 pt-16 pb-9 m-auto" />

      {/* IDENTITY DESIGN SERVICES SECTION */}
      <div className="text-sm text-center uppercase pb-1">
        IDENTITY DESIGN SERVICES
      </div>
      <div className="text-2xl text-center pb-3">How We Can Help?</div>
      <div className="text-center text-sm pb-6">
        We’ll help you finding a solution and solve your problems. We use
        process design to create digital products. Besides that also helps their
        business.
      </div>

      <div className="flex flex-wrap justify-between gap-5 pb-13">
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
      </div>

      <div className="flex pb-13">
        <div className="w-1/2 text-brand-color text-5xl font-semibold text-center">
          {<CountUp start={0} end={180} duration={2} />}+ <br />
          <span className="text-white text-base font-thin">
            Projects Completed
          </span>{" "}
        </div>
        <div className="bg-white w-[1px] h-14"></div>
        <div className="w-1/2 text-brand-color text-5xl font-semibold text-center">
          {<CountUp start={0} end={124} duration={3} />}+ <br />
          <span className="text-white text-base font-thin">
            Happy Clients
          </span>{" "}
        </div>
      </div>

      {/* BEST FOR YOU SECTION */}

      <div className="text-sm text-center uppercase pb-1">BEST FOR YOU</div>
      <div className="text-2xl text-center pb-13">We serve the best service</div>
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
            created well, it may spark the public's attention and encourage them
            to discover more about the company.
          </div>
        </div>
        <div className="flex-col pb-8">
          <div className="flex gap-4">
            <img src={Best2} alt="" className="w-20" />
            <div className="w-2/3 text-2xl flex items-end">Builds the Foundation</div>
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
            People remember your company by your attractive identity design. So,
            this is very important to keep your company memorable.
          </div>
        </div>
      </div>

      {/* WHY YOU CHOOSE US SECTION */}
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

      {/* SERVICE CAPABILITY SECTION */}
      <div id="Service" className="service-capbility pb-13 px-2">
        <div className="text-2xl text-center pb-2">
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
        </div>
      </div>

      {/* DELIVER SECTION */}
      <div className="text-2xl text-center pb-2">
        HOW WE DELIVER UI AND UX SERVICES
      </div>
      <div className="text-sm text-center pb-13">
        A decade in design has allowed our team to perfect the process of
        delivering UI and UX services. We follow established design standards,
        workflows, and guidelines — you get the product you need, delivered by
        expert designers within the set timeframe.
      </div>

      {/* OUR LATEST WORK SLIDER SECTION */}
      <div className="text-2xl pb-5">Our Latest Work</div>
      <div className="max-w-[350px] m-auto text-white pb-13">
        <Slider ref={ClientsSlider} arrows={false} {...settings}>
          <div>
            <img src={Work1} alt="" className="w-full px-4" />
            <div className="text-center text-white py-2">
              OTOBI Bd lagest furniture Shop
            </div>
          </div>
          <div>
            <img src={Work2} alt="" className="w-full px-4" />
            <div className="text-center text-white py-2">
              OTOBI Bd lagest furniture Shop
            </div>
          </div>
        </Slider>
      </div>

      {/* People Talk About Us SLIDER SECTION */}
      <div className="text-2xl pb-5">People Talk About Us</div>
      <div className="max-w-[350px] m-auto text-white pb-4">
        <Slider ref={ReviewsSlider} arrows={false} {...settings}>
          <div>
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
          </div>
          <div>
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
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ServiceDetails;
