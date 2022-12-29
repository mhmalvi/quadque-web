import { Modal, Tooltip } from "antd";
import React, { useEffect, useState } from "react";
import Icons from "../../../Shared/Icons";
import Navbar from "../Navbar";
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
        <div
          id="main_container"
          className="bg-green-100 main_container w-full h-screen my-auto shadow-md"
        >
          <CenterLayout />
        </div>

        {/* Right bar */}
        <div className="bg-white absolute right-0 h-full">
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

      {/* Bottom bar */}
      <div className="absolute bottom-0 z-50 w-full h-10 bg-white"></div>
    </div>
  );
};

export default Layout;
