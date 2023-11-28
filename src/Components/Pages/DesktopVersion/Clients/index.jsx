import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Fade } from "react-reveal";
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import logo_six from "../../../../assets/Images/ClientLogos/6.png";
import Aestheticars_logo from "../../../../assets/Images/ClientLogos/Aestheticars_logo.png";
import agro from "../../../../assets/Images/ClientLogos/agro.png";
import atr from "../../../../assets/Images/ClientLogos/atr.png";
import aia from "../../../../assets/Images/ClientLogos/aia.png";
import alpha from "../../../../assets/Images/ClientLogos/ALPHA.png";
import bright from "../../../../assets/Images/ClientLogos/BRIGHT.png";
import clenovative from "../../../../assets/Images/ClientLogos/clenovative.png";
import dt from "../../../../assets/Images/ClientLogos/dt.png";
import Epiker from "../../../../assets/Images/ClientLogos/Epiker.png";
import esg from "../../../../assets/Images/ClientLogos/esg.png";
import esi from "../../../../assets/Images/ClientLogos/ESI_Logo.png";
import gb from "../../../../assets/Images/ClientLogos/gb.png";
import harbour from "../../../../assets/Images/ClientLogos/Harbour.png";
import ibm from "../../../../assets/Images/ClientLogos/IBM-LOGO.png";
import itec from "../../../../assets/Images/ClientLogos/ITEC.png";
import just_for_mom from "../../../../assets/Images/ClientLogos/just_for_mom.png";
import momola from "../../../../assets/Images/ClientLogos/Momola.png";
import nta from "../../../../assets/Images/ClientLogos/NTA.png";
import Officemate from "../../../../assets/Images/ClientLogos/Officemate.png";
import otobi from "../../../../assets/Images/ClientLogos/otobi.png";
import paper from "../../../../assets/Images/ClientLogos/paper.png";
import sa from "../../../../assets/Images/ClientLogos/SA.png";
import Tanaz from "../../../../assets/Images/ClientLogos/Tanaz.png";
import Thermottle from "../../../../assets/Images/ClientLogos/Thermottle.png";
import Top_Trip_Logo from "../../../../assets/Images/ClientLogos/Top_Trip_Logo.png";
import Trade_Trade_US_Log from "../../../../assets/Images/ClientLogos/Trade_Trade_US_Log.png";
import trastec from "../../../../assets/Images/ClientLogos/trastec.png";
import uct from "../../../../assets/Images/ClientLogos/UCT.png";
import usbangla from "../../../../assets/Images/ClientLogos/usbangla.png";
import Zaker_Dairy from "../../../../assets/Images/ClientLogos/Zaker_Dairy.png";
import zdsl from "../../../../assets/Images/ClientLogos/zdsl.png";
import uniqloAlpha from "../../../../assets/Images/ClientLogos/uniqlo_alpha.png";
import crush from "../../../../assets/Images/ClientLogos/Crush.png";
import drobbo from "../../../../assets/Images/ClientLogos/drobbo.png";
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
                        <img
                          className="w-8/12 client_img"
                          src={client}
                          alt="Clinet"
                        />
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
                        <img className="w-8/12" src={client} alt="Clinet" />
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
                        <img className="w-8/12" src={client} alt="Clinet" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              {/* <p className="marquee-reverse marquee-reverse-2">
                <span>
                  {colum32xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[150px] h-[100px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="Clinet" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p> */}
            </div>
            <div className="ml-40 pl-[24px]">
              {/* <p className="marquee">
                <span>
                  {colum12xl2?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[150px] h-[100px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="Clinet" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p> */}
              {/* <p className="marquee marquee2">
                <span>
                  {colum32xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block max-w-[150px] h-[100px] bg-gradient-to-br from-gray-900 to-gray-600 bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 border-opacity-50 rounded-md"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img className="w-8/12" src={client} alt="Clinet" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p> */}
            </div>
          </div>
        </div>

        <div className="ml-auto hidden lg:block xl:block 2xl:block">
          <div className="flex items-center mb-4">
            <div>
              <p className="marquee mb-10 ">
                <span className="my-5">
                  {colum1xl?.map((client, i) => (
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
              {/* <p className="marquee marquee2">
                <span>
                  {colum1xl2?.map((client, i) => (
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
              </p> */}
            </div>
            <div className="ml-40 pl-[24px] middle_column">
              {/* <p className="marquee-reverse">
                <span>
                  {colum1xl2?.map((client, i) => (
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
              </p> */}
              <p className="marquee-reverse marquee-reverse-2">
                <span>
                  {colum1xl?.map((client, i) => (
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
                  {colum1xl?.map((client, i) => (
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
              {/* <p className="marquee marquee2">
                <span>
                  {colum1xl?.map((client, i) => (
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
              </p> */}
            </div>
          </div>
        </div>

        <div className="ml-auto hidden lg:block xl:hidden 2xl:hidden">
          <div className="flex items-center mb-4">
            <div>
              {/* <p className="marquee">
                <span>
                  {colum1lg?.map((client, i) => (
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
              <p className="marquee marquee2">
                <span>
                  {colum1lg?.map((client, i) => (
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
              </p> */}
            </div>
            <div className="ml-40 pl-[24px] middle_column">
              {/* <p className="marquee-reverse">
                <span>
                  {colum1lg?.map((client, i) => (
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
              <p className="marquee-reverse marquee-reverse-2">
                <span>
                  {colum1lg?.map((client, i) => (
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
              </p> */}
            </div>
            <div className="ml-40 pl-[24px]">
              {/* <p className="marquee">
                <span>
                  {colum1lg?.map((client, i) => (
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
              </p> */}
              {/* <p className="marquee marquee2">
                <span>
                  {colum1lg?.map((client, i) => (
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
              </p> */}
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

const colum12xl = [
  itec,
  logo_six,
  Aestheticars_logo,
  agro,
  aia,
  alpha,
  bright,
  clenovative,
  dt,
  Epiker,
  esg,
  Zaker_Dairy,
  gb,
  harbour,
  ibm,
];

const colum12xl2 = [
  atr,
  just_for_mom,
  momola,
  nta,
  Officemate,
  otobi,
  paper,
  sa,
  Tanaz,
  Thermottle,
  Top_Trip_Logo,
  Trade_Trade_US_Log,
  trastec,
  uct,
  usbangla,
];

const colum32xl = [
  uniqloAlpha,
  logo_six,
  Aestheticars_logo,
  agro,
  aia,
  alpha,
  crush,
  clenovative,
  dt,
  Epiker,
  esg,
  drobbo,
  gb,
  trastec,
  ibm,
];

// const colum12xl = [ms, ts, sp, ms, ts, sp, ms, ts, sp, ms, ts, sp, ms, ts, sp];
const colum1xl = [
  itec,
  nta,
  paper,
  uct,
  Zaker_Dairy,
  zdsl,
  Thermottle,
  alpha,
  ibm,
  aia,
  Trade_Trade_US_Log,
  usbangla,
  Aestheticars_logo,
  harbour,
  trastec,
  crush,
  clenovative,
  dt,
  Epiker,
  esg,
  drobbo,
  gb,
  logo_six,
  uniqloAlpha,
  Tanaz,
  Top_Trip_Logo,
  sa,
  otobi,
  paper,
];

const colum1xl2 = [nta, usbangla, alpha, ibm];
// const colum1xl = [ms, ts, sp, ms, ts, sp, ms, ts, sp, ms, ts, sp];

const colum1lg = [
  itec,
  nta,
  Thermottle,
  uct,
  Zaker_Dairy,
  esi,
  Trade_Trade_US_Log,
  aia,
  alpha,
];

// const colum1lg = [ms, ts, sp, ms, ts, sp, ms, ts, sp];

// const colum2 = [ts, sp, ms, ts, sp, ms, ts, sp, ms];
// const colum3 = [sp, ts, ms, sp, ts, ms, sp, ts, ms];
