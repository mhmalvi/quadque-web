import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { useLocation } from "react-router-dom";
import bgAus from "../../../../assets/Images/background_aus.jpg";
import bgBD from "../../../../assets/Images/background_bd.jpg";
import basisLogo from "../../../../assets/Images/basis_logo.png";
import Icons from "../../../Shared/Icons";
import { handleFetchViewerCount } from "../../../Shared/services";
import CountUp from "react-countup";

const Footer = () => {
  const location = useLocation();
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");
  const [year, setYear] = useState("");
  const [viewerCount, setViewerCount] = useState(0);

  const synth = window.speechSynthesis;

  useEffect(() => {
    (async () => {
      const counts = await handleFetchViewerCount();
      console.log("counts", counts);

      if (counts?.status === 200) {
        setViewerCount(counts?.data?.[0]?.counter);
      }
    })();
  }, []);

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());

    if (location.hash === "#contacts") {
      document.getElementById("footer_icon").classList.remove("hidden");
      setTimeout(() => {
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
      name="contacts"
      className="section w-full lg:py-6 2xl:py-0 ml-5 font_primary text-white relative overflow-hidden"
    >
      {/* For Background Flag */}
      {/* <div>  */}
      <Fade spy={triggerAnimation}>
        {/* {backgroundImage !== "" ? ( */}
        <img
          src={backgroundImage}
          className={`min-w-full h-[90vh] ${
            backgroundImage ? "block" : "hidden"
          }`}
          alt="Background"
        />
        {/* ) : ( */}
        {/* <div>&nbsp;</div> */}
        {/* )} */}
      </Fade>
      {/* </div> */}

      <div className="w-full lg:py-6 absolute top-0 2xl:top-16">
        <div className=" ml-21 lg:mt-10 2xl:mt-16 mr-25 ">
          {/* <div className="2xl:pt-6 2xl:pl-10"> */}
          <div className="2xl:pl-10" style={{ marginLeft: "-40px" }}>
            <div>
              <Fade left spy={triggerTitleAnimation}>
                <div className="text-4xl 2xl:text-[48px] leading-10 2xl:leading-[55px] font-semibold font_title">
                  Top-notch digital solutions
                </div>
                <div className="text-4xl 2xl:text-[48px] leading-10 2xl:leading-[55px] font-semibold font_title">
                  with the best results
                </div>
              </Fade>
              <Fade left spy={triggerTitleAnimation}>
                <a href="tel:+01765276560">
                  <button
                    className="spirit-bomb text-white px-12 2xl:px-18 py-2 2xl:py-3.5 text-lg leading-6 font-bold uppercase mt-8 2xl:mt-14 font_primary"
                    style={{
                      borderRadius: "30px",
                    }}
                  >
                    Let's Talk
                  </button>
                </a>
              </Fade>
              <Icons.FooterIcon
                id="footer_icon"
                className="hidden absolute lg:-top-28 2xl:-top-32 lg:-right-16 2xl:-right-24 lg:w-79 lg:h-72 2xl:w-96 2xl:h-92 bg-transparent animate-slow-spin"
              />
            </div>

            {/* <div className="lg:mt-10 xl:mt-24 2xl:mt-32 lg:h-52 2xl:h-96"> */}
            <div className="lg:mt-10 xl:mt-24 2xl:mt-32 lg:h-52">
              {/* <div className="grid grid-cols-6 2xl:grid-cols-4 justify-end"> */}
              <div className="flex justify-between">
                {/* <div className="max-w-[250px] flex flex-col justify-between col-span-2 2xl:col-span-1"> */}
                <div className="w-4/12 flex flex-col justify-between col-span-2 2xl:col-span-1">
                  <Fade left spy={triggerTitleAnimation}>
                    <div
                      className="max-w-[330px] font-light text-sm xl:text-base leading-6"
                      style={{
                        wordBreak: "keep-all",
                      }}
                    >
                      A diverse team with years of experience in delivering
                      high-quality web development, software development and IT
                      services.
                    </div>
                    <div>
                      <div className="mb-6 ml-1 text-xs xl:text-sm">
                        {/* <Icons.Basis className="w-52" /> */}
                        <div className="w-full flex items-stretch ">
                          <div className="w-5/12">
                            <img src={basisLogo} className="my-4" alt="" />
                          </div>

                          <div className="w-7/12 pl-6 ml-6 border-l-2 border-gray-400 flex flex-col justify-center items-center my-4">
                            <div className="text-white whitespace-nowrap xl:text-sm 2xl:text-base font-semibold font_primary">
                              Total Visitors
                            </div>
                            <div className="min-w-full relative font-semibold xl:text-xl 2xl:text-3.5xl flex items-center">
                              <Icons.Viewers className="w-5 xl:w-8 2xl:w-10 mr-auto text-brand-color" />
                              <div className="absolute left-10 2xl:left-12">
                                <CountUp
                                  className="font_title"
                                  start={0}
                                  end={viewerCount}
                                  duration={3}
                                />
                                +
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <h4
                          onMouseOver={() => {
                            setBackgroundImage(bgAus);
                            setTriggerAnimation(!triggerAnimation);
                          }}
                          onMouseOut={() => {
                            setBackgroundImage("");
                            // setTriggerAnimation(false);
                          }}
                        >
                          <span>Australia: </span>
                          <a href="mailto:">hello@quadque.tech</a>
                        </h4>
                        <h4
                          onMouseOver={() => {
                            setBackgroundImage(bgBD);
                            setTriggerAnimation(!triggerAnimation);
                          }}
                          onMouseOut={() => {
                            setBackgroundImage("");
                            // setTriggerAnimation(false);
                          }}
                        >
                          <span>Bangladesh: </span>
                          <a href="mailto:info@quadque.tech">
                            info@quadque.tech
                          </a>
                        </h4> */}
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
                        <a
                          href="https://www.linkedin.com/company/quadque-technologies-ltd/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icons.FooterLinkedin className="w-4 ml-4" />
                        </a>
                        <a
                          href="https://www.tiktok.com/@quadque"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Icons.FooterTiktok className="w-4 ml-3.5" />
                        </a>
                      </div>
                    </div>
                  </Fade>
                </div>
                {/* <div className="ml-9">
                <Fade left  spy={triggerTitleAnimation}>
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
                  <Fade left spy={triggerTitleAnimation}>
                    <h3 className="text-base xl:text-lg font-medium mb-6">
                      Services
                    </h3>
                    <div>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5 whitespace-nowrap">
                        <a href={"/services/software-development"}>
                          Software Development
                        </a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5 whitespace-nowrap">
                        <a href={"/services/web-development"}>
                          Web Development
                        </a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5 whitespace-nowrap">
                        <a href={"/services/mobile-app-development"}>
                          Mobile App Development
                        </a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5 whitespace-nowrap">
                        <a href={"/services/ai-iot-solutions"}>
                          AI & IoT Solutions
                        </a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5 whitespace-nowrap">
                        <a href={"/services/e-commerce-development"}>
                          E-Commerce Development
                        </a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5 whitespace-nowrap">
                        <a href={"/services/cloud-computing-solutions"}>
                          Cloud Computing Solutions
                        </a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5 whitespace-nowrap">
                        <a href={"/services/maintenance-and-support"}>
                          Maintenance And Support
                        </a>
                      </h4>
                    </div>
                  </Fade>
                </div>

                {/* <div className="ml-9">
                <Fade left  spy={triggerTitleAnimation}>
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
                  <Fade left spy={triggerTitleAnimation}>
                    <h3 className="text-base xl:text-lg font-medium mb-6 font_primary">
                      Company
                    </h3>
                    <div>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5">
                        {/* <Link to={"../#about"}>About Us</Link> */}
                        <a href={"../#about"}>About Us</a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5">
                        <a href={"/products"}>Products</a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5">
                        <a href={"/career"}>Career</a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5">
                        <a href={"/gallery"}>Gallery</a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5">
                        <a href={"/faq"}>FAQ's</a>
                      </h4>
                      <h4 className="text-xs xl:text-sm font-normal mb-2.5">
                        <a href={"/blogs"}>Blogs</a>
                      </h4>
                    </div>
                  </Fade>
                </div>

                <div className="w-4/12 ml-9 font_primary">
                  <Fade left spy={triggerTitleAnimation}>
                    <h3 className="text-base xl:text-lg font-medium mb-6">
                      Find Us
                    </h3>
                    <div>
                      <div
                        className="relative"
                        onMouseOver={() => {
                          setBackgroundImage(bgAus);
                          setTriggerAnimation(!triggerAnimation);
                        }}
                        onMouseLeave={() => {
                          setBackgroundImage("");
                        }}
                      >
                        <div className="text-xs xl:text-sm font-normal mb-2 2xl:mb-3">
                          <div className="leading-6">
                            <p className="flex items-start">
                              <Icons.Location className="w-5 text-brand-color mr-2.5" />
                              <span>
                                Level 1, 7 Greenfield Parade Bankstown,
                                <br />
                                NSW 2200, Australia.
                              </span>
                            </p>
                          </div>

                          <div className="flex items-center pt-2">
                            <div className="flex items-center">
                              <span className="mr-2.5">
                                <Icons.Mailbox className="w-5 text-brand-color" />
                              </span>
                              <a href="mailto:hello@quadque.tech">
                                hello@quadque.tech
                              </a>
                            </div>
                            <div className="mx-3 my-auto">|</div>
                            <div className="flex items-center">
                              <span>
                                <Icons.BluePhone className="w-4 mr-2.5 text-brand-color" />
                              </span>
                              <span>
                                <a href="tel:+61405899496">+61405899496</a>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <div
                          className="min-h-full min-w-full absolute top-0 left-0 right-0 bottom-0 bg-transparent z-50"
                          onMouseOver={() => {
                            setBackgroundImage(bgAus);
                            setTriggerAnimation(!triggerAnimation);
                          }}
                          onMouseLeave={() => {
                            setBackgroundImage("");
                          }}
                        ></div> */}
                      </div>

                      <div
                        className="relative pt-2"
                        onMouseOver={() => {
                          setBackgroundImage(bgBD);
                          setTriggerAnimation(!triggerAnimation);
                        }}
                        onMouseLeave={() => {
                          setBackgroundImage("");
                        }}
                      >
                        <div className="text-xs xl:text-sm font-normal mb-2 2xl:mb-2.5">
                          <div className="leading-6 mt-2">
                            <p className="flex items-start">
                              <Icons.Location className="w-5 text-brand-color mr-2.5" />
                              <span>
                                Level -7, 8/C, F.R Tower, Panthapath, Dhaka
                                1207, Bangladesh.
                              </span>
                            </p>
                          </div>
                          <div className="flex items-center pt-2">
                            <div className="flex items-center">
                              <span className="mr-2.5">
                                <Icons.Mailbox className="w-5 text-brand-color" />
                              </span>
                              <a href="mailto:info@quadque.tech">
                                info@quadque.tech
                              </a>
                            </div>
                            <div className="mx-3 my-auto">|</div>
                            <div className="flex items-center">
                              <span>
                                <Icons.BluePhone className="w-4 mr-2.5 text-brand-color" />
                              </span>
                              <span>
                                <a href="tel:+8801765276560">+8801765276560</a>
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* <div
                          className="min-h-full min-w-full absolute top-0 left-0 right-0 bottom-0 bg-transparent z-50"
                          
                        ></div> */}
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
              <div className="flex justify-end text-xs pb-2 pt-4 2xl:pt-10">
                © 2020 - {year} | Quadque Technologies Private Limited |
                Imagination {">"} Knowledge | All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
