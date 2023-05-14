import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectToSitemapIndex = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.location.replace("https://www.quadque.tech/sitemap_index.xml");
  }, [navigate]);
  return;
};

export default RedirectToSitemapIndex;
