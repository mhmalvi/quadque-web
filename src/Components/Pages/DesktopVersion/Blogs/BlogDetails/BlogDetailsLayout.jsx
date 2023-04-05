import { Modal, Tooltip } from "antd";
import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import {
  redirect,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
// import { useSpeechSynthesis } from "react-speech-kit";
import siteAudio from "../../../../../asstes/Audio/site_audio.mp3";
import favicon from "../../../../../asstes/Images/logo.png";
import muteImg from "../../../../../asstes/Images/mute.png";
import unmuteImg from "../../../../../asstes/Images/unmute.png";
import loaderFile from "../../../../../asstes/Lotties/loader.json";
// import useBlogs from "../../../../Shared/Hooks/useBlog";
import Icons from "../../../../Shared/Icons";
// import { handleFetchBlogBySlug } from "../../../../Shared/services";
import Navbar from "../../Navbar";
import BlogDetails from "./BlogDetails";

const BlogDetailsLayout = () => {
  const [mouseHover, setMouseHover] = useState(false);
  const [openMenus, setOpenMenus] = useState(false);
  const [muted, setMuted] = useState(true);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { slug } = useParams();
  // const [blogDetails, setBlogDetails] = useState();

  const synth = window.speechSynthesis;

  console.log("slug", slug);

  useEffect(() => {
    /* (async () => {
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
    })(); */

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

    if (muted) {
      document.getElementById("iframeAudio").src = "";
    } else {
      document.getElementById("iframeAudio").src = siteAudio;
    }
  }, [muted, location, navigate, setLoader, slug, synth]);

  return (
    <>
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>{`${blogDetails?.title} – Quadque Tech`}</title>
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
      </Helmet> */}

      <div className="blog_details w-full h-full">
        {/* For website background Audio */}
        <iframe
          id="iframeAudio"
          title="audio"
          src={siteAudio}
          allow="autoplay loop"
          style={{ display: "none" }}
        />

        <Modal
          style={{
            backgroundColor: "black !important",
            borderRadius: "0",
            scrollbarWidth: "none",
          }}
          open={openMenus}
          onCancel={() => setOpenMenus(false)}
          footer={false}
          width={"100%"}
        >
          <div
            className="absolute top-0 left-0 right-0 h-full w-full"
            onClick={() => setOpenMenus(false)}
          ></div>
          <Navbar setOpenMenus={setOpenMenus} />
        </Modal>

        {/* Outer Layer */}

        {/* Top bar */}
        <div className="absolute top-0 z-50 w-full h-10 bg-white"></div>
        {/* <div className="w-full h-10 bg-white"></div> */}

        <div className="relative flex justify-center bg-white">
          {/* Left bar */}
          <div className="w-[100px] min-h-full py-10 z-50 absolute left-0 flex flex-col justify-between left_bar bg-white">
            <a href="/">
              <Icons.BrandLogo className="mx-auto" />
            </a>

            <div
              className="-rotate-90 relative cursor-pointer flex justify-center items-center hover:text-brand-color transition-colors delay-150"
              onMouseOver={() => {
                setMouseHover(true);
              }}
              onMouseOut={() => {
                setMouseHover(false);
              }}
              onClick={() => setOpenMenus(true)}
            >
              <span className="uppercase mr-auto font-semibold text-xl leading-[175%] font_primary pr-4">
                menu
              </span>
              <span>
                <div
                  className={`${
                    mouseHover ? "w-[18px] bg-brand-color" : "w-[28px] bg-black"
                  } float-left transition-all delay-150 ease-in-out h-[3px] mb-2`}
                ></div>
                <div
                  className={`${
                    mouseHover ? "w-[28px] bg-brand-color" : "w-[18px] bg-black"
                  }  float-left transition-all delay-200 ease-in-out h-[3px]`}
                ></div>
              </span>
            </div>

            <div className="mb-16 -rotate-90 flex justify-center items-center">
              <Tooltip
                placement="right"
                title="Facebook"
                color={"rgba(90, 90, 90, 0.7)"}
              >
                <a
                  href="https://www.facebook.com/quadquetech"
                  rel="noreferrer"
                  target="_blank"
                  className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-brand-color transition-colors delay-150 "
                >
                  fb
                </a>
              </Tooltip>

              <Tooltip
                placement="right"
                title="Instagram"
                color={"rgba(90, 90, 90, 0.7)"}
              >
                <a
                  href="https://www.instagram.com/quadquetech/"
                  rel="noreferrer"
                  target="_blank"
                  className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-brand-color transition-colors delay-150 "
                >
                  in
                </a>
              </Tooltip>

              <Tooltip
                placement="right"
                title="Youtube"
                color={"rgba(90, 90, 90, 0.7)"}
              >
                <a
                  href="https://www.youtube.com/channel/UCXbnZTYKk6q82Hbux3ffILA"
                  rel="noreferrer"
                  target="_blank"
                  className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-brand-color transition-colors delay-150 "
                >
                  yt
                </a>
              </Tooltip>

              <Tooltip
                placement="right"
                title="Linkedin"
                color={"rgba(90, 90, 90, 0.7)"}
              >
                <a
                  href="https://bd.linkedin.com/company/quadque-technologies-ltd"
                  target="_blank"
                  className="uppercase font-semibold text-xl leading-[175%] font_primary mr-4 hover:text-brand-color transition-colors delay-150 "
                  rel="noreferrer"
                >
                  ln
                </a>
              </Tooltip>
            </div>
          </div>

          {/* Middle Main container */}
          <div
            id="main_container"
            className="blog_details bg-green-100 main_container w-full h-screen my-auto shadow-md"
          >
            <BlogDetails setLoader={setLoader} />
          </div>

          {/* Right bar */}

          <div className="relative">
            <div className="absolute top-3 right-10 text-lg font-bold text-black z-50">
              {muted ? (
                <div className="w-8">
                  <Tooltip
                    title="Unmute Sound"
                    placement="left"
                    color={"rgba(90, 90, 90, 0.7)"}
                  >
                    <div className="text-xl font-bold">&nbsp;</div>
                    <img
                      className="z-50 cursor-pointer"
                      src={muteImg}
                      alt="mute logo"
                      onClick={() => {
                        setMuted(false);
                      }}
                    />
                    <div className="text-xl font-bold">&nbsp;</div>
                  </Tooltip>
                </div>
              ) : (
                <div className="w-8">
                  <Tooltip
                    title="Mute Sound"
                    placement="left"
                    color={"rgba(90, 90, 90, 0.7)"}
                  >
                    <div className="text-xl font-bold">&nbsp;</div>
                    <img
                      className="z-50 cursor-pointer"
                      src={unmuteImg}
                      onClick={() => {
                        setMuted(true);
                      }}
                      alt="unmute logo"
                    />
                    <div className="text-xl font-bold">&nbsp;</div>
                  </Tooltip>
                </div>
              )}
            </div>

            <div className="bg-white absolute right-0 h-full">
              <div className="w-[100px] flex flex-col justify-between left_bar">
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div className="mb-9 -rotate-90 flex justify-center items-center">
                  <a
                    href="#start-project"
                    className="uppercase whitespace-nowrap font-semibold text-xl leading-[175%] font_primary mr-4"
                  >
                    start project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="absolute bottom-0 z-50 w-full h-10 bg-white"></div>

        {loader ? (
          <div className="w-11/12 min-h-screen flex flex-col justify-center items-center absolute top-0 left-10 bg-black backdrop-blur-md bg-opacity-80">
            <Lottie
              className="w-1/6 mx-auto"
              animationData={loaderFile}
              loop={true}
            />
            <div className="font_title text-3xl font-semibold text-white">
              Loading...
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default BlogDetailsLayout;
