import React, { useEffect, useState } from "react";
import Flip from "react-reveal/Flip";
import { useLocation } from "react-router-dom";

const About = () => {
  const arrayy = [1, 2, 3, 4, 5, 6];
  const location = useLocation();
  const [sideBanner, setSideBanner] = useState(
    "https://i.ibb.co/QK246nC/Image-Box.png"
  );
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);

  useEffect(() => {
    if (location.hash === "#about") {
      setTimeout(() => {
        setTriggerAnimation(!triggerAnimation);
        setTriggerTitleAnimation(!triggerTitleAnimation);
      }, 800);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  const handleChangeBanner = (section) => {
    setSideBanner(banners[section]);
  };

  return (
    <div id="about" className="section relative w-full h-full font-poppins">
      <div className="w-full min-h-full pr-[22px] text-white flex justify-center items-end">
        <img className="w-[40%] h-full mr-16" src={sideBanner} alt="" />

        <div className="w-[60%] ml-1">
          <div className="mb-8">
            <Flip left cascade spy={triggerTitleAnimation}>
              <div id="about_title">
                <h1 className="text-[32px] font-medium leading-[48px] font-poppins">
                  About us
                </h1>
              </div>
            </Flip>
          </div>
          <div className="about_details border-r-2 border-gray-700 pr-12 w-[90%] lg:max-h-[68vh] 2xl:max-h-[75vh] mb-14 overflow-y-scroll py-1">
            {arrayy.map((_, i) => (
              <div
                className="hover:text-brand-color hover:transition-colors hover:delay-200 cursor-pointer"
                onMouseOver={() => handleChangeBanner(i)}
              >
                <Flip left cascade spy={triggerTitleAnimation}>
                  <h2 className="text-2xl font-bold leading-[100%] pl-4">
                    This is the first feature
                  </h2>
                  <p className="mt-2.5 text-white pl-4">
                    Lorem ipsum dolor sit amet consectetur adipiscing tempor.
                    Risus ultricies tristique nulla enim tortor. Nibh tortor id
                    aliquet lectus proin nibh nisl condimentum Interdum varius.
                  </p>
                </Flip>
                <hr className="text-white my-12 py-0.5" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const banners = [
  "https://i.ibb.co/1L3g5pj/HD-wallpaper-dark-blue-wall-plain-color-colors-light-themes-solid-galaxy.jpg",
  "https://i.ibb.co/KbV9LrW/3.jpg",
  "https://i.ibb.co/gvfjbvH/HD-wallpaper-blueish-or-bluish-solid-blue-color-minimalism-colors.jpg",
  "https://i.ibb.co/pwNTPMS/photo-1557683304-673a23048d34.jpg",
  "https://i.ibb.co/vBfkmvw/Aurometalsaurus-Solid-Color-Background-Wallpaper-for-Mobile-Phone-600x1067.png",
];
