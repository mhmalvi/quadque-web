import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import blog2 from "../../../../asstes/Images/blog2.jpg";
// import blog3 from "../../../../asstes/Images/blog3.jpg";
import blogThumbnail from "../../../../asstes/Images/blogs.jpg";
import { handleFetchBlogs } from "../../../Shared/services";
// import useBlogs from "../../../Shared/Hooks/useBlog";
// import loaderFile from "../../../../asstes/Lotties/loader.json";
// import Lottie from "lottie-react";
// import Slider from "react-slick";

const Blogs = () => {
  // const [blogs] = useBlogs();
  const navigate = useNavigate();
  const location = useLocation();
  const [triggerTitleAnimation, setTriggerTitleAnimation] = useState(false);
  const [
    triggerSlideBlogDetailsAnimation,
    setTriggerSlideBlogDetailsAnimation,
  ] = useState(false);
  const [activeblogDetails, setActiveblogDetails] = useState({});
  // const [loader, setLoader] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const synth = window.speechSynthesis;

  useEffect(() => {
    if (location.hash === "#blogs") {
      synth.cancel();
      setTimeout(() => {
        setTriggerTitleAnimation(true);
      }, 800);

      (async () => {
        const response = await handleFetchBlogs();
        if (response) {
          setBlogs(response?.slice(0, 4));
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash]);

  const handleBlogNavigate = (blogSlug) => {
    synth.cancel();
    navigate(`blog/${blogSlug}`);
  };

  console.log(activeblogDetails);

  return (
    <div
      id="blogs"
      className="section w-full  font_primary bg-black overflow-hidden"
    >
      <div className="flex items-center text-[#EDEDED] overflow-hidden">
        <Fade left spy={triggerTitleAnimation}>
          <div className="relative w-[40%] h-[95vh] flex justify-center items-center overflow-hidden">
            {Object?.keys(activeblogDetails).length === 0 ? (
              <Fade left spy={!triggerSlideBlogDetailsAnimation}>
                <div className="lg:w-8/12 xl:w-10/12 2xl:w-10/12 m-auto flex flex-col justify-center items-center">
                  <img
                    src={blogThumbnail}
                    alt="Blog Thumbnail"
                    className="w-10/12 mx-auto"
                  />
                  <Link to={"/blogs"}>
                    <button
                      className="spirit-bomb px-16 py-3.5 bg-black mt-12 text-base font-semibold leading-4 font_title"
                      style={{
                        letterSpacing: "0.04em",
                        borderRadius: "30px",
                      }}
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              </Fade>
            ) : (
              <Fade spy={triggerSlideBlogDetailsAnimation}>
                <div
                  className={`spirit-bomb w-8/12 mx-auto transition ease-in-out delay-300 h-[70vh] my-auto rounded-[20px] cursor-pointer relative bg-gradient-to-tr from-gray-600 ... bg-opacity-40 backdrop-filter backdrop-blur-xl border border-gray-500 p-4`}
                >
                  <img
                    src={
                      process.env.REACT_APP_ASSETS_URL +
                      "/" +
                      activeblogDetails?.thumbnail
                    }
                    alt="Blog Thumbnail"
                    className="m-auto w-full 2xl:h-72 rounded-md transition ease-in-out delay-300"
                  />
                  <div className="w-full flex items-end px-2 2xl:px-10 pt-10 pb-6 rounded-md z-10 transition ease-in-out delay-300">
                    <div>
                      <div className="text-sm 2xl:text-2xl font-semibold text-white mb-2 2xl:mb-6">
                        {activeblogDetails.title}
                      </div>
                      <div className="text-white text-xs 2xl:text-sm">
                        By{" "}
                        <span className="font-bold italic mb-1">
                          {activeblogDetails?.author}
                        </span>
                      </div>
                      <div className="text-white text-xs 2xl:text-sm italic">
                        {new Date(activeblogDetails?.created_at)
                          .toString()
                          .slice(0, 15)}
                      </div>
                      <div
                        className="text-white text-xs 2xl:text-sm mt-3 h-24 overflow-hidden"
                        dangerouslySetInnerHTML={{
                          __html: activeblogDetails?.short_description,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Fade>
            )}
          </div>
        </Fade>

        <div className="relative w-[60%] min-h-full my-auto mx-4 flex justify-center items-center">
          <div className="block 2xl:hidden ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              {blogs.slice(0, 4).map((blog, i) => (
                <div
                  onMouseOver={() => {
                    setActiveblogDetails(blog);
                    setTriggerSlideBlogDetailsAnimation(
                      !triggerSlideBlogDetailsAnimation
                    );
                  }}
                  onMouseLeave={() => {
                    setActiveblogDetails({});
                    setTriggerSlideBlogDetailsAnimation(false);
                  }}
                  key={i}
                  className="w-full h-full m-auto rounded-md cursor-pointer relative bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border border-gray-500 p-4"
                  onClick={() => handleBlogNavigate(blog?.slug)}
                >
                  <img
                    src={
                      process.env.REACT_APP_ASSETS_URL + "/" + blog?.thumbnail
                    }
                    alt="Blog1"
                    className="m-auto w-full 2xl:h-56 rounded-md"
                  />
                  <div className="w-full min-h-full flex items-end h-10 absolute left-0 px-10 pb-10 bottom-0 rounded-md bg-gradient-to-b from-black/30 to-black z-10">
                    <div>
                      <div className="text-sm 2xl:text-base text-white mb-2 h-6 overflow-hidden">
                        {blog.title}...
                      </div>
                      <div className="text-white text-xs 2xl:text-sm">
                        By {blog?.author}
                      </div>
                      <div className="text-white text-xs 2xl:text-sm">
                        {new Date(blog?.created_at).toString().slice(0, 15)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden 2xl:block ">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              {blogs?.map((blog, i) => (
                <div
                  key={i}
                  className="w-full h-full m-auto rounded-md cursor-pointer relative bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border border-gray-500 p-4"
                  onClick={() => handleBlogNavigate(blog?.slug)}
                >
                  <img
                    src={
                      process.env.REACT_APP_ASSETS_URL + "/" + blog?.thumbnail
                    }
                    alt="Blog2"
                    className="m-auto w-full 2xl:h-56 rounded-md"
                  />
                  <div className="w-full min-h-full flex items-end h-10 absolute left-0 px-10 pb-10 bottom-0 rounded-md bg-gradient-to-b from-black/30 to-black z-10">
                    <div>
                      <div className="text-sm 2xl:text-base text-white mb-2 h-6 overflow-hidden">
                        {blog.title}...
                      </div>
                      <div className="text-white text-xs 2xl:text-sm">
                        By {blog?.author}
                      </div>
                      <div className="text-white text-xs 2xl:text-sm">
                        {new Date(blog?.created_at).toString().slice(0, 15)}
                      </div>
                    </div>
                  </div>
                  <div
                    className="min-h-full min-w-full absolute top-0 left-0 right-0 bottom-0 bg-transparent z-50"
                    onMouseOver={() => {
                      setActiveblogDetails(blog);
                      setTriggerSlideBlogDetailsAnimation(
                        !triggerSlideBlogDetailsAnimation
                      );
                    }}
                    onMouseOut={() => {
                      setActiveblogDetails({});
                      setTriggerSlideBlogDetailsAnimation(false);
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
