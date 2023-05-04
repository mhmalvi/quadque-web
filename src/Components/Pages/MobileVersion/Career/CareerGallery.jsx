import React, { useState, useEffect } from "react";
import { Pagination } from "antd";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import loaderFile from "../../../../asstes/Lotties/loader.json";
import { Helmet } from "react-helmet";
import Career from "./Career.json";
import { handleFetchCareerPosts } from "../../../Shared/services";


const CareerGallery = () => {
  const [allCareerPosts, setAllCareerPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [PostsPerPage] = useState(4);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    (async () => {
      const careerResp = await handleFetchCareerPosts();
      if (careerResp?.status === 200) {
        setAllCareerPosts(careerResp?.data);
      } else {
        setAllCareerPosts(Career);
      }
    })();
  }, []);

  useEffect(() => {
    if (allCareerPosts.length > 0) {
      setTimeout(() => {
        setLoader(false);
      }, 100);
    } else {
      setTimeout(() => {
        setLoader(false);
      }, 5000);
    }
  }, [allCareerPosts]);

  const indexOfLastPost = currentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const currentPosts = allCareerPosts
    ?.slice(indexOfFirstPost, indexOfLastPost)
    ?.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? 1 : -1))
    .reverse();

  return (
    <>
      {/* For SEO purpose */}
      {/* Meta Keywords */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Career - Get The Best Online IT Services for Business - Quadque`}</title>
        <meta
          name="description"
          content="Do you have the skills to help us make a more significant impact on the IT industry? Want to join our team and contribute your expertise? If so, let's get in touch!"
        />
      </Helmet>

      <div className="text-3xl text-white mt-30 px-6 pb-4 font_title">
        Current Job Openings
      </div>
      {currentPosts.length === 0 && (
        <div className="text-white text-center">No career posts to show.</div>
      )}
      {loader ? (
        <div className="w-full min-h-[100vh] z-50 flex flex-col justify-center items-center m-auto absolute bg-gradient-to-b from-black via-transparent to-black backdrop-blur-sm">
          <Lottie
            className="w-1/2 mx-auto"
            animationData={loaderFile}
            loop={true}
          />

          <div className="font_title text-white animate-pulse">Loading...</div>
        </div>
      ) : null}
      <div className="Career w-full font_primary">
        {currentPosts?.map((details, i) => (
          <Link key={i} to={`/career/${details.slug}`}>
            <div key={details.id} className="rounded-xl pb-6 relative mx-6">
              <img
                src={details.thumbnail}
                alt="Job Thumbnail"
                className="rounded-lg"
              />
              <div className="flex items-center justify-between pb-2 px-2 gap-4">
                <div>
                  <div className="text-lg text-white pt-4">
                    {/* Position: {details.position} */}
                    {details.position}
                  </div>
                  {details.app_deadline ? (
                    <div className="text-white text-sm italic font-thin">
                      deadline: {details.app_deadline}
                    </div>
                  ) : null}
                </div>
                {/* <div className="h-8 bg-white my-2 px-4 rounded-full text-sm text-center flex items-center cursor-pointer">
                  View
                </div> */}
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
          total={allCareerPosts?.length}
          className="text-xl"
        />
      </div>
    </>
  );
};

export default CareerGallery;
