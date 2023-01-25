import React, { useState } from "react";
import { Button, Modal } from "antd";
import Icons from "../../../Shared/Icons";
import { Link } from "react-router-dom";
import Logo from "../../../../asstes/Images/bg-logo-shadow.png";

const App = () => {
  const [open, setOpen] = useState(false);
  const genericHamburgerLine = `h-1 my-1 rounded-full bg-white transition ease transform duration-500 lg:hidden m-4`;

  return (
    <div className="Navigation fixed top-0 z-50">
      <div className="flex justify-between">
        <Link to="/">
          <div className="shrink-0 p-6">
            <Icons.BrandLogoMob className="w-12 rotate-[250deg] text-white" />
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
            <Icons.BrandLogoMob className="w-12 rotate-[250deg] text-white" />
          </div>

          <div onClick={() => setOpen(false)}>
            <Link to="/">Home</Link>
          </div>

          <div onClick={() => setOpen(false)}>
            <a href="/#Service">Service</a>
          </div>

          <div onClick={() => setOpen(false)}>
            <a href="/#About">About </a>
          </div>

          <div onClick={() => setOpen(false)}>
            <Link to="/blogs">blogs</Link>
          </div>

          <div onClick={() => setOpen(false)}>
            <Link to="/gallery">Gallery</Link>
          </div>

          <div onClick={() => setOpen(false)}>Contact</div>
        </div>
      </Modal>
    </div>
  );
};
export default App;
