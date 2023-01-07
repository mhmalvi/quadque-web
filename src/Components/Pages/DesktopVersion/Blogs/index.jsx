import React, { useEffect, useState } from "react";
import blog1 from "../../../../asstes/Images/blog1.jpg";
import blog2 from "../../../../asstes/Images/blog2.jpg";
import blog3 from "../../../../asstes/Images/blog3.jpg";
import moreBlogs from "../../../../asstes/Images/moreblogs.jpg";
import Fade from "react-reveal/Fade";
import { useLocation } from "react-router-dom";

const Blogs = () => {
  const location = useLocation();
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);

  useEffect(() => {
    if (location.hash === "#blogs") {
      setTimeout(() => {
        setTriggerAnimation(!triggerAnimation);
        setTriggerTitleAnimation(!triggerTitleAnimation);
      }, 800);
    }
  }, [location.hash]);

  return (
    <div
      id='blogs'
      className='section w-full lg:pt-6 2xl:py-8 font-poppins bg-black'
    >
      <div className='flex justify-center items-center text-[#EDEDED] my-auto'>
        <Fade left spy={triggerTitleAnimation}>
          <div className='relative w-[72%] 2xl:w-[70%] max-h-[95vh] mr-1'>
            <img
              className='min-w-full max-h-[95vh] my-auto'
              src={blog1}
              alt=''
            />
            <div
              className='absolute h-full w-full top-0 flex items-end'
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0) -81.76%, rgba(0, 0, 0, 0.5) 18.24%)",
              }}
            >
              &nbsp;
            </div>

            <div className='absolute bottom-20 2xl:bottom-16 ml-18 mr-25'>
              <h1 className='text-[32px] font-semibold leading-12'>
                This title doesn’t make any sense but still, i’ve to write
                something.
              </h1>
              <div className='flex items-center mt-2.5'>
                <img
                  className='w-16 h-16 2xl:w-23 2xl:h-22 rounded-full'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmelM84pSWNL1yisAVEAfud_SJB7r4bnFm1w&usqp=CAU'
                  alt=''
                />
                <div className='ml-8'>
                  <div className='text-[22px] font-normal leading-8'>
                    By <span>Manish Yadav</span>{" "}
                    <span className='text-brand-color font-bold'>in</span>{" "}
                    Random Category
                  </div>
                  <div className='text-base font-normal leading-6 mt-1.5'>
                    Sunday 19, Sept 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>

        <Fade right spy={triggerTitleAnimation}>
          <div className='w-[30%] max-h-[95vh]'>
            <div className='h-1/2 w-full flex flex-col justify-end'>
              <div className='relative'>
                <img className='w-full' src={blog2} alt='' />
                <div
                  className='absolute h-full w-full top-0 flex items-end'
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0) -81.76%, rgba(0, 0, 0, 0.5) 18.24%)",
                  }}
                >
                  <h1 className=' text-base font-semibold leading-6 mb-5 ml-6 mr-18'>
                    This title doesn’t make any sense but still, i’ve to write
                    something.
                  </h1>
                </div>
              </div>
              <div className='relative'>
                <img className=' w-full' src={blog3} alt='' />
                <div
                  className='absolute h-full w-full top-0 flex items-end'
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0) -51.55%, rgba(0, 0, 0, 0.5) 48.45%)",
                  }}
                >
                  <h1 className=' text-base font-semibold leading-6 mb-5 ml-6 mr-18'>
                    This title doesn’t make any sense but still, i’ve to write
                    something.
                  </h1>
                </div>
              </div>
            </div>
            <div className='relative'>
              <img
                className='lg:max-h-[90%] 2xl:h-full w-full'
                src={moreBlogs}
                alt=''
              />
              <div
                className='absolute h-full w-full top-0 flex justify-center items-center'
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%)",
                }}
              >
                <div className='flex flex-col justify-center items-center'>
                  <h1 className=' text-base font-semibold leading-6 mx-12 text-center'>
                    This title doesn’t make any sense but still, i’ve to write
                    something.
                  </h1>
                  <button
                    className='py-3.5 px-6 bg-brand-color mt-5 text-base leading-4.5 font-semibold'
                    style={{
                      letterSpacing: "0.04em",
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Blogs;
