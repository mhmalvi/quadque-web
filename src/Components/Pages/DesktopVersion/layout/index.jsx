import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogsLayout from "../Blogs/AllBlog/BlogsLayout";
import BlogDetailsLayout from "../Blogs/BlogDetails/BlogDetailsLayout";
import CaseStudyDetailsLayout from "../CaseStudy/CaseStudyDetails/CaseStudyDetailsLayout";
import FaqLayout from "../FAQ/FaqLayout";
import ServiceDetailsLayout from "../Services/ServiceDetails/ServiceDetailsLayout";
import DesktopLayout from "./DesktopLayout";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <DesktopLayout />
            </>
          }
        />
        <Route
          path="blogs"
          element={
            <>
              <BlogsLayout />
            </>
          }
        />
        <Route
          path="blog/:slug"
          element={
            <>
              <BlogDetailsLayout />
            </>
          }
        />
        <Route
          path="services/:slug"
          element={
            <>
              <ServiceDetailsLayout />
            </>
          }
        />
        <Route
          path="case-studies/:slug"
          element={
            <>
              <CaseStudyDetailsLayout />
            </>
          }
        />

        <Route
          path="faq"
          element={
            <>
              <FaqLayout />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default Layout;
