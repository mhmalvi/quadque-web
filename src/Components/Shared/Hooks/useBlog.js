import { useState, useEffect } from "react";
import { handleFetchBlogs } from "../services";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await handleFetchBlogs();
      if (response?.status === 200) {
        setBlogs(response?.data);
      } else {
        console.log("Something went wrong in Blogs.");
      }
    })();
  }, []);

  return [blogs, setBlogs];
};

export default useBlogs;
