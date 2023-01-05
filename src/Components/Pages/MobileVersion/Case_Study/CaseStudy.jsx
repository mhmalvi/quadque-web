import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { handleFetchCaseStudies } from "../../../Shared/services";
import "../../MobileVersion/MobileView.css"

const CaseStudy = () => {
  const [caseStudyData, setCaseStudyData] = useState();
  const CaseSlider = useRef(null);

  useEffect(() => {
    (async () => {
      const fetchCaseStudy = await handleFetchCaseStudies();
      setCaseStudyData(fetchCaseStudy);
      console.log("Case study data", caseStudyData);
    })();
  }, []);

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
      <div className="text-sm px-6 pb-1">
        We create premium web design, though and user
      </div>
      <div className="font-thin px-6 pb-5">See more</div>
      <div className="w-[400px] m-auto text-white">
        <Slider ref={CaseSlider} arrows={false} {...settings}>
          {caseStudyData?.map((details, index) =>
          <div key={index}>
            <img src={details.com_image} alt="" className="w-full"/>
            <div className="caseText w-full bg-white bg-opacity-20 backdrop:filter backdrop-blur-sm rounded-bl-lg rounded-br-lg text-center text-white py-2">
              {details.com_name}
            </div>
          </div>
          )}
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
