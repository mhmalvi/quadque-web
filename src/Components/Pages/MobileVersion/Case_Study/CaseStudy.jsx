import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useCaseStudy from "../../../Shared/Hooks/useCaseStudy";
import "../../MobileVersion/MobileView.css";

const CaseStudy = () => {
  const [CaseStudies] = useCaseStudy();
  console.log("case studies", CaseStudies);
  const CaseSlider = useRef(null);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 300,
  };

  return (
    <div id="Case_Study" className="CaseStudy w-full text-white mb-30">
      <div className="text-3xl font-thin px-6 pb-2">Case Study</div>
      <div className="text-sm text-justify px-6 pb-1">
        Let’s have a look at some of our interesting case study examples. These
        case studies will let you better understand how we tackle critical
        challenges to help companies grow.
      </div>
      <div className="max-w-[380px] m-auto text-white">
        <Slider ref={CaseSlider} arrows={false} {...settings}>
          {CaseStudies?.map((details, index) => (
            <Link to={`/case-study/${details?.slug}`}>
              <div key={index}>
                <img
                  src={details?.com_image}
                  alt=""
                  className="w-full rounded-2xl bg-black"
                />
                <div className="caseText w-full h-10 bg-white bg-opacity-20 backdrop:filter backdrop-blur-sm rounded-bl-lg rounded-br-lg text-center text-white py-2 overflow-hidden">
                  {details?.com_name}
                </div>
              </div>
            </Link>
          ))}
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
