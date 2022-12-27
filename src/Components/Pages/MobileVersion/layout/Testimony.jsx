import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Client from "../../../../asstes/Images/client.png";
import Case2 from "../../../../asstes/Images/case-study-2.png";

const Testimony = () => {
  const CaseSlider = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    infinite: true,
  };
  return (
    <div className="w-full text-white mb-30">
      <div className="text-3xl font-thin px-6 pb-5">Our clients <br /> speak</div>
      <div className="w-[400px] m-auto text-white pb-4">
        <Slider ref={CaseSlider} arrows={false} {...settings}>
          <div>
            <div className="px-6">
              <div className="flex justify-between">
                <div className="font-semibold">Sourav Sen</div>
                <div className="text-slate-400">Texlab CEO</div>
              </div>
              <img src={Client} alt="" className="w-full py-4"/>
              <div className="font-thin text-sm text-justify leading-8">We create premium web design, though and user Business Analytics is not based on rote memorization of equations or facts, but focuses on honing your understanding of key concepts, your managerial judgment, and your ability to apply course concepts to real business problems. This course begins with basic descriptive statistics and progresses to regression analysis.</div>
            </div>
          </div>
          <div>
            <div className="px-6">
              <div className="flex justify-between">
                <div className="font-semibold">Sourav Sen</div>
                <div className="text-slate-400">Texlab CEO</div>
              </div>
              <img src={Client} alt="" className="w-full py-4"/>
              <div className="font-thin text-sm text-justify leading-8">We create premium web design, though and user Business Analytics is not based on rote memorization of equations or facts, but focuses on honing your understanding of key concepts, your managerial judgment, and your ability to apply course concepts to real business problems. This course begins with basic descriptive statistics and progresses to regression analysis.</div>
            </div>
          </div>
          <div>
            <div className="px-6">
              <div className="flex justify-between">
                <div className="font-semibold">Sourav Sen</div>
                <div className="text-slate-400">Texlab CEO</div>
              </div>
              <img src={Client} alt="" className="w-full py-4"/>
              <div className="font-thin text-sm text-justify leading-8">We create premium web design, though and user Business Analytics is not based on rote memorization of equations or facts, but focuses on honing your understanding of key concepts, your managerial judgment, and your ability to apply course concepts to real business problems. This course begins with basic descriptive statistics and progresses to regression analysis.</div>
            </div>
          </div>
          <div>
            <div className="px-6">
              <div className="flex justify-between">
                <div className="font-semibold">Sourav Sen</div>
                <div className="text-slate-400">Texlab CEO</div>
              </div>
              <img src={Client} alt="" className="w-full py-4"/>
              <div className="font-thin text-sm text-justify leading-8">We create premium web design, though and user Business Analytics is not based on rote memorization of equations or facts, but focuses on honing your understanding of key concepts, your managerial judgment, and your ability to apply course concepts to real business problems. This course begins with basic descriptive statistics and progresses to regression analysis.</div>
            </div>
          </div>
          <div>
            <div className="px-6">
              <div className="flex justify-between">
                <div className="font-semibold">Sourav Sen</div>
                <div className="text-slate-400">Texlab CEO</div>
              </div>
              <img src={Client} alt="" className="w-full py-4"/>
              <div className="font-thin text-sm text-justify leading-8">We create premium web design, though and user Business Analytics is not based on rote memorization of equations or facts, but focuses on honing your understanding of key concepts, your managerial judgment, and your ability to apply course concepts to real business problems. This course begins with basic descriptive statistics and progresses to regression analysis.</div>
            </div>
          </div>
          <div>
            <div className="px-6">
              <div className="flex justify-between">
                <div className="font-semibold">Sourav Sen</div>
                <div className="text-slate-400">Texlab CEO</div>
              </div>
              <img src={Client} alt="" className="w-full py-4"/>
              <div className="font-thin text-sm text-justify leading-8">We create premium web design, though and user Business Analytics is not based on rote memorization of equations or facts, but focuses on honing your understanding of key concepts, your managerial judgment, and your ability to apply course concepts to real business problems. This course begins with basic descriptive statistics and progresses to regression analysis.</div>
            </div>
          </div>
        </Slider>
      </div>
      <div className="flex justify-start gap-4 font-semibold px-6">
        <div onClick={() => CaseSlider.current.slickPrev()}>Prev</div>
        <div onClick={() => CaseSlider.current.slickNext()}>Next</div>
      </div>
    </div>
  );
};

export default Testimony;
