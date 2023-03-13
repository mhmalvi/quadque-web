import { Modal, Tooltip } from "antd";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import siteAudio from "../../../asstes/Audio/site_audio.mp3";
import muteImg from "../../../asstes/Images/mute.png";
import unmuteImg from "../../../asstes/Images/unmute.png";
import loaderFile from "../../../asstes/Lotties/loader.json";
import useServices from "../../Shared/Hooks/useServices";
import Icons from "../../Shared/Icons";
import Navbar from "../DesktopVersion/Navbar";

const Sitemap = () => {
  const [services] = useServices();
  const [mouseHover, setMouseHover] = useState(false);
  const [openMenus, setOpenMenus] = useState(false);
  const [loader, setLoader] = useState(true);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    if (muted) {
      document.getElementById("iframeAudio").src = "";
    } else {
      document.getElementById("iframeAudio").src = siteAudio;
    }
  }, [muted]);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, [services]);

  return (
    <div className="blog_details w-full h-full bg-black">
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
        <div className="w-[100px] min-h-full py-10 z-50 absolute left-0 flex flex-col justify-between left_bar bg-white">
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

          <div className="mb-16 -rotate-90 flex justify-center items-center">
            <Tooltip
              placement="right"
              title="Facebook"
              color={"rgba(90, 90, 90, 0.7)"}
            >
              <a
                href="https://www.facebook.com/quadquetech"
                rel="noreferrer"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-brand-color transition-colors delay-150 "
              >
                fb
              </a>
            </Tooltip>

            <Tooltip
              placement="right"
              title="Instagram"
              color={"rgba(90, 90, 90, 0.7)"}
            >
              <a
                href="https://www.instagram.com/quadquetech/"
                rel="noreferrer"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-brand-color transition-colors delay-150 "
              >
                in
              </a>
            </Tooltip>

            <Tooltip
              placement="right"
              title="Youtube"
              color={"rgba(90, 90, 90, 0.7)"}
            >
              <a
                href="https://www.youtube.com/channel/UCXbnZTYKk6q82Hbux3ffILA"
                rel="noreferrer"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-brand-color transition-colors delay-150 "
              >
                yt
              </a>
            </Tooltip>

            <Tooltip
              placement="right"
              title="Linkedin"
              color={"rgba(90, 90, 90, 0.7)"}
            >
              <a
                href="https://bd.linkedin.com/company/quadque-technologies-ltd"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-brand-color transition-colors delay-150 "
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
          className="blog_details bg-green-100 main_container w-full h-screen my-auto shadow-md"
        >
          <div className="min-h-full bg-black text-white pb-20 h-[90vh] font_primary overflow-y-scroll px-40 py-20">
            <h1 className="text-2xl text-white font-semibold mb-10">
              Site Map
            </h1>

            <div className="w-full xl:w-10/12 2xl:w-9/12 mx-auto grid grid-cols-4 gap-6 justify-center">
              {/* Home */}
              <div className="mb-10">
                <h1 className="text-xl font-semibold mb-4">Home</h1>
                <ul>
                  <li className="list-disc">
                    <Link to={`../#landing`}>Home</Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="mb-10">
                <h1 className="text-xl font-semibold mb-4">Services</h1>
                <ul>
                  {services?.map((service, i) => (
                    <li className="list-disc whitespace-nowrap">
                      <Link to={`../services/${service?.slug}`}>
                        {service?.service_name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About */}
              <div className="mb-10">
                <h1 className="text-xl font-semibold mb-4">About</h1>
                <ul>
                  <li className="list-disc">
                    <Link to={`../#about`}>About</Link>
                  </li>
                </ul>
              </div>

              {/* Clients */}
              <div className="mb-10">
                <h1 className="text-xl font-semibold mb-4">Clients</h1>
                <ul>
                  <li className="list-disc">
                    <Link to={`../#clients`}>Clients</Link>
                  </li>
                </ul>
              </div>

              {/* Case Study */}
              <div className="mb-10">
                <h1 className="text-xl font-semibold mb-4">Case Study</h1>
                <ul>
                  <li className="list-disc">
                    <Link to={`../#case-study`}>Case Study</Link>
                  </li>
                </ul>
              </div>

              {/* Client Speak */}
              <div className="mb-10">
                <h1 className="text-xl font-semibold mb-4">Client Speak</h1>
                <ul>
                  <li className="list-disc">
                    <Link to={`../#client-speak`}>Client Speak</Link>
                  </li>
                </ul>
              </div>

              {/* Blogs */}
              <div className="mb-10">
                <h1 className="text-xl font-semibold mb-4">Blogs</h1>
                <ul>
                  <li className="list-disc">
                    <Link to={`../#blogs`}>Blogs</Link>
                  </li>
                </ul>
              </div>

              {/* Start Project */}
              <div className="mb-10">
                <h1 className="text-xl font-semibold mb-4">Start Project</h1>
                <ul>
                  <li className="list-disc">
                    <Link to={`../#start-project`}>Start Project</Link>
                  </li>
                </ul>
              </div>

              {/* Contacts */}
              <div className="mb-10">
                <h1 className="text-xl font-semibold mb-4">Contacts</h1>
                <ul>
                  <li className="list-disc">
                    <Link to={`../#contacts`}>Contacts</Link>
                  </li>
                </ul>
              </div>

              {/* gallery */}
              <div className="mb-10">
                <h1 className="text-xl font-semibold mb-4">Gallery</h1>
                <ul>
                  <li className="list-disc">
                    <Link to={`../#gallery`}>Gallery</Link>
                  </li>
                </ul>
              </div>

              {/* Career */}
              <div className="mb-10">
                <h1 className="text-xl font-semibold mb-4">Career</h1>
                <ul>
                  <li className="list-disc">
                    <Link to={`../#career`}>Career</Link>
                  </li>
                </ul>
              </div>

              {/* FAQ */}
              <div className="mb-10">
                <h1 className="text-xl font-semibold mb-4">FAQ</h1>
                <ul>
                  <li className="list-disc">
                    <Link to={`../#faq`}>FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right bar */}

        <div className="relative">
          {/* <div className="absolute top-3 right-10 text-lg font-bold text-black z-50">
            {muted ? (
              <div className="w-8">
                <Tooltip
                  title="Unmute Sound"
                  placement="left"
                  color={"rgba(90, 90, 90, 0.7)"}
                >
                  <h1 className="text-xl font-bold">&nbsp;</h1>
                  <img
                    className="z-50 cursor-pointer"
                    src={unmuteImg}
                    onClick={() => setMuted(false)}
                    alt=""
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
                    src={muteImg}
                    onClick={() => setMuted(true)}
                    alt=""
                  />
                  <h1 className="text-xl font-bold">&nbsp;</h1>
                </Tooltip>
              </div>
            )}
          </div> */}

          <div className="absolute top-3 right-10 text-lg font-bold text-black z-50">
            {muted ? (
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
                    alt="Mute"
                    onClick={() => setMuted(false)}
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
                    onClick={() => setMuted(true)}
                    alt="Unmute"
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
                <span className="uppercase whitespace-nowrap font-semibold text-xl leading-[175%] font_primary mr-4">
                  start project
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 z-50 w-full h-10 bg-white"></div>

      {loader ? (
        <div className="w-11/12 min-h-screen flex flex-col justify-center items-center absolute top-0 left-16 bg-black backdrop-blur-md bg-opacity-80">
          <Lottie
            className="w-1/6 mx-auto"
            animationData={loaderFile}
            loop={true}
          />
          <h1 className="font_title text-3xl font-semibold text-white">
            Loading...
          </h1>
        </div>
      ) : null}
    </div>
  );
};

export default Sitemap;
