import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Link, useLocation } from "react-router-dom";
import Icons from "../../../Shared/Icons";
import bgBD from "../../../../asstes/Images/background_bd.jpg";
import bgAus from "../../../../asstes/Images/background_aus.jpg";

const Footer = () => {
  const location = useLocation();
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  // const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");

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
      className={`section w-full min-h-full lg:py-6 2xl:py-8 font_primary text-white`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* {backgroundImage === "bd" && ( */}
      {/* <img
        src={bgBD}
        className="min-w-full min-h-full absolute top-0  transition-all delay-500 duration-200"
        alt=""
      /> */}
      {/* )} */}

      {/* {backgroundImage === "aus" && ( */}
      {/* <img
        src={bgAus}
        className="min-w-full min-h-full absolute top-0  transition delay-300 duration-200"
        alt=""
      /> */}
      {/* )} */}

      {/* <div
        className={`${backgroundImage} min-w-full min-h-full absolute top-0 transition-all duration-200 delay-300`}
      ></div> */}

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

          <div className="lg:mt-10 xl:mt-24 2xl:mt-32 lg:h-52 2xl:h-96">
            {/* <div className="grid grid-cols-6 2xl:grid-cols-4 justify-end"> */}
            <div className="flex justify-between">
              {/* <div className="max-w-[250px] flex flex-col justify-between col-span-2 2xl:col-span-1"> */}
              <div className="w-4/12 flex flex-col justify-between col-span-2 2xl:col-span-1">
                <Fade left cascade spy={triggerTitleAnimation}>
                  <h1
                    className="max-w-[330px] font-light text-base leading-6"
                    style={{
                      wordBreak: "keep-all",
                    }}
                  >
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
              {/* <div className="ml-9">
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
              </div> */}
              <div className="w-2/12 ml-9 font_primary">
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

              {/* <div className="ml-9">
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
              </div> */}

              <div className="w-2/12 ml-9 font_primary">
                <Fade left cascade spy={triggerTitleAnimation}>
                  <h3 className="text-lg font-medium mb-6 font_primary">
                    Company
                  </h3>
                  <div>
                    <h4 className="text-sm font-normal mb-2.5">About Us</h4>
                    <h4 className="text-sm font-normal mb-2.5">
                      <Link to={"/career"}>Careers</Link>
                    </h4>
                    <h4 className="text-sm font-normal mb-2.5">
                      <Link to={"/gallery"}>Gallery</Link>
                    </h4>
                    <h4 className="text-sm font-normal mb-2.5">
                      <Link to={"/faq"}>FAQ's</Link>
                    </h4>
                    <h4 className="text-sm font-normal mb-2.5">Teams</h4>
                  </div>
                </Fade>
              </div>

              <div className="w-4/12 ml-9 font_primary">
                <Fade left cascade spy={triggerTitleAnimation}>
                  <h3 className="text-lg font-medium mb-6">Address</h3>
                  <div>
                    <div
                      onMouseOver={() => {
                        setBackgroundImage(bgBD);
                      }}
                      onMouseOut={() => {
                        setBackgroundImage("");
                      }}
                    >
                      <div className="text-sm font-normal">
                        <div className="leading-6 mb-2.5">
                          <p>
                            Level 1, 7 Greenfield Parade Bankstown, NSW 2200,
                            Australia.
                          </p>
                        </div>
                        <div className="leading-6 mb-2.5">
                          <a href="tel:+01765276560">+61405899496</a>
                        </div>
                      </div>
                    </div>

                    <div
                      onMouseOver={() => {
                        setBackgroundImage(bgAus);
                      }}
                      onMouseOut={() => {
                        setBackgroundImage("");
                      }}
                    >
                      <div className="text-sm font-normal">
                        <div className="leading-6 mb-2.5">
                          <p>
                            Level -7, 8/C, F.R Tower, Panthapath, Dhaka 1207,
                            Bangladesh.
                          </p>
                        </div>
                        <div className="leading-6 mb-2.5">
                          <a href="tel:+01765276560">+01765-276560</a>
                        </div>
                      </div>
                    </div>
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
