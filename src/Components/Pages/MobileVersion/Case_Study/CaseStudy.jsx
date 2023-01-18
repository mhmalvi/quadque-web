import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useCaseStudy from "../../../Shared/Hooks/useCaseStudy";
import "../../MobileVersion/MobileView.css";
import Lottie from "lottie-react";
import loaderFile from "../../../../asstes/Lotties/loader.json";

const CaseStudy = () => {
  const [CaseStudies] = useCaseStudy();
  const [loader, setLoader] = useState(true);
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
  
  useEffect(() => {
    if (CaseStudies !== "") {
      setTimeout(() => {
        setLoader(false);
      }, 5000);
    }
  }, []);

  return (
    <div id="Case_Study" className="CaseStudy w-full text-white mb-30">
      <div className="font_title text-3xl font-thin px-6 pb-2">Case Study</div>
      <div className="text-sm text-justify px-6 pb-1">
        Let’s have a look at some of our interesting case study examples. These
        case studies will let you better understand how we tackle critical
        challenges to help companies grow.
      </div>
      <div className="max-w-[100%] m-auto text-white">
        {loader ? (
          <div className="w-full h-[70%] z-40 flex flex-col justify-center items-center absolute bg-black">
            <Lottie
              className="w-1/2 mx-auto"
              animationData={loaderFile}
              loop={true}
            />

            <div className="text-white font_title flex animate-pulse">Loading...</div>
          </div>
        ) : null}
        <Slider ref={CaseSlider} arrows={false} {...settings}>
          {CaseStudies?.map((details, index) => (
            <Link to={`/case-study/${details?.slug}`}>
              <div key={index}>
                <img
                  src={process.env.REACT_APP_ASSETS_URL + "/" + details?.com_image}
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
