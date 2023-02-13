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
      id="contacts"
      className="section w-full lg:pt-6 2xl:py-8 font_primary bg-black text-white"
    >
      <Fade spy={triggerAnimation}>
        <img src={backgroundImage} className="min-w-full min-h-full" alt="" />
      </Fade>

      <div className="w-full min-h-full lg:py-6 2xl:py-8 absolute -top-10">
        <div className=" ml-21 lg:mt-10 2xl:mt-16 mr-25 pb-8 ">
          <div className="2xl:pt-6 2xl:pl-10">
            <div>
              <Fade left cascade spy={triggerTitleAnimation}>
                <div className="text-4xl 2xl:text-[50px] leading-10 2xl:leading-[55px] font-semibold font_title">
                  Have a Good Web
                </div>
                <div className="text-4xl 2xl:text-[50px] leading-10 2xl:leading-[55px] font-semibold font_title">
                  Design Today
                </div>
              </Fade>
              <Fade left spy={triggerTitleAnimation}>
                <a href="tel:+01765276560">
                  <button
                    className="spirit-bomb text-white px-12 2xl:px-18 py-2 2xl:py-3.5 text-lg leading-6 font-bold uppercase mt-8 2xl:mt-14 font_primary"
                    style={{
                      border: "2px solid #FFFFFF",
                      borderRadius: "30px",
                    }}
                  >
                    Let's Talk
                  </button>
                </a>
              </Fade>
              <Icons.FooterIcon
                id="footer_icon"
                className="hidden absolute lg:-top-16 2xl:-top-24 lg:-right-16 2xl:-right-24 lg:w-79 lg:h-72 2xl:w-96 2xl:h-92 bg-transparent animate-slow-spin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFooter;
