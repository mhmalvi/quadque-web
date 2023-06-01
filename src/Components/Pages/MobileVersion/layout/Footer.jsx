import React from "react";
import Icons from "../../../Shared/Icons";
import Logo from "../../../../assets/Images/company-footer-logo.png";
import basisLogo from "../../../../assets/Images/basis_logo.png";
import "../../MobileVersion/MobileView.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { handleFetchViewerCount } from "../../../Shared/services";
import CountUp from "react-countup";

const Footer = () => {
  const [year, setYear] = useState("");
  const [viewerCount, setViewerCount] = useState(0);

  useEffect(() => {
    (async () => {
      const counts = await handleFetchViewerCount();
      console.log("counts", counts);

      if (counts?.status === 200) {
        setViewerCount(counts?.data?.[0]?.counter);
      }
    })();
  }, []);

  useEffect(() => {
    const d = new Date();
    setYear(d.getFullYear());
  }, []);

  return (
    <div id="Footer" className="w-full text-white relative mt-24 font_primary">
      <img src={Logo} alt="Logo" className="absolute -top-12 right-2" />
      <div className="font_title text-3xl text-center mx-6 mb-4">
        Top-notch digital solutions with the best results
      </div>
      <div className="text-sm text-center px-6 pb-4">
        A diverse team with years of experience in delivering high-quality web
        development, software development and IT services.
      </div>
      <div className="w-1/3 bg-black rounded-full text-center text-xs font_title px-4 py-3 my-8 mx-auto spirit-bomb whitespace-nowrap">
        <a href="tel:+8801765-276560">Let's Talk</a>
      </div>

      <div className="flex items-center justify-center mt-4">
        <div>
          <img src={basisLogo} className="mx-auto w-36 my-4" alt="" />
        </div>

        <div className="pl-6 ml-6 border-l-2 border-gray-400 flex flex-col justify-center items-center my-4">
          <div className="text-white font-semibold font_primary">
            Total Visitors
          </div>
          <div className="font-semibold text-4xl flex items-center">
            {/* <Icons.Viewers className="w-10 mr-2 text-brand-color" /> */}
            <CountUp
              className="font_title"
              start={0}
              end={viewerCount}
              duration={3}
            />
            +
          </div>
        </div>
      </div>

      <div className="flex mt-10 px-6 gap-2">
        <div className="w-1/2 flex-col leading-10">
          <a href="/#Service" className="my-2">
            Services
          </a>
          <Link to={`/products`}>
            <p className="my-2">Products</p>
          </Link>
          <a href="/career" className="my-2">
            Career
          </a>
          <Link to={`/faq`}>
            <p className="my-2">FAQ's</p>
          </Link>
        </div>
        <div className="w-1/2 flex-col leading-10">
          <a href="/#Case_Study" className="my-2">
            Case Studies
          </a>
          <Link to={`/blog`}>
            <p className="my-2">Blogs</p>
          </Link>
          <Link to={`/gallery`}>
            <p className="my-2">Gallery</p>
          </Link>
        </div>
      </div>

      <div className="flex text-xs mt-6 px-6 gap-2">
        <div className="w-1/2 flex-col">
          <p className="text-sm font-bold">Quadque Technologies Pty Limited</p>
          <p className="pt-2">
            Level 1, 7 Greenfield Parade, Bankstown NSW 2200, Australia
          </p>
          <p className="pt-1">+61 405 899 496</p>
          <p className="pt-1">hello@quadque.tech</p>
        </div>
        <div className="w-1/2 flex-col">
          <p className="text-sm font-bold">
            Quadque Technologies Private Limited
          </p>
          <p className="pt-2">
            Level 7, 8/C, F.R Tower, Panthapath, Dhaka 1207, Bangladesh
          </p>
          <p className="pt-1">+8801765-276560</p>
          <p className="pt-1">info@quadque.tech</p>
        </div>
      </div>

      <div className="w-full flex justify-center py-5 gap-2 mt-2">
        <a
          className="pl-1"
          href="https://www.facebook.com/quadquetech"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.FacebookDesktop />
        </a>
        <a
          href="https://www.youtube.com/channel/UCXbnZTYKk6q82Hbux3ffILA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.YoutubeDesktop className="mx-4" />
        </a>

        <a
          href="https://www.instagram.com/quadquetech/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.InstaDesktop className="mr-4" />
        </a>
        <a
          href="https://twitter.com/QuadqueT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.TwiterDesktop />
        </a>
        <a
          href="https://www.linkedin.com/company/quadque-technologies-ltd/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.FooterLinkedin className="w-4 ml-4" />
        </a>
        <a
          href="https://www.tiktok.com/@quadque"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icons.FooterTiktok className="w-4 ml-3.5" />
        </a>
      </div>

      <div
        id="demo"
        className="flex justify-center items-center mx-4 text-center text-xs pb-4"
      >
        © 2020 - {year} | Quadque Technologies Private Limited | Imagination{" "}
        {">"} Knowledge | All rights reserved
      </div>
    </div>
  );
};

export default Footer;
