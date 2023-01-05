import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { handleFetchBlogById } from "../../../Shared/services";
import useBlogs from "../../../Shared/Hooks/useBlog";
import Icons from "../../../Shared/Icons";

const BlogDetail = () => {
  const navigate = useNavigate()
  const [allBlogs] = useBlogs();
  const { id } = useParams();
  const [blogData, setBlogData] = useState();
  const [randomBlogData, setRandomBlogData] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchBlog = await handleFetchBlogById(id);
      setBlogData(fetchBlog);
      //console.log("blog data", blogData);
    })();
  }, [randomBlogData]);
  
  useEffect(() => {
    const NextBlogs = [];
    let currentBlogid = id;
    let i;
    
    let currentBlogIndex = allBlogs?.findIndex(x => x.id == currentBlogid);
    let nextBlogIndex = currentBlogIndex;
    //console.log("index", currentBlogIndex);
    for( i=0; i<4; i++ ){
      if(nextBlogIndex < allBlogs.length-1){
        nextBlogIndex++;
        //console.log("index", nextBlogIndex);
        NextBlogs.push(allBlogs[nextBlogIndex]);
        //console.log("Array", NextBlogs);
      }else{
        nextBlogIndex = 0;
        NextBlogs.push(allBlogs[nextBlogIndex]);
      } 
      setRandomBlogData(NextBlogs);
    } 
  }, [id, allBlogs])

  return (
    <div className="w-full pt-30">
      <img src={blogData?.thumbnail} alt="" className="absolute top-0 z-[-10] w-full h-81"/>
      <div className="flex items-end h-56 bg-gradient-to-b from-transparent to-black text-2xl text-white px-6 pb-10">{blogData?.title}</div>
        <div className="px-6">
          <div className="text-white text-sm pt-2" dangerouslySetInnerHTML={{ __html: blogData?.text }}></div>
        </div>
        <Link to={`/blogs`}>
          <div className="flex justify-center text-white text-justify py-2 my-5"><Icons.GoBackArrow width={20} className="mx-3 go-back-arrow"/> Go Back</div>
        </Link>

        
      {/* RANDOM BLOGS SUGGESTION SECTION */}
      <div className="px-6">
        <div className="text-zinc-500 text-2xl pb-5">Other interesting posts</div>
        <div className="flex flex-wrap justify-center gap-10">
          {randomBlogData?.map((post) =>
          // <Link to={`blog/${post?.id}`}>
          
          <div onClick={() => navigate(`../blogs/blog-detail/${post.id}`, { replace: true })} key={post?.id} className="w-32">
            <img src={post?.thumbnail} alt="" className="w-36 h-36 rounded-lg mb-2"/>
            <div className="text-white">{post?.title}</div>
            <div className=" text-white text-sm">{post?.created_at.split("T", 1)}</div>
          </div>
          // </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
