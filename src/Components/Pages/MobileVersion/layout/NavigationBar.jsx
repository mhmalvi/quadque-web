import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../../Shared/Icons";
import Tagline from "../../../../assets/Images/mobile-tagline.png";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const genericHamburgerLine = `h-1 my-1 rounded-full bg-white transition ease transform duration-500 lg:hidden m-4`;

  var prevScrollpos = window.pageYOffset;
  console.log(prevScrollpos);
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("Navigation").style.top = "0";
    } else {
      document.getElementById("Navigation").style.top = "-70px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div
      id="Navigation"
      className="Navigation fixed top-0 z-[999] font_primary"
      style={{ transition: "top 0.3s" }}
    >
      <div className="flex justify-between">
        <Link to="/">
          <div className="flex shrink-0 p-6">
            <Icons.BrandLogoMob
              className="w-12 scale-x-[-1] text-white"
              alt="Logo"
            />
            {/* <Icons.BrandLogoMobWithTagline className="w-32 text-white animate-pulse" /> */}
            <div
              id="tagline"
              className="image-wrapper shine overlay pt-1 block sm:hidden"
            >
              <img
                src={Tagline}
                alt="tagline"
                width={100}
                className="shrink-0"
              />
            </div>
          </div>
        </Link>
        {/* <Icons.BrandLogoMobWithTagline className=" text-white w-32 pb-4" /> */}
        <Button
          className={`pt-2 ${open ? "translate-x-5 hidden" : ""}`}
          type="button"
          onClick={() => setOpen(true)}
        >
          {/* Hamburger Animation */}
          <div
            className={`w-4 ${genericHamburgerLine} ${
              open ? "opacity-0 duration-300" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} w-8 ${
              open ? "opacity-0 duration-300" : ""
            } `}
          />
          <div
            className={`${genericHamburgerLine} w-4 opacity-100 float-right relative -top-1 ${
              open ? "opacity-0 duration-300" : ""
            }`}
          />
        </Button>
      </div>
      <Modal
        className="cross_btn"
        title={false}
        centered
        open={open}
        onCancel={() => setOpen(false)}
        footer={false}
        width="100%"
      >
        <div className="w-full h-full flex flex-col justify-between text-center text-xl pt-24">
          <div
            className="flex flex-row absolute top-14 shrink-0"
            onClick={() => setOpen(false)}
          >
            <Icons.BrandLogoMob className=" text-white w-13 scale-x-[-1] " />
          </div>

          <div onClick={() => setOpen(false)} className="font_title">
            <Link to="/">Home</Link>
          </div>

          <div onClick={() => setOpen(false)} className="font_title">
            <a href="/#Service">Services</a>
          </div>

          <div onClick={() => setOpen(false)} className="font_title">
            <a href="/#About">About</a>
          </div>

          <div onClick={() => setOpen(false)} className="font_title">
            <a href="/#Case_Study">Case Studies</a>
          </div>

          <div onClick={() => setOpen(false)} className="font_title">
            <Link to="/products">Products</Link>
          </div>

          <div onClick={() => setOpen(false)} className="font_title">
            <Link to="/blog">Blogs</Link>
          </div>

          <div onClick={() => setOpen(false)} className="font_title">
            <Link to="career">Career</Link>
          </div>

          {/*           <div onClick={() => setOpen(false)} className="font_title">
            <Link to="/gallery">Gallery</Link>
          </div>

          <div onClick={() => setOpen(false)} className="font_title">
            <a href="/#Footer">Contact</a>
          </div> */}
        </div>
      </Modal>
    </div>
  );
};
export default NavigationBar;
