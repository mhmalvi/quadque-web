import React, { useState, useEffect } from "react";
import useBlogs from "../../../Shared/Hooks/useBlog";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import { Helmet } from "react-helmet";

const CareerGallery = () => {
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
      }, 3000);
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

      {loader ? (
        <div className="w-full h-[100vh] z-40 flex flex-col justify-center items-center m-auto absolute bg-black backdrop-blur-md">
          <Lottie
            className="w-1/2 mx-auto"
            animationData={loaderFile}
            loop={true}
          />

          <div className="font_title text-white animate-pulse">Loading...</div>
        </div>
      ) : null}
      <div className="text-3xl text-white mt-30 px-6 pb-4">Current Job Openings</div>
      <div className="Blog w-full h-[1000px] px-6">
        {currentPosts?.map((details) => (
          <Link to={`blog-detail/${details.slug}`}>
            <div key={details.id} className="rounded-xl mx-auto">
              <img
                src={process.env.REACT_APP_ASSETS_URL + "/" + details.thumbnail}
                alt=""
                className="w-[100%] h-[185px] m-auto rounded-lg"
              />
              <div className="pb-2 px-2">
                <div>
                  <h1 className="text-xl text-white">{details.title}</h1>
                  <div className="text-white text-sm">
                    deadline: {details.created_at.split("T", 1)}
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

export default CareerGallery;
