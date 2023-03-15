import { Pagination } from "antd";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Fade } from "react-reveal";
import { Link, useNavigate } from "react-router-dom";
import useBlogs from "../../../Shared/Hooks/useBlog";
import Icons from "../../../Shared/Icons";
import careerData from "../../MobileVersion/Career/Career.json";

const Career = ({ setLoader }) => {
  const navigate = useNavigate();
  const [allBlogs] = useBlogs();
  const [totalPosts, setTotalPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [PostsPerPage] = useState(8);
  // const [loader, setLoader] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTotalPosts(careerData.length);
  }, [allBlogs]);

  const indexOfLastPost = currentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const currentPosts = allBlogs?.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    if (currentPosts !== "") {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setLoader(false);
      }, 3000);
    }
  }, [currentPosts, setLoader]);

  return (
    <>
      {/* For SEO purpose */}
      {/* Meta Keywords */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Career - Get The Best Online IT Services for Business - Quadque`}</title>
        <meta
          name="description"
          content="Do you have the skills to help us make a more significant impact on the IT
industry? Want to join our team and contribute your expertise? If so, let's get
in touch!"
        />
      </Helmet>

      <div className="min-h-full bg-black text-white py-20 px-36 h-[90vh] overflow-y-auto font_primary">
        <div className="mb-10">
          <Icons.GoBackArrow
            className="w-6 font-semibold cursor-pointer"
            onClick={() => {
              navigate(`../#contacts`, { replace: true });
            }}
          />
        </div>
        <div className="text-3xl text-white mt-10 px-6 pb-14 font_title">
          Current Job Openings
        </div>
        <Fade left cascade>
          <div className="Blog w-full px-6 grid grid-cols-3 2xl:grid-cols-4 gap-8 justify-center items-stretch">
            {careerData?.map((details) => (
              <Link key={details.id} to={`/career/${details.slug}`}>
                <div className="rounded-xl mx-auto pb-6 relative bg-white bg-opacity-20 hover:bg-opacity-25 backdrop-filter backdrop-blur-xl p-1 scale-100 transition delay-200 hover:scale-105 hover:delay-300 hover:transition">
                  <img
                    // src={
                    //   process.env.REACT_APP_ASSETS_URL + "/" + details.thumbnail
                    // }
                    src={details.thumbnail}
                    alt="Job Thumbnail"
                    className="w-full h-60 m-auto rounded-lg"
                  />
                  <div className="flex justify-between pb-2 px-2 mt-4 gap-4 h-14">
                    <div>
                      <h1 className="text-lg text-white font-semibold">
                        {details.position}
                      </h1>
                      {details.app_deadline ? (
                        <div className="text-white text-sm italic font-thin">
                          deadline: {details.app_deadline}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  {/* <div dangerouslySetInnerHTML={{ __html: details.text }} className="text-white"></div> */}
                </div>
              </Link>
            ))}
          </div>
        </Fade>

        {/* PAGINATION */}
        <div className="career_desktop flex justify-center mt-20 mb-14">
          <Pagination
            onChange={(value) => setCurrentPage(value)}
            pageSize={PostsPerPage}
            current={currentPage}
            total={totalPosts}
            showTitle={true}
            className="text-4xl"
          />
        </div>
      </div>
    </>
  );
};

export default Career;
