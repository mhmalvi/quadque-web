import React, { useState, useEffect } from "react";
import Atr from "../../../../asstes/Images/atr.png";
import Otobi from "../../../../asstes/Images/otobi.png";
import Nta from "../../../../asstes/Images/nta.png";
import ibm from "../../../../asstes/Images/ibm.png";
import Toptrip from "../../../../asstes/Images/toptrip.png";
import Officemate from "../../../../asstes/Images/officemate.png";
import "../../MobileVersion/MobileView.css";

import { handleFetchClients } from "../../../Shared/services";

const OurCustomer = () => {
  const [clientsImg, setClientsImg] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchClientImages = await handleFetchClients();
      setClientsImg(fetchClientImages);
      //console.log("client data", clientsImg);
    })();
  }, []);

  return (
    <div className="w-full text-white py-18">
      <div className="flex flex-wrap justify-evenly pb-4 px-10">
        {clientsImg?.map((client) => (
          <img src={client.client_images} alt="" className="w-32" />
        ))}
      </div>
      <div className="font_title text-3xl px-6 pb-5">
        <span className="font-bold text-brand-color">100+</span> clients
        served
      </div>
      <ul className="text-sm px-6 pb-8 leading-6">
        <li className="flex">
          <p className="w-2 h-2 bg-white mr-2 my-auto rounded-full"></p>Leading businesses from all over the world 
        </li>
        <li className="flex">
          <p className="w-2 h-2 bg-white mr-2 my-auto rounded-full"></p>A diverse range of industries 
        </li>
      </ul>


      <div className="font_title text-3xl px-6 pb-5">
        <span className="font-bold text-brand-color">150+</span> Projects
        completed
      </div>
      <ul className="text-sm px-6 pb-8 leading-6">
        <li className="flex">
          <p className="w-2 h-2 bg-white mr-2 my-auto rounded-full"></p>High standards of performance 
        </li>
        <li className="flex">
          <p className="w-2 h-2 bg-white mr-2 my-auto rounded-full"></p>Excellent service quality 
        </li>
        <li className="flex">
          <p className="w-2 h-2 bg-white mr-2 my-auto rounded-full"></p>Practical and easily implementable solutions 
        </li>
      </ul>
    </div>
  );
};

export default OurCustomer;
