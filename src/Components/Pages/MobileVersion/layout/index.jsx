import React from "react";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import Services from "../Service/Services";
import OurCustomer from "./OurCustomer";
import CaseStudy from "../Case_Study/CaseStudy";
import ClientSpeaks from "./ClientSpeaks";
import OurTeam from "./OurTeam";
import Aboutus from "./Aboutus";
import FAQ from "../faq/FAQ";
import StartProject from "./StartProject";
import Footer from "./Footer";
import BlogGallery from "../Blog/BlogGallery";
import BlogDetail from "../Blog/BlogDetail";
import ServiceDetails from "../Service/ServiceDetails";
import CaseStudyDetail from "../Case_Study/CaseStudyDetail";
import Gallery from "../Gallery";

const Layout = () => {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="main">
        <NavigationBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Services />
                <OurCustomer />
                <CaseStudy />
                <ClientSpeaks />
                <Aboutus />
                <OurTeam />
                <StartProject />
              </>
            }
          />
          <Route path="/blogs" element={<BlogGallery />} />
          <Route path={"blogs/blog-detail/:slug"} element={<BlogDetail />} />
          <Route path={"services/:slug"} element={<ServiceDetails />} />
          <Route path={"case-study/:slug"} element={<CaseStudyDetail />} />
          <Route path={"gallery"} element={<Gallery />} />
          <Route path={"faq"} element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
