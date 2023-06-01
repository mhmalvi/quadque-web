import React from "react";
// import Astro from "../../../../assets/Video/headerVideo.mp4";
import headerImage from "../../../../assets/Images/header_img.jpg";
import "../../MobileVersion/MobileView.css";
import Typical from "react-typical";

const Header = () => {
  /*   useEffect(() => {
    (async () => {
      const fetchVideo = await handleFetchHomeVideo();
      //console.log(fetchVideo);
      setVideo(fetchVideo?.file);
      console.log("video data", video);
    })();
  }, [video]); */

  return (
    <div className="w-full mt-30 home-header font_primary">
      <div className="w-2/3 text-white text-3xl font-semibold px-6">
        <Typical
          className="w-44 m-auto h-44 font_title text-white lg:text-4.5xl xl:text-[60px] 2xl:text-[80px] font-bold leading-10 xl:leading-12 2xl:leading-[70px] capitalize"
          steps={[
            "",
            1000,
            "Innovate",
            1000,
            "Innovate Connect",
            1000,
            "Innovate Connect Transform",
            1000,
          ]}
          loop={Infinity}
          wrapper="h1"
        />
      </div>
      <div className="">
        <img className="w-full" alt="Header_Image" src={headerImage} />

        {/* <video
          autoPlay
          loop
          muted
          style={{ position: "relative", zIndex: "100" }}
        >
          <source src={Astro} type="video/mp4" />
        </video> */}
      </div>
      <div className="flex justify-center bg-black text-white pt-13 pb-6 px-6">
        {/* <Slide top> */}
        <a
          href="#start-project"
          className="bg-black text-sm font-semibold spirit-bomb py-3 px-4 rounded-full z-50 uppercase font_title"
        >
          START A PROJECT
        </a>

        {/* <a href="#start-project" className=" ">
            <span className="relative  flex justify-center items-center h-2 w-4 cursor-pointer ml-2">
              <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
          </a> */}
        {/* </Slide> */}
      </div>
    </div>
  );
};

export default Header;
