import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useCaseStudy from "../../../Shared/Hooks/useCaseStudy";
import "../../MobileVersion/MobileView.css";
import Lottie from "lottie-react";
import loaderFile from "../../../../assets/Lotties/loader.json";

const CaseStudy = () => {
  const [CaseStudies] = useCaseStudy();
  const [loader, setLoader] = useState(true);
  console.log("case studies", CaseStudies);
  const CaseSlider = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: false,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 1,
    speed: 300,
  };

  useEffect(() => {
    if (CaseStudies.length > 0) {
      setTimeout(() => {
        setLoader(false);
      }, 100);
    } else {
      setTimeout(() => {
        setLoader(false);
      }, 5000);
    }
  }, [CaseStudies]);

  return (
    <div
      id="Case_Study"
      className="CaseStudy w-full text-white pt-20 font_primary"
    >
      <h1 className="font_title text-3xl font-thin px-6 pb-5">
        CASE <br /> &nbsp;STUDIES
      </h1>
      <div className="text-sm text-justify px-6 pb-1">
        Let’s have a look at some of our interesting case study examples. These
        case studies will let you better understand how we tackle critical
        challenges to help companies grow.
      </div>
      <div className="max-w-[100%] m-auto text-white relative overflow-hidden">
        {loader ? (
          <div className="w-full h-full z-40 flex flex-col justify-center items-center absolute bg-black bg-opacity-10 backdrop-blur-sm">
            <Lottie
              className="w-1/2 mx-auto"
              animationData={loaderFile}
              loop={true}
            />

            <div className="text-white font_title flex animate-pulse">
              Loading...
            </div>
          </div>
        ) : null}
        <Slider ref={CaseSlider} arrows={false} {...settings}>
          {CaseStudies?.map((details, index) => (
            <Link to={`/case-study/${details?.slug}`}>
              <div key={index}>
                <img
                  src={
                    process.env.REACT_APP_ASSETS_URL + "/" + details?.com_image
                  }
                  alt="Company"
                  className="w-full h-auto rounded-2xl bg-black"
                />
                <div className="caseText w-full h-12 bg-white bg-opacity-20 backdrop:filter backdrop-blur-sm rounded-bl-lg rounded-br-lg text-xs text-center text-white py-2 px-1 overflow-hidden">
                  {details?.com_name}
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <div className="relative w-9/12 mx-auto">
        {CaseStudies.length > 0 && (
          <>
            <div
              onClick={() => CaseSlider.current.slickPrev()}
              className="arrowLeft absolute bottom-2 font-semibold"
            >
              {/* <Icons.RightArrow className="w-12 scale-x-[-1]" /> */}
            </div>
            <div
              onClick={() => CaseSlider.current.slickNext()}
              className="arrowRight absolute bottom-2 font-semibold"
            >
              {/* <Icons.RightArrow className="w-12" /> */}
            </div>
          </>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default CaseStudy;
