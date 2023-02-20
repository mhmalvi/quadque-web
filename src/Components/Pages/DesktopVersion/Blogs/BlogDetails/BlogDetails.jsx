import { Tooltip } from "antd";
import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";
import speakLogo from "../../../../../asstes/Lotties/speak.json";
import favicon from "../../../../../asstes/Images/logo.png";
import useBlogs from "../../../../Shared/Hooks/useBlog";
import Icons from "../../../../Shared/Icons";
import { handleFetchBlogBySlug } from "../../../../Shared/services";

const BlogDetails = ({ setLoader }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { slug } = useParams();
  const { speak } = useSpeechSynthesis();
  const blogdetailsRef = useRef();
  const [blogDetails, setBlogDetails] = useState();
  const [blogs] = useBlogs();
  // const { id } = useParams();
  const [randomBlogData, setRandomBlogData] = useState([]);
  const synth = window.speechSynthesis;

  useEffect(() => {
    (async () => {
      const blogDetails = await handleFetchBlogBySlug(slug);
      // console.log("blogDetails", blogDetails);
      if (blogDetails?.status === 424) {
        setLoader(false);
        navigate("404");
      }
      if (blogDetails?.status === 200) {
        setBlogDetails(blogDetails?.data);
        setLoader(false);
      }
    })();
  }, [location, setLoader, slug, synth]);

  useEffect(() => {
    const NextBlogs = [];
    // let currentBlogid = slug;
    let i;

    let currentBlogIndex = blogs?.findIndex((x) => x.slug === slug);
    let nextBlogIndex = currentBlogIndex;
    //console.log("index", currentBlogIndex);
    for (i = 0; i < 4; i++) {
      if (nextBlogIndex < blogs.length - 1) {
        nextBlogIndex++;
        //console.log("index", nextBlogIndex);
        NextBlogs.push(blogs[nextBlogIndex]);
        //console.log("Array", NextBlogs);
      } else {
        nextBlogIndex = 0;
        NextBlogs.push(blogs[nextBlogIndex]);
      }
      setRandomBlogData(NextBlogs);
    }
  }, [slug, blogs]);

  const handleBlogNavigation = (blogSlug) => {
    navigate(`../blog/${blogSlug}`, { replace: true });

    setTimeout(() => {
      blogdetailsRef.current.scrollTo(0, 0);
    }, 1000);
  };

  console.log("blogDetails", blogDetails);

  return (
    <>
      {/* For SEO purpose */}
      {/* Meta Keywords */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${blogDetails?.title} – Quadque Tech`}</title>
        <meta name="keywords" content={blogDetails?.meta_keyword} />
        <meta name="description" content={blogDetails?.meta_description} />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>

      <div
        className="blog_details min-h-full bg-[#F5F5F5] text-black py-20 px-36 h-[90vh] overflow-y-auto font_primary"
        ref={blogdetailsRef}
      >
        <div className="mb-10">
          <Icons.GoBackArrow
            className="w-6 font-semibold cursor-pointer text-black"
            onClick={() => {
              navigate(`../#blogs`, { replace: true });
            }}
          />
        </div>

        <div>
          <h4 className="text-lg font-normal leading-4 mb-3 text-black">
            {new Date(blogDetails?.created_at).toString().slice(0, 15)}
          </h4>
        </div>

        <div className="relative">
          <div
            className="blog_details_section text-black"
            dangerouslySetInnerHTML={{ __html: blogDetails?.text }}
          ></div>

          <Tooltip
            placement="top"
            title={`Click to "Listen". Double Click to "Stop"`}
            color={"rgba(90, 90, 90, 0.7)"}
          >
            <button
              className="absolute -top-12 right-10"
              onClick={() =>
                speak({
                  text: blogDetails?.text,
                })
              }
              onDoubleClick={() => synth.cancel()}
            >
              <Lottie className="w-14" animationData={speakLogo} loop={true} />
            </button>
          </Tooltip>
        </div>

        <div>
          <hr />
          <div className="py-11 mb-8">
            <h1 className="text-[32px]">Other interesting posts</h1>
          </div>

          {randomBlogData?.map((blog, i) => (
            <div key={i} onClick={() => handleBlogNavigation(blog?.slug)}>
              <div className="flex justify-between items-center my-4 cursor-pointer">
                <div className="lg:max-w-md xl:max-w-xl 2xl:max-w-4xl">
                  <div className="text-sm font-normal leading-4">
                    <span className="uppercase">Weekly updates</span>{" "}
                    <span className="font-medium ml-2">
                      {new Date(blog?.created_at).toString().slice(0, 15)}
                    </span>
                  </div>
                  <div className="mt-8 h-19 overflow-hidden">
                    <h1 className="text-[28px] font-normal leading-9">
                      {blog?.title}
                    </h1>
                  </div>
                  <div className="mt-2.5">
                    <p className="text-lg font-normal leading-7 text-white text-opacity-50">
                      {blog?.short_description?.slice(0, 100)}...
                    </p>
                  </div>
                </div>
                <div className="lg:w-[276px] 2xl:w-96 lg:h-[200px] 2xl:h-56">
                  {/* <img className="w-full h-full" src={blog?.thumbnail} alt="" /> */}
                  <img
                    className="w-full h-full"
                    src={
                      process.env.REACT_APP_ASSETS_URL + "/" + blog?.thumbnail
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-500 bg-opacity-10" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
