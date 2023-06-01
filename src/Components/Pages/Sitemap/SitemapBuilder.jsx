import { saveAs } from "file-saver";
import React, { useEffect, useState } from "react";
import useBlogs from "../../Shared/Hooks/useBlog";
import useCaseStudy from "../../Shared/Hooks/useCaseStudy";
import useServices from "../../Shared/Hooks/useServices";
import careerData from "../../Pages/MobileVersion/Career/Career.json";

const SitemapBuilder = () => {
  const [blogs] = useBlogs();
  const [caseStudy] = useCaseStudy();
  const [services] = useServices();
  const [data, setData] = useState("");
  const date = new Date();

  useEffect(() => {
    let sitemapData = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url>
<loc>https://www.quadque.tech/</loc>
<priority>1.0</priority>
<changefreq>always</changefreq>
</url>
<url> <loc>https://www.quadque.tech/services</loc>
<priority>0.7</priority>
<lastmod>${date.getFullYear()}-${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}</lastmod>
</url>
<url> <loc>https://app.quadque.tech/career</loc>
<priority>0.7</priority>
<lastmod>${date.getFullYear()}-${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}</lastmod>
</url>
<url> <loc>https://www.quadque.tech/faq</loc>
<priority>0.3</priority>
<lastmod>${date.getFullYear()}-${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}</lastmod>
</url>
<url> <loc>https://app.quadque.tech/blogs</loc>
<priority>0.7</priority>
<lastmod>${date.getFullYear()}-${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}</lastmod>
</url>
<url> <loc>https://www.quadque.tech/gallery</loc>
<priority>0.2</priority>
<lastmod>${date.getFullYear()}-${
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1
    }-${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}</lastmod>
</url>`;

    blogs?.forEach((blog) => {
      sitemapData =
        sitemapData +
        `\n<url> <loc>https://app.quadque.tech/blogs/${blog?.slug}</loc>
        <priority>0.7</priority>
        <lastmod>${date.getFullYear()}-${
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1
        }-${
          date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
        }</lastmod>
        </url>`;
    });

    caseStudy?.forEach((study) => {
      sitemapData =
        sitemapData +
        `\n<url> <loc>https://www.quadque.tech/case-study/${study?.slug}</loc>
        <priority>0.7</priority>
        <lastmod>${date.getFullYear()}-${
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1
        }-${
          date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
        }</lastmod></url>`;
    });

    services?.forEach((service) => {
      sitemapData =
        sitemapData +
        `\n<url> <loc>https://www.quadque.tech/services/${service?.slug}</loc>
        <priority>0.7</priority>
        <lastmod>${date.getFullYear()}-${
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1
        }-${
          date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
        }</lastmod>
        </url>`;
    });

    careerData?.forEach((career) => {
      sitemapData =
        sitemapData +
        `\n<url> <loc>https://app.quadque.tech/career/${career?.slug}</loc>
        <priority>0.7</priority>
        <lastmod>${date.getFullYear()}-${
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1
        }-${
          date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
        }</lastmod>
        </url>`;
    });

    setData(sitemapData + "\n</urlset>");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogs, caseStudy, services]);

  const handleClick = () => {
    const blob = new Blob([data?.replace(",", "\n")], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "sitemap_index.xml");
  };

  // writeFile("build/sitemap_index.xml", data, (err) => {
  //   if (err) throw err;
  //   console.log("File has been saved!");
  // });

  return (
    <div>
      <h1>SitemapBuilder</h1>
      {blogs?.length && services?.length && caseStudy?.length ? (
        <button className="px-8 py-4 bg-white text-black" onClick={handleClick}>
          Download Sitemap
        </button>
      ) : (
        <div className="text-white text-xl">Loading...</div>
      )}
    </div>
  );
};

export default SitemapBuilder;
