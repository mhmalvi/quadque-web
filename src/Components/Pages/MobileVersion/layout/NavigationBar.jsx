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
          <div className="p-6">
            <Icons.BrandLogoMob />
          </div>
        </Link>
        <Button type="button" onClick={() => setOpen(true)}>
          {/* Hamburger Animation */}
          <div className={`w-4 ${genericHamburgerLine} ${open ? "translate-x-3 opacity-0 duration-300":""}`} />
          <div className={`${genericHamburgerLine} w-8 ${open ? "translate-x-5 opacity-0 duration-300":""} `} />
          <div
            className={`${genericHamburgerLine} w-4 opacity-100 float-right relative -top-1 ${open ? "translate-x-9 opacity-0 duration-300":""}`}
          />
        </Button>
      </div>
      <Modal
      className="cross_btn"
        title={false}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        footer={false}
        width="100%"
      >
        <ul
          className="text-center text-xl pt-16"
        >
          <li className="absolute top-14" onClick={() => setOpen(false)}><Icons.BrandLogo/></li>
          <Link to="/">
            <li className="py-10" onClick={() => setOpen(false)}>Home</li>
          </Link>
          <a href="/#Service" >
            <li className="py-10" onClick={() => setOpen(false)}>Service</li>
          </a>
          <a href="/#About">
          <li className="py-10" onClick={() => setOpen(false)}>About</li>
          </a>
          <Link to="/blogs">
            <li className="py-10" onClick={() => setOpen(false)}>blogs</li>
          </Link>
          <Link to="/gallery">
            <li className="py-10" onClick={() => setOpen(false)}>Gallery</li>
          </Link>
          <li className="py-10" onClick={() => setOpen(false)}>Contact</li>
        </ul>
      </Modal>
    </div>
  );
};
export default App;
