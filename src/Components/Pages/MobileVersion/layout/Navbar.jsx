import React, { useState } from "react";
import Icons from "../../../Shared/Icons";
import ShadowLogo from "../../../../asstes/Images/logo-shadow.png"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const genericHamburgerLine = `h-1 my-1 rounded-full bg-white transition ease transform duration-500 lg:hidden m-4`;

  return (
    <nav className="w-full flex justify-between text-white fixed">
      <div className="p-6">
        <Icons.BrandLogoMob/>
      </div>
      <div onClick={() => setOpen(!open)} className="relative my-auto">
        {/* Hamburger Animation */}
        <div
          className={`${genericHamburgerLine} ${
            open
              ? "w-7 absolute -rotate-45 translate-y-1 group-hover:opacity-100 z-[999] duration-700"
              : "w-4 opacity-100 group-hover:opacity-100 duration-500"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            open ? "w-7 -translate-x-10 opacity-0 duration-500" : "w-7 group-hover:opacity-100 duration-700"
          }`}
        />
        <div
          className={`duration-500 ${genericHamburgerLine} ${
            open
              ? "w-7 absolute rotate-45 -translate-y-2   group-hover:opacity-100 z-[999] duration-700"
              : "w-4 absolute right-0 top-4 opacity-100 group-hover:opacity-100 duration-500"
          }`}
        />
      </div>
      {/* Hamburger Animation end*/}
      {/* Mobile View */}
        <div className={`${
            open ? "absolute h-screen w-full z-[998] -mt-1 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm border border-white border-opacity-30 shadow-2xl shadow-[#ffffff20] text-center text-xl font-semibold rounded-md":"hidden"}`}>
                <div className="w-full h-auto my-7 px-6 z-[998]"><Icons.BrandLogoMob/></div>
                {/* <Icons.BrandLogoMob width={109} className="opacity-20 absolute left-[60%] top-[15%]"/> */}
                <img src={ShadowLogo} alt="" className="absolute left-[46%] top-[14%]"/>
                <ul
                className={`w-full h-full duration-500 ${
                    open ? "top-0 scale-100 opacity-100" : "-top-[100%] opacity-0 scale-0"
                }`}
                >
                <li className="py-10">Work</li>
                <li className="py-10">About</li>
                <li className="py-10">Service</li>
                <li className="py-10">Blog</li>
                <li className="py-10">Contact</li>
                </ul>
        </div>
    </nav>
  );
};

export default Navbar;
