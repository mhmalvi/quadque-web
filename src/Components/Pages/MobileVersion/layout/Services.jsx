import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Services = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const PrimarySettings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
    infinite: true,
  };

  const SecondarySettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToScroll: 1,
    arrow: false,
    className: "center",
    centerMode: true,
    infinite: true,
  };

  return (
    <div className="Service w-full text-white mt-72">
      <div style={{ width: "390px", margin: "auto" }} {...PrimarySettings}>
        <div>
          <Slider asNavFor={nav2} ref={slider1} arrows={false}>
            {/* 1 */}
            <div>
              <div className="w-2/3 m-auto text-center text-2xl font-bold pb-4 services-shadow">
                UI/UX
              </div>
              <div className="w-2/3 m-auto text-center text-sm font-light pb-5 leading-6">
                We create premium web design, thoughtful and user-friendly that
                solve business problems. We create premium web design,
                thoughtful and user-friendly that solve business problems
              </div>
            </div>
            {/* 2 */}
            <div>
              <div className="w-2/3 m-auto text-center text-2xl font-bold pb-4 services-shadow">
                DIGITAL MARKETING
              </div>
              <div className="w-2/3 m-auto text-center text-sm font-light pb-5 leading-6">
                We create premium web design, thoughtful and user-friendly that
                solve business problems. We create premium web design,
                thoughtful and user-friendly that solve business problems
              </div>
            </div>
            {/* 3 */}
            <div>
              <div className="w-2/3 m-auto text-center text-2xl font-bold pb-4 services-shadow">
                MOBILE APP DEVELOPMENT
              </div>
              <div className="w-2/3 m-auto text-center text-sm font-light pb-5 leading-6">
                We create premium web design, thoughtful and user-friendly that
                solve business problems. We create premium web design,
                thoughtful and user-friendly that solve business problems
              </div>
            </div>
            {/* 4 */}
            <div>
              <div className="w-2/3 m-auto text-center text-2xl font-bold pb-4 services-shadow">
                WEB DEVELOPMENT
              </div>
              <div className="w-2/3 m-auto text-center text-sm font-light pb-5 leading-6">
                We create premium web design, thoughtful and user-friendly that
                solve business problems. We create premium web design,
                thoughtful and user-friendly that solve business problems
              </div>
            </div>
            {/* 5 */}
            <div>
              <div className="w-2/3 m-auto text-center text-2xl font-bold pb-4 services-shadow">
                SOFTWARE DEVELOPMENT
              </div>
              <div className="w-2/3 m-auto text-center text-sm font-light pb-5 leading-6">
                We create premium web design, thoughtful and user-friendly that
                solve business problems. We create premium web design,
                thoughtful and user-friendly that solve business problems
              </div>
            </div>
            {/* 6 */}
            <div>
              <div className="w-2/3 m-auto text-center text-2xl font-bold pb-4 services-shadow">
                AI & IOT SOLUTIONS
              </div>
              <div className="w-2/3 m-auto text-center text-sm font-light pb-5 leading-6">
                We create premium web design, thoughtful and user-friendly that
                solve business problems. We create premium web design,
                thoughtful and user-friendly that solve business problems
              </div>
            </div>
          </Slider>

          <div className="w-3/4 m-auto flex justify-between pb-5">
            <div className="font-semibold text-brand-color">
              START PROJECT
            </div>
            <div onClick={() => slider1.current.slickNext()} className="font-semibold">Next</div>
          </div>

          <Slider
            asNavFor={nav1}
            ref={slider2}
            slidesToShow={1}
            swipeToSlide={true}
            focusOnSelect={true}
            arrows={false}
            {...SecondarySettings}
            className="text-base text-white text-opacity-25 text-center"
          >
            <div>
              <span>UI/UX</span>
            </div>
            <div>
              <span>DIGITAL MARKETING</span>
            </div>
            <div>
              <span>MOBILE APP DEVELOPMENT</span>
            </div>
            <div>
              <span>WEB DEVELOPMENT</span>
            </div>
            <div>
              <span>SOFTWARE DEVELOPMENT</span>
            </div>
            <div>
              <span>AI & IOT SOLUTIONS</span>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Services;
