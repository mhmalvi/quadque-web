import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Case from "../../../../asstes/Images/case-study.png";
import Case2 from "../../../../asstes/Images/case-study-2.png";

const CaseStudy = () => {
    const CaseSlider = useRef(null);

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 1,
      speed: 100,
    };
  return (
    <div className="CaseStudy w-full text-white mb-30">
        <div className="text-3xl font-thin px-6 pb-2">Case Study</div>
        <div className="text-sm px-6 pb-1">We create premium web design, though and user</div>
        <div className="font-thin px-6 pb-5">See more</div>
        <div className="w-[400px] m-auto text-white pb-4">
            <Slider ref={CaseSlider} arrows={false} {...settings}>
                <div>
                <img src={Case} alt="" />
                </div>
                <div>
                <img src={Case2} alt="" />
                </div>
                <div>
                <img src={Case} alt="" />
                </div>
                <div>
                <img src={Case2} alt="" />
                </div>
                <div>
                <img src={Case} alt="" />
                </div>
                <div>
                <img src={Case2} alt="" />
                </div>
                <div>
                <img src={Case} alt="" />
                </div>
                <div>
                <img src={Case2} alt="" />
                </div>
            </Slider>
        </div>
        <div className="flex justify-center gap-4">
            <div onClick={() => CaseSlider.current.slickPrev()}>Prev</div>
            <div onClick={() => CaseSlider.current.slickNext()}>Next</div>
        </div>
    </div>
  );
};

export default CaseStudy;
