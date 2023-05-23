import { Tooltip } from "antd";
import React from "react";

const SocialLinks = () => {
  return (
    <div className="social_media mb-28 -rotate-90 flex justify-center items-center">
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
        title="Twitter"
        color={"rgba(90, 90, 90, 0.7)"}
      >
        <a
          href="https://twitter.com/QuadqueT"
          target="_blank"
          className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-[#00acee] transition-colors delay-150 "
          rel="noreferrer"
        >
          tw
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

      <Tooltip placement="right" title="Tiktok" color={"rgba(90, 90, 90, 0.7)"}>
        <a
          href="https://www.tiktok.com/@quadque"
          target="_blank"
          className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-[#ff0050] transition-colors delay-150 "
          rel="noreferrer"
        >
          tk
        </a>
      </Tooltip>
    </div>
  );
};

export default SocialLinks;
