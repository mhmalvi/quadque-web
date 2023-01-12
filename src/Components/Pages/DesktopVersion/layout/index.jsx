import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogDetailsLayout from "../Blogs/BlogDetails/BlogDetailsLayout";
import CaseStudyDetailsLayout from "../CaseStudy/CaseStudyDetails/CaseStudyDetailsLayout";
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
      </Routes>
    </div>
  );
};

export default Layout;
