import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
import CareerGallery from "../Career/CareerGallery";
import CareerDetail from "../Career/CareerDetail";
import NotFound from "../NotFound";
// import FooterWhite from "./FooterWhite";
// import NavigationBarBlack from "./NavigationBarBlack";

const Layout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <Aboutus />
                <OurCustomer />
                <CaseStudy />
                <ClientSpeaks />
                <OurTeam />
                <StartProject />
              </>
            }
          />
          <Route
            path="/blog"
            element={
              <>
                <BlogGallery />
              </>
            }
          />
          <Route
            path={"blog/:slug"}
            element={
              <>
                <BlogDetail />
              </>
            }
          />
          <Route
            path={"services/:slug"}
            element={
              <>
                <ServiceDetails />
              </>
            }
          />
          <Route
            path={"case-study/:slug"}
            element={
              <>
                <CaseStudyDetail />
              </>
            }
          />
          <Route
            path={"gallery"}
            element={
              <>
                <Gallery />
              </>
            }
          />
          <Route
            path={"faq"}
            element={
              <>
                <FAQ />
              </>
            }
          />
          <Route
            path={"career"}
            element={
              <>
                <CareerGallery />
              </>
            }
          />
          <Route
            path={"career-detail/:id"}
            element={
              <>
                <CareerDetail />
              </>
            }
          />
          <Route
            path={"404"}
            element={
              <>
                <NotFound />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
