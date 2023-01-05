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
      <div className="w-28 border border-white rounded-full text-center px-4 py-2 mx-6">
        Let's Talk
      </div>
      <div className="flex text-lg mt-10 px-6">
        <div className="w-1/2 flex-col font-thin leading-10">
          <p className="font-bold">Product</p>
          <p>Team</p>
          <p>Pricing</p>
          <Link to={`/faq`}>
            <p>FAQ</p>
          </Link>
          <p>Affiliate</p>
        </div>
        <div className="w-1/2 flex-col font-thin leading-10">
          <p className="font-bold">Company</p>
          <p>Blog</p>
          <p>About Us</p>
          <p>Help</p>
          <p>Career</p>
        </div>
      </div>

      <div className="flex text-base mt-10 px-6">
        <div className="w-1/2 flex-col font-thin">
          <p>Level 1, 7 Greenfield Parade Bankstown, NSW 2200</p>
        </div>
        <div className="w-1/2 flex-col font-thin">
          <p>+61405899496</p>
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
        <Icons.FooterFacebook />
        <Icons.FooterInstagram />
        <Icons.FooterTwitter />
        <Icons.FooterYoutube />
      </div>

      <div className="flex justify-center text-xs pb-2">Quadque©2022, All rights reserved</div>
    </div>
  );
};

export default Footer;
