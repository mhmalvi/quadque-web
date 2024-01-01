import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Fade } from "react-reveal";
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import { Column1xl } from "./data";
import loaderFile from "../../../../assets/Lotties/loader.json";

const Cleints = () => {
  const [count, setCount] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [loader, setLoader] = useState(true);
  const synth = window.speechSynthesis;

  const location = useLocation();

  useEffect(() => {
    if (location?.hash === "#clients") {
      synth.cancel();

      setTimeout(() => {
        setLoader(false);
        setCount(true);
        setTriggerAnimation(true);
      }, 800);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.hash]);

  return (
    <div className="section h-full font_primary overflow-hidden">
      <div className="pl-10 pr-21 2xl:px-21 mr-36 2xl:mr-44 text-white flex justify-between items-start">
        <div className="absolute top-1/4 flex justify-center items-center">
          <div className="max-w-xl items-center text-justify mr-30">
            <div className="text-2xl 2xl:text-5xl font-semibold mb-5 font_title">
              <Fade left cascade spy={triggerAnimation}>
                <div className="flex items-center">
                  <div className="whitespace-nowrap">More than</div>
                  <span className="mr-2 text-brand-color ml-6">
                    {count ? <CountUp start={0} end={100} duration={6} /> : 0}
                  </span>
                </div>
                <div>
                  <span>valuable</span>
                </div>
                <div>
                  <span>Clients</span>
                </div>
              </Fade>
            </div>
            <div className="w-68">
              <Fade
                left
                cascade
                spy={triggerAnimation}
                style={{
                  wordBreak: "keep-all",
                }}
              >
                <ul className="list-inside font_primary text-basetext-left">
                  <li className="list-disc py-0.5 text-left whitespace-nowrap">
                    Leading businesses
                  </li>
                  <li className="list-disc py-0.5 text-left whitespace-nowrap">
                    From all over the world
                  </li>
                  <li className="list-disc py-0.5 text-left whitespace-nowrap">
                    A diverse range of industries
                  </li>
                  <li className="list-disc py-0.5 text-left whitespace-nowrap">
                    High standards of performance{" "}
                  </li>
                  <li className="list-disc py-0.5 text-left whitespace-nowrap">
                    excellent service quality{" "}
                  </li>
                  <li className="list-disc py-0.5 text-left whitespace-nowrap">
                    Practical implementable solutions
                  </li>
                </ul>
                {/* We create premium web design, though and user-friendly that
                solve business problems We create premium web design. */}
              </Fade>
            </div>
          </div>
        </div>

        <div className=" hidden lg:hidden xl:hidden 2xl:block">
          <div className="flex items-center mb-4">
            <div>
             
            </div>
            <div className="ml-40 pl-5 middle_column">
             
            </div>
            <div className="ml-40 pl-[24px]">
            
            </div>
          </div>
        </div>

        <div className="ml-auto hidden lg:block xl:block 2xl:block">
          <div  className="flex items-center mb-4">
            <div>
              <p className="marquee mb-10 ">
                <span className="my-5">
                  {Column1xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[160px] h-[104px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md "
                    >
                      <div className="w-full h-[104px] flex  justify-center items-center">
                        <img className="w-8/12" src={client} alt="Clinet" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
            
            </div>
            <div className="ml-40 pl-[24px] middle_column">
       
              <p className="marquee-reverse">
                <span>
                  {Column1xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[160px] h-[104px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="Clinet" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
            </div>
            <div className="ml-40 pl-[24px]">
              <p className="marquee">
                <span>
                  {Column1xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[160px] h-[104px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="Clinet" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
       
            </div>
          </div>
        </div>

        <div className="ml-auto hidden lg:block xl:hidden 2xl:hidden">
          <div className="flex items-center mb-4">
            <div>
           
            </div>
            <div className="ml-40 pl-[24px] middle_column">
            </div>
            <div className="ml-40 pl-[24px]">
            
            </div>
          </div>
        </div>
      </div>

      <a href="#start-project" className="absolute top-16 right-8">
        <span className="relative  flex justify-center items-center h-4 w-4 cursor-pointer">
          <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
        </span>
      </a>

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

export default Cleints;


