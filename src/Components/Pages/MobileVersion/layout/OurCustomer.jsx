import React, { useState, useRef, useEffect } from "react";
// import Otobi from "../../../../asstes/Images/otobi.png";
import "../../MobileVersion/MobileView.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icons from "../../../Shared/Icons";
import "../../MobileVersion/MobileView.css";

import { handleFetchClients } from "../../../Shared/services";

const OurCustomer = () => {
  const [clientsImg, setClientsImg] = useState([]);
  const [loader, setLoader] = useState(true);
  const [nav, setNav] = useState(null);
  const slider = useRef(null);

  useEffect(() => {
    (async () => {
      const fetchClientImages = await handleFetchClients();
      if (fetchClientImages) {
        setTimeout(() => {
          setLoader(false);
          setClientsImg(fetchClientImages);
        }, 3000);
      } else {
        setTimeout(() => {
          setLoader(false);
        }, 4000);
      }
      //console.log("client data", clientsImg);
    })();
  }, []);

  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    centerPadding: "0px",
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };

  useEffect(() => {
    setNav(slider.current);
  }, []);

  return (
    <div className="w-full text-white pt-24">
      {loader ? (
        <div className="absolute w-[100%] z-40 flex justify-center items-center m-auto bg-black backdrop-blur-md">
          <div className="flex lds-dual-ring animate-pulse"> </div>
          <div className="font_title text-white text-sm font-thin px-2">
            Loading...
          </div>
        </div>
      ) : null}
      <div className="pb-13 px-10 relative">
        <Slider ref={slider} {...settings} arrows={false}>
          {clientsImg?.map((client) => (
            <img
              src={
                process.env.REACT_APP_ASSETS_URL + "/" + client.client_images
              }
              alt=""
              className="px-4 w-32"
            />
          ))}
        </Slider>
      {clientsImg && (
        <>
          <div
            onClick={() => slider.current.slickPrev()}
            className="arrowLeft absolute top-1/2 font-semibold"
          >
            
          </div>
          <div
            onClick={() => slider.current.slickNext()}
            className="arrowRight absolute top-1/2 font-semibold"
          >
            
          </div>
        </>
      )}
      </div>

      <div className="font_title text-3xl px-6 pb-5 text-center">
        <span className="font-bold text-brand-color">100+</span> clients served
      </div>
      <ul className="text-sm px-6 pb-8 leading-6">
        <li className="flex justify-center">
          Leading businesses from all over the world
        </li>
        <li className="flex justify-center">A diverse range of industries</li>
      </ul>

      <div className="font_title text-3xl px-6 pb-5 text-center">
        <span className="font-bold text-brand-color">150+</span> Projects
        completed
      </div>
      <ul className="text-sm px-6 pb-8 leading-6">
        <li className="flex justify-center">
          Practical and easily implementable solutions
        </li>
        <li className="flex justify-center">High standards of performance</li>
        <li className="flex justify-center">Excellent service quality</li>
      </ul>
    </div>
  );
};

export default OurCustomer;
