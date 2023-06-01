import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate, useParams } from "react-router-dom";
import loaderFile from "../../../../assets/Lotties/loader.json";
import useBlogs from "../../../Shared/Hooks/useBlog";
import Icons from "../../../Shared/Icons";
import { handleFetchBlogBySlug } from "../../../Shared/services";
import "../MobileView.css";

const BlogDetail = () => {
  const navigate = useNavigate();
  const [allBlogs] = useBlogs();
  const { slug } = useParams();
  const [blogData, setBlogData] = useState();
  const [randomBlogData, setRandomBlogData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.location.href = `${process.env.REACT_APP_APP_CLIENT_URL}/blogs/${slug}`;
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setLoader(true);
    (async () => {
      const fetchBlog = await handleFetchBlogBySlug(slug);

      if (fetchBlog.status === 200) {
        setTimeout(() => {
          setLoader(false);
          setBlogData(fetchBlog?.data);
        }, 2000);
      } else {
        navigate("/404");
      }
    })();
  }, [randomBlogData, slug]);

  useEffect(() => {
    const NextBlogs = [];
    let currentBlogid = slug;
    let i;

    let currentBlogIndex = allBlogs?.findIndex((x) => x.id === currentBlogid);
    let nextBlogIndex = currentBlogIndex;
    for (i = 0; i < 4; i++) {
      if (nextBlogIndex < allBlogs.length - 1) {
        nextBlogIndex++;
        NextBlogs.push(allBlogs[nextBlogIndex]);
      } else {
        nextBlogIndex = 0;
        NextBlogs.push(allBlogs[nextBlogIndex]);
      }
      setRandomBlogData(NextBlogs);
    }
  }, [allBlogs]);

  return (
    <>
      {/* For SEO purpose */}
      {/* Meta Keywords */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${blogData?.title} – Quadque Tech`}</title>
        <meta name="keywords" content={blogData?.meta_keyword} />
        <meta name="description" content={blogData?.meta_description} />
      </Helmet>

      {loader ? (
        <div className="w-full h-full z-40 flex flex-col justify-center items-center m-auto absolute top-0 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm">
          <Lottie
            className="w-1/2 mx-auto"
            animationData={loaderFile}
            loop={true}
          />

          <div className="font_title text-white animate-pulse">Loading...</div>
        </div>
      ) : null}

      <div
        className={`w-full pt-20 font_primary bg-black ${
          !blogData ? "scale-0" : ""
        } `}
      >
        {/* <div className="w-full h-[5.75rem] bg-black absolute top-0"></div> */}
        <img
          src={process.env.REACT_APP_ASSETS_URL + "/" + blogData?.thumbnail}
          alt="Thumbnail"
          className="w-full"
        />
        <div className="px-6 pb-10 text-white">
          <div className="text-2xl">
            {/* <h1 className="font_title text-shadow">{blogData?.title}</h1> */}
            <div className="text-sm">
              -By <span className="font-semibold ml-1">{blogData?.author}</span>
            </div>
            <div className="text-sm">{blogData?.created_at.split("T", 1)}</div>
          </div>
        </div>
        <div className="px-6">
          {/* <div className="bestforyou text-white pt-2" dangerouslySetInnerHTML={{ __html: blogData?.text }}></div> */}
          <div
            className="BlogDetail text-white pt-2"
            dangerouslySetInnerHTML={{ __html: blogData?.text }}
          ></div>
        </div>
        <Link to={`/blog`}>
          <div className="w-44 flex justify-center bg-black text-white py-2 my-10 mx-auto px-6 spirit-bomb rounded-full relative z-50 font_title">
            <Icons.GoBackArrow
              width={20}
              className="mx-3 go-back-arrow whitespace-nowrap"
            />
            Go Back
          </div>
        </Link>

        {/* RANDOM BLOGS SUGGESTION SECTION */}
        <div className="px-6">
          <div className="text-zinc-500 text-2xl pb-5">
            Other interesting posts
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {randomBlogData?.map(
              (post) => (
                // <Link to={`blog/${post?.id}`}>

                <div
                  onClick={() => {
                    navigate(`../blog/${post.slug}`, {
                      replace: true,
                    });
                    window.scrollTo(0, 0);
                  }}
                  key={post?.id}
                  className="w-32 pb-5"
                >
                  <img
                    src={
                      process.env.REACT_APP_ASSETS_URL + "/" + post?.thumbnail
                    }
                    alt="Thumbnail"
                    className="w-36 h-36 rounded-lg mb-2"
                  />
                  <div className="text-white leading-5">{post?.title}</div>
                  <div className=" text-white text-xs">
                    {post?.created_at.split("T", 1)}
                  </div>
                </div>
              )
              // </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
