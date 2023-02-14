import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { useLocation } from "react-router-dom";
import Icons from "../../../Shared/Icons";

const NewFooter = () => {
  const location = useLocation();
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");

  const synth = window.speechSynthesis;

  useEffect(() => {
    console.log(window);

    if (location.hash === "#contacts") {
      // document.getElementById("footer_icon").classList.remove("hidden");
      setTimeout(() => {
        setTriggerTitleAnimation(true);
      }, 800);
      synth.cancel();
    }
    // else {
    //   document.getElementById("footer_icon").classList.add("hidden");
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  return (
    <div
      id="start_project"
      className="section w-full lg:pt-6 2xl:py-8 font_primary bg-black text-white"
    >
      <div className="ml-21 lg:mt-6 2xl:mt-16 mr-25 pb-8">
        <div className="flex items-center justify-between">
          <div
            className="text-4xl 2xl:text-5xl font-bold leading-10 capitalize font_title"
            style={{
              letterSpacing: "0.06em",
            }}
          >
            <Fade left spy={triggerTitleAnimation}>
              <div className="leading-10 uppercase mb-0.5">Let’s start</div>
              <div className="ml-8 leading-10 uppercase">a project</div>
            </Fade>
          </div>
          <div>
            <Fade left spy={triggerTitleAnimation}>
              <div>
                <div>Australia: +61405899496</div>
                <div>Bangladesh: +8801765276560</div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="mt-15.5 flex justify-between">
          <div></div>

          <Fade right cascade spy={triggerAnimation}>
            <div></div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;
