import { Modal, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import siteAudio from "../../../../assets/Audio/site_audio.mp3";
import Astro404 from "../../../../assets/Images/404.png";
import muteImg from "../../../../assets/Images/mute.png";
import unmuteImg from "../../../../assets/Images/unmute.png";
import Icons from "../../../Shared/Icons";
import SocialLinks from "../../../Shared/SocialLinks";
import Navbar from "../Navbar";

const NotFound = () => {
  const navigate = useNavigate();
  const [mouseHover, setMouseHover] = useState(false);
  const [openMenus, setOpenMenus] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (muted) {
      document.getElementById("iframeAudio").src = "";
    } else {
      document.getElementById("iframeAudio").src = siteAudio;
    }
  }, [muted]);

  const handleNavigate = () => {
    navigate(`../#start-project`, { replace: true });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="blog_details w-full h-full">
        {/* For website background Audio */}
        <iframe
          id="iframeAudio"
          title="audio"
          src={siteAudio}
          allow="autoplay loop"
          style={{ display: "none" }}
        />

        <Modal
          style={{
            backgroundColor: "black !important",
            borderRadius: "0",
            scrollbarWidth: "none",
          }}
          open={openMenus}
          onCancel={() => setOpenMenus(false)}
          footer={false}
          width={"100%"}
        >
          <div
            className="absolute top-0 left-0 right-0 h-full w-full"
            onClick={() => setOpenMenus(false)}
          ></div>
          <Navbar setOpenMenus={setOpenMenus} />
        </Modal>

        {/* Outer Layer */}

        {/* Top bar */}
        <div className="absolute top-0 z-50 w-full h-10 bg-white"></div>
        {/* <div className="w-full h-10 bg-white"></div> */}

        <div className="relative flex justify-center bg-white">
          {/* Left bar */}
          <div className="w-[100px] min-h-full py-10 z-50 absolute left-0 flex flex-col justify-between side_bar bg-white">
            <a href="/">
              <Icons.BrandLogo className="mx-auto" />
            </a>

            <div
              className="-rotate-90 relative cursor-pointer flex justify-center items-center hover:text-brand-color transition-colors delay-150"
              onMouseOver={() => {
                setMouseHover(true);
              }}
              onMouseOut={() => {
                setMouseHover(false);
              }}
              onClick={() => setOpenMenus(true)}
            >
              <span className="uppercase mr-auto font-semibold text-xl leading-[175%] font_primary pr-4">
                menu
              </span>
              <span>
                <div
                  className={`${
                    mouseHover ? "w-[18px] bg-brand-color" : "w-[28px] bg-black"
                  } float-left transition-all delay-150 ease-in-out h-[3px] mb-2`}
                ></div>
                <div
                  className={`${
                    mouseHover ? "w-[28px] bg-brand-color" : "w-[18px] bg-black"
                  }  float-left transition-all delay-200 ease-in-out h-[3px]`}
                ></div>
              </span>
            </div>

            <SocialLinks />
          </div>

          {/* Middle Main container */}
          <div
            id="main_container"
            className="main_container w-full min-h-full h-[90vh] my-auto shadow-md"
          >
            <div className="text-white min-h-full pt-24 bg-black">
              <div className="text-8xl text-center font_title">404</div>
              <div className="text-xl text-center font_title">
                Page not found
              </div>
              <img
                src={Astro404}
                alt="Astro404"
                className="w-1/4 m-auto py-6"
              />
              {/* <div className="text-xl text-center font_primary">Oops! Are you lost in space?</div> */}
              <div className="flex items-center justify-center">
                <a
                  href="/"
                  className="bg-black text-sm text-center whitespace-nowrap font-semibold spirit-bomb py-3 px-4 mt-8 mb-6 rounded-full relative z-[100] uppercase mx-auto font_title"
                >
                  Go Back Home
                </a>
              </div>
            </div>
          </div>

          {/* Right bar */}

          <div className="relative">
            <div className="absolute top-3 right-10 text-lg font-bold text-black z-50">
              {muted ? (
                <div className="w-8">
                  <Tooltip
                    title="Unmute Sound"
                    placement="left"
                    color={"rgba(90, 90, 90, 0.7)"}
                  >
                    <div className="text-xl font-bold">&nbsp;</div>
                    <img
                      className="z-50 cursor-pointer"
                      src={muteImg}
                      alt="Mute"
                      onClick={() => setMuted(false)}
                    />
                    <div className="text-xl font-bold">&nbsp;</div>
                  </Tooltip>
                </div>
              ) : (
                <div className="w-8">
                  <Tooltip
                    title="Mute Sound"
                    placement="left"
                    color={"rgba(90, 90, 90, 0.7)"}
                  >
                    <div className="text-xl font-bold">&nbsp;</div>
                    <img
                      className="z-50 cursor-pointer"
                      src={unmuteImg}
                      onClick={() => setMuted(true)}
                      alt="Unmute"
                    />
                    <div className="text-xl font-bold">&nbsp;</div>
                  </Tooltip>
                </div>
              )}
            </div>

            <div className="bg-white absolute right-0 h-full">
              <div className="w-[100px] flex flex-col justify-between side_bar">
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div className="mb-9 -rotate-90 flex justify-center items-center">
                  <span
                    onClick={handleNavigate}
                    className="uppercase whitespace-nowrap font-semibold text-xl leading-[175%] font_primary mr-4 cursor-pointer"
                  >
                    start project
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 z-50 w-full h-10 bg-white"></div>
      </div>
    </>
  );
};

export default NotFound;
