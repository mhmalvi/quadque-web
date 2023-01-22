import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { useLocation } from "react-router-dom";
import Icons from "../../../Shared/Icons";

const Footer = () => {
  const location = useLocation();
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  // const [triggerAnimation, setTriggerAnimation] = useState(false);
  const synth = window.speechSynthesis;

  useEffect(() => {
    if (location.hash === "#contacts") {
      document.getElementById("footer_icon").classList.remove("hidden");
      setTimeout(() => {
        // setTriggerAnimation(true);
        setTriggerTitleAnimation(true);
      }, 800);
      synth.cancel();
    } else {
      document.getElementById("footer_icon").classList.add("hidden");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  return (
    <div
      id="contacts"
      className="section w-full min-h-full lg:py-6 2xl:py-8 font-poppins bg-black text-white"
    >
      <div className="ml-21 lg:mt-10 2xl:mt-16 mr-25 pb-8">
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
                  className="text-white px-18 py-3.5 text-base leading-6 font-normal mt-8 2xl:mt-14 font_title"
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

          <div className="lg:mt-10 xl:mt-24 2xl:mt-32 lg:h-52 2xl:h-96">
            <div className="grid grid-cols-6 2xl:grid-cols-5 justify-end">
              <div className="max-w-[250px] flex flex-col justify-between min-h-full col-span-2 2xl:col-span-1">
                <Fade left cascade spy={triggerTitleAnimation}>
                  <h1 className="font-light text-xl leading-6">
                    High level experience in web design and development
                    knowledge, producing quality work.
                  </h1>
                  <div>
                    <div className="mb-2 ml-1.5">
                      <h4>
                        <a href="mailto:info@quadque.tech">info@quadque.tech</a>
                      </h4>
                    </div>
                    <div className="flex items-center">
                      <a
                        className="pl-1"
                        href="https://www.facebook.com/quadquetech"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icons.FacebookDesktop />
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCXbnZTYKk6q82Hbux3ffILA"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icons.YoutubeDesktop className="mx-4" />
                      </a>

                      <a
                        href="https://www.instagram.com/quadquetech/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icons.InstaDesktop className="mr-4" />
                      </a>
                      <a
                        href="https://twitter.com/QuadqueT"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icons.TwiterDesktop />
                      </a>
                    </div>
                  </div>
                </Fade>
              </div>
              <div className="ml-9">
                <Fade left cascade spy={triggerTitleAnimation}>
                  <h3 className="text-lg font-medium mb-6">Product</h3>
                  <div>
                    <h4 className="text-sm font-normal mb-2.5">Product</h4>
                    <h4 className="text-sm font-normal mb-2.5">
                      Popup Builder
                    </h4>
                    <h4 className="text-sm font-normal mb-2.5">Web-design</h4>
                    <h4 className="text-sm font-normal mb-2.5">Content</h4>
                    <h4 className="text-sm font-normal mb-2.5">Integrations</h4>
                  </div>
                </Fade>
              </div>
              <div className="ml-9">
                <Fade left cascade spy={triggerTitleAnimation}>
                  <h3 className="text-lg font-medium mb-6">Use Cases</h3>
                  <div>
                    <h4 className="text-sm font-normal mb-2.5">
                      Web-designers
                    </h4>
                    <h4 className="text-sm font-normal mb-2.5">Marketers</h4>
                    <h4 className="text-sm font-normal mb-2.5">
                      Popup Builder
                    </h4>
                    <h4 className="text-sm font-normal mb-2.5">
                      Small Business
                    </h4>
                    <h4 className="text-sm font-normal mb-2.5">
                      Website Builder
                    </h4>
                  </div>
                </Fade>
              </div>
              <div className="ml-9">
                <Fade left cascade spy={triggerTitleAnimation}>
                  <h3 className="text-lg font-medium mb-6">Resources</h3>
                  <div>
                    <h4 className="text-sm font-normal mb-2.5">Academy</h4>
                    <h4 className="text-sm font-normal mb-2.5">
                      <a href="#blogs">Blog</a>
                    </h4>
                    <h4 className="text-sm font-normal mb-2.5">Themes</h4>
                    <h4 className="text-sm font-normal mb-2.5">Hosting</h4>
                    <h4 className="text-sm font-normal mb-2.5">Developers</h4>
                    <h4 className="text-sm font-normal mb-2.5">Support</h4>
                  </div>
                </Fade>
              </div>
              <div className="ml-9">
                <Fade left cascade spy={triggerTitleAnimation}>
                  <h3 className="text-lg font-medium mb-6">Company</h3>
                  <div>
                    <h4 className="text-sm font-normal mb-2.5">About Us</h4>
                    <h4 className="text-sm font-normal mb-2.5">Careers</h4>
                    <h4 className="text-sm font-normal mb-2.5">FAQs</h4>
                    <h4 className="text-sm font-normal mb-2.5">Teams</h4>
                    <h4 className="text-sm font-normal mb-2.5">Contact Us</h4>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
