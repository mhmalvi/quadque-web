import React from "react";
import Icons from "../../../Shared/Icons";
import Logo from "../../../../asstes/Images/company-footer-logo.png";
import "../../MobileVersion/MobileView.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="Footer" className="w-full text-white relative mt-20 font_primary">
      <img src={Logo} alt="" className="absolute -top-12 right-2" />
      <div className="font_title text-3xl text-center mx-6 mb-4">
        Have a Good Web Design Today
      </div>
      <div className="text-sm text-center px-6 pb-4">
        Our philosophy is to ensure the highest product quality and satisfaction
        for every client. We offer the best quality/price ratio in the industry
        along with timely delivery of solutions.{" "}
      </div>
      <div className="w-1/3 bg-black border rounded-full text-center text-xs font_title px-4 py-3 my-8 mx-auto spirit-bomb whitespace-nowrap">
        <a href="tel:+8801765-276560">Let's Talk</a>
      </div>
      <div className="flex mt-10 px-6 gap-2">
        <div className="w-1/2 flex-col leading-10">
          <a href="/career" className="my-2">
            Careers
          </a>
          <Link to={`/faq`}>
            <p className="my-2">FAQ's</p>
          </Link>
          <a href="/#Service" className="my-2">
            Services
          </a>
        </div>
        <div className="w-1/2 flex-col leading-10">
          <a href="/#Case_Study" className="my-2">
            Case Studies
          </a>
          <Link to={`/blogs`}>
            <p className="my-2">Blogs</p>
          </Link>
          <a href="/#About" className="my-2">
            About Us
          </a>
        </div>
      </div>

      <div className="flex text-xs mt-6 px-6 gap-2">
        <div className="w-1/2 flex-col">
          <p className="text-sm font-bold">Quadque Technologies Pty Ltd</p>
          <p className="pt-2">
            LEVEL 1/7 Greenfield Parade, Bankstown NSW 2200, Australia
          </p>
          <p className="pt-1">+61 405 899 496</p>
          <p className="pt-1">info@quadque.tech</p>
        </div>
        <div className="w-1/2 flex-col">
          <p className="text-sm font-bold">Quadque Technologies Pvt Ltd</p>
          <p className="pt-2">
            Level -7, 8/C, F.R Tower, Panthapath, Dhaka 1207, Bangladesh
          </p>
          <p className="pt-1">+01765-276560</p>
          <p className="pt-1">info@quadque.tech</p>
        </div>
      </div>

      <div className="w-full flex justify-center py-5 gap-2">
        <a href="https://www.facebook.com/quadquetech/">
          <Icons.FooterFacebook className="text-zinc-400 hover:text-brand-color" />
        </a>
        <a href="https://www.instagram.com/quadquetech/">
          <Icons.FooterInstagram className="text-white hover:text-brand-color" />
        </a>
        <a href="https://twitter.com/QuadqueT">
          <Icons.FooterTwitter className="text-white hover:text-brand-color" />
        </a>
        <a href="https://www.youtube.com/channel/UCXbnZTYKk6q82Hbux3ffILA">
          <Icons.FooterYoutube className="text-white hover:text-brand-color" />
        </a>
      </div>

      <div className="flex justify-center text-xs pb-2">
        Quadque©2022, All rights reserved
      </div>
    </div>
  );
};

export default Footer;
