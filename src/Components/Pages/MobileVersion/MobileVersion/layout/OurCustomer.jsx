import React, { useState, useEffect } from "react";
import Atr from "../../../../asstes/Images/atr.png";
import Otobi from "../../../../asstes/Images/otobi.png";
import Nta from "../../../../asstes/Images/nta.png";
import ibm from "../../../../asstes/Images/ibm.png";
import Toptrip from "../../../../asstes/Images/toptrip.png";
import Officemate from "../../../../asstes/Images/officemate.png";
import "../../MobileVersion/MobileView.css"

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
    <div className="w-full text-white mt-18 mb-5">
      <div className="text-3xl px-6 pb-5">
        More than <span className="font-bold text-brand-color">100</span> valuable
        coustomers
      </div>
      <div className="text-sm px-6 pb-3 leading-6">
        We create premium web design, though and user-friendly that solve
        business problems We create premium web design.
      </div>
      <div className="flex flex-wrap justify-evenly pb-4 px-10">
        {clientsImg?.map((client) =>
        <img src={client.client_images} alt="" className="w-32"/>
        )}
      </div>
    </div>
  );
};

export default OurCustomer;
