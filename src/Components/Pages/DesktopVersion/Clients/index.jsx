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
      <div className="px-21 mr-36 2xl:mr-44 text-white flex justify-between items-start">
        <div className="absolute top-1/4 flex justify-center items-center">
          <Flip left cascade spy={triggerAnimation}>
            <div className="w-67 items-center text-justify mr-30">
              <div className="text-4xl 2xl:text-5xl font-semibold mb-5">
                <h1 className="whitespace-nowrap">More then valuable</h1>
                <span className="mr-2 text-brand-color">
                  {count ? <CountUp start={0} end={53} duration={6} /> : 0}+
                </span>
                coustomers
              </div>
              <p className="w-67 text-justify">
                We create premium web design, though and user-friendly that
                solve business problems We create premium web design.
              </p>
            </div>
          </Flip>
        </div>

        <div className="ml-auto hidden lg:hidden xl:hidden 2xl:block">
          <div className="flex items-center mb-4">
            <div>
              <p class="marquee">
                <span>
                  {colum12xl?.map((client, i) => (
                    <div className="inline-block w-40 h-[100px] bg-brand-color bg-opacity-20">
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p class="marquee marquee2">
                <span>
                  {colum12xl?.map((client, i) => (
                    <div className="inline-block w-40 h-[100px] bg-brand-color bg-opacity-20">
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
              <p class="marquee-reverse">
                <span>
                  {colum12xl?.map((client, i) => (
                    <div className="inline-block w-40 h-[100px] bg-brand-color bg-opacity-20">
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p class="marquee-reverse marquee-reverse-2">
                <span>
                  {colum12xl?.map((client, i) => (
                    <div className="inline-block w-40 h-[100px] bg-brand-color bg-opacity-20">
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
              <p class="marquee">
                <span>
                  {colum12xl?.map((client, i) => (
                    <div className="inline-block w-40 h-[100px] bg-brand-color bg-opacity-20">
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p class="marquee marquee2">
                <span>
                  {colum12xl?.map((client, i) => (
                    <div className="inline-block w-40 h-[100px] bg-brand-color bg-opacity-20">
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
              <p class="marquee">
                <span>
                  {colum1xl?.map((client, i) => (
                    <div className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20">
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p class="marquee marquee2">
                <span>
                  {colum1xl?.map((client, i) => (
                    <div className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20">
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
              <p class="marquee-reverse">
                <span>
                  {colum1xl?.map((client, i) => (
                    <div className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20">
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p class="marquee-reverse marquee-reverse-2">
                <span>
                  {colum1xl?.map((client, i) => (
                    <div className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20">
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
              <p class="marquee">
                <span>
                  {colum1xl?.map((client, i) => (
                    <div className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20">
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p class="marquee marquee2">
                <span>
                  {colum1xl?.map((client, i) => (
                    <div className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20">
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
              <p class="marquee">
                <span>
                  {colum1lg?.map((client, i) => (
                    <div className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20">
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p class="marquee marquee2">
                <span>
                  {colum1lg?.map((client, i) => (
                    <div className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20">
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
              <p class="marquee-reverse">
                <span>
                  {colum1lg?.map((client, i) => (
                    <div className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20">
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p class="marquee-reverse marquee-reverse-2">
                <span>
                  {colum1lg?.map((client, i) => (
                    <div className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20">
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
              <p class="marquee">
                <span>
                  {colum1lg?.map((client, i) => (
                    <div className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20">
                      <div className="w-full h-full flex justify-center items-center">
                        <img src={client} alt="" />
                      </div>
                    </div>
                  ))}
                  &nbsp;
                </span>
              </p>
              <p class="marquee marquee2">
                <span>
                  {colum1lg?.map((client, i) => (
                    <div className="inline-block w-40 h-[104px] bg-brand-color bg-opacity-20">
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

      <span class="absolute top-[26px] right-[26px]  flex justify-center items-center h-4 w-4">
        <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-white opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </div>
  );
};

export default Cleints;

const colum12xl = [ms, ts, sp, ms, ts, sp, ms, ts, sp, ms, ts, sp, ms, ts, sp];
const colum1xl = [ms, ts, sp, ms, ts, sp, ms, ts, sp, ms, ts];
const colum1lg = [ms, ts, sp, ms, ts, sp, ms, ts, sp];
// const colum2 = [ts, sp, ms, ts, sp, ms, ts, sp, ms];
// const colum3 = [sp, ts, ms, sp, ts, ms, sp, ts, ms];
