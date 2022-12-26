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

  return (
    <div className="w-full text-white mt-72">
      <div className="w-2/3 m-auto text-center text-2xl font-bold pb-4">
        UI/UX
      </div>
      <div className="w-2/3 m-auto text-center text-sm font-light pb-5">
        We create premium web design, thoughtful and user-friendly that solve
        business problems We create premium web design, thoughtful and
        user-friendly that solve business problems
      </div>
      <div className="w-3/4 m-auto flex justify-between pb-20">
        <div className="font-semibold text-[#8F00FF]">START PROJECT</div>
        <div className="">Next</div>
      </div>


<div style={{ width: "400px" }}>
      <div>
        <Slider asNavFor={nav2} ref={slider1}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>

        <h4>Pagination slider</h4>

        <Slider
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default Services;
