import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RedirectToSitemapIndex from "../../Sitemap/RedirectToSitemapIndex";
import Sitemap from "../../Sitemap/Sitemap";
import SitemapBuilder from "../../Sitemap/SitemapBuilder";
import CaseStudyDetailsLayout from "../CaseStudy/CaseStudyDetails/CaseStudyDetailsLayout";
import FaqLayout from "../FAQ/FaqLayout";
import GalleryLayout from "../Gallery/GalleryLayout";
import NotFound from "../NotFound";
import ProductDetailsLayout from "../Products/ProductDetials/ProductDetailsLayout";
import ProductsLayout from "../Products/ProductsLayout";
import ServiceDetailsLayout from "../Services/ServiceDetails/ServiceDetailsLayout";
import ServicesLayout from "../Services/ServicesLayout";
import DesktopLayout from "./DesktopLayout";
import BlogsLayout from "../Blogs/AllBlog/BlogsLayout";
import BlogDetailsLayout from "../Blogs/BlogDetails/BlogDetailsLayout";
import CareerLayout from "../Careers/CareerLayout";
import CareerDetailsLayout from "../Careers/CareerDetails/CareerDetailsLayout";

const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DesktopLayout />} />
        <Route path="services" element={<ServicesLayout />} />
        <Route path="services/:slug" element={<ServiceDetailsLayout />} />
        <Route path="blogs" element={<BlogsLayout />} />
        <Route path="blog/:slug" element={<BlogDetailsLayout />} />
        <Route path="career" element={<CareerLayout />} />
        <Route path="career/:slug" element={<CareerDetailsLayout />} />
        <Route path="case-study/:slug" element={<CaseStudyDetailsLayout />} />
        <Route path="faq" element={<FaqLayout />} />
        <Route path="products" element={<ProductsLayout />} />
        <Route path="products/:slug" element={<ProductDetailsLayout />} />
        <Route path="gallery" element={<GalleryLayout />} />
        <Route path="sitemap" element={<Sitemap />} />
        <Route path="build-sitemap" element={<SitemapBuilder />} />
        <Route path="sitemap.xml" element={<RedirectToSitemapIndex />} />
        <Route path={"404"} element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </div>
  );
};

export default Layout;
