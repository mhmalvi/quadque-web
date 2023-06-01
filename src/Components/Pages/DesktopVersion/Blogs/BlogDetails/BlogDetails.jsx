import { Tooltip } from "antd";
import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSpeechSynthesis } from "react-speech-kit";
import favicon from "../../../../../assets/Images/logo.png";
import speakLogo from "../../../../../assets/Lotties/speak.json";
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
  const [randomBlogData, setRandomBlogData] = useState([]);
  const synth = window.speechSynthesis;

  useEffect(() => {
    window.location.href = `https://app.quadque.tech/blogs/${slug}`;
  }, [slug]);

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
  }, [location, navigate, setLoader, slug, synth]);

  useEffect(() => {
    const NextBlogs = [];
    let i;

    let currentBlogIndex = blogs?.findIndex((x) => x.slug === slug);
    let nextBlogIndex = currentBlogIndex;
    for (i = 0; i < 4; i++) {
      if (nextBlogIndex < blogs.length - 1) {
        nextBlogIndex++;
        NextBlogs.push(blogs[nextBlogIndex]);
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

  const isFacebookBot = navigator.userAgent.includes("facebook");
  const isFacebookBot1 = navigator.userAgent.includes(
    "facebookexternalhit/1.1. facebookcatalog/1.0."
  );
  const isTweeterBot = navigator.userAgent.includes("Twitterbot");
  console.log("navigator.userAgent", navigator.userAgent);
  console.log("isFacebookBot", isFacebookBot);
  console.log("isTweeterBot", isTweeterBot);

  if (isFacebookBot || isFacebookBot1 || isTweeterBot) {
    window.location.href = `https://latest-server.quadque.tech/blog/${slug}`;
  }

  return (
    <>
      {/* For SEO purpose */}
      {/* Meta Keywords */}

      <Helmet prioritizeSeoTags>
        <meta charSet="utf-8" />
        <title>{`${blogDetails?.title}`}</title>
        <meta name="title" content={blogDetails?.title} />
        <meta name="keywords" content={blogDetails?.meta_keyword} />
        <meta name="description" content={blogDetails?.meta_description} />
        <meta property="og:title" content={blogDetails?.title} />
        <meta
          name="og:description"
          property="og:description"
          content={blogDetails?.meta_description}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={
            process.env.REACT_APP_ASSETS_URL + "/" + blogDetails?.thumbnail
          }
        />
        <meta
          property="og:image:url"
          content={
            process.env.REACT_APP_ASSETS_URL + "/" + blogDetails?.thumbnail
          }
        />
        <meta
          property="og:url"
          content={window.location.host + window.location.pathname}
        />
        <meta property="og:site_name" content="Quadque Technologies Ltd." />

        <meta
          name="twitter:card"
          property="twitter:card"
          content={"summary_large_image"}
        />
        <meta
          property="twitter:image:src"
          content={
            process.env.REACT_APP_ASSETS_URL + "/" + blogDetails?.thumbnail
          }
        />

        <meta property="twitter:title" content={blogDetails?.title} />
        <meta
          name="twitter:image:alt"
          property="twitter:image:alt"
          content="Blog Thumbnail"
        />
        <meta
          property="twitter:url"
          content={window.location.host + window.location.pathname}
        />
        <meta name="twitter:site" property="twitter:site" content="@QuadqueT" />
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>

      <div
        className="blog_details min-h-full bg-black text-white py-20 px-36 h-[90vh] overflow-y-auto font_primary"
        ref={blogdetailsRef}
      >
        <div className="mb-10">
          <Icons.GoBackArrow
            className="w-6 font-semibold cursor-pointer text-white"
            onClick={() => {
              navigate(`../#blogs`, { replace: true });
            }}
          />
        </div>

        <div>
          <h4 className="text-lg font-normal leading-4 mb-3 text-white">
            {new Date(blogDetails?.created_at).toString().slice(0, 15)}
          </h4>
        </div>

        {/* <div>
          <FacebookShareButton
            url={`https://www.quadque.tech/blog/${blogDetails?.slug}`}
            quote={blogDetails?.title}
            openGraph={{
              url: `https://www.quadque.tech/blog/${blogDetails?.slug}`,
              title: blogDetails?.title,
              description: blogDetails?.meta_description,
              images: [
                {
                  url:
                    process.env.REACT_APP_ASSETS_URL +
                    "/" +
                    blogDetails?.thumbnail,
                  width: 1200,
                  height: 630,
                  alt: "Blog",
                },
              ],
            }}
          >
            <FaFacebook size={32} round />
          </FacebookShareButton>
        </div> */}

        <div className="relative">
          <div
            className="blog_details_section"
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
            <div className="text-[32px]">Other interesting posts</div>
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
                    <div className="text-[28px] font-normal leading-9">
                      {blog?.title}
                    </div>
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
                    alt="Thumbnail"
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
