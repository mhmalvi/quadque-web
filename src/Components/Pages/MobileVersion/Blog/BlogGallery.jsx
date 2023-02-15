import React, { useState, useEffect } from "react";
import useBlogs from "../../../Shared/Hooks/useBlog";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import { Helmet } from "react-helmet";

const BlogGallery = () => {
  const [allBlogs] = useBlogs();
  const [totalPosts, setTotalPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [PostsPerPage] = useState(4);
  const [loader, setLoader] = useState(true);
  //console.log("all blogs", allBlogs);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTotalPosts(allBlogs.length);
  }, [allBlogs]);

  useEffect(() => {
    if (currentPosts !== "") {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    } else {
      setTimeout(() => {
        setLoader(false);
      }, 5000);
    }
  }, []);

  const indexOfLastPost = currentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const currentPosts = allBlogs?.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      {/* For SEO purpose */}
      {/* Meta Keywords */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Blog - Get The Best Online IT Services for Business - Quadque`}</title>
        <meta
          name="description"
          content="Look at our informative blogs, where we discuss various interesting topics related to the IT industry, such as website development , UI/UX design and digital marketing and so on."
        />
      </Helmet>

      <div className="Blog w-full mt-30 font_primary">
        {currentPosts.length === 0 && <div className="text-white text-center">No blogs to show.</div>}
        {loader ? (
          <div className="w-full min-h-[100vh] z-50 flex flex-col justify-center items-center m-auto absolute top-0 bg-gradient-to-b from-black via-transparent to-black backdrop-blur-sm">
            <Lottie
              className="w-1/2 mx-auto"
              animationData={loaderFile}
              loop={true}
            />

            <div className="font_title text-white animate-pulse">
              Loading...
            </div>
          </div>
        ) : null}
        {currentPosts?.map((details) => (
          <Link to={`/blog/${details?.slug}`}>
            <div key={details?.id} className="rounded-xl relative mb-8 mx-6">
              <img
                src={
                  process.env.REACT_APP_ASSETS_URL + "/" + details?.thumbnail
                }
                alt=""
                className="w-full h-full m-auto rounded-lg"
              />
              <div className="w-full flex justify-end items-end h-32 absolute bottom-0 bg-gradient-to-b from-transparent to-black z-10 px-2 text-end">
                <div>
                  {/* <div className="text-lg text-white font_shadow">
                    {details.title}
                  </div> */}
                  <div className="w-full text-white font_shadow text-sm flex justify-end items-end text-end">
                    By <span className="font-semibold ml-1">{details?.author}</span>
                  </div>
                  <div className="text-white text-sm">
                    {details?.created_at.split("T", 1)}
                  </div>
                </div>
              </div>
              {/* <div dangerouslySetInnerHTML={{ __html: details.text }} className="text-white"></div> */}
            </div>
          </Link>
        ))}
      </div>
      {/* PAGINATION */}
      <div className="Blog flex justify-center mt-5">
        <Pagination
          onChange={(value) => setCurrentPage(value)}
          pageSize={PostsPerPage}
          current={currentPage}
          total={totalPosts}
          className="text-xl"
        />
      </div>
    </>
  );
};

export default BlogGallery;
