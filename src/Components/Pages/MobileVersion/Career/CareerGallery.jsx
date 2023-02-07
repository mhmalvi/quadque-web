import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import { Helmet } from "react-helmet";
import Career from "./Career.json";
import Interface from "../../../../asstes/Images/advertise.png";

const CareerGallery = () => {
  //const [Career] = useCareer();
  const [totalPosts, setTotalPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [PostsPerPage] = useState(4);
  const [loader, setLoader] = useState(true);
  console.log("all career", Career);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTotalPosts(Career.length);
  }, [Career]);

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
  const currentPosts = Career?.slice(indexOfFirstPost, indexOfLastPost);

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
        <div className="w-full h-full z-50 flex flex-col justify-center items-center m-auto absolute bg-black backdrop-blur-md">
          <Lottie
            className="w-1/2 mx-auto"
            animationData={loaderFile}
            loop={true}
          />

          <div className="font_title text-white animate-pulse">Loading...</div>
        </div>
      ) : null}
      <div className="text-3xl text-white mt-30 px-6 pb-4 font_primary">
        Current Job Openings
      </div>
      <div className="Career w-full min-h-[900px] px-6 font_primary">
        {currentPosts?.map((details) => (
          <div
            key={details.id}
            className="rounded-xl mx-auto pb-6 relative"
          >
            {/* <img
              src={process.env.REACT_APP_ASSETS_URL + "/" + details.thumbnail}
              alt=""
              className="w-[100%] h-[185px] m-auto rounded-lg"
            /> */}
            <img src={Interface} alt="" className="rounded-lg"/>
            <div className="flex items-center justify-between pb-2 px-2 gap-4">
              <div>
                <h1 className="text-lg text-white pt-4">{details.position}</h1>
                <div className="text-white text-sm italic font-thin">
                  deadline: {details.app_deadline}
                </div>
              </div>
              <Link to={`/career-detail/${details.id}`}>
                <div className="h-8 bg-white my-2 px-4 rounded-full text-sm text-center flex items-center cursor-pointer">
                  View
                </div>
              </Link>
            </div>
            {/* <div dangerouslySetInnerHTML={{ __html: details.text }} className="text-white"></div> */}
          </div>
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
