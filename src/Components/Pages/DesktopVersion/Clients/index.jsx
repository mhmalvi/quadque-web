import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useLocation } from "react-router-dom";
import ms from "../../../../asstes/Images/ms.png";
import ts from "../../../../asstes/Images/TESLA.png";
import sp from "../../../../asstes/Images/sp.png";

const Cleints = () => {
  const colum1 = [ms, ts, sp];
  const colum2 = [ts, sp, ms];
  const colum3 = [sp, ts, ms];

  const [count, setCount] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location?.hash === "#clients") {
      setCount(true);
    }
  }, [location?.hash]);

  return (
    <div
      id="clients"
      className="section h-full font-poppins py-10"
      // onMouseOver={mouseIn}
    >
      <div className="px-21 text-white">
        <div className="w-67 text-justify">
          <div className="text-4xl font-semibold mb-5">
            <h1 className="whitespace-nowrap">More then valuable</h1>
            <span className="mr-2 text-brand-color">
              {count && <CountUp start={0} end={100} duration={6} />}
            </span>
            coustomers
          </div>
          <p className="w-67 text-justify">
            We create premium web design, though and user-friendly that solve
            business problems We create premium web design.
          </p>
        </div>

        <div className="flex">
          {colum1?.map((client, i) => (
            <div key={i}>
              <img src={client} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cleints;
