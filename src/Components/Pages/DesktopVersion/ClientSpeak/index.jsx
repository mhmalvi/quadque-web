import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { useLocation } from "react-router-dom";
import titleBg from "../../../../asstes/Images/client_speak.png";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import { handleFetchClientSpeaks } from "../../../Shared/services";

const ClientSpeak = () => {
  const location = useLocation();
  const [index, setIndex] = useState(0);
  const [clientSpeaks, setClientSpeaks] = useState([]);
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [loader, setLoader] = useState(true);
  const synth = window.speechSynthesis;

  useEffect(() => {
    if (location.hash === "#client-speak") {
      synth.cancel();

      setTimeout(() => {
        setLoader(false);
        setTriggerAnimation(true);
        setTriggerTitleAnimation(true);
      }, 800);

      (async () => {
        const clientSpeaks = await handleFetchClientSpeaks();
        if (clientSpeaks) setClientSpeaks(clientSpeaks);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  useEffect(() => {
    if (index < 0 || index > clientSpeaks.length - 1) {
      setIndex(0);
    }
  }, [index, clientSpeaks]);

  return (
    <div className="section relative w-full min-h-full 2xl:pb-12 font_primary text-white overflow-hidden">
      <div className="ml-6 relative 2xl:left-14 2xl:top-8 lg:pt-7 lg:mt-9 pl-[68px] pr-[22px] text-white">
        <div
          className="text-5xl font-bold leading-10 capitalize font_title mb-8"
          style={{
            letterSpacing: "0.06em",
          }}
        >
          <Fade left spy={triggerTitleAnimation}>
            <img
              className="absolute top-0 -left-4 z-0"
              src={titleBg}
              alt="Title Background"
            />
            <div className="leading-10 z-50">clients</div>
            <div className="ml-8 leading-10">speak</div>
          </Fade>
        </div>

        {/* <Fade left cascade spy={triggerTitleAnimation}>
          <img className="absolute top-0 -left-4 z-0" src={titleBg} alt="" />

          <div className="lg:text-3xl 2xl:text-4xl font-semibold text-white mb-7 -mt-4 font_title leading-10">
            clients
          </div>
          <div className="lg:text-3xl 2xl:text-4xl font-semibold text-white mb-7 -mt-4 font_title ml-8 leading-10">
            speak
          </div>
        </Fade> */}
      </div>

      <div className="mt-16 2xl:mt-36 flex justify-center items-center overflow-hidden">
        <div className="w-full flex justify-center mx-auto">
          <Fade left spy={triggerAnimation}>
            <div className="relative">
              <img
                className="lg:w-[250px] lg:h-[260px] 2xl:w-98 2xl:h-98 lg:mr-12 2xl:mr-16 pr-0.05"
                src={
                  process.env.REACT_APP_ASSETS_URL +
                  "/" +
                  clientSpeaks?.[index]?.image
                }
                alt="Clients img"
              />
              <div
                className="absolute bottom-0 h-14 w-full bg-gradient-to-t from-black to-transparent"
                style={{
                  borderRadius: "60% 60% 0 0",
                }}
              ></div>
            </div>

            <div className="w-[423px] mr-9 relative">
              <div className="">
                <h3
                  className="lg:text-sm 2xl:text-lg break-keep capitalize font-light italic bg-gray-400 bg-opacity-20 backdrop-blur-md px-4 py-3 rounded-md shadow-sm shadow-slate-600 border border-gray-600"
                  style={{
                    letterSpacing: "0.04em",
                  }}
                >
                  {/* <span className="text-3xl m-0 italic absolute top-0.5">
                    "
                  </span> */}
                  <span className="pt-1">
                    {clientSpeaks?.[index]?.description}
                  </span>
                  {/* <span className="text-3xl m-0 italic absolute">"</span> */}
                </h3>

                <h3
                  className="mt-6 mb-2.5 text-base font-medium leading-5"
                  style={{
                    letterSpacing: "0.04em",
                  }}
                >
                  {clientSpeaks?.[index]?.name}
                </h3>

                <h4
                  className="opacity-50 text-base font-medium leading-5"
                  style={{
                    letterSpacing: "0.04em",
                  }}
                >
                  {clientSpeaks?.[index]?.designation}
                </h4>
              </div>

              <div className="absolute bottom-0 flex items-center 2xl:mt-14 lg:mt-4">
                <div
                  className="relative cursor-pointer pr-3 py-2 opacity-80 hover:opacity-100 text-2xl"
                  onClick={() => {
                    setIndex(index + 1);
                    setTriggerAnimation(!triggerAnimation);
                  }}
                >
                  <div className="arrowLeft"></div>
                </div>
                <div className="h-0.5 w-24 bg-white mx-2.5 -mt-5"></div>
                <div
                  className="relative cursor-pointer px-3 py-2 opacity-80 hover:opacity-100 text-2xl ml-4"
                  onClick={() => {
                    setIndex(index + 1);
                    setTriggerAnimation(!triggerAnimation);
                  }}
                >
                  <div className="arrowRight"></div>
                </div>
              </div>
              {/* </Fade> */}
            </div>
          </Fade>
        </div>
      </div>

      <div>
        {loader ? (
          <div className="min-w-full z-50 min-h-screen flex flex-col justify-center items-center absolute top-0 bg-black backdrop-blur-md bg-opacity-80">
            <Lottie
              className="w-1/6 mx-auto"
              animationData={loaderFile}
              loop={true}
            />
            <div className="font_title text-3xl font-semibold text-white">
              Loading...
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ClientSpeak;
