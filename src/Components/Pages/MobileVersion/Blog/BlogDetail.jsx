import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { handleFetchBlogBySlug } from "../../../Shared/services";
import useBlogs from "../../../Shared/Hooks/useBlog";
import Icons from "../../../Shared/Icons";
import { message } from "antd";
import Lottie from "lottie-react";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import "../MobileView.css";

const BlogDetail = () => {
  const navigate = useNavigate();
  const [allBlogs] = useBlogs();
  const { slug } = useParams();
  const [blogData, setBlogData] = useState();
  const [randomBlogData, setRandomBlogData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    (async () => {
      const fetchBlog = await handleFetchBlogBySlug(slug);
      console.log("fetch", fetchBlog);
      if (fetchBlog.status === 200) {
        setTimeout(() => {
          setLoader(false);
          setBlogData(fetchBlog?.data);
        }, 3000);
      } else {
        message.error(fetchBlog.message);
      }
      //console.log("blog data", blogData);
    })();
  }, [randomBlogData, slug]);

  useEffect(() => {
    const NextBlogs = [];
    let currentBlogid = slug;
    let i;

    let currentBlogIndex = allBlogs?.findIndex((x) => x.id === currentBlogid);
    let nextBlogIndex = currentBlogIndex;
    //console.log("index", currentBlogIndex);
    for (i = 0; i < 4; i++) {
      if (nextBlogIndex < allBlogs.length - 1) {
        nextBlogIndex++;
        //console.log("index", nextBlogIndex);
        NextBlogs.push(allBlogs[nextBlogIndex]);
        //console.log("Array", NextBlogs);
      } else {
        nextBlogIndex = 0;
        NextBlogs.push(allBlogs[nextBlogIndex]);
      }
      setRandomBlogData(NextBlogs);
    }
  }, [slug, allBlogs]);

  return (
    <>
      {/* For SEO purpose */}
      {/* Meta Keywords */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Blog - ${blogData?.title} – Quadque Tech`}</title>
        <meta name="keywords" content={blogData?.meta_keyword} />
      </Helmet>

      {loader ? (
        <div className="w-full h-full z-40 flex flex-col justify-center items-center m-auto absolute bg-black backdrop-blur-md">
          <Lottie
            className="w-1/2 mx-auto"
            animationData={loaderFile}
            loop={true}
          />

          <div className="font_title text-white animate-pulse">Loading...</div>
        </div>
      ) : null}

      <div
        className={`w-full pt-30 font_primary ${!blogData ? "scale-0" : ""} `}
      >
        <img
          src={process.env.REACT_APP_ASSETS_URL + "/" + blogData?.thumbnail}
          alt=""
          className="absolute top-0 z-[-10] w-full h-81"
        />
        <div className="flex items-end h-56 bg-gradient-to-b from-transparent to-black px-6 pb-10">
          <div className="text-2xl text-white">
            <h1 className="font_title">{blogData?.title}</h1>
            <div className="text-white text-sm">By {blogData?.author}</div>
          </div>
        </div>
        <div className="px-6">
          {/* <div className="bestforyou text-white pt-2" dangerouslySetInnerHTML={{ __html: blogData?.text }}></div> */}
          <div
            className="BlogDetail text-white pt-2"
            dangerouslySetInnerHTML={{ __html: blogData?.text }}
          ></div>
        </div>
        <Link to={`/blogs`}>
          <div className="w-44 flex justify-center border bg-black text-white py-2 my-10 mx-auto px-6 spirit-bomb rounded-full relative z-50">
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
                  onClick={() =>
                    navigate(`../blogs/blog-detail/${post.slug}`, {
                      replace: true,
                    })
                  }
                  key={post?.id}
                  className="w-32"
                >
                  <img
                    src={
                      process.env.REACT_APP_ASSETS_URL + "/" + post?.thumbnail
                    }
                    alt=""
                    className="w-36 h-36 rounded-lg mb-2"
                  />
                  <div className="text-white">{post?.title}</div>
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
