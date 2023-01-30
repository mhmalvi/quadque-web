import React, { useState, useEffect } from "react";
import Astro from "../../../../asstes/Video/headerVideo.mp4";
import { handleFetchHomeVideo } from "../../../Shared/services";
import "../../MobileVersion/MobileView.css";
import Typical from "react-typical";

const Header = () => {
  const [video, setVideo] = useState();

  /*   useEffect(() => {
    (async () => {
      const fetchVideo = await handleFetchHomeVideo();
      //console.log(fetchVideo);
      setVideo(fetchVideo?.file);
      console.log("video data", video);
    })();
  }, [video]); */

  return (
    <div className="w-full mt-30 home-header">
      <div className="w-2/3 text-white text-3xl font-semibold px-6">
        <Typical
          className="w-44 m-auto h-44 font_title text-white lg:text-4.5xl xl:text-[60px] 2xl:text-[80px] font-bold leading-10 xl:leading-12 2xl:leading-[70px] capitalize"
          steps={[
            "",
            1000,
            "We",
            1000,
            "We Build",
            1000,
            "We Build Awesome",
            1000,
            "We Build Awesome Creation",
            1000,
          ]}
          loop={Infinity}
          wrapper="h1"
        />
      </div>
      <div className="pt-10">
        <video autoPlay loop muted controls={false}>
          <source src={Astro} type="video/mp4" />
        </video>
      </div>
      <div className="flex justify-center bg-black text-white pt-10 pb-20 px-6">
        <a
          href="#start-project"
          className="font-semibold text-xl"
        >
          START PROJECT
        </a>
        <a href="#start-project" className=" ">
          <span className="relative  flex justify-center items-center h-2 w-4 cursor-pointer ml-2">
            <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Header;
