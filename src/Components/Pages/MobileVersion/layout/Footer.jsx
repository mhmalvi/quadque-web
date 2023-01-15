import React from "react";
import Icons from "../../../Shared/Icons";
import "../../MobileVersion/MobileView.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full text-white mt-20">
      <div className="text-3xl font-thin mx-6 mb-4">
        Have a Good Web Designe Today
      </div>
      <div className="text-sm font-thin px-6 pb-4">Our philosophy is to ensure the highest product quality and satisfaction for every client. We offer the best quality/price ratio in the industry along with timely delivery of solutions. </div>
      <div className="w-28 border border-white rounded-full text-center px-4 py-2 mx-6">
        <a href="tel:+8801765-276560">Let's Talk</a>
      </div>
      <div className="flex text-lg mt-10 px-6">
        <div className="w-1/2 flex-col font-thin leading-10">
          <a href="#Team">
            Team
          </a>
          <Link to={`/faq`}>
            <p>FAQ</p>
          </Link>
          <a href="#Service">
            Service
          </a>
        </div>
        <div className="w-1/2 flex-col font-thin leading-10">
          <a href="#Case_Study">
            Case Study
          </a>
          <Link to={`/blogs`}>
            <p>Blog</p>
          </Link>
          <a href="#About">
          About Us
          </a>
        </div>
      </div>

      <div className="flex text-base mt-10 px-6">
        <div className="w-1/2 flex-col font-thin">
          <p>Level 1, 7 Greenfield Parade Bankstown, NSW 2200</p>
        </div>
        <div className="w-1/2 flex-col font-thin">
          <p>+01765-276560</p>
          <p>info@quadque.tech</p>
        </div>
      </div>

      <div className="flex text-sm mt-3 px-6">
        <div className="w-1/2 flex-col font-thin">
          <p className="font-bold">Quadque Technologies Pty Ltd</p>
          <p>
            Quadque Technologies Pty Ltd LEVEL 1/7 Greenfield Parade, Bankstown
            NSW 2200
          </p>
        </div>
        <div className="w-1/2 flex-col font-thin">
          <p className="font-bold">Quadque Technologies Pty Ltd</p>
          <p>Level -7, 8/C, F.R Tower, Panthapath, Dhaka 1207</p>
        </div>
      </div>

      <div className="w-full flex justify-center py-5 gap-2">
        <a href="https://www.facebook.com/quadquetech/"><Icons.FooterFacebook /></a>
        <a href="https://www.instagram.com/quadquetech/"><Icons.FooterInstagram /></a>
        <a href="https://twitter.com/QuadqueT"><Icons.FooterTwitter /></a>
        <a href="https://www.youtube.com/channel/UCXbnZTYKk6q82Hbux3ffILA"><Icons.FooterYoutube /></a>
      </div>

      <div className="flex justify-center text-xs pb-2">Quadque©2022, All rights reserved</div>
    </div>
  );
};

export default Footer;
