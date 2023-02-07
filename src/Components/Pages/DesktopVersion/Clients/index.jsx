import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Fade } from "react-reveal";
import { useLocation } from "react-router-dom";
import bkash from "../../../../asstes/Images/bkash.png";
import itec from "../../../../asstes/Images/itec.png";
import nta from "../../../../asstes/Images/nta.png";
import uct from "../../../../asstes/Images/uct.png";
import aia from "../../../../asstes/Images/aia.png";
import alpha from "../../../../asstes/Images/alpha.png";
import atr from "../../../../asstes/Images/atr.png";
import blue from "../../../../asstes/Images/blue.png";
import esi from "../../../../asstes/Images/esi.png";
import ibm from "../../../../asstes/Images/ibm.png";
import tel from "../../../../asstes/Images/tel.png";
import topTrip from "../../../../asstes/Images/toptrip.png";
import us from "../../../../asstes/Images/us.png";
import Lottie from "lottie-react";
import loaderFile from "../../../../asstes/Lotties/loader.json";

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

  console.log(location?.hash);

  return (
    <div className="section h-full font_primary overflow-hidden">
      <div className="pl-10 pr-21 2xl:px-21 mr-36 2xl:mr-44 text-white flex justify-between items-start">
        <div className="absolute top-1/4 flex justify-center items-center">
          <div className="max-w-xl items-center text-justify mr-30">
            <div className="text-2xl 2xl:text-5xl font-semibold mb-5 font_title">
              <Fade left cascade spy={triggerAnimation}>
                <div className="flex items-center">
                  <h1 className="whitespace-nowrap">More than</h1>
                  <span className="mr-2 text-brand-color ml-6">
                    {count ? <CountUp start={0} end={100} duration={6} /> : 0}
                  </span>
                </div>
                <div>
                  <h1>valuable</h1>
                </div>
                <div>
                  <h1>Clients</h1>
                </div>
              </Fade>
            </div>
            <div className="w-68 text-justify">
              <Fade
                left
                cascade
                spy={triggerAnimation}
                style={{
                  wordBreak: "keep-all",
                }}
              >
                <ul className="list-inside font_primary text-base">
                  <li className="list-disc py-0.5">Leading businesses</li>
                  <li className="list-disc py-0.5">From all over the world</li>
                  <li className="list-disc py-0.5">
                    A diverse range of industries
                  </li>
                  <li className="list-disc py-0.5">
                    High standards of performance{" "}
                  </li>
                  <li className="list-disc py-0.5">
                    Excellent service quality{" "}
                  </li>
                  <li className="list-disc py-0.5">
                    Practical implementable solutions
                  </li>
                </ul>
                {/* We create premium web design, though and user-friendly that
                solve business problems We create premium web design. */}
              </Fade>
            </div>
          </div>
        </div>

        <div className="ml-auto hidden lg:hidden xl:hidden 2xl:block">
          <div className="flex items-center mb-4">
            <div>
              <p className="marquee">
                <span>
                  {colum12xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[150px] h-[100px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-[100px] flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p className="marquee marquee2">
                <span>
                  {colum12xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[150px] h-[100px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
            </div>
            <div className="ml-40 pl-5 middle_column">
              <p className="marquee-reverse">
                <span>
                  {colum12xl2?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[150px] h-[100px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p className="marquee-reverse marquee-reverse-2">
                <span>
                  {colum12xl2?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[150px] h-[100px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
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
                  {colum12xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[150px] h-[100px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p className="marquee marquee2">
                <span>
                  {colum12xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[150px] h-[100px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="ml-auto hidden lg:hidden xl:block 2xl:hidden">
          <div className="flex items-center mb-4">
            <div>
              <p className="marquee">
                <span>
                  {colum1xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[160px] h-[104px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-[104px] flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p className="marquee marquee2">
                <span>
                  {colum1xl2?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[160px] h-[104px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
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
                  {colum1xl2?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[160px] h-[104px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p className="marquee-reverse marquee-reverse-2">
                <span>
                  {colum1xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[160px] h-[104px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
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
                  {colum1xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[160px] h-[104px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p className="marquee marquee2">
                <span>
                  {colum1xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[160px] h-[104px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
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
              <p className="marquee">
                <span>
                  {colum1lg?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[160px] h-[104px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p className="marquee marquee2">
                <span>
                  {colum1lg?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[160px] h-[104px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
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
                  {colum1lg?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[160px] h-[104px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p className="marquee-reverse marquee-reverse-2">
                <span>
                  {colum1lg?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[160px] h-[104px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
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
                  {colum1lg?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[160px] h-[104px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p className="marquee marquee2">
                <span>
                  {colum1lg?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[160px] h-[104px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <a href="#start-project" className="absolute top-8 right-8">
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
            <h1 className="font_title text-3xl font-semibold text-white">
              Loading...
            </h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Cleints;

const colum12xl = [
  itec,
  nta,
  bkash,
  uct,
  tel,
  blue,
  atr,
  alpha,
  ibm,
  aia,
  topTrip,
  us,
  itec,
  nta,
  tel,
];

const colum12xl2 = [
  alpha,
  ibm,
  aia,
  topTrip,
  us,
  itec,
  nta,
  tel,
  alpha,
  ibm,
  aia,
  topTrip,
  us,
  itec,
  nta,
];
// const colum12xl = [ms, ts, sp, ms, ts, sp, ms, ts, sp, ms, ts, sp, ms, ts, sp];
const colum1xl = [
  itec,
  nta,
  bkash,
  uct,
  tel,
  blue,
  atr,
  alpha,
  ibm,
  aia,
  topTrip,
  us,
];

const colum1xl2 = [
  aia,
  topTrip,
  us,
  itec,
  nta,
  tel,
  atr,
  alpha,
  ibm,
  aia,
  topTrip,
  us,
];
// const colum1xl = [ms, ts, sp, ms, ts, sp, ms, ts, sp, ms, ts, sp];

const colum1lg = [itec, nta, bkash, uct, tel, esi, blue, atr, alpha];

// const colum1lg = [ms, ts, sp, ms, ts, sp, ms, ts, sp];

// const colum2 = [ts, sp, ms, ts, sp, ms, ts, sp, ms];
// const colum3 = [sp, ts, ms, sp, ts, ms, sp, ts, ms];
