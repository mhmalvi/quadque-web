import React, { useState, useEffect } from "react";
import Astro from "../../../../asstes/Video/headerVideo.mp4";
import { handleFetchHomeVideo } from "../../../Shared/services";
import "../../MobileVersion/MobileView.css"

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
        We <br /> Build <br /> Awesome <br /> Creation
      </div>
      <div className="text-white px-6 pt-3">
        Contact{" "}
        <span className="bg-white rounded-full text-black px-1 mx-1"> ^ </span>
      </div>
      <div className="video-opacity-10 pt-10">
        <video autoPlay loop muted>
          <source src={Astro} type="video/mp4" />
        </video>
      </div>
      <div className="flex justify-between bg-black text-white pt-10 pb-20 px-6">
        <div className="font-semibold">START PROJECT</div>
        <div className="flex gap-2">
          <span className="font-semibold">EN</span>
          <span className="font-thin">BN</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
