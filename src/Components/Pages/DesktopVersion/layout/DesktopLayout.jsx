import { Alert, Modal, Space, Tooltip } from "antd";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import muteImg from "../../../../asstes/Images/mute.png";
import unmuteImg from "../../../../asstes/Images/unmute.png";
import welcomeAvatar from "../../../../asstes/Lotties/welcome_avatar.json";
import useAudio from "../../../Shared/Hooks/useAudio";
import Icons from "../../../Shared/Icons";
import { handleLetsGoAudio } from "../../../Shared/Sounds";
import Navbar from "../Navbar";
import CenterLayout from "./CenterLayout";

const DesktopLayout = () => {
  const [mouseHover, setMouseHover] = useState(false);
  const [openMenus, setOpenMenus] = useState(false);
  const [showSoundAlert, setShowSoundAlert] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [playing, setPlaying, toggle] = useAudio();
  // const [audioFile, setAudioFile] = useState(false);
  const synth = window.speechSynthesis;

  console.log(playing);

  useEffect(() => {
    synth.cancel();

    if (!localStorage.getItem("welcome")) {
      setTimeout(() => {
        setShowWelcome(true);
      }, 3000);
    }
  }, [synth]);

  useEffect(() => {
    setTimeout(() => {
      setShowSoundAlert(true);
    }, 3000);

    document.getElementById("main_container").style.height =
      "calc(100vh - 80px)";
    document.getElementById("main_container").style.backgroundColor = "#000000";
  }, []);

  return (
    <div className="w-full h-full">
      {/* For website background Audio */}
      {/* <iframe
        id="iframeAudio"
        title="audio"
        src={audioFile}
        allow="autoplay loop"
        style={{ display: "none" }}
      /> */}

      {/* <iframe
        title="audio"
        src={siteAudio}
        allow="autoplay loop"
        style={{ display: "none" }}
        id="iframeAudio"
      />

      <audio autoplay loop id="playAudio">
        <source src={siteAudio} />
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

          <div className="social_media mb-16 -rotate-90 flex justify-center items-center">
            <Tooltip
              placement="right"
              title="Facebook"
              color={"rgba(90, 90, 90, 0.7)"}
              // color={"blue"}
            >
              <a
                href="https://www.facebook.com/quadquetech"
                rel="noreferrer"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-[blue] transition-colors delay-150 "
              >
                fb
              </a>
            </Tooltip>

            <Tooltip
              placement="right"
              title="Instagram"
              // color={"#F701A2"}
              color={"rgba(90, 90, 90, 0.7)"}
            >
              <a
                href="https://www.instagram.com/quadquetech/"
                rel="noreferrer"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-[#F701A2] transition-colors delay-150 "
              >
                in
              </a>
            </Tooltip>

            <Tooltip
              placement="right"
              title="Youtube"
              // color={"#FF0000"}
              color={"rgba(90, 90, 90, 0.7)"}
            >
              <a
                href="https://www.youtube.com/channel/UCXbnZTYKk6q82Hbux3ffILA"
                rel="noreferrer"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-[#FF0000] transition-colors delay-150 "
              >
                yt
              </a>
            </Tooltip>

            <Tooltip
              placement="right"
              title="LinkedIn"
              color={"rgba(90, 90, 90, 0.7)"}
            >
              <a
                href="https://bd.linkedin.com/company/quadque-technologies-ltd"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-[#0072b1] transition-colors delay-150 "
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
            {!playing ? (
              <div className="w-8">
                <Tooltip
                  title="Unmute Sound"
                  placement="left"
                  color={"rgba(90, 90, 90, 0.7)"}
                >
                  <h1 className="text-xl font-bold">&nbsp;</h1>
                  <img
                    className="z-50 cursor-pointer"
                    src={muteImg}
                    alt=""
                    onClick={() => {
                      toggle();
                      setShowSoundAlert(false);
                    }}
                  />
                  <h1 className="text-xl font-bold">&nbsp;</h1>
                </Tooltip>
              </div>
            ) : (
              <div className="w-8">
                <Tooltip
                  title="Mute Sound"
                  placement="left"
                  color={"rgba(90, 90, 90, 0.7)"}
                >
                  <h1 className="text-xl font-bold">&nbsp;</h1>
                  <img
                    className="z-50 cursor-pointer"
                    src={unmuteImg}
                    onClick={() => {
                      toggle();
                      setShowSoundAlert(false);
                    }}
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
                  className="uppercase whitespace-nowrap font-semibold text-xl leading-[175%] font_primary mr-4"
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
            : "hidden w-0 transition-all delay-700 ease-in-out"
        } transition-all delay-700 ease-in-out absolute top-0 left-0 z-50 flex items-center`}
      >
        <div className="flex items-center relative">
          <Lottie
            className="w-36 mx-auto"
            animationData={welcomeAvatar}
            loop={true}
          />

          <div className="relative">
            <div className="flex items-center">
              <div className="bg-white w-4 h-4 rotate-45 rounded-sm">
                &nbsp;
              </div>
              <span className="bg-white px-4 py-2.5 -ml-2.5 font-semibold font_title rounded-md shadow-md">
                Hi There, Welcome
              </span>
            </div>

            <div
              className={`${
                showWelcome
                  ? "w-6 h-6 transition-all delay-700 ease-in-out"
                  : "w-0 h-0 transition-all delay-700 ease-in-out"
              } absolute -top-3.5 -right-4 rounded-full flex justify-center items-center bg-gray-700 text-white cursor-pointer`}
              onClick={() => {
                setShowWelcome(false);
                localStorage.setItem("welcome", false);
              }}
            >
              <span className="-mt-1">x</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sound Permisson */}
      {showSoundAlert ? (
        <div className="absolute top-16 right-32">
          <Alert
            className={`${
              showSoundAlert
                ? "w-86 transition-all delay-700 ease-in-out"
                : "w-0 transition-all delay-700 ease-in-out"
            } transition-all delay-700 ease-in-out absolute top-0 right-0 z-50 flex items-center font_title`}
            // message="Alert"
            description="Enable Sound and Experience Beyond?"
            type="warning"
            action={
              <Space direction="vertical" className="ml-4 flex items-center">
                <button
                  className="w-20 px-3 py-0.5 rounded-md bg-brand-color text-white"
                  onClick={() => {
                    setPlaying(true);
                    setShowSoundAlert(false);
                    handleLetsGoAudio();
                  }}
                >
                  Let's Go
                </button>
                <button
                  className="w-20 px-3 py-0.5 rounded-md bg-black text-white"
                  onClick={() => {
                    setPlaying(false);
                    setShowSoundAlert(false);
                  }}
                >
                  No
                </button>
              </Space>
            }
          />
        </div>
      ) : null}
    </div>
  );
};

export default DesktopLayout;
