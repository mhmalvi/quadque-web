import React from "react";
import Icons from "../../../Shared/Icons";

const Layout = () => {
  return (
    <div className="w-full h-full">
      {/* Outer Layer */}
      {/* <div className="grid grid-cols-3"> */}
      <div className="w-full h-10 bg-white"></div>
      <div className="flex">
        <div className="w-[100px] bg-yellow-200">
          <Icons.BrandLogo className="mx-auto" />
        </div>
        <div className="w-full h-full bg-green-100 main_container"></div>
        <div className="w-[100px] bg-yellow-200">asd</div>
      </div>
      <div className="w-full h-10 bg-white"></div>
    </div>
  );
};

export default Layout;
