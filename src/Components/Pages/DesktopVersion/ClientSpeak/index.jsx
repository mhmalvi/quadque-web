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
    }

    (async () => {
      const clientSpeaks = await handleFetchClientSpeaks();
      if (clientSpeaks) setClientSpeaks(clientSpeaks);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  useEffect(() => {
    if (index < 0 || index > clientSpeaks.length - 1) {
      setIndex(0);
    }
  }, [index, clientSpeaks]);

  return (
    <div className="section relative w-full min-h-full 2xl:pb-12 font-poppins text-white">
      <div className="ml-6 relative 2xl:left-14 2xl:top-8 lg:pt-7 lg:mt-9 pl-[68px] pr-[22px] text-white">
        <Fade left cascade spy={triggerTitleAnimation}>
          <img className="absolute top-0 -left-4 z-0" src={titleBg} alt="" />
          <h1 className="z-50 lg:text-3xl 2xl:text-[32px] font-semibold leading-10 text-white mb-7 -mt-4 font_title">
            Our clients speak
          </h1>
        </Fade>
      </div>

      <div className="mt-16 2xl:mt-36 flex justify-center items-center">
        <div className="w-full flex justify-center mx-auto">
          <Fade left cascade spy={triggerAnimation}>
            <div>
              <img
                className="lg:w-[250px] lg:h-[260px] 2xl:w-98 2xl:h-98 lg:mr-12 2xl:mr-16 pr-0.05"
                src={
                  process.env.REACT_APP_ASSETS_URL +
                  "/" +
                  clientSpeaks?.[index]?.image
                }
                alt=""
              />
            </div>

            <div className="lg:w-[423px] 2xl:w-98 mr-9 relative">
              <h3
                className="lg:text-sm 2xl:text-lg font-normal capitalize text-justify"
                style={{
                  letterSpacing: "0.04em",
                }}
              >
                {clientSpeaks?.[index]?.description}
              </h3>

              <h3
                className="mt-8 mb-2.5 text-base font-medium leading-5"
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

              <div className="absolute bottom-0 flex items-center 2xl:mt-14 lg:mt-4">
                <div
                  className="cursor-pointer pr-3 py-2 opacity-80 hover:opacity-100 text-2xl"
                  onClick={() => {
                    setIndex(index + 1);
                    setTriggerAnimation(!triggerAnimation);
                  }}
                >
                  Prev
                </div>
                <div className="h-0.5 w-24 bg-white mx-2.5"></div>
                <div
                  className="cursor-pointer px-3 py-2 opacity-80 hover:opacity-100 text-2xl"
                  onClick={() => {
                    setIndex(index + 1);
                    setTriggerAnimation(!triggerAnimation);
                  }}
                >
                  Next
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
            <h1 className="font_title text-3xl font-semibold text-white">
              Loading...
            </h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ClientSpeak;
