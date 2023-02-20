import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Sitemap from "../../Sitemap/Sitemap";
import BlogsLayout from "../Blogs/AllBlog/BlogsLayout";
import BlogDetailsLayout from "../Blogs/BlogDetails/BlogDetailsLayout";
import CareerDetailsLayout from "../Careers/CareerDetails/CareerDetailsLayout";
import CareerLayout from "../Careers/CareerLayout";
import CaseStudyDetailsLayout from "../CaseStudy/CaseStudyDetails/CaseStudyDetailsLayout";
import FaqLayout from "../FAQ/FaqLayout";
import GalleryLayout from "../Gallery/GalleryLayout";
import ServiceDetailsLayout from "../Services/ServiceDetails/ServiceDetailsLayout";
import DesktopLayout from "./DesktopLayout";
import NotFound from "../NotFound";

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
          path="case-study/:slug"
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

        <Route
          path="career"
          element={
            <>
              <CareerLayout />
            </>
          }
        />

        <Route
          path="career-detail/:id"
          element={
            <>
              <CareerDetailsLayout />
            </>
          }
        />

        <Route
          path="gallery"
          element={
            <>
              <GalleryLayout />
            </>
          }
        />

        <Route
          path="sitemap"
          element={
            <>
              <Sitemap />
            </>
          }
        />
        <Route path={"404"} element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
};

export default Layout;
