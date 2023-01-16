import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { Flip } from "react-reveal";
import { useLocation } from "react-router-dom";
import ms from "../../../../asstes/Images/ms.png";
import sp from "../../../../asstes/Images/sp.png";
import ts from "../../../../asstes/Images/TESLA.png";

const Cleints = () => {
  const [count, setCount] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location?.hash === "#clients") {
      setTimeout(() => {
        setCount(true);
        setTriggerAnimation(!triggerAnimation);
      }, 800);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.hash]);

  console.log(location?.hash);

  return (
    <div className="section h-full font-poppins overflow-hidden">
      <div className="pl-10 pr-21 2xl:px-21 mr-36 2xl:mr-44 text-white flex justify-between items-start">
        <div className="absolute top-1/4 flex justify-center items-center">
          <div className="max-w-xl items-center text-justify mr-30">
            <div className="text-2xl 2xl:text-5xl font-semibold mb-5 font_title">
              <Flip left cascade spy={triggerAnimation}>
                <div className="flex items-center">
                  <h1 className="whitespace-nowrap">More then</h1>
                  <span className="mr-2 text-brand-color ml-6">
                    {count ? <CountUp start={0} end={53} duration={6} /> : 0}+
                  </span>
                </div>
                <span>
                  valuable <br /> customers
                </span>
              </Flip>
            </div>
            <Flip left cascade spy={triggerAnimation}>
              <p className="w-67 text-justify">
                We create premium web design, though and user-friendly that
                solve business problems We create premium web design.
              </p>
            </Flip>
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
                      className="inline-block w-36 h-[100px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                      className="inline-block w-36 h-[100px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                  {colum12xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block w-36 h-[100px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p className="marquee-reverse marquee-reverse-2">
                <span>
                  {colum12xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block w-40 h-[100px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                      className="inline-block w-40 h-[100px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                      className="inline-block w-40 h-[100px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                      className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                      className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                  {colum1xl?.map((client, i) => (
                    <div
                      key={i}
                      className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                      className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                      className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                      className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                      className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                      className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                      className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                      className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                      className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
                      className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20"
                    >
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
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
    </div>
  );
};

export default Cleints;

const colum12xl = [ms, ts, sp, ms, ts, sp, ms, ts, sp, ms, ts, sp, ms, ts, sp];
const colum1xl = [ms, ts, sp, ms, ts, sp, ms, ts, sp, ms, ts, sp];
const colum1lg = [ms, ts, sp, ms, ts, sp, ms, ts, sp];
// const colum2 = [ts, sp, ms, ts, sp, ms, ts, sp, ms];
// const colum3 = [sp, ts, ms, sp, ts, ms, sp, ts, ms];
