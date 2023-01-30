import React from "react";
import Typical from "react-typical";
import headerVideo from "../../../asstes/Video/headerVideo.mp4";

const Header = () => {
  return (
    <div className="section overflow-hidden relative bg-black">
      <video
        className="h-[100%] w-full"
        src={headerVideo}
        loop={"loop"}
        muted
        autoPlay
      ></video>

      <div
        className="absolute text-white top-[30%] lg:right-[10%] xl:right-[15%] 2xl:right-[20%]"
        style={{
          zIndex: "9999",
        }}
      >
        <Typical
          className="w-40 text-white lg:text-4.5xl xl:text-[60px] 2xl:text-[80px] font-bold leading-10 font_title xl:leading-12 2xl:leading-[70px] font-poppins capitalize"
          steps={[
            "We",
            1500,
            "We Build",
            3000,
            "We Build Awesome",
            4000,
            "We Build Awesome Creation",
            5000,
          ]}
          loop={Infinity}
          wrapper="h1"
        />
      </div>
    </div>
  );
};

export default Header;
