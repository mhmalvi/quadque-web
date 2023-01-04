import { useState, useEffect } from "react";
import { handleFetchBlogs } from "../services";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await handleFetchBlogs();
      if (response) {
        setBlogs(response);
      }
    })();
  }, []);

  return [blogs, setBlogs];
};

export default useBlogs;