import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import useBlogs from "../../../../Shared/Hooks/useBlog";
import Icons from "../../../../Shared/Icons";

const BlogsGalary = ({ setLoader }) => {
  const navigate = useNavigate();
  const blogdetailsRef = useRef();
  const [blogs] = useBlogs();

  console.log(blogs);

  useEffect(() => {
    if (blogs?.length) {
      setLoader(false);
    }
  }, [blogs, setLoader]);

  const handleBlogNavigation = (blogSlug) => {
    navigate(`../blog/${blogSlug}`, { replace: true });

    setTimeout(() => {
      blogdetailsRef.current.scrollTo(0, 0);
    }, 1000);
  };

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

      <div
        className="min-h-full bg-black text-white py-20 px-36 h-[90vh] overflow-y-auto font_primary"
        ref={blogdetailsRef}
      >
        <div className="mb-10">
          <Icons.GoBackArrow
            className="w-6 font-semibold cursor-pointer"
            onClick={() => {
              navigate(`../#blogs`, { replace: true });
            }}
          />
        </div>

        <div className="mx-36">
          <div className="py-11 mb-8">
            <h1 className="text-[32px]">Some Recent Interesting Posts</h1>
          </div>

          {blogs?.map((blog, i) => (
            <a
              href={`${window.location.origin}/blog/${blog?.slug}`}
              target="_blank"
              rel="noreferrer"
              key={i}
            >
              <div className="flex justify-between items-center my-4 cursor-pointer">
                <div className="lg:max-w-md xl:max-w-xl 2xl:max-w-4xl">
                  <div className="text-sm font-normal leading-4">
                    <span className="uppercase">Weekly updates</span>{" "}
                    <span className="font-medium ml-2">
                      {new Date(blog?.created_at).toString().slice(0, 15)}
                    </span>
                  </div>
                  <div className="mt-8 h-19 overflow-hidden">
                    <h2 className="text-[28px] font-normal leading-9">
                      {blog?.title}
                    </h2>
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
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogsGalary;
