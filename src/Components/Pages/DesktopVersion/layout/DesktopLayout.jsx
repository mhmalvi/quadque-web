import { Modal, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import siteAudio from "../../../../asstes/Audio/site_audio.mp3";
import muteImg from "../../../../asstes/Images/mute.png";
import unmuteImg from "../../../../asstes/Images/unmute.png";
import Icons from "../../../Shared/Icons";
import Navbar from "../Navbar";
import CenterLayout from "./CenterLayout";
import welcomeAvatar from "../../../../asstes/Images/welcome_avatar.json";
import Lottie from "lottie-react";

const DesktopLayout = () => {
  const [mouseHover, setMouseHover] = useState(false);
  const [openMenus, setOpenMenus] = useState(false);
  const [muted, setMuted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("welcome")) {
      setTimeout(() => {
        setShowWelcome(true);
      }, 3000);
    }
  }, []);

  useEffect(() => {
    document.getElementById("iframeAudio").src = siteAudio;

    document.getElementById("main_container").style.height =
      "calc(100vh - 80px)";
    document.getElementById("main_container").style.backgroundColor = "#000000";
  }, []);

  useEffect(() => {
    console.log(window.Permissions);

    if (muted) {
      document.getElementById("iframeAudio").src = "";
    } else {
      document.getElementById("iframeAudio").src = siteAudio;
    }
  }, [muted]);

  return (
    <div className="w-full h-full">
      {/* For website background Audio */}
      <iframe
        id="iframeAudio"
        title="audio"
        src={siteAudio}
        allow="autoplay loop"
        style={{ display: "none" }}
      />

      {/* <audio id="iframeAudio" src={siteAudio} loop autoPlay hidden>
        <source src={siteAudio} type="audio/ogg" />
      </audio> */}

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
        <div className="w-[100px] min-h-full py-10 z-50 absolute left-0 flex flex-col justify-between left_bar bg-white">
          <a href="/" alt="Quadque Technologies Limited Logo">
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
            <span className="uppercase mr-auto font-semibold text-xl leading-[175%] font_poppins pr-4">
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

          <div className="mb-16 -rotate-90 flex justify-center items-center">
            <Tooltip placement="right" title="Facebook" color={"blue"}>
              <a
                href="https://www.facebook.com/quadquetech"
                rel="noreferrer"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_poppins mr-4 hover:text-[blue] transition-colors delay-150 "
              >
                fb
              </a>
            </Tooltip>

            <Tooltip placement="right" title="Instagram" color={"#F701A2"}>
              <a
                href="https://www.instagram.com/quadquetech/"
                rel="noreferrer"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_poppins mr-4 hover:text-[#F701A2] transition-colors delay-150 "
              >
                in
              </a>
            </Tooltip>

            <Tooltip placement="right" title="Youtube" color={"#FF0000"}>
              <a
                href="https://www.youtube.com/channel/UCXbnZTYKk6q82Hbux3ffILA"
                rel="noreferrer"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_poppins mr-4 hover:text-[#FF0000] transition-colors delay-150 "
              >
                yt
              </a>
            </Tooltip>

            <Tooltip placement="right" title="Linkedin" color={"#0072b1"}>
              <a
                href="https://bd.linkedin.com/company/quadque-technologies-ltd"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_poppins mr-4 hover:text-[#0072b1] transition-colors delay-150 "
                rel="noreferrer"
              >
                ln
              </a>
            </Tooltip>
          </div>
        </div>

        {/* Middle Main container */}
        <div
          id="main_container"
          className="bg-green-100 main_container w-full h-screen my-auto shadow-md"
        >
          <CenterLayout />
        </div>

        {/* Right bar */}

        <div className="relative">
          <div className="absolute top-3 right-10 text-lg font-bold text-black z-50">
            {muted ? (
              <div className="w-8">
                <Tooltip title="Unmute Sound" placement="left" color="#8F00FF">
                  <h1 className="text-xl font-bold">&nbsp;</h1>
                  <img
                    className="z-50 cursor-pointer"
                    src={muteImg}
                    alt=""
                    onClick={() => setMuted(false)}
                  />
                  <h1 className="text-xl font-bold">&nbsp;</h1>
                </Tooltip>
              </div>
            ) : (
              <div className="w-8">
                <Tooltip title="Mute Sound" placement="left" color="#8F00FF">
                  <h1 className="text-xl font-bold">&nbsp;</h1>
                  <img
                    className="z-50 cursor-pointer"
                    src={unmuteImg}
                    onClick={() => setMuted(true)}
                    alt=""
                  />
                  <h1 className="text-xl font-bold">&nbsp;</h1>
                </Tooltip>
              </div>
            )}
          </div>

          <div className="bg-white absolute right-0 h-full">
            <div className="w-[100px] flex flex-col justify-between left_bar">
              <div>&nbsp;</div>
              <div>&nbsp;</div>
              <div className="mb-9 -rotate-90 flex justify-center items-center">
                <a
                  href="#start-project"
                  className="uppercase whitespace-nowrap font-semibold text-xl leading-[175%] font_poppins mr-4"
                >
                  start project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 z-50 w-full h-10 bg-white"></div>

      {/* Welcome Message */}
      <div
        className={`${
          showWelcome
            ? "w-86 transition-all delay-700 ease-in-out"
            : "w-0 transition-all delay-700 ease-in-out"
        } transition-all delay-700 ease-in-out absolute top-0 right-0 z-50 flex items-center`}
      >
        <div className="flex items-center relative">
          <span className="bg-white px-4 py-2.5 font-semibold font_title rounded-md shadow-md">
            Hi There, Welcome
          </span>
          <div className="bg-white w-4 h-4 -ml-2.5 rotate-45 rounded-sm">
            &nbsp;
          </div>

          <div
            className={`${
              showWelcome
                ? "w-6 h-6 transition-all delay-700 ease-in-out"
                : "w-0 h-0 transition-all delay-700 ease-in-out"
            } absolute -top-2 -left-3 rounded-full flex justify-center items-center bg-gray-700 text-white cursor-pointer`}
            onClick={() => {
              setShowWelcome(false);
              localStorage.setItem("welcome", false);
            }}
          >
            <span className="-mt-1">x</span>
          </div>
        </div>

        <Lottie
          className="w-36 mx-auto"
          animationData={welcomeAvatar}
          loop={true}
        />
      </div>
    </div>
  );
};

export default DesktopLayout;
