import React, { useState, useRef, useEffect } from "react";
// import Otobi from "../../../../asstes/Images/otobi.png";
import "../../MobileVersion/MobileView.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icons from "../../../Shared/Icons";
import "../../MobileVersion/MobileView.css";
import Lottie from "lottie-react";
import Achievement from "../../../../asstes/Lotties/achievement.json";
import sucess from "../../../../asstes/Lotties/success.json";

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
    <div className="w-full text-white pt-24 relative font_primary">
      {loader ? (
        <div className="w-full z-40 flex justify-center items-center m-auto">
          <div className="flex lds-dual-ring animate-pulse"> </div>
          <div className="font_title text-white text-sm font-thin px-2">
            Loading...
          </div>
        </div>
      ) : null}
      <div className="pb-20 px-10 relative">
        <Slider ref={slider} {...settings} arrows={false}>
          {clientsImg?.map((client) => (
            <div className="px-1">
              <div className="flex justify-center items-center bg-white bg-opacity-10 border border-zinc-700 backdrop-filter backdrop-blur-[1px] rounded-md">
                <img
                  src={
                    process.env.REACT_APP_ASSETS_URL +
                    "/" +
                    client.client_images
                  }
                  alt="Client"
                  className="w-10/12 p-2"
                />
              </div>
            </div>
          ))}
        </Slider>
        {clientsImg && (
          <>
            <div
              onClick={() => slider.current.slickPrev()}
              className="arrowLeft absolute top-36 font-semibold"
            ></div>
            <div
              onClick={() => slider.current.slickNext()}
              className="arrowRight absolute top-36 font-semibold"
            ></div>
          </>
        )}
      </div>
      <div className="relative">
        <div className="font_title text-3xl px-6 pb-5 text-center">
          <span className="font-bold text-brand-color">100+</span> clients
          served
        </div>
        <ul className="text-center text-sm px-6 leading-6">
          <li>Leading businesses from all over the world</li>
          <li>A diverse range of industries</li>
        </ul>

        <Lottie
          className="w-1/2 mx-auto"
          animationData={Achievement}
          loop={true}
        />
        <div className="w-full absolute bottom-0">
          <Lottie
            className="w-11/12 mx-auto "
            animationData={sucess}
            loop={true}
          />
        </div>

        <div className="font_title text-3xl px-6 pb-5 text-center">
          <span className="font-bold text-brand-color">150+</span> Projects
          completed
        </div>
        <ul className="text-sm text-center px-6 leading-6">
          <li>Practical and easily implementable solutions</li>
          <li>High standards of performance</li>
          <li>Excellent service quality</li>
        </ul>
      </div>
    </div>
  );
};

export default OurCustomer;
