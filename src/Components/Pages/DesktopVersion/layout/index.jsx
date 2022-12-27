import { Modal, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import Icons from "../../../Shared/Icons";
import Navbar from "../../../Shared/Navbar";
import CenterLayout from "./CenterLayout";

const Layout = () => {
  const [mouseHover, setMouseHover] = useState(false);
  const [openMenus, setOpenMenus] = useState(false);

  useEffect(() => {
    document.getElementById("main_container").style.height =
      "calc(100vh - 80px)";
    document.getElementById("main_container").style.backgroundColor = "#000000";
  }, []);

  return (
    <div className="w-full h-full">
      <Modal
        style={{
          backgroundColor: "black !important",
          borderRadius: "0",
          scrollbarWidth: "none",
        }}
        open={openMenus}
        onOk={() => setOpenMenus(false)}
        onCancel={() => setOpenMenus(false)}
        footer={false}
        width={"100%"}
      >
        <Navbar />
      </Modal>

      {/* Outer Layer */}

      {/* Top bar */}
      {/* <div className="absolute top-0 z-50 w-full h-9 bg-white"></div> */}
      <div className="w-full h-10 bg-white"></div>

      <div className="flex justify-center bg-white">
        {/* Left bar */}
        <div className="w-[100px] flex flex-col justify-between left_bar bg-white">
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
                className="uppercase font-semibold text-xl leading-[175%] font_poppins mr-4 hover:text-brand-color transition-colors delay-150 "
              >
                fb
              </a>
            </Tooltip>

            <Tooltip placement="right" title="Instagram" color={"#F701A2"}>
              <a
                href="https://www.instagram.com/quadquetech/"
                rel="noreferrer"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_poppins mr-4 hover:text-brand-color transition-colors delay-150 "
              >
                in
              </a>
            </Tooltip>

            <Tooltip placement="right" title="Youtube" color={"red"}>
              <a
                href="https://www.youtube.com/channel/UCXbnZTYKk6q82Hbux3ffILA"
                rel="noreferrer"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_poppins mr-4 hover:text-brand-color transition-colors delay-150 "
              >
                yt
              </a>
            </Tooltip>

            <Tooltip placement="right" title="Linkedin" color={"#0072b1"}>
              <a
                href="https://bd.linkedin.com/company/quadque-technologies-ltd"
                target="_blank"
                className="uppercase font-semibold text-xl leading-[175%] font_poppins mr-4 hover:text-brand-color transition-colors delay-150 "
                rel="noreferrer"
              >
                ln
              </a>
            </Tooltip>
          </div>
        </div>

        {/* Middle Main container */}
        <div id="main_container" className="bg-green-100 main_container w-full">
          <CenterLayout />
        </div>

        {/* Right bar */}
        <div className="bg-white">
          <div className="w-[100px] flex flex-col justify-between left_bar">
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div className="mb-18 -rotate-90 flex justify-center items-center">
              <span className="uppercase whitespace-nowrap font-semibold text-xl leading-[175%] font_poppins mr-4">
                start project
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Top bar */}

      <div className="absolute top-0 z-50 w-full h-10 bg-white"></div>
    </div>
  );
};

export default Layout;
