import React, { useState, useEffect } from "react";
import { handleFetchBlogs } from "../../../Shared/services";
import useBlogs from "../../../Shared/Hooks/useBlog";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

const BlogGallery = () => {
  const [allBlogs] = useBlogs();
  const [blogData, setBlogData] = useState([]);
  const [totalPosts, setTotalPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [PostsPerPage] = useState(4);

  useEffect(() => {
    setTotalPosts(allBlogs.length);
  }, [allBlogs]);

  const indexOfLastPost = currentPage * PostsPerPage;
  const indexOfFirstPost = indexOfLastPost - PostsPerPage;
  const currentPosts = allBlogs?.slice(indexOfFirstPost, indexOfLastPost);

  return (
  <div className="Blog w-full h-full mt-30 px-6">
    {currentPosts?.map((details)=> 
    <Link to={`blog-detail/${details.id}`}>
    <div key={details.id} className="rounded-xl mx-auto">
      <img src={details.thumbnail} alt="" className="w-[100%] h-[185px] m-auto"/>
      <div className="flex items-end h-10 relative -top-10 bg-gradient-to-b from-transparent to-black z-10 pb-5 px-2">
        <div className=" text-white">{details.title}
        <div className=" text-white text-sm">{details.created_at.split("T", 1)}</div>      
        </div>  
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: details.text }} className="text-white"></div> */}
     </div>
    </Link>
    )}
    {/* PAGINATION */}
    <div className="flex justify-center mt-5">
      <Pagination onChange={(value => setCurrentPage(value))} pageSize={PostsPerPage} current={currentPage} total={totalPosts} className="flex text-xl gap-5"/>
    </div>
  </div>
  );
};

export default BlogGallery;
