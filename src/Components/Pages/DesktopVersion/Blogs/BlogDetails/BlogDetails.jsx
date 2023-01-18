import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router-dom";
import useBlogs from "../../../../Shared/Hooks/useBlog";
import { handleFetchBlogBySlug } from "../../../../Shared/services";
import loaderFile from "../../../../../asstes/Lotties/loader.json";
import Lottie from "lottie-react";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const blogdetailsRef = useRef();
  const [blogDetails, setBlogDetails] = useState();
  const [blogs] = useBlogs();
  const { id } = useParams();
  const [randomBlogData, setRandomBlogData] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      const blogDetails = await handleFetchBlogBySlug(slug);
      // console.log("blogDetails", blogDetails);
      if (blogDetails?.status === 200) {
        setBlogDetails(blogDetails?.data);
        setLoader(false);
      }
    })();
  }, [slug]);

  useEffect(() => {
    const NextBlogs = [];
    let currentBlogid = id;
    let i;

    let currentBlogIndex = blogs?.findIndex((x) => x.id === currentBlogid);
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
  }, [id, blogs]);

  const handleBlogNavigation = (blogSlug) => {
    navigate(`../blog/${blogSlug}`, { replace: true });

    setTimeout(() => {
      blogdetailsRef.current.scrollTo(0, 0);
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`Blog - ${blogDetails?.title}`}</title>
        <meta name="keywords" content={blogDetails?.meta_keyword} />
      </Helmet>
      <div
        className="blog_details min-h-full bg-black text-white py-20 px-36 font_anurati h-[90vh] overflow-y-auto font-poppins"
        ref={blogdetailsRef}
      >
        <div>
          <h4 className="text-sm font-normal leading-4 mb-3">
            {new Date(blogDetails?.created_at).toString().slice(0, 15)}
          </h4>
        </div>
        <div
          className="text-white blog_details_section"
          dangerouslySetInnerHTML={{ __html: blogDetails?.text }}
        ></div>
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
                  <img className="w-full h-full" src={blog?.thumbnail} alt="" />
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-500 bg-opacity-10" />
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          {!loader ? (
            <div className="w-10/12 z-50 min-h-screen flex justify-center items-center absolute top-20 left-0 bg-black backdrop-blur-md bg-opacity-80">
              <Lottie
                className="w-1/6 mx-auto"
                animationData={loaderFile}
                loop={true}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
