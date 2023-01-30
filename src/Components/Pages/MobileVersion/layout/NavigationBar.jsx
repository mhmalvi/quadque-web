import { Button, Modal } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../../Shared/Icons";

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
    <div id="Navigation" className="Navigation fixed top-0 z-50" style={{transition: "top 0.3s"}}>
      <div className="flex justify-between">
        <Link to="/">
          <div className="shrink-0 p-6">
            <Icons.BrandLogoMob className="w-12 scale-x-[-1] text-white" />
          </div>
        </Link>
        <Button
          className={`${open ? "hidden" : ""}`}
          type="button"
          onClick={() => setOpen(true)}
        >
          {/* Hamburger Animation */}
          <div
            className={`w-4 ${genericHamburgerLine} ${
              open ? "translate-x-3 opacity-0 duration-300" : ""
            }`}
          />
          <div
            className={`${genericHamburgerLine} w-8 ${
              open ? "translate-x-5 opacity-0 duration-300" : ""
            } `}
          />
          <div
            className={`${genericHamburgerLine} w-4 opacity-100 float-right relative -top-1 ${
              open ? "translate-x-9 opacity-0 duration-300" : ""
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
            className="absolute top-14 shrink-0"
            onClick={() => setOpen(false)}
          >
            <Icons.BrandLogoMob className="w-12 scale-x-[-1] text-white" />
          </div>

          <div onClick={() => setOpen(false)}>
            <Link to="/">Home</Link>
          </div>

          <div onClick={() => setOpen(false)}>
            <a href="/#Service">Service</a>
          </div>

          <div onClick={() => setOpen(false)}>
            <a href="/#About">About</a>
          </div>

          <div onClick={() => setOpen(false)}>
            <a href="/#Case_Study">Case Study</a>
          </div>

          <div onClick={() => setOpen(false)}>
            <Link to="/blogs">Blogs</Link>
          </div>

          <div onClick={() => setOpen(false)}>
            <Link to="#">Career</Link>
          </div>

          <div onClick={() => setOpen(false)}>
            <Link to="/gallery">Gallery</Link>
          </div>

          <div onClick={() => setOpen(false)}>
            <a href="/#Footer">Contact</a>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default NavigationBar;
